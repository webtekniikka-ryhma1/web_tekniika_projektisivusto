let ostoskori =  [], tuote1 = 0, tuote2 = 0, tuote3 = 0, tuote4 = 0;





document.querySelector('.ostos1').addEventListener('click', function(evt){ //Ensimmäisen tuotteen ostoskorinappi
  let osto1 = {nimi:'Energia kristalli', maara: 1};
  if (+tuote1>0){

    var searchTerm = "Energia kristalli",
        index = -1;
    for(var i = 0, len = ostoskori.length; i < len; i++) {
      if (ostoskori[i].nimi === searchTerm) {
        index = i;
        break;
      }
    }

    ostoskori[index].maara += 1;
  } else {
    ostoskori.push(osto1);
    tuote1++
  }
  console.log(ostoskori);
  return tuote1;
});

document.querySelector('.ostos2').addEventListener('click', function(evt){ //Toisen tuotteen ostoskorinappi
  let osto1 = {nimi:'Hopeavesi', maara: 1};
  if (+tuote2>0){

    var searchTerm = "Hopeavesi",
        index = -1;
    for(var i = 0, len = ostoskori.length; i < len; i++) {
      if (ostoskori[i].nimi === searchTerm) {
        index = i;
        break;
      }
    }

    ostoskori[index].maara += 1;
  } else {
    ostoskori.push(osto1);
    tuote2++
  }
  console.log(ostoskori);
  return tuote2;
});

document.querySelector('.ostos3').addEventListener('click', function(evt){ //Kolmannen tuotteen ostoskorinappi
  let osto1 = {nimi:'Kirkasvalokuuloke', maara: 1};
  if (+tuote3>0){

    var searchTerm = "Kirkasvalokuuloke",
        index = -1;
    for(var i = 0, len = ostoskori.length; i < len; i++) {
      if (ostoskori[i].nimi === searchTerm) {
        index = i;
        break;
      }
    }

    ostoskori[index].maara += 1;
  } else {
    ostoskori.push(osto1);
    tuote3++
  }
  console.log(ostoskori);
  return tuote3;
});

document.querySelector('.ostos4').addEventListener('click', function(evt){ //Neljännen tuotteen ostoskorinappi
  let osto1 = {nimi:'Hyvinvointihiekka', maara: 1};
  if (+tuote4>0){

    var searchTerm = "Hyvinvointihiekka",
        index = -1;
    for(var i = 0, len = ostoskori.length; i < len; i++) {
      if (ostoskori[i].nimi === searchTerm) {
        index = i;
        break;
      }
    }

    ostoskori[index].maara += 1;
  } else {
    ostoskori.push(osto1);
    tuote4++
  }
  return tuote4;
});

function koriauki(evt){ //Funktio joka näyttää ostoskorin sisällön
  let r;

  document.querySelector('.kori').style = 'display:inline-block;';

  if (ostoskori.length >= 1){
    document.querySelector('.tyhjennakori').style = 'visibility:visible;';
  }


  for (r = 0; r < ostoskori.length; r++) {

    const li = document.createElement('li');
    li.innerHTML = ostoskori[r].nimi;

    document.querySelector('.ostoslistanimi').appendChild(li);
  }
  for (r = 0; r < ostoskori.length; r++) {

    const li = document.createElement('li');
    li.innerHTML = ostoskori[r].maara;

    document.querySelector('.ostoslistamaara').appendChild(li);
  }
  document.querySelector('.naytakori').removeEventListener('mouseenter', koriauki);
  document.querySelector('.suljekori').addEventListener('click', korikiinni);
  }

function korikiinni(evt){  //Funktio joka piilottaa ostoskorin

  document.querySelector('.kori').style = 'display:none;';

  const listanimi = document.querySelector('.ostoslistanimi');
  while (listanimi.firstChild){
    listanimi.removeChild(listanimi.firstChild);
  }
  const listamaara = document.querySelector('.ostoslistamaara');
  while (listamaara.firstChild){
    listamaara.removeChild(listamaara.firstChild);
  }
  document.querySelector('.suljekori').removeEventListener('click', korikiinni);
  document.querySelector('.naytakori').addEventListener('mouseenter', koriauki);

}

document.querySelector('.naytakori').addEventListener('mouseenter', koriauki);

document.querySelector('.tyhjennakori').addEventListener('click', function(evt){ //Tällä tyhjennetään ostoskori

  document.querySelector('.kori').style = 'display:none;';

  let i;
  const listanimi = document.querySelector('.ostoslistanimi');
  while (listanimi.firstChild){
    listanimi.removeChild(listanimi.firstChild);
  }
  const listamaara = document.querySelector('.ostoslistamaara');
  while (listamaara.firstChild){
    listamaara.removeChild(listamaara.firstChild);
  }
  for (i=ostoskori.length; i>=0; i--) {
    ostoskori.pop();
  }
  document.querySelector('.naytakori').removeEventListener('click', korikiinni);
  document.querySelector('.naytakori').addEventListener('mouseenter', koriauki);
  document.querySelector('.tyhjennakori').style = 'visibility:hidden;';
  tuote1=0;
  tuote2=0;
  tuote3=0;
  tuote4=0;
});



//Tuotetekstien näyttäminen
document.querySelectorAll('.tuotekuva')[0].addEventListener('mouseenter', function(evt){
  document.querySelectorAll('.lisakuvaus')[0].style = 'visibility:visible;';
  document.querySelectorAll('.lisakuvaus')[1].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[2].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[3].style = 'visibility:hidden;';
});
document.querySelectorAll('.tuotekuva')[1].addEventListener('mouseenter', function(evt){
  document.querySelectorAll('.lisakuvaus')[0].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[1].style = 'visibility:visible;';
  document.querySelectorAll('.lisakuvaus')[2].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[3].style = 'visibility:hidden;';
});
document.querySelectorAll('.tuotekuva')[2].addEventListener('mouseenter', function(evt){
  document.querySelectorAll('.lisakuvaus')[0].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[1].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[2].style = 'visibility:visible;';
  document.querySelectorAll('.lisakuvaus')[3].style = 'visibility:hidden;';
});
document.querySelectorAll('.tuotekuva')[3].addEventListener('mouseenter', function(evt){
  document.querySelectorAll('.lisakuvaus')[0].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[1].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[2].style = 'visibility:hidden;';
  document.querySelectorAll('.lisakuvaus')[3].style = 'visibility:visible;';
});

