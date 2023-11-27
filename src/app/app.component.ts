import { Component } from '@angular/core';

declare const gsap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loteria-sem-segredo-2';

  constructor() { }

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ default: { duration: 0.5}});

    const amazon = document.querySelector('.amazon');
    const americanas = document.querySelector('.americanas');
    const shopee = document.querySelector('.shopee');
    const clube = document.querySelector('.clube');
    const barnes = document.querySelector('.barnes');
    const estante = document.querySelector('.estante');
    const shoptime = document.querySelector('.shoptime');
    const lessDelay = "-=0.4";

    tl.fromTo(amazon,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 })
    .fromTo(americanas,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }, lessDelay)
    .fromTo(shopee,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }, lessDelay)
    .fromTo(clube,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }, lessDelay)
    .fromTo(barnes,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }, lessDelay)
    .fromTo(estante,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }, lessDelay)
    .fromTo(shoptime,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }, lessDelay)
  }
}
