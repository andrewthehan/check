import { CreateMLCEngine, type InitProgressCallback, type MLCEngine } from '@mlc-ai/web-llm';
import { Type } from '@sinclair/typebox';
import { toast } from 'svelte-sonner';
import type { Checklist } from '../model/Checklist';

let engine: MLCEngine | null = null;

export async function loadEngine(progressCallback: InitProgressCallback): Promise<MLCEngine> {
  return CreateMLCEngine('Llama-3.2-1B-Instruct-q4f32_1-MLC', {
    initProgressCallback: progressCallback
  });
}

export async function generateChecklist(
  name: string,
  count: number,
  progressCallback: InitProgressCallback
): Promise<Checklist> {
  if (engine == null) {
    if (
      !confirm(
        'The first use of AI downloads a large model around ~650 MB. Note that if you already downloaded the model, this should just pull from the cache. Are you sure you want to proceed?'
      )
    ) {
      toast.warning('Skipped AI generation.', {
        action: {
          label: 'OK',
          onClick: () => {}
        }
      });
      return {
        name,
        description: '',
        items: [],
        createDate: new Date(),
        updateDate: new Date()
      };
    }
    toast.success(
      'The first use of AI per session loads some models which may take a few minutes.',
      {
        action: {
          label: 'OK',
          onClick: () => {}
        }
      }
    );
    engine = await loadEngine(progressCallback);
  }

  const generator = await engine.chatCompletion({
    stream: false,
    messages: [
      {
        role: 'user',
        content: `
          I want to make a ${name} checklist.
          Please fill in the following information about this checklist in JSON format.
          Description is a string of a short but useful description of the checklist.
          Items is an array of ${count} unique nouns of things to bring that make up the checklist.
        `
      }
    ],
    max_tokens: 512,
    response_format: {
      type: 'json_object',
      schema: JSON.stringify(
        Type.Object({
          description: Type.String(),
          items: Type.Array(Type.String())
        })
      )
    }
  });

  const finalMessage = JSON.parse(await engine.getMessage());

  return {
    name,
    description: finalMessage.description,
    items: [...new Set(finalMessage.items as string[])].map((i) => ({
      name: i,
      completeDate: null
    })),
    createDate: new Date(),
    updateDate: new Date()
  };
}
