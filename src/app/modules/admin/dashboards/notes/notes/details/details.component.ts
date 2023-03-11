import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    debounceTime,
    map,
    Observable,
    of,
    Subject,
    switchMap,
    takeUntil,
} from 'rxjs';
import { NotesService } from 'app/modules/admin/dashboards/notes/notes/notes.service';
import {
    labels as labelsData,
    notes as notesData,
} from 'app/mock-api/apps/notes/data';
import {
    Label,
    Note,
    Task,
} from 'app/modules/admin/dashboards/notes/notes/notes.types';
import { user } from 'app/mock-api/common/user/data';
import { User } from 'app/core/user/user.types';
import { UserService } from 'app/core/user/user.service';

@Component({
    selector: 'notes-details',
    templateUrl: './details.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesDetailsComponent implements OnInit, OnDestroy {
    note$: Observable<Note>;
    labels$: Observable<Label[]>;
    private _labels: any[] = labelsData;
    private _notes: any[] = notesData;
    public user: User;
    noteChanged: Subject<Note> = new Subject<Note>();
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // LIKE DISLIKE
    likes = 0;
    dislikes = 0;

    like() {
        this.likes++;
    }

    dislike() {
        this.dislikes--;
    }
    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private userService: UserService,
        @Inject(MAT_DIALOG_DATA) private _data: { note: Note },
        private _notesService: NotesService,
        private _matDialogRef: MatDialogRef<NotesDetailsComponent>
    ) {
        this.userService.user$.subscribe((user) => {
            this.user = user;
            this.handleCoinUpdate();
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Edit

        if (this._data.note.id) {
            // Request the data from the server
            this._notesService.getNoteById(this._data.note.id).subscribe();

            // Get the note
            this.note$ = this._notesService.note$;
        }
        // Add
        else {
            // Create an empty note
            const note = {
                id: null,
                title: '',
                content: '',
                value: ' ',
                tasks: null,
                image: null,
                reminder: null,
                labels: [],
                archived: false,
                user_view: false,
                createdAt: null,
                updatedAt: null,
            };

            this.note$ = of(note);
        }

        // Get the labels
        this.labels$ = this._notesService.labels$;

        // Subscribe to note updates
        this.noteChanged
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(500),
                switchMap((note) => this._notesService.updateNote(note))
            )
            .subscribe(() => {
                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create a new note
     *
     * @param note
     */
    createNote(note: Note): void {
        this._notesService
            .createNote(note)
            .pipe(
                map(() => {
                    // Get the note
                    this.note$ = this._notesService.note$;
                })
            )
            .subscribe();
    }

    /**
     * Upload image to given note
     *
     * @param note
     * @param fileList
     */
    uploadImage(note: Note, fileList: FileList): void {
        // Return if canceled
        if (!fileList.length) {
            return;
        }

        const allowedTypes = ['image/jpeg', 'image/png'];
        const file = fileList[0];

        // Return if the file is not allowed
        if (!allowedTypes.includes(file.type)) {
            return;
        }

        this._readAsDataURL(file).then((data) => {
            // Update the image
            note.image = data;

            // Update the note
            this.noteChanged.next(note);
        });
    }

    /**
     * Remove the image on the given note
     *
     * @param note
     */
    removeImage(note: Note): void {
        note.image = null;

        // Update the note
        this.noteChanged.next(note);
    }

    /**
     * Add an empty tasks array to note
     *
     * @param note
     */
    addTasksToNote(note): void {
        if (!note.tasks) {
            note.tasks = [];
        }
    }

    /**
     * Add task to the given note
     *
     * @param note
     * @param task
     */
    addTaskToNote(note: Note, task: string): void {
        if (task.trim() === '') {
            return;
        }

        // Add the task
        this._notesService.addTask(note, task).subscribe();
    }

    /**
     * Remove the given task from given note
     *
     * @param note
     * @param task
     */
    removeTaskFromNote(note: Note, task: Task): void {
        // Remove the task
        note.tasks = note.tasks.filter((item) => item.id !== task.id);

        // Update the note
        this.noteChanged.next(note);
    }

    /**
     * Update the given task on the given note
     *
     * @param note
     * @param task
     */
    updateTaskOnNote(note: Note, task: Task): void {
        // If the task is already available on the item
        if (task.id) {
            // Update the note
            this.noteChanged.next(note);
        }
    }

    /**
     * Is the given note has the given label
     *
     * @param note
     * @param label
     */
    isNoteHasLabel(note: Note, label: Label): boolean {
        return !!note.labels.find((item) => item.id === label.id);
    }

    /**
     * Toggle the given label on the given note
     *
     * @param note
     * @param label
     */
    toggleLabelOnNote(note: Note, label: Label): void {
        // If the note already has the label
        if (this.isNoteHasLabel(note, label)) {
            note.labels = note.labels.filter((item) => item.id !== label.id);
        }
        // Otherwise
        else {
            note.labels.push(label);
        }

        // Update the note
        this.noteChanged.next(note);
    }

    /**
     * Toggle archived status on the given note
     *
     * @param note
     */
    toggleArchiveOnNote(note: Note): void {
        note.archived = !note.archived;
        note.user_view = true;

        // Update the note
        this.noteChanged.next(note);

        // Close the dialog
        this._matDialogRef.close();
    }

    /**
     * Update the note details
     *
     * @param note
     */
    updateNoteDetails(note: Note): void {
        this.noteChanged.next(note);
    }

    /**
     * Delete the given note
     *
     * @param note
     */
    deleteNote(note: Note): void {
        this._notesService.deleteNote(note).subscribe((isDeleted) => {
            // Return if the note wasn't deleted...
            if (!isDeleted) {
                return;
            }

            // Close the dialog
            this._matDialogRef.close();
        });
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Read the given file for demonstration purposes
     *
     * @param file
     */
    private _readAsDataURL(file: File): Promise<any> {
        // Return a new promise
        return new Promise((resolve, reject) => {
            // Create a new reader
            const reader = new FileReader();

            // Resolve the promise on success
            reader.onload = (): void => {
                resolve(reader.result);
            };

            // Reject the promise on error
            reader.onerror = (e): void => {
                reject(e);
            };

            // Read the file as the
            reader.readAsDataURL(file);
        });
    }

    createCopy(noteIdToCopy: string) {
        const noteToCopy = notesData.find((note) => note.id === noteIdToCopy);

        const groups = noteIdToCopy.split('-');
        groups[3] = 'copy';

        const newNote = {
            ...noteToCopy,
            id: groups.join('-'),
            archived: false,
        };

        const noteIndex = notesData.findIndex(
            (note) => note.id === noteIdToCopy
        );

        notesData.splice(noteIndex + 1, 0, newNote);
        console.log(notesData);
        return noteToCopy;
    }

    //  COINS
    subtractNotePriceFromUserCoins(id: string) {
        const note = notesData.find((note) => note.id === id);

        let price = parseInt(note.price);
        if (price <= user.coins) {
            user.coins -= price;

            document.getElementById('coins').innerHTML = user.coins.toString();
<<<<<<< HEAD
            document.getElementById('coinss').innerHTML = user.coins.toString();

            if (user.coins - price === 0) {
                document.getElementById('coinsk').classList.add('blur-sm');
=======

            if (user.coins - price === 0) {
                document.getElementById('coins').classList.add('blur-sm');
>>>>>>> b059efdbc2673a6a20f9fc096118dd0bed670edf
            }
            // console.log(
            //     `Subtracted ${price} coins from user's balance. New balance: ${user.coins}`
            // );
        } else {
            console.log(
                `User's balance is not sufficient to buy the note. Note price: ${price}. User's balance: ${user.coins}`
            );
        }
    }

    handleCoinUpdate() {
        if (this.user.coins === 0) {
            const pixelElement = document.getElementById('pixel');
            if (pixelElement) {
                pixelElement.classList.add('blur-sm');
            }
        }
    }
}
