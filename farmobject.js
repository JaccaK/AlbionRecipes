const dietmap = new Map([["meat",52],["crops",48],["none",1]])
const meatids = ["T3_MEAT","T4_MEAT","T5_MEAT","T6_MEAT","T7_MEAT","T8_MEAT"]
const cropids = ["T1_CARROT","T2_BEAN","T3_WHEAT","T4_TURNIP","T5_CABBAGE","T6_POTATO","T7_CORN","T8_PUMPKIN","T2_AGARIC","T3_COMFREY","T4_BURDOCK","T5_TEASEL","T6_FOXGLOVE","T7_MULLEIN","T8_YARROW"]
const seed_vendor_price = new Map([
	 ["T1_FARM_CARROT_SEED",   2000]
	,["T2_FARM_BEAN_SEED",     3000]
	,["T3_FARM_WHEAT_SEED",    5000]
	,["T4_FARM_TURNIP_SEED",   7500]
	,["T5_FARM_CABBAGE_SEED", 10000]
	,["T6_FARM_POTATO_SEED",  15000]
	,["T7_FARM_CORN_SEED",    22500]
	,["T8_FARM_PUMPKIN_SEED", 30000]
	,["T2_FARM_AGARIC_SEED",   3000]
	,["T3_FARM_COMFREY_SEED",  5000]
	,["T4_FARM_BURDOCK_SEED",  7500]
	,["T5_FARM_TEASEL_SEED",  10000]
	,["T6_FARM_FOXGLOVE_SEED",15000]
	,["T7_FARM_MULLEIN_SEED", 22500]
	,["T8_FARM_YARROW_SEED",  30000]
	,["T3_FARM_CHICKEN_BABY",  5000]
	,["T4_FARM_GOAT_BABY",     7500]
	,["T5_FARM_GOOSE_BABY",   10000]
	,["T6_FARM_SHEEP_BABY",   15000]
	,["T7_FARM_PIG_BABY",     22500]
	,["T8_FARM_COW_BABY",     30000]
	,["T3_FARM_OX_BABY",      25000]
	,["T4_FARM_OX_BABY",      75000]
	,["T5_FARM_OX_BABY",     225000]
	,["T6_FARM_OX_BABY",     675000]
	,["T7_FARM_OX_BABY",    2025000]
	,["T8_FARM_OX_BABY",    6075000]
	,["T3_FARM_HORSE_BABY",   25000]
	,["T4_FARM_HORSE_BABY",   75000]
	,["T5_FARM_HORSE_BABY",  225000]
	,["T6_FARM_HORSE_BABY",  675000]
	,["T7_FARM_HORSE_BABY", 2025000]
	,["T8_FARM_HORSE_BABY", 6075000]
])

class Animal {
	constructor(babyid, adultid, quantity, diet, maxnutri, nutrilimit, cycles, baseyield, nuturebonus, citybonus) {
		if (babyid !== undefined){ 
			this.babyid = babyid
		} else {
			this.babyid = "UNDEFINED"
		}
		this.adultid = adultid
		this.nutrition = dietmap.get(diet)
		if (this.nutrition === undefined) { this.nutrition = 48 }
		this.foods = selectFood(diet)
		this.diet = diet
		this.foodtotal = calcFoodAmount(maxnutri,nutrilimit,this.nutrition)
		this.baseyield = baseyield
		this.focusyield = baseyield + (cycles*nuturebonus)
		this.quantity = quantity
		if (citybonus !== undefined){
			this.citybonus = citybonus
		} else {
			this.citybonus = false
		}
	}

	profit(itemmap, city, tax, foodids){
		var babyprice = itemmap.getPrice(this.babyid,1,city)
		var adultprice = itemmap.getPrice(this.adultid,1,city)
		var foodprice = itemmap.getPrice(getMinPriceFromIDs(foodids,itemmap,city,1),1,city)
		return adultprice * this.quantity * (1-tax) - babyprice + (babyprice * this.baseyield) - foodprice * this.foodtotal
	}

	profitFocus(itemmap, city, tax, foodids) {
		var babyprice = itemmap.getPrice(this.babyid,1,city)
		var adultprice = itemmap.getPrice(this.adultid,1,city)
		var foodprice = itemmap.getPrice(getMinPriceFromIDs(foodids,itemmap,city,1),1,city)
		return adultprice * this.quantity * (1-tax) - babyprice + (babyprice * this.focusyield) - foodprice * this.foodtotal
	}

	profitBool(itemmap,city,tax,focus) {
		var foodids = this.foods
		if (focus)
			return this.profitFocus(itemmap, city, tax, foodids)
		return this.profit(itemmap, city, tax, foodids)
	}

