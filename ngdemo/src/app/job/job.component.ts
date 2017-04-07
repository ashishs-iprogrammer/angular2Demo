import { Component, OnInit } from '@angular/core';
import {JobinfoService} from "./jobinfo.service";
import {ScrollToModule} from 'ng2-scroll-to';


@Component({
  selector: 'app-root',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers: [JobinfoService]
})
export class JobComponent implements OnInit {
  jobinfo: any = "Hello String";
  constructor(private jobItem : JobinfoService) { }

  ngOnInit() {
    /*Call to the service to initialize the job details*/
    this.jobinfo = this.jobItem.getJobInfoById(1);
  }

}
