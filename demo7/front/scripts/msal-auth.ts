import { PublicClientApplication, AuthenticationResult, AccountInfo } from '@azure/msal-browser';
import { msalAuthEnv } from '../environments/environment';

export class MsalAuth {
  account: AccountInfo | null = null;
  private client: PublicClientApplication = new PublicClientApplication(msalAuthEnv);

  async login(): Promise<void> {
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