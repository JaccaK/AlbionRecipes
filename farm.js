var feed = "T1_CARROT,T2_BEAN,T3_WHEAT,T4_TURNIP,T5_CABBAGE,T6_POTATO,T7_CORN,T8_PUMPKIN,T2_AGARIC,T3_COMFREY,T4_BURDOCK,T5_TEASEL,T6_FOXGLOVE,T7_MULLEIN,T8_YARROW,T3_MEAT,T4_MEAT,T5_MEAT,T6_MEAT,T7_MEAT,T8_MEAT,T1_FARM_CARROT_SEED,T2_FARM_BEAN_SEED,T3_FARM_WHEAT_SEED,T4_FARM_TURNIP_SEED,T5_FARM_CABBAGE_SEED,T6_FARM_POTATO_SEED,T7_FARM_CORN_SEED,T8_FARM_PUMPKIN_SEED,T2_FARM_AGARIC_SEED,T3_FARM_COMFREY_SEED,T4_FARM_BURDOCK_SEED,T5_FARM_TEASEL_SEED,T6_FARM_FOXGLOVE_SEED,T7_FARM_MULLEIN_SEED,T8_FARM_YARROW_SEED,T3_FARM_OX_BABY,T4_FARM_OX_BABY,T5_FARM_OX_BABY,T6_FARM_OX_BABY,T7_FARM_OX_BABY,T8_FARM_OX_BABY,T3_FARM_OX_GROWN,T4_FARM_OX_GROWN,T5_FARM_OX_GROWN,T6_FARM_OX_GROWN,T7_FARM_OX_GROWN,T8_FARM_OX_GROWN,T3_FARM_HORSE_BABY,T4_FARM_HORSE_BABY,T5_FARM_HORSE_BABY,T6_FARM_HORSE_BABY,T7_FARM_HORSE_BABY,T8_FARM_HORSE_BABY,T3_FARM_HORSE_GROWN,T4_FARM_HORSE_GROWN,T5_FARM_HORSE_GROWN,T6_FARM_HORSE_GROWN,T7_FARM_HORSE_GROWN,T8_FARM_HORSE_GROWN,T6_FARM_DIREWOLF_BABY,T7_FARM_DIREBOAR_BABY,T8_FARM_DIREBEAR_BABY,T7_FARM_SWAMPDRAGON_BABY,T8_FARM_MAMMOTH_BABY,T5_FARM_COUGAR_BABY,T8_FARM_DIREWOLF_BABY,T4_FARM_GIANTSTAG_BABY,T6_FARM_GIANTSTAG_BABY,T6_FARM_GIANTSTAG_MOOSE_BABY,T8_FARM_RABBIT_EASTER_BABY,T8_FARM_RABBIT_EASTER_GROWN,T5_FARM_MOABIRD_FW_BRIDGEWATCH_BABY,T5_FARM_DIREBEAR_FW_FORTSTERLING_BABY,T5_FARM_DIREBOAR_FW_LYMHURST_BABY,T5_FARM_RAM_FW_MARTLOCK_BABY,T5_FARM_SWAMPDRAGON_FW_THETFORD_BABY,T5_FARM_GREYWOLF_FW_CAERLEON_BABY,T8_FARM_MOABIRD_FW_BRIDGEWATCH_BABY,T8_FARM_DIREBEAR_FW_FORTSTERLING_BABY,T8_FARM_DIREBOAR_FW_LYMHURST_BABY,T8_FARM_RAM_FW_MARTLOCK_BABY,T8_FARM_SWAMPDRAGON_FW_THETFORD_BABY,T8_FARM_GREYWOLF_FW_CAERLEON_BABY,T6_FARM_DIREWOLF_GROWN,T7_FARM_DIREBOAR_GROWN,T8_FARM_DIREBEAR_GROWN,T7_FARM_SWAMPDRAGON_GROWN,T8_FARM_MAMMOTH_GROWN,T5_FARM_COUGAR_GROWN,T8_FARM_DIREWOLF_GROWN,T4_FARM_GIANTSTAG_GROWN,T6_FARM_GIANTSTAG_GROWN,T6_FARM_GIANTSTAG_MOOSE_GROWN,T5_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN,T5_FARM_DIREBEAR_FW_FORTSTERLING_GROWN,T5_FARM_DIREBOAR_FW_LYMHURST_GROWN,T5_FARM_RAM_FW_MARTLOCK_GROWN,T5_FARM_SWAMPDRAGON_FW_THETFORD_GROWN,T5_FARM_GREYWOLF_FW_CAERLEON_GROWN,T8_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN,T8_FARM_DIREBEAR_FW_FORTSTERLING_GROWN,T8_FARM_DIREBOAR_FW_LYMHURST_GROWN,T8_FARM_RAM_FW_MARTLOCK_GROWN,T8_FARM_SWAMPDRAGON_FW_THETFORD_GROWN,T8_FARM_GREYWOLF_FW_CAERLEON_GROWN,T3_FARM_CHICKEN_BABY,T4_FARM_GOAT_BABY,T5_FARM_GOOSE_BABY,T6_FARM_SHEEP_BABY,T7_FARM_PIG_BABY,T8_FARM_COW_BABY,T3_FARM_CHICKEN_GROWN,T4_FARM_GOAT_GROWN,T5_FARM_GOOSE_GROWN,T6_FARM_SHEEP_GROWN,T7_FARM_PIG_GROWN,T8_FARM_COW_GROWN,T6_MOUNTUPGRADE_GIANTSTAG_XMAS"

               ///constructor(babyid, adultid, quantity, diet, maxnutri, nutrilimit, cycles, baseyield, nuturebonus)
    var cropRecipes = [
                new Animal("T1_FARM_CARROT_SEED", "T1_CARROT",9,"none",0,0,1,0,2),
                new Animal("T2_FARM_BEAN_SEED", "T2_BEAN",9,"none",0,0,1,0.33,1.33),
                new Animal("T3_FARM_WHEAT_SEED", "T3_WHEAT",9,"none",0,0,1,0.60,0.8),
                new Animal("T4_FARM_TURNIP_SEED", "T4_TURNIP",9,"none",0,0,1,0.73,0.53),
                new Animal("T5_FARM_CABBAGE_SEED", "T5_CABBAGE",9,"none",0,0,1,0.8,0.4),
                new Animal("T6_FARM_POTATO_SEED", "T6_POTATO",9,"none",0,0,1,0.87,0.27),
                new Animal("T7_FARM_CORN_SEED", "T7_CORN",9,"none",0,0,1,0.91,0.18),
                new Animal("T8_FARM_PUMPKIN_SEED", "T8_PUMPKIN",9,"none",0,0,1,0.93,0.13),
                new Animal("T2_FARM_AGARIC_SEED","T2_AGARIC",9,"none",0,0,1,0.33,1.33),
                new Animal("T3_FARM_COMFREY_SEED","T3_COMFREY",9,"none",0,0,1,0.6,0.8),
                new Animal("T4_FARM_BURDOCK_SEED","T4_BURDOCK",9,"none",0,0,1,0.73,0.53),
                new Animal("T5_FARM_TEASEL_SEED","T5_TEASEL",9,"none",0,0,1,0.8,0.4),
                new Animal("T6_FARM_FOXGLOVE_SEED","T6_FOXGLOVE",9,"none",0,0,1,0.87,0.27),
                new Animal("T7_FARM_MULLEIN_SEED","T7_MULLEIN",9,"none",0,0,1,0.91,0.18),
                new Animal("T8_FARM_YARROW_SEED","T8_YARROW",9,"none",0,0,1,0.93,0.13)
                  ]
    
    var animalRecipes = [
                new Animal("T3_FARM_CHICKEN_BABY","T3_FARM_CHICKEN_GROWN",1,"crops",calcMaxNutri(44,330),480,1,0.6,0.8),
                new Animal("T4_FARM_GOAT_BABY","T4_FARM_GOAT_GROWN",1,"crops",calcMaxNutri(44,330),480,2,0.73,0.53),
                new Animal("T5_FARM_GOOSE_BABY", "T5_FARM_GOOSE_GROWN",1,"crops",calcMaxNutri(44,330),480,1,0.8,0.4),
                new Animal("T6_FARM_SHEEP_BABY","T6_FARM_SHEEP_GROWN",1,"crops",calcMaxNutri(44,330),480,1,0.87,0.27),
                new Animal("T7_FARM_PIG_BABY","T7_FARM_PIG_GROWN",1,"crops",calcMaxNutri(44,330),480,1,0.91,0.18),
                new Animal("T8_FARM_COW_BABY", "T8_FARM_COW_GROWN",1,"crops",calcMaxNutri(44,330),480,1,0.93,0.13),
                new Animal("T3_FARM_OX_BABY", "T3_FARM_OX_GROWN",1,"crops",calcMaxNutri(44,330),480,1,0.84,0.2),
                new Animal("T4_FARM_OX_BABY", "T4_FARM_OX_GROWN",1,"crops",calcMaxNutri(92,230),768,2,0.79,0.12),
                new Animal("T5_FARM_OX_BABY", "T5_FARM_OX_GROWN",1,"crops",calcMaxNutri(140,117),1488,3,0.79,0.09),
                new Animal("T6_FARM_OX_BABY", "T6_FARM_OX_GROWN",1,"crops",calcMaxNutri(188,52),3312,4,0.81,0.06),
                new Animal("T7_FARM_OX_BABY", "T7_FARM_OX_GROWN",1,"crops",calcMaxNutri(236,22),7290,5,0.84,0.04),
                new Animal("T8_FARM_OX_BABY", "T8_FARM_OX_GROWN",1,"crops",calcMaxNutri(284,9),19728,6,0.87,0.03),
                new Animal("T3_FARM_HORSE_BABY", "T3_FARM_HORSE_GROWN",1,"crops",calcMaxNutri(44,330),480,1,0.84,0.2),
                new Animal("T4_FARM_HORSE_BABY", "T4_FARM_HORSE_GROWN",1,"crops",calcMaxNutri(92,230),768,2,0.79,0.13),
                new Animal("T5_FARM_HORSE_BABY", "T5_FARM_HORSE_GROWN",1,"crops",calcMaxNutri(140,116),1488,3,0.79,0.09),
                new Animal("T6_FARM_HORSE_BABY", "T6_FARM_HORSE_GROWN",1,"crops",calcMaxNutri(188,52),3312,4,0.81,0.06),
                new Animal("T7_FARM_HORSE_BABY", "T7_FARM_HORSE_GROWN",1,"crops",calcMaxNutri(236,22),7920,5,0.84,0.04),
                new Animal("T8_FARM_HORSE_BABY", "T8_FARM_HORSE_GROWN",1,"crops",calcMaxNutri(284,9),19728,6,0.87,0.026),
                new Animal("T5_FARM_DIREBOAR_FW_LYMHURST_BABY", "T5_FARM_DIREBOAR_FW_LYMHURST_GROWN",1,"meat",calcMaxNutri(140,116),1488,3,0,0.1),
                new Animal("T5_FARM_DIREBEAR_FW_FORTSTERLING_BABY", "T5_FARM_DIREBEAR_FW_FORTSTERLING_GROWN",1,"meat",calcMaxNutri(140,116),1488,3,0,0.1),
                new Animal("T5_FARM_SWAMPDRAGON_FW_THETFORD_BABY", "T5_FARM_SWAMPDRAGON_FW_THETFORD_GROWN",1,"meat",calcMaxNutri(140,116),1488,3,0,0.1),
                new Animal("T5_FARM_MOABIRD_FW_BRIDGEWATCH_BABY","T5_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN",1,"crops",calcMaxNutri(140,116),1488,3,0,0.1),
                new Animal("T5_FARM_RAM_FW_MARTLOCK_BABY","T5_FARM_RAM_FW_MARTLOCK_GROWN",1,"crops",calcMaxNutri(140,116),1488,3,0,0.1),
                new Animal("T5_FARM_GREYWOLF_FW_CAERLEON_BABY","T5_FARM_GREYWOLF_FW_CAERLEON_GROWN",1,"meat",calcMaxNutri(140,116),1488,3,0,0.1),
                new Animal("T8_FARM_DIREBOAR_FW_LYMHURST_BABY","T8_FARM_DIREBOAR_FW_LYMHURST_GROWN",1,"meat",calcMaxNutri(284,9),19728,6,0,0.025),
                new Animal("T8_FARM_DIREBEAR_FW_FORTSTERLING_BABY","T8_FARM_DIREBEAR_FW_FORTSTERLING_GROWN",1,"meat",calcMaxNutri(284,9),19728,6,0,0.025),
                new Animal("T8_FARM_SWAMPDRAGON_FW_THETFORD_BABY", "T8_FARM_SWAMPDRAGON_FW_THETFORD_GROWN",1,"meat",calcMaxNutri(284,9),19728,6,0,0.025),
                new Animal("T8_FARM_MOABIRD_FW_BRIDGEWATCH_BABY","T8_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN",1,"crops",calcMaxNutri(284,9),19728,6,0,0.025),
                new Animal("T8_FARM_RAM_FW_MARTLOCK_BABY","T8_FARM_RAM_FW_MARTLOCK_GROWN",1,"crops",calcMaxNutri(284,9),19728,6,0,0.025),
                new Animal("T8_FARM_GREYWOLF_FW_CAERLEON_BABY","T8_FARM_GREYWOLF_FW_CAERLEON_GROWN",1,"meat",calcMaxNutri(284,9),19728,6,0,0.025),
                new Animal("T4_FARM_GIANTSTAG_BABY","T4_FARM_GIANTSTAG_GROWN",1,"crops",calcMaxNutri(92,230),768,2,0,0.18),
                new Animal("T5_FARM_COUGAR_BABY","T5_FARM_COUGAR_GROWN",1,"meat",calcMaxNutri(140,116),1488,3,0,0.1),
                new Animal("T6_FARM_GIANTSTAG_MOOSE_BABY","T6_FARM_GIANTSTAG_MOOSE_GROWN",1,"crops",calcMaxNutri(188,52),3312,4,0,0.06),
                new Animal("T6_FARM_DIREWOLF_BABY","T6_FARM_DIREWOLF_GROWN",1,"meat",calcMaxNutri(188,52),3312,4,0,0.06),
                new Animal("T7_FARM_DIREBOAR_BABY","T7_FARM_DIREBOAR_GROWN",1,"meat",calcMaxNutri(236,22),7920,5,0,0.04),
                new Animal("T7_FARM_SWAMPDRAGON_BABY","T7_FARM_SWAMPDRAGON_GROWN",1,"meat",calcMaxNutri(236,22),7920,5,0,0.04),
                new Animal("T8_FARM_DIREBEAR_BABY", "T8_FARM_DIREBEAR_GROWN",1,"meat",calcMaxNutri(284,9),19728,6,0,0.025),
                new Animal("T8_FARM_MAMMOTH_BABY", "T8_FARM_MAMMOTH_GROWN",1,"crops",calcMaxNutri(284,9),19728,6,0,0.025)
    ]

    var recipes = [cropRecipes,animalRecipes]

    var itemmap = new Item_Map()

    async function updateTable(){
      updateButtonTextUpdating()
      itemmap.clearMap()
      updateItemMap(itemmap,feed)
      .then(x => updateTableValues()).then(x => updateButtonTextUpdated())
    }

    async function updateTableValues(){
      createTableFarm(recipes[$("#category").val()], itemmap)
      updateFarmProfit()
      changeProfitColor()
      bindSelectRow()
    }

    $(document).ready(function(){
      createNavBar()
      updateTable()
      $("*").off("change")
      $("#category").change(function() { updateTableValues() })
      $("#focus").change(function() { updateTableValues() })
      $("#locations").change(function() { updateTableValues() })
      $("#language").change(function() { updateTableValues() })
      $("#server").change(function() { updateTable() })
      $("*").change(function () { updateFarmProfit() })
    })