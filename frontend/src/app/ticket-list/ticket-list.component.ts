import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TableInitsComponent } from '../table-inits';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent
  extends TableInitsComponent<Ticket>
  implements OnInit, OnDestroy
{
  @Input()
  tickets: Observable<Ticket[]> = new Observable<Ticket[]>();

  @Output()
  showTicket = new EventEmitter<Ticket>();

  displayedColumns: string[] = ['subject', 'description'];

  selectedTicket?: Ticket;

  private eventsSubscription?: Subscription;

  ngOnDestroy(): void {
    this.eventsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this._loadData(this.tickets);
  }

  onShowTicket(ticket: Ticket): void {
    if (ticket === this.selectedTicket) {
      this.showTicket.emit(undefined);
      this.selectedTicket = undefined;
    } else {
      this.showTicket.emit(ticket);
      this.selectedTicket = ticket;
    }
  }

  protected _defineFilterPredicate(): (
    data: Ticket,
    filter: string
  ) => boolean {
    return (data: Ticket, filter: string): boolean => {
      const allValuesInOneString = '' + data.description + data.subject;
      return (
        allValuesInOneString?.trim().toLowerCase().includes(filter) ?? false
      );
    };
  }

  protected _defineSortingAccessor(): (
    data: Ticket,
    property: string
  ) => string {
    return (data: Ticket, property: string) => {
      switch (property) {
        case 'subject': {
          return data.subject ?? '';
      }

      case 'description': {
          return data.description ?? '';
      }
        default: {
          return '';
        }
      }
    };
  }

  private _loadData(tickets: Observable<Ticket[]>): void {
    tickets.subscribe((tickets) => {
      this.dataSource.data = tickets;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
