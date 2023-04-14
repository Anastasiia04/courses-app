export async function makeRequest<T>(
	url: string,
	options?: RequestInit
): Promise<T> {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
}
