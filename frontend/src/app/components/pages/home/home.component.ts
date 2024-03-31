import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { shoeService } from 'src/app/services/shoe.service';
import { shoe } from 'src/app/shared/models/shoe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shoes: shoe[] = [];
  constructor(private shoeService: shoeService, activatedRoute: ActivatedRoute) {
    let shoesObservalbe:Observable<shoe[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        shoesObservalbe = this.shoeService.getAllshoesBySearchTerm(params.searchTerm);
      else if (params.tag)
        shoesObservalbe = this.shoeService.getAllshoesByTag(params.tag);
      else
        shoesObservalbe = shoeService.getAll();

        shoesObservalbe.subscribe((servershoes) => {
          this.shoes = servershoes;
        })
    })
  }

  ngOnInit(): void {
  }

}
