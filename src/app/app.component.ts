import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '@components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <body class="w-[1400px] m-auto">
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
