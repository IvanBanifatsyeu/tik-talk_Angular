import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { ProfileService } from '../../data/services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileHeaderComponent, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  profileService = inject(ProfileService);

  route = inject(ActivatedRoute);

  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id === 'me') return toObservable(this.profileService.me);
      return this.profileService.getAccount(id);
    })
  );
}
