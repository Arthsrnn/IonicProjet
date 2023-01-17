import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.page.html',
  styleUrls: ['./categories-form.page.scss'],
})
export class CategoriesFormPage implements OnInit {

  constructor(private http: HttpClient) { }

  addCategories(form: NgForm){

    this.http.post('http://localhost:8200/marmiton/src/categories.php?action=add', JSON.stringify(form.value)).toPromise().then((response:any)=>{console.log(response) })

    this.ngOnInit();

  }

  ngOnInit() {
  
  }


}

