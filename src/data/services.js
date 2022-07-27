import menageImg from '../assets/images/7.jpg';
import enfantsImg from '../assets/images/enfants.jpg';
import doucheImg from '../assets/images/douche.jpg';
import administratifImg from '../assets/images/administratif.jpg';

export default
[
  {
    id: '1',
    name: 'Aides ménagères',
    link: menageImg,
    alt: 'fakeimg 800x300',
    description: "Le service ménager propose :  Aide au ménage et repassage, Entretien du linge, Rangement à domicile, Nettoyage des vitres, Aide à l'ouverture et à la fermeture des volets, Arrosage plantes, Réfection de lit...",
    explications: 'service ménager test',
  },
  {
    id: '2',
    name: "Gardes d'enfants",
    link: enfantsImg,
    alt: 'fakeimg 800x250',
    description: "Le service de garde d'enfants propose : Préparation des repas, Aide à la prise de repas, Aide aux devoirs, Accompagnement pour le trajet vers la crèche l'école et/ou des activiés extra scolaire, Aide à l'habillage, Aide aux soins d'hygiène",
    explications: 'service garde endants test',

  },
  {
    id: '3',
    name: 'Aides à la personne',
    link: doucheImg,
    alt: 'fakeimg 800x400',
    description: "Le service d'aide à la personne propose : Aide partielle ou totale à la toilette, Aide partielle ou totale à l’habillageAide aux transferts et aux déplacementsAide à la préparation et à la prise des repasAccompagnement lors des sortiesAide aux courses",
    explications: 'service aide personne test',

  },
  {
    id: '4',
    name: 'Aides administrative',
    link: administratifImg,
    alt: 'fakeimg 1000x500',
    description: 'Le service administratif après décès propose : Aide pour envoi de courrier pour envoi de mail et appel téléphonique',
    explications: 'service administratif test',

  },
];
