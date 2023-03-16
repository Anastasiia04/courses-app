export const getFormattedDuration = (inputDuration: number): string => {
	if (!inputDuration) return '00:00';
	const hours = Math.trunc(inputDuration / 60);
	const formattedHours = hours < 10 ? `0${hours}` : hours;
	const minutes = inputDuration - hours * 60;
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
	return `${formattedHours}:${formattedMinutes} hours`;
};
