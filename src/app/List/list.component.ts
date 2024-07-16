import { Component, OnInit, Inject } from '@angular/core';
import { getGroupImages, getQueryImages } from '../api/nasa';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../components/dialog.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'NASA Images';
  imagesList: any[] = [];
  showDialog = false;
  constructor(public dialog: MatDialog) {}

  openDialog(data:any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '750px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  ngOnInit(): void {
    
    this.getImages('recent.json');
  }

  getImages = async (param: string) => {

  
    const data = await getGroupImages(param);
    if (data) {
      console.log(data);
      this.imagesList = data.collection?.items ?? [];
     
    };
  }

  getByQuery = async (param: string) => {
    const data = await getQueryImages(param);
    if (data) {
      this.imagesList = data.collection?.items ?? [];
     
    };
  }


  types: any[] = [
    {value: 'popular.json', viewValue: 'Popular'},
    {value: 'recent.json', viewValue: 'Recent'}
  ];

  typesMedia: any[] = [
    {value: '&media_type=image', viewValue: 'Images'},
    {value: '&media_type=video', viewValue: 'Videos'},
    {value: '&media_type=audio', viewValue: 'Audio'},
    {value: '&media_type=image,video,audio', viewValue: 'All'}
  ];
  
  
}
