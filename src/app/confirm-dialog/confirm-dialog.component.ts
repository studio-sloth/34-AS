import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'bb-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialog implements OnInit {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialog>) { }

  ngOnInit() {
  }

}