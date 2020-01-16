(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[[0,'net.imglib2.util.Util','net.imglib2.outofbounds.OutOfBoundsMirrorExpWindowing']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsMirrorExpWindowingFactory", null, null, 'net.imglib2.outofbounds.OutOfBoundsFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fadeOutDistance=null;
this.minFadeOutDistance=6;
this.commonFadeOutDistance=6;
this.commonRelativeDistanceFadeOut=NaN;
this.exponent=10;
}, 1);

C$.$fields$=[['F',['commonRelativeDistanceFadeOut','exponent'],'I',['minFadeOutDistance','commonFadeOutDistance'],'O',['fadeOutDistance','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$F', function (relativeDistanceFadeOut) {
;C$.$init$.apply(this);
this.commonRelativeDistanceFadeOut=relativeDistanceFadeOut;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (fadeOutDistance) {
;C$.$init$.apply(this);
this.commonFadeOutDistance=fadeOutDistance;
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (fadeOutDistance) {
;C$.$init$.apply(this);
this.fadeOutDistance=fadeOutDistance.clone$();
}, 1);

Clazz.newMeth(C$, 'setExponent$F', function (exponent) {
this.exponent=exponent;
});

Clazz.newMeth(C$, 'getExponent$', function () {
return this.exponent;
});

Clazz.newMeth(C$, 'setMinFadeOutDistance$I', function (minFadeOutDistance) {
this.minFadeOutDistance=minFadeOutDistance;
});

Clazz.newMeth(C$, 'getMinFadeOutDistance$', function () {
return this.minFadeOutDistance;
});

Clazz.newMeth(C$, 'setCommonFadeOutDistance$I', function (fadeOutDistance) {
this.commonFadeOutDistance=fadeOutDistance;
});

Clazz.newMeth(C$, 'getCommonFadeOutDistance$', function () {
return this.commonFadeOutDistance;
});

Clazz.newMeth(C$, 'setCommonRelativeFadeOutDistance$F', function (commonRelativeDistanceFadeOut) {
this.commonRelativeDistanceFadeOut=commonRelativeDistanceFadeOut;
});

Clazz.newMeth(C$, 'getCommonRelativeFadeOutDistance$', function () {
return this.commonRelativeDistanceFadeOut;
});

Clazz.newMeth(C$, 'setFadeOutDistance$IA', function (fadeOutDistance) {
this.fadeOutDistance=fadeOutDistance.clone$();
});

Clazz.newMeth(C$, 'getFadeOutDistance$', function () {
return this.fadeOutDistance.clone$();
});

Clazz.newMeth(C$, ['create$TF','create$'], function (f) {
var numDimensions=f.numDimensions$();
if (Float.isNaN$F(this.commonRelativeDistanceFadeOut)) {
if (this.fadeOutDistance == null ) {
this.fadeOutDistance=Clazz.array(Integer.TYPE, [numDimensions]);
for (var d=0; d < numDimensions; ++d) this.fadeOutDistance[d]=Math.max(this.minFadeOutDistance, this.commonFadeOutDistance);

} else {
for (var d=0; d < numDimensions; ++d) this.fadeOutDistance[d]=Math.max(this.minFadeOutDistance, this.fadeOutDistance[d]);

}} else {
if (this.commonRelativeDistanceFadeOut <= 0 ) this.commonRelativeDistanceFadeOut=0.1;
this.fadeOutDistance=Clazz.array(Integer.TYPE, [numDimensions]);
for (var d=0; d < numDimensions; ++d) this.fadeOutDistance[d]=Math.max(this.minFadeOutDistance, ($I$(1).round$F(f.dimension$I(d) * this.commonRelativeDistanceFadeOut)/2|0));

}return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$TF$IA$F,[f, this.fadeOutDistance, this.exponent]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
