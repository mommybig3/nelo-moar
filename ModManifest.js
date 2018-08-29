G.AddData({
name:'The Moar Mod',
author:'Mommybig3',
desc:'Adds lotz of stuffs!',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'imageSheet':'https://i.imgur.com/32VPQ1t.png'},
func:function()
	{	
		//resources 
	new G.Res({
		name:'Pepper',
		desc:'[Pepper]s are spicy little things.',
		icon:[0,1,'imageSheet'],
		turnToByContext:{'eat':{'health':0.06,'happiness':0.2},'decay':{'spoiled food':0.2}},
		partOf:'food',
		category:'food',
	});
	new G.Res({
		name:'Hot Sauce',
		desc:'Gives flavor to [food], rendering it more enjoyable to eat.',
		icon:[1,1,'imageSheet'],
		turnToByContext:{'eat':{'happiness':0.3},'decay':{'spoiled food':0.1}},
		partOf:'food',
		category:'food',
	});
		//techs
	new G.Tech({
	name:'Hot Sauce',
	desc:'@Allows [firekeeper]s to make [hot sauce] with [pepper]s.',
	icon:[0,2],
	cost:{'culture':10,'insight':10}
	req:{'cooking':true,'pottery':true},
	effects:[
		],
	chance:2,
		//traits
	new G.Trait({
		name:'Spice Lovers',
		desc:'@your people enjoy [Pepper]s and [Hot Sauce] twice as much and will be twice as happy from consuming them.',
		icon:[1,2,'imageSheet'],
		cost:{'culture':5},
		chance:10,
		req:{'Hot Sauce':true},
		effects:[
			{type:'function',func:function(){G.getDict('Pepper').turnToByContext['eat']['happiness']=0.4;}}, 	
      			{type:'function',func:function(){G.getDict('Hot Sauce').turnToByContext['eat']['happiness']=0.6;}},
   			]
   	});
		//gathery stuffy codey
	G.getDict('grass').res['gather']['Pepper']=0.05;
		//new modes
	G.getDict('firekeeper').modes['HotSauce']={name:'Make Hot Sauce',icon:[1,1],desc:'Use [Pepper]s to make [Hot Sauce].',req:{'Hot Sauce':true}};
	G.getDict('firekeeper').effects.push({type:'convert',from:{'Pepper':6},into:{'Hot Sauce':1},every:7,mode:'HotSauce'});
}
});
