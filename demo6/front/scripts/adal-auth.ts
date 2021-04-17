const AuthenticationContext = require('adal-angular');
import { adalAuthEnv } from '../environments/environment';

export class AdalAuth {
  private context: adal.AuthenticationContext;
  userName = '';
  constructor() {
    this.context = new AuthenticationContext(adalAuthEnv)
  }

  login(): void {
    this.context.handleWindowCallback();
    if (!this.context.getCachedUser()) {
        this.context.login();
        return;
    }
    this.userName = this.context.getCachedUser().userName;
  }

  acquireTokenAsync(resource: string): Promise<string> {
    this.context.config.redirectUri = "http://localhost:5500/adal-redirect-page.html";
    return new Promise(res => {
        this.context.acquireToken(resource, (err, token) => {
            if (!err) {
                res(token);
            } else {
                res('');
            }
        });
    });
  }
}