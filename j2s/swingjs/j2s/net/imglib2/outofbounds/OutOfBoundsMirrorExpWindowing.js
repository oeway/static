(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsMirrorExpWindowing", null, 'net.imglib2.outofbounds.OutOfBoundsMirrorSingleBoundary');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['F',['exponent'],'O',['type','<T extends NumericType<T>>','weights','float[][]','max','long[]','fadeOutDistance','int[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_outofbounds_OutOfBoundsMirrorExpWindowing', function (outOfBounds) {
;C$.superclazz.c$$net_imglib2_outofbounds_OutOfBoundsMirrorSingleBoundary.apply(this,[outOfBounds]);C$.$init$.apply(this);
this.type=outOfBounds.type.createVariable$();
this.fadeOutDistance=outOfBounds.fadeOutDistance;
this.exponent=outOfBounds.exponent;
this.max=outOfBounds.max.clone$();
this.weights=outOfBounds.weights.clone$();
}, 1);

Clazz.newMeth(C$, ['c$$TF$IA$F'], function (f, fadeOutDistance, exponent) {
;C$.superclazz.c$$TF.apply(this,[f]);C$.$init$.apply(this);
this.type=$I$(1).getTypeFromInterval$TF(f).createVariable$();
this.fadeOutDistance=fadeOutDistance;
this.exponent=exponent;
this.max=Clazz.array(Long.TYPE, [this.n]);
f.max$JA(this.max);
this.weights=C$.preComputeWeights$I$IA$F(this.n, fadeOutDistance, exponent);
}, 1);

Clazz.newMeth(C$, 'preComputeWeights$I$IA$F', function (n, fadeOutDistance, exponent) {
var weights=Clazz.array(Float.TYPE, [n, null]);
for (var d=0; d < n; ++d) weights[d]=Clazz.array(Float.TYPE, [Math.max(1, fadeOutDistance[d])]);

for (var d=0; d < n; ++d) {
var maxDistance=weights[d].length;
if (maxDistance > 1) {
for (var pos=0; pos < maxDistance; ++pos) {
var relPos=pos / (maxDistance - 1);
if ($I$(1).isApproxEqual$F$F$F(exponent, 1.0, 1.0E-4)) weights[d][pos]=1 - relPos;
 else weights[d][pos]=(1 - (1 / Math.pow(exponent, 1 - relPos))) * (1 + 1 / (exponent - 1));
}
} else {
weights[d][0]=0;
}}
return weights;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
if (this.isOutOfBounds$()) {
this.type.set$TT(this.outOfBoundsRandomAccess.get$());
this.type.mul$F(this.getWeight$JA(this.zeroMinPos));
return this.type;
}return this.outOfBoundsRandomAccess.get$();
});

Clazz.newMeth(C$, 'getWeight$JA', function (zeroMinPosition) {
var weight=1;
for (var d=0; d < this.n; ++d) {
var pos=(zeroMinPosition[d]|0);
var distance;
if (pos < 0) distance=-pos - 1;
 else if (pos >= this.dimension[d]) distance=pos - (this.dimension[d]|0);
 else continue;
if (distance < this.weights[d].length) weight *= this.weights[d][distance];
 else return 0;
}
return weight;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_outofbounds_OutOfBoundsMirrorExpWindowing,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
