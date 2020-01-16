(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.RealPoint','net.imglib2.RealPointSampleList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealPointSampleListWritableRealPointCollection", null, 'net.imglib2.roi.geom.real.NNSRealPointCollection', 'net.imglib2.roi.geom.real.WritableRealPointCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (points) {
C$.c$$net_imglib2_RealPointSampleList.apply(this, [C$.createRPSL$java_util_Collection(points)]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealPointSampleList', function (points) {
;C$.superclazz.c$$net_imglib2_IterableRealInterval.apply(this,[points]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['addPoint$TL'], function (point) {
if (point.numDimensions$() != this.n) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Point must have " + this.n + " dimensions" ]);
var pos=Clazz.array(Double.TYPE, [this.n]);
point.localize$DA(pos);
(this.points$()).add$net_imglib2_RealPoint$TT(Clazz.new_($I$(1,1).c$$DA,[pos]), point);
});

Clazz.newMeth(C$, 'createRPSL$java_util_Collection', function (points) {
var rpsl=Clazz.new_(1,{T:"Object"},$I$(2,1).c$$I,[points.iterator$().next$().numDimensions$()]);
for (var p, $p = points.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
rpsl.add$net_imglib2_RealPoint$TT(Clazz.new_($I$(1,1).c$$net_imglib2_RealLocalizable,[p]), p);
}
return rpsl;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
