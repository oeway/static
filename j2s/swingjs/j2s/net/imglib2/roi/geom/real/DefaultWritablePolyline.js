(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),p$1={},I$=[[0,'net.imglib2.roi.geom.GeomMaths','java.util.ArrayList',['net.imglib2.roi.geom.real.DefaultWritablePolyline','.PolylineVertex'],'java.util.stream.Collectors','net.imglib2.roi.geom.real.Polyshape','net.imglib2.roi.geom.real.Polyline','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultWritablePolyline", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractRealInterval', 'net.imglib2.roi.geom.real.WritablePolyline');
C$.$classes$=[['PolylineVertex',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['vertices','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (vertices) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[$I$(1).getBoundsReal$java_util_Collection(vertices)]);C$.$init$.apply(this);
this.vertices=Clazz.new_(1,{E:"double[]"},$I$(2,1).c$$I,[vertices.size$()]);
for (var i=0; i < vertices.size$(); i++) {
var p=Clazz.array(Double.TYPE, [this.n]);
for (var d=0; d < this.n; d++) {
p[d]=vertices.get$I(i).getDoublePosition$I(d);
}
this.vertices.add$TE(p);
}
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
for (var i=1; i < this.vertices.size$(); i++) {
var ptOne=this.vertices.get$I(i - 1);
var ptTwo=this.vertices.get$I(i);
var testLineContains=$I$(1).lineContains$DA$DA$net_imglib2_RealLocalizable$I(ptOne, ptTwo, l, this.n);
if (testLineContains) return true;
}
return false;
});

Clazz.newMeth(C$, 'vertex$I', function (pos) {
return Clazz.new_($I$(3,1).c$$DA, [this, null, this.vertices.get$I(pos)]);
});

Clazz.newMeth(C$, 'numVertices$', function () {
return this.vertices.size$();
});

Clazz.newMeth(C$, 'addVertex$I$net_imglib2_RealLocalizable', function (index, vertex) {
if (vertex.numDimensions$() < this.n) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Vertex must have at least" + this.n + " dimensions" ]);
var p=Clazz.array(Double.TYPE, [this.n]);
for (var d=0; d < this.n; d++) p[d]=vertex.getDoublePosition$I(d);

this.vertices.add$I$TE(index, p);
p$1.expandMinMax$DA$DA.apply(this, [p, p]);
});

Clazz.newMeth(C$, 'removeVertex$I', function (index) {
this.vertices.remove$I(index);
p$1.updateMinMax.apply(this, []);
});

Clazz.newMeth(C$, 'addVertices$I$java_util_Collection', function (index, newVertices) {
this.vertices.addAll$I$java_util_Collection(index, newVertices.stream$().map$java_util_function_Function((P$.DefaultWritablePolyline$lambda1$||(P$.DefaultWritablePolyline$lambda1$=(((P$.DefaultWritablePolyline$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DefaultWritablePolyline$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (vertex) {
if (vertex.numDimensions$() < this.b$['net.imglib2.roi.geom.real.DefaultWritablePolyline'].n) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Vertex must have at least" + this.b$['net.imglib2.roi.geom.real.DefaultWritablePolyline'].n + " dimensions" ]);
var p=Clazz.array(Double.TYPE, [this.b$['net.imglib2.roi.geom.real.DefaultWritablePolyline'].n]);
for (var d=0; d < this.b$['net.imglib2.roi.geom.real.DefaultWritablePolyline'].n; d++) p[d]=vertex.getDoublePosition$I(d);

return p;
});
})()
), Clazz.new_(1,{T:"? super net.imglib2.RealLocalizable",R:"_.? extends double[]"},P$.DefaultWritablePolyline$lambda1.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(4).toList$()));
var offset=index;
for (var i=0; i < newVertices.size$(); i++) {
var vertex=this.vertices.get$I(offset++);
p$1.expandMinMax$DA$DA.apply(this, [vertex, vertex]);
}
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "net.imglib2.roi.geom.real.Polyline") && $I$(5).equals$net_imglib2_roi_geom_real_Polyshape$net_imglib2_roi_geom_real_Polyshape(this, obj) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(6).hashCode$net_imglib2_roi_geom_real_Polyline(this);
});

Clazz.newMeth(C$, 'updateMinMax', function () {
$I$(7).fill$DA$D(this.min, Infinity);
$I$(7).fill$DA$D(this.max, -Infinity);
for (var vertex, $vertex = this.vertices.iterator$(); $vertex.hasNext$()&&((vertex=($vertex.next$())),1);) {
p$1.expandMinMax$DA$DA.apply(this, [vertex, vertex]);
}
}, p$1);

Clazz.newMeth(C$, 'expandMinMax$DA$DA', function (mn, mx) {
for (var d=0; d < this.numDimensions$(); d++) {
if (mx[d] > this.max[d] ) this.max[d]=mx[d];
if (mn[d] < this.min[d] ) this.min[d]=mn[d];
}
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultWritablePolyline, "PolylineVertex", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.roi.util.AbstractRealMaskPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (pos) {
;C$.superclazz.c$$DA.apply(this,[pos]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateBounds$', function () {
p$1.updateMinMax.apply(this.this$0, []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
