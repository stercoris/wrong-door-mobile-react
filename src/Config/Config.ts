export default class Config {
	// public static ServerURL: string = process.env.SERVER_URL!;
	public static ServerURL: string = "dmitriyrodin.ddns.net";
	public static WebSocketPORT = Number(process.env.WEBSOCKET_PORT!);
	public static GraphQLPORT = Number(process.env.GRAPH_QL_PORT!);
}
