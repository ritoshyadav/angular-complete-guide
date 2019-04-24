import { Component, Output,EventEmitter} from '@angular/core';
// import { emit } from 'cluster';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output()featureselected=new EventEmitter<string>();
onSelect(feature: string){
this.featureselected.emit(feature);
}
  // constructor() { }

  // ngOnInit() {
    
  // }

}
