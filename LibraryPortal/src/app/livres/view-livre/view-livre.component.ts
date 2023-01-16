import { AuteursService } from './../../Services/auteurs.service';
import { TypeLivre } from './../../Models/TypeLivre';
import { Auteurs } from './../../Models/Auteurs';
import { LivreService } from './../../Services/livre.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/Models/Livre';

@Component({
  selector: 'app-view-livre',
  templateUrl: './view-livre.component.html',
  styleUrls: ['./view-livre.component.css']
})
export class ViewLivreComponent implements OnInit {

  livreId: string | null | undefined;
  livre: Livre = {
    CodeLivre:'',
    Titre:'',
    Langue:'',
    maisonEdition:'',
    imageLivreURL:'',
    Nbpage:0,
    prixAchat:0,
    AnneEdition: 0,
    idTypeLivre: '',

    Auteurs: {
      idAuteurs: '',
      nom: ''
    },
    TypeLivre: {
      idTypeLivre: '',
      type:'',
    }
  };

  isNewLivre = false;
  header = '';
  displayProfileImageUrl = '';

  AuteurList: Auteurs[] = [];
   TypeLivreList: TypeLivre[] = [];

  @ViewChild('LivreDetailsForm') LivreDetailsForm?: NgForm;

  constructor(private readonly livreService: LivreService,
    private readonly route: ActivatedRoute,
    private readonly auteurService: AuteursService,
    private snackbar: MatSnackBar,
    private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.livreId = params.get('id');

        if (this.livreId) {
          if (this.livreId.toLowerCase() === 'Add'.toLowerCase()) {
            // -> new livre Functionality
            this.isNewLivre = true;
            this.header = 'Add New Livre';
            //this.setImage();
          } else {
            // -> Existing livre Functionality
            this.isNewLivre = false;
            this.header = 'Edit Livre';
            this.livreService.getLivre(this.livreId)
              .subscribe(
                (successResponse) => {
                  this.livre = successResponse;
                 // this.setImage();
                },
                (errorResponse) => {
                  //this.setImage();
                }
              );
          }
        }
      }
    );
  }




}



