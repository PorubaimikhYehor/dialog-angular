import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/dialog/dialog.service';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {

  constructor(
    private dialog: DialogService,
  ) { }

  ngOnInit(): void {
    console.log(this.dialog.getData())
  }
  dismiss() {
    this.dialog.dismiss('dialog 2 dismiss');
  }
  close() {
    this.dialog.close('dialog 2 closed')
  }

}
