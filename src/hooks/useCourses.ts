import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses } from '../store/courses/coursesSelector';
import { loadCourses } from '../store/courses/thunk';

export const useCourses = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const courses = useSelector(selectCourses);
	const dispatch = useDispatch();

	useEffect(() => {
		loadCourses(courses)(dispatch);
		setLoading(false);
	}, []);

	return loading;
};
