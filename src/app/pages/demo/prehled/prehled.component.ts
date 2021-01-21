import { NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit } from '@angular/core';
import {PrehledService} from './prehled.service';

@Component({
  selector: 'app-prehled',
  templateUrl: './prehled.component.html',
  styleUrls: ['./prehled.component.scss']
})
export class PrehledComponent {

  dataSource: any;

  constructor(service: PrehledService) {
    this.dataSource = service.getDataSource();
  }

}
