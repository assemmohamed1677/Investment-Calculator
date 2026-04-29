import { Component, signal } from '@angular/core';
import type { AnnualData, InvestmentInput} from "./investment-input.model";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  results = signal<AnnualData []| undefined>(undefined)


}

