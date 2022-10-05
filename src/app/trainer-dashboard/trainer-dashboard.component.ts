import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent implements OnInit {
 name = '';
  constructor(private _state:StateService) { }

  ngOnInit(): void {
    alert(`Welcome ${this._state.usertype.name}`);
  }

}
