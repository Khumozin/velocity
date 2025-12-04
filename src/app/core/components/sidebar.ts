import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavUser } from './nav-user';
import { NavMain } from './nav-main';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCommand,
  lucideListTodo,
  lucideTags,
  lucideChartPie,
  lucideBox,
  lucideZap,
} from '@ng-icons/lucide';
import { TeamSwitcher } from "./team-switcher";

const data = {
  user: {
    name: 'Khumo Mogorosi',
    email: 'khumomogorosi@gmail.com',
    avatar:
      'https://avatars.githubusercontent.com/u/30941916?s=400&u=99cb30e3609f8089467a7b3bd3f7570b5178e8ea&v=4',
  },
  teams: [
    {
      name: 'Velocity',
      logo: 'lucideCommand',
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Analytics',
      url: 'analytics',
      icon: 'lucideChartPie',
      isActive: true,
      items: [],
    },
    {
      title: 'Tasks',
      url: 'tasks',
      icon: 'lucideListTodo',
      items: [],
    },
    {
      title: 'Tags',
      url: 'tags',
      icon: 'lucideTags',
      items: [],
    },
    {
      title: 'Projects',
      url: 'projects',
      icon: 'lucideBox',
      items: [],
    },
  ],
};

@Component({
  selector: 'app-sidebar',
  imports: [NavUser, NavMain, HlmSidebarImports, TeamSwitcher],
  providers: [
    provideIcons({
      lucideCommand,
      lucideListTodo,
      lucideTags,
      lucideChartPie,
      lucideBox,
      lucideZap,
    }),
  ],
  template: `
    <hlm-sidebar [collapsible]="'icon'" data-cy="sidebar">
      <div hlmSidebarHeader>
        <app-team-switcher [teams]="data.teams" />
      </div>
      <div hlmSidebarContent>
        <app-nav-main [items]="data.navMain" />
        <!-- <app-nav-projects [items]="data.projects" /> -->
      </div>
      <div hlmSidebarFooter>
        <app-nav-user [user]="data.user" />
      </div>
    </hlm-sidebar>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  data = data;
}
