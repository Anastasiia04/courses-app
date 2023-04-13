export interface ICourse {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: Array<string>;
}
export interface IUpdatedCourse {
	id: string;
	title: string;
	description: string;
	duration: number;
	authors: Array<string>;
}
