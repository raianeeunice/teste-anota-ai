import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { AnotaAiModel } from '../../models/anota-ai.model';

@Injectable({
  providedIn: 'root',
})
export class AnotaAiService {
  private readonly baseUrl =
    'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json';

  private searchQuery = signal<string>('');
  private chipQuery = signal<string[]>([]);
  private data = signal<AnotaAiModel[]>([]);

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http
      .get<AnotaAiModel[]>(this.baseUrl)
      .subscribe((response: AnotaAiModel[]) => {
        this.data.set(response);
      });
  }

  filteredData = computed(() => {
    const query = this.searchQuery();
    const selectedTypes = this.chipQuery();

    return this.data().filter((data) => {
      const matchesQuery =
        data.title.includes(query) || data.description.includes(query);
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(data.type);
      return matchesQuery && matchesType;
    });
  });

  getFilteredData() {
    return this.filteredData;
  }

  removeData(id: number) {
    this.data.update((data) => data.filter((t) => t.id !== id));
  }

  updateSearchQuery(query: string) {
    this.searchQuery.set(query);
  }

  updateChipQuery(types: string[]) {
    this.chipQuery.set([...types]);
  }
}
