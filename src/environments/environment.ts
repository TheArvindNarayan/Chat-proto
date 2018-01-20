// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCXHMfzc-6PETxPm2PWsnSZBJSI-0far4vk4',
    authDomain: 'sidekick-ng.firebaseapp.com',
    databaseURL: 'https://sidekick-ng.firebaseio.com',
    projectId: 'sidekick-ng',
    storageBucket: 'sidekick-ng.appspot.com',
    messagingSenderId: '8500328948813'
  }
};
