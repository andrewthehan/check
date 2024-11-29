import { toast } from 'svelte-sonner';
import type { Checklist } from '../model/Checklist';
import { LocalStore, localStore } from './localStore.svelte';
import { JSONSerializer } from './serializers';

export const CHECKLISTS_KEY = 'checklists';

const EXAMPLE_CHECKLIST: Checklist = {
  name: 'My first checklist',
  description: 'A simple checklist.',
  items: [
    {
      name: 'Create your first checklist',
      completeDate: new Date()
    },
    {
      name: 'Mark items as complete',
      completeDate: null
    },
    {
      name: 'Share your checklist with others',
      completeDate: null
    }
  ],
  createDate: new Date(),
  updateDate: new Date()
};

export function checklistsStore(): LocalStore<Checklist[]> {
  return localStore<Checklist[]>(CHECKLISTS_KEY, [EXAMPLE_CHECKLIST], new JSONSerializer());
}

export function exportData(): void {
  const checklists = getChecklists();
  if (checklists.length === 0) {
    toast.warning('No checklists to export.', {
      action: {
        label: 'OK',
        onClick: () => {}
      }
    });
    return;
  }
  const data = new Blob([JSON.stringify(checklists)], { type: 'application/json' });
  const url = URL.createObjectURL(data);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'checklists.json';
  a.click();
  URL.revokeObjectURL(url);
}

export function importData(file: File): Promise<Checklist[]> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const checklists = JSON.parse(reader.result as string) as Checklist[];
        const imported = checklists.filter((checklist) => {
          try {
            createChecklist(checklist);
            return true;
          } catch (e: any) {
            toast.warning(`Error importing checklist: ${e.message}`, {
              action: {
                label: 'OK',
                onClick: () => {}
              }
            });
            return false;
          }
        });
        resolve(imported);
      } catch (e: any) {
        toast.warning(`Error importing data: ${e.message}`, {
          action: {
            label: 'OK',
            onClick: () => {}
          }
        });
        resolve([]);
      }
    };
    reader.readAsText(file);
  });
}

export function getChecklists(): Checklist[] {
  const checklists = localStorage.getItem(CHECKLISTS_KEY);
  if (checklists == null) {
    return [];
  }

  return JSON.parse(checklists);
}

export function setChecklists(checklists: Checklist[]): void {
  localStorage.setItem(CHECKLISTS_KEY, JSON.stringify(checklists));
}

export function formatChecklist(checklist: Checklist): Checklist {
  return {
    name: checklist.name.trim(),
    description: checklist.description.trim(),
    items: [...new Set(checklist.items)].map((item) => ({
      name: item.name.trim(),
      completeDate: item.completeDate
    })),
    createDate: checklist.createDate,
    updateDate: checklist.updateDate
  };
}

export function checkIfCanCreate(checklistName: string) {
  const checklists = getChecklists();
  checklistName = checklistName.trim();
  if (checklists.some((c) => c.name.toLocaleUpperCase() === checklistName.toLocaleUpperCase())) {
    throw new Error(`Checklist ${checklistName} already exists`);
  }
}

export function createChecklist(checklist: Checklist): void {
  const checklists = getChecklists();
  checklist = formatChecklist(checklist);
  checkIfCanCreate(checklist.name);
  checklists.push(checklist);
  setChecklists(checklists);
}

export function updateChecklist(checklist: Checklist): void {
  const checklists = getChecklists();
  checklist = formatChecklist(checklist);
  const index = checklists.findIndex((c) => c.name === checklist.name);
  checklists[index] = checklist;
  setChecklists(checklists);
}

export function removeChecklist(checklistName: String): void {
  const checklists = getChecklists();
  checklistName = checklistName.trim();
  const index = checklists.findIndex((c) => c.name === checklistName);
  checklists.splice(index, 1);
  setChecklists(checklists);
}

export function parseFromQueryParams(searchParams: URLSearchParams): Checklist {
  return newChecklist({
    name: searchParams.get('name')?.trim() ?? '',
    description: searchParams.get('description')?.trim() ?? '',
    items:
      searchParams
        .get('items')
        ?.split(',')
        .map((i) => i.trim())
        .filter((i) => i.length > 0) ?? []
  });
}

export function newChecklist({
  name,
  description = '',
  items = []
}: {
  name: string;
  description?: string;
  items?: string[];
}): Checklist {
  return formatChecklist({
    name,
    description,
    items: [...new Set(items)].map((itemName) => ({ name: itemName, completeDate: null })),
    createDate: new Date(),
    updateDate: new Date()
  });
}

export function createShareLink(origin: string, checklist: Checklist): string {
  const searchParams = new URLSearchParams();
  checklist = formatChecklist(checklist);
  if (checklist.name.trim().length > 0) {
    searchParams.set('name', checklist.name);
  }
  if (checklist.description.trim().length > 0) {
    searchParams.set('description', checklist.description);
  }
  if (checklist.items.length > 0) {
    searchParams.set('items', checklist.items.map((item) => item.name).join(','));
  }

  return `${origin}/new?${searchParams.toString()}`;
}

export function getUrlEncodedChecklistName(checklistName: string): string {
  return encodeURIComponent(checklistName);
}
