import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-history-primary-card',
  imports: [CardModule],
  templateUrl: './history-primary-card.component.html',
  styleUrl: './history-primary-card.component.scss'
})
export class HistoryPrimaryCardComponent {
@Input() diagnosisName:string=''
@Input() diagnosisDate:string=''
@Input() diagnosisImageUrl:string=''
}
