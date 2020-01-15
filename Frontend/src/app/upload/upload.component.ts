import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onUploadClicked(event) {
    console.log('onUploadClicked : ', event);
  }
  onSelectedFilesChanged(event) {
    console.log('onSelectedFilesChanged : ', event);
  }

}
