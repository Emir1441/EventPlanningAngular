import { Component, OnInit } from '@angular/core';
import { RegiterService } from 'src/app/services/regiter.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {

  constructor(public registerService: RegiterService) { }

  registerLists = []
  ngOnInit(): void {
    this.registerService.registrationForTheEventAsync().subscribe(res => {
      this.registerLists = res
    })
  }
}
