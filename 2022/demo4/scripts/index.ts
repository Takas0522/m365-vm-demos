import { EventMessage, EventType, LogLevel, PerformanceEvent, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../environments/environments.demo4';

// msalConfig
// const loggerCallback = (logLevel: LogLevel, message: string, containsPii: boolean) => {
//   console.log({logLevel, message, containsPii})
// }

// export const msalConfig = {
//   auth: {
//     clientId: 'xxxxx',
//     authority: 'https://login.microsoftonline.com/xxxx/'
//   },
//   cache: {
//     cacheLocation: "localStorage"
//   },
//   system: {
//     loggerOptions: {
//       logLevel: 3, // Verbose
//       loggerCallback
//     }
//   }
// };

const client = new PublicClientApplication(msalConfig);

client.enableAccountStorageEvents();
client.addEventCallback((message: EventMessage) => {
  // SSOでセッション情報をlocalstroageに保存している場合ほかタブのmsalの動作をキャッチできる
  console.log(message)
  if (message.eventType === EventType.LOGOUT_END) {
    const logoutInfo = document.getElementById('logout-info');
    if (logoutInfo) {
      logoutInfo.innerText = '他のウィンドウ化タブでログアウトしたっぽい！';
    }
  }
});

client.addPerformanceCallback((event: PerformanceEvent[]) => {
  console.log({ performanceEvent: event });
  window.performance
});

const login = async () => {
  const res = await client.loginPopup();
  console.log(res);
}
const commonlogin = document.getElementById('commonlogin');
if (commonlogin) {
  commonlogin.onclick = login;
}

const ssoLogin = async () => {
  // SSO SilentでHintが不要になった
  // https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/login-user.md
  const res = await client.ssoSilent({scopes: ['user.read']});
  console.log(res);
  const resultField = document.getElementById('ssologin-result');
  const display = { address: res.account?.username, name: res.account?.name }
  if (resultField) {
    resultField.innerText = JSON.stringify(display);
  }
};

const ssologin = document.getElementById('ssologin');
if (ssologin) {
  ssologin.onclick = ssoLogin;
}

const logout = async () => {
  await client.logoutRedirect();
};
const logoutButton = document.getElementById('logout');
if (logoutButton) {
  logoutButton.onclick = logout;
}