const dietmap = new Map([["meat",52],["crops",48],["none",1]])
const meatids = ["T3_MEAT","T4_MEAT","T5_MEAT","T6_MEAT","T7_MEAT","T8_MEAT"]
const cropids = ["T1_CARROT","T2_BEAN","T3_WHEAT","T4_TURNIP","T5_CABBAGE","T6_POTATO","T7_CORN","T8_PUMPKIN","T2_AGARIC","T3_COMFREY","T4_BURDOCK","T5_TEASEL","T6_FOXGLOVE","T7_MULLEIN","T8_YARROW"]

class Animal {
	constructor(babyid, adultid, quantity, diet, maxnutri, nutrilimit, cycles, baseyield, nuturebonus) {
		this.babyid = babyid
		this.adultid = adultid
		this.nutrition = dietmap.get(diet)
		this.foods = selectFood(diet)
		this.foodtotal = calcFoodAmount(maxnutri,nutrilimit,this.nutrition)
		this.baseyield = baseyield
		this.focusyield = baseyield + (cycles*nuturebonus)
		this.quantity = quantity
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
		+this.quantity+"</td><td><input type=\"number\" class=\"price\" style=\"width:80%\" min=0 value="
		+itemmap.getPrice(this.adultid,1,endCity)+"></td><td class=\"profit\">"
		+Math.trunc(this.profitBool(itemmap, endCity, tax, focus))
		+"</td><td>"+ITEM_NAMES.get(this.babyid)+"</td><td>"+1
		+"</td><td><input type=\"number\" class=\"babycost\" min=0 size=\"8\" value="+itemmap.getPrice(this.babyid,1,city)+"></td>"
		if(this.foods.length > 0){
			string = string + "<td>"+ITEM_NAMES.get(getMinPriceFromIDs(this.foods,itemmap,city,1))+"</td><td>"+this.foodtotal
			+"</td><td><input type=\"number\" class=\"cost\" min=0 size=\"8\" value="+itemmap.getPrice(getMinPriceFromIDs(this.foods,itemmap,city,1),1,city)+"></td>"
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
		default:
		return []
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

async function updateFarmProfit(){
	var city = $("#locations").val()
	var tax = PREM_TAX //3% tax + 1.5% setup fee
	var focus = $("#focus").is(":checked")
	$(".profit").each(function () {
		var price = $(this).parent().children().children(".price").val()
		var quantity = $(this).parent().children().children(".price").parent().prev().text()
		price = price * quantity
		var babycost = $(this).parent().children().children(".babycost").val()
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