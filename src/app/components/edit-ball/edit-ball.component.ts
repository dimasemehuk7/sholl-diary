import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit-ball',
  templateUrl: './edit-ball.component.html',
  styleUrls: ['./edit-ball.component.scss']
})
export class EditBallComponent implements OnInit {
  @Input() st: any
  constructor(private api: ApiService) { }

  ngOnInit() {
    console.log(this.st)
  }
  check_ball(b) {
    console.log(this.st.info.ball, b)
    this.st.info.ball = b;
  }

  async save() {
    try {
      this.st.show = false
      console.log(this.st.info.coment)
      const fullRecord={
        record:this.st.info,
        day:this.st.i
      }
      const data: any = await this.api.editRecords(fullRecord)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  onChangeSelect(e) {
    console.log(e.target.value);
  }
}

