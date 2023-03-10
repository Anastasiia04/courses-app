export const getFormattedDate = (inputDate: string): string => {
	const date = new Date(inputDate);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
};
