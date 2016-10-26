import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-shell',
  templateUrl: './content-shell.component.html',
  styleUrls: ['./content-shell.component.css']
})
export class ContentShellComponent implements OnInit {
  visible = true;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
      this.visible = !this.visible;
  }
}
