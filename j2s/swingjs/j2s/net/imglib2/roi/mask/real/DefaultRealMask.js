(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.real"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultRealMask", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.roi.RealMask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['boundaryType','net.imglib2.roi.BoundaryType','predicate','java.util.function.Predicate','knownConstant','net.imglib2.roi.KnownConstant']]]

Clazz.newMeth(C$, 'c$$I$net_imglib2_roi_BoundaryType$java_util_function_Predicate$net_imglib2_roi_KnownConstant', function (n, boundaryType, predicate, knownConstant) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
this.boundaryType=boundaryType;
this.predicate=predicate;
this.knownConstant=knownConstant;
}, 1);

Clazz.newMeth(C$, 'boundaryType$', function () {
return this.boundaryType;
});

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (localizable) {
return this.predicate.test$(localizable);
});

Clazz.newMeth(C$, 'knownConstant$', function () {
return this.knownConstant;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
