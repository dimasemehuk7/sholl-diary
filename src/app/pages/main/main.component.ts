import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private api: ApiService) { }

  // state
  st = {
    page: {
      allMonthes: {},
      oneMonth: [],
      days: []
    },
    nav: {},
    editBall: {
      show: false,
      info: { ball: 0, type: '', coment: '' },
    },
    chosen: 9,
    class: {
      lesson_list: ['Математика', 'English'],
      selected_lesson: 'English',
    },
    allSubjects: <any>{}
  }




  async ngOnInit() {
    try {
      const data: any = await this.api.getInfo()
      console.log(data);
      this.st.allSubjects = data
      this.st.page.allMonthes = data.subjects.English;
      this.checkMonth(9);
      //this.st.page.allMonthes['m'+ month]
      for (let i = 1; i <= 31; i++) {
        this.st.page.days.push(i);
        console.log(i);
      }
    } catch (error) {
      console.log(error)
    }

  }

  edit(record) {
    this.st.editBall.info = record;
    this.st.editBall.show = true;
  }

  onChangeSelect(e) {
    console.log(e.target.value)

    this.st.page.allMonthes = this.st.allSubjects.subjects[e.target.value];
    this.checkMonth(9);//passing 1 month to wiev
    console.log(this.st.page.allMonthes)
  }

  //passing 1 month to wiev
  checkMonth(month) {
    console.log(month)
    this.st.page.oneMonth = this.st.page.allMonthes['m' + month];
  }
}

