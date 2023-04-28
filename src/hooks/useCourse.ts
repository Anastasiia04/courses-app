import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ICreateCourseFormValues } from 'src/components/CreateCourse/components/CreateCourseForm/CreateCourseForm';
import { COURSE_URL } from '../constants';
import { makeRequest } from '../helpers/makeRequest';
import { getUserToken } from '../helpers/userData';
import { ICourse } from '../models/Course';
import { selectAuthors } from '../store/authors/authorsSelector';
interface ICourseResponse {
	successful: boolean;
	result: ICourse;
}

const initValue: ICreateCourseFormValues = {
	titleInput: '',
	description: '',
	duration: '0',
	authors: [],
};

export const useCourse = (courseId?: string) => {
	const [course, setCourse] = useState<ICreateCourseFormValues>(initValue);
	const [loading, setLoading] = useState<boolean>(true);
	const authorsList = useSelector(selectAuthors);

	useEffect(() => {
		const token = getUserToken();
		if (token && courseId) {
			makeRequest<ICourseResponse>(COURSE_URL(courseId), {
				headers: {
					Authorization: token || '',
				},
			}).then((resp) => {
				if (resp.successful) {
					const authors = resp.result.authors.map((authorId) => {
						const foundAuthor = authorsList?.find(
							(author) => author.id === authorId
						);
						return foundAuthor;
					});
					const init: ICreateCourseFormValues = {
						titleInput: resp.result.title,
						description: resp.result.description,
						duration: resp.result.duration.toString(),
						authors,
					};
					setCourse(init);
					setLoading(false);
				}
			});
		}
	}, [courseId]);

	return { loading, course };
};
