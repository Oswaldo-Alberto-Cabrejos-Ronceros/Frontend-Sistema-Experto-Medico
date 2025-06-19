import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-page',
  imports: [CommonModule],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.scss',
})
export class HelpPageComponent {
  contents: { subtitle: string; description: string }[] = [
    {
      subtitle: 'Pregunta 1',
      description: `Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosqu luctus
       torquent nec a, etiam euismod metus morbi vulputate phasellus suspendisse aliquet nisi ante
        vestibulum cum habitant. Penatibus nulla rutrum convallis tempus at fringilla pulvinar condimentum
         malesuada suspendisse`,
    },
    {
      subtitle: 'Pregunta 2',
      description: `Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosqu luctus
       torquent nec a, etiam euismod metus morbi vulputate phasellus suspendisse aliquet nisi ante
        vestibulum cum habitant. Penatibus nulla rutrum convallis tempus at fringilla pulvinar condimentum
         malesuada suspendisse`,
    },
    {
      subtitle: 'Pregunta 3',
      description: `Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosqu luctus
       torquent nec a, etiam euismod metus morbi vulputate phasellus suspendisse aliquet nisi ante
        vestibulum cum habitant. Penatibus nulla rutrum convallis tempus at fringilla pulvinar condimentum
         malesuada suspendisse`,
    },
    {
      subtitle: 'Pregunta 4',
      description: `Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosqu luctus
       torquent nec a, etiam euismod metus morbi vulputate phasellus suspendisse aliquet nisi ante
        vestibulum cum habitant. Penatibus nulla rutrum convallis tempus at fringilla pulvinar condimentum
         malesuada suspendisse`,
    },
  ];
}
