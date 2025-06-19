import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dignosis-unitary-page',
  imports: [ImageModule,CommonModule],
  templateUrl: './dignosis-unitary-page.component.html',
  styleUrl: './dignosis-unitary-page.component.scss',
})
export class DignosisUnitaryPageComponent {
  diagnosis: { content: string;imageUrl:string; tratamientos: string[]; pasosSeguir: string[] } =
    {
      content: `Lorem ipsum dolor sit amet consectetur adipiscing elit purus
   malesuada sociosqu luctus torquent nec a, etiam euismod metus morbi vulputate
   phasellus suspendisse aliquet nisi ante vestibulum cum habitant. Penatibus nulla
    rutrum convallis tempus at fringilla pulvinar condimentum malesuada suspendisse`,
    imageUrl:'https://www.hospitalaleman.org.ar/plan-medico-con-vos/wp-content/uploads/2023/06/nota-prevenir-gripe.jpg',
      tratamientos: [
        'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
        'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
        'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
        'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
      ],
      pasosSeguir: [
        'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
        'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
        'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
        'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
      ],
    };
}
