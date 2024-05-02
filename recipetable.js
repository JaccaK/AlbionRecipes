function createTableFromRecipes(recipes,itemmap){
	var city = $("#locations").val()
	var rrr = $("#rrr").val()
	var nutri = $("#nutri").val()
	var tax = FREE_TAX //6% tax + 1.5% setup fee
	if($("#prem").is(":checked"))
		tax = PREM_TAX //3% tax + 1.5% setup fee
	var quality = $("#quality").val()
	if(isNaN(quality))
		quality = 1
	$("#tablearea").empty().append("<table>")
	$("#tablearea > table").append("<tr><th class=\"enchant\">En</th><th>Product</th><th class=\"nut\">Nutri</th><th>#</th><th style=\"width:5%\">Price</th><th>Profit</th><th>Material</th><th>#</th><th class=\"cost\" style=\"width:3%\">Cost</tr>")
	var string = ""
	for (let i = 0; i < recipes.length; i++) {
			string = string + "<tr><td class=\"enchant\">"+getEnchantFromName(recipes[i].result)
			+"</td><td>"+ITEM_NAMES.get(recipes[i].result)+"</td><td class=\"nut\">"
			+recipes[i].nutrition+"</td><td>"
			+ recipes[i].quantity+"</td><td><input type=\"number\" class=\"price\" style=\"width:80%\" min=0 value="
			+itemmap.getPrice(recipes[i].result,quality,city)+"></td><td class=\"profit\">"
			+Math.trunc(recipes[i].calcProfit(itemmap,quality,city,rrr,nutri,tax))+"</td>"
			for (var key of recipes[i].ingredients.keys()){
				string = string + "<td>"+ITEM_NAMES.get(key)+"</td><td>"+recipes[i].ingredients.get(key)+"</td><td><input type=\"number\" class=\"cost\" min=0 size=\"8\" value="+itemmap.getPrice(key,1,city)+">"
				+"<td class=\"exclude\">"+recipes[i].isExcluded(key)+"</td>"
			}
			string = string + "</tr>"
	}
	$("#tablearea > table")
			.append(string)
}

function createTableFromRecipesDifferentEnd(recipes,itemmap){
	var city = $("#locations").val()
	var endCity = $("#endLocations").val()
	var rrr = $("#rrr").val()
	var nutri = $("#nutri").val()
	var tax = FREE_TAX //6% tax + 1.5% setup fee
	if($("#prem").is(":checked"))
		tax = PREM_TAX //3% tax + 1.5% setup fee
	var quality = $("#quality").val()
	if(isNaN(quality))
		quality = 1
	$("#tablearea").empty().append("<table>")
	$("#tablearea > table").append("<tr><th class=\"enchant\">En</th><th>Product</th><th class=\"nut\">Nutri</th><th>#</th><th style=\"width:5%\">Price</th><th>Profit</th><th>Material</th><th>#</th><th class=\"cost\" style=\"width:3%\">Cost</tr>")
	var string = ""
	
	var new_recipes = recipes
	var enchant = $("#enchant") && $("#enchant").is(":checked")
	if (enchant) 
		new_recipes = new_recipes.map(x => convertUpgrade(x))

	for (let i = 0; i < new_recipes.length; i++) {
			string = string + "<tr><td class=\"enchant\">"+parseInt(getEnchantFromName(new_recipes[i].result))
			+"</td><td>"+ITEM_NAMES.get(new_recipes[i].result)+"</td><td class=\"nut\">"
			+new_recipes[i].nutrition+"</td><td>"
			+ new_recipes[i].quantity+"</td><td><input type=\"number\" class=\"price\" style=\"width:80%\" min=0 value="
			+itemmap.getPrice(new_recipes[i].result,quality,endCity)+"></td><td class=\"profit\">"
			+Math.trunc(new_recipes[i].calcProfit(itemmap,quality,city,rrr,nutri,tax))+"</td>"
			for (var key of new_recipes[i].ingredients.keys()){
				string = string + "<td>"+ITEM_NAMES.get(key)+"</td><td>"+new_recipes[i].ingredients.get(key)+"</td><td><input type=\"number\" class=\"cost\" min=0 size=\"8\" value="+itemmap.getPrice(key,1,city)+">"
				+"<td class=\"exclude\">"+new_recipes[i].isExcluded(key)+"</td>"
			}
			string = string + "</tr>"
	}
	$("#tablearea > table")
			.append(string)
}

