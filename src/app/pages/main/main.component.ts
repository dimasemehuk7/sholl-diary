import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  page = {
    students: [
      {
        number: '1',
        name:'Семегук Дмитро',
        balls:[10,11,12,9,11,,,,,,,,,,,,,,,,,,,,,,,, ]
      }
    ],
    days: []
  }

  ngOnInit() {
    for (let i=1;i<=31;i++){
     this.page.days.push(i);
     console.log(i)
    }
  }
  edit(){
    alert()
  }
}
