import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentCardComponent } from './components/agent-card/agent-card.component';
import { SearchAgentsComponent } from './pages/search-agents/search-agents.component';
import { AgentDetailsComponent } from './pages/agent-details/agent-details.component';

@NgModule({
  declarations: [AppComponent, SearchAgentsComponent, AgentCardComponent, AgentDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
