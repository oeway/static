(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.ops.SpecializedOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SingularOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'descendingOrder$org_ejml_data_DenseMatrix64F$Z$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$Z', function (U, tranU, W, V, tranV) {
var numSingular=Math.min(W.numRows, W.numCols);
C$.checkSvdMatrixSize$org_ejml_data_DenseMatrix64F$Z$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$Z(U, tranU, W, V, tranV);
for (var i=0; i < numSingular; i++) {
var bigValue=-1;
var bigIndex=-1;
for (var j=i; j < numSingular; j++) {
var v=W.get$I$I(j, j);
if (v > bigValue ) {
bigValue=v;
bigIndex=j;
}}
if (bigIndex == i) continue;
if (bigIndex == -1) {
break;
}var tmp=W.get$I$I(i, i);
W.set$I$I$D(i, i, bigValue);
W.set$I$I$D(bigIndex, bigIndex, tmp);
if (V != null ) {
C$.swapRowOrCol$org_ejml_data_DenseMatrix64F$Z$I$I(V, tranV, i, bigIndex);
}if (U != null ) {
C$.swapRowOrCol$org_ejml_data_DenseMatrix64F$Z$I$I(U, tranU, i, bigIndex);
}}
}, 1);

Clazz.newMeth(C$, 'descendingOrder$org_ejml_data_DenseMatrix64F$Z$DA$I$org_ejml_data_DenseMatrix64F$Z', function (U, tranU, singularValues, numSingularValues, V, tranV) {
for (var i=0; i < numSingularValues; i++) {
var bigValue=-1;
var bigIndex=-1;
for (var j=i; j < numSingularValues; j++) {
var v=singularValues[j];
if (v > bigValue ) {
bigValue=v;
bigIndex=j;
}}
if (bigIndex == i) continue;
if (bigIndex == -1) {
break;
}var tmp=singularValues[i];
singularValues[i]=bigValue;
singularValues[bigIndex]=tmp;
if (V != null ) {
C$.swapRowOrCol$org_ejml_data_DenseMatrix64F$Z$I$I(V, tranV, i, bigIndex);
}if (U != null ) {
C$.swapRowOrCol$org_ejml_data_DenseMatrix64F$Z$I$I(U, tranU, i, bigIndex);
}}
}, 1);

