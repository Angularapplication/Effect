import { Component } from '@angular/core';
import { DataService } from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'effectapplication';
  constructor(private dataService: DataService) {
    console.log("app constructor");
    this.dataService.load();
  }

  ngOnInit() {
    console.log("app ngOninit");
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
  }

}
