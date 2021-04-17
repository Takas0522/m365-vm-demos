import { AccountInfo, PublicClientApplication } from '@azure/msal-browser';
import { authEnv } from '../environments/environment';
export class Auth {

  private client = new PublicClientApplication(authEnv);
  account: AccountInfo | null = null;

  async login(): Promise<void> {
    const res = await this.client.handleRedirectPromise();
    if (!res) {
        this.client.loginRedirect();
        return;
    }
    this.account = res.account;
  }

  async aquireToken(scopes: string[]): Promise<string> {
    if (!this.account) {
      return '';
    }
    const res = await this.client.acquireTokenSilent({ account: this.account, scopes: scopes }).then(r => {
        if (r) {
            return r.accessToken;
        } else {
            return '';
        }
    });
    return res;
  }
}
