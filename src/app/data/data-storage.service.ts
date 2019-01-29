import { Injectable } from '@angular/core';
import { CompItem } from '../models/comp-item';
import { MUnit } from '../models/m-unit';

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {
  
  public measureMode: string;
  public currentItemID = 0;

  public mUnits: MUnit[] = [
    {value: 'g', viewValue: 'gramas / quilogramas'},
    {value: 'ml', viewValue: 'mililitros/ litros'}
  ]

  public itens: CompItem[] = [
    { name:"", unit: "", qt: 0, price: 0, id: 0}
  ];

  constructor() { }
}
