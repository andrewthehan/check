import { CreateMLCEngine, type ChatCompletionMessageParam, type MLCEngine } from '@mlc-ai/web-llm';
import { toast } from 'svelte-sonner';

let engine: MLCEngine | null = null;

export async function loadEngine(): Promise<MLCEngine> {
  return CreateMLCEngine('Llama-3.1-8B-Instruct-q4f32_1-MLC', {
    initProgressCallback: console.log
  });
}

export async function generateChecklistItems(name: string, count: number): Promise<string[]> {
  if (engine == null) {
    if (
      !confirm(
        'The first use of AI downloads a large model around 4.3 GB. Note that if you already downloaded the model, this should just pull from the cache. Are you sure you want to proceed?'
      )
    ) {
      toast.warning('Skipped AI generation.', {
        action: {
          label: 'OK',
          onClick: () => {}
        }
      });
      return [];
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
    engine = await loadEngine();
  }
  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: `
        You are a function that generates checklist items given a topic name and count of items to generate.
        Only respond with the items in a comma separated list format with no other text.
        Items should be simple and not long sentences.
        Capitalize the first letter of every item.
        Don't include the topic name itself as an item.
        Example: "Wallet,Glasses,Car keys,Phone"
      `
    },
    {
      role: 'user',
      content: `Generate a checklist of ${count} items for a checklist called ${name}.`
    }
  ];

  const reply = await engine.chat.completions.create({ messages });
  const content = reply.choices[0].message.content;
  const transformed = content?.split(',')?.map((name) => name.trim()) ?? [];
  return [...new Set(transformed)];
}
