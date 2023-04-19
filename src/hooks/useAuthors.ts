import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthors } from '../store/authors/authorsSelector';
import { loadAuthors } from '../store/authors/thunk';

export const useAuthors = () => {
	const dispatch = useDispatch();
	const authors = useSelector(selectAuthors);

	useEffect(() => {
		loadAuthors(authors)(dispatch);
	}, []);
};
