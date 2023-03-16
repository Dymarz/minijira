import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path: 'ticket-list', component: TicketListComponent},
  {path: 'ticket', component: TicketComponent},
  {path: 'tickets', component: TicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
