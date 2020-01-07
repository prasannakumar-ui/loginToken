import { Component } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent   {

  constructor(private s:ServiceService) { }
  
 
}
