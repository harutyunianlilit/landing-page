import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviewSlides: string[] = [
    `"This is a great camera that is highly recommended. The video quality is superb, and I really mean that after owning Foscam and other camera brands for many years. The wide dynamic range feature that is barely emphasized here is one of the best I have seen in a camera of this class. Whereas the old Foscam camera would wash out against the setting Sun on the horizon, this R2 camera shows an impressive contrast of the shot by blocking the otherwise blinding light. Really, really impressive." \n - Jar, Oregon`,
    'slide 3',
    'slide 3'
   
  ];
}

