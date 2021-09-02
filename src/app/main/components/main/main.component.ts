import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FileStatus } from '../../constants/main.enum';
import { APP_CONSTANTS } from '../../constants/main.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

   fileLists:any = [];
   downloadedFiles: any = [];
   selectedCount: number = 0;
   selectedAll: boolean = false

   fileStatus = FileStatus;
   selected:string;
   downloadSelected: string;

  constructor(private changeDetection: ChangeDetectorRef) { 
    this.selected = APP_CONSTANTS.Selected;
    this.downloadSelected = APP_CONSTANTS.DownloadSelected;
  }

  ngOnInit() {
    this.fileLists = [

      {name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'},
      
      {name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'},
      
      {name: 'uxtheme.dll', device: 'Lannister', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available'},
      
      {name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled'},
      
      {name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'}
      
      ];
  }

  selectAll(): any {
    this.selectedCount = 0;
    
    this.fileLists.forEach((item) => {
      item.isChecked = this.selectedAll;
    });
    this.selectedCount = this.selectedAll ? this.fileLists.length: 0;

    if(this.selectedAll) {
      this.fileLists.forEach((item) => {
        if(item.status === FileStatus.Available) {
          this.downloadedFiles.push(item);
        }
      });
    } else {
      this.downloadedFiles = [];
    }
  }

  selectList(selected, isChecked: boolean, list: any): any {
    if(!selected) {
      this.selectedAll = false;
    } 
    if(isChecked) {
      if(list.status === FileStatus.Available) {
        this.downloadedFiles.push(list);
        this.changeDetection.detectChanges();
      }
      this.selectedCount++;
    } else {
      const index = this.downloadedFiles.indexOf(list);
      if(index > -1) this.downloadedFiles.splice(index,1);
      this.changeDetection.detectChanges();
      this.selectedCount--;
    }
    this.selectedAll = (this.selectedCount === this.fileLists.length) ? true: false;
    }

  stopPropagation(event: any) {
    event.stopPropagation();
  }

  onClickDownload() {
    const item = this.downloadedFiles.map((item) => {
      return `${item.device} - ${item.path}`;
    });
    alert(item.join("\n"));
  }

}
