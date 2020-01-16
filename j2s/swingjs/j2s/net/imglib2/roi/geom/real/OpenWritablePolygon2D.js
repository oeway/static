(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.geom.GeomMaths','net.imglib2.roi.BoundaryType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OpenWritablePolygon2D", null, 'net.imglib2.roi.geom.real.DefaultWritablePolygon2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (vertices) {
;C$.superclazz.c$$java_util_List.apply(this,[vertices]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA', function (x, y) {
;C$.superclazz.c$$DA$DA.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (localizable) {
var edge=false;
var pt1=Clazz.array(Double.TYPE, [2]);
var pt2=Clazz.array(Double.TYPE, [2]);
for (var i=0; i < this.x.size$(); i++) {
pt1[0]=this.x.get$I(i);
pt1[1]=this.y.get$I(i);
if (i == this.x.size$() - 1) {
pt2[0]=this.x.get$I(0);
pt2[1]=this.y.get$I(0);
} else {
pt2[0]=this.x.get$I(i + 1);
pt2[1]=this.y.get$I(i + 1);
}edge=$I$(1).lineContains$DA$DA$net_imglib2_RealLocalizable$I(pt1, pt2, localizable, 2);
if (edge) return false;
}
return $I$(1).pnpoly$gnu_trove_list_array_TDoubleArrayList$gnu_trove_list_array_TDoubleArrayList$net_imglib2_RealLocalizable(this.x, this.y, localizable);
});

Clazz.newMeth(C$, 'boundaryType$', function () {
return $I$(2).OPEN;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
