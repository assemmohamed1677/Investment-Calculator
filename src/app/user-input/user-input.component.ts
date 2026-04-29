import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule} from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
initialInvestment= signal<string>('0') ;
annualInvestment= signal <string> ('0');
duration =  signal <string> ('5');
expectedReturn = signal <string> ('10');

@Output() calc = new EventEmitter<InvestmentInput>()

onCalculate (){
 this.calc.emit({initialInvestment : +this.initialInvestment() , annualInvestment: +this.annualInvestment(),duration: +this.duration(), expectedReturn:+this.expectedReturn()})

}
}
