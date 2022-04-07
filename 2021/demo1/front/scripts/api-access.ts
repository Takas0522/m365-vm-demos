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
    console.log(json);
    const el = document.getElementById('graph-data');
    if (el) {
      el.innerText = JSON.stringify(json);
    }
  }

  async getOriginalApiData() {
    const token = await this.authClient.aquireToken(['api://622f3d4b-32f5-4c95-a5e0-fbfd431576f7/access']);
    console.log(token)
    const data = await fetch('https://localhost:44310/weatherforecast', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await data.json();
    console.log(json)
    const el = document.getElementById('custom-data');
    if (el) {
      el.innerText = JSON.stringify(json);
    }
  }
}
