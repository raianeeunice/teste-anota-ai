import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnotaAiModel } from '../../models/anota-ai.model';
import { AnotaAiService } from './anota-ai.service';

describe('AnotaAiService', () => {
  let service: AnotaAiService;
  let httpMock: HttpTestingController;

  const mockData: AnotaAiModel[] = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Desc 1',
      img: 'img/test1',
      type: '1',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Desc 2',
      img: 'img/test2',
      type: '2',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        AnotaAiService,
      ],
    });
    service = TestBed.inject(AnotaAiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data from API and update the signal', () => {
    service.fetchData();

    const req = httpMock.expectOne(service['baseUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    expect(service.getFilteredData()()).toEqual(mockData);
  });

  it('should filter data by searchQuery', () => {
    const mockDataExpect = mockData[0];
    service['data'].set(mockData);

    service.updateSearchQuery('Item 1');
    expect(service.getFilteredData()()).toEqual([mockDataExpect]);
  });

  it('should remove an item by ID', () => {
    const mockDataExpect = mockData[0];
    service['data'].set(mockData);

    service.removeData(2);
    expect(service.getFilteredData()()).toEqual([mockDataExpect]);
  });
});
