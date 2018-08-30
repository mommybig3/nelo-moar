G.AddData({
name:'TEST',
author:'Mommybig3',
desc:'The default dataset for Legacy.',
manifest:0,
func:function()
{
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
		//thorns
	new G.Res({
		name:'thorns',
		desc:'[thorns] from [berry bush]es and [succulents], can be used to make traps.',
		icon:[0,0],
		category:'build',
	});
	G.getDict('berry bush').res['gather']['thorns']=0.06;
	G.getDict('succulents').res['gather']['thorns']=0.08;
}
});
