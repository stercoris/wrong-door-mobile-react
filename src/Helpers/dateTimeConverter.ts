export function convertDateTimeToCoolString(date: any): string {
	const localTime = new Date(date).toLocaleTimeString();
	const wmdy = new Date(date).toDateString();
	return `${localTime} ${wmdy}`;
}
