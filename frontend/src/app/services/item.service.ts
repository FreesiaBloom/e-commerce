import { Injectable } from '@angular/core';
import { sampleItem } from 'src/data';
import { Item } from '../shared/models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAllItems(): Item[] {
    return sampleItem;
  }
}
