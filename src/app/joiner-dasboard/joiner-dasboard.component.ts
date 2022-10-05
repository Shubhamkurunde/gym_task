import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-joiner-dasboard',
  templateUrl: './joiner-dasboard.component.html',
  styleUrls: ['./joiner-dasboard.component.css']
})
export class JoinerDasboardComponent implements OnInit {
  
  

  constructor(public _state:StateService) { }
   
  ngOnInit(): void {
    
  }
   
  

}
