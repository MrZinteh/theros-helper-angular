import { Component} from '@angular/core';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html'
})
export class GodsComponent {

  gods = [
    {
      "name": "Athreos",
      "domain": "god of passage",
      "img": "athreos-logo.png"
    },
    {
      "name": "Ephara",
      "domain": "god of the polis",
      "img": "ephara-logo.png"
    },
    {
      "name": "Erebos",
      "domain": "god of the dead",
      "img": "erebos-logo.png"
    },
    {
      "name": "Heliod",
      "domain": "god of the sun",
      "img": "heliod-logo.png"
    },
    {
      "name": "Iroas",
      "domain": "god of victory",
      "img": "iroas-logo.png"
    },
    {
      "name": "Karametra",
      "domain": "god of harvests",
      "img": "karametra-logo.png"
    },
    {
      "name": "Keranos",
      "domain": "god of storms",
      "img": "keranos-logo.png"
    },
    {
      "name": "Klothys",
      "domain": "god of destiny",
      "img": "klothys-logo.png"
    },
    {
      "name": "Kruphix",
      "domain": "god of horizons",
      "img": "kruphix-logo.png"
    },
    {
      "name": "Mogis",
      "domain": "god of slaughter",
      "img": "mogis-logo.png"
    },
    {
      "name": "Nylea",
      "domain": "god of the hunt",
      "img": "nylea-logo.png"
    },
    {
      "name": "Pharika",
      "domain": "god of affliction",
      "img": "pharika-logo.png"
    },
    {
      "name": "Phenax",
      "domain": "god of deception",
      "img": "phenax-logo.png"
    },
    {
      "name": "Purphoros",
      "domain": "god of the forge",
      "img": "purphoros-logo.png"
    },
    {
      "name": "Thassa",
      "domain": "god of the sea",
      "img": "thassa-logo.png"
    }
  ]

  constructor() { }

}
