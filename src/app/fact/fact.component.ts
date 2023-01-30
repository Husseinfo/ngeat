import {Component, Input} from '@angular/core';
import {FactModel} from "../data/models";

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent {
  @Input()
  fact!: FactModel;
}