	createTableRow(itemmap, city, endCity, tax, focus){
		var string = "<tr><td class=\"enchant\">"+getEnchantFromName(this.adultid)
		+"</td><td>"+ITEM_NAMES.get(this.adultid)+"</td><td>"
		if (this.citybonus && $("#citybonus").is(':checked')){  
		string = string + (this.quantity * 1.1)+"</td>"
		} else {
		string = string + this.quantity+"</td>"	
		}	
		string = string +"<td><input type=\"number\" class=\"price\" style=\"width:80%\" min=0 value="
		+itemmap.getPrice(this.adultid,1,endCity)+"></td><td class=\"profit\">"
		+Math.trunc(this.profitBool(itemmap, endCity, tax, focus)) +"</td>"
		if (this.babyid != "UNDEFINED"){
		string = string +"<td>"+ITEM_NAMES.get(this.babyid)+"</td><td>"+1
		+"</td><td><input type=\"number\" class=\"babycost\" min=0 size=\"8\" value="+vendor_or_market(this.babyid,city)+"></td>"
		}
		if(this.foods.length > 0){ // This is such a mess.
			var food = getMinPriceFromIDs(this.foods,itemmap,city,1)
			var test_food = getMinPriceFromIDs(cropids,itemmap,city,1)
			var food_price = itemmap.getPrice(food,1,city) == 0 ? 9999999 : itemmap.getPrice(food,1,city)
			var test_food_price = itemmap.getPrice(test_food,1,city)== 0 ? 9999999 : itemmap.getPrice(test_food,1,city)
			var cheaper = test_food_price * 18 < food_price * 10
			if (!Array.from(dietmap.keys()).includes(this.diet)) {
				food = cheaper ? test_food : food
			} else { cheaper = false } // We probably never get here, but better safe and all that.
			string = string + "<td>"+ITEM_NAMES.get(food)+"</td><td>"+(this.foodtotal + cheaper*8)
			+"</td><td><input type=\"number\" class=\"cost\" min=0 size=\"8\" value="+itemmap.getPrice(food,1,city)+"></td>"
		}
		string = string +"<td class=\"baseyield\">"+this.baseyield+"</td><td class=\"focusyield\">"+this.focusyield+"</td>"
		return string
	}
}

function getMinPriceFromIDs(idarray, itemmap, city, quality){
	var item = "NONE"
	idarray.forEach(id => {
		if (itemmap.getPrice(item,quality,city) == 0)
			item = id
		if (itemmap.getPrice(id,quality,city) > 0 && itemmap.getPrice(id,quality,city) < itemmap.getPrice(item,quality,city))
			item = id
	})
	return item
}

function selectFood(food){
	switch(food){
		case "meat":
			return meatids
		case "crops":
			return cropids
		case "none":
			return []
		default:
			return [food]
	}
}

function calcFoodAmount(maxnutri, nutrilimit, foodnutri) {
	var total = (maxnutri - maxnutri % nutrilimit)/nutrilimit * Math.ceil(nutrilimit/foodnutri) + Math.ceil((maxnutri % nutrilimit)/foodnutri)
	if (isNaN(total))
		return 0
	return total
}

function createTableFarm(recipes,itemmap){
	var city = $("#locations").val()
	var tax = 0.045 //3% tax + 1.5% setup fee
	var focus = $("#focus").is(":checked")
	// Create Table Header
	$("#tablearea").empty().append("<table>")
	$("#tablearea > table").append("<tr><th class=\"enchant\">En</th><th>Product</th><th>#</th><th style=\"width:5%\">Price</th><th>Profit</th><th>Material</th><th>#</th><th class=\"cost\" style=\"width:3%\">Cost</tr>")
	//Create Table Rows
	var string = ""
	for (let i = 0; i < recipes.length; i++) {
			string = string + recipes[i].createTableRow(itemmap,city,city,tax,focus)
	}
	$("#tablearea > table")
			.append(string)
}

function calcMaxNutri(growtime, nutripoint) {
	return growtime * 60 * 60 / nutripoint
}

function vendor_or_market(babyid,city){
	const market = itemmap.getPrice(babyid,1,city)
	if (!Array.from(seed_vendor_price.keys()).includes(babyid)){
		return market
	}
	const vendor = seed_vendor_price.get(babyid)
	if (market == 0) { return vendor }
	return vendor > market ? market : vendor
}
async function updateFarmProfit(){
	var city = $("#locations").val()
	var tax = PREM_TAX //3% tax + 1.5% setup fee
	var focus = $("#focus").is(":checked")
	$(".profit").each(function () {
		var price = $(this).parent().children().children(".price").val()
		var quantity = $(this).parent().children().children(".price").parent().prev().text()
		price = price * quantity
		var babycost = $(this).parent().children().children(".babycost").val()
		if (babycost === undefined) {
			babycost = 0
		}
		var cost = $(this).parent().children().children(".cost").val()
		var costquant = $(this).parent().children().children(".cost").parent().prev().text()
		if (isNaN(cost)) {
			cost = 0
			costquant = 0
		}
		var nurture = $(this).parent().children(".baseyield").text()
		if (focus)
			nurture = $(this).parent().children(".focusyield").text()
		var profit =  price * (1 - tax) - cost * costquant - babycost + (babycost * nurture)
		$(this).parent().children(".profit").text(Math.trunc(profit))
	})
	changeProfitColor()
}


//Example farm objects
//constructor(babyid, adultid, quantity, diet, maxnutri, nutrilimit, cycles, baseyield, nuturebonus)
/*
var carrot = new Animal("T1_FARM_CARROT_SEED", "T1_CARROT",9,"none",0,0,1,0,2)
var horseegg = new Animal("T5_FARM_SWAMPDRAGON_FW_THETFORD_BABY", "T5_FARM_SWAMPDRAGON_FW_THETFORD_GROWN",1,"meat",calcMaxNutri(140,116),1488,3,0,0.1)
createTableFarm([carrot,horseegg],itemmap)
//*/