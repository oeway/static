(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Polyline", null, null, 'net.imglib2.roi.geom.real.Polyshape');

C$.$clinit$=2;

Clazz.newMeth(C$, 'hashCode$net_imglib2_roi_geom_real_Polyline', function (polyline) {
var result=777;
var t=11;
for (var v, $v = polyline.vertices$().iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
for (var d=0; d < v.numDimensions$(); d++) {
var p=v.getDoublePosition$I(d);
result=(result+(t * (p * p))|0);
}
t+=3;
}
return result;
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'maskType$', function () {
return Clazz.getClass(C$,['boundaryType$','equals$O','hashCode$net_imglib2_roi_geom_real_Polyline','maskType$']);
});

Clazz.newMeth(C$, 'boundaryType$', function () {
return $I$(1).CLOSED;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
