import { PublicClientApplication, AuthenticationResult, AccountInfo } from '@azure/msal-browser';
import { authEnv } from '../environments/environment';

export class Auth {
  account: AccountInfo | null = null;
  private client: PublicClientApplication = new PublicClientApplication(authEnv);

  async loginRedirect(): Promise<void> {
    const res = await this.client.handleRedirectPromise();
    if (res) {
      console.log(res);
      this.account = res.account;
      return;
    }
    this.client.loginRedirect({ scopes: ['user.read'] });
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