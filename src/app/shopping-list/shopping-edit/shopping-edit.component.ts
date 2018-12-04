import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {

  }
  onAddItem(){
    console.log( "hello" );
    const inName = this.nameInputRef.nativeElement.value;
    const inMount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(inName, inMount);
    this.slService.addIngredients([newIngredient]);
  }
}
