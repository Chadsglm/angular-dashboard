// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {UserRole} from '../app/shared/auth.roles';

export let environment: {
  defaultMenuType: string;
  subHiddenBreakpoint: number; defaultRole: UserRole;
  production: boolean; buyUrl: string; defaultDirection: string;
  themeColorStorageKey: string;
  firebase: {
    storageBucket: string; apiKey: string; messagingSenderId: string; appId: string; projectId: string;
    measurementId: string; databaseURL: string; authDomain: string
  };
  menuHiddenBreakpoint: number;
  isDarkSwitchActive: boolean;
  themeRadiusStorageKey: string; defaultColor: string; apiUrl: string;
  isAuthGuardActive: boolean; adminRoot: string; isMultiColorActive: boolean;
  SCARF_ANALYTICS: boolean
};
environment = {
  production: true,
  buyUrl: 'https://chadev.ch',
  SCARF_ANALYTICS: false,
  adminRoot: '/app',
  apiUrl: 'https://api.coloredstrategies.com',
  defaultMenuType: 'menu-default',
  subHiddenBreakpoint: 1440,
  menuHiddenBreakpoint: 768,
  themeColorStorageKey: 'chadev-themecolor',
  isMultiColorActive: true,
  defaultColor: 'light.blueyale',
  isDarkSwitchActive: true,
  defaultDirection: 'ltr',
  themeRadiusStorageKey: 'chadev-themeradius',
  isAuthGuardActive: false,
  defaultRole: UserRole.Admin,
  firebase: {
    apiKey: 'AIzaSyCqoNLB_jTw4nncO12qR-eDH9gAeWiZVaw',
    authDomain: 'chadev-angular-login.firebaseapp.com',
    databaseURL: 'https://chadev-angular-login.firebaseio.com',
    projectId: 'chadev-angular-login',
    storageBucket: 'chadev-angular-login.appspot.com',
    messagingSenderId: '16217062888',
    appId: '1:16217062888:web:6b08232ca0c9662fedb85d',
    measurementId: 'G-8ETT79WRRN'
  }
};
