import { Component, OnInit, Input } from '@angular/core';
import { DataStorageService } from '../data/data-storage.service';
import { MUnit } from '../models/m-unit';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  @Input()
  id: number;
  name: string;
  unity: string;
  qt: number;
  price: number;
  avaliableUnits: MUnit[] = this.data.measureMode == "g" ? [{value: "g", viewValue:"gramas"}, {value: "kg", viewValue:"quilogramas"}] : [{value: "ml", viewValue:"mililitros"}, {value: "l", viewValue:"litros"}]; 

  constructor(private data: DataStorageService) { }

  ngOnInit() {
  }

  autoDelete(){
    this.data.itens.splice(this.id, 1);
  }

}
