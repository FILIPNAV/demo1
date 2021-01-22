import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

  click = e => {
    const buttonText = e.component.option("text");
    notify("The " + this.capitalize(buttonText) + " button was clicked");
  }


}
