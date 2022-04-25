import { Msal2Provider, Providers } from '@microsoft/mgt';
import { Logger, LogLevel } from '@azure/msal-browser';
import { demo3msalConfig } from '../environments/environments.demo3';

// msalConfig
// export const demo3msalConfig = {
//   clientId: 'xxxxx',
//   authority: 'https://login.microsoftonline.com/xxxxx/'
// }

const msal2Provider = new Msal2Provider(demo3msalConfig);
const loggerCallback = (logLevel: LogLevel, message: string, containsPii: boolean) => {
  console.log({logLevel, message, containsPii})
}
msal2Provider.publicClientApplication.setLogger(new Logger({ loggerCallback, logLevel: LogLevel.Verbose }));

Providers.globalProvider = msal2Provider;
