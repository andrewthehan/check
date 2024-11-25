import type { Checklist } from '../model/Checklist';
import { LocalStore, localStore } from './localStore.svelte';

export const KEY = 'checklists';

export function checklistsStore(): LocalStore<Checklist[]> {
	return localStore<Checklist[]>(KEY, []);
}

export function getChecklists(): Checklist[] {
	const checklists = localStorage.getItem(KEY);
	if (checklists == null) {
		return [];
	}

	return JSON.parse(checklists);
}

export function setChecklists(checklists: Checklist[]): void {
	localStorage.setItem(KEY, JSON.stringify(checklists));
}

export function addChecklist(checklist: Checklist): void {
	const checklists = getChecklists();
	checklists.push(checklist);
	setChecklists(checklists);
}

export function updateChecklist(checklist: Checklist): void {
	const checklists = getChecklists();
	const index = checklists.findIndex((c) => c.name === checklist.name);
	checklists[index] = checklist;
	setChecklists(checklists);
}

export function removeChecklist(checklistName: String): void {
	const checklists = getChecklists();
	const index = checklists.findIndex((c) => c.name === checklistName);
	checklists.splice(index, 1);
	setChecklists(checklists);
}

export function parseFromQueryParams(searchParams: URLSearchParams): Checklist {
	return {
		name: searchParams.get('name') ?? '',
		description: searchParams.get('description') ?? '',
		items:
			searchParams
				.get('items')
				?.split(',')
				?.map((itemName) => ({ name: itemName, completed: false })) ?? [],
		createDate: new Date(),
		updateDate: new Date()
	};
}

export function createShareLink(origin: string, checklist: Checklist): string {
	const searchParams = new URLSearchParams();
	searchParams.set('name', checklist.name);
	searchParams.set('description', checklist.description);
	searchParams.set('items', checklist.items.map((item) => item.name).join(','));

	return `${origin}/new?${searchParams.toString()}`;
}
