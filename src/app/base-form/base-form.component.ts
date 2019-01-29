import { Component } from '@angular/core';
import { MUnit } from '../models/m-unit';
import { CompItem } from '../models/comp-item';
import { DataStorageService } from '../data/data-storage.service'

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent {
  mUnits: MUnit[];
  itens: CompItem[];

  constructor(private data: DataStorageService){
    this.mUnits = this.data.mUnits;
    this.itens = this.data.itens;
  }

  addItem(){
    this.data.currentItemID++;
    this.data.itens.push(
      {name: '', unit: '', qt: 0, price: 0, id: this.data.currentItemID }
    );
  }

  updateMeasureMode(e){
    console.log("entrou");
    console.log(e);
    this.data.measureMode = e;
  }
}
