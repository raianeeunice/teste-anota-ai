import { Component, Input } from '@angular/core';
import { TypePipe } from '../../../core/pipes/type.pipe';

@Component({
  selector: 'app-badge',
  imports: [TypePipe],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input({ required: true }) typeData: string = '';
}
