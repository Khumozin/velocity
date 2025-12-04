import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar } from './sidebar';
import { Breadcrumb } from './breadcrumb';
import { RouterOutlet } from '@angular/router';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { ThemeToggle } from "./theme-toggle";

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, Breadcrumb, RouterOutlet, HlmSidebarImports, ThemeToggle],
  template: `
    <div hlmSidebarWrapper>
      <app-sidebar />
      <main hlmSidebarInset class="flex flex-1 flex-col">
        <header
          class="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
        >
          <div class="flex items-center gap-2 px-4">
            <button hlmSidebarTrigger class="-ml-1">
              <span class="sr-only"></span>
            </button>
            <app-breadcrumb />
          </div>

          <app-theme-toggle class="px-4" />
        </header>

        <div class="flex-1 overflow-y-auto">
          <router-outlet />
        </div>
      </main>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainLayout {}
