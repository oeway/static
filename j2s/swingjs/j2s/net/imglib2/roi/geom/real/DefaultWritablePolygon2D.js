(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),p$1={},I$=[[0,['net.imglib2.roi.geom.real.DefaultWritablePolygon2D','.VertexList'],'net.imglib2.roi.geom.GeomMaths',['net.imglib2.roi.geom.real.DefaultWritablePolygon2D','.Polygon2DVertex'],'net.imglib2.roi.geom.real.Polyshape','net.imglib2.roi.geom.real.Polygon2D']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultWritablePolygon2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractRealInterval', 'net.imglib2.roi.geom.real.WritablePolygon2D');
C$.$classes$=[['Polygon2DVertex',2],['VertexList',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['x','net.imglib2.roi.geom.real.DefaultWritablePolygon2D.VertexList','+y']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (vertices) {
;C$.superclazz.c$$I.apply(this,[2]);C$.$init$.apply(this);
this.x=Clazz.new_($I$(1,1).c$$I, [this, null, vertices.size$()]);
this.y=Clazz.new_($I$(1,1).c$$I, [this, null, vertices.size$()]);
p$1.populateXY$java_util_List.apply(this, [vertices]);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA', function (x, y) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[$I$(2).getBoundsReal$DA$DA(x, y)]);C$.$init$.apply(this);
if (x.length == y.length) {
this.x=Clazz.new_($I$(1,1).c$$DA, [this, null, x]);
this.y=Clazz.new_($I$(1,1).c$$DA, [this, null, y]);
} else {
var l=x.length < y.length ? x.length : y.length;
this.x=Clazz.new_($I$(1,1).c$$I, [this, null, l]);
this.x.add$DA$I$I(x, 0, l);
this.y=Clazz.new_($I$(1,1).c$$I, [this, null, l]);
this.y.add$DA$I$I(y, 0, l);
}}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (localizable) {
return $I$(2).pnpoly$gnu_trove_list_array_TDoubleArrayList$gnu_trove_list_array_TDoubleArrayList$net_imglib2_RealLocalizable(this.x, this.y, localizable);
});

Clazz.newMeth(C$, 'vertex$I', function (pos) {
return Clazz.new_($I$(3,1).c$$I, [this, null, pos]);
});

Clazz.newMeth(C$, 'numVertices$', function () {
return this.x.size$();
});

Clazz.newMeth(C$, 'addVertex$I$net_imglib2_RealLocalizable', function (index, vertex) {
var px=vertex.getDoublePosition$I(0);
var py=vertex.getDoublePosition$I(1);
this.x.insert$I$D(index, px);
this.y.insert$I$D(index, py);
p$1.expandMinMax$D$D$D$D.apply(this, [px, py, px, py]);
});

Clazz.newMeth(C$, 'removeVertex$I', function (index) {
this.x.removeAt$I(index);
this.y.removeAt$I(index);
p$1.updateMinMax.apply(this, []);
});

Clazz.newMeth(C$, 'addVertices$I$java_util_Collection', function (index, vertices) {
this.x.makeRoom$I$I(index, vertices.size$());
this.y.makeRoom$I$I(index, vertices.size$());
var offset=index;
for (var vertex, $vertex = vertices.iterator$(); $vertex.hasNext$()&&((vertex=($vertex.next$())),1);) {
this.x.setQuick$I$D(offset, vertex.getDoublePosition$I(0));
this.y.setQuick$I$D(offset, vertex.getDoublePosition$I(1));
offset++;
}
var bounds=$I$(2).getBoundsReal$java_util_Collection(vertices);
p$1.expandMinMax$D$D$D$D.apply(this, [bounds.realMin$I(0), bounds.realMin$I(1), bounds.realMax$I(0), bounds.realMax$I(1)]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "net.imglib2.roi.geom.real.Polygon2D") && $I$(4).equals$net_imglib2_roi_geom_real_Polyshape$net_imglib2_roi_geom_real_Polyshape(this, obj) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(5).hashCode$net_imglib2_roi_geom_real_Polygon2D(this);
});

Clazz.newMeth(C$, 'populateXY$java_util_List', function (vertices) {
var minX=Infinity;
var minY=Infinity;
var maxX=-Infinity;
var maxY=-Infinity;
for (var i=0; i < vertices.size$(); i++) {
var xi=vertices.get$I(i).getDoublePosition$I(0);
var yi=vertices.get$I(i).getDoublePosition$I(1);
this.x.add$D(xi);
this.y.add$D(yi);
if (xi > maxX ) maxX=xi;
if (xi < minX ) minX=xi;
if (yi > maxY ) maxY=yi;
if (yi < minY ) minY=yi;
}
this.max[0]=maxX;
this.max[1]=maxY;
this.min[0]=minX;
this.min[1]=minY;
}, p$1);

Clazz.newMeth(C$, 'updateMinMax', function () {
this.min[0]=this.min[1]=Infinity;
this.max[0]=this.max[1]=-Infinity;
for (var i=0; i < this.numVertices$(); i++) {
var px=this.x.get$I(i);
var py=this.y.get$I(i);
p$1.expandMinMax$D$D$D$D.apply(this, [px, py, px, py]);
}
}, p$1);

Clazz.newMeth(C$, 'expandMinMax$D$D$D$D', function (xMin, yMin, xMax, yMax) {
if (xMax > this.max[0] ) this.max[0]=xMax;
if (yMax > this.max[1] ) this.max[1]=yMax;
if (xMin < this.min[0] ) this.min[0]=xMin;
if (yMin < this.min[1] ) this.min[1]=yMin;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultWritablePolygon2D, "Polygon2DVertex", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.roi.util.AbstractRealMaskPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['pos']]]

Clazz.newMeth(C$, 'c$$I', function (pos) {
;C$.superclazz.c$$DA.apply(this,[Clazz.array(Double.TYPE, -1, [this.this$0.x.get$I(pos), this.this$0.y.get$I(pos)])]);C$.$init$.apply(this);
this.pos=pos;
}, 1);

Clazz.newMeth(C$, 'updateBounds$', function () {
this.this$0.x.set$I$D(this.pos, this.position[0]);
this.this$0.y.set$I$D(this.pos, this.position[1]);
p$1.updateMinMax.apply(this.this$0, []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultWritablePolygon2D, "VertexList", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.list.array.TDoubleArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.superclazz.c$$I.apply(this,[size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (x) {
;C$.superclazz.c$$DA.apply(this,[x]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRoom$I$I', function (offset, count) {
this.ensureCapacity$I(this.size$() + count);
System.arraycopy$O$I$O$I$I(this._data, offset, this._data, offset + count, this.size$() - offset);
this._pos+=count;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
