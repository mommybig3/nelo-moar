G.AddData({
name:'The Moar Mod',
author:'Mommybig3',
desc:'Adds lotz of stuffs!',
engineVersion:1,
manifest:'Manifest.js',
requires:['Default dataset*'],
sheets:{'imageSheet':'https://i.imgur.com/32VPQ1t.png'},
func:function()
	{
		new G.Res({
			name:'magic',
			desc:'[magic] is a powerful yet dangerous tool.',
			icon:[0,0],
			category:'main',
		});
	}
});
