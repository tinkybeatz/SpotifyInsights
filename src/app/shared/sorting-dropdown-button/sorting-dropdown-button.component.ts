import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sorting-dropdown-button',
  imports: [CommonModule],
  templateUrl: './sorting-dropdown-button.component.html',
  styleUrl: './sorting-dropdown-button.component.css',
})
export class SortingDropdownButtonComponent {
  @Input() options: { label: string; value: any }[] = []; // Array of dropdown options
  @Input() menu: string = '';
  @Output() optionSelected = new EventEmitter<any>(); // Emits selected option to the parent

  isOpen = false; // Tracks dropdown open/close state
  selectedLabel: string | null = null; // Tracks the currently selected option's label

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: { label: string; value: any }, menu: string) {
    this.selectedLabel = option.label;
    this.menu = menu;
    this.optionSelected.emit({ value: option.value, menu: menu }); // Emit selected option to the parent
    this.isOpen = false; // Close the dropdown
  }
}
