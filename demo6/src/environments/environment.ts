// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '33c3c56c-eb26-469f-9718-0f33c8426d7c',
      authority: 'https://login.microsoftonline.com/028db01b-7420-42ce-ba2e-6efb6ac11c10'
    },
    system: {
      iframeHashTimeout: 10000,
    },
  },
  adalConfig: {
    tenant: '028db01b-7420-42ce-ba2e-6efb6ac11c10',
    clientId: '7f3aa70d-538a-4ca3-889c-01ec4dc7aa12'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