Clazz.newMeth(C$, 'checkSvdMatrixSize$org_ejml_data_DenseMatrix64F$Z$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$Z', function (U, tranU, W, V, tranV) {
var numSingular=Math.min(W.numRows, W.numCols);
var compact=W.numRows == W.numCols;
if (compact) {
if (U != null ) {
if (tranU && U.numRows != numSingular ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected size of matrix U"]);
 else if (!tranU && U.numCols != numSingular ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected size of matrix U"]);
}if (V != null ) {
if (tranV && V.numRows != numSingular ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected size of matrix V"]);
 else if (!tranV && V.numCols != numSingular ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected size of matrix V"]);
}} else {
if (U != null  && U.numRows != U.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected size of matrix U"]);
if (V != null  && V.numRows != V.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected size of matrix V"]);
if (U != null  && U.numRows != W.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected size of W"]);
if (V != null  && V.numRows != W.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected size of W"]);
}}, 1);

Clazz.newMeth(C$, 'swapRowOrCol$org_ejml_data_DenseMatrix64F$Z$I$I', function (M, tran, i, bigIndex) {
var tmp;
if (tran) {
for (var col=0; col < M.numCols; col++) {
tmp=M.get$I$I(i, col);
M.set$I$I$D(i, col, M.get$I$I(bigIndex, col));
M.set$I$I$D(bigIndex, col, tmp);
}
} else {
for (var row=0; row < M.numRows; row++) {
tmp=M.get$I$I(row, i);
M.set$I$I$D(row, i, M.get$I$I(row, bigIndex));
M.set$I$I$D(row, bigIndex, tmp);
}
}}, 1);

Clazz.newMeth(C$, 'nullSpace$org_ejml_factory_SingularValueDecomposition$org_ejml_data_DenseMatrix64F$D', function (svd, nullSpace, tol) {
var N=svd.numberOfSingularValues$();
var s=svd.getSingularValues$();
var V=svd.getV$TT$Z(null, true);
if (V.numRows != svd.numCols$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t compute the null space using a compact SVD for a matrix of this size."]);
}var numVectors=svd.numCols$() - N;
for (var i=0; i < N; i++) {
if (s[i] <= tol ) {
numVectors++;
}}
if (nullSpace == null ) {
nullSpace=Clazz.new_($I$(1,1).c$$I$I,[numVectors, svd.numCols$()]);
} else {
nullSpace.reshape$I$I(numVectors, svd.numCols$());
}var count=0;
for (var i=0; i < N; i++) {
if (s[i] <= tol ) {
$I$(2).extract$org_ejml_data_ReshapeMatrix64F$I$I$I$I$org_ejml_data_ReshapeMatrix64F$I$I(V, i, i + 1, 0, V.numCols, nullSpace, count++, 0);
}}
for (var i=N; i < svd.numCols$(); i++) {
$I$(2).extract$org_ejml_data_ReshapeMatrix64F$I$I$I$I$org_ejml_data_ReshapeMatrix64F$I$I(V, i, i + 1, 0, V.numCols, nullSpace, count++, 0);
}
$I$(2).transpose$org_ejml_data_DenseMatrix64F(nullSpace);
return nullSpace;
}, 1);

Clazz.newMeth(C$, 'nullVector$org_ejml_factory_SingularValueDecomposition$Z$org_ejml_data_DenseMatrix64F', function (svd, isRight, nullVector) {
var N=svd.numberOfSingularValues$();
var s=svd.getSingularValues$();
var A=isRight ? svd.getV$TT$Z(null, true) : svd.getU$TT$Z(null, false);
if (isRight) {
if (A.numRows != svd.numCols$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t compute the null space using a compact SVD for a matrix of this size."]);
}if (nullVector == null ) {
nullVector=Clazz.new_($I$(1,1).c$$I$I,[svd.numCols$(), 1]);
}} else {
if (A.numCols != svd.numRows$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t compute the null space using a compact SVD for a matrix of this size."]);
}if (nullVector == null ) {
nullVector=Clazz.new_($I$(1,1).c$$I$I,[svd.numRows$(), 1]);
}}var smallestIndex=-1;
if (isRight && svd.numCols$() > svd.numRows$() ) smallestIndex=svd.numCols$() - 1;
 else if (!isRight && svd.numCols$() < svd.numRows$() ) smallestIndex=svd.numRows$() - 1;
 else {
var smallestValue=1.7976931348623157E308;
for (var i=0; i < N; i++) {
if (s[i] < smallestValue ) {
smallestValue=s[i];
smallestIndex=i;
}}
}if (isRight) $I$(3).subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F(A, smallestIndex, 0, A.numRows, true, 0, nullVector);
 else $I$(3).subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F(A, 0, smallestIndex, A.numRows, false, 0, nullVector);
return nullVector;
}, 1);

Clazz.newMeth(C$, 'rank$org_ejml_factory_SingularValueDecomposition$D', function (svd, threshold) {
var numRank=0;
var w=svd.getSingularValues$();
var N=svd.numberOfSingularValues$();
for (var j=0; j < N; j++) {
if (w[j] > threshold ) numRank++;
}
return numRank;
}, 1);

Clazz.newMeth(C$, 'nullity$org_ejml_factory_SingularValueDecomposition$D', function (svd, threshold) {
var ret=0;
var w=svd.getSingularValues$();
var N=svd.numberOfSingularValues$();
var numCol=svd.numCols$();
for (var j=0; j < N; j++) {
if (w[j] <= threshold ) ret++;
}
return ret + numCol - N;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
