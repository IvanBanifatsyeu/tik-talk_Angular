import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow'); // Подсветка при наведении
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Убираем подсветку при уходе курсора
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color); // Устанавливаем цвет фона
  }
}