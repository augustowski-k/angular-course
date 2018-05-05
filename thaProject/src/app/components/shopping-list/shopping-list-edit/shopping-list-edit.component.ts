import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Ingredient } from '../../../models/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingrName = this.nameInputRef.nativeElement.value;
    const ingrAmount = Number(this.amountInputRef.nativeElement.value);
    const ingredient = new Ingredient(ingrName, ingrAmount);
    this.ingredientAdded.emit(ingredient);
  }
}
