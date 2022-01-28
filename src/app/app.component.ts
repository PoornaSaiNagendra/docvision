import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DocVision';
  designType: any = "3D";
  hideToggle: boolean = false;
  multi: boolean = false;
  checked: boolean = false;
  disabled: boolean = false;
  indeterminate: boolean = false;
  labelPosition: any = 'after';
  disableRipple: boolean = false;

  DSA_mainSearch = () => {
    const mainHeaderElement = document.getElementById('mainHeader');
    const mainSearch = document.getElementById('mainSearch');
    if (mainSearch?.classList.contains('le-c-header-search-xs-is-hidden')) {
      if (mainHeaderElement) {
        mainHeaderElement.style.display = 'none';
      }
  
      mainSearch?.classList.remove('le-c-header-search-xs-is-hidden', 'js-search-xs-hide');
    } else {
      if (mainHeaderElement) {
        mainHeaderElement.style.display = 'block';
      }
      mainSearch?.classList.add('le-c-header-search-xs-is-hidden', 'js-search-xs-hide');
    }
  };
  
  clickactive = (eventObj: any) => {
    const closestLi = eventObj.target.closest('li').classList;
    if (closestLi.contains('DSA_active')) {
      closestLi.remove('DSA_active');
    } else {
      eventObj.target
        .closest('ul')
        .querySelectorAll('li')
        ?.forEach((eachList: any) => eachList.classList.remove('DSA_active'));
      closestLi.add('DSA_active');
    }
  };
}
