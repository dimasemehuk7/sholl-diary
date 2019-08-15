import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-ball',
  templateUrl: './edit-ball.component.html',
  styleUrls: ['./edit-ball.component.scss']
})
export class EditBallComponent implements OnInit {
  @Input() st: any
  constructor() { }

  ngOnInit() {
    console.log(this.st)
  }
  check_ball(b){
console.log(this.st.info.ball,b)
this.st.info.ball=b;
  }

  save() {
    this.st.show = false
    console.log(this.st.info.coment)
  
  }
  onChangeSelect(e) {
    console.log(e.target.value);
  }
}

