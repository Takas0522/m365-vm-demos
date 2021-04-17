import { Component, OnInit } from '@angular/core';
import { AccountInfo, PublicClientApplication } from '@azure/msal-browser';
import { AdalService } from 'adal-angular4';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  msalClient: PublicClientApplication = new PublicClientApplication(environment.msalConfig);
  adalToken = '';
  msalToekn = '';
  private account: AccountInfo | null = null;

  constructor(
    private adalService: AdalService
  ) {}

  ngOnInit(): void {
    this.adalService.init(environment.adalConfig);
    this.adalService.handleWindowCallback();
  }

  adalLogin(): void {
    this.adalService.login();
  }

  adalGetToken(): void {
    if (window.parent !== window) {
      return;
    }
    this.adalService.acquireToken('5d952390-207d-468a-b727-fc9bf9ac3341').subscribe(s => {
      if (s) {
        this.adalToken = s;
      }
    });
  }

  async msalLogin(): Promise<void> {
    const res = await this.msalClient.ssoSilent({ loginHint: 't_o_19880522@outlook.com' });
    this.account = res.account;
  }

  async msalGetToken(): Promise<void> {
    if (window.parent !== window) {
      return;
    }
    if (!this.account) {
      return;
    }
    const res = await this.msalClient.acquireTokenSilent({ account: this.account, scopes: ['api://33c3c56c-eb26-469f-9718-0f33c8426d7c/access'] });
    this.msalToekn = res.accessToken;
  }
}
