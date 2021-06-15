// @refresh reset
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button, View } from "react-native";
import { Center } from "@Views/Center";
import { LoadingScreen } from "@Views/LoadingScreen/LoadingScreen";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";

interface LogInProps {}

export const LogInScreen: React.FC<LogInProps> = () => {
	return (
		<View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
			<LoadingScreen />
		</View>
	);
};
