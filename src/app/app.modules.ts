import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";



@NgModule({
declarations :[AppComponent , UserInputComponent,InvestmentResultsComponent,HeaderComponent],
bootstrap : [AppComponent],
imports :[BrowserModule , FormsModule],



})
export class AppModule {

}