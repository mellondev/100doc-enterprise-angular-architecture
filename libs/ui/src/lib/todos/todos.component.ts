import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@mellondev/data';

@Component({
  selector: 'mellondev-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit(): void {}
}
