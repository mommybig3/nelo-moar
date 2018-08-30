G.AddData({
name:'TEST',
author:'Mommybig3',
desc:'The default dataset for Legacy.',
manifest:0,
func:function()
{
		//unitGetsConverted
		var unitGetsConverted=function(into,min,max,message,single,plural)
	{
			//the unit is destroyed and its workers are converted into something else (such as wounded or dead)
			//min and max define the random percent of the unit's amount that gets wounded every day
		return function(me)
		{
			var toChange=Math.min(1,Math.random()*(max-min)+min);
			toChange=randomFloor(me.amount*toChange);
			var workers=0;
			if (me.mode && me.mode.use && me.mode.use['worker']) workers+=me.mode.use['worker'];
			if (me.unit.use['worker']) workers+=me.unit.use['worker'];
			if (me.unit.staff['worker']) workers+=me.unit.staff['worker'];
			if (toChange>0 && workers>0)
			{
				peopleToChange=toChange*workers;
				var changed=0;
				if (true) {var i='adult';var n=G.lose(i,peopleToChange);changed+=n;}
				if (changed<peopleToChange && G.checkPolicy('elder workforce')=='on') {var i='elder';var n=G.lose(i,peopleToChange);changed+=n;}
				if (changed<peopleToChange && G.checkPolicy('child workforce')=='on') {var i='child';var n=G.lose(i,peopleToChange);changed+=n;}
				
				for (var i in into)
				{
					G.gain(i,randomFloor(changed*into[i]),me.unit.displayName+' accident');
				}
				changed/=workers;
				G.wasteUnit(me,changed);
				
				if (changed>0) G.Message({type:'bad',mergeId:'unitGotConverted-'+me.unit.name,textFunc:function(args){
						return args.str.replaceAll('\\[people\\]',(args.n==1?args.single:args.plural)).replaceAll('\\[X\\]',B(args.n));
					},args:{n:changed,str:message,single:single,plural:plural},icon:me.unit.icon});
			}
		}
	}
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
		//traps
	new G.Res({
		name:'primitive traps',
		desc:'Traps made from [stick]s and [thorns].//Used by [trapper]s.',
		icon:[0,0],
		category:'gear',
	});
	G.getDict('artisan').modes['primitivetraps']={name:'Craft primitive traps',icon:[0,0],desc:'Turn [stick]s and [thorns] into [primitive traps].',req:{'trapping':true},use:{'stone tools':1,'stick':3,'thorns':5}};
	G.getDict('artisan').effects.push({type:'convert',from:{'stick':3,'thorns':5},into:{'primitive traps':1},every:14,mode:'primitivetraps'});
		//trapping tech
	new G.Tech({
		name:'trapping',
		desc:'@unlocks [trapper]s@[artisan]s can now craft [primitive traps]<>It is a common tragedy that a creature should die so that another may survive.',
		icon:[0,0],
		cost:{'insight':10},
		req:{'hunting':true},
		effects:[
			{type:'show context',what:['hunt']},
		],
	});
		//trapper unit
	new G.Unit({
		name:'trapper',
		desc:'@traps wild animals for [meat], [bone]s and [hide]s@may get wounded<>[trapper]s go out into the wilderness and lay down traps, which they later return to to collect their loot.',
		icon:[0,0],
		cost:{},
		use:{'worker':1},
		//upkeep:{'coin':0.2},
		gizmos:true,
		modes:{
			'primitive traps':{name:'Use primitive traps',icon:[0,0],desc:'Trap animals with [primitive traps].',use:{'primitive traps':5},req:{'trapping':true}},
		},
		effects:[
			{type:'gather',context:'hunt',amount:1,max:5,mode:'primitive traps'},
			{type:'function',func:unitGetsConverted({'wounded':1},0.001,0.03,'[X] [people] wounded while trapping.','trapper was','trappers were'),chance:1/30},
			{type:'mult',value:1.2,req:{'harvest rituals':'on'}}
		],
		req:{'trapping':true},
		category:'production',
		priority:5,
	});
}
});
