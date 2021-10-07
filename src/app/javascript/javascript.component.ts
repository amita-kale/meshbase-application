import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent implements OnInit {
  title: string = '';
  componentDetails: { label: string; content: string } = {
    label: '',
    content: '',
  };
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // get title of this page
    this.title = this.commonService.getTitle('javascript');
    // get javascript details
    this.componentDetails = this.commonService.getJavascriptDetails();
  }
}
