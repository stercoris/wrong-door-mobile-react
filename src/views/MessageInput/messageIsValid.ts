const aues = ["aye", "ауе"];

export function isMessageValid(message: string): boolean {
	if (
		message.trim().length > 0 &&
		!new RegExp(aues.join("|")).test(message.toLowerCase())
	)
		return true;

	return false;
}
