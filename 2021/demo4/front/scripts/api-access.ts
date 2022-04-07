import { AdalAuth } from "./adal-auth";
import { MsalAuth } from "./msal-auth";


export class ApiAccess {
  constructor(
    private adalAuthClient: AdalAuth,
    private msalAuth: MsalAuth
  ) {}

  async getApiDatav1() {
    const token = await this.adalAuthClient.acquireTokenAsync('7f3aa70d-538a-4ca3-889c-01ec4dc7aa12');
    const data = await fetch('https://localhost:44320/Demo4WebApi2', {
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

  async getApiDatav2() {
    const token = await this.msalAuth.aquireToken(['api://9b67c71f-22d2-49d4-8cb8-c678bc4635da/access'])
    const data = await fetch('https://localhost:44303/Demo4WeApi1', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await data.json();
    console.log(json)
    const el = document.getElementById('custom-data2');
    if (el) {
      el.innerText = JSON.stringify(json);
    }
  }
}
