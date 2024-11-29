import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    FiltersComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showPlaceholderImage = 'https://m.media-amazon.com/images/M/MV5BOWJhYjdjNWEtMWFmNC00ZjNkLThlZGEtN2NkM2U3NTVmMjZkXkEyXkFqcGc@._V1_.jpg'
  animePlaceholderImage = 'https://uploads.jovemnerd.com.br/wp-content/uploads/2024/08/end_of_evangelion__a0610fc6-804x1200.jpg'
  moviePlaceholderImage = 'https://m.media-amazon.com/images/I/612h-jwI+EL.AC_UF1000,1000_QL80.jpg'
  bookPlaceholderImage = 'https://m.media-amazon.com/images/I/91+1SUO3vUL.jpg'

  movies = Array(5).fill(null).map((_, index) => ({
    title: `Movie ${index + 1}`,
    image: this.moviePlaceholderImage,
    year: `200${index}`,
    rating: `${(index + 1) * 2}/10`
  }));
  
  shows = Array(5).fill(null).map((_, index) => ({
    title: `TV Show ${index + 1}`,
    image: this.showPlaceholderImage,
    year: `201${index}`,
    rating: `${(index + 1) * 1.5}/10`
  }));
  
  animes = Array(5).fill(null).map((_, index) => ({
    title: `Anime ${index + 1}`,
    image: this.animePlaceholderImage,
    year: `199${index}`,
    rating: `${(index + 1) * 3}/10`
  }));
  
  books = Array(5).fill(null).map((_, index) => ({
    title: `Book ${index + 1}`,
    image: this.bookPlaceholderImage,
    year: `198${index}`,
    rating: `${(index + 1) * 4}/10`
  }));
  
}