(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'net.imglib2.util.Intervals']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Plane");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getMin$', function () {
return $I$(1).minAsLongArray$net_imglib2_Interval(this.getBounds$());
});

Clazz.newMeth(C$, 'getMax$', function () {
return $I$(1).maxAsLongArray$net_imglib2_Interval(this.getBounds$());
});

Clazz.newMeth(C$, 'getLengths$', function () {
return $I$(1).dimensionsAsLongArray$net_imglib2_Dimensions(this.getBounds$());
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
