# AlbionRecipes
Javascript, HTML, and CSS for the Albion Recipes GitHub Pages site.

Albion Recipes is an automatic crafting profit calculator utilizing The Albion Online Data Project. We're not associated or endorsed by Albion Online, Sandbox Interactive GmbH, or The Albion Online Data Project. Their respective trademarks belong to them. blah blah blah legal handwavy stuff that probably doesn't actually mean anything.


# Plans
* Alchemy Recipes
* Farming Calc rework (bandaid fix)
* Vue Rewrite


For Farming Calc, I plan to change a line from type of diet, to a perferred food. From minimal testing it seems non-perferred foods take around 80% more - cows wanted 18 instead of 10 for whatever I was feeding them. So as long as the non-perferred food costs more than 55% of the perferred food, it's simply not worth buying. This CAN happen, for example I saw carrots earlier at 219, and another crop at around 440, but I imagine for most animals this is rare.

As for Vue, I just really liked how clean some table components looked, and how useful v-model was. I don't really know any frontend, this entire website is hobbled together by Jquery and hope.

Any additional calcs will be on hold once I try to figure out Vue. It can't be that hard, most of the stuff is already pretty much thought out for me with other libraries.
