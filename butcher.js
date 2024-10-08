var materials = "T1_FISHCHOPS,T3_FARM_CHICKEN_GROWN,T4_FARM_GOAT_GROWN,T5_FARM_GOOSE_GROWN,T6_FARM_SHEEP_GROWN,T7_FARM_PIG_GROWN,T8_FARM_COW_GROWN,T3_MEAT,T4_MEAT,T5_MEAT,T6_MEAT,T7_MEAT,T8_MEAT,T1_FISH_FRESHWATER_ALL_COMMON,T2_FISH_FRESHWATER_ALL_COMMON,T3_FISH_FRESHWATER_ALL_COMMON,T4_FISH_FRESHWATER_ALL_COMMON,T5_FISH_FRESHWATER_ALL_COMMON,T6_FISH_FRESHWATER_ALL_COMMON,T7_FISH_FRESHWATER_ALL_COMMON,T8_FISH_FRESHWATER_ALL_COMMON,T1_FISH_SALTWATER_ALL_COMMON,T2_FISH_SALTWATER_ALL_COMMON,T3_FISH_SALTWATER_ALL_COMMON,T4_FISH_SALTWATER_ALL_COMMON,T5_FISH_SALTWATER_ALL_COMMON,T6_FISH_SALTWATER_ALL_COMMON,T7_FISH_SALTWATER_ALL_COMMON,T8_FISH_SALTWATER_ALL_COMMON,T3_FISH_FRESHWATER_FOREST_RARE,T5_FISH_FRESHWATER_FOREST_RARE,T7_FISH_FRESHWATER_FOREST_RARE,T3_FISH_FRESHWATER_MOUNTAIN_RARE,T5_FISH_FRESHWATER_MOUNTAIN_RARE,T7_FISH_FRESHWATER_MOUNTAIN_RARE,T3_FISH_FRESHWATER_HIGHLANDS_RARE,T5_FISH_FRESHWATER_HIGHLANDS_RARE,T7_FISH_FRESHWATER_HIGHLANDS_RARE,T3_FISH_FRESHWATER_STEPPE_RARE,T5_FISH_FRESHWATER_STEPPE_RARE,T7_FISH_FRESHWATER_STEPPE_RARE,T3_FISH_FRESHWATER_SWAMP_RARE,T5_FISH_FRESHWATER_SWAMP_RARE,T7_FISH_FRESHWATER_SWAMP_RARE,T3_FISH_SALTWATER_ALL_RARE,T5_FISH_SALTWATER_ALL_RARE,T7_FISH_SALTWATER_ALL_RARE,T3_FISH_FRESHWATER_AVALON_RARE,T5_FISH_FRESHWATER_AVALON_RARE,T7_FISH_FRESHWATER_AVALON_RARE,T8_FISH_SALTWATER_ALL_BOSS_SHARK"
               ///new Recipe(resultId, ingredientMap, excludedFromRRR(array), nutrition, quantity)
    var meatRecipes = [
         createMeatRecipe("T3_FARM_CHICKEN_GROWN", "T3_MEAT"),
         createMeatRecipe("T4_FARM_GOAT_GROWN", "T4_MEAT"),
         createMeatRecipe("T5_FARM_GOOSE_GROWN", "T5_MEAT"),
         createMeatRecipe("T6_FARM_SHEEP_GROWN", "T6_MEAT"),
         createMeatRecipe("T7_FARM_PIG_GROWN", "T7_MEAT"),
         createMeatRecipe("T8_FARM_COW_GROWN", "T8_MEAT")
    ]
    var fishRecipes = [
         createFishRecipe("T1_FISH_FRESHWATER_ALL_COMMON",1),
         createFishRecipe("T2_FISH_FRESHWATER_ALL_COMMON",2),
         createFishRecipe("T3_FISH_FRESHWATER_ALL_COMMON",3),
         createFishRecipe("T4_FISH_FRESHWATER_ALL_COMMON",4),
         createFishRecipe("T5_FISH_FRESHWATER_ALL_COMMON",6),
         createFishRecipe("T6_FISH_FRESHWATER_ALL_COMMON",8),
         createFishRecipe("T7_FISH_FRESHWATER_ALL_COMMON",10),
         createFishRecipe("T8_FISH_FRESHWATER_ALL_COMMON",14),
         createFishRecipe("T1_FISH_SALTWATER_ALL_COMMON",1),
         createFishRecipe("T2_FISH_SALTWATER_ALL_COMMON",2),
         createFishRecipe("T3_FISH_SALTWATER_ALL_COMMON",3),
         createFishRecipe("T4_FISH_SALTWATER_ALL_COMMON",4),
         createFishRecipe("T5_FISH_SALTWATER_ALL_COMMON",6),
         createFishRecipe("T6_FISH_SALTWATER_ALL_COMMON",8),
         createFishRecipe("T7_FISH_SALTWATER_ALL_COMMON",10),
         createFishRecipe("T8_FISH_SALTWATER_ALL_COMMON",14),
         createFishRecipe("T3_FISH_FRESHWATER_FOREST_RARE",10),
         createFishRecipe("T5_FISH_FRESHWATER_FOREST_RARE",20),
         createFishRecipe("T7_FISH_FRESHWATER_FOREST_RARE",30),
         createFishRecipe("T3_FISH_FRESHWATER_STEPPE_RARE",10),
         createFishRecipe("T5_FISH_FRESHWATER_STEPPE_RARE",20),
         createFishRecipe("T7_FISH_FRESHWATER_STEPPE_RARE",30),
         createFishRecipe("T3_FISH_FRESHWATER_MOUNTAIN_RARE",10),
         createFishRecipe("T5_FISH_FRESHWATER_MOUNTAIN_RARE",20),
         createFishRecipe("T7_FISH_FRESHWATER_MOUNTAIN_RARE",30),
         createFishRecipe("T3_FISH_FRESHWATER_HIGHLANDS_RARE",10),
         createFishRecipe("T5_FISH_FRESHWATER_HIGHLANDS_RARE",20),
         createFishRecipe("T7_FISH_FRESHWATER_HIGHLANDS_RARE",30),
         createFishRecipe("T3_FISH_FRESHWATER_SWAMP_RARE",10),
         createFishRecipe("T5_FISH_FRESHWATER_SWAMP_RARE",20),
         createFishRecipe("T7_FISH_FRESHWATER_SWAMP_RARE",30),
         createFishRecipe("T3_FISH_FRESHWATER_AVALON_RARE",10),
         createFishRecipe("T5_FISH_FRESHWATER_AVALON_RARE",20),
         createFishRecipe("T7_FISH_FRESHWATER_AVALON_RARE",30),
         createFishRecipe("T3_FISH_SALTWATER_ALL_RARE",10),
         createFishRecipe("T5_FISH_SALTWATER_ALL_RARE",20),
         createFishRecipe("T7_FISH_SALTWATER_ALL_RARE",30),
         createFishRecipe("T8_FISH_SALTWATER_ALL_BOSS_SHARK",200)
    ]

    var recipes = [meatRecipes, fishRecipes]

    var itemmap = new Item_Map()

    //Because of the simplicity of the recipes, I figure it'd be easier to set up a factory.
    function createMeatRecipe(animalID, meatID) {
    	return new Recipe(meatID, new Map([[animalID,1]]), [], convertNut(800), 18)
    } //The last 3 params for this new recipe are the same for all 6 recipes.

    function createFishRecipe(fishID, choppedFishAmount) {
    	return new Recipe("T1_FISHCHOPS", new Map([[fishID,1]]), [fishID], 0, choppedFishAmount)
    } //Similar to other reasons, the only things that change are the output amount and fish ID.

    async function updateProfitProductYield(){
		var city = $("#locations").val()
		var rrr = $("#rrr").val()
		var nutri = $("#nutri").val()
		var tax = FREE_TAX //6% tax + 1.5% setup fee
		if($("#prem").is(":checked"))
			tax = PREM_TAX //3% tax + 1.5% setup fee
		$(".profit").each(function () {
			var price = $(this).parent().children().children(".price").val()
			var quantity = $(this).parent().children().children(".price").parent().prev().text()
			var nutricost = $(this).parent().children().children(".price").parent().prev().prev().text()
			var cost = 0
			var productyield = 1 + parseFloat(rrr)
			nutricost = nutricost * nutri
			$(this).parent().children().children(".cost").each(function (){
				var ingredientquantity = $(this).parent().prev().text()
				var exluded = $(this).parent().next().text()
				//If anything is excluded, we're not working with rrr (or in this case product yield).
				if(exluded == "true")
					productyield = 1
				cost = cost + $(this).val() * ingredientquantity
			})
			var profit = parseInt(price) * parseInt(quantity) * (1 - tax) * productyield - cost  - nutricost
			$(this).parent().children(".profit").text(Math.trunc(profit))
		})
		changeProfitColor()
	}

    async function updateTable(){
      updateButtonTextUpdating()
      itemmap.clearMap()
      updateItemMap(itemmap,materials).then(x => updateTableValues()).then(x => updateButtonTextUpdated())
    }

    async function updateTableValues(){
      createTableFromRecipesDifferentEnd(recipes[$("#category").val()], itemmap)
      updateProfitProductYield()
      changeProfitColor()
      bindSelectRow()
    }

    $(document).ready(function(){
   	  $("*").off("change")
      createNavBar()
      updateTable()
      $("#category").change(function() { updateTableValues() })
      $("#quality").change(function() { updateTableValues() })
      $("#enchantLevel").change(function() { updateTableValues() })
      $("#locations").change(function() { updateTableValues() })
      $("#endLocations").change(function() { updateTableValues() })
      $("#language").change(function() { updateTableValues() })
      $("#server").change(function() { updateTable() })
      $("*").change(function () { updateProfitProductYield() })
    })
