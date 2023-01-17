import { AddLivreReuest } from './../Models/AddLivreRequest';
import { Auteurs } from './../Models/Auteurs';
import { UpdateLivreRequest } from './../Models/UpdateLivreRequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../Models/Livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private baseApiUrl = 'https://localhost:44382';

  constructor(private httpClient: HttpClient) { }

  getLivres(): Observable<Livre[]> {
    return this.httpClient.get<Livre[]>(this.baseApiUrl +'/livre');
  }
  getLivre(livreId: string): Observable<Livre> {
    return this.httpClient.get<Livre>(this.baseApiUrl + '/livre/' + livreId)
  }

  updateLivre(livreId: string, livreRequest: Livre): Observable<Livre> {
    const updatelivreRequest: UpdateLivreRequest= {
      Titre: livreRequest.Titre,
      AnneEdition: livreRequest.AnneEdition,
      Langue: livreRequest.Langue,
      Nbpage: livreRequest.Nbpage,
      idTypeLivre: livreRequest.TypeLivre?.idTypeLivre,
      idAuteurs: livreRequest.idAuteurs,
      imageLivreURL: livreRequest.imageLivreURL,
      maisonEdition: livreRequest.maisonEdition
    }

    return this.httpClient.put<Livre>(this.baseApiUrl + '/livre/' + livreId, updatelivreRequest);
  }


  addLivre(LivreRequest: Livre): Observable<Livre> {
    const addLivreRequest: AddLivreReuest = {
      Titre: LivreRequest.Titre,
      Nbpage: LivreRequest.Nbpage,
      maisonEdition: LivreRequest.maisonEdition,
      prixAchat: LivreRequest.prixAchat,
      idTypeLivre: LivreRequest.idTypeLivre,
      Langue:LivreRequest.Langue
      //nom: LivreRequest.Auteurs?.nom,
    };

    return this.httpClient.post<Livre>(this.baseApiUrl + '/add/livre', addLivreRequest);
  }


  deleteLivre(livreId: string): Observable<Livre> {
    return this.httpClient.delete<Livre>(this.baseApiUrl + '/livres/' + livreId);
  }


}
