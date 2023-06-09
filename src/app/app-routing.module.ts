import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { AgentDetailsComponent } from './pages/agent-details/agent-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchAgentsComponent } from './pages/search-agents/search-agents.component';

const routes: Routes = [
  {
    path: 'search-agents',
    component: SearchAgentsComponent,
  },
  {
    path: 'search-agents/:id',
    component: AgentDetailsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/search-agents',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/search-agents',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [provideRouter(routes, withComponentInputBinding())],
  exports: [RouterModule],
})
export class AppRoutingModule {}
