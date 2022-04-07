import { PublicClientApplication, AuthenticationResult, AccountInfo } from '@azure/msal-browser';
import { msalAuthEnv } from '../environments/environment';

export class MsalAuth {
  account: AccountInfo | null = null;
  private client: PublicClientApplication = new PublicClientApplication(msalAuthEnv);

  async login(loginUser: string): Promise<void> {
    if (window != window.parent) {
      console.log('iframe')
      return;
    }
    const res = await this.client.ssoSilent({ loginHint: loginUser, scopes: ['api://9b67c71f-22d2-49d4-8cb8-c678bc4635da/access'] });
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