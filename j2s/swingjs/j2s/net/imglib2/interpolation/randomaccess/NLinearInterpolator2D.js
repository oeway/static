(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NLinearInterpolator2D", null, 'net.imglib2.interpolation.randomaccess.NLinearInterpolator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator2D', function (interpolator) {
;C$.superclazz.c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator.apply(this,[interpolator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RandomAccessible$TT'], function (randomAccessible, type) {
;C$.superclazz.c$$net_imglib2_RandomAccessible$TT.apply(this,[randomAccessible, type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible', function (randomAccessible) {
;C$.superclazz.c$$net_imglib2_RandomAccessible.apply(this,[randomAccessible]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'fillWeights$', function () {
var w0=this.position[0] - this.target.getLongPosition$I(0);
var w0Inv=1.0 - w0;
var w1=this.position[1] - this.target.getLongPosition$I(1);
var w1Inv=1.0 - w1;
this.weights[0]=w0Inv * w1Inv;
this.weights[1]=w0 * w1Inv;
this.weights[2]=w0Inv * w1;
this.weights[3]=w0 * w1;
});

Clazz.newMeth(C$, 'get$', function () {
this.fillWeights$();
this.accumulator.set$TT(this.target.get$());
this.accumulator.mul$D(this.weights[0]);
this.target.fwd$I(0);
this.tmp.set$TT(this.target.get$());
this.tmp.mul$D(this.weights[1]);
this.accumulator.add$(this.tmp);
this.target.fwd$I(1);
this.tmp.set$TT(this.target.get$());
this.tmp.mul$D(this.weights[3]);
this.accumulator.add$(this.tmp);
this.target.bck$I(0);
this.tmp.set$TT(this.target.get$());
this.tmp.mul$D(this.weights[2]);
this.accumulator.add$(this.tmp);
this.target.bck$I(1);
return this.accumulator;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator2D,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
