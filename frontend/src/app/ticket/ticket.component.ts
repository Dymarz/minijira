import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent{

  @Output()
  saveTicket = new EventEmitter<Ticket>();

  @Input()
  ticket?: Ticket;

  onSave(){
    this.saveTicket.emit(this.ticket);
  }

}
