import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  cursorPosition = 0;

  constructor() { }

  ngOnInit() {
  }

  setCursorPosition(event: any, el): void {
    console.log('setCursorPointer()');
  }

  foo(el: any): void {
    console.log('foo()');
    el.focus();
    el.setSelectionRange(2, 2);
  }
}
