import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    type!: string;
    title!: string;
    year!: string;
    rating!: string;
    image!: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.type = this.route.snapshot.queryParamMap.get('type') || '';
        this.title = this.route.snapshot.queryParamMap.get('title') || '';
        this.year = this.route.snapshot.queryParamMap.get('year') || 'N/A';
        this.rating = this.route.snapshot.queryParamMap.get('rating') || 'N/A';
        this.image = this.route.snapshot.queryParamMap.get('image') || '';
    }
}
