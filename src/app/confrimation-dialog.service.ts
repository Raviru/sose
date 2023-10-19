import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DeleteConfirmPopUpComponent} from "./delete-confirm-pop-up/delete-confirm-pop-up.component";

@Injectable({
  providedIn: 'root'
})
export class ConfrimationDialogService {
  constructor(public dialog: MatDialog) { }

  openConfirmationDialog(): Promise<boolean> {
    const dialogRef = this.dialog.open(DeleteConfirmPopUpComponent);

    return dialogRef.afterClosed().toPromise();
  }
}
