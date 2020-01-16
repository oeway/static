(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NLinearInterpolator1D", null, 'net.imglib2.interpolation.randomaccess.NLinearInterpolator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator1D', function (interpolator) {
;C$.superclazz.c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator.apply(this,[interpolator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RandomAccessible$TT'], function (randomAccessible, type) {
;C$.superclazz.c$$net_imglib2_RandomAccessible$TT.apply(this,[randomAccessible, type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible', function (randomAccessible) {
;C$.superclazz.c$$net_imglib2_RandomAccessible.apply(this,[randomAccessible]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return 1;
});

Clazz.newMeth(C$, 'fillWeights$', function () {
var w0=this.position[0] - this.target.getLongPosition$I(0);
this.weights[0]=1.0 - w0;
this.weights[1]=w0;
});

Clazz.newMeth(C$, 'get$', function () {
var w0=this.position[0] - this.target.getLongPosition$I(0);
this.accumulator.set$TT(this.target.get$());
this.accumulator.mul$D(1.0 - w0);
this.target.fwd$I(0);
this.tmp.set$TT(this.target.get$());
this.tmp.mul$D(w0);
this.accumulator.add$(this.tmp);
this.target.bck$I(0);
return this.accumulator;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator1D,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
