import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';

import './App.scss';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { UserContext } from './contexts/userContext';

import { ROUTES } from './constants';
import { useUser } from './hooks/useUser';

function App() {
	const userContext = useUser();

	return (
		<UserContext.Provider value={userContext}>
			<div className='App'>
				<Router>
					<Header />
					{userContext.loading ? (
						<p>Loading...</p>
					) : (
						<Routes>
							{userContext.user.token ? (
								<>
									<Route path='/' element={<Navigate to={ROUTES.courses} />} />
									<Route path={ROUTES.courses} element={<Courses />} />
									<Route path={ROUTES.course} element={<CourseInfo />} />
									<Route path={ROUTES.addCourse} element={<CreateCourse />} />
									<Route path='*' element={<ErrorPage />} />
								</>
							) : (
								<>
									<Route path='/' element={<Navigate to={ROUTES.login} />} />
									<Route
										path={ROUTES.registration}
										element={<Registration />}
									/>
									<Route path={ROUTES.login} element={<Login />} />
									<Route path='*' element={<ErrorPage />} />
								</>
							)}
						</Routes>
					)}
				</Router>
			</div>
		</UserContext.Provider>
	);
}

export default App;
