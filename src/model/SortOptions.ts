import { localStore, type LocalStore } from '$lib/localStore.svelte';
import type { Checklist } from './Checklist';

export enum ChecklistSortOptions {
  NAME = 'Name',
  ITEM_COUNT = 'Item Count',
  CREATE_DATE = 'Create Date',
  UPDATE_DATE = 'Update Date',
  COMPLETION = 'Completion'
}

export enum ChecklistItemSortOptions {
  NAME,
  COMPLETE_DATE
}

export const CHECKLISTS_SORT_OPTION_KEY = 'checklists-sort-option';

class ChecklistSortOptionsSerializer {
  serialize(value: ChecklistSortOptions): string {
    return value;
  }

  deserialize(item: string): ChecklistSortOptions {
    return item as ChecklistSortOptions;
  }
}

export function checklistsSortOptionStore(): LocalStore<ChecklistSortOptions> {
  return localStore<ChecklistSortOptions>(
    CHECKLISTS_SORT_OPTION_KEY,
    ChecklistSortOptions.NAME,
    new ChecklistSortOptionsSerializer()
  );
}

export function sortChecklists(
  checklists: Checklist[],
  sortOption: ChecklistSortOptions
): Checklist[] {
  return checklists.toSorted(getSorter(sortOption));
}

export function getSorter(
  sortOption: ChecklistSortOptions
): (a: Checklist, b: Checklist) => number {
  switch (sortOption) {
    case ChecklistSortOptions.NAME:
      return (a, b) => a.name.localeCompare(b.name);
    case ChecklistSortOptions.ITEM_COUNT:
      return (a, b) => a.items.length - b.items.length;
    case ChecklistSortOptions.CREATE_DATE:
      return (a, b) => b.createDate.getTime() - a.createDate.getTime();
    case ChecklistSortOptions.UPDATE_DATE:
      return (a, b) => b.updateDate.getTime() - a.updateDate.getTime();
    case ChecklistSortOptions.COMPLETION:
      return (a, b) => {
        const aComplete = a.items.filter((i) => i.completeDate).length;
        const bComplete = b.items.filter((i) => i.completeDate).length;
        return aComplete / a.items.length - bComplete / b.items.length;
      };
  }
}
