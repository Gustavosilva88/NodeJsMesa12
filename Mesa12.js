const alicia = [23, 69, 32];
const bob = [12, 80, 43];

function encontrarGanhador(a, b) {
  let pontosPrimeiroParticipante = 0;
  let pontosSegundoParticipante = 0;

  for (let i = 0; i < alicia.length; i++) {

    if (a[i] > b[i]) {
      pontosPrimeiroParticipante = pontosPrimeiroParticipante + 1;

    }
    else if (a[i] < b[i]) {
      pontosSegundoParticipante = pontosSegundoParticipante + 1;
    }

    else {
      console.log('Empatou')
    }
  }
  if (pontosPrimeiroParticipante > pontosSegundoParticipante) {

    console.log('Alicia Ganhou')
  }

  else {
    console.log('Bob Ganhou')
  }

}
encontrarGanhador(alicia, bob)