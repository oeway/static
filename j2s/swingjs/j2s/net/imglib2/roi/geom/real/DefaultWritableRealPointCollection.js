(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),p$1={},I$=[[0,'net.imglib2.roi.geom.GeomMaths','net.imglib2.util.Intervals','gnu.trove.list.array.TDoubleArrayList','net.imglib2.roi.geom.real.RealPointCollection','java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultWritableRealPointCollection", null, 'net.imglib2.AbstractRealInterval', 'net.imglib2.roi.geom.real.WritableRealPointCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['points','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_util_Map', function (points) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[$I$(1).getBoundsReal$java_util_Collection(points.values$())]);C$.$init$.apply(this);
this.points=points;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (points) {
C$.c$$java_util_Map.apply(this, [C$.createHashMap$java_util_Collection(points)]);
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
if ($I$(2).contains$net_imglib2_RealInterval$net_imglib2_RealLocalizable(this, l)) {
var bestDistance=Infinity;
for (var pt, $pt = this.points.values$().iterator$(); $pt.hasNext$()&&((pt=($pt.next$())),1);) {
var distance=p$1.squareDistance$TL$net_imglib2_RealLocalizable.apply(this, [pt, l]);
if (distance < bestDistance ) bestDistance=distance;
}
return bestDistance <= 0 ;
}return false;
});

Clazz.newMeth(C$, 'points$', function () {
return this.points.values$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.points.size$();
});

Clazz.newMeth(C$, ['addPoint$TL'], function (point) {
if (point.numDimensions$() != this.n) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Point must have " + this.n + " dimensions" ]);
var l=Clazz.array(Double.TYPE, [point.numDimensions$()]);
point.localize$DA(l);
this.points.put$TK$TV(Clazz.new_($I$(3,1).c$$DA,[l]), point);
for (var d=0; d < this.numDimensions$(); d++) {
if (l[d] > this.max[d] ) this.max[d]=l[d];
if (l[d] < this.min[d] ) this.min[d]=l[d];
}
});

Clazz.newMeth(C$, ['removePoint$TL'], function (point) {
var l=Clazz.array(Double.TYPE, [point.numDimensions$()]);
point.localize$DA(l);
this.points.remove$O(Clazz.new_($I$(3,1).c$$DA,[l]));
p$1.updateMinMax.apply(this, []);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "net.imglib2.roi.geom.real.RealPointCollection") && $I$(4).equals$net_imglib2_roi_geom_real_RealPointCollection$net_imglib2_roi_geom_real_RealPointCollection(this, obj) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(4).hashCode$net_imglib2_roi_geom_real_RealPointCollection(this);
});

Clazz.newMeth(C$, ['squareDistance$TL$net_imglib2_RealLocalizable'], function (ptOne, ptTwo) {
var distance=0;
for (var i=0; i < this.n; i++) distance += (ptOne.getDoublePosition$I(i) - ptTwo.getDoublePosition$I(i)) * (ptOne.getDoublePosition$I(i) - ptTwo.getDoublePosition$I(i));

return distance;
}, p$1);

Clazz.newMeth(C$, 'createHashMap$java_util_Collection', function (points) {
var map=Clazz.new_(1,{K:"gnu.trove.list.array.TDoubleArrayList",V:"Object"},$I$(5,1));
for (var p, $p = points.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
var l=Clazz.array(Double.TYPE, [p.numDimensions$()]);
p.localize$DA(l);
map.put$TK$TV(Clazz.new_($I$(3,1).c$$DA,[l]), p);
}
return map;
}, 1);

Clazz.newMeth(C$, 'updateMinMax', function () {
var interval=$I$(1).getBoundsReal$java_util_Collection(this.points.values$());
interval.realMin$DA(this.min);
interval.realMax$DA(this.max);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
