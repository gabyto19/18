import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SignInComponent} from "./sign-in/sign-in.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SignInComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
