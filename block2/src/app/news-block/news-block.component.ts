import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/model/news';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.css']
})
export class NewsBlockComponent implements OnInit {

  @Input()
  public currentNews: News;
  public checkBoxState: boolean;   

  constructor() { 
    this.currentNews = new News(new Date, "Новость", "");
    this.checkBoxState = false;      
  }

  ngOnInit(): void {
  }

  onCheckboxChange($event:Event){
    var checkBox = ($event.target as HTMLInputElement);
    this.checkBoxState = checkBox.checked;    
  }
}
