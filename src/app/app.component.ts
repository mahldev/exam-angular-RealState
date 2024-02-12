import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '@components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <body>
      <header>
        <app-nav-bar />
      </header>
      <main>
        <router-outlet />
      </main>
    </body>
  `,
})
export class AppComponent {}
