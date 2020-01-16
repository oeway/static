(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType','net.imglib2.roi.Masks']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "RealPointCollection", null, null, 'net.imglib2.roi.RealMaskRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, 'hashCode$net_imglib2_roi_geom_real_RealPointCollection', function (points) {
var result=71;
for (var l, $l = points.points$().iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) for (var d=0; d < l.numDimensions$(); d++) result=(result+(3 * l.getDoublePosition$I(d))|0);


return result;
}, 1);

Clazz.newMeth(C$, 'equals$net_imglib2_roi_geom_real_RealPointCollection$net_imglib2_roi_geom_real_RealPointCollection', function (points1, points2) {
if (points1 == null  && points2 == null  ) return true;
if (points1 == null  || points2 == null   || !$I$(2).sameTypesAndDimensions$TM$TM(points1, points2)  || points1.size$() != points2.size$() ) return false;
for (var p, $p = points1.points$().iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (!points2.test$(p)) return false;
}
return true;
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'maskType$', function () {
return Clazz.getClass(C$,['boundaryType$','equals$O','equals$net_imglib2_roi_geom_real_RealPointCollection$net_imglib2_roi_geom_real_RealPointCollection','hashCode$net_imglib2_roi_geom_real_RealPointCollection','maskType$','points$','size$']);
});

Clazz.newMeth(C$, 'boundaryType$', function () {
return $I$(1).CLOSED;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
