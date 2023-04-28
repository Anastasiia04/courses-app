import { StoreType } from '..';

export const selectCourses = (state: StoreType) => state.courses;
export const selectCourse = (state: StoreType) => state.course;
