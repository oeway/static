(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[[0,'net.imglib2.util.KthElement','net.imglib2.util.Intervals','net.imglib2.img.array.ArrayImgFactory','net.imglib2.img.cell.CellImgFactory','net.imglib2.img.list.ListImgFactory','net.imglib2.type.operators.ValueEquals','net.imglib2.view.Views','java.util.stream.StreamSupport','net.imglib2.type.numeric.ComplexType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Util");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'genericArray$I', function (length) {
return (Clazz.array(java.lang.Object, [length]));
}, 1);

Clazz.newMeth(C$, 'log2$D', function (value) {
return Math.log(value) / Math.log(2.0);
}, 1);

Clazz.newMeth(C$, 'getArrayFromValue$D$I', function (value, numDimensions) {
var values=Clazz.array(Double.TYPE, [numDimensions]);
for (var d=0; d < numDimensions; ++d) values[d]=value;

return values;
}, 1);

Clazz.newMeth(C$, 'getArrayFromValue$F$I', function (value, numDimensions) {
var values=Clazz.array(Float.TYPE, [numDimensions]);
for (var d=0; d < numDimensions; ++d) values[d]=value;

return values;
}, 1);

Clazz.newMeth(C$, 'getArrayFromValue$I$I', function (value, numDimensions) {
var values=Clazz.array(Integer.TYPE, [numDimensions]);
for (var d=0; d < numDimensions; ++d) values[d]=value;

return values;
}, 1);

Clazz.newMeth(C$, 'getArrayFromValue$J$I', function (value, numDimensions) {
var values=Clazz.array(Long.TYPE, [numDimensions]);
for (var d=0; d < numDimensions; ++d) values[d]=value;

return values;
}, 1);

Clazz.newMeth(C$, 'distance$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable', function (position1, position2) {
var dist=0;
var n=position1.numDimensions$();
for (var d=0; d < n; ++d) {
var pos=position2.getDoublePosition$I(d) - position1.getDoublePosition$I(d);
dist += pos * pos;
}
return Math.sqrt(dist);
}, 1);

Clazz.newMeth(C$, 'distance$JA$JA', function (position1, position2) {
var dist=0;
for (var d=0; d < position1.length; ++d) {
var pos=position2[d] - position1[d];
dist += pos * pos;
}
return Math.sqrt(dist);
}, 1);

Clazz.newMeth(C$, 'percentile$DA$D', function (values, percentile) {
var temp=values.clone$();
var length=temp.length;
var pos=Math.min(length - 1, Math.max(0, (Math.round((length - 1) * percentile)|0)));
$I$(1).kthElement$I$DA(pos, temp);
return temp[pos];
}, 1);

Clazz.newMeth(C$, 'averageDouble$java_util_List', function (values) {
var size=values.size$();
var avg=0;
for (var v, $v = values.iterator$(); $v.hasNext$()&&((v=($v.next$()).objectValue$()),1);) avg += v / size;

return avg;
}, 1);

Clazz.newMeth(C$, 'averageFloat$java_util_List', function (values) {
var size=values.size$();
var avg=0;
for (var v, $v = values.iterator$(); $v.hasNext$()&&((v=($v.next$()).objectValue$()),1);) avg += v / size;

return avg;
}, 1);

Clazz.newMeth(C$, 'min$java_util_List', function (values) {
var min=3.4028235E38;
for (var v, $v = values.iterator$(); $v.hasNext$()&&((v=($v.next$()).objectValue$()),1);) if (v < min ) min=v;

return min;
}, 1);

Clazz.newMeth(C$, 'max$java_util_List', function (values) {
var max=-3.4028235E38;
for (var v, $v = values.iterator$(); $v.hasNext$()&&((v=($v.next$()).objectValue$()),1);) if (v > max ) max=v;

return max;
}, 1);

Clazz.newMeth(C$, 'average$FA', function (values) {
var size=values.length;
var avg=0;
for (var v, $v = 0, $$v = values; $v<$$v.length&&((v=($$v[$v])),1);$v++) avg += v / size;

return avg;
}, 1);

Clazz.newMeth(C$, 'average$DA', function (values) {
var size=values.length;
var avg=0;
for (var v, $v = 0, $$v = values; $v<$$v.length&&((v=($$v[$v])),1);$v++) avg += v / size;

return avg;
}, 1);

Clazz.newMeth(C$, 'min$DA', function (values) {
var min=values[0];
for (var v, $v = 0, $$v = values; $v<$$v.length&&((v=($$v[$v])),1);$v++) if (v < min ) min=v;

return min;
}, 1);

Clazz.newMeth(C$, 'max$DA', function (values) {
var max=values[0];
for (var v, $v = 0, $$v = values; $v<$$v.length&&((v=($$v[$v])),1);$v++) if (v > max ) max=v;

return max;
}, 1);

Clazz.newMeth(C$, 'median$JA', function (values) {
var temp=values.clone$();
var median;
var length=temp.length;
C$.quicksort$JA$I$I(temp, 0, length - 1);
if (length % 2 == 1) median=temp[(length/2|0)];
 else median=((temp[(length/2|0)] + temp[((length/2|0)) - 1])/2|0);
return median;
}, 1);

Clazz.newMeth(C$, 'median$DA', function (values) {
var temp=values.clone$();
var median;
var length=temp.length;
C$.quicksort$DA$I$I(temp, 0, length - 1);
if (length % 2 == 1) median=temp[(length/2|0)];
 else median=(temp[(length/2|0)] + temp[((length/2|0)) - 1]) / 2;
return median;
}, 1);

Clazz.newMeth(C$, 'median$FA', function (values) {
var temp=values.clone$();
var median;
var length=temp.length;
C$.quicksort$FA$I$I(temp, 0, length - 1);
if (length % 2 == 1) median=temp[(length/2|0)];
 else median=(temp[(length/2|0)] + temp[((length/2|0)) - 1]) / 2;
return median;
}, 1);

Clazz.newMeth(C$, 'quicksort$JA', function (data) {
C$.quicksort$JA$I$I(data, 0, data.length - 1);
}, 1);

Clazz.newMeth(C$, 'quicksort$JA$I$I', function (data, left, right) {
if (data == null  || data.length < 2 ) return;
var i=left;
var j=right;
var x=data[((left + right)/2|0)];
do {
while (data[i] < x)i++;

while (x < data[j])j--;

if (i <= j) {
var temp=data[i];
data[i]=data[j];
data[j]=temp;
i++;
j--;
}} while (i <= j);
if (left < j) C$.quicksort$JA$I$I(data, left, j);
if (i < right) C$.quicksort$JA$I$I(data, i, right);
}, 1);

Clazz.newMeth(C$, 'quicksort$DA', function (data) {
C$.quicksort$DA$I$I(data, 0, data.length - 1);
}, 1);

Clazz.newMeth(C$, 'quicksort$DA$I$I', function (data, left, right) {
if (data == null  || data.length < 2 ) return;
var i=left;
var j=right;
var x=data[((left + right)/2|0)];
do {
while (data[i] < x )i++;

while (x < data[j] )j--;

if (i <= j) {
var temp=data[i];
data[i]=data[j];
data[j]=temp;
i++;
j--;
}} while (i <= j);
if (left < j) C$.quicksort$DA$I$I(data, left, j);
if (i < right) C$.quicksort$DA$I$I(data, i, right);
}, 1);

Clazz.newMeth(C$, 'quicksort$FA', function (data) {
C$.quicksort$FA$I$I(data, 0, data.length - 1);
}, 1);

Clazz.newMeth(C$, 'quicksort$FA$I$I', function (data, left, right) {
if (data == null  || data.length < 2 ) return;
var i=left;
var j=right;
var x=data[((left + right)/2|0)];
do {
while (data[i] < x )i++;

while (x < data[j] )j--;

if (i <= j) {
var temp=data[i];
data[i]=data[j];
data[j]=temp;
i++;
j--;
}} while (i <= j);
if (left < j) C$.quicksort$FA$I$I(data, left, j);
if (i < right) C$.quicksort$FA$I$I(data, i, right);
}, 1);

Clazz.newMeth(C$, 'quicksort$DA$IA$I$I', function (data, sortAlso, left, right) {
if (data == null  || data.length < 2 ) return;
var i=left;
var j=right;
var x=data[((left + right)/2|0)];
do {
while (data[i] < x )i++;

while (x < data[j] )j--;

if (i <= j) {
var temp=data[i];
data[i]=data[j];
data[j]=temp;
var temp2=sortAlso[i];
sortAlso[i]=sortAlso[j];
sortAlso[j]=temp2;
i++;
j--;
}} while (i <= j);
if (left < j) C$.quicksort$DA$IA$I$I(data, sortAlso, left, j);
if (i < right) C$.quicksort$DA$IA$I$I(data, sortAlso, i, right);
}, 1);

Clazz.newMeth(C$, 'gLog$D$D', function (z, c) {
if (c == 0 ) return z;
return Math.log10((z + Math.sqrt(z * z + c * c)) / 2.0);
}, 1);

Clazz.newMeth(C$, 'gLog$F$F', function (z, c) {
if (c == 0 ) return z;
return Math.log10((z + Math.sqrt(z * z + c * c)) / 2.0);
}, 1);

Clazz.newMeth(C$, 'gLogInv$D$D', function (w, c) {
if (c == 0 ) return w;
return Math.pow(10, w) - (((c * c) * Math.pow(10, -w)) / 4.0);
}, 1);

Clazz.newMeth(C$, 'gLogInv$F$F', function (w, c) {
if (c == 0 ) return w;
return Math.pow(10, w) - (((c * c) * Math.pow(10, -w)) / 4.0);
}, 1);

Clazz.newMeth(C$, 'isApproxEqual$F$F$F', function (a, b, threshold) {
if (a == b ) return true;
 else if (a + threshold > b  && a - threshold < b  ) return true;
 else return false;
}, 1);

Clazz.newMeth(C$, 'isApproxEqual$D$D$D', function (a, b, threshold) {
if (a == b ) return true;
 else if (a + threshold > b  && a - threshold < b  ) return true;
 else return false;
}, 1);

Clazz.newMeth(C$, 'round$F', function (value) {
return ((value + (0.5 * Math.signum(value)))|0);
}, 1);

Clazz.newMeth(C$, 'round$D', function (value) {
return ((value + (0.5 * Math.signum(value)))|0);
}, 1);

Clazz.newMeth(C$, 'createGaussianKernel1DDouble$D$Z', function (sigma, normalize) {
var size=3;
var gaussianKernel;
if (sigma <= 0 ) {
gaussianKernel=Clazz.array(Double.TYPE, [3]);
gaussianKernel[1]=1;
} else {
size=Math.max(3, (2 * ((3 * sigma + 0.5)|0) + 1));
var two_sq_sigma=2 * sigma * sigma ;
gaussianKernel=Clazz.array(Double.TYPE, [size]);
for (var x=(size/2|0); x >= 0; --x) {
var val=Math.exp(-(x * x) / two_sq_sigma);
gaussianKernel[(size/2|0) - x]=val;
gaussianKernel[(size/2|0) + x]=val;
}
}if (normalize) {
var sum=0;
for (var value, $value = 0, $$value = gaussianKernel; $value<$$value.length&&((value=($$value[$value])),1);$value++) sum += value;

for (var i=0; i < gaussianKernel.length; ++i) gaussianKernel[i] /= sum;

}return gaussianKernel;
}, 1);

Clazz.newMeth(C$, 'getSuggestedKernelDiameter$D', function (sigma) {
var size=3;
if (sigma > 0 ) size=Math.max(3, (2 * ((3 * sigma + 0.5)|0) + 1));
return size;
}, 1);

Clazz.newMeth(C$, 'printCoordinates$FA', function (value) {
var out="(Array empty)";
if (value == null  || value.length == 0 ) return out;
out="(" + new Float(value[0]).toString();
for (var i=1; i < value.length; i++) out += ", " + new Float(value[i]).toString();

out += ")";
return out;
}, 1);

Clazz.newMeth(C$, 'printCoordinates$DA', function (value) {
var out="(Array empty)";
if (value == null  || value.length == 0 ) return out;
out="(" + new Double(value[0]).toString();
for (var i=1; i < value.length; i++) out += ", " + new Double(value[i]).toString();

out += ")";
return out;
}, 1);

Clazz.newMeth(C$, 'printCoordinates$net_imglib2_RealLocalizable', function (localizable) {
var out="(RealLocalizable empty)";
if (localizable == null  || localizable.numDimensions$() == 0 ) return out;
out="(" + new Float(localizable.getFloatPosition$I(0)).toString();
for (var i=1; i < localizable.numDimensions$(); i++) out += ", " + new Float(localizable.getFloatPosition$I(i)).toString();

out += ")";
return out;
}, 1);

Clazz.newMeth(C$, 'printInterval$net_imglib2_Interval', function (interval) {
var out="(Interval empty)";
if (interval == null  || interval.numDimensions$() == 0 ) return out;
out="[" + interval.min$I(0);
for (var i=1; i < interval.numDimensions$(); i++) out += ", " + interval.min$I(i);

out += "] -> [" + interval.max$I(0);
for (var i=1; i < interval.numDimensions$(); i++) out += ", " + interval.max$I(i);

out += "], dimensions (" + interval.dimension$I(0);
for (var i=1; i < interval.numDimensions$(); i++) out += ", " + interval.dimension$I(i);

out += ")";
return out;
}, 1);

Clazz.newMeth(C$, 'printCoordinates$IA', function (value) {
var out="(Array empty)";
if (value == null  || value.length == 0 ) return out;
out="(" + value[0];
for (var i=1; i < value.length; i++) out += ", " + value[i];

out += ")";
return out;
}, 1);

Clazz.newMeth(C$, 'printCoordinates$JA', function (value) {
var out="(Array empty)";
if (value == null  || value.length == 0 ) return out;
out="(" + value[0];
for (var i=1; i < value.length; i++) out += ", " + value[i];

out += ")";
return out;
}, 1);

Clazz.newMeth(C$, 'printCoordinates$ZA', function (value) {
var out="(Array empty)";
if (value == null  || value.length == 0 ) return out;
out="(";
if (value[0]) out += "1";
 else out += "0";
for (var i=1; i < value.length; i++) {
out += ", ";
if (value[i]) out += "1";
 else out += "0";
}
out += ")";
return out;
}, 1);

Clazz.newMeth(C$, 'pow$I$I', function (a, b) {
if (b == 0) return 1;
 else if (b == 1) return a;
 else {
var result=a;
for (var i=1; i < b; i++) result*=a;

return result;
}}, 1);

Clazz.newMeth(C$, 'max$TT$TT', function (value1, value2) {
if (value1.compareTo$(value2) >= 0) return value1;
 else return value2;
}, 1);

Clazz.newMeth(C$, 'min$TT$TT', function (value1, value2) {
if (value1.compareTo$(value2) <= 0) return value1;
 else return value2;
}, 1);

Clazz.newMeth(C$, 'long2int$JA', function (a) {
var i=Clazz.array(Integer.TYPE, [a.length]);
for (var d=0; d < a.length; ++d) i[d]=(a[d]|0);

return i;
}, 1);

Clazz.newMeth(C$, 'int2long$IA', function (i) {
var l=Clazz.array(Long.TYPE, [i.length]);
for (var d=0; d < l.length; ++d) l[d]=i[d];

return l;
}, 1);

Clazz.newMeth(C$, 'getTypeFromInterval$TF', function (rai) {
var randomAccess=rai.randomAccess$();
rai.min$net_imglib2_Positionable(randomAccess);
return randomAccess.get$();
}, 1);

Clazz.newMeth(C$, 'getTypeFromRealInterval$TF', function (rai) {
var realRandomAccess=rai.realRandomAccess$();
rai.realMin$net_imglib2_RealPositionable(realRandomAccess);
return realRandomAccess.get$();
}, 1);

Clazz.newMeth(C$, 'getArrayOrCellImgFactory$net_imglib2_Dimensions$TT', function (targetSize, type) {
if ($I$(2).numElements$net_imglib2_Dimensions(targetSize) <= 2147483647) return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$TT,[type]);
var cellSize=(Math.pow(2147483647 / type.getEntitiesPerPixel$().getRatio$(), 1.0 / targetSize.numDimensions$())|0);
return Clazz.new_(1,{T:"Object"},$I$(4,1).c$$TT$IA,[type, [cellSize]]);
}, 1);