function createNavBar(){
	htmlstuff = "<ul><li><a href=\"index.html\">HOME</a></li>"
			   +"<ul><li><a href=\"cooking.html\">CHEF</a></li>"
			   +"<ul><li><a href=\"alchemy.html\">ALCHEMIST</a></li>"
			   +"<ul><li><a href=\"saddler.html\">SADDLER</a></li>"
			   +"<ul><li><a href=\"toolmaker.html\">TOOLMAKER</a></li>"
			   +"<ul><li><a href=\"magestower.html\">MAGE'S TOWER</a></li>"
			   +"<ul><li><a href=\"hunterslodge.html\">HUNTER'S LODGE</a></li>"
			   +"<ul><li><a href=\"warriorsforge.html\">WARRIOR'S FORGE</a></li>"
			   +"<ul><li><a href=\"refine.html\">REFINING</a></li>"
			   +"<ul><li><a href=\"butcher.html\">BUTCHER</a></li>"
			   +"<ul><li><a href=\"extras.html\">EXTRAS</a></li>"
			   +"<ul><li><select id=\"language\"><option value=\"EN-US\">English</option><option value=\"KO-KR\">한국인</option><option value=\"ID-ID\">Indonesia</option><option value=\"RU-RU\">Русский</option><option value=\"JA-JP\">日本語</option><option value=\"ZH-TW\">台湾华人</option><option value=\"DE-DE\">Deutsch</option><option value=\"PL-PL\">Polski</option><option value=\"FR-FR\">Français</option><option value=\"ZH-CN\">中国 中文</option><option value=\"ES-ES\">Español</option><option value=\"PT-BR\">Português</option><option value=\"IT-IT\">Italiano</option></select></li>"
			   +"</ul><br>"
	$("#navbararea").empty().append(htmlstuff)
}

function updateButtonTextUpdating(){
	$("#updateButton").text("Updating . . .")
    $("#updateButton").prop( "disabled", true );
    $("#tablearea").empty();
}

function updateButtonTextUpdated(){
	$("#updateButton").text("Update")
	$("#updateButton").prop( "disabled", false )
}

function changeProfitColor() {
    $(".profit").each( function() {
    var profit = parseInt($(this).text().trim());
    var color = 'red';
    if (!isNaN(profit) && profit > 0) 
        color = 'green';
    $(this).css('color', color);
    })
}

function hideUnprofitable() {
	$(".profit").each( function() {
    var profit = parseInt($(this).text().trim());
    if (!isNaN(profit) && profit < 1) 
        $(this).parent().remove()
    })
}

function showOnlyEnchant(enchantlevel) {
	$(".enchant").each( function () {
		if (!$(this).html().includes("En") && ($(this).text() != enchantlevel))
			$(this).parent().remove()
	})
}

async function updateProfit(){
	var rrr = $("#rrr").val()
	var nutri = $("#nutri").val()
	var tax = FREE_TAX //6% tax + 1.5% setup fee
	var force_single_craft = $("#single") && $("#single").is(":checked") //Check if force singlecraft checkbox exists and is checked.
	if($("#prem").is(":checked"))
		tax = PREM_TAX //3% tax + 1.5% setup fee
	$(".profit").each(function () {
		var has_exclusions = false
		var price = $(this).parent().children().children(".price").val()
		var quantity = $(this).parent().children().children(".price").parent().prev().text()
		var nutricost = $(this).parent().children().children(".price").parent().prev().prev().text()
		price = price * quantity
		var cost = 0
		$(this).parent().children().children(".cost").each(function (){ // Check if has excluded
			exluded = $(this).parent().next().text()
			has_exclusions = (has_exclusions || exluded == "true")
		})
		if (force_single_craft) {has_exclusions = force_single_craft}
		nutricost = nutricost * nutri * (1 * has_exclusions + (1 / (1-rrr)) * !has_exclusions) // Since we assume 1/(1-rrr) more crafts in some cases, we need 1/(1-rrr) more nutricost
		$(this).parent().children().children(".cost").each(function (){
			quantity = $(this).parent().prev().text()
			exluded = $(this).parent().next().text()
			if(exluded == "false"){
				cost = cost + $(this).val() * quantity * (((1 - rrr) * has_exclusions) + !has_exclusions) //has_exclusion will resolve to 1 if there are exclusions
			} else {
				cost = cost + $(this).val() * quantity
			}
		})
		var choose_rev = ((price / (1-rrr)) * !has_exclusions) + (price * has_exclusions) // choose between profit with no exclusions and profit with exclusions
		var profit = choose_rev * (1 - tax) - cost - nutricost
		$(this).parent().children(".profit").text(Math.trunc(profit))
	})
	changeProfitColor()
}
$("*").change(function() { updateProfit() })


