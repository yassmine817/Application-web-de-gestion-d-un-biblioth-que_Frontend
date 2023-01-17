import { Auteurs } from "./Auteurs";
import { TypeLivre } from "./TypeLivre";
export class Livre {
  id!: string;
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
  idAuteurs?:string;
}
