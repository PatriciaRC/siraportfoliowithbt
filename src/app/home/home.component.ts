import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <div class="bg-image">
   </div>
  `,
  styles: [`
  .bg-image{
    background-image: url('/assets/img/sirahome.png');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
