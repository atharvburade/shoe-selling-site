import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { shoeService } from 'src/app/services/shoe.service';
import { shoe } from 'src/app/shared/models/shoe';

@Component({
  selector: 'app-shoe-page',
  templateUrl: './shoe-page.component.html',
  styleUrls: ['./shoe-page.component.css']
})
export class shoePageComponent implements OnInit {
  shoe!: shoe;
  constructor(activatedRoute:ActivatedRoute, shoeService:shoeService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      shoeService.getshoeById(params.id).subscribe(servershoe => {
        this.shoe = servershoe;
      });
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.shoe);
    this.router.navigateByUrl('/cart-page');
  }
}
