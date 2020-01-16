(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Polygon2D", null, null, 'net.imglib2.roi.geom.real.Polyshape');

C$.$clinit$=2;

Clazz.newMeth(C$, 'hashCode$net_imglib2_roi_geom_real_Polygon2D', function (polygon) {
var result=203;
var t=5;
for (var v, $v = polygon.vertices$().iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
var x=v.getDoublePosition$I(0);
var y=v.getDoublePosition$I(1);
result=(result+((x * x) + (y * t))|0);
t+=7;
}
if (polygon.boundaryType$() === $I$(1).CLOSED ) result+=21;
 else if (polygon.boundaryType$() === $I$(1).OPEN ) result+=61;
 else result+=3;
return result;
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'maskType$', function () {
return Clazz.getClass(C$,['equals$O','hashCode$net_imglib2_roi_geom_real_Polygon2D','maskType$','numDimensions$']);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return 2;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
