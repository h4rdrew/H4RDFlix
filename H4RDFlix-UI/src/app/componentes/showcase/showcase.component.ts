import { PersonModel } from './../../models/person';
import { MediaModel } from './../../models/media';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  imgShowCase = [101, 102, 103, 104, 105, 106, 107, 108, 109].map(
    (n) => `assets/imagem/mainShowCase/${n}.jpg`
  );

  imgSelected = [101, 102, 103, 104, 105, 106, 107, 108, 109].map(
    (n) => `assets/imagem/selected/${n}.jpg`
  );

  people: PersonModel[] = [
    {
      guid: 'guidPerson001',
      nome: 'Ewan McGregor',
      mediaGuid: ['mediaGuid001', 'mediaGuid002', 'mediaGuid003'],
    },
    {
      guid: 'guidPerson002',
      nome: 'Liam Neeson',
      mediaGuid: ['mediaGuid001'],
    },
    {
      guid: 'guidPerson003',
      nome: 'Natalie Portman',
      mediaGuid: ['mediaGuid001', 'mediaGuid002', 'mediaGuid003'],
    },
    {
      guid: 'guidPerson004',
      nome: 'Hayden Christensen',
      mediaGuid: ['mediaGuid002', 'mediaGuid003'],
    },
    {
      guid: 'guidPerson005',
      nome: 'Mark Hamill',
      mediaGuid: ['mediaGuid004', 'mediaGuid005', 'mediaGuid006'],
    },
    {
      guid: 'guidPerson006',
      nome: 'Harrison Ford',
      mediaGuid: ['mediaGuid004', 'mediaGuid005', 'mediaGuid006'],
    },
    {
      guid: 'guidPerson007',
      nome: 'Carrie Fisher',
      mediaGuid: ['mediaGuid004', 'mediaGuid005', 'mediaGuid006'],
    },
    {
      guid: 'guidPerson008',
      nome: 'Daisy Ridley',
      mediaGuid: ['mediaGuid007', 'mediaGuid008', 'mediaGuid009'],
    },
    {
      guid: 'guidPerson009',
      nome: 'John Boyega',
      mediaGuid: ['mediaGuid007', 'mediaGuid008', 'mediaGuid009'],
    },
    {
      guid: 'guidPerson010',
      nome: 'Oscar Isaac',
      mediaGuid: ['mediaGuid007', 'mediaGuid008', 'mediaGuid009'],
    },
    {
      guid: 'guidPerson011',
      nome: 'George Lucas',
      mediaGuid: [
        'mediaGuid001',
        'mediaGuid002',
        'mediaGuid003',
        'mediaGuid004',
        'mediaGuid006',
        'mediaGuid008',
      ],
    },
    {
      guid: 'guidPerson012',
      nome: 'Jonathan Hales',
      mediaGuid: ['mediaGuid002'],
    },
    {
      guid: 'John Ostrander',
      nome: 'guidPerson013',
      mediaGuid: ['mediaGuid002', 'mediaGuid003'],
    },
    {
      guid: 'guidPerson014',
      nome: 'Jan Duursema',
      mediaGuid: ['mediaGuid003'],
    },
    {
      guid: 'guidPerson015',
      nome: 'Irvin Kershner',
      mediaGuid: ['mediaGuid005'],
    },
    {
      guid: 'guidPerson016',
      nome: 'Richard Marquand',
      mediaGuid: ['mediaGuid006'],
    },
    {
      guid: 'guidPerson017',
      nome: 'Lawrence Kasdan',
      mediaGuid: ['mediaGuid006', 'mediaGuid007'],
    },
    {
      guid: 'guidPerson018',
      nome: 'J.J. Abrams',
      mediaGuid: ['mediaGuid007', 'mediaGuid009'],
    },
    {
      guid: 'guidPerson019',
      nome: 'Michael Arndt',
      mediaGuid: ['mediaGuid007'],
    },
    {
      guid: 'guidPerson020',
      nome: 'Rian Johnson',
      mediaGuid: ['mediaGuid008'],
    },
    {
      guid: 'guidPerson021',
      nome: 'Chris Terrio',
      mediaGuid: ['mediaGuid009'],
    },
    {
      guid: 'guidPerson022',
      nome: 'Derek Connolly',
      mediaGuid: ['mediaGuid009'],
    },
    {
      guid: 'guidPerson023',
      nome: 'Leigh Brackett',
      mediaGuid: ['mediaGuid005'],
    },
  ];

  medias: MediaModel[] = [
    {
      guid: 'mediaGuid001',
      nome: 'Star Wars: Episode I – The Phantom Menace',
      ano: '1999',
      duracao: '2h 16m',
      genero: [1, 2, 3],
      descricao:
        'Two Jedi escape a hostile blockade to find allies and come across ' +
        'a young boy who may bring balance to the Force, but the long dormant Sith ' +
        'resurface to claim their original glory.',
      categoria: 1,
      rating: 6.5,
      director: ['guidPerson011'],
      writer: ['guidPerson011'],
      stars: ['guidPerson001', 'guidPerson002', 'guidPerson003'],
      season: 0,
      imgCover: this.imgShowCase[0],
      imgBackground: this.imgSelected[0],
    },
    {
      guid: 'mediaGuid002',
      nome: 'Star Wars: Episode II – Attack of the Clones',
      ano: '2002',
      duracao: '2h 22m',
      genero: [1, 2, 3],
      descricao:
        'Dez anos depois de seu primeiro encontro, o Anakin Skywalker e a Padmé ' +
        'Admidala curtem um romance proibido. Enquanto Obi-wan Kenobi investiga uma ' +
        'tentativa de assassinato de um senador.',
      categoria: 1,
      rating: 6.5,
      director: ['guidPerson011'],
      writer: ['guidPerson011', 'guidPerson012', 'guidPerson013'],
      stars: ['guidPerson004', 'guidPerson003', 'guidPerson001'],
      season: 0,
      imgCover: this.imgShowCase[1],
      imgBackground: this.imgSelected[1],
    },
    {
      guid: 'mediaGuid003',
      nome: 'Star Wars: Episode III – Revenge of the Sith',
      ano: '2005',
      duracao: '2h 20m',
      genero: [1, 2, 3],
      descricao:
        'As Guerras Clônicas começaram há 3 anos. Os Jedi resgatam Palpatine, ' +
        'do Conde Dooku, e Obi-wan mantém o controle de uma nova ameaça, enquanto Anakin ' +
        'atua como um agente duplo.',
      categoria: 1,
      rating: 7.5,
      director: ['guidPerson011'],
      writer: ['guidPerson011', 'guidPerson013', 'guidPerson014'],
      stars: ['guidPerson004', 'guidPerson003', 'guidPerson001'],
      season: 0,
      imgCover: this.imgShowCase[2],
      imgBackground: this.imgSelected[2],
    },
    {
      guid: 'mediaGuid004',
      nome: 'Star Wars: Episode IV – A New Hope',
      ano: '1977',
      duracao: '2h 1m',
      genero: [1, 2, 3],
      descricao:
        'Luke Skywalker une forças com um cabaleiro Jedi, um arrogante piloto ' +
        'é dois dróides para salvar a galaxia enquanto tentam salvar a princesa ' +
        'Leia do misterioso Darth Vader.',
      categoria: 1,
      rating: 8.6,
      director: ['guidPerson011'],
      writer: ['guidPerson011'],
      stars: ['guidPerson005', 'guidPerson006', 'guidPerson007'],
      season: 0,
      imgCover: this.imgShowCase[3],
      imgBackground: this.imgSelected[3],
    },
    {
      guid: 'mediaGuid005',
      nome: 'Star Wars: Episode V – The Empire Strikes Back',
      ano: '1980',
      duracao: '2h 4m',
      genero: [1, 2, 3],
      descricao:
        'Os rebeldes derrotaram o Império no planeta congelado Hoth. ' +
        'Luke Skywalker começa a treinar como um Jedi com Yoda, enquanto ' +
        'seus amigos são perseguidos por Darth Vader.',
      categoria: 1,
      rating: 8.7,
      director: ['guidPerson015'],
      writer: ['guidPerson023', 'guidPerson017', 'guidPerson011'],
      stars: ['guidPerson005', 'guidPerson006', 'guidPerson007'],
      season: 0,
      imgCover: this.imgShowCase[4],
      imgBackground: this.imgSelected[4],
    },
    {
      guid: 'mediaGuid006',
      nome: 'Star Wars: Episode VI – Return of the Jedi',
      ano: '1983',
      duracao: '2h 11m',
      genero: [1, 2, 3],
      descricao:
        'Depois de uma missão ousada para resgatar Han Solo da cabana ' +
        'de Jabba, os rebeldes partem para fazer Endor destruir a mais ' +
        'poderosa Estrela da Morte. Enquanto isso, Luke tenta trazer ' +
        'Darth Vader de volta do lado negro, sem cair na armadilha do Imperador.',
      categoria: 1,
      rating: 8.3,
      director: ['guidPerson016'],
      writer: ['guidPerson017', 'guidPerson011'],
      stars: ['guidPerson005', 'guidPerson006', 'guidPerson007'],
      season: 0,
      imgCover: this.imgShowCase[5],
      imgBackground: this.imgSelected[5],
    },
    {
      guid: 'mediaGuid007',
      nome: 'Star Wars: Episode VII - The Force Awakens',
      ano: '2015',
      duracao: '2h 18m',
      genero: [1, 2, 4],
      descricao:
        'Três décadas depois da derrota do Imperio, uma noiva ameaça ' +
        'crece no Primeiro Ordem. Finn e Rey estão atrapados na ' +
        'Resistencia que procura pelo Luke Skywalker. ',
      categoria: 1,
      rating: 7.8,
      director: ['guidPerson018'],
      writer: ['guidPerson017', 'guidPerson018', 'guidPerson019'],
      stars: ['guidPerson008', 'guidPerson009', 'guidPerson010'],
      season: 0,
      imgCover: this.imgShowCase[6],
      imgBackground: this.imgSelected[6],
    },
    {
      guid: 'mediaGuid008',
      nome: 'Star Wars: Episode VIII - The Last Jedi',
      ano: '2017',
      duracao: '2h 32m',
      genero: [1, 2, 3],
      descricao:
        'Rey deselvolve suas habilidades com a ajuda de Luke Skywalker, ' +
        'embora a Resistença se prepara para a batalha com a Primeira Ordem. ',
      categoria: 1,
      rating: 6.8,
      director: ['guidPerson020'],
      writer: ['guidPerson020', 'guidPerson011'],
      stars: ['guidPerson008', 'guidPerson009', 'guidPerson010'],
      season: 0,
      imgCover: this.imgShowCase[7],
      imgBackground: this.imgSelected[7],
    },
    {
      guid: 'mediaGuid009',
      nome: 'Star Wars: Episode IX - The Rise of Skywalker',
      ano: '2019',
      duracao: '2h 21m',
      genero: [1, 2, 3],
      descricao:
        'A resistência sobrevivente enfrenta a Primeira Ordem mais uma ' +
        'vez no último capítulo da saga Skywalker. ',
      categoria: 1,
      rating: 6.5,
      director: ['guidPerson018'],
      writer: ['guidPerson021', 'guidPerson018', 'guidPerson022'],
      stars: ['guidPerson008', 'guidPerson009', 'guidPerson010'],
      season: 0,
      imgCover: this.imgShowCase[8],
      imgBackground: this.imgSelected[8],
    },
  ];

  media: MediaModel = this.medias[0];

  imgSrc: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.medias[0].stars);

    this.imgBackground(this.media);
  }

  imgBackground(media: MediaModel) {
    let element = document.getElementById('imgShowCase');

    if (element === null) return;

    this.imgSrc = media.imgBackground;

    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '0';
    element.style.zIndex = '1';
    element.style.width = '100%';
    element.style.height = 'auto';

    // element.src = media.imgBackground;

    // element.style.height = '100vh';

    // element.style.width = '100%';
    // element.style.backgroundImage = `url("${media.imgBackground}")`;
    // element.style.backgroundSize = 'cover';
    // element.style.color = 'white';
  }

  teste(guid: string) {
    console.log(guid);
    let media = this.medias.find((c) => c.guid === guid);
    if (media === undefined) return;
    this.media = media;

    this.imgBackground(this.media);
  }

  searchPerson(guid: string): string {
    let person = this.people.find((c) => c.guid === guid);
    if (person === undefined) return '';
    return person.nome;
  }

  @ViewChild('templateDialogAddPlaylist')
  TemplateDialogAddPlaylist!: TemplateRef<any>;
  openDialogAddPlaylist() {
    const dialogRef = this.dialog.open(this.TemplateDialogAddPlaylist);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Sim');
      } else {
        console.log('Não');
      }
    });
  }
}
