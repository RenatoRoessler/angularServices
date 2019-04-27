import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  /*  criando referencia a table do html*/
  @ViewChild(MatTable) datatable: MatTable<any>;

  products: Product[];
  prodColumns: string[] = ['id', 'prodname', 'department', 'price', 'description'];

  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    /* se inscrevendo para ver mudanças  */
    this.productsService.onNewProduct
      .subscribe((p) => {
        this.datatable.renderRows();
      });
  }


}
