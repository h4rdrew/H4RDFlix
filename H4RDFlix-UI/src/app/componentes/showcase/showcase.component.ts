import { MediaModel } from './../../models/media';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

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

  medias: MediaModel[] = [
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode I – The Phantom Menace',
      ano: '1999',
      duracao: '2h 16m',
      genero: 'Action;Adventure;Fantasy;',
      descricao:
        'Two Jedi escape a hostile blockade to find allies and come across ' +
        'a young boy who may bring balance to the Force, but the long dormant Sith ' +
        'resurface to claim their original glory.',
      categoria: 1,
      rating: 6.5,
      director: 'George Lucas;',
      writer: 'George Lucas;',
      stars: 'Ewan McGregor;Liam Neeson;Natalie Portman;',
      season: 0,
      imgCover: this.imgShowCase[0],
      imgBackground: this.imgSelected[0],
    },
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode II – Attack of the Clones',
      ano: '2002',
      duracao: '2h 22m',
      genero: 'Action;Adventure;Fantasy;',
      descricao:
        'Dez anos depois de seu primeiro encontro, o Anakin Skywalker e a Padmé ' +
        'Admidala curtem um romance proibido. Enquanto Obi-wan Kenobi investiga uma ' +
        'tentativa de assassinato de um senador.',
      categoria: 1,
      rating: 6.5,
      director: 'George Lucas;',
      writer: 'George Lucas;Jonathan Hales;John Ostrander;',
      stars: 'Hayden Christensen;Natalie Portman;Ewan McGregor;',
      season: 0,
      imgCover: this.imgShowCase[1],
      imgBackground: this.imgSelected[1],
    },
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode III – Revenge of the Sith',
      ano: '2005',
      duracao: '2h 20m',
      genero: 'Action;Adventure;Fantasy;',
      descricao:
        'As Guerras Clônicas começaram há 3 anos. Os Jedi resgatam Palpatine, ' +
        'do Conde Dooku, e Obi-wan mantém o controle de uma nova ameaça, enquanto Anakin ' +
        'atua como um agente duplo.',
      categoria: 1,
      rating: 7.5,
      director: 'George Lucas;',
      writer: 'George Lucas;John Ostrander;Jan Duursema;',
      stars: 'Hayden Christensen;Natalie Portman;Ewan McGregor;',
      season: 0,
      imgCover: this.imgShowCase[2],
      imgBackground: this.imgSelected[2],
    },
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode IV – A New Hope',
      ano: '1977',
      duracao: '2h 1m',
      genero: 'Action;Adventure;Fantasy;',
      descricao:
        'Luke Skywalker une forças com um cabaleiro Jedi, um arrogante piloto ' +
        'é dois dróides para salvar a galaxia enquanto tentam salvar a princesa ' +
        'Leia do misterioso Darth Vader.',
      categoria: 1,
      rating: 8.6,
      director: 'George Lucas;',
      writer: 'George Lucas;',
      stars: 'Mark Hamill;Harrison Ford;Carrie Fisher;',
      season: 0,
      imgCover: this.imgShowCase[3],
      imgBackground: this.imgSelected[3],
    },
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode V – The Empire Strikes Back',
      ano: '1980',
      duracao: '2h 4m',
      genero: 'Action;Adventure;Fantasy;',
      descricao:
        'Os rebeldes derrotaram o Império no planeta congelado Hoth. ' +
        'Luke Skywalker começa a treinar como um Jedi com Yoda, enquanto ' +
        'seus amigos são perseguidos por Darth Vader.',
      categoria: 1,
      rating: 8.7,
      director: 'Irvin Kershner;',
      writer: 'Leigh Brackett;Lawrence Kasdan;George Lucas;',
      stars: 'Mark Hamill;Harrison Ford;Carrie Fisher;',
      season: 0,
      imgCover: this.imgShowCase[4],
      imgBackground: this.imgSelected[4],
    },
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode VI – Return of the Jedi',
      ano: '1983',
      duracao: '2h 11m',
      genero: 'Action;Adventure;Fantasy;',
      descricao:
        'Depois de uma missão ousada para resgatar Han Solo da cabana ' +
        'de Jabba, os rebeldes partem para fazer Endor destruir a mais ' +
        'poderosa Estrela da Morte. Enquanto isso, Luke tenta trazer ' +
        'Darth Vader de volta do lado negro, sem cair na armadilha do Imperador.',
      categoria: 1,
      rating: 8.3,
      director: 'Richard Marquand;',
      writer: 'Lawrence Kasdan;George Lucas;',
      stars: 'Mark Hamill;Harrison Ford;Carrie Fisher;',
      season: 0,
      imgCover: this.imgShowCase[5],
      imgBackground: this.imgSelected[5],
    },
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode VII - The Force Awakens',
      ano: '2015',
      duracao: '2h 18m',
      genero: 'Action;Adventure;Sci-Fi;',
      descricao:
        'Três décadas depois da derrota do Imperio, uma noiva ameaça ' +
        'crece no Primeiro Ordem. Finn e Rey estão atrapados na ' +
        'Resistencia que procura pelo Luke Skywalker. ',
      categoria: 1,
      rating: 7.8,
      director: 'J.J. Abrams;',
      writer: 'Lawrence Kasdan;J.J. Abrams;Michael Arndt;',
      stars: 'Daisy Ridley;JohnBoyega;Oscar Isaac;',
      season: 0,
      imgCover: this.imgShowCase[6],
      imgBackground: this.imgSelected[6],
    },
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode VIII - The Last Jedi',
      ano: '2017',
      duracao: '2h 32m',
      genero: 'Action;Adventure;Fantasy;',
      descricao:
        'Rey deselvolve suas habilidades com a ajuda de Luke Skywalker, ' +
        'embora a Resistença se prepara para a batalha com a Primeira Ordem. ',
      categoria: 1,
      rating: 6.8,
      director: 'Rian Johnson;',
      writer: 'Rian Johnson;George Lucas;',
      stars: 'Daisy Ridley;JohnBoyega;Oscar Isaac;',
      season: 0,
      imgCover: this.imgShowCase[7],
      imgBackground: this.imgSelected[7],
    },
    {
      guid: uuidv4(),
      nome: 'Star Wars: Episode IX - The Rise of Skywalker',
      ano: '2019',
      duracao: '2h 21m',
      genero: 'Action;Adventure;Fantasy;',
      descricao:
        'A resistência sobrevivente enfrenta a Primeira Ordem mais uma ' +
        'vez no último capítulo da saga Skywalker. ',
      categoria: 1,
      rating: 6.5,
      director: 'J.J. Abrams;',
      writer: 'Chris Terrio;J.J. Abrams;Derek Connolly;',
      stars: 'Daisy Ridley;JohnBoyega;Oscar Isaac;',
      season: 0,
      imgCover: this.imgShowCase[8],
      imgBackground: this.imgSelected[8],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  teste(guid: string) {
    console.log(guid);
  }
}
