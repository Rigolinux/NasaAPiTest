import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    center: string;
    date_created: string;
    description: string;
    keywords: string[];
    media_type: string;
    nasa_id: string;
    photographer: string;
    title: string;
    animal?: string;
    name?: string;
}


@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    convertDateString(dateString :string) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son de 0 a 11
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
  }
