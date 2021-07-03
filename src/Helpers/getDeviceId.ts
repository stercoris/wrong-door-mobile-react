import { v4 as generateUUID } from "uuid";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

const userStorage = new Storage({
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: 1000 * 3600 * 24 * 365,
	enableCache: true,
});

export const getLocalUserUUID = async (): Promise<string | null> => {
	try {
		const token = await userStorage.load({
			key: "token",
			id: "0",
			autoSync: false,
			syncInBackground: false,
		});
		return token;
	} catch {
		return null;
	}
};

const setLocalUserUUID = async (uid: string): Promise<void> => {
	await userStorage.save({
		key: "token",
		id: "0",
		data: uid,
	});
};

export async function getUserIdAndCreateIfNotExist(): Promise<string> {
	const userId = await getLocalUserUUID();

	if (userId === null) {
		await setLocalUserUUID(generateUUID());
	} else {
		await setLocalUserUUID(userId);
	}

	return (await getLocalUserUUID()) as string;
}
