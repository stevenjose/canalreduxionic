import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, UserState } from "src/app/app.reducers";
@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styleUrls: ["./hijo.component.scss"],
})
export class HijoComponent implements OnInit {
  contador: number;
  user: UserState;
  constructor(private store: Store<AppState>) {
    this.store.select("contador").subscribe((state) => {
      this.contador = state;
    });
    this.store.select("user").subscribe((state: UserState) => {
      /*  this.user.name  = state.name;
      this.user.token = state.token;
 */
        this.user = state;
        console.log(this.user);
    });
  }

  ngOnInit() {}
}
