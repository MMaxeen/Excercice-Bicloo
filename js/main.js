fetch('https://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {
        const stations = data.network.stations;
        const liste = document.querySelector('.stations');
        //
        for (let i = 0; i < stations.length; i++) {
            const currentLi = document.createElement('div');
            currentLi.classList.add("station");
            const h4 = document.createElement('h4');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const indikator = document.createElement('div');
            // indikator.classList.add("couleur");
            
            const texteH4 = stations[i].extra.address;
            h4.innerText = texteH4;
            
            const texteP1 = 'Places disponibles : ' + stations[i].empty_slots;
            p1.innerText = texteP1;
            
            currentLi.appendChild(h4);
            currentLi.appendChild(p1);

            const texteP2 = ' Vélos disponibles : ' + stations[i].free_bikes;
            p2.innerText = texteP2;
            currentLi.appendChild(p2);
            currentLi.appendChild(indikator);
            liste.appendChild(currentLi);

            if (stations[i].free_bikes <= 5) {
                indikator.classList.add('c-och');
            } else if(stations[i].free_bikes <= 10) {
                indikator.classList.add('medium');
            } else {
                indikator.classList.add('good');
            }
        } 
        
        // et ici
	});
});

// Bonus pour indicateur visuel -50% disponibles


















// var currentLi = document.createElement('div');
//             currentLi.classList.add("station");
//             var stationName = stations[i].extra.address;
//             var emptySlot = stations[i].empty_slots;
//             var freeBike =  stations[i].free_bikes;
//             // var texte = (stations[i].extra.address + ' // ' + stations[i].empty_slots + ' // ' + stations[i].free_bikes);
//             currentLi.textContent ='Nom de la station : ' + stationName + 'Emplacements disponibles : ' + emptySlot + 'Vélos disponibles : ' + freeBike;
//             liste.appendChild(currentLi);


// var currentLi = document.createElement('div');
//             currentLi.classList.add("station");
//             var texte = (stations[i].extra.address + ' – ' + stations[i].empty_slots + ' – ' + stations[i].free_bikes);
//             currentLi.textContent = texte;
//             liste.appendChild(currentLi);



var Dailyweather = function(data) {
    var todayDiv = document.querySelector('#today');

    var stationName = document.createElement('h4');
    stationName.textContent = 'Nom station : ' + stations[i].extra.address;
    todayDiv.appendChild(stationName);

    var freeBike = document.createElement('p');
    freeBike.textContent = 'Vélos disponibles : ' + stations[i].free_bikes;
    todayDiv.appendChild(freeBike);

    var placeDispo = document.createElement('p');
    placeDispo.textContent = 'Places disponibles : ' + stations[i].empty_slots;
  };