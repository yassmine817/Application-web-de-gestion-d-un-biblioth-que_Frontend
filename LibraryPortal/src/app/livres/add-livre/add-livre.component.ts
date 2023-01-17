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
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  livreId: string | null | undefined;
  livre: Livre = {
    id:'',
    Titre:'',
    Langue:'',
    maisonEdition:'',
    imageLivreURL:'',
    Nbpage:0,
    prixAchat:0,
    AnneEdition: 0,
    idTypeLivre: '',
    idAuteurs:'',

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
  @ViewChild('LivreAddForm') LivreAddForm?: NgForm;

  constructor(private livreService :LivreService, private readonly route: ActivatedRoute,
    private readonly auteurService: AuteursService,
    private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    if (this.LivreAddForm?.form.valid) {
      // Submit form date to api
      this.livreService.addLivre(this.livre)
        .subscribe(
          (successResponse) => {
            this.snackbar.open('Livre ajouté avec succés', undefined, {
              duration: 2000
            });

            setTimeout(() => {
              this.router.navigateByUrl(`livre/${successResponse.id}`);
            }, 2000);

          },
          (errorResponse) => {
            // Log
            console.log(errorResponse);
          }
        );
    }
  }



}


