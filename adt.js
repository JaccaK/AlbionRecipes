class Item {
	constructor(entry){
		this.id = entry.item_id
		this.prices = new Map()
		this.addPrice(entry.city, entry.quality, entry.sell_price_min, entry.sell_price_max_date)
	}

	addPrice(city, quality, price, date){
		//Date is for freshness comparison
		var city_name = city
		if (city_name.endsWith(" Portal"))
			city_name = city.substring(0, city.lastIndexOf(" "))
		city_name =  quality + ":" + city_name
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
			this.map.get(entry.item_id).addPrice(entry.city, entry.quality, entry.sell_price_min, entry.sell_price_min_date)
		}
		if(entry.city == "Black Market")
			this.map.get(entry.item_id).addPrice("Black Market Buy", entry.quality, entry.buy_price_max, entry.buy_price_max_date)
	}

	getPrice(id, quality, city) {
		try {
			return this.map.get(id).prices.get(quality+":"+city)[0]
		}
		catch (error) {
			return 0
		}
	}

	clearMap(){
		this.map = new Map()
	}
}

class Recipe {
	constructor(resultId, ingredientMap, exludeFromRRR, nutrition, quantity){
		this.result = resultId
		this.ingredients = ingredientMap
		this.nutrition = nutrition
		this.quantity = quantity
		this.exlude = exludeFromRRR
	}

	calcProfit(itemmap, quality, city, rrr, nutritioncost, tax){
		var profit = itemmap.getPrice(this.result, quality, city) * this.quantity * (1-tax)
		return profit - this.calcCost(itemmap, city, rrr, nutritioncost)
	}

	calcCost(itemmap, city, rrr, nutritioncost){
		var investment = 0
		for (var key of this.ingredients.keys()){
			if (!this.isExcluded(key)) {
				investment = investment + (this.ingredients.get(key) * itemmap.getPrice(key, 1, city)) * (1 - rrr)
			}
			else {
				investment = investment + this.ingredients.get(key) * itemmap.getPrice(key, 1, city)
			}
		}
		return investment + this.nutrition * nutritioncost
	}

	isExcluded(itemname){
		return this.exlude.includes(itemname)
	}

}

async function updateItemMap(itemmap, itemstring){
	var url = "https://east.albion-online-data.com/api/v2/stats/prices/" + itemstring + ".json"
	var response = await $.getJSON(url)
	response.forEach(item => itemmap.addItem(item))
}

function convertNut(itemvalue) {
	return itemvalue/20/44.44
}
