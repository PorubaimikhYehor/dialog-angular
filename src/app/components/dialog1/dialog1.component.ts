import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Dialog2Component } from '../dialog2/dialog2.component';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss']
})
export class Dialog1Component implements OnInit {

  constructor(
    private dialog: DialogService,
  ) { }

  ngOnInit(): void {

  }

  openDialog2() {
    this.dialog.open(Dialog2Component, {test: 'test', str: 'some Str'});
  }
  dismiss() {
    this.dialog.dismiss('dialog 1 dismiss');    
  }
  close () {
    this.dialog.close('dialog 1 closed')
  }
}
