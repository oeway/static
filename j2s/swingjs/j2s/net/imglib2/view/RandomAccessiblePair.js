(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,['net.imglib2.view.RandomAccessiblePair','.RandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessiblePair", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.RandomAccessible');
C$.$classes$=[['RandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceA','net.imglib2.RandomAccessible','+sourceB']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$net_imglib2_RandomAccessible', function (sourceA, sourceB) {
;C$.$init$.apply(this);
this.sourceA=sourceA;
this.sourceB=sourceB;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.sourceA.numDimensions$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return Clazz.new_($I$(1,1), [this, null]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RandomAccessiblePair, "RandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['net.imglib2.util.Pair', 'net.imglib2.RandomAccess']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','net.imglib2.RandomAccess','+b']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.a=this.this$0.sourceA.randomAccess$();
this.b=this.this$0.sourceB.randomAccess$();
}, 1);

Clazz.newMeth(C$, 'getA$', function () {
return this.a.get$();
});

Clazz.newMeth(C$, 'getB$', function () {
return this.b.get$();
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
this.a.localize$IA(position);
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
this.a.localize$JA(position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.a.getIntPosition$I(d);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.a.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
this.a.localize$FA(position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
this.a.localize$DA(position);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.a.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.a.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.b$['net.imglib2.view.RandomAccessiblePair'].numDimensions$.apply(this.b$['net.imglib2.view.RandomAccessiblePair'], []);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.a.fwd$I(d);
this.b.fwd$I(d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.a.bck$I(d);
this.b.bck$I(d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.a.move$I$I(distance, d);
this.b.move$I$I(distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.a.move$J$I(distance, d);
this.b.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
this.a.move$net_imglib2_Localizable(localizable);
this.b.move$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
this.a.move$IA(distance);
this.b.move$IA(distance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
this.a.move$JA(distance);
this.b.move$JA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
this.a.setPosition$net_imglib2_Localizable(localizable);
this.b.setPosition$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
this.a.setPosition$IA(position);
this.b.setPosition$IA(position);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
this.a.setPosition$JA(position);
this.b.setPosition$JA(position);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.a.setPosition$I$I(position, d);
this.b.setPosition$I$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.a.setPosition$J$I(position, d);
this.b.setPosition$J$I(position, d);
});

Clazz.newMeth(C$, 'get$', function () {
return this;
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$, [this, null]);
copy.setPosition$net_imglib2_Localizable(this);
return copy;
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
