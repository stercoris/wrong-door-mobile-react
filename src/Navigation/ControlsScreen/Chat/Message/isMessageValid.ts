const aues = ["aye", "ауе", "a-y-e", "a y e", "а-у-е", "а у е"];

export function isMessageValid(message: string): boolean {
	if (
		message.trim().length > 0 &&
		!new RegExp(aues.join("|")).test(message.toLowerCase())
	)
		return true;

	return false;
}
