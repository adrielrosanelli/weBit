import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimacaoService {

  constructor() { }


  carregaAnimacao(elementName: string) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        const square = document.getElementsByClassName(elementName)[0];

        if (entry.isIntersecting) {
          square!.classList.add(elementName + '-animation');
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square!.classList.remove(elementName + '-animation');
      });
    });

    observer.observe(document.querySelector('.' + elementName)!);
  }
}
