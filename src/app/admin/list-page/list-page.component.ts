import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  eventsModel = []
  constructor(private modalService: NgbModal, private eventService: EventService) { }
  ngOnInit(): void {
    this.eventService.getAllEvent().subscribe(res => {
      console.log(this.eventsModel = res)
    })
  }
  addEventModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
