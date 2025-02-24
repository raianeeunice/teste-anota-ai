import { Component } from '@angular/core';
import { TopBarComponent } from '../shared/components/top-bar/top-bar.component';
import { AnotaAiListComponent } from './anota-ai-list/anota-ai-list.component';

@Component({
  selector: 'app-main-layout',
  imports: [TopBarComponent, AnotaAiListComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
