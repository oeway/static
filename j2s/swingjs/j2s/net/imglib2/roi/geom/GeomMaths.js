(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom"),I$=[[0,'java.util.Arrays','net.imglib2.FinalInterval','net.imglib2.FinalRealInterval','java.util.ArrayList','net.imglib2.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeomMaths");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'lineContains$DA$DA$net_imglib2_RealLocalizable$I', function (endpointOne, endpointTwo, testPoint, dims) {
var directionVector=C$.computeDirectionVector$DA$DA$I(endpointOne, endpointTwo, dims);
var testVector=Clazz.array(Double.TYPE, [dims]);
var projection=0;
for (var d=0; d < dims; d++) {
testVector[d]=testPoint.getDoublePosition$I(d) - endpointOne[d];
projection += testVector[d] * directionVector[d];
}
var point=Clazz.array(Double.TYPE, [dims]);
var squaredDistance=0;
for (var d=0; d < dims; d++) {
point[d]=endpointOne[d] + (projection * directionVector[d]);
if (point[d] > Math.max(endpointOne[d], endpointTwo[d]) ) point[d]=Math.max(endpointOne[d], endpointTwo[d]);
if (point[d] < Math.min(endpointOne[d], endpointTwo[d]) ) point[d]=Math.min(endpointOne[d], endpointTwo[d]);
squaredDistance += (point[d] - testPoint.getDoublePosition$I(d)) * (point[d] - testPoint.getDoublePosition$I(d));
}
return squaredDistance <= 1.0E-15 ;
}, 1);

Clazz.newMeth(C$, 'pnpoly$gnu_trove_list_array_TDoubleArrayList$gnu_trove_list_array_TDoubleArrayList$net_imglib2_RealLocalizable', function (x, y, localizable) {
var xl=localizable.getDoublePosition$I(0);
var yl=localizable.getDoublePosition$I(1);
var i;
var j;
var result=false;
for (i=0, j=x.size$() - 1; i < x.size$(); j=i++) {
var xj=x.get$I(j);
var yj=y.get$I(j);
var xi=x.get$I(i);
var yi=y.get$I(i);
if ((yi > yl ) != (yj > yl )  && (xl < (xj - xi) * (yl - yi) / (yj - yi) + xi ) ) {
result=!result;
}}
return result;
}, 1);

Clazz.newMeth(C$, 'getBounds$java_util_Collection', function (vertices) {
Clazz.assert(C$, this, function(){return (vertices.size$() != 0)});
var numDims=vertices.iterator$().next$().numDimensions$();
var min=Clazz.array(Long.TYPE, [numDims]);
$I$(1).fill$JA$J(min, 9223372036854775807);
var max=Clazz.array(Long.TYPE, [numDims]);
$I$(1).fill$JA$J(max, -9223372036854775808);
for (var l, $l = vertices.iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) {
for (var d=0; d < numDims; d++) {
var pos=l.getLongPosition$I(d);
if (pos < min[d]) min[d]=pos;
if (pos > max[d]) max[d]=pos;
}
}
return Clazz.new_($I$(2,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'getBoundsReal$java_util_Collection', function (vertices) {
Clazz.assert(C$, this, function(){return (vertices.size$() != 0)});
var numDims=vertices.iterator$().next$().numDimensions$();
var min=Clazz.array(Double.TYPE, [numDims]);
$I$(1).fill$DA$D(min, Infinity);
var max=Clazz.array(Double.TYPE, [numDims]);
$I$(1).fill$DA$D(max, -Infinity);
for (var l, $l = vertices.iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) {
for (var d=0; d < numDims; d++) {
var pos=l.getDoublePosition$I(d);
if (pos < min[d] ) min[d]=pos;
if (pos > max[d] ) max[d]=pos;
}
}
return Clazz.new_($I$(3,1).c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'getBoundsReal$DAA', function (vertices) {
var dims=vertices[0].length;
var min=Clazz.array(Double.TYPE, [dims]);
var max=Clazz.array(Double.TYPE, [dims]);
var maxValue;
var minValue;
for (var i=0; i < dims; i++) {
maxValue=vertices[0][i];
minValue=vertices[0][i];
for (var j=1; j < vertices.length; j++) {
if (vertices[j][i] < minValue ) minValue=vertices[j][i];
if (vertices[j][i] > maxValue ) maxValue=vertices[j][i];
}
min[i]=minValue;
max[i]=maxValue;
}
return Clazz.new_($I$(3,1).c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'getBoundsReal$DA$DA', function (x, y) {
var l=x.length <= y.length ? x.length : y.length;
var min=Clazz.array(Double.TYPE, -1, [x[0], y[0]]);
var max=Clazz.array(Double.TYPE, -1, [x[0], y[0]]);
for (var i=1; i < l; i++) {
var xi=x[i];
var yi=y[i];
if (xi < min[0] ) min[0]=xi;
if (xi > max[0] ) max[0]=xi;
if (yi < min[1] ) min[1]=yi;
if (yi > max[1] ) max[1]=yi;
}
return Clazz.new_($I$(3,1).c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'bresenham$java_util_List', function (vertices) {
Clazz.assert(C$, this, function(){return (vertices.size$() > 1)});
Clazz.assert(C$, this, function(){return (vertices.iterator$().next$().numDimensions$() == 2)});
var tmp=Clazz.new_(1,{E:"net.imglib2.Localizable"},$I$(4,1));
for (var i=0; i < vertices.size$(); i++) {
var x0=Math.round(vertices.get$I(i).getDoublePosition$I(0));
var y0=Math.round(vertices.get$I(i).getDoublePosition$I(1));
var x1=Math.round(vertices.get$I((i + 1) % vertices.size$()).getDoublePosition$I(0));
var y1=Math.round(vertices.get$I((i + 1) % vertices.size$()).getDoublePosition$I(1));
var dx=Math.abs(x1 - x0);
var sx=x0 < x1 ? 1 : -1;
var dy=-Math.abs(y1 - y0);
var sy=y0 < y1 ? 1 : -1;
var err=dx + dy;
var e2;
while (true){
tmp.add$TE(Clazz.new_($I$(5,1).c$$JA,[[x0, y0]]));
if (x0 == x1 && y0 == y1 ) break;
e2=2 * err;
if (e2 > dy) {
err+=dy;
x0+=sx;
}if (e2 < dx) {
err+=dx;
y0+=sy;
}}
tmp.remove$I(tmp.size$() - 1);
}
return tmp;
}, 1);

Clazz.newMeth(C$, 'computeDirectionVector$DA$DA$I', function (pointOne, pointTwo, dims) {
var directionVector=Clazz.array(Double.TYPE, [dims]);
var magnitude=0;
for (var d=0; d < dims; d++) {
directionVector[d]=pointTwo[d] - pointOne[d];
magnitude += directionVector[d] * directionVector[d];
}
magnitude=Math.sqrt(magnitude);
for (var d=0; d < dims; d++) {
directionVector[d]=directionVector[d] / magnitude;
}
return directionVector;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
