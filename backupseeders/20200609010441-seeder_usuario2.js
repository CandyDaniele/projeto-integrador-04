'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuario', [{
          id: 6,
          nome: "Alice Sullivan",
          apelido: "AliceSullivan",
          email: "alice.sullivan@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 0,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 8,
          nome: "Ben Reid",
          apelido: "BenReid",
          email: "ben.reid@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 0,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 12,
          nome: "Dominic Bergeron",
          apelido: "DominicBergeron",
          email: "dominic.bergeron@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 0,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 20,
          nome: "Étienne Le Gall",
          apelido: "ÉtienneLe Gall",
          email: "etienne.legall@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 0,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 22,
          nome: "Glen Shaw",
          apelido: "GlenShaw",
          email: "glen.shaw@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 0,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 26,
          nome: "Joy Da Silva",
          apelido: "JoyDa Silva",
          email: "joy.dasilva@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 0,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 29,
          nome: "Kelly Powell",
          apelido: "KellyPowell",
          email: "kelly.powell@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 0,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 4,
          nome: "Addison Roy",
          apelido: "AddisonRoy",
          email: "addison.roy@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 5,
          nome: "Agenor Carvalho",
          apelido: "AgenorCarvalho",
          email: "agenor.carvalho@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 7,
          nome: "Ariane French",
          apelido: "ArianeFrench",
          email: "ariane.french@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe',
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 9,
          nome: "Charles Carroll",
          apelido: "CharlesCarroll",
          email: "charles.carroll@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 10,
          nome: "Daniel Hughes",
          apelido: "DanielHughes",
          email: "daniel.hughes@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 11,
          nome: "Delores Hall",
          apelido: "DeloresHall",
          email: "delores.hall@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 13,
          nome: "Edin Ingvaldsen",
          apelido: "EdinIngvaldsen",
          email: "edin.ingvaldsen@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 1,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 14,
          nome: "Ege Okumuş",
          apelido: "EgeOkumuş",
          email: "ege.okumus@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 15,
          nome: "Elias Latvala",
          apelido: "EliasLatvala",
          email: "elias.latvala@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 16,
          nome: "Elif Skullerud",
          apelido: "ElifSkullerud",
          email: "elif.skullerud@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 17,
          nome: "Elli Autio",
          apelido: "ElliAutio",
          email: "elli.autio@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 18,
          nome: "Elzbieta Meiser",
          apelido: "ElzbietaMeiser",
          email: "elzbieta.meiser@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 19,
          nome: "Emma Kristensen",
          apelido: "EmmaKristensen",
          email: "emma.kristensen@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 21,
          nome: "Fadime Bernhard",
          apelido: "FadimeBernhard",
          email: "fadime.bernhard@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 23,
          nome: "Hanny Kirstein",
          apelido: "HannyKirstein",
          email: "hanny.kirstein@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 24,
          nome: "Jerome Prescott",
          apelido: "JeromePrescott",
          email: "jerome.prescott@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 25,
          nome: "Jilles Den Uijl",
          apelido: "JillesDen Uijl",
          email: "jilles.denuijl@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 27,
          nome: "Justin Giraud",
          apelido: "JustinGiraud",
          email: "justin.giraud@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 28,
          nome: "Kaya Aydan",
          apelido: "KayaAydan",
          email: "kaya.aydan@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 30,
          nome: "Marisol Vernooij",
          apelido: "MarisolVernooij",
          email: "marisol.vernooij@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 31,
          nome: "Martin David",
          apelido: "MartinDavid",
          email: "martin.david@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 32,
          nome: "Marvão Caldeira",
          apelido: "MarvãoCaldeira",
          email: "marvao.caldeira@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 33,
          nome: "Mathéo Roussel",
          apelido: "MathéoRoussel",
          email: "matheo.roussel@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 34,
          nome: "Mathis Li",
          apelido: "MathisLi",
          email: "mathis.li@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 35,
          nome: "Maureen Mills",
          apelido: "MaureenMills",
          email: "maureen.mills@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 36,
          nome: "Mia Harris",
          apelido: "MiaHarris",
          email: "mia.harris@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 37,
          nome: "Mikkel Madsen",
          apelido: "MikkelMadsen",
          email: "mikkel.madsen@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 38,
          nome: "Murat Gaillard",
          apelido: "MuratGaillard",
          email: "murat.gaillard@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 39,
          nome: "Noelia Ortiz",
          apelido: "NoeliaOrtiz",
          email: "noelia.ortiz@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 40,
          nome: "Okan Ozdenak",
          apelido: "OkanOzdenak",
          email: "okan.ozdenak@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 41,
          nome: "Pinja Lampo",
          apelido: "PinjaLampo",
          email: "pinja.lampo@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 42,
          nome: "Roberta Barros",
          apelido: "RobertaBarros",
          email: "roberta.barros@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 43,
          nome: "Romarico Ferreira",
          apelido: "RomaricoFerreira",
          email: "romarico.ferreira@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 44,
          nome: "Sara Steward",
          apelido: "SaraSteward",
          email: "sara.steward@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 45,
          nome: "Sebastian White",
          apelido: "SebastianWhite",
          email: "sebastian.white@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 46,
          nome: "Sebastian Overgaard",
          apelido: "SebastianOvergaard",
          email: "sebastian.overgaard@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 47,
          nome: "Sharlene Sanders",
          apelido: "SharleneSanders",
          email: "sharlene.sanders@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        },
        {
          id: 48,
          nome: "Steven Ramirez",
          apelido: "StevenRamirez",
          email: "steven.ramirez@example.com",
          foto: 'ProfileDefault.png',
          fotoTema: 'ProfileDefaultTema.jpg',
          descricao: "Descricao",
          cargo: 0,
          aprovado: 1,
          senha: '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'
        }
      ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  }
};