import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent implements OnInit {
  title: string = '';
  componentDetails: { label: string; content: string } = {
    label: '',
    content: '',
  };
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // get title of this page
    this.title = this.commonService.getTitle('angular');
    // get angular details
    this.componentDetails = this.commonService.getAngularDetails();
  }
}
