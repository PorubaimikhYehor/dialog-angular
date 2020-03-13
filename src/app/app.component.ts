import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { Dialog1Component } from './components/dialog1/dialog1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dialog: DialogService
  ) { }
  title = 'cdialog';
  openDialog() {
    const dialogRef = this.dialog.open(Dialog1Component);
    dialogRef.afterClosed().subscribe(console.log)
  }
}
