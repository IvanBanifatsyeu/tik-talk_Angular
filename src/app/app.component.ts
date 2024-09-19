import { Component, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, SearchPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
