import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.css']
})
export class TextSliderComponent {
  @Input() slides: string[] = [];
  currentSlideIndex: number = 0;

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
