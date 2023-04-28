import { Directive, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit, OnDestroy {

    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    constructor() { }
    
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}