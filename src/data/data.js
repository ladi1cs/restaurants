const restaurants = require('./restaurants.json');

export default class Data{
    constructor(){
        this.data = restaurants;
        this.featured= this.getFeatured();
    }

    getFeatured(){
        const listId = restaurants.featuredRestaurants.map(r => r.restaurantId);
        return restaurants.restaurants.filter(r => listId.indexOf(r.id) >= 0)
    }

    get restaurantList(){
        return this.data.restaurants;
    }

    get featuredList(){
        return this.featured;
    }

    getFiltered(text, ranges){
        const filtered = this.data.restaurants.filter(r => ranges[r.priceRange] || 
            (text && text !== "" && r.name.includes(text)));
        
        return filtered;
    }

}