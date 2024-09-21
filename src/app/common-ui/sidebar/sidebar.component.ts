import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconComponent, CommonModule, SubscriberCardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
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
