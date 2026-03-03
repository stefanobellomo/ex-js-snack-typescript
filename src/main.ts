// snack 1

let datoGenerico: unknown;
if (typeof datoGenerico === 'string') {
  console.log(datoGenerico.toUpperCase());
} else if (typeof datoGenerico === 'number') {
  console.log(datoGenerico * 2);
} else if (typeof datoGenerico === 'boolean') {
  console.log(true || false);
} else {
  console.log('tipo non supportato');
}

// snack 2

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'M' | 'F'
  anniDiServizio: number[]
  readonly emailAziendale: 'pazza@mediaset.com',
  contratto: 'indeterminato' | 'determinato' | 'freelance'
}

const utente1: Dipendente = {
  nome: 'string',
  cognome: 'signorini',
  annoNascita: 1964,
  sesso: 'F',
  anniDiServizio: [1, 2, 4, 6, 7],
  emailAziendale: 'pazza@mediaset.com',
  contratto: 'indeterminato'
}

console.log(utente1);

// snack 3

type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[]
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budget?: number,
  stakeholderPrincipali: string[]
}

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, Developer, ...Developer[]]
}
