import Constants from "expo-constants";
import { Platform } from "react-native";

export function getDeviceId(): string {
	if (Platform.OS === "web") {
		return "web";
	} else if (Platform.OS === "android") {
		return Constants.deviceId!;
	}

	throw new Error("Platform not recognized");
}
