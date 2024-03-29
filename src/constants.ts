export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic COMPONENTS.md 1/4/2022 3 / 11 typesetting, remaining essentially unchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];
export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

export const CREATE_COURSE_TITLE_LABEL_TEXT = 'Title';
export const CREATE_COURSE_TITLE_PLACEHOLDER_TEXT = 'Enter title...';
export const CREATE_COURSE_BUTTON_TEXT = 'Create course';
export const CREATE_COURSE_DESCRIPTION_LABEL_TEXT = 'Description';
export const CREATE_COURSE_DESCRIPTION_PLACEHOLDER_TEXT = 'Enter description';
export const CREATE_COURSE_ADD_AUTHOR_TITLE = 'Add author';
export const CREATE_COURSE_ADD_AUTHOR_LABEL_TEXT = 'Author name';
export const CREATE_COURSE_ADD_AUTHOR_PLACEHOLDER_TEXT = 'Enter author name...';
export const CREATE_AUTHOR_BUTTON_TEXT = 'Create author';
export const CREATE_COURSE_DURATION_TITLE = 'Duration';
export const CREATE_COURSE_DURATION_PLACEHOLDER_TEXT =
	'Enter durstion in minutes...';
export const CREATE_COURSE_AUTHORS_LIST_TITLE = 'Authors';
export const ADD_AUTHOR_BUTTON_TEXT = 'Add author';
export const COURSE_AUTHORS_LIST_TITLE = 'Course authors';
export const COURSE_AUTHORS_LIST_IS_EMPTY = 'Author list is empty';
export const DELETE_AUTHOR_BUTTON_TEXT = 'Delete author';
export const SHOW_COURSE_BUTTON_TEXT = 'Show course';

const API_HOST = 'http://localhost:4000';
export const REGISTRATION_URL = API_HOST + '/register';
export const LOGIN_URL = API_HOST + '/login';
export const LOGOUT_BUTTON_TEXT = 'Logout';
export const ADD_NEW_COURSE_BUTTON_TEXT = 'Add new course';
export const COURSES_URL = API_HOST + '/courses/all';
export const USER = API_HOST + '/users/me';
export const AUTHORS_URL = API_HOST + '/authors/all';
export const COURSE_URL = (id: string) => `${API_HOST}/courses/${id}`;
export const LOGOUT_URL = API_HOST + '/logout';
export const CREATE_COURSE_URL = API_HOST + '/courses/add';
export const CREATE_AUTHOR_URL = API_HOST + '/authors/add';

export const ROUTES = {
	default: '/',
	login: '/login',
	registration: '/registration',
	courses: '/courses',
	course: '/courses/:courseId',
	addCourse: '/courses/add',
	updateCourse: '/courses/update/:courseId',
};
export const USER_INFO = {
	name: 'userName',
	token: 'userToken',
};
