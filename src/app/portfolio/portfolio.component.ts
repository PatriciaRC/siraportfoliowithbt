import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
   <div class="jumbotron">
    <h1 class="text-left">Portfolio</h1>
    <p class="text-justify">Los proyectos en los que he participado formando parte de un grupo, así como los que he realizado por mi cuenta van desde mejoras de diseño para aplicaciones o de páginas web ya existentes, hasta modificaciones completas de la interfaz.</p>
   </div>
  `,
  styles: [`

.jumbotron {
  background-image: url('/assets/img/portfolio.png');
  height: 110vh;
};

.text-left {
top: 30%;
position: relative;
margin-left: 1em;
font-family: 'Epilogue';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 148.5%;
color: #FFFFFF;

};

.text-justify {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 148.5%;
  color: #FFFFFF;
  width: 28em;
  };

 
  `]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
