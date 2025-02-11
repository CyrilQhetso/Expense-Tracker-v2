import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { fromEvent, takeUntil, timer } from 'rxjs';

@Directive({
  selector: '[appLongPress]',
  standalone: false
})
export class LongPressDirective {
  @Output() longPress = new EventEmitter<any>();
  @Input() longPressDuration = 200;

  private longPressed = false;
  private longPressSubscription: any;

  constructor(private _element: ElementRef) { }

  @HostListener('touchstart')
  onTouchStart() {
    this.longPressed = true;
    this.longPressSubscription = timer(this.longPressDuration).pipe
    (takeUntil(fromEvent(this._element.nativeElement, 'touched'))).
    subscribe(() => {
      if (this.longPressed) {
        this.longPress.emit();
      }
    });
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.longPressed = false;
    if (this.longPressSubscription) {
      this.longPressSubscription.unsubscribe();
    }
  }
}
