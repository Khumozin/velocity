import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  lucideSparkles,
  lucideLogOut,
  lucideBell,
  lucideBadgeCheck,
  lucideCreditCard,
  lucideChevronsUpDown,
} from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSidebarImports, HlmSidebarService } from '@spartan-ng/helm/sidebar';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';

interface User {
  name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-nav-user',
  imports: [HlmSidebarImports, HlmAvatarImports, HlmIconImports, HlmDropdownMenuImports],
  providers: [
    provideIcons({ lucideSparkles, lucideLogOut, lucideBell, lucideBadgeCheck, lucideCreditCard, lucideChevronsUpDown }),
  ],
  template: `
    <ul hlmSidebarMenu>
      <li hlmSidebarMenuItem>
        <button
          hlmSidebarMenuButton
          [hlmDropdownMenuTrigger]="menu"
          [side]="_menuSide()"
          align="end"
          size="lg"
          class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div
            class="flex items-center gap-2 py-1.5 text-left text-sm"
            [class.px-1]="_hlmSidebarService.open()"
          >
            <hlm-avatar class="size-8 rounded-lg">
              <img [src]="user().avatar" [alt]="user().name" hlmAvatarImage />
              <span class="bg-[#FD005B] text-white rounded-lg" hlmAvatarFallback>KM</span>
            </hlm-avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{{ user().name }}</span>
              <span class="truncate text-xs">{{ user().email }}</span>
            </div>
          </div>

          <ng-icon hlm name="lucideChevronsUpDown" class="ml-auto" size="sm" />
        </button>
      </li>
    </ul>

    <ng-template #menu>
      <hlm-dropdown-menu class="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg">
        <hlm-dropdown-menu-label>
          <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <hlm-avatar class="h-8 w-8 rounded-lg">
              <img [src]="user().avatar" [alt]="user().name" hlmAvatarImage />
              <span class="bg-[#FD005B] text-white rounded-lg" hlmAvatarFallback>KM</span>
            </hlm-avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{{ user().name }}</span>
              <span class="truncate text-xs">{{ user().email }}</span>
            </div>
          </div>
        </hlm-dropdown-menu-label>

        <hlm-dropdown-menu-separator />

        <hlm-dropdown-menu-group>
          <button hlmDropdownMenuItem>
            <ng-icon hlm name="lucideSparkles" size="sm" />
            <span>Upgrade to Pro</span>
          </button>
        </hlm-dropdown-menu-group>

        <hlm-dropdown-menu-separator />

        <hlm-dropdown-menu-group>
          <button hlmDropdownMenuItem>
            <ng-icon hlm name="lucideBadgeCheck" size="sm" />
            <span>Account</span>
          </button>

          <button hlmDropdownMenuItem>
            <ng-icon hlm name="lucideCreditCard" size="sm" />
            <span>Billing</span>
          </button>

          <button hlmDropdownMenuItem>
            <ng-icon hlm name="lucideBell" size="sm" />
            <span>Notifications</span>
          </button>
        </hlm-dropdown-menu-group>

        <hlm-dropdown-menu-separator />

        <hlm-dropdown-menu-group>
          <button hlmDropdownMenuItem>
            <ng-icon hlm name="lucideLogOut" size="sm" />
            <span>Log out</span>
          </button>
        </hlm-dropdown-menu-group>
      </hlm-dropdown-menu>
    </ng-template>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavUser {
  protected readonly _hlmSidebarService = inject(HlmSidebarService);
  protected readonly _menuSide = computed(() =>
    this._hlmSidebarService.isMobile() ? 'top' : 'right',
  );

  readonly user = input.required<User>();
}
