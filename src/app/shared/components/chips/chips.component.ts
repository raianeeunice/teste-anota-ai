import { Component, EventEmitter, input, Output } from '@angular/core';

export interface ChipModel {
  label: string;
  value: string;
  color: string;
}

@Component({
  selector: 'app-chips',
  imports: [],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss',
})
export class ChipsComponent {
  items = input<ChipModel[]>([]);
  selectedChipsList: string[] = [];

  @Output() selectedChips = new EventEmitter<string[]>();

  toggleChip(chip: string) {
    if (this.selectedChipsList.includes(chip)) {
      this.selectedChipsList = this.selectedChipsList.filter((c) => c !== chip);
    } else {
      this.selectedChipsList.push(chip);
    }

    this.selectedChips.emit(this.selectedChipsList);
  }
}
