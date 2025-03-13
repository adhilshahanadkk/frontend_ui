import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // For HttpClient
import { routes } from './app.routes'; // Import your routes
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // For animations

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // For better change detection
    provideRouter(routes, withComponentInputBinding()), // Provide the router configuration
    provideAnimationsAsync(), // Enable animations
    provideHttpClient(), // Enable HttpClient for API calls
  ],
};