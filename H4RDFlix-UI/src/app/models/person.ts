export class PersonModel {
  guid: string;
  nome: string;
  mediaGuid: string[];

  constructor({
    guid,
    nome,
    mediaGuid,
  }: {
    guid: string;
    nome: string;
    mediaGuid: string[];
  }) {
    this.guid = guid;
    this.nome = nome;
    this.mediaGuid = mediaGuid;
  }
}
