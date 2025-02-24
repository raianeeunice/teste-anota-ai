import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnotaAiModel } from '../../../core/models/anota-ai.model';
import { BadgeComponent } from '../badge/badge.component';
import { ButtonRemoveComponent } from '../button-remove/button-remove.component';

@Component({
  selector: 'app-card-anota-ai',
  imports: [BadgeComponent, ButtonRemoveComponent],
  templateUrl: './card-anota-ai.component.html',
  styleUrl: './card-anota-ai.component.scss',
})
export class CardAnotaAiComponent {
  @Input({ required: true }) info: AnotaAiModel | null = null;
  @Output() removeDataId = new EventEmitter<number>();
}
