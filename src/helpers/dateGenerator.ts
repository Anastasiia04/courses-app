export const getFormattedDate = (inputDate: string): string => {
	const formattedDate = inputDate.replaceAll('/', '.');
	return formattedDate;
};