Clazz.newMeth(C$, 'getArrayOrCellImgFactory$net_imglib2_Dimensions$I$TT', function (targetSize, targetCellSize, type) {
if ($I$(2).numElements$net_imglib2_Dimensions(targetSize) <= 2147483647) return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$TT,[type]);
var cellSize;
if (Math.pow(targetCellSize, targetSize.numDimensions$()) <= 2147483647 ) cellSize=targetCellSize;
 else cellSize=(Math.pow(2147483647 / type.getEntitiesPerPixel$().getRatio$(), 1.0 / targetSize.numDimensions$())|0);
return Clazz.new_(1,{T:"Object"},$I$(4,1).c$$TT$IA,[type, [cellSize]]);
}, 1);

Clazz.newMeth(C$, 'getSuitableImgFactory$net_imglib2_Dimensions$TT', function (targetSize, type) {
if (Clazz.instanceOf(type, "net.imglib2.type.NativeType")) {
var arrayOrCellImgFactory=C$.getArrayOrCellImgFactory$net_imglib2_Dimensions$TT(targetSize, type);
return arrayOrCellImgFactory;
}return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT,[type]);
}, 1);

Clazz.newMeth(C$, 'ldu$I', function (v) {
var c=0;
do {
v>>=1;
++c;
} while (v > 1);
return c;
}, 1);

