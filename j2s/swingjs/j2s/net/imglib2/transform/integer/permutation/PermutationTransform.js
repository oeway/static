(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer.permutation"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PermutationTransform", null, 'net.imglib2.transform.integer.permutation.AbstractPermutationTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numSourceDimensions','numTargetDimensions']]]

Clazz.newMeth(C$, 'c$$IA$I$I', function (lut, numSourceDimensions, numTargetDimensions) {
;C$.superclazz.c$$IA.apply(this,[lut]);C$.$init$.apply(this);
this.numSourceDimensions=numSourceDimensions;
this.numTargetDimensions=numTargetDimensions;
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.numSourceDimensions;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.numTargetDimensions;
});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numTargetDimensions && target.length >= this.numTargetDimensions }, function(){return "Dimensions do not match."});
for (var d=0; d < this.numTargetDimensions; ++d) target[d]=this.apply$I((source[d]|0));

});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numTargetDimensions && target.length >= this.numTargetDimensions }, function(){return "Dimensions do not match."});
for (var d=0; d < this.numTargetDimensions; ++d) target[d]=this.apply$I(this.lut[source[d]]);

});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numTargetDimensions && target.numDimensions$() >= this.numTargetDimensions }, function(){return "Dimensions do not match."});
for (var d=0; d < this.numTargetDimensions; ++d) target.setPosition$I$I(this.apply$I(source.getIntPosition$I(d)), d);

});

Clazz.newMeth(C$, 'applyInverse$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions && target.length >= this.numSourceDimensions }, function(){return "Dimensions do not match."});
for (var d=0; d < this.numSourceDimensions; ++d) source[d]=this.applyInverse$I((target[d]|0));

});

Clazz.newMeth(C$, 'applyInverse$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions && target.length >= this.numSourceDimensions }, function(){return "Dimensions do not match."});
for (var d=0; d < this.numSourceDimensions; ++d) source[d]=this.applyInverse$I(target[d]);

});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_Positionable$net_imglib2_Localizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numSourceDimensions && target.numDimensions$() >= this.numSourceDimensions }, function(){return "Dimensions do not match."});
for (var d=0; d < this.numSourceDimensions; ++d) source.setPosition$I$I(this.applyInverse$I(target.getIntPosition$I(d)), d);

});

Clazz.newMeth(C$, 'inverse$', function () {
return Clazz.new_(C$.c$$IA$I$I,[this.inverseLut, this.numTargetDimensions, this.numSourceDimensions]);
});

Clazz.newMeth(C$, 'checkInterval$net_imglib2_Interval$IA', function (interval, lut) {
for (var d=0; d < interval.numDimensions$(); ++d) {
if (!(interval.min$I(d) == 0 && interval.dimension$I(d) == lut.length )) return false;
}
return true;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
