import type { Checklist } from '../model/Checklist';
import { LocalStore, localStore } from './localStore.svelte';
import { JSONSerializer } from './serializers';

export const CHECKLISTS_KEY = 'checklists';

export function checklistsStore(): LocalStore<Checklist[]> {
  return localStore<Checklist[]>(CHECKLISTS_KEY, [], new JSONSerializer());
}

export function exportData(): void {
  const checklists = getChecklists();
  if (checklists.length === 0) {
    alert('No checklists to export');
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
            alert('Error importing checklist: ' + e.message);
            return false;
          }
        });
        resolve(imported);
      } catch (e: any) {
        alert('Error importing data: ' + e.message);
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
    items: checklist.items.map((item) => ({
      name: item.name.trim(),
      completeDate: item.completeDate
    })),
    createDate: checklist.createDate,
    updateDate: checklist.updateDate
  };
}

export function createChecklist(checklist: Checklist): void {
  const checklists = getChecklists();
  checklist = formatChecklist(checklist);
  if (checklists.some((c) => c.name === checklist.name)) {
    throw new Error(`Checklist "${checklist.name}" already exists`);
  }
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
        .map((i) => i.trim()) ?? []
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
    items: items.map((itemName) => ({ name: itemName, completeDate: null })),
    createDate: new Date(),
    updateDate: new Date()
  });
}

export function createShareLink(origin: string, checklist: Checklist): string {
  const searchParams = new URLSearchParams();
  checklist = formatChecklist(checklist);
  searchParams.set('name', checklist.name);
  searchParams.set('description', checklist.description);
  searchParams.set('items', checklist.items.map((item) => item.name).join(','));

  return `${origin}/new?${searchParams.toString()}`;
}
