(function(){var P$=Clazz.newPackage("net.imglib2.img.list"),I$=[[0,'net.imglib2.util.IntervalIndexer',['net.imglib2.img.list.AbstractLongListImg','.LongListCursor'],['net.imglib2.img.list.AbstractLongListImg','.LongListLocalizingCursor'],['net.imglib2.img.list.AbstractLongListImg','.LongListRandomAccess'],'net.imglib2.FlatIterationOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractLongListImg", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.img.AbstractImg');
C$.$classes$=[['LongListCursor',1],['LongListLocalizingCursor',1],['LongListRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['step','long[]']]]

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
;C$.superclazz.c$$JA.apply(this,[dimensions]);C$.$init$.apply(this);
this.step=Clazz.array(Long.TYPE, [this.n]);
$I$(1).createAllocationSteps$JA$JA(this.dimension, this.step);
}, 1);

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_($I$(2,1), [this, null]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(4,1), [this, null]);
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(5,1).c$$net_imglib2_Interval,[this]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractLongListImg, "LongListCursor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.AbstractCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['i','maxNumPixels']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_AbstractLongListImg_LongListCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.maxNumPixels=cursor.maxNumPixels;
this.i=cursor.i;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.b$['net.imglib2.img.list.AbstractLongListImg'].numDimensions$.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [])]);C$.$init$.apply(this);
this.maxNumPixels=this.b$['net.imglib2.img.AbstractImg'].size$.apply(this.b$['net.imglib2.img.AbstractImg'], []) - 1;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.b$['net.imglib2.img.list.AbstractLongListImg'].get$J.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [this.i]);
});

Clazz.newMeth(C$, 'set$TT', function (t) {
this.b$['net.imglib2.img.list.AbstractLongListImg'].set$J$TT.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [this.i, t]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_list_AbstractLongListImg_LongListCursor, [this, null, this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i < this.maxNumPixels;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.i+=steps;
});

Clazz.newMeth(C$, 'fwd$', function () {
++this.i;
});

Clazz.newMeth(C$, 'reset$', function () {
this.i=-1;
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
$I$(1).indexToPosition$J$JA$JA(this.i, this.this$0.dimension, position);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return $I$(1).indexToPosition$J$JA$JA$I(this.i, this.this$0.dimension, this.this$0.step, d);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractLongListImg, "LongListLocalizingCursor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.AbstractLocalizingCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['i','maxNumPixels'],'O',['max','long[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_AbstractLongListImg_LongListLocalizingCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.maxNumPixels=cursor.maxNumPixels;
this.max=Clazz.array(Long.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.max[d]=cursor.max[d];
this.position[d]=cursor.position[d];
}
this.i=cursor.i;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.b$['net.imglib2.img.list.AbstractLongListImg'].numDimensions$.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [])]);C$.$init$.apply(this);
this.maxNumPixels=this.b$['net.imglib2.img.AbstractImg'].size$.apply(this.b$['net.imglib2.img.AbstractImg'], []) - 1;
this.max=Clazz.array(Long.TYPE, [this.n]);
this.b$['net.imglib2.img.AbstractImg'].max$JA.apply(this.b$['net.imglib2.img.AbstractImg'], [this.max]);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'fwd$', function () {
++this.i;
for (var d=0; d < this.n; d++) if (++this.position[d] > this.max[d]) this.position[d]=0;
 else break;

});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.i+=steps;
$I$(1).indexToPosition$J$JA$JA(this.i, this.this$0.dimension, this.position);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i < this.maxNumPixels;
});

Clazz.newMeth(C$, 'reset$', function () {
this.i=-1;
this.position[0]=-1;
for (var d=1; d < this.n; d++) this.position[d]=0;

});

Clazz.newMeth(C$, 'get$', function () {
return this.b$['net.imglib2.img.list.AbstractLongListImg'].get$J.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [this.i]);
});

Clazz.newMeth(C$, 'set$TT', function (t) {
this.b$['net.imglib2.img.list.AbstractLongListImg'].set$J$TT.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [this.i, t]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_list_AbstractLongListImg_LongListLocalizingCursor, [this, null, this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractLongListImg, "LongListRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.AbstractLocalizable', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['i']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_AbstractLongListImg_LongListRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
for (var d=0; d < this.n; ++d) this.position[d]=randomAccess.position[d];

this.i=randomAccess.i;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.b$['net.imglib2.img.list.AbstractLongListImg'].numDimensions$.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [])]);C$.$init$.apply(this);
this.i=0;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.b$['net.imglib2.img.list.AbstractLongListImg'].get$J.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [this.i]);
});

Clazz.newMeth(C$, 'set$TT', function (t) {
this.b$['net.imglib2.img.list.AbstractLongListImg'].set$J$TT.apply(this.b$['net.imglib2.img.list.AbstractLongListImg'], [this.i, t]);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.i+=this.this$0.step[d];
++this.position[d];
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.i-=this.this$0.step[d];
--this.position[d];
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.i+=this.this$0.step[d] * distance;
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) this.move$J$I(localizable.getLongPosition$I(d), d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; ++d) this.move$I$I(distance[d], d);

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; ++d) this.move$J$I(distance[d], d);

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
this.position[0]=this.i=localizable.getLongPosition$I(0);
for (var d=1; d < this.n; ++d) {
this.position[d]=localizable.getLongPosition$I(d);
this.i+=this.position[d] * this.this$0.step[d];
}
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
this.i=position[0];
this.position[0]=this.i;
for (var d=1; d < this.n; ++d) {
var p=position[d];
this.i+=p * this.this$0.step[d];
this.position[d]=p;
}
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
this.i=position[0];
this.position[0]=this.i;
for (var d=1; d < this.n; ++d) {
var p=position[d];
this.i+=p * this.this$0.step[d];
this.position[d]=p;
}
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.i+=this.this$0.step[d] * (position - this.position[d]);
this.position[d]=position;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.i+=this.this$0.step[d] * (position - this.position[d]);
this.position[d]=position;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_list_AbstractLongListImg_LongListRandomAccess, [this, null, this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
