import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion-carrusel',
  templateUrl: './seccion-carrusel.component.html',
  styleUrl: './seccion-carrusel.component.css'
})
export class SeccionCarruselComponent {
  images = [
    'img/image21.png',
    'img/image22.png',
    'img/image23.png'
  ];
  currentIndex = 0;
  currentIndex2 = 1;
  currentIndex3 = 2;
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentIndex2 = (this.currentIndex2 + 1) % this.images.length;
    this.currentIndex3 = (this.currentIndex3 + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.currentIndex2 = (this.currentIndex2 - 1 + this.images.length) % this.images.length;
    this.currentIndex3 = (this.currentIndex3 - 1 + this.images.length) % this.images.length;
  }
}
