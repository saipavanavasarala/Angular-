import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //public users: any = ['Abhi', 'Phani', 'Pavan', 'Rahul'];
  public results: any = [];
  public products: any = [];
  public product = new FormControl();
  private url:string ="https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  // this.http.get(this.url).toPromise().then(data => {
  //     this.products = data;
  //     this.results = data; 
  //   }) 

    this.product.valueChanges.pipe(debounceTime(1000)).subscribe(product => {
      this.http.get(this.url).subscribe(data => {
        this.results = data;
        this.products = data;        
        this.results = this.products.filter(u =>
          u.title.toLowerCase().includes(product)
        );
      })
    })
  }

  // search(product: string) {
  //   const value = product.toLowerCase().trim();

  //   this.results = this.products.filter(product =>
  //     product.title.toLowerCase().includes(value)
  //   );
  // }
}
