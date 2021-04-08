import { Auth } from "./auth";

export class ApiAccess {
  constructor(
    private authClient: Auth
  ) {}

  async getGraphData() {
    const token = await this.authClient.aquireToken(['user.read']);
    const data = await fetch('https://graph.microsoft.com/v1.0/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await data.json();
    console.log(json)
  }

  async getOriginalApiData() {
    const token = await this.authClient.aquireToken(['api://b8aa8738-c371-47f1-a999-561052cf5ddd/access']);
    console.log(token)
    const data = await fetch('https://localhost:44310/weatherforecast', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await data.json();
    console.log(json)
  }
}
