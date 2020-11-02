import { Component, Input, OnInit } from '@angular/core';
import { AgEditorComponent, ICellEditorAngularComp } from 'ag-grid-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ICellEditorParams } from 'ag-grid-community';
import { ColumnData } from '../hardcoded-data/column-data';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, AgEditorComponent {
  @Input() name: String;
  public dropdownData = ColumnData[0].cellEditorParams.values;

  public myForm: FormGroup;
  public selected;
  value: any;
  oldValue: any;
  params: any;
  constructor(private builder: FormBuilder, private _sanitizer: DomSanitizer) {}

  public container;

  refresh(params: ICellEditorParams) {
    params;
    return true;
  }

  getValue(): any {
    console.log('getValue', this.value);
    if (this.value === '') {
      this.value = this.oldValue;
    }
    return this.value;
  }
  // use isPopup() method to avoid the dropdown sitting behind the grid
  isPopup(): boolean {
    return true;
  }
  setSelected(selected): void {
    console.log('test');

    this.value = selected;
  }
  onClick(selected: boolean) {
    console.log('test on clicks');
    this.setSelected(selected);
    this.params.api.stopEditing();
  }
  agInit(params: ICellEditorParams) {
    this.value = params.value;
    console.log('aginit', this.value);
    this.oldValue = this.value;
    this.value = '';
    return this.value;
  }
  ngOnInit() {
    this.myForm = this.builder.group({
      costCenter: ''
    });
  }

  // dropdown
  autocompleListFormatter = (data: any) => {
    let html = `<span>${data.name} </span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  };
}
