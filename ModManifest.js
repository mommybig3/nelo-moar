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
		turnToByContext:{'eat':{'health':0.06,'happiness':0.3},'decay':{'spoiled food':0.2}},
		partOf:'food',
		category:'food',
	});
		//goods
	//blank
		//gathery stuffy codey
	G.getDict('grass').res['gather']['Pepper']=0.05;
		//lands
}
});
