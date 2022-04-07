import { Auth } from "./auth";

export class ApiAccess {
  constructor(
    private authClient: Auth
  ) {}

  async getApiData() {
    const token = await this.authClient.aquireToken(['api://d3a1d193-a807-4911-ab53-59150a01eddb/access']);
    console.log(token)
    const data = await fetch('https://localhost:44316/Demo3WebApi1', {
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
