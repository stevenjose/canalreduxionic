import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppState, UserState } from "./app.reducers";
import * as actions from "./contador/contador.actions";
import * as actionsUser from "./contador/user.actions";
import {usuarios} from "./data/data";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  contador: number;
  name:  string;
  token: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<AppState>,
    private storeUser: Store<UserState>
  ) {
    this.initializeApp();
    this.store.select("contador").subscribe((contador) => {
      console.log(contador);
      this.contador = contador;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  incrementar() {
    console.log("Incrementar");
    this.store.dispatch(actions.incrementar());
    //this.contador++;
  }

  cambiarStateUser(){
    console.log(usuarios);
    //console.log(tokenR);
    let user:UserState = usuarios[Math.floor(Math.random() * 3)];
    //console.log(user);
    this.storeUser.dispatch(actionsUser.incioSession({ user }));
  }

  decrementar() {
    console.log("Decrementar");
    this.store.dispatch(actions.decrementar());
    //this.contador = this.contador != 0 ? this.contador - 1 : 0;
  }
}
