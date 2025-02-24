import { Component, OnInit } from '@angular/core';
import {
  ColorChips,
  LabelChips,
  ValueChips,
} from '../../core/enums/chips-anota-ai-list/chips.enum';
import { AnotaAiService } from '../../core/services/http/anota-ai.service';
import { CardAnotaAiComponent } from '../../shared/components/card-anota-ai/card-anota-ai.component';
import {
  ChipModel,
  ChipsComponent,
} from '../../shared/components/chips/chips.component';
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component';

@Component({
  selector: 'app-anota-ai-list',
  imports: [CardAnotaAiComponent, SearchInputComponent, ChipsComponent],
  templateUrl: './anota-ai-list.component.html',
  styleUrl: './anota-ai-list.component.scss',
})
export class AnotaAiListComponent implements OnInit {
  searchQuery: string = '';
  chipsList: ChipModel[] = [
    { label: LabelChips.FLOR, color: ColorChips.FLOR, value: ValueChips.FLOR },
    {
      label: LabelChips.PAISAGEM,
      color: ColorChips.PAISAGEM,
      value: ValueChips.PAISAGEM,
    },
    {
      label: LabelChips.PIZZA,
      color: ColorChips.PIZZA,
      value: ValueChips.PIZZA,
    },
  ];

  constructor(private anotaAiService: AnotaAiService) {}

  ngOnInit(): void {
    this.anotaAiService.fetchData();
  }

  get filteredData() {
    return this.anotaAiService.getFilteredData();
  }

  onSearchChange(query: string) {
    this.anotaAiService.updateSearchQuery(query);
  }

  onRemoveDataId(id: number) {
    this.anotaAiService.removeData(id);
  }

  onChipsSelected(selectedChips: string[]) {
    this.anotaAiService.updateChipQuery(selectedChips);
  }
}
