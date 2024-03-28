import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
} from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'angular-basic-ca3c5',
          appId: '1:689165750091:web:6a3e151d44508b66c522ce',
          databaseURL: 'https://angular-basic-ca3c5.firebaseio.com',
          storageBucket: 'angular-basic-ca3c5.appspot.com',
          apiKey: 'AIzaSyBP5U7goUPW3AHy_X7TCrXmM1G3W8NCSAw',
          authDomain: 'angular-basic-ca3c5.firebaseapp.com',
          messagingSenderId: '689165750091',
          measurementId: 'G-JV5B0DWKPC',
        })
      )
    ),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
    ScreenTrackingService,
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
