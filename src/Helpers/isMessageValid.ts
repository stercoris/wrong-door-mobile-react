export function isMessageValid(message: string): boolean {
	const trimmedMessage = message.trim();
	if (trimmedMessage.length === 0) return false;

	if (trimmedMessage.length > 80) return false;

	return true;
}
