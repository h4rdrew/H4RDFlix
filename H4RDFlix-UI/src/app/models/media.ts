export enum Categoria {
  movie = 1,
  serie = 2,
  documentarie = 3,
  anime = 4,
  education = 5,
  musicVideo = 6,
  tv = 7,
}

export enum Genero {
  Action = 1,
  Adventure = 2,
  Fantasy = 3,
  SiFi = 4,
}

export class MediaModel {
  guid: string;
  nome: string;
  ano: string;
  duracao: string;
  genero: Genero[];
  descricao: string;
  categoria: Categoria;
  rating: number;
  director: string[];
  writer: string[];
  stars: string[];
  season: number;
  imgCover: string;
  imgBackground: string;

  constructor({
    guid,
    nome,
    ano,
    duracao,
    genero,
    descricao,
    categoria,
    rating,
    director,
    writer,
    stars,
    season,
    imgCover,
    imgBackground,
  }: {
    guid: string;
    nome: string;
    ano: string;
    duracao: string;
    genero: Genero[];
    descricao: string;
    categoria: Categoria;
    rating: number;
    director: string[];
    writer: string[];
    stars: string[];
    season: number;
    imgCover: string;
    imgBackground: string;
  }) {
    this.guid = guid;
    this.nome = nome;
    this.ano = ano;
    this.duracao = duracao;
    this.genero = genero;
    this.descricao = descricao;
    this.categoria = categoria;
    this.rating = rating;
    this.director = director;
    this.writer = writer;
    this.stars = stars;
    this.season = season;
    this.imgCover = imgCover;
    this.imgBackground = imgBackground;
  }
}
