class Restaurant {
	private static restaurants:Restaurant[] = [];
	coordinates: [number, number];

	constructor(
		private id_restaurant: number,
		private name: string,
		private address: string, 
		private lat: number,
		private lng: number,
		private kind_food: string, 
	) {
		
		this.coordinates = [this.lat, this.lng];
		Restaurant.restaurants.push(this);
	}

	static get getListRestaurants() {
		return Restaurant.restaurants;
	}

	// getters
	get getId() {
		return this.id_restaurant;
	}
	get getName() {
		return this.name;
	}
	get getAddress() {
		return this.address;
	}
	get getLat() {
		return this.lat;
	}
	get getLng() {
		return this.lng;
	}

	get getKind_food() {
		return this.kind_food;
	}

	get getCoordinates (){
		return this.coordinates; 
	}

	// setters
	set setKind (kind_food:string) {
		this.kind_food = kind_food;
	}
	
}