import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  headerTitle = 'Ticket-Board';

  tickets: Observable<Ticket[]> = of([
    {
      subject: 'Todo1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      subject: 'Todo2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      subject: 'Todo3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]);
  constructor() {}

  currentTicket?: Ticket;
    openTicket: boolean = false;
    addingTicket: boolean = false;

  ngOnInit(): void {}

  onSelectTicket(ticket: Ticket): void {
    this.currentTicket = ticket;

   
}

onDelete(): void {
    /*if (this.currentTicket) {
        this.ticketService.delete(this.currentTicket).subscribe(() => {
            this.snackbar.open('Ticket gelöscht!');
            if(this.currentTicket) this.onDeleteSubject.next(this.currentTicket);
        });
    }*/
}

onEditTicket(): void {
    this.headerTitle = "Ticket bearbeiten";
    this.addingTicket = false;
    this.openTicket = !this.openTicket;
}

onAddTicket(): void {
    this.headerTitle = "Ticket hinzufügen";
    this.addingTicket = true;
    this.currentTicket = undefined;
    this.openTicket = !this.openTicket;
}

onDeleteTicket(ticket: Ticket): void {
    /*this.ticketService.delete(ticket).subscribe(() => {
        this.currentTicket = undefined;
        this.openTicket = false;
    });*/
}

onSaveTicket(ticket: Ticket): void {
    if (this.addingTicket) {
       // this.ticketService.create(ticket).subscribe();
        this.addingTicket = false;
    } else {
       // this.ticketService.update(ticket).subscribe();
    }
}

onBack(): void {
    this.headerTitle = "Ticketen";
    this.openTicket = false;
    this.addingTicket = false;
    this.currentTicket = undefined;
}
}
