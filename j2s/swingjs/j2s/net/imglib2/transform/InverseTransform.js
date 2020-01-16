(function(){var P$=Clazz.newPackage("net.imglib2.transform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InverseTransform", null, null, 'net.imglib2.transform.InvertibleTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.transform.InvertibleTransform']]]

Clazz.newMeth(C$, 'c$$net_imglib2_transform_InvertibleTransform', function (transform) {
;C$.$init$.apply(this);
this.inverse=transform;
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.inverse.numTargetDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.inverse.numSourceDimensions$();
});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
this.inverse.applyInverse$JA$JA(target, source);
});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
this.inverse.applyInverse$IA$IA(target, source);
});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
this.inverse.applyInverse$net_imglib2_Positionable$net_imglib2_Localizable(target, source);
});

Clazz.newMeth(C$, 'applyInverse$JA$JA', function (source, target) {
this.inverse.apply$JA$JA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$IA$IA', function (source, target) {
this.inverse.apply$IA$IA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_Positionable$net_imglib2_Localizable', function (source, target) {
this.inverse.apply$net_imglib2_Localizable$net_imglib2_Positionable(target, source);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
