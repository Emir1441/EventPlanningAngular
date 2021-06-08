import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  form: FormGroup
  constructor(private modalService: NgbModal, private eventService: EventService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      eventName: new FormControl(null),
      eventLocation: new FormControl(null),
      eventDescription: new FormControl(null),
      eventTime: new FormControl(null),
    })
  }
  closeModal() {
    this.modalService.dismissAll();
  }
  onSubmit() {
    this.eventService.addEvent(this.form.value).subscribe(res => {
      console.log(res)
    })
  }

}
