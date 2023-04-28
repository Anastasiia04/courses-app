export async function makeRequest<T>(
	url: string,
	options?: RequestInit
): Promise<T> {
	const response = await fetch(url, options);
	try {
		const data = await response.json();

		return data;
	} catch (error) {
		return response.statusText as any;
	}
}
