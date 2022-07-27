    var materials = "T1_CARROT"
    var products = "T1_MEAL_SOUP"
               ///new Recipe(resultId, ingredientMap, nutrition, quantity)
    var recipes = [
                  new Recipe("T1_MEAL_SOUP", new Map([["T1_CARROT",16]]), 0, 10),
                  ]
    var itemmap = new Item_Map()
    async function updateTable(){
      updateItemMap(itemmap,materials).then(x => updateItemMap(itemmap, products)).then(x => createTableFromRecipes(recipes, itemmap)).then( x => changeProfitColor() ).then(x => bindSelectRow())
    }
    $(document).ready(function(){
      createNavBar()
      updateTable()
    })