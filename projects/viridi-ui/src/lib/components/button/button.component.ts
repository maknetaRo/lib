import { Component, Input } from '@angular/core';

@Component({
  selector: 'vi-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'Accept';
}
