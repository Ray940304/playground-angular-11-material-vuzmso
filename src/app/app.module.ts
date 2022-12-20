import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PageHeadingComponent } from "./page-heading/page-heading.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule],
  declarations: [AppComponent, PageHeadingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
