    var materials = "T1_CARROT,T2_BEAN,T3_WHEAT,T4_TURNIP,T5_CABBAGE,T6_POTATO,T7_CORN,T8_PUMPKIN,T2_AGARIC,T3_COMFREY,T4_BURDOCK,T5_TEASEL,T6_FOXGLOVE,T7_MULLEIN,T8_YARROW,T3_EGG,T4_MILK,T5_EGG,T6_MILK,T8_MILK,T6_ALCOHOL,T7_ALCOHOL,T8_ALCOHOL,T4_ESSENCE_POTION,T5_ESSENCE_POTION,T6_ESSENCE_POTION,T7_ESSENCE_POTION,T8_ESSENCE_POTION"
    var products = "T2_POTION_HEAL,T4_POTION_HEAL,T4_POTION_HEAL@1,T6_POTION_HEAL,T6_POTION_HEAL@1,T2_POTION_ENERGY,T4_POTION_ENERGY,T4_POTION_ENERGY@1,T6_POTION_ENERGY,T6_POTION_ENERGY@1,T3_POTION_REVIVE,T5_POTION_REVIVE,T5_POTION_REVIVE@1,T7_POTION_REVIVE,T7_POTION_REVIVE@1,T3_POTION_STONESKIN,T5_POTION_STONESKIN,T5_POTION_STONESKIN@1,T7_POTION_STONESKIN,T7_POTION_STONESKIN@1,T3_POTION_SLOWFIELD,T5_POTION_SLOWFIELD,T5_POTION_SLOWFIELD@1,T7_POTION_SLOWFIELD,T7_POTION_SLOWFIELD@1,T4_POTION_COOLDOWN,T4_POTION_COOLDOWN@1,T6_POTION_COOLDOWN,T6_POTION_COOLDOWN@1,T8_POTION_COOLDOWN,T8_POTION_COOLDOWN@1,T8_POTION_CLEANSE,T8_POTION_CLEANSE@1"
               ///new Recipe(resultId, ingredientMap, nutrition, quantity)
    var recipes = [
                  new Recipe("T2_POTION_HEAL", new Map([["T2_AGARIC",8]]),[], 0, 5),
                  new Recipe("T2_POTION_ENERGY", new Map([["T2_AGARIC",8]]),[], 0, 5),
                  new Recipe("T3_POTION_REVIVE", new Map([["T3_COMFREY",8]]),[], 0.36, 5),
                  new Recipe("T3_POTION_STONESKIN", new Map([["T3_COMFREY",8]]),[], 0.36, 5),
                  new Recipe("T3_POTION_SLOWFIELD", new Map([["T3_COMFREY",8]]),[], 0.36, 5),
                  new Recipe("T4_POTION_HEAL", new Map([["T4_BURDOCK",24],["T3_EGG",6]]),[], 1.35, 5),
                  new Recipe("T4_POTION_ENERGY", new Map([["T4_BURDOCK",24],["T4_MILK",6]]),[], 1.35, 5),
                  new Recipe("T4_POTION_COOLDOWN", new Map([["T4_BURDOCK",8],["T3_COMFREY",4]]),[], 0.54, 5),
                  new Recipe("T5_POTION_REVIVE", new Map([["T5_TEASEL",24],["T4_BURDOCK",12],["T5_EGG",6]]),[], 1.89, 5),
                  new Recipe("T5_POTION_STONESKIN", new Map([["T5_TEASEL",24],["T4_BURDOCK",12],["T4_MILK",6]]),[], 1.89, 5),
                  new Recipe("T5_POTION_SLOWFIELD", new Map([["T5_TEASEL",24],["T4_BURDOCK",12],["T5_EGG",6]]),[], 1.89, 5),
                  new Recipe("T6_POTION_HEAL", new Map([["T6_FOXGLOVE",72],["T5_EGG",18],["T6_ALCOHOL",18]]),[], 4.86, 5),
                  new Recipe("T6_POTION_HEAL@1", new Map([["T6_FOXGLOVE",72],["T5_EGG",18],["T6_ALCOHOL",18],["T6_ESSENCE_POTION",5]]),[], 4.86, 5),
                  new Recipe("T6_POTION_ENERGY", new Map([["T6_FOXGLOVE",72],["T6_MILK",18],["T6_ALCOHOL",18]]),[], 4.86, 5),
                  new Recipe("T6_POTION_ENERGY@1", new Map([["T6_FOXGLOVE",72],["T6_MILK",18],["T6_ALCOHOL",18],["T6_ESSENCE_POTION",5]]),[], 4.86, 5),
                  new Recipe("T6_POTION_COOLDOWN", new Map([["T6_FOXGLOVE",24],["T5_TEASEL",12],["T3_COMFREY",12],["T6_MILK",6]]),[], 2.43, 5),
                  new Recipe("T6_ALCOHOL", new Map([["T6_POTATO",1]]),[], 0.044, 1),
                  new Recipe("T7_POTION_REVIVE", new Map([["T7_MULLEIN",72],["T6_FOXGLOVE",36],["T5_EGG",18],["T7_ALCOHOL",18]]),[], 6.48, 5),
                  new Recipe("T7_POTION_REVIVE@1", new Map([["T7_MULLEIN",72],["T6_FOXGLOVE",36],["T5_EGG",18],["T7_ALCOHOL",18],["T7_ESSENCE_POTION",2]]),[], 6.48, 5),
                  new Recipe("T7_POTION_STONESKIN", new Map([["T7_MULLEIN",72],["T6_FOXGLOVE",36],["T4_BURDOCK",36],["T6_MILK",18],["T7_ALCOHOL",18]]),[], 8.1, 5),
                  new Recipe("T7_POTION_STONESKIN@1", new Map([["T7_MULLEIN",72],["T6_FOXGLOVE",36],["T4_BURDOCK",36],["T6_MILK",18],["T7_ALCOHOL",18],["T7_ESSENCE_POTION",3]]),[], 8.1, 5),
                  new Recipe("T7_POTION_SLOWFIELD", new Map([["T7_MULLEIN",72],["T6_FOXGLOVE",36],["T4_BURDOCK",36],["T5_EGG",18],["T7_ALCOHOL",18]]),[], 8.1, 5),
                  new Recipe("T7_POTION_SLOWFIELD@1", new Map([["T7_MULLEIN",72],["T6_FOXGLOVE",36],["T4_BURDOCK",36],["T5_EGG",18],["T7_ALCOHOL",18],["T7_ESSENCE_POTION",3]]),[], 8.1, 5),
                  new Recipe("T7_ALCOHOL", new Map([["T7_CORN",1]]),[], 0.044, 1),
                  new Recipe("T8_POTION_CLEANSE", new Map([["T8_YARROW",72],["T7_MULLEIN",36],["T5_TEASEL",36],["T8_MILK",18],["T8_ALCOHOL",18]]),[], 8.1, 5),
                  new Recipe("T8_POTION_CLEANSE@1", new Map([["T8_YARROW",72],["T7_MULLEIN",36],["T5_TEASEL",36],["T8_MILK",18],["T8_ALCOHOL",18],["T8_ESSENCE_POTION",1]]),[], 8.1, 5),
                  new Recipe("T8_POTION_COOLDOWN", new Map([["T8_YARROW",72],["T7_MULLEIN",36],["T5_TEASEL",36],["T8_MILK",18],["T8_ALCOHOL",18]]),[], 8.1, 5),
                  new Recipe("T8_POTION_COOLDOWN@1", new Map([["T8_YARROW",72],["T7_MULLEIN",36],["T5_TEASEL",36],["T8_MILK",18],["T8_ALCOHOL",18],["T8_ESSENCE_POTION",1]]),[], 8.1, 5),
                  new Recipe("T8_ALCOHOL", new Map([["T8_PUMPKIN",1]]),[], 0.044, 1)
                  ]
    var itemmap = new Item_Map()
    async function updateTable(){
      updateButtonTextUpdating()
      updateItemMap(itemmap,materials).then(x => updateItemMap(itemmap, products)).then(x => createTableFromRecipes(recipes, itemmap)).then( x => changeProfitColor() ).then(x => bindSelectRow()).then(x => updateButtonTextUpdated())
    }

    function updateTableValues(){
      createTableFromRecipesDifferentEnd(recipes, itemmap)
      updateProfit()
      changeProfitColor()
      bindSelectRow()
    }
    
    $(document).ready(function(){
      createNavBar()
      updateTable()
      $("#category").change(function() { updateTableValues() })
      $("#quality").change(function() { updateTableValues() })
      $("#enchantLevel").change(function() { updateTableValues() })
      $("#locations").change(function() { updateTableValues() })
      $("#endLocations").change(function() { updateTableValues() })
    })