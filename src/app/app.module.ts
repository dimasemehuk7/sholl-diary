import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './pages/main/main.component';
import { EditBallComponent } from './components/edit-ball/edit-ball.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    EditBallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
