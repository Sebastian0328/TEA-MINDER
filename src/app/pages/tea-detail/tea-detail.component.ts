import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-tea-detail',
  standalone: true,
  imports: [],
  templateUrl: './tea-detail.component.html',
  styleUrl: './tea-detail.component.scss'
})
export class TeaDetailComponent {
  @Input("id") detailID!: String

}