function getEnchantFromName(enchant){
	var enchantlevel = "0"
	if(enchant.indexOf("@") != -1){
		enchantlevel = enchant.at(-1)
	}
	return enchantlevel
}

async function bindSelectRow(){
	$("#tablearea > table > tr").click(function() {
      $(".selectedRow").removeClass()
      $(this).addClass("selectedRow")
    })
}

function appendItems(itemarray) { //Limit total item list to around 8000 characters.
    string = ""
    itemarray.forEach(item => string = string+item+",")
    return string
}

function convertUpgrade(recipe){
	var rune_amount = selectRuneAmount(recipe.result)
	var rune_id = selectRune(recipe.result)
	if (rune_amount == -1 || rune_id == "" || getEnchantFromName(recipe.result) == "0") // Base case, no keywords, -1 amount
	return recipe
	var new_ingredient_map = downgradeIngredients(recipe.ingredients, recipe.exlude) // The "exlude" typo had me pulling out my hair for 20 minutes.
	var new_recipe = new Recipe(recipe.result, new_ingredient_map, recipe.exlude, recipe.nutrition, recipe.quantity)
	new_recipe.ingredients.set(rune_id, rune_amount)
	new_recipe.exlude.push(rune_id)
	return new_recipe
}

function downgradeIngredients(ingredient_map, exclusion_array){
	var new_map = new Map()
	Array.from(ingredient_map.keys()).forEach(x =>{
		//Skip exclusions, map each ingredient to downgrade enchant, return new_map
		var item_name = ""
		if(exclusion_array !== undefined && exclusion_array.includes(x))
		{
			item_name = x
		} else {
			item_name = downgradeEnchant(x)
		}
		new_map.set(item_name, ingredient_map.get(x))
	})
	return new_map
}

function downgradeEnchant(item_name){
	//Split on @, downgrade item[1] by 1. If 0, remove _LEVEL1 if exists and skip appending "@0"
	var item = item_name.split("@")
	if (item.length < 2)
	return item_name
	var enchant = parseInt(item[1]) - 1
	if (enchant == 3)
	return item_name
	if (enchant == 0)
	return item[0].replace("_LEVEL1","")
	if (enchant == 1)
	return item[0].replace("_LEVEL2","_LEVEL1") + "@" + enchant
	if (enchant == 2)
	return item[0].replace("_LEVEL3","_LEVEL2") + "@" + enchant
}

function selectRune(item_name) {
	const runes = ["T%_RUNE","T%_SOUL","T%_RELIC"]
	var tier = item_name.charAt(1)
	var item = item_name.split("@")
	if ( parseInt(tier)  < 4)
	return ""
	if (item.length < 2)
	return runes[0].replace("%",tier)
	if (item[1] == "3" || item[1] == "4")
	return ""
	return runes[parseInt(item[1])].replace("%",tier)
}

function selectRuneAmount(item_name){ // Yoinked and modified from enchant.js
    const rune_cost = [96,192,288,384]
    //0 = HELM,SHOES,CAPE,OFFHAND, 1 = ARMOR,BAG, 3 = MAIN, 4 = 2H
    if (item_name.includes("2H")) //Could switch here maybe but like why bother
        return rune_cost[3]
    if (item_name.includes("MAIN"))
        return rune_cost[2]
    if (item_name.includes("ARMOR") || item_name.includes("BAG"))
        return rune_cost[1]
	if (item_name.includes("HELM") || item_name.includes("SHOES") || item_name.includes("CAPE") || item_name.includes("OFFHAND"))
    	return rune_cost[0]
	return -1
}

