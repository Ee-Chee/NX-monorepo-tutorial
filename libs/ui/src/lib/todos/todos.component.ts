import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@my-nx/api-interfaces';

@Component({
    selector: 'my-nx-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    @Input() todos: Todo[];

    constructor() { }

    ngOnInit(): void {
    }

}
