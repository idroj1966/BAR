function alertPrompt() {
  let name = prompt('Com et dius?');
  alert('Hola ' + name);
}
function anysPerJubilacio() {
  let edat = prompt('Quina edat tens?');
  edat = parseInt(edat);
  const JUBILACIO = 67;
  let edatPerJubilar = JUBILACIO - edat;
  alert('Et falten ' + edatPerJubilar + ' anys per jubilar-te' + ` Et falten ${edatPerJubilar} anys per jubilar-te`);
  alert(`Et falten ${edatPerJubilar} anys per jubilar-te`);
}
function letterQuizz() {
  let cadena1 = prompt('Escriu una cadena de text.');
  let cadena = cadena1.toLocaleUpperCase();
  let numRandom = Math.floor(Math.random() * 'Z'.charCodeAt()) - 'A'.charCodeAt();
  let letterRandom = String.fromCharCode(numRandom);
  alert(numRandom + letterRandom);
}
function operadoresIgualdad() {
  let primerNumero = prompt('Entra el primer número: ');
  let segonNumero = prompt('Entra el segon número: ');
  if (parseInt(primerNumero) % parseInt(segonNumero) === 0) {
    alert('El número ' + primerNumero + ' es divisible entre ' + segonNumero);
  }
  else {
    alert('El número ' + primerNumero + ' no es divisible entre ' + segonNumero);
  }
}
function bar() {
  const llet = 'LLET';
  const cocaCola = 'COCA COLA';
  const cervesa = 'CERVESA';
  const pregunta1 = 'Què vols prendre?';
  const pregunta2 = 'Quina edat tens?';
  const missatge1 = 'Aquest nen de ';
  const missatge2 = ' anys, no pot prendre ';
  const missatge3 = ' anys, pot prendre ';
  const missatge4 = '.';


  const nen = 14;
  const jove = 18;

  let swtich = 0;
  let beguda = prompt(pregunta);
  let beguda1 = beguda.toLocaleUpperCase();

  if (beguda1 === cocaCola || beguda1 === cervesa) {
    let edat = prompt(pregunta2);
    if (parseInt(edat) < nen & (beguda1 === cocaCola || beguda1 === cervesa)) {
      alert(missatge1 + edat + missatge2 + beguda + missatge4);
    }
    else {
      if ((parseInt(edat) > nen & parseInt(edat) < jove) & beguda1 === cervesa) {
        alert(missatge1 + edat + missatge2 + beguda + missatge4);
      }
      else {
        alert(missatge1 + edat + missatge3 + beguda + missatge4);
      }
    }
  }
}