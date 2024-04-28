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
	for (let i = 0; i < recipes.length; i++) {
			string = string + "<tr><td class=\"enchant\">"+getEnchantFromName(recipes[i].result)
			+"</td><td>"+ITEM_NAMES.get(recipes[i].result)+"</td><td class=\"nut\">"
			+recipes[i].nutrition+"</td><td>"
			+ recipes[i].quantity+"</td><td><input type=\"number\" class=\"price\" style=\"width:80%\" min=0 value="
			+itemmap.getPrice(recipes[i].result,quality,endCity)+"></td><td class=\"profit\">"
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
		nutricost = nutricost * nutri
		price = price * quantity
		var cost = 0
		$(this).parent().children().children(".cost").each(function (){ // Check if has excluded
			exluded = $(this).parent().next().text()
			has_exclusions = (has_exclusions || exluded == "true")
		})
		has_exclusions =  force_single_craft
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