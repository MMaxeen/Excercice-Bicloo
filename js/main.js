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














