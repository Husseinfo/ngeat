import {Component} from '@angular/core';
import {FactModel} from "../data/models";
import {getFacts} from "../services/firebase"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  facts: FactModel[] = [];

  ngOnInit() {
    getFacts().then(data => {
      this.facts = data;
    });
  }
}
