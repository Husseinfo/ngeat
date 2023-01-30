import {Component} from '@angular/core';
import {FactModel} from "../data/models";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  facts: FactModel[] = [{
    title: 'Obesity and insulin resistance',
    subtitle: '',
    description: 'Insulin resistance is a fundamental aspect of the etiology of type 2 diabetes and is also linked to a wide array of other pathophysiologic sequelae including hypertension, hyperlipidemia, atherosclerosis (i.e., the metabolic syndrome, or syndrome X), and polycystic ovarian disease. Although many details of the mechanisms by which the enlarged adipose tissue mass that defines obesity causes systemic insulin resistance remain unknown, the past several years have witnessed an explosive increase in our understanding of what may now be referred to as the adipo-insulin axis',
    url: 'https://www.jci.org/articles/view/10842',
    image: 'https://dm5migu4zj3pb.cloudfront.net/manuscripts/10000/10842/medium/JCI0010842.f2.jpg'
  }]
}
