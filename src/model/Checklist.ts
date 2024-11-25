export type Checklist = {
	name: string;
	description: string;
	items: Array<ChecklistItem>;
	createDate: Date;
	updateDate: Date;
};

export type ChecklistItem = {
	name: string;
	completed: boolean;
};
