class NetworkClient {
    tryConnect(): void {
        throw new Error('no network');
    }
}

class UserService {
    constructor(private client: NetworkClient) {}

    login() {
        this.client.tryConnect();
    }
}

// 에러를 직접적으로 처리할 수 있는 곳에서 에러를 캐치하는 것이 좋다.
class App {
    constructor(private userService: UserService) {}
    run() {
        try {
            this.userService.login()
        } catch (error) {
            // show dialog to user
        }
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();

