(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.ops.MatrixFeatures','org.ejml.ops.NormOps','org.ejml.ops.CommonOps','org.ejml.data.DenseMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SpecializedOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createReflector$org_ejml_data_RowD1Matrix64F', function (u) {
if (!$I$(1).isVector$org_ejml_data_D1Matrix64F(u)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["u must be a vector"]);
var norm=$I$(2).fastNormF$org_ejml_data_D1Matrix64F(u);
var gamma=-2.0 / (norm * norm);
var Q=$I$(3).identity$I(u.getNumElements$());
$I$(3).multAddTransB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(gamma, u, u, Q);
return Q;
}, 1);

Clazz.newMeth(C$, 'createReflector$org_ejml_data_DenseMatrix64F$D', function (u, gamma) {
if (!$I$(1).isVector$org_ejml_data_D1Matrix64F(u)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["u must be a vector"]);
var Q=$I$(3).identity$I(u.getNumElements$());
$I$(3).multAddTransB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(-gamma, u, u, Q);
return Q;
}, 1);

Clazz.newMeth(C$, 'copyChangeRow$IA$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (order, src, dst) {
if (dst == null ) {
dst=Clazz.new_($I$(4,1).c$$I$I,[src.numRows, src.numCols]);
} else if (src.numRows != dst.numRows || src.numCols != dst.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["src and dst must have the same dimensions."]);
}for (var i=0; i < src.numRows; i++) {
var indexDst=i * src.numCols;
var indexSrc=order[i] * src.numCols;
System.arraycopy$O$I$O$I$I(src.data, indexSrc, dst.data, indexDst, src.numCols);
}
return dst;
}, 1);

Clazz.newMeth(C$, 'copyTriangle$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$Z', function (src, dst, upper) {
if (dst == null ) {
dst=Clazz.new_($I$(4,1).c$$I$I,[src.numRows, src.numCols]);
} else if (src.numRows != dst.numRows || src.numCols != dst.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["src and dst must have the same dimensions."]);
}if (upper) {
var N=Math.min(src.numRows, src.numCols);
for (var i=0; i < N; i++) {
var index=i * src.numCols + i;
System.arraycopy$O$I$O$I$I(src.data, index, dst.data, index, src.numCols - i);
}
} else {
for (var i=0; i < src.numRows; i++) {
var length=Math.min(i + 1, src.numCols);
var index=i * src.numCols;
System.arraycopy$O$I$O$I$I(src.data, index, dst.data, index, length);
}
}return dst;
}, 1);

Clazz.newMeth(C$, 'diffNormF$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Both matrices must have the same shape."]);
}var size=a.getNumElements$();
var diff=Clazz.new_($I$(4,1).c$$I$I,[size, 1]);
for (var i=0; i < size; i++) {
diff.set$I$D(i, b.get$I(i) - a.get$I(i));
}
return $I$(2).normF$org_ejml_data_D1Matrix64F(diff);
}, 1);

Clazz.newMeth(C$, 'diffNormF_fast$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Both matrices must have the same shape."]);
}var size=a.getNumElements$();
var total=0;
for (var i=0; i < size; i++) {
var diff=b.get$I(i) - a.get$I(i);
total += diff * diff;
}
return Math.sqrt(total);
}, 1);

Clazz.newMeth(C$, 'diffNormP1$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Both matrices must have the same shape."]);
}var size=a.getNumElements$();
var total=0;
for (var i=0; i < size; i++) {
total += Math.abs(b.get$I(i) - a.get$I(i));
}
return total;
}, 1);

Clazz.newMeth(C$, 'addIdentity$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$D', function (A, B, alpha) {
if (A.numCols != A.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A must be square"]);
if (B.numCols != A.numCols || B.numRows != A.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["B must be the same shape as A"]);
var n=A.numCols;
var index=0;
for (var i=0; i < n; i++) {
for (var j=0; j < n; j++, index++) {
if (i == j) {
B.set$I$D(index, A.get$I(index) + alpha);
} else {
B.set$I$D(index, A.get$I(index));
}}
}
}, 1);

Clazz.newMeth(C$, 'subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F', function (A, rowA, colA, length, row, offsetV, v) {
if (row) {
for (var i=0; i < length; i++) {
v.set$I$D(offsetV + i, A.get$I$I(rowA, colA + i));
}
} else {
for (var i=0; i < length; i++) {
v.set$I$D(offsetV + i, A.get$I$I(rowA + i, colA));
}
}}, 1);

Clazz.newMeth(C$, 'splitIntoVectors$org_ejml_data_RowD1Matrix64F$Z', function (A, column) {
var w=column ? A.numCols : A.numRows;
var M=column ? A.numRows : 1;
var N=column ? 1 : A.numCols;
var o=Math.max(M, N);
var ret=Clazz.array($I$(4), [w]);
for (var i=0; i < w; i++) {
var a=Clazz.new_($I$(4,1).c$$I$I,[M, N]);
if (column) C$.subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F(A, 0, i, o, false, 0, a);
 else C$.subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F(A, i, 0, o, true, 0, a);
ret[i]=a;
}
return ret;
}, 1);

Clazz.newMeth(C$, 'pivotMatrix$org_ejml_data_DenseMatrix64F$IA$I$Z', function (ret, pivots, numPivots, transposed) {
if (ret == null ) {
ret=Clazz.new_($I$(4,1).c$$I$I,[numPivots, numPivots]);
} else {
if (ret.numCols != numPivots || ret.numRows != numPivots ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension"]);
$I$(3).fill$org_ejml_data_D1Matrix64F$D(ret, 0);
}if (transposed) {
for (var i=0; i < numPivots; i++) {
ret.set$I$I$D(pivots[i], i, 1);
}
} else {
for (var i=0; i < numPivots; i++) {
ret.set$I$I$D(i, pivots[i], 1);
}
}return ret;
}, 1);

Clazz.newMeth(C$, 'diagProd$org_ejml_data_RowD1Matrix64F', function (T) {
var prod=1.0;
var N=Math.min(T.numRows, T.numCols);
for (var i=0; i < N; i++) {
prod *= T.unsafe_get$I$I(i, i);
}
return prod;
}, 1);

Clazz.newMeth(C$, 'qualityTriangular$Z$org_ejml_data_D1Matrix64F', function (upper, T) {
var N=Math.min(T.numRows, T.numCols);
var max=$I$(3).elementMaxAbs$org_ejml_data_D1Matrix64F(T);
if (max == 0.0 ) return 0.0;
var quality=1.0;
for (var i=0; i < N; i++) {
quality *= T.unsafe_get$I$I(i, i) / max;
}
return Math.abs(quality);
}, 1);

Clazz.newMeth(C$, 'elementSumSq$org_ejml_data_D1Matrix64F', function (m) {
var total=0;
var N=m.getNumElements$();
for (var i=0; i < N; i++) {
var d=m.data[i];
total += d * d;
}
return total;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
