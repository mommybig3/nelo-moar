G.AddData({
name:'The Moar Mod',
author:'Mommybig3',
desc:'Adds lotz of stuffs!',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'imageSheet':'https://i.imgur.com/mZaBqH2.png'},
func:function()
	{	
		//resources 
	//blank
		//gathery stuffy codey
	G.getDict('digger').res['dig']['Bugs']=0.03;
}
});
