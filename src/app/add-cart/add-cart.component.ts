import { Component } from '@angular/core';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent {

  title = ""
  price = ""
  description = ""
  category = ""
  image = ""
  rate = ""
  count = ""
  sellerName = ""
  
  addCart = () => {
    let data:any = {"title":this.title,
    "price":this.price,
    "description":this.description,
    "category":this.category,
    "image":this.image,
    "sellerName":this.sellerName,
    "rating":{"rate":this.rate,"count":this.count}}

    console.log(data);
    
  }
  
  
}
