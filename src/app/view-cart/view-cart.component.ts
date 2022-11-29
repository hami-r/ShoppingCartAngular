import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {

  constructor(private api:ApiService) {
    api.fetch().subscribe(
      (response) => {
        this.list = response
      }
    )
  }
  list:any = []
}
