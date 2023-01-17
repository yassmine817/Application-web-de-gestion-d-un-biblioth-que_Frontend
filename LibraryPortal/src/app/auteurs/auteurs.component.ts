import { AuteursService } from './../Services/auteurs.service';
import { Auteurs } from './../Models/Auteurs';
import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {
  auteur: Auteurs[] = [];
  dataSource: MatTableDataSource<Auteurs> = new MatTableDataSource<Auteurs>();
  displayedColumns: string[] = ['id', 'Nom','edit'];
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  filterString = '';
  constructor(private auteursService: AuteursService) { }

  ngOnInit(): void {
    this.auteursService.getAuteursList().subscribe(
      (successResponse) => {
        this.auteur = successResponse;
        this.dataSource = new MatTableDataSource<Auteurs>(this.auteur)

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      },

    (errorResponse) => {
      console.log(errorResponse);
    });

   }


   filterLivre() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
  }