Clazz.newMeth(C$, 'equalIterationOrder$net_imglib2_IterableIntervalA', function (intervals) {
var order=intervals[0].iterationOrder$();
for (var i=1; i < intervals.length; i++) {
if (!order.equals$O(intervals[i].iterationOrder$())) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'locationsEqual$net_imglib2_Localizable$net_imglib2_Localizable', function (l1, l2) {
var numDims=l1.numDimensions$();
if (l2.numDimensions$() != numDims) return false;
for (var d=0; d < numDims; d++) {
if (l1.getLongPosition$I(d) != l2.getLongPosition$I(d)) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'locationsEqual$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable', function (l1, l2) {
var numDims=l1.numDimensions$();
if (l2.numDimensions$() != numDims) return false;
for (var d=0; d < numDims; d++) {
if (l1.getDoublePosition$I(d) != l2.getDoublePosition$I(d) ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'imagesEqual$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval', function (a, b) {
return C$.imagesEqual$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$java_util_function_BiPredicate(a, b, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Util$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiPredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['test$'], function (t,u) { return t.valueEquals$.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"",U:""},P$.Util$lambda1.$init$, [this, null])})($I$(6)));
}, 1);

Clazz.newMeth(C$, 'imagesEqual$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$java_util_function_BiPredicate', function (a, b, pixelEquals) {
if (!$I$(2).equals$net_imglib2_Interval$net_imglib2_Interval(a, b)) return false;
for (var pair, $pair = $I$(7).interval$net_imglib2_RandomAccessible$net_imglib2_Interval($I$(7).pair$net_imglib2_RandomAccessible$net_imglib2_RandomAccessible(a, b), b).iterator$(); $pair.hasNext$()&&((pair=($pair.next$())),1);) if (!pixelEquals.test$(pair.getA$(), pair.getB$())) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'min$DA$DA', function (a, b) {
for (var i=0; i < a.length; ++i) if (b[i] < a[i] ) a[i]=b[i];

}, 1);

Clazz.newMeth(C$, 'max$DA$DA', function (a, b) {
for (var i=0; i < a.length; ++i) if (b[i] > a[i] ) a[i]=b[i];

}, 1);

Clazz.newMeth(C$, 'asDoubleArray$Iterable', function (iterable) {
return $I$(8).stream$java_util_Spliterator$Z(iterable.spliterator$(), false).mapToDouble$java_util_function_ToDoubleFunction((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Util$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToDoubleFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsDouble$', function (t) { return t.getRealDouble$.apply(t,[])});
})()
)); return Clazz.new_(1,{T:"_.? super "},P$.Util$lambda2.$init$, [this, null])})($I$(9))).toArray$();
}, 1);

Clazz.newMeth(C$, 'asDoubleArray$net_imglib2_RandomAccessibleInterval', function (rai) {
return C$.asDoubleArray$Iterable($I$(7).flatIterable$net_imglib2_RandomAccessibleInterval(rai));
}, 1);

Clazz.newMeth(C$, 'asDoubleArray$net_imglib2_img_Img', function (image) {
return C$.asDoubleArray$net_imglib2_RandomAccessibleInterval(image);
}, 1);

Clazz.newMeth(C$, 'valueEqualsObject$TT$O', function (a, b) {
if (!a.getClass$().isInstance$O(b)) return false;
var t=b;
return a.valueEquals$(t);
}, 1);

Clazz.newMeth(C$, 'combineHash$I$I', function (hash1, hash2) {
return 31 * hash1 + hash2;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
