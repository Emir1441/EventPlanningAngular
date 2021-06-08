import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  eventsModel: any = []
  constructor(private modalService: NgbModal, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvent().subscribe(res => {
      console.log(this.eventsModel = res)
    })
  }
  registEventModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
