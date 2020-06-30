import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserState } from "src/app/app.reducers";

@Component({
  selector: "app-nieto",
  templateUrl: "./nieto.component.html",
  styleUrls: ["./nieto.component.scss"],
})
export class NietoComponent implements OnInit {
  public user: any;

  constructor(private storeUser: Store<UserState>) {
    this.storeUser.select("token").subscribe((state) => {
      console.log(state);
      this.user = state;
    });
  }

  ngOnInit() {}
}
