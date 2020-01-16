(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,['net.imglib2.view.RandomAccessibleOnRealRandomAccessible','.RandomAccessOnRealRandomAccessible']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessibleOnRealRandomAccessible", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractEuclideanSpace', ['net.imglib2.RandomAccessible', 'net.imglib2.View']);
C$.$classes$=[['RandomAccessOnRealRandomAccessible',20]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RealRandomAccessible']]]

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'c$$net_imglib2_RealRandomAccessible', function (source) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1).c$$net_imglib2_RealRandomAccess, [this, null, this.source.realRandomAccess$()]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return Clazz.new_($I$(1,1).c$$net_imglib2_RealRandomAccess, [this, null, this.source.realRandomAccess$net_imglib2_RealInterval(interval)]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RandomAccessibleOnRealRandomAccessible, "RandomAccessOnRealRandomAccessible", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceAccess','net.imglib2.RealRandomAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealRandomAccess', function (sourceAccess) {
;C$.$init$.apply(this);
this.sourceAccess=sourceAccess;
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
for (var d=0; d < this.this$0.n; ++d) position[d]=(Math.round(this.sourceAccess.getDoublePosition$I(d))|0);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
for (var d=0; d < this.this$0.n; ++d) position[d]=Math.round(this.sourceAccess.getDoublePosition$I(d));

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return (Math.round(this.sourceAccess.getDoublePosition$I(d))|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return Math.round(this.sourceAccess.getDoublePosition$I(d));
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
this.sourceAccess.localize$FA(position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
this.sourceAccess.localize$DA(position);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.sourceAccess.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.sourceAccess.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.sourceAccess.fwd$I(d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.sourceAccess.bck$I(d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.sourceAccess.move$I$I(distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.sourceAccess.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
this.sourceAccess.move$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
this.sourceAccess.move$IA(distance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
this.sourceAccess.move$JA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
this.sourceAccess.setPosition$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
this.sourceAccess.setPosition$IA(position);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
this.sourceAccess.setPosition$JA(position);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.sourceAccess.setPosition$I$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.sourceAccess.setPosition$J$I(position, d);
});

Clazz.newMeth(C$, 'get$', function () {
return this.sourceAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_RealRandomAccess, [this, null, this.sourceAccess.copyRealRandomAccess$()]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.n;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
