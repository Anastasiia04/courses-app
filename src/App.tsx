import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState } from 'react';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';

function App() {
	const [isCreateCourse, setIsCreateCourse] = useState(false);

	const onAddNewCourse = () => {
		setIsCreateCourse(true);
	};
	return (
		<div className='App'>
			<Header />
			{isCreateCourse ? (
				<CreateCourse />
			) : (
				<Courses addNewCourse={onAddNewCourse} />
			)}
		</div>
	);
}

export default App;