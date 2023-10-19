import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm-pop-up',
  templateUrl: './delete-confirm-pop-up.component.html',
  styleUrls: ['./delete-confirm-pop-up.component.css']
})
export class DeleteConfirmPopUpComponent{
  constructor(public dialogRef: MatDialogRef<DeleteConfirmPopUpComponent>) { }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
