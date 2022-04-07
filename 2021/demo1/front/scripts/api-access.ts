import { Auth } from "./auth";

export class ApiAccess {
  constructor(
    private authClient: Auth
  ) {}

  async getGraphData() {
    const token = await this.authClient.aquireToken(['https://takassampleb2c.onmicrosoft.com/b9982235-a2b5-4349-8e11-8196f60336ce/access']);
    console.log(token)
    // const data = await fetch('https://graph.microsoft.com/v1.0/me', {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // });
    // const json = await data.json();
    // console.log(json);
    // const el = document.getElementById('graph-data');
    // if (el) {
    //   el.innerText = JSON.stringify(json);
    // }
  }

  async getOriginalApiData() {
    const token = await this.authClient.aquireToken(['https://takassampleb2c.onmicrosoft.com/b9982235-a2b5-4349-8e11-8196f60336ce/access']);
    console.log(token)
    const data = await fetch('https://localhost:44338/DemoOne', {
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
