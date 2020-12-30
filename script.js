"use strict";

window.addEventListener('load', function () {
	let restaurants = []; 
	let markers = L.markerClusterGroup();
	// Map:
	let map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 9);
	// tiles:	
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
	const selector = document.getElementById("kind_food_selector"); 
	
	function onMapLoad() {
		console.log("Mapa cargado");

		$.ajax({
			type: "GET",
			url: "http://localhost/mapa/apiRestaurants.php",
			dataType: "json",
			 //Restaurant abrufen und speichern in array
			success: function(data){
				console.log(data); 
				for (let item of data){
					new Restaurant(item.id_restaurant, 
									item.name,
									item.address,
									+item.lat,
									+item.lng,
									item.kind_food
								);
					}
				restaurants = Restaurant.getListRestaurants; 

				// selector kind of food
				let listKindFood = [];
				
				for (let restaurant of restaurants){
					listKindFood.push(restaurant.getKind_food);	
				}
				// console.log(listKindFood); 
				let kindsUnique = listKindFood.filter(function(value, index, self){
					return self.indexOf(value) === index;
				}); 

				//create selector with kind of food to choose

				for (let kind of kindsUnique) {
					const selector = document.getElementById("kind_food_selector");
					let option = document.createElement("option");

					selector.append(option);
					option.value = kind;
					option.textContent = kind;
				}
				render_to_map();
			},
			error:(xhr, status, error) => {
				console.log(xhr, status, error);
			},
		});
			
	//     /*
	// 	FASE 3.1
	// 		1) Relleno el data_markers con una petición a la api
	// 		2) Añado de forma dinámica en el select los posibles tipos de restaurantes
	// 		3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
	// 	*/

	}

	/*
		FASE 3.2
			1) Limpio todos los marcadores
			2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
		*/	
	
	// change filter
	$(selector).on("change", function () {
	map.setView([41.400, 2.206], 13) 
	render_to_map(this.value);
	});

	function render_to_map(filter){
		let filtered = []; // array restaurants which meet criteria
		markers.clearLayers(); // clear markers

		filter = selector.value; // currently selected type

		if (filter === "all"){
			filtered = restaurants;
		}else{
			for (let restaurant of restaurants){
				if (filter === restaurant.getKind_food){
					filtered.push(restaurant);
				}
			}
		}

		// set markers for filtered restaurants

		for (let restaurant of filtered){
			let marker = L.marker(restaurant.getCoordinates).bindPopup(`
			<b> ${restaurant.getName} </b>
			<span> ${restaurant.getAddress} </span>`);
			markers.addLayer(marker); 
		}
		
		map.addLayer(markers);
	}; 	
});