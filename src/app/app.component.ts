import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isMenuOpen: boolean = false;
  constructor(){}
  
  toggleMenu(menuDiv1, menuDiv2, r, x, naslov, menu){
    if(this.isMenuOpen){
      naslov.style.display = "none"; 
      setTimeout(() => { menuDiv1.style.display = "block"; }, 100);
      setTimeout(() => { menuDiv2.style.display = "block"; }, 220);
      x.style.padding = "10px";
      setTimeout(() => { x.style.padding = "20px"; }, 300);
      r.style.height = "380px";
      menu.style.top = "295px";
      x.style.top = "240px";
      this.isMenuOpen = false;
    }
    else{
      x.style.padding = "10px";
      setTimeout(() => { menuDiv1.style.display = "none"; }, 200);
      setTimeout(() => { menuDiv2.style.display = "none"; }, 80);
      setTimeout(() => { naslov.style.display = "block"; }, 200); 
      setTimeout(() => { x.style.padding = "20px"; }, 300);
      r.style.height = "250px";
      menu.style.top = "115px";
      x.style.top = "60px";
      this.isMenuOpen = true; 
    }
  }

}
