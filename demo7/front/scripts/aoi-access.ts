import { MsalAuth } from "./msal-auth";

export class ApiAccess {
  constructor(
    private authClient: MsalAuth
  ) {}

  async getApiData() {
    const token = await this.authClient.aquireToken(['api://7433d237-6922-4564-aacf-8560f75dac8f/access']);
    console.log(token)
    const data = await fetch('https://localhost:44355/Demo', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(data)
    const json = await data.json();
    console.log(json)
    const el = document.getElementById('custom-data');
    if (el) {
      el.innerText = JSON.stringify(json);
    }
  }
}
