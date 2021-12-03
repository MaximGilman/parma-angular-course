import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header-editform',
  templateUrl: './header-editform.component.html',
  styleUrls: ['./header-editform.component.css']
})
export class HeaderEditformComponent implements OnInit {

  @Input() title!: string;
  @Output() closeNews : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeNews.emit(true);
  }
}
