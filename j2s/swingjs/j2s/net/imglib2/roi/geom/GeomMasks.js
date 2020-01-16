(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom"),I$=[[0,'net.imglib2.roi.geom.real.ClosedWritableBox','net.imglib2.roi.geom.real.OpenWritableBox','net.imglib2.roi.geom.real.ClosedWritableEllipsoid','net.imglib2.roi.geom.real.OpenWritableEllipsoid','net.imglib2.roi.geom.real.DefaultWritableLine','net.imglib2.roi.geom.real.DefaultWritablePointMask','net.imglib2.roi.geom.real.DefaultWritablePolygon2D','net.imglib2.roi.geom.real.ClosedWritablePolygon2D','net.imglib2.roi.geom.real.OpenWritablePolygon2D','net.imglib2.roi.geom.real.DefaultWritablePolyline','net.imglib2.roi.geom.real.DefaultWritableRealPointCollection','net.imglib2.roi.geom.real.KDTreeRealPointCollection','net.imglib2.roi.geom.real.RealPointSampleListWritableRealPointCollection','net.imglib2.roi.geom.real.ClosedWritableSphere','net.imglib2.roi.geom.real.OpenWritableSphere','net.imglib2.roi.geom.real.ClosedWritableSuperEllipsoid','net.imglib2.roi.geom.real.OpenWritableSuperEllipsoid']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeomMasks");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'closedBox$DA$DA', function (min, max) {
return Clazz.new_($I$(1,1).c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'openBox$DA$DA', function (min, max) {
return Clazz.new_($I$(2,1).c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'closedEllipsoid$DA$DA', function (center, semiAxisLengths) {
return Clazz.new_($I$(3,1).c$$DA$DA,[center, semiAxisLengths]);
}, 1);

Clazz.newMeth(C$, 'openEllipsoid$DA$DA', function (center, semiAxisLengths) {
return Clazz.new_($I$(4,1).c$$DA$DA,[center, semiAxisLengths]);
}, 1);

Clazz.newMeth(C$, 'line$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable', function (pointOne, pointTwo) {
return Clazz.new_($I$(5,1).c$$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable,[pointOne, pointTwo]);
}, 1);

Clazz.newMeth(C$, 'line$DA$DA$Z', function (pointOne, pointTwo, copy) {
return Clazz.new_($I$(5,1).c$$DA$DA$Z,[pointOne, pointTwo, copy]);
}, 1);

Clazz.newMeth(C$, 'pointMask$DA', function (point) {
return Clazz.new_($I$(6,1).c$$DA,[point]);
}, 1);

Clazz.newMeth(C$, 'pointMask$net_imglib2_RealLocalizable', function (point) {
return Clazz.new_($I$(6,1).c$$net_imglib2_RealLocalizable,[point]);
}, 1);

Clazz.newMeth(C$, 'polygon2D$java_util_List', function (vertices) {
return Clazz.new_($I$(7,1).c$$java_util_List,[vertices]);
}, 1);

Clazz.newMeth(C$, 'polygon2D$DA$DA', function (x, y) {
return Clazz.new_($I$(7,1).c$$DA$DA,[x, y]);
}, 1);

Clazz.newMeth(C$, 'closedPolygon2D$java_util_List', function (vertices) {
return Clazz.new_($I$(8,1).c$$java_util_List,[vertices]);
}, 1);

Clazz.newMeth(C$, 'closedPolygon2D$DA$DA', function (x, y) {
return Clazz.new_($I$(8,1).c$$DA$DA,[x, y]);
}, 1);

Clazz.newMeth(C$, 'openPolygon2D$java_util_List', function (vertices) {
return Clazz.new_($I$(9,1).c$$java_util_List,[vertices]);
}, 1);

Clazz.newMeth(C$, 'openPolygon2D$DA$DA', function (x, y) {
return Clazz.new_($I$(9,1).c$$DA$DA,[x, y]);
}, 1);

Clazz.newMeth(C$, 'polyline$java_util_List', function (vertices) {
return Clazz.new_($I$(10,1).c$$java_util_List,[vertices]);
}, 1);

Clazz.newMeth(C$, 'realPointCollection$java_util_HashMap', function (points) {
return Clazz.new_(1,{L:"Object"},$I$(11,1).c$$java_util_Map,[points]);
}, 1);

Clazz.newMeth(C$, 'realPointCollection$java_util_Collection', function (points) {
return Clazz.new_(1,{L:"Object"},$I$(11,1).c$$java_util_Collection,[points]);
}, 1);

Clazz.newMeth(C$, 'kDTreeRealPointCollection$net_imglib2_KDTree', function (tree) {
return Clazz.new_(1,{L:"Object"},$I$(12,1).c$$net_imglib2_KDTree,[tree]);
}, 1);

Clazz.newMeth(C$, 'kDTreeRealPointCollection$java_util_Collection', function (points) {
return Clazz.new_(1,{L:"Object"},$I$(12,1).c$$java_util_Collection,[points]);
}, 1);

Clazz.newMeth(C$, 'realPointSampleListRealPointCollection$net_imglib2_RealPointSampleList', function (points) {
return Clazz.new_(1,{L:"Object"},$I$(13,1).c$$net_imglib2_RealPointSampleList,[points]);
}, 1);

Clazz.newMeth(C$, 'realPointSampleListRealPointCollection$java_util_Collection', function (points) {
return Clazz.new_(1,{L:"Object"},$I$(13,1).c$$java_util_Collection,[points]);
}, 1);

Clazz.newMeth(C$, 'closedSphere$DA$D', function (center, radius) {
return Clazz.new_($I$(14,1).c$$DA$D,[center, radius]);
}, 1);

Clazz.newMeth(C$, 'openSphere$DA$D', function (center, radius) {
return Clazz.new_($I$(15,1).c$$DA$D,[center, radius]);
}, 1);

Clazz.newMeth(C$, 'closedSuperEllipsoid$DA$DA$D', function (center, semiAxisLengths, exponent) {
if (exponent == 2 ) return Clazz.new_($I$(3,1).c$$DA$DA,[center, semiAxisLengths]);
return Clazz.new_($I$(16,1).c$$DA$DA$D,[center, semiAxisLengths, exponent]);
}, 1);

Clazz.newMeth(C$, 'openSuperEllipsoid$DA$DA$D', function (center, semiAxisLengths, exponent) {
if (exponent == 2 ) return Clazz.new_($I$(4,1).c$$DA$DA,[center, semiAxisLengths]);
return Clazz.new_($I$(17,1).c$$DA$DA$D,[center, semiAxisLengths, exponent]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
