import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-instrument',
  templateUrl: './add-edit-instrument.component.html',
  styleUrls: ['./add-edit-instrument.component.css'],
})
export class AddEditInstrumentComponent implements OnInit {
  userRole: string;

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
  }
}
