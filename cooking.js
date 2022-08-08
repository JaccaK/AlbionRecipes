    var materials = "T1_CARROT,T2_BEAN,T3_WHEAT,T4_TURNIP,T5_CABBAGE,T6_POTATO,T7_CORN,T8_PUMPKIN,T2_AGARIC,T3_COMFREY,T4_BURDOCK,T5_TEASEL,T6_FOXGLOVE,T7_MULLEIN,T8_YARROW,T3_EGG,T4_MILK,T5_EGG,T6_MILK,T8_MILK,T3_FISH_FRESHWATER_FOREST_RARE,T5_FISH_FRESHWATER_FOREST_RARE,T7_FISH_FRESHWATER_FOREST_RARE,T3_FISH_FRESHWATER_MOUNTAIN_RARE,T5_FISH_FRESHWATER_MOUNTAIN_RARE,T7_FISH_FRESHWATER_MOUNTAIN_RARE,T3_FISH_FRESHWATER_HIGHLANDS_RARE,T5_FISH_FRESHWATER_HIGHLANDS_RARE,T7_FISH_FRESHWATER_HIGHLANDS_RARE,T3_FISH_FRESHWATER_STEPPE_RARE,T5_FISH_FRESHWATER_STEPPE_RARE,T7_FISH_FRESHWATER_STEPPE_RARE,T3_FISH_FRESHWATER_SWAMP_RARE,T5_FISH_FRESHWATER_SWAMP_RARE,T7_FISH_FRESHWATER_SWAMP_RARE,T3_FISH_SALTWATER_ALL_RARE,T5_FISH_SALTWATER_ALL_RARE,T7_FISH_SALTWATER_ALL_RARE,T3_FISH_FRESHWATER_AVALON_RARE,T5_FISH_FRESHWATER_AVALON_RARE,T7_FISH_FRESHWATER_AVALON_RARE,T1_SEAWEED,T8_FISH_SALTWATER_ALL_BOSS_SHARK,T1_FISHCHOPS,T3_MEAT,T4_MEAT,T5_MEAT,T6_MEAT,T7_MEAT,T8_MEAT,T4_BUTTER,T6_BUTTER,T8_BUTTER,T6_ALCOHOL,T7_ALCOHOL,T8_ALCOHOL,T4_BREAD,T3_FLOUR,QUESTITEM_TOKEN_AVALON"
    var products = "T1_MEAL_SOUP,T3_MEAL_SOUP,T5_MEAL_SOUP,T1_MEAL_SOUP_FISH,T3_MEAL_SOUP_FISH,T5_MEAL_SOUP_FISH,T2_MEAL_SALAD,T4_MEAL_SALAD,T6_MEAL_SALAD,T2_MEAL_SALAD_FISH,T4_MEAL_SALAD_FISH,T6_MEAL_SALAD_FISH,T3_MEAL_PIE,T5_MEAL_PIE,T7_MEAL_PIE,T3_MEAL_PIE_FISH,T5_MEAL_PIE_FISH,T7_MEAL_PIE_FISH,T3_MEAL_OMELETTE,T5_MEAL_OMELETTE,T7_MEAL_OMELETTE,T3_MEAL_OMELETTE_FISH,T5_MEAL_OMELETTE_FISH,T7_MEAL_OMELETTE_FISH,T3_MEAL_OMELETTE_AVALON,T5_MEAL_OMELETTE_AVALON,T7_MEAL_OMELETTE_AVALON,T4_MEAL_STEW,T6_MEAL_STEW,T8_MEAL_STEW,T4_MEAL_STEW_FISH,T6_MEAL_STEW_FISH,T8_MEAL_STEW_FISH,T4_MEAL_STEW_AVALON,T6_MEAL_STEW_AVALON,T8_MEAL_STEW_AVALON,T4_MEAL_SANDWICH,T6_MEAL_SANDWICH,T8_MEAL_SANDWICH,T4_MEAL_SANDWICH_FISH,T6_MEAL_SANDWICH_FISH,T8_MEAL_SANDWICH_FISH,T4_MEAL_SANDWICH_AVALON,T6_MEAL_SANDWICH_AVALON,T8_MEAL_SANDWICH_AVALON,T3_MEAL_ROAST,T5_MEAL_ROAST,T7_MEAL_ROAST,T3_MEAL_ROAST_FISH,T5_MEAL_ROAST_FISH,T7_MEAL_ROAST_FISH,T1_FISHSAUCE_LEVEL1,T1_FISHSAUCE_LEVEL2,T1_FISHSAUCE_LEVEL3,T6_MEAL_SALAD@1,T6_MEAL_SALAD@2,T6_MEAL_SALAD@3,T6_MEAL_SALAD_FISH@1,T6_MEAL_SALAD_FISH@2,T6_MEAL_SALAD_FISH@3,T7_MEAL_PIE@1,T7_MEAL_PIE@2,T7_MEAL_PIE@3,T7_MEAL_PIE_FISH@1,T7_MEAL_PIE_FISH@2,T7_MEAL_PIE_FISH@3,T7_MEAL_OMELETTE@1,T7_MEAL_OMELETTE@2,T7_MEAL_OMELETTE@3,T7_MEAL_OMELETTE_FISH@1,T7_MEAL_OMELETTE_FISH@2,T7_MEAL_OMELETTE_FISH@3,T7_MEAL_OMELETTE_AVALON@1,T7_MEAL_OMELETTE_AVALON@2,T7_MEAL_OMELETTE_AVALON@3,T8_MEAL_STEW@1,T8_MEAL_STEW@2,T8_MEAL_STEW@3,T8_MEAL_STEW_FISH@1,T8_MEAL_STEW_FISH@2,T8_MEAL_STEW_FISH@3,T8_MEAL_STEW_AVALON@1,T8_MEAL_STEW_AVALON@2,T8_MEAL_STEW_AVALON@3,T8_MEAL_SANDWICH@1,T8_MEAL_SANDWICH@2,T8_MEAL_SANDWICH@3,T8_MEAL_SANDWICH_FISH@1,T8_MEAL_SANDWICH_FISH@2,T8_MEAL_SANDWICH_FISH@3,T8_MEAL_SANDWICH_AVALON@1,T8_MEAL_SANDWICH_AVALON@2,T8_MEAL_SANDWICH_AVALON@3,T7_MEAL_ROAST@1,T7_MEAL_ROAST@2,T7_MEAL_ROAST@3,T7_MEAL_ROAST_FISH@1,T7_MEAL_ROAST_FISH@2,T7_MEAL_ROAST_FISH@3,T5_MEAL_SOUP@1,T5_MEAL_SOUP@2,T5_MEAL_SOUP@3,T5_MEAL_SOUP_FISH@1,T5_MEAL_SOUP_FISH@2,T5_MEAL_SOUP_FISH@3"
               ///new Recipe(resultId, ingredientMap, nutrition, quantity)
    var recipes = [
                  new Recipe("T1_MEAL_SOUP", new Map([["T1_CARROT",16]]),[], 0, 10),
                  new Recipe("T3_MEAL_SOUP", new Map([["T3_WHEAT",48]]),[], 2.16,10),
                  new Recipe("T5_MEAL_SOUP", new Map([["T5_CABBAGE",144]]),[],6.48,10),
                  new Recipe("T5_MEAL_SOUP@1", new Map([["T5_CABBAGE",144],["T1_FISHSAUCE_LEVEL1",90]]),[],6.48,10),
                  new Recipe("T5_MEAL_SOUP@2", new Map([["T5_CABBAGE",144],["T1_FISHSAUCE_LEVEL2",90]]),[],6.48,10),
                  new Recipe("T5_MEAL_SOUP@3", new Map([["T5_CABBAGE",144],["T1_FISHSAUCE_LEVEL3",90]]),[],6.48,10),
                  new Recipe("T1_MEAL_SOUP_FISH", new Map([["T3_FISH_FRESHWATER_SWAMP_RARE",1],["T1_CARROT",2],]),[],0,1),
                  new Recipe("T3_MEAL_SOUP_FISH", new Map([["T5_FISH_FRESHWATER_SWAMP_RARE",1],["T3_WHEAT",2],["T3_COMFREY",2],["T3_MEAT",2]]),[],0.292,1),
                  new Recipe("T5_MEAL_SOUP_FISH", new Map([["T7_FISH_FRESHWATER_SWAMP_RARE",1],["T5_CABBAGE",6],["T5_TEASEL",6],["T5_MEAT",6]]),[],0.844,1),
                  new Recipe("T5_MEAL_SOUP_FISH@1", new Map([["T7_FISH_FRESHWATER_SWAMP_RARE",1],["T5_CABBAGE",6],["T5_TEASEL",6],["T5_MEAT",6],["T1_FISHSAUCE_LEVEL1",27]]),[],0.844,1),
                  new Recipe("T5_MEAL_SOUP_FISH@2", new Map([["T7_FISH_FRESHWATER_SWAMP_RARE",1],["T5_CABBAGE",6],["T5_TEASEL",6],["T5_MEAT",6],["T1_FISHSAUCE_LEVEL2",27]]),[],0.844,1),
                  new Recipe("T5_MEAL_SOUP_FISH@3", new Map([["T7_FISH_FRESHWATER_SWAMP_RARE",1],["T5_CABBAGE",6],["T5_TEASEL",6],["T5_MEAT",6],["T1_FISHSAUCE_LEVEL3",27]]),[],0.844,1),
                  new Recipe("T2_MEAL_SALAD", new Map([["T2_BEAN",8],["T1_CARROT",8]]),[],0,10),
                  new Recipe("T4_MEAL_SALAD", new Map([["T4_TURNIP",24],["T3_WHEAT",24]]),[],2.16,10),
                  new Recipe("T6_MEAL_SALAD", new Map([["T6_POTATO",72],["T5_CABBAGE",72]]),[],6.48,10),
                  new Recipe("T6_MEAL_SALAD@1", new Map([["T6_POTATO",72],["T5_CABBAGE",72],["T1_FISHSAUCE_LEVEL1",90]]),[],6.48,10),
                  new Recipe("T6_MEAL_SALAD@2", new Map([["T6_POTATO",72],["T5_CABBAGE",72],["T1_FISHSAUCE_LEVEL2",90]]),[],6.48,10),
                  new Recipe("T6_MEAL_SALAD@3", new Map([["T6_POTATO",72],["T5_CABBAGE",72],["T1_FISHSAUCE_LEVEL3",90]]),[],6.48,10),
                  new Recipe("T2_MEAL_SALAD_FISH", new Map([["T3_FISH_SALTWATER_ALL_RARE",1],["T2_BEAN",1],["T2_AGARIC",1]]),[],0,1),
                  new Recipe("T4_MEAL_SALAD_FISH", new Map([["T5_FISH_SALTWATER_ALL_RARE",1],["T4_TURNIP",2],["T4_BURDOCK",2],["T4_MEAT",2]]),[],0.292,1),
                  new Recipe("T6_MEAL_SALAD_FISH", new Map([["T7_FISH_SALTWATER_ALL_RARE",1],["T6_POTATO",6],["T6_FOXGLOVE",6],["T6_MEAT",6]]),[],0.844,1),
                  new Recipe("T6_MEAL_SALAD_FISH@1", new Map([["T7_FISH_SALTWATER_ALL_RARE",1],["T6_POTATO",6],["T6_FOXGLOVE",6],["T6_MEAT",6],["T1_FISHSAUCE_LEVEL1",27]]),[],0.844,1),
                  new Recipe("T6_MEAL_SALAD_FISH@2", new Map([["T7_FISH_SALTWATER_ALL_RARE",1],["T6_POTATO",6],["T6_FOXGLOVE",6],["T6_MEAT",6],["T1_FISHSAUCE_LEVEL2",27]]),[],0.844,1),
                  new Recipe("T6_MEAL_SALAD_FISH@3", new Map([["T7_FISH_SALTWATER_ALL_RARE",1],["T6_POTATO",6],["T6_FOXGLOVE",6],["T6_MEAT",6],["T1_FISHSAUCE_LEVEL3",27]]),[],0.844,1),
                  new Recipe("T3_MEAL_PIE", new Map([["T3_WHEAT",2],["T3_FLOUR",4],["T3_MEAT",8]]),[],0.63,10),
                  new Recipe("T5_MEAL_PIE", new Map([["T5_CABBAGE",6],["T3_FLOUR",12],["T5_MEAT",24]]),[],2.16,10),
                  new Recipe("T7_MEAL_PIE", new Map([["T7_CORN",18],["T3_FLOUR",36],["T7_MEAT",72],["T6_MILK",18]]),[],6.48,10),
                  new Recipe("T7_MEAL_PIE@1", new Map([["T7_CORN",18],["T3_FLOUR",36],["T7_MEAT",72],["T6_MILK",18],["T1_FISHSAUCE_LEVEL1",90]]),[],6.48,10),
                  new Recipe("T7_MEAL_PIE@2", new Map([["T7_CORN",18],["T3_FLOUR",36],["T7_MEAT",72],["T6_MILK",18],["T1_FISHSAUCE_LEVEL2",90]]),[],6.48,10),
                  new Recipe("T7_MEAL_PIE@3", new Map([["T7_CORN",18],["T3_FLOUR",36],["T7_MEAT",72],["T6_MILK",18],["T1_FISHSAUCE_LEVEL3",90]]),[],6.48,10),
                  new Recipe("T3_MEAL_PIE_FISH", new Map([["T3_FISH_FRESHWATER_MOUNTAIN_RARE",1],["T3_FLOUR",1],["T3_EGG",1]]),[],0.101,1),
                  new Recipe("T5_MEAL_PIE_FISH", new Map([["T5_FISH_FRESHWATER_MOUNTAIN_RARE",1],["T5_CABBAGE",2],["T5_TEASEL",2],["T3_EGG",2]]),[],0.292,1),
                  new Recipe("T7_MEAL_PIE_FISH", new Map([["T7_FISH_FRESHWATER_MOUNTAIN_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T7_MEAT",6]]),[],0.844,1),
                  new Recipe("T7_MEAL_PIE_FISH@1", new Map([["T7_FISH_FRESHWATER_MOUNTAIN_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T7_MEAT",6],["T1_FISHSAUCE_LEVEL1",27]]),[],0.844,1),
                  new Recipe("T7_MEAL_PIE_FISH@2", new Map([["T7_FISH_FRESHWATER_MOUNTAIN_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T7_MEAT",6],["T1_FISHSAUCE_LEVEL2",27]]),[],0.844,1),
                  new Recipe("T7_MEAL_PIE_FISH@3", new Map([["T7_FISH_FRESHWATER_MOUNTAIN_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T7_MEAT",6],["T1_FISHSAUCE_LEVEL3",27]]),[],0.844,1),
                  new Recipe("T3_MEAL_OMELETTE", new Map([["T3_WHEAT",4],["T3_MEAT",8],["T3_EGG",2]]),[],0.63,10),
                  new Recipe("T5_MEAL_OMELETTE", new Map([["T5_CABBAGE",12],["T5_MEAT",24],["T5_EGG",6]]),[],1.89,10),
                  new Recipe("T7_MEAL_OMELETTE", new Map([["T7_CORN",36],["T7_MEAT",72],["T5_EGG",18]]),[],5.67,10),
                  new Recipe("T7_MEAL_OMELETTE@1", new Map([["T7_CORN",36],["T7_MEAT",72],["T5_EGG",18],["T1_FISHSAUCE_LEVEL1",90]]),[],5.67,10),
                  new Recipe("T7_MEAL_OMELETTE@2", new Map([["T7_CORN",36],["T7_MEAT",72],["T5_EGG",18],["T1_FISHSAUCE_LEVEL2",90]]),[],5.67,10),
                  new Recipe("T7_MEAL_OMELETTE@3", new Map([["T7_CORN",36],["T7_MEAT",72],["T5_EGG",18],["T1_FISHSAUCE_LEVEL3",90]]),[],5.67,10),
                  new Recipe("T3_MEAL_OMELETTE_FISH", new Map([["T3_FISH_FRESHWATER_STEPPE_RARE",1],["T3_COMFREY",1],["T3_EGG",1]]),[],0.101,1),
                  new Recipe("T5_MEAL_OMELETTE_FISH", new Map([["T5_FISH_FRESHWATER_STEPPE_RARE",1],["T5_CABBAGE",2],["T5_TEASEL",2],["T5_EGG",2]]),[],0.292,1),
                  new Recipe("T7_MEAL_OMELETTE_FISH", new Map([["T7_FISH_FRESHWATER_STEPPE_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T7_MEAT",6]]),[],0.844,1),
                  new Recipe("T7_MEAL_OMELETTE_FISH@1", new Map([["T7_FISH_FRESHWATER_STEPPE_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T7_MEAT",6],["T1_FISHSAUCE_LEVEL1",27]]),[],0.844,1),
                  new Recipe("T7_MEAL_OMELETTE_FISH@2", new Map([["T7_FISH_FRESHWATER_STEPPE_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T7_MEAT",6],["T1_FISHSAUCE_LEVEL2",27]]),[],0.844,1),
                  new Recipe("T7_MEAL_OMELETTE_FISH@3", new Map([["T7_FISH_FRESHWATER_STEPPE_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T7_MEAT",6],["T1_FISHSAUCE_LEVEL3",27]]),[],0.844,1),
                  new Recipe("T3_MEAL_OMELETTE_AVALON", new Map([["T4_MILK",4],["T3_MEAT",8],["T3_EGG",2],["QUESTITEM_TOKEN_AVALON",10]]),["QUESTITEM_TOKEN_AVALON"],1.35,10),
                  new Recipe("T5_MEAL_OMELETTE_AVALON", new Map([["T6_MILK",12],["T5_MEAT",24],["T5_EGG",6],["QUESTITEM_TOKEN_AVALON",30]]),["QUESTITEM_TOKEN_AVALON"],4.05,10),
                  new Recipe("T7_MEAL_OMELETTE_AVALON", new Map([["T8_MILK",36],["T7_MEAT",72],["T5_EGG",18],["QUESTITEM_TOKEN_AVALON",90]]),["QUESTITEM_TOKEN_AVALON"],12.15,10),
                  new Recipe("T7_MEAL_OMELETTE_AVALON@1", new Map([["T8_MILK",36],["T7_MEAT",72],["T5_EGG",18],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL1",90]]),["QUESTITEM_TOKEN_AVALON"],12.15,10),
                  new Recipe("T7_MEAL_OMELETTE_AVALON@2", new Map([["T8_MILK",36],["T7_MEAT",72],["T5_EGG",18],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL2",90]]),["QUESTITEM_TOKEN_AVALON"],12.15,10),
                  new Recipe("T7_MEAL_OMELETTE_AVALON@3", new Map([["T8_MILK",36],["T7_MEAT",72],["T5_EGG",18],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL3",90]]),["QUESTITEM_TOKEN_AVALON"],12.15,10),
                  new Recipe("T4_MEAL_STEW", new Map([["T4_TURNIP",4],["T4_BREAD",4],["T4_MEAT",8]]),[],0.72,10),
                  new Recipe("T6_MEAL_STEW", new Map([["T6_POTATO",12],["T4_BREAD",12],["T6_MEAT",24]]),[],2.16,10),
                  new Recipe("T8_MEAL_STEW", new Map([["T8_PUMPKIN",36],["T4_BREAD",36],["T8_MEAT",72]]),[],6.48,10),
                  new Recipe("T8_MEAL_STEW@1", new Map([["T8_PUMPKIN",36],["T4_BREAD",36],["T8_MEAT",72],["T1_FISHSAUCE_LEVEL1",90]]),[],6.48,10),
                  new Recipe("T8_MEAL_STEW@2", new Map([["T8_PUMPKIN",36],["T4_BREAD",36],["T8_MEAT",72],["T1_FISHSAUCE_LEVEL2",90]]),[],6.48,10),
                  new Recipe("T8_MEAL_STEW@3", new Map([["T8_PUMPKIN",36],["T4_BREAD",36],["T8_MEAT",72],["T1_FISHSAUCE_LEVEL3",90]]),[],6.48,10),
                  new Recipe("T4_MEAL_STEW_FISH", new Map([["T3_FISH_FRESHWATER_FOREST_RARE",1],["T4_TURNIP",1],["T4_BURDOCK",1]]),[],0.101,1),
                  new Recipe("T6_MEAL_STEW_FISH", new Map([["T5_FISH_FRESHWATER_FOREST_RARE",1],["T6_POTATO",2],["T6_FOXGLOVE",2],["T6_MILK",2]]),[],0.292,1),
                  new Recipe("T8_MEAL_STEW_FISH", new Map([["T7_FISH_FRESHWATER_FOREST_RARE",1],["T8_PUMPKIN",6],["T8_YARROW",6],["T8_MILK",6]]),[],0.844,1),
                  new Recipe("T8_MEAL_STEW_FISH@1", new Map([["T7_FISH_FRESHWATER_FOREST_RARE",1],["T8_PUMPKIN",6],["T8_YARROW",6],["T8_MILK",6],["T1_FISHSAUCE_LEVEL1",27]]),[],0.844,1),
                  new Recipe("T8_MEAL_STEW_FISH@2", new Map([["T7_FISH_FRESHWATER_FOREST_RARE",1],["T8_PUMPKIN",6],["T8_YARROW",6],["T8_MILK",6],["T1_FISHSAUCE_LEVEL2",27]]),[],0.844,1),
                  new Recipe("T8_MEAL_STEW_FISH@3", new Map([["T7_FISH_FRESHWATER_FOREST_RARE",1],["T8_PUMPKIN",6],["T8_YARROW",6],["T8_MILK",6],["T1_FISHSAUCE_LEVEL3",27]]),[],0.844,1),
                  new Recipe("T4_MEAL_STEW_AVALON", new Map([["T1_CARROT",4],["T4_TURNIP",4],["T4_MEAT",8],["QUESTITEM_TOKEN_AVALON",10]]),["QUESTITEM_TOKEN_AVALON"],1.44,10),
                  new Recipe("T6_MEAL_STEW_AVALON", new Map([["T5_CABBAGE",12],["T6_POTATO",12],["T6_MEAT",24],["QUESTITEM_TOKEN_AVALON",30]]),["QUESTITEM_TOKEN_AVALON"],4.32,10),
                  new Recipe("T8_MEAL_STEW_AVALON", new Map([["T7_CORN",36],["T8_PUMPKIN",36],["T8_MEAT",72],["QUESTITEM_TOKEN_AVALON",90]]),["QUESTITEM_TOKEN_AVALON"],12.96,10),
                  new Recipe("T8_MEAL_STEW_AVALON@1", new Map([["T7_CORN",36],["T8_PUMPKIN",36],["T8_MEAT",72],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL1",90]]),["QUESTITEM_TOKEN_AVALON"],12.96,10),
                  new Recipe("T8_MEAL_STEW_AVALON@2", new Map([["T7_CORN",36],["T8_PUMPKIN",36],["T8_MEAT",72],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL2",90]]),["QUESTITEM_TOKEN_AVALON"],12.96,10),
                  new Recipe("T8_MEAL_STEW_AVALON@3", new Map([["T7_CORN",36],["T8_PUMPKIN",36],["T8_MEAT",72],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL3",90]]),["QUESTITEM_TOKEN_AVALON"],12.96,10),
                  new Recipe("T4_MEAL_SANDWICH", new Map([["T4_BREAD",4],["T4_MEAT",8],["T4_BUTTER",2]]),[],0.63,10),
                  new Recipe("T6_MEAL_SANDWICH", new Map([["T4_BREAD",12],["T6_MEAT",24],["T6_BUTTER",6]]),[],1.89,10),
                  new Recipe("T8_MEAL_SANDWICH", new Map([["T4_BREAD",36],["T8_MEAT",72],["T8_BUTTER",18]]),[],5.67,10),
                  new Recipe("T8_MEAL_SANDWICH@1", new Map([["T4_BREAD",36],["T8_MEAT",72],["T8_BUTTER",18],["T1_FISHSAUCE_LEVEL1",90]]),[],5.67,10),
                  new Recipe("T8_MEAL_SANDWICH@2", new Map([["T4_BREAD",36],["T8_MEAT",72],["T8_BUTTER",18],["T1_FISHSAUCE_LEVEL2",90]]),[],5.67,10),
                  new Recipe("T8_MEAL_SANDWICH@3", new Map([["T4_BREAD",36],["T8_MEAT",72],["T8_BUTTER",18],["T1_FISHSAUCE_LEVEL3",90]]),[],5.67,10),
                  new Recipe("T4_MEAL_SANDWICH_FISH", new Map([["T3_FISH_FRESHWATER_HIGHLANDS_RARE",1],["T4_TURNIP",1],["T4_BUTTER",1]]),[],0.101,1),
                  new Recipe("T6_MEAL_SANDWICH_FISH", new Map([["T5_FISH_FRESHWATER_HIGHLANDS_RARE",1],["T6_POTATO",2],["T6_FOXGLOVE",2],["T6_BUTTER",2]]),[],0.292,1),
                  new Recipe("T8_MEAL_SANDWICH_FISH", new Map([["T7_FISH_FRESHWATER_HIGHLANDS_RARE",1],["T8_PUMPKIN",6],["T8_YARROW",6],["T8_BUTTER",6]]),[],0.844,1),
                  new Recipe("T8_MEAL_SANDWICH_FISH@1", new Map([["T7_FISH_FRESHWATER_HIGHLANDS_RARE",1],["T8_PUMPKIN",6],["T8_YARROW",6],["T8_BUTTER",6],["T1_FISHSAUCE_LEVEL1",27]]),[],0.844,1),
                  new Recipe("T8_MEAL_SANDWICH_FISH@2", new Map([["T7_FISH_FRESHWATER_HIGHLANDS_RARE",1],["T8_PUMPKIN",6],["T8_YARROW",6],["T8_BUTTER",6],["T1_FISHSAUCE_LEVEL2",27]]),[],0.844,1),
                  new Recipe("T8_MEAL_SANDWICH_FISH@3", new Map([["T7_FISH_FRESHWATER_HIGHLANDS_RARE",1],["T8_PUMPKIN",6],["T8_YARROW",6],["T8_BUTTER",6],["T1_FISHSAUCE_LEVEL3",27]]),[],0.844,1),
                  new Recipe("T4_MEAL_SANDWICH_AVALON", new Map([["T4_BREAD",4],["T4_MEAT",8],["T4_BUTTER",2],["QUESTITEM_TOKEN_AVALON",10]]),["QUESTITEM_TOKEN_AVALON"],1.35,10),
                  new Recipe("T6_MEAL_SANDWICH_AVALON", new Map([["T4_BREAD",12],["T6_MEAT",24],["T6_BUTTER",6],["QUESTITEM_TOKEN_AVALON",30]]),["QUESTITEM_TOKEN_AVALON"],4.05,10),
                  new Recipe("T8_MEAL_SANDWICH_AVALON", new Map([["T4_BREAD",36],["T8_MEAT",72],["T8_BUTTER",18],["QUESTITEM_TOKEN_AVALON",90]]),["QUESTITEM_TOKEN_AVALON"],12.15,10),
                  new Recipe("T8_MEAL_SANDWICH_AVALON@1", new Map([["T4_BREAD",36],["T8_MEAT",72],["T8_BUTTER",18],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL1",90]]),["QUESTITEM_TOKEN_AVALON"],12.15,10),
                  new Recipe("T8_MEAL_SANDWICH_AVALON@2", new Map([["T4_BREAD",36],["T8_MEAT",72],["T8_BUTTER",18],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL2",90]]),["QUESTITEM_TOKEN_AVALON"],12.15,10),
                  new Recipe("T8_MEAL_SANDWICH_AVALON@3", new Map([["T4_BREAD",36],["T8_MEAT",72],["T8_BUTTER",18],["QUESTITEM_TOKEN_AVALON",90],["T1_FISHSAUCE_LEVEL3",90]]),["QUESTITEM_TOKEN_AVALON"],12.15,10),
                  new Recipe("T3_MEAL_ROAST", new Map([["T3_MEAT",8],["T2_BEAN",4],["T4_MILK",4]]),[],0.72,10),
                  new Recipe("T5_MEAL_ROAST", new Map([["T5_MEAT",24],["T5_CABBAGE",12],["T6_MILK",12]]),[],2.16,10),
                  new Recipe("T7_MEAL_ROAST", new Map([["T7_MEAT",72],["T7_CORN",36],["T8_MILK",36]]),[],6.48,10),
                  new Recipe("T7_MEAL_ROAST@1", new Map([["T7_MEAT",72],["T7_CORN",36],["T8_MILK",36],["T1_FISHSAUCE_LEVEL1",90]]),[],6.48,10),
                  new Recipe("T7_MEAL_ROAST@2", new Map([["T7_MEAT",72],["T7_CORN",36],["T8_MILK",36],["T1_FISHSAUCE_LEVEL2",90]]),[],6.48,10),
                  new Recipe("T7_MEAL_ROAST@3", new Map([["T7_MEAT",72],["T7_CORN",36],["T8_MILK",36],["T1_FISHSAUCE_LEVEL3",90]]),[],6.48,10),
                  new Recipe("T3_MEAL_ROAST_FISH", new Map([["T3_FISH_FRESHWATER_AVALON_RARE",1],["T3_COMFREY",1],["T4_MILK",1]]),[],0.101,1),
                  new Recipe("T5_MEAL_ROAST_FISH", new Map([["T5_FISH_FRESHWATER_AVALON_RARE",1],["T5_CABBAGE",2],["T5_TEASEL",2]]),[],0.292,1),
                  new Recipe("T7_MEAL_ROAST_FISH", new Map([["T7_FISH_FRESHWATER_AVALON_RARE",1],["T7_CORN",6],["T7_MULLEIN",6]]),[],0.844,1),
                  new Recipe("T7_MEAL_ROAST_FISH@1", new Map([["T7_FISH_FRESHWATER_AVALON_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T1_FISHSAUCE_LEVEL1",27]]),[],0.844,1),
                  new Recipe("T7_MEAL_ROAST_FISH@2", new Map([["T7_FISH_FRESHWATER_AVALON_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T1_FISHSAUCE_LEVEL2",27]]),[],0.844,1),
                  new Recipe("T7_MEAL_ROAST_FISH@3", new Map([["T7_FISH_FRESHWATER_AVALON_RARE",1],["T7_CORN",6],["T7_MULLEIN",6],["T1_FISHSAUCE_LEVEL3",27]]),[],0.844,1)
                  ]
    var itemmap = new Item_Map()
    async function updateTable(){
      updateButtonTextUpdating()
      updateItemMap(itemmap,materials).then(x => updateItemMap(itemmap, products)).then(x => updateTableValues()).then(x => updateButtonTextUpdated())
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