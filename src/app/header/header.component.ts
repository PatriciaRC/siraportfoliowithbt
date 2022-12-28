import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
   <nav class="nav justify-content-end mt-5 fixed-top">
  <a class="nav-link mr-2" routerLink="/portfolio">Portfolio</a>
  <a class="nav-link mr-2" routerLink="/contact">Contact</a>
  <a class="nav-link mr-4" routerLink="/about">About me</a>
</nav>
     
  `,
  styles: [`

  .nav-link {
    font-family: 'Epilogue' !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 20px !important;
    line-height: 148.5% !important;
    color: #252525 !important;
  };
  .mr-4 {
    margin-right: 4em !important;
  };
  .mr-2 {
    margin-right: 2em !important;
  }
  

  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
