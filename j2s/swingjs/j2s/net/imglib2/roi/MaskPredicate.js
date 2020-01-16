(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.roi.BoundaryType','net.imglib2.roi.KnownConstant']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "MaskPredicate", null, null, ['java.util.function.Predicate', 'net.imglib2.EuclideanSpace']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'maskType$', function () {
return this.getClass$();
});

Clazz.newMeth(C$, 'boundaryType$', function () {
return $I$(1).UNSPECIFIED;
});

Clazz.newMeth(C$, 'knownConstant$', function () {
return $I$(2).UNKNOWN;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.knownConstant$() === $I$(2).ALL_FALSE ;
});

Clazz.newMeth(C$, 'isAll$', function () {
return this.knownConstant$() === $I$(2).ALL_TRUE ;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
