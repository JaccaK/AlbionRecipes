

class Journal{
	constructor(unique_name, unique_name_full, loot_map){
		this.name = unique_name
		this.full = unique_name_full
		this.loot = loot_map
	}

	sell_profit(itemmap, tax, city){
		full = itemmap.getPrice(this.full,1,city)
		empty = itemmap.getPrice(this.name,1,city)
		return (full - empty) * (1 - tax)
	}

	loot_profit(itemmap, tax, city){
		silver = 0
		this.loot.keys().forEach(x => silver = silver + itemmap.getPrice(x,1,city) * this.loot.get(x))
		return silver * (1 - tax)
	}
}

var resource_names = new Set()
function createTableFromJournals(journal_iterable, itemmap, tax){
	resource_names = new Set()
	journal_iterable.forEach(function(x){
		for (const value of x.loot.keys()){
			resource_names.add(value)
		}
	})
	$("#tablearea").empty().append("<table>")
	$("#tablearea > table").append("<tr><th>Resources</th></tr>")

	var string = "<tr>"
	var counter = 0
	var breaker = 3
	resource_names.forEach(x =>{
		
		if (counter > breaker) {
			counter = 0
			string = string + "</tr><tr>"
		}
		counter = counter + 1
		s = "<td><label for=\""+x.replace("@","")+"\">"+ITEM_NAMES.get(x)+"</label><input type = \"number\" id=\""+x.replace("@","")
		+"\" style=\"width:80%\" min=0 value="+itemmap.getPrice(x,1,$("#locations").val())+"></td>"
		string = string + s
	})
	$("#tablearea > table").append(string)

	$("#tablearea > table").append("<tr><th>Empty Journal</th><th>Full Journal</th><th>Journal Spread</th><th>Average Mission Profit</th><th>Average Profit (No Journal)</th></tr>")

	string = ""
	journal_iterable.forEach(x =>
	{
		s = "<tr><td><label for=\"empty\">" + ITEM_NAMES.get(x.name + "_EMPTY") + "</label><input type = \"number\" class=\"empty\" style=\"width:80%\" min=0 value=" 
		+ itemmap.getPrice(x.name+ "_EMPTY",1,$("#locations").val()) +"></td>" +
		"<td><label for=\"full\">" + ITEM_NAMES.get(x.full) + "</label><input type = \"number\" class=\"full\" style=\"width:80%\" min=0 value=" 
		+ itemmap.getPrice(x.full,1,$("#locations").val()) +"></td>" +
		"<td class=\"spread\">" + (itemmap.getPrice(x.full,1,$("#locations").val()) - itemmap.getPrice(x.name,1,$("#locations").val())) + "</td>" +
		"<td class=\"profit\">0</td><td class=\"raw\">0</td>"
		for (const k of x.loot.keys()){
			s = s + "<td class=\"loot\">" + k + "</td><td class=\"amount\">" + x.loot.get(k) +"</td>"
		}
		
		string = string + s + "</tr>"
	})
	$("#tablearea > table").append(string)
}

TAXES = [0,PREM_TAX,FREE_TAX]

function updateJournalProfit(){
	var city = $("#locations").val()
	var tax = TAXES[$("#tax").val()]
	var happy_mult = $("#happy").val()
	$(".spread").each(function(){
		var full = $(this).parent().children().children(".full").val()
		var empty = $(this).parent().children().children(".empty").val()
		var spread = full  * (1 - tax) - empty
		$(this).text(Math.trunc(spread))
	})
	$(".profit").each(function() {
		var revenue = 0
		var full = $(this).parent().children().children(".full").val()
		var empty = $(this).parent().children().children(".empty").val()
		console.log(empty)
		$(this).parent().children(".loot").each(function(){
			var amt = parseFloat($(this).next().text())
			var price = $("#" + $(this).text().replace("@","")).val()
			revenue = revenue + (amt * price)
		})
		revenue = revenue * happy_mult * (1 - tax)
		var profit = (revenue  - full) + parseInt(empty)
		$(this).text(Math.trunc(profit))
		$(this).parent().children(".raw").text(Math.trunc(revenue))
	})
	changeProfitColor()
	changeSpreadColor()
}

function changeSpreadColor() {
    $(".spread").each( function() {
    var profit = parseInt($(this).text().trim());
    var color = 'red';
    if (!isNaN(profit) && profit > 0) 
        color = 'green';
    $(this).css('color', color);
    })
 	$(".raw").each( function() {
    var profit = parseInt($(this).text().trim());
    var color = 'red';
    if (!isNaN(profit) && profit > 0) 
        color = 'green';
    $(this).css('color', color);
    })
       
}