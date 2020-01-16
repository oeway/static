(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,['net.imglib2.realtransform.AffineRandomAccessible','.AffineRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AffineRandomAccessible", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.realtransform.RealTransformRandomAccessible');
C$.$classes$=[['AffineRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealRandomAccessible$TR'], function (source, transformToSource) {
;C$.superclazz.c$$net_imglib2_RealRandomAccessible$TR.apply(this,[source, transformToSource]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AffineRandomAccessible, "AffineRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['net.imglib2.realtransform.RealTransformRandomAccessible','.RealTransformRandomAccess']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.move=Clazz.array(Double.TYPE, [this.n]);
}, 1);

C$.$fields$=[['O',['move','double[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.apply$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_AffineRandomAccessible_AffineRandomAccess', function (a) {
;C$.superclazz.c$$net_imglib2_realtransform_RealTransformRandomAccessible_RealTransformRandomAccess.apply(this,[a]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'scaleMove$D$I', function (distance, d) {
var dd=this.transformCopy.d$I(d);
for (var ddd=0; ddd < this.n; ++ddd) this.move[ddd]=distance * dd.getDoublePosition$I(ddd);

});

Clazz.newMeth(C$, 'fwd$I', function (d) {
C$.superclazz.prototype.fwd$I.apply(this, [d]);
this.sourceAccess.move$net_imglib2_RealLocalizable(this.transformCopy.d$I(d));
});

Clazz.newMeth(C$, 'bck$I', function (d) {
C$.superclazz.prototype.bck$I.apply(this, [d]);
this.scaleMove$D$I(-1, d);
this.sourceAccess.move$DA(this.move);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
C$.superclazz.prototype.move$J$I.apply(this, [distance, d]);
this.scaleMove$D$I(distance, d);
this.sourceAccess.move$DA(this.move);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.move$J$I(distance, d);
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

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
C$.superclazz.prototype.setPosition$IA.apply(this, [pos]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
C$.superclazz.prototype.setPosition$JA.apply(this, [pos]);
this.apply$();
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.setPosition$J$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
var distance=pos - this.position[d];
this.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
localizable.localize$JA(this.position);
this.apply$();
});

Clazz.newMeth(C$, 'get$', function () {
return this.sourceAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_AffineRandomAccessible_AffineRandomAccess, [this, null, this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
