import { Injectable } from '@angular/core';

  import { IAstronaut } from '../models';

@Injectable()
export class AstronautService {

  private astronauts: IAstronaut[] = [
    { "id": "1", "first_name": "Buzz", "last_name": "Aldrin", "wiki_href": "https://en.wikipedia.org/wiki/Buzz_Aldrin", "image": "buzz-aldrin.png" },
    { "id": "2", "first_name": "William", "last_name": "Anders", "wiki_href": "https://en.wikipedia.org/wiki/William_Anders", "image": "william-anders.png" },
    { "id": "3", "first_name": "Neil", "last_name": "Armstrong", "wiki_href": "https://en.wikipedia.org/wiki/Neil_Armstrong", "image": "neil-armstrong.png" },
    { "id": "4", "first_name": "Alan", "last_name": "Bean", "wiki_href": "https://en.wikipedia.org/wiki/Alan_Bean", "image": "alan-bean.png" },
    { "id": "5", "first_name": "Frank", "last_name": "Borman", "wiki_href": "https://en.wikipedia.org/wiki/Frank_Borman", "image": "frank-borman.png" },
    { "id": "6", "first_name": "Gene", "last_name": "Cernan", "wiki_href": "https://en.wikipedia.org/wiki/Eugene_Cernan", "image": "gene-cernan.png" },
    { "id": "7", "first_name": "Roger", "last_name": "Chaffee", "wiki_href": "https://en.wikipedia.org/wiki/Roger_B._Chaffee", "image": "roger-chaffee.png" },
    { "id": "8", "first_name": "Michael", "last_name": "Collins", "wiki_href": "https://en.wikipedia.org/wiki/Michael_Collins_(astronaut)", "image": "michael-collins.png" },
    { "id": "9", "first_name": "Pete", "last_name": "Conrad", "wiki_href": "https://en.wikipedia.org/wiki/Pete_Conrad", "image": "pete-conrad.png" },
    { "id": "10", "first_name": "Walt", "last_name": "Cunningham", "wiki_href": "https://en.wikipedia.org/wiki/Walter_Cunningham", "image": "walter-cunningham.png" },
    { "id": "11", "first_name": "Charles", "last_name": "Duke", "wiki_href": "https://en.wikipedia.org/wiki/Charles_Duke", "image": "charles-duke.png" },
    { "id": "12", "first_name": "Donn", "last_name": "Eisele", "wiki_href": "https://en.wikipedia.org/wiki/Donn_F._Eisele", "image": "donn-eisele.png" },
    { "id": "13", "first_name": "Ronald", "last_name": "Evans", "wiki_href": "https://en.wikipedia.org/wiki/Ronald_Evans_(astronaut)", "image": "ronald-evans.png" },
    { "id": "14", "first_name": "Richard", "last_name": "Gordon", "wiki_href": "https://en.wikipedia.org/wiki/Richard_F._Gordon_Jr.", "image": "richard-gordon.png" },
    { "id": "15", "first_name": "Gus", "last_name": "Grissom", "wiki_href": "https://en.wikipedia.org/wiki/Gus_Grissom", "image": "gus-grissom.png" },
    { "id": "16", "first_name": "Fred", "last_name": "Haise", "wiki_href": "https://en.wikipedia.org/wiki/Fred_Haise", "image": "fred-haise.png" },
    { "id": "17", "first_name": "James", "last_name": "Irwin", "wiki_href": "https://en.wikipedia.org/wiki/James_Irwin", "image": "james-irwin.png" },
    { "id": "18", "first_name": "James", "last_name": "Lovell", "wiki_href": "https://en.wikipedia.org/wiki/Jim_Lovell", "image": "jim-lovell.png" },
    { "id": "19", "first_name": "Ken", "last_name": "Mattingly", "wiki_href": "https://en.wikipedia.org/wiki/Ken_Mattingly", "image": "ken-mattingly.png" },
    { "id": "20", "first_name": "James", "last_name": "McDivitt", "wiki_href": "https://en.wikipedia.org/wiki/James_McDivitt", "image": "james-mcdivitt.png" },
    { "id": "21", "first_name": "Edgar", "last_name": "Mitchell", "wiki_href": "https://en.wikipedia.org/wiki/Edgar_Mitchell", "image": "edgar-mitchell.png" },
    { "id": "22", "first_name": "Stuart", "last_name": "Roosa", "wiki_href": "https://en.wikipedia.org/wiki/Stuart_Roosa", "image": "stuart-roosa.png" },
    { "id": "23", "first_name": "Wally", "last_name": "Schirra", "wiki_href": "https://en.wikipedia.org/wiki/Wally_Schirra", "image": "wally-schirra.png" },
    { "id": "24", "first_name": "Harrison", "last_name": "Schmitt", "wiki_href": "https://en.wikipedia.org/wiki/Harrison_Schmitt", "image": "harrison-schmitt.png" },
    { "id": "25", "first_name": "Russell", "last_name": "Schweickart", "wiki_href": "https://en.wikipedia.org/wiki/Rusty_Schweickart", "image": "rusty-schweickart.png" },
    { "id": "26", "first_name": "David", "last_name": "Scott", "wiki_href": "https://en.wikipedia.org/wiki/David_Scott", "image": "david-scott.png" },
    { "id": "27", "first_name": "Alan", "last_name": "Shepard", "wiki_href": "https://en.wikipedia.org/wiki/Alan_Shepard", "image": "alan-shepard.png" },
    { "id": "28", "first_name": "Thomas", "last_name": "Stafford", "wiki_href": "https://en.wikipedia.org/wiki/Thomas_P._Stafford", "image": "thomas-stafford.png" },
    { "id": "29", "first_name": "Jack", "last_name": "Swigert", "wiki_href": "https://en.wikipedia.org/wiki/Jack_Swigert", "image": "jack-swigert.png" },
    { "id": "30", "first_name": "Ed", "last_name": "White", "wiki_href": "https://en.wikipedia.org/wiki/Edward_Higgins_White", "image": "edward-white.png" },
    { "id": "31", "first_name": "Alfred", "last_name": "Worden", "wiki_href": "https://en.wikipedia.org/wiki/Alfred_Worden", "image": "al-worden.png" },
    { "id": "32", "first_name": "John", "last_name": "Young", "wiki_href": "https://en.wikipedia.org/wiki/John_Young_(astronaut)", "image": "john-young.png" }
  ];

  constructor() { }

  public getAstronauts(): IAstronaut[] {
    return this.astronauts;
  }

  public getAstronaut(id: string): IAstronaut {
    return this.astronauts.filter((astronaut: IAstronaut) => {
      return astronaut.id === id;
    })[0];
  }

}
