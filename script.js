let tablica = [1, 2, 3, 4, 5, 6];

function sumaIloczyn(tablica){
  
  let wynikIloczynu = 1;
  let wynikSumy = 0;
  
  for(let i = 0 ; i < tablica.length ; i++){
    wynikIloczynu = wynikIloczynu * tablica[i];
    wynikSumy = wynikSumy + tablica[i];
  }
  
  console.log(wynikSumy);
  console.log(wynikIloczynu);
  
}

sumaIloczyn(tablica);