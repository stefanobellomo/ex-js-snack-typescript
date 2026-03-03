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


