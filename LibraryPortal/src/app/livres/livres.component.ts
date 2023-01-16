import { LivreService } from './../Services/livre.service';
import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Livre } from '../Models/Livre';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres: Livre[] = [];
  dataSource: MatTableDataSource<Livre> = new MatTableDataSource<Livre>();
  displayedColumns: string[] = ['titre', 'Langue', 'maisonEdition', 'Auteurs', 'Nbpage', 'TypeLivre','edit'];
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  filterString = '';
  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
    this.livreService.getLivres().subscribe(
      (successResponse) => {
        this.livres = successResponse;
        this.dataSource = new MatTableDataSource<Livre>(this.livres)

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

