class Item {
	constructor(entry){
		this.id = entry.item_id
		this.prices = new Map()
		this.addPrice(entry.city, entry.sell_price_min, entry.sell_price_max_date)
	}

	addPrice(city, price, date){
		//Date is for freshness comparison
		var city_name = city
		if (city_name.endsWith(" Portal"))
			city_name = city.substring(0, city.lastIndexOf(" "))
		if(!this.prices.has(city_name))
			this.prices.set(city_name, [price, date])
		if(this.prices.get(city_name)[1] < date)
			this.prices.set(city_name, [price, date])
	}
	
}

class Item_Map {
	constructor(){
		this.map = new Map()
	}

	addItem(entry){
		if(!this.map.has(entry.item_id)) {
			this.map.set(entry.item_id, new Item(entry))
		} else {
			this.map.get(entry.item_id).addPrice(entry.city, entry.sell_price_min, entry.sell_price_max_date)
		}
	}

	getPrice(id, city) {
		return this.map.get(id).prices.get(city)[0]
	}
}

class Recipe {
	constructor(resultId, ingredientMap, nutrition, quantity){
		this.result = resultId
		this.ingredients = ingredientMap
		this.nutrition = nutrition
		this.quantity = quantity
	}

	calcProfit(itemmap, city, rrr, nutritioncost, tax){
		var profit = itemmap.getPrice(this.result, city) * this.quantity * (1-tax)
		return profit - this.calcCost(itemmap, city, rrr, nutritioncost)
	}

	calcCost(itemmap, city, rrr, nutritioncost){
		var investment = 0
		for (var key of this.ingredients.keys()){
			investment = investment + this.ingredients.get(key) * itemmap.getPrice(key, city)
		}
		return investment * (1 - rrr) + this.nutrition * nutritioncost
	}

}

async function updateBlackMarketBuyMap(itemmap,itemstring) {
	var url = "https://www.albion-online-data.com/api/v2/stats/prices/" + itemstring + ".json?qualities=1&locations=Black Market"
	var response = await $.getJSON(url)
	response.forEach(entry => itemmap.set(entry.item_id, entry.buy_price_max))
}

async function updateItemMap(itemmap, itemstring){
	var url = "https://www.albion-online-data.com/api/v2/stats/prices/" + itemstring + ".json?qualities=1"
	var response = await $.getJSON(url)
	response.forEach(item => itemmap.addItem(item))
}