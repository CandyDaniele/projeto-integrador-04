'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'jogo', [

        {
          id: 4,
          ano: "1998",
          qntMin: "2",
          qntMax: "4",
          duracao: "90",
          faixaEtaria: "13",
          nome: "El Caballero",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 15,
          dominio_id: 11,
          mecanica_id: 4,
        },
        {
          id: 5,
          ano: "1999",
          qntMin: "2",
          qntMax: "2",
          duracao: "5",
          faixaEtaria: "10",
          nome: "Button Broccoli",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 9,
          dominio_id: 12,
          mecanica_id: 3
        },
        {
          id: 6,
          ano: "1975",
          qntMin: "2",
          qntMax: "2",
          duracao: "30",
          faixaEtaria: "8",
          nome: "Bison",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 7,
          dominio_id: 11,
          mecanica_id: 1
        },
        {
          id: 7,
          ano: "1980",
          qntMin: "2",
          qntMax: "4",
          duracao: "30",
          faixaEtaria: "9",
          nome: "BASTA",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 11,
          dominio_id: 10,
          mecanica_id: 1,
        },
        {
          id: 8,
          ano: "1800",
          qntMin: "2",
          qntMax: "6",
          duracao: "30",
          faixaEtaria: "8",
          nome: "Animal House Liars Dice",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 1,
          dominio_id: 10,
          mecanica_id: 1,
        },
        {
          id: 9,
          ano: "1999",
          qntMin: "2",
          qntMax: "5",
          duracao: "60",
          faixaEtaria: "10",
          nome: "Big City",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 2,
          dominio_id: 1,
          mecanica_id: 5,
        },
        {
          id: 10,
          ano: "1993",
          qntMin: "2",
          qntMax: "2",
          duracao: "240",
          faixaEtaria: "12",
          nome: "Bobby Lee: The Civil War  in Virginia 1861-1865",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 12,
          dominio_id: 14,
          mecanica_id: 2,
        },
        {
          id: 11,
          ano: "1994",
          qntMin: "3",
          qntMax: "6",
          duracao: "60",
          faixaEtaria: "12",
          nome: "Affare Fatto!",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 9,
          dominio_id: 10,
          mecanica_id: 6,
        },
        {
          id: 12,
          ano: "1990",
          qntMin: "2",
          qntMax: "6",
          duracao: "45",
          faixaEtaria: "12",
          nome: "Adel Verpflichtet",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 7,
          dominio_id: 4,
          mecanica_id: 6,
        },
        {
          id: 13,
          ano: "1997",
          qntMin: "2",
          qntMax: "2",
          duracao: "60",
          faixaEtaria: "10",
          nome: "Caesar & Cleopatra",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 13,
          dominio_id: 11,
          mecanica_id: 6,
        },
        {
          id: 14,
          ano: "1999",
          qntMin: "3",
          qntMax: "5",
          duracao: "45",
          faixaEtaria: "12",
          nome: "Cap Horn",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 6,
          dominio_id: 6,
          mecanica_id: 5,
        },
        {
          id: 15,
          ano: "1903",
          qntMin: "3",
          qntMax: "8",
          duracao: "90",
          faixaEtaria: "7",
          nome: "Ben10 Pit",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 7,
          dominio_id: 2,
          mecanica_id: 1,
        },
        {
          id: 16,
          ano: "1995",
          qntMin: "2",
          qntMax: "8",
          duracao: "30",
          faixaEtaria: "6",
          nome: "Avus",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 14,
          dominio_id: 5,
          mecanica_id: 5,
        },
        {
          id: 17,
          ano: "1475",
          qntMin: "2",
          qntMax: "2",
          duracao: "60",
          faixaEtaria: "6",
          nome: "Ajax Chessmen",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 11,
          dominio_id: 6,
          mecanica_id: 3,
        },
        {
          id: 18,
          ano: "1991",
          qntMin: "2",
          qntMax: "8",
          duracao: "480",
          faixaEtaria: "12",
          nome: "Advanced Civilization",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 2,
          dominio_id: 9,
          mecanica_id: 1,
        },
        {
          id: 19,
          ano: "1989",
          qntMin: "2",
          qntMax: "4",
          duracao: "30",
          faixaEtaria: "13",
          nome: "Alacarte",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 14,
          dominio_id: 2,
          mecanica_id: 1,
        },
        {
          id: 20,
          ano: "1996",
          qntMin: "2",
          qntMax: "2",
          duracao: "200",
          faixaEtaria: "12",
          nome: "Annibale:Roma contro Cartagine",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 10,
          dominio_id: 2,
          mecanica_id: 3,
        },
        {
          id: 21,
          ano: "1990",
          qntMin: "2",
          qntMax: "6",
          duracao: "60",
          faixaEtaria: "14",
          nome: "De Bellis Antiquitatis",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 3,
          dominio_id: 1,
          mecanica_id: 5,
        },
        {
          id: 22,
          ano: "1996",
          qntMin: "2",
          qntMax: "5",
          duracao: "30",
          faixaEtaria: "10",
          nome: "Campanile",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 8,
          dominio_id: 2,
          mecanica_id: 6,
        },
        {
          id: 23,
          ano: "1991",
          qntMin: "2",
          qntMax: "6",
          duracao: "90",
          faixaEtaria: "10",
          nome: "Candidate",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 3,
          dominio_id: 9,
          mecanica_id: 1,
        },
        {
          id: 24,
          ano: "1000",
          qntMin: "2",
          qntMax: "2",
          duracao: "20",
          faixaEtaria: "8",
          nome: "Bacha Chal",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 15,
          dominio_id: 14,
          mecanica_id: 5,
        },
        {
          id: 25,
          ano: "1993",
          qntMin: "3",
          qntMax: "6",
          duracao: "60",
          faixaEtaria: "12",
          nome: "Capone",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 10,
          dominio_id: 2,
          mecanica_id: 1,
        },
        {
          id: 26,
          ano: "1985",
          qntMin: "2",
          qntMax: "4",
          duracao: "60",
          faixaEtaria: "8",
          nome: "Advance to Boardwalk",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 12,
          dominio_id: 2,
          mecanica_id: 4,
        },
        {
          id: 27,
          ano: "1994",
          qntMin: "3",
          qntMax: "5",
          duracao: "20",
          faixaEtaria: "7",
          nome: "Blazing Camels",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 15,
          dominio_id: 11,
          mecanica_id: 5,
        },
        {
          id: 28,
          ano: "1986",
          qntMin: "2",
          qntMax: "7",
          duracao: "360",
          faixaEtaria: "14",
          nome: "1830: Ferroviee Capitan id Industria",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 6,
          dominio_id: 3,
          mecanica_id: 4,
        },
        {
          id: 29,
          ano: "1995",
          qntMin: "3",
          qntMax: "6",
          duracao: "300",
          faixaEtaria: "14",
          nome: "1856: Railroadingin Upper Canada from 1856",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 15,
          dominio_id: 1,
          mecanica_id: 5,
        },
        {
          id: 30,
          ano: "1990",
          qntMin: "2",
          qntMax: "5",
          duracao: "30",
          faixaEtaria: "8",
          nome: "Asterix: Das Kartenspiel",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 9,
          dominio_id: 2,
          mecanica_id: 5,
        },
        {
          id: 31,
          ano: "1992",
          qntMin: "2",
          qntMax: "6",
          duracao: "45",
          faixaEtaria: "10",
          nome: "Alhambra Bonn",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 2,
          dominio_id: 5,
          mecanica_id: 6,
        },
        {
          id: 32,
          ano: "1997",
          qntMin: "3",
          qntMax: "6",
          duracao: "45",
          faixaEtaria: "10",
          nome: "Canyon",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 9,
          dominio_id: 2,
          mecanica_id: 3,
        },
        {
          id: 33,
          ano: "1979",
          qntMin: "2",
          qntMax: "4",
          duracao: "90",
          faixaEtaria: "8",
          nome: "Campionato Italiano",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 6,
          dominio_id: 5,
          mecanica_id: 6,
        },
        {
          id: 34,
          ano: "1996",
          qntMin: "2",
          qntMax: "8",
          duracao: "15",
          faixaEtaria: "4",
          nome: "Barnyard Buddies",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 10,
          dominio_id: 14,
          mecanica_id: 5,
        },
        {
          id: 35,
          ano: "1989",
          qntMin: "2",
          qntMax: "6",
          duracao: "30",
          faixaEtaria: "12",
          nome: "Ave Caesar",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 5,
          dominio_id: 14,
          mecanica_id: 6,
        },
        {
          id: 36,
          ano: "1987",
          qntMin: "2",
          qntMax: "2",
          duracao: "30",
          faixaEtaria: "7",
          nome: "Abalone",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 12,
          dominio_id: 14,
          mecanica_id: 1,
        },
        {
          id: 37,
          ano: "1988",
          qntMin: "2",
          qntMax: "6",
          duracao: "120",
          faixaEtaria: "10",
          nome: "Buck Rogers: Battle for the 25th Century Game",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 8,
          dominio_id: 10,
          mecanica_id: 2,
        },
        {
          id: 38,
          ano: "1999",
          qntMin: "2",
          qntMax: "2",
          duracao: "45",
          faixaEtaria: "10",
          nome: "Battle Cry",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 9,
          dominio_id: 12,
          mecanica_id: 3,
        },
        {
          id: 39,
          ano: "1996",
          qntMin: "2",
          qntMax: "8",
          duracao: "60",
          faixaEtaria: "8",
          nome: "Battle Cattle",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 12,
          dominio_id: 14,
          mecanica_id: 5,
        },
        {
          id: 40,
          ano: "1954",
          qntMin: "2",
          qntMax: "6",
          duracao: "45",
          faixaEtaria: "8",
          nome: "1000 Bornes",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 3,
          dominio_id: 5,
          mecanica_id: 1,
        },
        {
          id: 41,
          ano: "1997",
          qntMin: "2",
          qntMax: "4",
          duracao: "15",
          faixaEtaria: "8",
          nome: "Bloqueio",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 5,
          dominio_id: 9,
          mecanica_id: 3,
        },
        {
          id: 42,
          ano: "1983",
          qntMin: "2",
          qntMax: "2",
          duracao: "240",
          faixaEtaria: "12",
          nome: "BullRun: The First Major Battle of the American CivilWar",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 12,
          dominio_id: 1,
          mecanica_id: 6,
        },
        {
          id: 43,
          ano: "1999",
          qntMin: "2",
          qntMax: "4",
          duracao: "60",
          faixaEtaria: "12",
          nome: "Cabale",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 1,
          dominio_id: 8,
          mecanica_id: 4,
        },
        {
          id: 44,
          ano: "1993",
          qntMin: "2",
          qntMax: "2",
          duracao: "300",
          faixaEtaria: "0",
          nome: "Caesar in Gallia: Conquest on the Ancient Frontier",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 14,
          dominio_id: 6,
          mecanica_id: 2,
        },
        {
          id: 45,
          ano: "2000",
          qntMin: "2",
          qntMax: "2",
          duracao: "0",
          faixaEtaria: "0",
          nome: "5th Year Cwali",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 7,
          dominio_id: 5,
          mecanica_id: 6,
        },
        {
          id: 46,
          ano: "2000",
          qntMin: "2",
          qntMax: "4",
          duracao: "60",
          faixaEtaria: "0",
          nome: "Auction America: The Trivia Game for Any Collector",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 1,
          dominio_id: 12,
          mecanica_id: 6,
        },
        {
          id: 47,
          ano: "2000",
          qntMin: "2",
          qntMax: "4",
          duracao: "180",
          faixaEtaria: "12",
          nome: "Camlyns Destiny",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 7,
          dominio_id: 7,
          mecanica_id: 1,
        },
        {
          id: 48,
          ano: "2000",
          qntMin: "2",
          qntMax: "5",
          duracao: "45",
          faixaEtaria: "7",
          nome: "Carcassonne",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 5,
          dominio_id: 3,
          mecanica_id: 2,
        },
        {
          id: 49,
          ano: "2000",
          qntMin: "2",
          qntMax: "5",
          duracao: "45",
          faixaEtaria: "10",
          nome: "Camelot",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 1,
          dominio_id: 3,
          mecanica_id: 4,
        },
        {
          id: 50,
          ano: "1990",
          qntMin: "3",
          qntMax: "5",
          duracao: "45",
          faixaEtaria: "12",
          nome: "Caravane",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 3,
          dominio_id: 6,
          mecanica_id: 3,
        },
        {
          id: 51,
          ano: "1993",
          qntMin: "2",
          qntMax: "4",
          duracao: "60",
          faixaEtaria: "8",
          nome: "Alhambra Kertjei",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 10,
          dominio_id: 9,
          mecanica_id: 5,
        },
        {
          id: 52,
          ano: "2000",
          qntMin: "1",
          qntMax: "2",
          duracao: "60",
          faixaEtaria: "12",
          nome: "Al Cabohne",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 13,
          dominio_id: 1,
          mecanica_id: 6,
        },
        {
          id: 53,
          ano: "1995",
          qntMin: "3",
          qntMax: "4",
          duracao: "45",
          faixaEtaria: "12",
          nome: "Canaletto",
          descricao: "Descricao",
          aprovado: 1,
          tema_id: 12,
          dominio_id: 14,
          mecanica_id: 4,
        }


      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jogo', null, {});
  }
};