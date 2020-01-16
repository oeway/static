(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer.permutation"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SingleDimensionPermutationTransform", null, 'net.imglib2.transform.integer.permutation.AbstractPermutationTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numSourceDimensions','numTargetDimensions','d']]]

Clazz.newMeth(C$, 'c$$IA$I$I$I', function (lut, numSourceDimensions, numTargetDimensions, d) {
;C$.superclazz.c$$IA.apply(this,[lut]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return d > 0 && d < numTargetDimensions  && d < numSourceDimensions });
this.numSourceDimensions=numSourceDimensions;
this.numTargetDimensions=numTargetDimensions;
this.d=d;
}, 1);

Clazz.newMeth(C$, 'applyInverse$JA$JA', function (source, target) {
System.arraycopy$O$I$O$I$I(target, 0, source, 0, this.numSourceDimensions);
source[this.d]=this.applyInverse$I((target[this.d]|0));
});

Clazz.newMeth(C$, 'applyInverse$IA$IA', function (source, target) {
System.arraycopy$O$I$O$I$I(target, 0, source, 0, this.numSourceDimensions);
source[this.d]=this.applyInverse$I(target[this.d]);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_Positionable$net_imglib2_Localizable', function (source, target) {
source.setPosition$net_imglib2_Localizable(target);
source.setPosition$I$I(this.applyInverse$I(target.getIntPosition$I(this.d)), this.d);
});

Clazz.newMeth(C$, 'inverse$', function () {
return Clazz.new_(C$.c$$IA$I$I$I,[this.inverseLut, this.numSourceDimensions, this.numTargetDimensions, this.d]);
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.numSourceDimensions;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.numTargetDimensions;
});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
System.arraycopy$O$I$O$I$I(source, 0, target, 0, this.numTargetDimensions);
target[this.d]=this.apply$I((source[this.d]|0));
});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
System.arraycopy$O$I$O$I$I(source, 0, target, 0, this.numTargetDimensions);
target[this.d]=this.apply$I(source[this.d]);
});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
target.setPosition$net_imglib2_Localizable(source);
target.setPosition$I$I(this.apply$I(source.getIntPosition$I(this.d)), this.d);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
