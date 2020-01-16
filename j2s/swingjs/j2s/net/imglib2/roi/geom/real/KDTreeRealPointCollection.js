(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.neighborsearch.NearestNeighborSearchOnKDTree','java.util.ArrayList','net.imglib2.KDTree']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "KDTreeRealPointCollection", null, 'net.imglib2.roi.geom.real.NNSRealPointCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (points) {
C$.c$$net_imglib2_KDTree.apply(this, [C$.createKDTree$java_util_Collection(points)]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_KDTree', function (tree) {
;C$.superclazz.c$$net_imglib2_IterableRealInterval$net_imglib2_neighborsearch_NearestNeighborSearch.apply(this,[tree, Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_KDTree,[tree])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createKDTree$java_util_Collection', function (points) {
var pointsList=Clazz.new_(1,{E:"Object"},$I$(2,1).c$$java_util_Collection,[points]);
return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$java_util_List$java_util_List,[pointsList, pointsList]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
