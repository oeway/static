(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'org.scijava.util.GenericUtils','net.imglib2.util.Util','net.imglib2.type.logic.BoolType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MaskConversionUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'realRandomAccessibleRealIntervalType$', function () {
return $I$(1).getMethodReturnType$reflect_Method$Class(C$.method$S("realRandomAccessibleRealInterval"), Clazz.getClass(C$));
}, 1);

Clazz.newMeth(C$, 'realRandomAccessibleType$', function () {
return $I$(1).getMethodReturnType$reflect_Method$Class(C$.method$S("realRandomAccessible"), Clazz.getClass(C$));
}, 1);

Clazz.newMeth(C$, 'randomAccessibleIntervalType$', function () {
return $I$(1).getMethodReturnType$reflect_Method$Class(C$.method$S("randomAccessibleInterval"), Clazz.getClass(C$));
}, 1);

Clazz.newMeth(C$, 'randomAccessibleType$', function () {
return $I$(1).getMethodReturnType$reflect_Method$Class(C$.method$S("randomAccessible"), Clazz.getClass(C$));
}, 1);

Clazz.newMeth(C$, 'isBoolType$net_imglib2_RandomAccessible', function (ra) {
if (Clazz.instanceOf(ra, "net.imglib2.Interval")) return Clazz.instanceOf($I$(2).getTypeFromInterval$TF(ra), "net.imglib2.type.logic.BoolType");
return Clazz.instanceOf(ra.randomAccess$().get$(), "net.imglib2.type.logic.BoolType");
}, 1);

Clazz.newMeth(C$, 'isBoolType$net_imglib2_RealRandomAccessible', function (ra) {
if (Clazz.instanceOf(ra, "net.imglib2.RealInterval")) return Clazz.instanceOf($I$(2).getTypeFromRealInterval$TF(ra), "net.imglib2.type.logic.BoolType");
return Clazz.instanceOf(ra.realRandomAccess$().get$(), "net.imglib2.type.logic.BoolType");
}, 1);

Clazz.newMeth(C$, 'isBoolType$reflect_Type', function (type) {
if (!(Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType"))) return false;
var types=(type).getActualTypeArguments$();
return types.length >= 1 && types[0].equals$O(Clazz.getClass($I$(3))) ;
}, 1);

Clazz.newMeth(C$, 'method$S', function (name) {
try {
return Clazz.getClass(C$).getDeclaredMethod$S$ClassA(name, []);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NoSuchMethodException") || Clazz.exceptionOf(exc,"SecurityException")){
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'realRandomAccessibleRealInterval$', function () {
return null;
}, 1);

Clazz.newMeth(C$, 'realRandomAccessible$', function () {
return null;
}, 1);

Clazz.newMeth(C$, 'randomAccessibleInterval$', function () {
return null;
}, 1);

Clazz.newMeth(C$, 'randomAccessible$', function () {
return null;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
