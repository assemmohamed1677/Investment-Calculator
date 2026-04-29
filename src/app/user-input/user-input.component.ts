import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule} from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  standalone: false ,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
initialInvestment= signal<string>('0') ;
annualInvestment= signal <string> ('0');
duration =  signal <string> ('5');
expectedReturn = signal <string> ('10');

constructor(private investmentservice: InvestmentService){}

onCalculate (){
 this.investmentservice.calculateInvestmentResults({initialInvestment : +this.initialInvestment() , annualInvestment: +this.annualInvestment(),duration: +this.duration(), expectedReturn:+this.expectedReturn()})

}
}
