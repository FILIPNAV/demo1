import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';

@Injectable({
  providedIn: 'root'
})
export class PrehledService {
  getDataSource() {
    return new DataSource({
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products'
      },
      select: [
        'Product_ID',
        'Product_Name',
        'Product_Cost',
        'Product_Sale_Price',
        'Product_Retail_Price',
        'Product_Current_Inventory'
      ],
      filter: ['Product_Current_Inventory', '>', 0]
    });
  }
}
