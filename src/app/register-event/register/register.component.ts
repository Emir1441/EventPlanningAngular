import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegiterService } from 'src/app/services/regiter.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input('eventId') eventId: number
  form: FormGroup
  registerModel: any
  constructor(public registerService: RegiterService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      phoneNumber: new FormControl(null),
      eventId: new FormControl(this.eventId)
    })
  }
  onSubmit() {
    console.log(this.form.value)
    this.registerService.addRegister(this.form.value).subscribe(res => {
      console.log(this.registerModel = res)
    })
  }
}
