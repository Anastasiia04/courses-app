import { ICourse } from '../../models/Course';
import { createActionFactory } from '../actionFactory';

export const coursesLoaded =
	createActionFactory('courses_loaded')<Array<ICourse>>();
export const courseAdded = createActionFactory('course_added')<ICourse>();
export const courseDeleted = createActionFactory('course_deleted')<string>();
export const courseUpdated = createActionFactory('course_updated')<ICourse>();

export type CoursesActions =
	| ReturnType<typeof coursesLoaded>
	| ReturnType<typeof courseDeleted>
	| ReturnType<typeof courseUpdated>
	| ReturnType<typeof courseAdded>;
