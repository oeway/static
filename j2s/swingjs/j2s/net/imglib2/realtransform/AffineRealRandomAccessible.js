(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),p$1={},I$=[[0,['net.imglib2.realtransform.AffineRealRandomAccessible','.AffineRealRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AffineRealRandomAccessible", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.realtransform.RealTransformRealRandomAccessible');
C$.$classes$=[['AffineRealRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealRandomAccessible$TR'], function (source, affine) {
;C$.superclazz.c$$net_imglib2_RealRandomAccessible$TR.apply(this,[source, affine]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return this.realRandomAccess$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AffineRealRandomAccessible, "AffineRealRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['net.imglib2.realtransform.RealTransformRealRandomAccessible','.RealTransformRealRandomAccess']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.move=Clazz.array(Double.TYPE, [this.n]);
}, 1);

C$.$fields$=[['O',['move','double[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.apply$();
}, 1);

Clazz.newMeth(C$, 'scaleMove$D$I', function (distance, d) {
var dd=this.transformCopy.d$I(d);
for (var ddd=0; ddd < this.n; ++ddd) this.move[ddd]=distance * dd.getDoublePosition$I(ddd);

}, p$1);

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
C$.superclazz.prototype.move$F$I.apply(this, [distance, d]);
p$1.scaleMove$D$I.apply(this, [distance, d]);
this.sourceAccess.move$DA(this.move);
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
C$.superclazz.prototype.move$D$I.apply(this, [distance, d]);
p$1.scaleMove$D$I.apply(this, [distance, d]);
this.sourceAccess.move$DA(this.move);
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (localizable) {
C$.superclazz.prototype.move$net_imglib2_RealLocalizable.apply(this, [localizable]);
this.apply$();
});

Clazz.newMeth(C$, 'move$FA', function (distance) {
C$.superclazz.prototype.move$FA.apply(this, [distance]);
this.apply$();
});

Clazz.newMeth(C$, 'move$DA', function (distance) {
C$.superclazz.prototype.move$DA.apply(this, [distance]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (localizable) {
C$.superclazz.prototype.setPosition$net_imglib2_RealLocalizable.apply(this, [localizable]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$FA', function (pos) {
C$.superclazz.prototype.setPosition$FA.apply(this, [pos]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$DA', function (pos) {
C$.superclazz.prototype.setPosition$DA.apply(this, [pos]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$F$I', function (pos, d) {
this.setPosition$D$I(pos, d);
});

Clazz.newMeth(C$, 'setPosition$D$I', function (pos, d) {
var distance=pos - this.position[d];
this.move$D$I(distance, d);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
C$.superclazz.prototype.fwd$I.apply(this, [d]);
this.sourceAccess.move$net_imglib2_RealLocalizable(this.transformCopy.d$I(d));
});

Clazz.newMeth(C$, 'bck$I', function (d) {
C$.superclazz.prototype.bck$I.apply(this, [d]);
p$1.scaleMove$D$I.apply(this, [-1, d]);
this.sourceAccess.move$DA(this.move);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
C$.superclazz.prototype.move$I$I.apply(this, [distance, d]);
p$1.scaleMove$D$I.apply(this, [distance, d]);
this.sourceAccess.move$DA(this.move);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
C$.superclazz.prototype.move$J$I.apply(this, [distance, d]);
p$1.scaleMove$D$I.apply(this, [distance, d]);
this.sourceAccess.move$DA(this.move);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
C$.superclazz.prototype.move$net_imglib2_Localizable.apply(this, [localizable]);
this.apply$();
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
C$.superclazz.prototype.move$IA.apply(this, [distance]);
this.apply$();
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
C$.superclazz.prototype.move$JA.apply(this, [distance]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
C$.superclazz.prototype.setPosition$net_imglib2_Localizable.apply(this, [localizable]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
C$.superclazz.prototype.setPosition$IA.apply(this, [pos]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
C$.superclazz.prototype.setPosition$JA.apply(this, [pos]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, d) {
this.setPosition$D$I(pos, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
this.setPosition$D$I(pos, d);
});

Clazz.newMeth(C$, 'get$', function () {
return this.sourceAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$, [this, null]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
