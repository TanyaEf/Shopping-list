import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('componentSelected') componentSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(componentName: string) {
  this.componentSelected.emit(componentName);
  }
}
