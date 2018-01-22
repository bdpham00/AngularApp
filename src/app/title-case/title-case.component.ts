import { TitleCasePipe } from '@angular/common/src/pipes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {
  title: string = "Test title";

  constructor(private titleCasePipe:TitleCasePipe) { 

  }

  ngOnInit() {
  }

  transFormTitle() {
    this.title = this.titleCasePipe.transform(this.title); 
  }

}
