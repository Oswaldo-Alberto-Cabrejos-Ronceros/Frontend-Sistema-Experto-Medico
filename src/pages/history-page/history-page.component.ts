import { Component } from '@angular/core';
import { HistoryPrimaryCardComponent } from '../../components/history-primary-card/history-primary-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-page',
  imports: [HistoryPrimaryCardComponent,CommonModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.scss',
})
export class HistoryPageComponent {
  histories: {
    diagnosisName: string;
    diagnosisDate: string;
    diagnosisImageUrl: string;
  }[] = [
    {
      diagnosisName: 'Gripe',
      diagnosisDate: '15/10/2025',
      diagnosisImageUrl:
        'https://www.rinastel.com/wp-content/uploads/sites/3/2022/02/diferencias-gripe-resfriado.jpg',
    },
    {
      diagnosisName: 'Acidez estomacal',
      diagnosisDate: '20/11/2025',
      diagnosisImageUrl:
        'https://centromedicoabc.com/storage/2024/04/la-acidez-estomacal.webp',
    },
    {
      diagnosisName: 'Gripe',
      diagnosisDate: '21/11/2025',
      diagnosisImageUrl:
        'https://www.rinastel.com/wp-content/uploads/sites/3/2022/02/diferencias-gripe-resfriado.jpg',
    },
    {
      diagnosisName: 'Acidez estomacal',
      diagnosisDate: '25/11/2025',
      diagnosisImageUrl:
        'https://centromedicoabc.com/storage/2024/04/la-acidez-estomacal.webp',
    },
    {
      diagnosisName: 'Gripe',
      diagnosisDate: '05/12/2025',
      diagnosisImageUrl:
        'https://www.rinastel.com/wp-content/uploads/sites/3/2022/02/diferencias-gripe-resfriado.jpg',
    },
    {
      diagnosisName: 'Acidez estomacal',
      diagnosisDate: '12/12/2025',
      diagnosisImageUrl:
        'https://centromedicoabc.com/storage/2024/04/la-acidez-estomacal.webp',
    },
    {
      diagnosisName: 'Gripe',
      diagnosisDate: '16/12/2025',
      diagnosisImageUrl:
        'https://www.rinastel.com/wp-content/uploads/sites/3/2022/02/diferencias-gripe-resfriado.jpg',
    },
    {
      diagnosisName: 'Acidez estomacal',
      diagnosisDate: '24/12/2025',
      diagnosisImageUrl:
        'https://centromedicoabc.com/storage/2024/04/la-acidez-estomacal.webp',
    },
  ];
}
