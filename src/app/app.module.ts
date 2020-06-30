import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { environment } from "src/environments/environment";
//NgRx
import { StoreModule } from "@ngrx/store";
import { contadorReducer } from "./contador/contador.reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HijoComponent } from "./contador/hijo/hijo.component";
import { NietoComponent } from "./contador/nieto/nieto.component";
import { userReducer } from './contador/user.reducers';

@NgModule({
  declarations: [AppComponent, HijoComponent, NietoComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer, user: userReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
