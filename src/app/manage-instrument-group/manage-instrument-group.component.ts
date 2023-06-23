import { Component } from '@angular/core';
import { ManageInstrumentGroupService } from './manage-instrument-group.service';
import { groupData, groupResponse } from '../interface';
import { DatePicker } from '@syncfusion/ej2-angular-calendars';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-manage-instrument-group',
  templateUrl: './manage-instrument-group.component.html',
  styleUrls: ['./manage-instrument-group.component.css'],
})
export class ManageInstrumentGroupComponent {
  constructor(
    private manageInstrumentGroupService: ManageInstrumentGroupService
  ) {}
  userRole: string;
  allGroups: groupData[];
  isEdit = false;
  button: any;
  glyphiconCalendar: any;

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.getGroups();
  }

  getGroups() {
    this.manageInstrumentGroupService
      .getAllGroups()
      .subscribe((res: groupResponse) => {
        this.allGroups = res.data.group;
        //console.log(res);
      });
  }

  onEdit() {
    this.isEdit = true;
  }
}
