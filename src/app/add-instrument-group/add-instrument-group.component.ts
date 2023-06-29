import { Component, OnInit } from '@angular/core';
import { AddInstrumentGroupService } from './add-instrument-group.service';

@Component({
  selector: 'app-add-instrument-group',
  templateUrl: './add-instrument-group.component.html',
  styleUrls: ['./add-instrument-group.component.css'],
})
export class AddInstrumentGroupComponent implements OnInit {
  constructor(private addInstrumentGroup: AddInstrumentGroupService) {}
  userRole: string;
  instrumentGroups: any;

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.getInstrumentGroup();
  }

  getInstrumentGroup() {
    this.addInstrumentGroup.getInstrumentGroup().subscribe((res: any) => {
      this.instrumentGroups = res.data.group;
    });
  }
}
