import  {Component}      from '@angular/core';

@Component ({
	selector : 'employee',
	templateUrl: 'app/employee/employee.component.html',
	styleUrls: ['app/employee/employee.component.css']
})


export class EmployeeComponent {
	firstName : string = 'vicky';
	lastName : string = 'bhatt';
	address : string = 'khatima';
	age : number = 25;
    isDisabled : boolean =false;
    coloumnSpan : number = 2;
    class : string = 'btn_class1 btn_class2';
    applyClass1 : boolean = false;
    ngClass : string;
    ngSytle: object;
    showDetail: boolean = false;
    name:string ='vicky';

    addClass() {
	this.applyClass1 = !this.applyClass1;
    this.ngClass = this.applyClass1 ? this.class :''; 
    this.ngSytle= {
    	'width':'100px',
    	'height':'40px'
    }
    }

    toogleDetail() : void {
    	this.showDetail = !this.showDetail
    }
}

