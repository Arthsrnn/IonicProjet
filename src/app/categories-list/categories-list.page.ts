import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.page.html',
  styleUrls: ['./categories-list.page.scss'],
})
export class CategoriesListPage implements OnInit {

  categories: any
  constructor(private http: HttpClient) { }


  delete(id: any){

    this.http.post('http://localhost:8200/marmiton/src/categories.php?action=delete', JSON.stringify({'id':id})).toPromise().then((response: any)=>{console.log(response)});

    this.ngOnInit();
  }


  ngOnInit() {

    this.http.get('http://localhost/marmiton/src/categories.php?action=getall').toPromise().then((response: any)=>{this.categories=response});

  }

}

