import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css'],
})
export class NodejsComponent implements OnInit {
  title: string = '';
  componentDetails: { label: string; content: string } = {
    label: '',
    content: '',
  };
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // get title of this page
    this.title = this.commonService.getTitle('nodejs');
    // get node js details
    this.componentDetails = this.commonService.getNodejsDetails();
  }
}
