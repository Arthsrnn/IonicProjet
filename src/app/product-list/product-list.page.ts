import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  product: any

  constructor(private http: HttpClient) { }

  delete(id : any){
    this.http.post('http://localhost/marmiton_1/src/product.php?action=delete', JSON.stringify(id)).toPromise().then((response:any)=>{this.product = response})

    this.ngOnInit()
  }

  ngOnInit() {
    this.http.get('http://localhost/marmiton_1/src/product.php?action=getall').toPromise().then((response:any)=>{this.product = response})
  }
}
