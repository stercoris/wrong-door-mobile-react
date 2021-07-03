const a = ["a", "а"];

const y = ["y", "у", "y", "u"];

const e = ["e", "е"];

const between = ["-", ".", "", " "];

const generateAYE = () => {
	const ayes: string[] = [];
	for (const al of a) {
		for (const yl of y) {
			for (const el of e) {
				for (const btw1 of between) {
					for (const btw2 of between) {
						ayes.push(`${al}${btw1}${yl}${btw2}${el}`);
					}
				}
			}
		}
	}
	return ayes;
};

const ayes = generateAYE();

console.log(ayes);

export function isMessageValid(message: string): boolean {
	for (const aue of ayes) {
		if (message.toLowerCase().trim().includes(aue)) {
			return false;
		}
	}
	if (message.trim().length === 0) return false;

	return true;
}
