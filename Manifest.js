G.AddData({
name:'TEST',
author:'Mommybig3',
desc:'The default dataset for Legacy.',
manifest:0,
func:function()
{
		//glass crafting
	G.getDict('kiln').modes['Glass']={name:'Smelt Glass',desc:'Produce 10 [glass] out of 2 [sand].',req:{},use:{'worker':1,'stone tools':1}};
	G.getDict('kiln').effects.push({type:'convert',from:{'sand':2},into:{'glass':10},every:7,mode:'Glass'});
		//eat herbs toggle
	new G.Policy({
		name:'eat herbs',
		desc:'Toggle the ability for your people to eat [herb]s.',
		icon:[6,12,4,6],
		cost:{'influence':1},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['herb'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['herb'],parent:''},
		],
		category:'food',
	});
}
});
