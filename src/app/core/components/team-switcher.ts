import { ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

interface Team {
  name: string;
  logo: string;
  plan: string;
}

@Component({
  selector: 'app-team-switcher',
  imports: [HlmIconImports, HlmSidebarImports, HlmDropdownMenuImports],
  template: `
    <ul hlmSidebarMenu>
      <li hlmSidebarMenuItem>
        <a hlmSidebarMenuButton align="center" size="lg" href="#">
          <div
            class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
          >
            <ng-icon hlm [name]="activeTeam()?.logo" class="size-4" size="sm" />
          </div>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-medium">{{ activeTeam()?.name }}</span>
            <span class="truncate text-xs">{{ activeTeam()?.plan }}</span>
          </div>
        </a>
      </li>
    </ul>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamSwitcher {
  readonly teams = input.required<Team[]>();

  readonly activeTeam = linkedSignal(() => {
    const teams = this.teams();
    if (teams) {
      return teams[0];
    }

    return null;
  });
}
