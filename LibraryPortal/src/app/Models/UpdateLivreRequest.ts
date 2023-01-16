import { Auteurs } from "./Auteurs";
import { TypeLivre } from "./TypeLivre";
export class UpdateLivreRequest {
  CodeLivre?: string;
  Titre?: string;
  Langue?: string;
  maisonEdition?: string;
  imageLivreURL?: string;
  Nbpage?: number;
  prixAchat?: number;
  AnneEdition?: number;
  idTypeLivre?: string;
  TypeLivre?: TypeLivre;
  Auteurs?: Auteurs;
}
