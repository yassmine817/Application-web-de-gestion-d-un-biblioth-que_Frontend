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
  styleUrls: ['./view-livre.component.css'],
})
export class ViewLivreComponent implements OnInit {
  livreId: string | null | undefined;
  livre: Livre = {
    id: '',
    Titre: '',
    Langue: '',
    maisonEdition: '',
    imageLivreURL: '',
    Nbpage: 0,
    prixAchat: 0,
    AnneEdition: 0,
    idTypeLivre: '',
    idAuteurs:'',
    Auteurs: {
      idAuteurs: '',
      nom: '',
    },
    TypeLivre: {
      idTypeLivre: '',
      type: '',
    },
  };

  isNewLivre = false;
  header = '';
  displayProfileImageUrl = '';

  AuteurList: Auteurs[] = [];
  TypeLivreList: TypeLivre[] = [];

  @ViewChild('LivreDetailsForm') LivreDetailsForm?: NgForm;

  constructor(
    private readonly livreService: LivreService,
    private readonly route: ActivatedRoute,
    private readonly auteurService: AuteursService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.livreId = params.get('id');
      if (this.livreId) {
        this.livreService
          .getLivre(this.livreId)
          .subscribe((successResponse) => (this.livre = successResponse));
      }
      this.auteurService.getAuteursList().subscribe((successResponse) => {
        this.AuteurList = successResponse;
      });
    });
  }

  onUpdate(): void {
    if (this.LivreDetailsForm?.form.valid) {
      this.livreService.updateLivre(this.livre.id, this.livre)
        .subscribe(
          (successResponse) => {
            // Show a notification
            this.snackbar.open('book updated successfully', undefined, {
              duration: 2000
            });
          },
          (errorResponse) => {
            // Log it
            console.log(errorResponse);
          }
        );
    }
  }
  onDelete(): void {
    this.livreService.deleteLivre(this.livre.id)
      .subscribe(
        (successResponse) => {
          this.snackbar.open('livre deleted successfully', undefined, {
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigateByUrl('livres');
          }, 2000);
        },
        (errorResponse) => {
          // Log
        }
      );
  }
}
