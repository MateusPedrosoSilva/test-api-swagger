interface PingResponse {
    message: String;
}

export default class PingController {
    public async getMessage(): Promise<PingResponse> {
        return {
            message: "pong",
        }
    }
}