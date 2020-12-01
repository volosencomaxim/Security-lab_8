import { Component, OnInit } from "@angular/core";
import Cotter from "cotter"; // 2️⃣ Import Cotter

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "My Cotter App";

  // 2️⃣ Initialize and show the form on init
  success = false;
  payload = null;
  payloadString = null;

  constructor() {}

  ngOnInit() {
    // ⭐ Show Email Form
    var cotter = new Cotter("47775a9e-f599-4999-b6ea-f901315ad31b");
    cotter
      .signInWithLink()
      .showEmailForm() // 👈 Update type to PHONE
      .then((payload: object) => {
        this.success = true;
        this.payload = payload;
        this.payloadString = JSON.stringify(payload, null, 4);
      })
      .catch((err: any) => console.log(err));
  }
}
