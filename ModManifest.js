G.AddData({
name:'The Moar Mod',
author:'Mommybig3',
desc:'Adds lotz of stuffs!',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'imageSheet':'https://i.imgur.com/mZaBqH2.png'}
func:function()
	{	
		//resources 
	new G.Res({
		name:'Fruit Juice',
		desc:'[Fruit Juice] tastes better than [water].',
		icon:[0,0,'imageSheet'],
		turnToByContext:{'eat':{'health':0.06,'happiness':0.1},'decay':{'spoiled food':0.2}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
		//gathery stuffy codey
	G.getDict('digger').res['gather']['Bugs']=0.03;
}
});
