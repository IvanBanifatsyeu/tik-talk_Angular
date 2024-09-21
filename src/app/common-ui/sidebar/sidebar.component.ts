import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    CommonModule,
    SubscriberCardComponent,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService)

  subscribers$= this.profileService.getSubscribersShotList()

  menuItems = [
    {
      label: 'My page',
      icon: 'home',
      link: '',
    },
    {
      label: 'Chats',
      icon: 'chats',
      link: 'chats',
    },
    {
      label: 'Search',
      icon: 'search',
      link: 'search',
    },
  ];
}
