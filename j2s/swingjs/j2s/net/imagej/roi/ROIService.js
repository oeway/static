(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'org.scijava.util.DefaultTreeNode','net.imagej.roi.DefaultROITree','java.util.Collections','net.imglib2.roi.geom.GeomMasks']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "ROIService", null, null, 'net.imagej.ImageJService');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getROIs$net_imagej_Dataset', function (img) {
var o=img.getProperties$().get$O("rois");
return Clazz.instanceOf(o, "net.imagej.roi.ROITree") ? o : null;
});

Clazz.newMeth(C$, 'add$O$O', function (roi, img) {
if (!(Clazz.instanceOf(roi, "net.imglib2.roi.MaskPredicate"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[roi.getClass$() + " is not a supported ROI type"]);
if (!(Clazz.instanceOf(img, "net.imagej.Dataset"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[img.getClass$() + " is not a supported image type"]);
var d=img;
var mp=roi;
if (d.getProperties$().get$O("rois") != null ) {
var rp=d.getProperties$().get$O("rois");
rp.children$().add$TE(Clazz.new_(1,{T:"net.imglib2.roi.MaskPredicate"},$I$(1,1).c$$TT$org_scijava_util_TreeNode,[mp, rp]));
} else {
var rp=Clazz.new_($I$(2,1));
rp.addROIs$java_util_List($I$(3).singletonList$TT(mp));
d.getProperties$().put$TK$TV("rois", rp);
}});

Clazz.newMeth(C$, 'hasROIs$O', function (o) {
if (Clazz.instanceOf(o, "net.imagej.Dataset")) return (o).getProperties$().get$O("rois") != null ;
return Clazz.instanceOf(o, "net.imglib2.roi.MaskPredicate");
});

Clazz.newMeth(C$, 'clear$net_imagej_Dataset', function (img) {
img.getProperties$().put$TK$TV("rois", null);
});

Clazz.newMeth(C$, 'closedBox$DA$DA', function (min, max) {
return $I$(4).closedBox$DA$DA(min, max);
});

Clazz.newMeth(C$, 'openBox$DA$DA', function (min, max) {
return $I$(4).openBox$DA$DA(min, max);
});

Clazz.newMeth(C$, 'closedEllipsoid$DA$DA', function (center, semiAxisLengths) {
return $I$(4).closedEllipsoid$DA$DA(center, semiAxisLengths);
});

Clazz.newMeth(C$, 'openEllipsoid$DA$DA', function (center, semiAxisLengths) {
return $I$(4).openEllipsoid$DA$DA(center, semiAxisLengths);
});

Clazz.newMeth(C$, 'line$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable', function (pointOne, pointTwo) {
return $I$(4).line$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable(pointOne, pointTwo);
});

Clazz.newMeth(C$, 'line$DA$DA$Z', function (pointOne, pointTwo, copy) {
return $I$(4).line$DA$DA$Z(pointOne, pointTwo, copy);
});

Clazz.newMeth(C$, 'pointMask$DA', function (point) {
return $I$(4).pointMask$DA(point);
});

Clazz.newMeth(C$, 'pointMask$net_imglib2_RealLocalizable', function (point) {
return $I$(4).pointMask$net_imglib2_RealLocalizable(point);
});

Clazz.newMeth(C$, 'polygon2D$java_util_List', function (vertices) {
return $I$(4).polygon2D$java_util_List(vertices);
});

Clazz.newMeth(C$, 'polygon2D$DA$DA', function (x, y) {
return $I$(4).polygon2D$DA$DA(x, y);
});

Clazz.newMeth(C$, 'closedPolygon2D$java_util_List', function (vertices) {
return $I$(4).closedPolygon2D$java_util_List(vertices);
});

Clazz.newMeth(C$, 'closedPolygon2D$DA$DA', function (x, y) {
return $I$(4).closedPolygon2D$DA$DA(x, y);
});

Clazz.newMeth(C$, 'openPolygon2D$java_util_List', function (vertices) {
return $I$(4).openPolygon2D$java_util_List(vertices);
});

Clazz.newMeth(C$, 'openPolygon2D$DA$DA', function (x, y) {
return $I$(4).openPolygon2D$DA$DA(x, y);
});

Clazz.newMeth(C$, 'polyline$java_util_List', function (vertices) {
return $I$(4).polyline$java_util_List(vertices);
});

Clazz.newMeth(C$, 'realPointCollection$java_util_HashMap', function (points) {
return $I$(4).realPointCollection$java_util_HashMap(points);
});

Clazz.newMeth(C$, 'realPointCollection$java_util_Collection', function (points) {
return $I$(4).realPointCollection$java_util_Collection(points);
});

Clazz.newMeth(C$, 'kDTreeRealPointCollection$net_imglib2_KDTree', function (tree) {
return $I$(4).kDTreeRealPointCollection$net_imglib2_KDTree(tree);
});

Clazz.newMeth(C$, 'kDTreeRealPointCollection$java_util_Collection', function (points) {
return $I$(4).kDTreeRealPointCollection$java_util_Collection(points);
});

Clazz.newMeth(C$, 'realPointSampleListRealPointCollection$net_imglib2_RealPointSampleList', function (points) {
return $I$(4).realPointSampleListRealPointCollection$net_imglib2_RealPointSampleList(points);
});

Clazz.newMeth(C$, 'realPointSampleListRealPointCollection$java_util_Collection', function (points) {
return $I$(4).realPointSampleListRealPointCollection$java_util_Collection(points);
});

Clazz.newMeth(C$, 'closedSphere$DA$D', function (center, radius) {
return $I$(4).closedSphere$DA$D(center, radius);
});

Clazz.newMeth(C$, 'openSphere$DA$D', function (center, radius) {
return $I$(4).openSphere$DA$D(center, radius);
});

Clazz.newMeth(C$, 'closedSuperEllipsoid$DA$DA$D', function (center, semiAxisLengths, exponent) {
return $I$(4).closedSuperEllipsoid$DA$DA$D(center, semiAxisLengths, exponent);
});

Clazz.newMeth(C$, 'openSuperEllipsoid$DA$DA$D', function (center, semiAxisLengths, exponent) {
return $I$(4).openSuperEllipsoid$DA$DA$D(center, semiAxisLengths, exponent);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
