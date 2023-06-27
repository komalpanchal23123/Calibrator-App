import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-instrument-group',
  templateUrl: './add-instrument-group.component.html',
  styleUrls: ['./add-instrument-group.component.css'],
})
export class AddInstrumentGroupComponent implements OnInit {
  userRole: string;

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
  }
}
