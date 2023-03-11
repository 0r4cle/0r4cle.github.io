import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'notes',
    templateUrl: './notes.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesComponent {
    /**
     * Constructor
     */
    likes: number;
    dislikes: number;

    constructor() {
        this.likes = parseInt(localStorage.getItem('likes')) || 0;
        this.dislikes = parseInt(localStorage.getItem('dislikes')) || 0;
    }

    like() {
        this.likes++;
        localStorage.setItem('likes', this.likes.toString()); // Store the updated likes count in localStorage
    }

    dislike() {
        this.dislikes--;
        localStorage.setItem('dislikes', this.dislikes.toString()); // Store the updated dislikes count in localStorage
    }
}
