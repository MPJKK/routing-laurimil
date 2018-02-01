import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { DigitransitService } from './services/digitransit.service';
import { RouteDirectionPipe } from './pipes/route-direction.pipe';
import { PiippuPipe } from './pipes/piippu.pipe';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule, MatExpansionModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent,
    RouteDirectionPipe,
    PiippuPipe,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAB0SNaQU7HYpkKZ1UhPLX-2h4qksU_738'
    }),
    FlexLayoutModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
