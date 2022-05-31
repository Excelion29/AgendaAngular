import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import TimeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  public events: any[];
  public options:any;

  constructor(){
  }

  ngOnInit(): void {

    this.options= {
      plugins: [dayGridPlugin, TimeGridPlugin,interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header:{
        left:'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridweek, timeGridDay'
      },
      editable: false
    }

    this.events = [
      {
        title: "Evento 1",
        start: new Date(),
        description: "Evento 1"
      },
      {
        title: "Evento 2",
        start: new Date(new Date().getTime() + (8640000)),
        description: "Evento 2"
      },
      {
        title: "Evento 3",
        start: new Date(new Date().getTime() + (8640000 * 2)),
        end: new Date(new Date().getTime() + (8640000 * 3)),
        description: "Evento 3"
      }
    ]
  }

}
