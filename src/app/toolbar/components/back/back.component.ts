import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'back',
    templateUrl: './back.template.html',
    styleUrls: ['./back.style.scss']
})
export class BackComponent {
    @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();

    onClick(): void {
        this.back.emit(true);
    }
}
