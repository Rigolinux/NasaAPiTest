import { MatCardModule } from '@angular/material/card';


import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../components/dialog.component';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 

@NgModule({
    declarations: [ListComponent, DialogOverviewExampleDialog],
    imports: [
        CommonModule,
        MatCardModule,
        ListRoutingModule,
        MatGridListModule,
        MatDialogModule,
        MatIconModule,
        MatSelectModule
    ],

})

export class ListModule { }