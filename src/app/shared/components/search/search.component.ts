import { HostListener } from "@angular/core";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {

    @Output() userInput = new EventEmitter();
    form: FormGroup;

    constructor(
        private fB: FormBuilder
    ){}

    ngOnInit(){
        this.formInit();
    }

    formInit(){
        this.form = this.fB.group({
            searchField: []
        });
        // this is with oninput debounce rxjs 
        // this.form.get('searchField').valueChanges.pipe(
        //     debounceTime(500),
        //     distinctUntilChanged()
        // )
        // .subscribe(val => {
        //     this.userInput.emit(val);
        // });
    }

    @HostListener('document:keyup', ['$event'])
    handleSendSearchDataEvent(event: KeyboardEvent) {
        if(event.key === 'Enter'){
            this.sendSearchData();
        }
    }

    sendSearchData(){
        this.userInput.emit(this.form.get('searchField').value);
    }

}