import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Pageable } from '../interfaces/pageable.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  hhtp: HttpClient = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course/';

  getTestAccounts() {
    return this.hhtp.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  getMe() {
    return this.hhtp.get<Profile>(`${this.baseApiUrl}account/me`)
  }

  getSubscribersShotList() {
    return this.hhtp.get<Pageable<Profile>>(`${this.baseApiUrl}account/subscribers/`).pipe(
      map(res => res.items.slice(0,3))
    );
  }
}
