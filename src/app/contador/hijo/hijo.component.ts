import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";

@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styleUrls: ["./hijo.component.scss"],
})
export class HijoComponent implements OnInit {
  contador: number;
  constructor(private store: Store<AppState>) {
    this.store.select("contador").subscribe((state) => {
      this.contador = state;
    });
  }

  ngOnInit() {}
}
