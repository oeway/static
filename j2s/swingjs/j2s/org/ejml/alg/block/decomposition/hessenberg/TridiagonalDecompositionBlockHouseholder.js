(function(){var P$=Clazz.newPackage("org.ejml.alg.block.decomposition.hessenberg"),p$1={},I$=[[0,'org.ejml.data.BlockMatrix64F','org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.block.decomposition.qr.BlockMatrix64HouseholderQR','org.ejml.data.D1Submatrix64F','org.ejml.alg.block.decomposition.hessenberg.TridiagonalBlockHelper','org.ejml.alg.block.BlockMultiplication']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TridiagonalDecompositionBlockHouseholder", null, null, 'org.ejml.alg.dense.decomposition.hessenberg.TridiagonalSimilarDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.V=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.tmp=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.gammas=Clazz.array(Double.TYPE, [1]);
this.zerosM=Clazz.new_($I$(2,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['O',['A','org.ejml.data.BlockMatrix64F','+V','+tmp','gammas','double[]','zerosM','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, ['getT$org_ejml_data_BlockMatrix64F','getT$TMatrixType'], function (T) {
if (T == null ) {
T=Clazz.new_($I$(1,1).c$$I$I$I,[this.A.numRows, this.A.numCols, this.A.blockLength]);
} else {
if (T.numRows != this.A.numRows || T.numCols != this.A.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["T must have the same dimensions as the input matrix"]);
$I$(3).fill$org_ejml_data_D1Matrix64F$D(T, 0);
}T.set$I$I$D(0, 0, this.A.data[0]);
for (var i=1; i < this.A.numRows; i++) {
var d=this.A.get$I$I(i - 1, i);
T.set$I$I$D(i, i, this.A.get$I$I(i, i));
T.set$I$I$D(i - 1, i, d);
T.set$I$I$D(i, i - 1, d);
}
return T;
});

Clazz.newMeth(C$, ['getQ$org_ejml_data_BlockMatrix64F$Z','getQ$TMatrixType$Z'], function (Q, transposed) {
Q=$I$(4).initializeQ$org_ejml_data_BlockMatrix64F$I$I$I$Z(Q, this.A.numRows, this.A.numCols, this.A.blockLength, false);
var height=Math.min(this.A.blockLength, this.A.numRows);
this.V.reshape$I$I$Z(height, this.A.numCols, false);
this.tmp.reshape$I$I$Z(height, this.A.numCols, false);
var subQ=Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[Q]);
var subU=Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[this.A]);
var subW=Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[this.V]);
var tmp=Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[this.tmp]);
var N=this.A.numRows;
var start=N - N % this.A.blockLength;
if (start == N) start-=this.A.blockLength;
if (start < 0) start=0;
for (var i=start; i >= 0; i-=this.A.blockLength) {
var blockSize=Math.min(this.A.blockLength, N - i);
subW.col0=i;
subW.row1=blockSize;
subW.original.reshape$I$I$Z(subW.row1, subW.col1, false);
if (transposed) {
tmp.row0=i;
tmp.row1=this.A.numCols;
tmp.col0=0;
tmp.col1=blockSize;
} else {
tmp.col0=i;
tmp.row1=blockSize;
}tmp.original.reshape$I$I$Z(tmp.row1, tmp.col1, false);
subU.col0=i;
subU.row0=i;
subU.row1=subU.row0 + blockSize;
p$1.copyZeros$org_ejml_data_D1Submatrix64F.apply(this, [subU]);
$I$(6).computeW_row$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA$I(this.A.blockLength, subU, subW, this.gammas, i);
subQ.col0=i;
subQ.row0=i;
if (transposed) $I$(7).multTransB$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.A.blockLength, subQ, subU, tmp);
 else $I$(7).mult$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.A.blockLength, subU, subQ, tmp);
if (transposed) $I$(7).multPlus$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.A.blockLength, tmp, subW, subQ);
 else $I$(7).multPlusTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.A.blockLength, subW, tmp, subQ);
p$1.replaceZeros$org_ejml_data_D1Submatrix64F.apply(this, [subU]);
}
return Q;
});

Clazz.newMeth(C$, 'copyZeros$org_ejml_data_D1Submatrix64F', function (subU) {
var N=Math.min(this.A.blockLength, subU.col1 - subU.col0);
for (var i=0; i < N; i++) {
for (var j=0; j <= i; j++) {
this.zerosM.unsafe_set$I$I$D(i, j, subU.get$I$I(i, j));
subU.set$I$I$D(i, j, 0);
}
if (subU.col0 + i + 1  < subU.original.numCols) {
this.zerosM.unsafe_set$I$I$D(i, i + 1, subU.get$I$I(i, i + 1));
subU.set$I$I$D(i, i + 1, 1);
}}
}, p$1);

Clazz.newMeth(C$, 'replaceZeros$org_ejml_data_D1Submatrix64F', function (subU) {
var N=Math.min(this.A.blockLength, subU.col1 - subU.col0);
for (var i=0; i < N; i++) {
for (var j=0; j <= i; j++) {
subU.set$I$I$D(i, j, this.zerosM.get$I$I(i, j));
}
if (subU.col0 + i + 1  < subU.original.numCols) {
subU.set$I$I$D(i, i + 1, this.zerosM.get$I$I(i, i + 1));
}}
}, p$1);

Clazz.newMeth(C$, 'getDiagonal$DA$DA', function (diag, off) {
diag[0]=this.A.data[0];
for (var i=1; i < this.A.numRows; i++) {
diag[i]=this.A.get$I$I(i, i);
off[i - 1]=this.A.get$I$I(i - 1, i);
}
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_BlockMatrix64F','decompose$TT'], function (orig) {
if (orig.numCols != orig.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Input matrix must be square."]);
p$1.init$org_ejml_data_BlockMatrix64F.apply(this, [orig]);
var subA=Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[this.A]);
var subV=Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[this.V]);
var subU=Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[this.A]);
var N=orig.numCols;
for (var i=0; i < N; i+=this.A.blockLength) {
var height=Math.min(this.A.blockLength, this.A.numRows - i);
subA.col0=subU.col0=i;
subA.row0=subU.row0=i;
subU.row1=subU.row0 + height;
subV.col0=i;
subV.row1=height;
subV.original.reshape$I$I$Z(subV.row1, subV.col1, false);
$I$(6).tridiagUpperRow$I$org_ejml_data_D1Submatrix64F$DA$org_ejml_data_D1Submatrix64F(this.A.blockLength, subA, this.gammas, subV);
if (subU.row1 < orig.numCols) {
var before=subU.get$I$I(this.A.blockLength - 1, this.A.blockLength);
subU.set$I$I$D(this.A.blockLength - 1, this.A.blockLength, 1);
C$.multPlusTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.A.blockLength, subU, subV, subA);
C$.multPlusTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.A.blockLength, subV, subU, subA);
subU.set$I$I$D(this.A.blockLength - 1, this.A.blockLength, before);
}}
return true;
});

Clazz.newMeth(C$, 'multPlusTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
var heightA=Math.min(blockLength, A.row1 - A.row0);
for (var i=C.row0 + blockLength; i < C.row1; i+=blockLength) {
var heightC=Math.min(blockLength, C.row1 - i);
var indexA=A.row0 * A.original.numCols + (i - C.row0 + A.col0) * heightA;
for (var j=i; j < C.col1; j+=blockLength) {
var widthC=Math.min(blockLength, C.col1 - j);
var indexC=i * C.original.numCols + j * heightC;
var indexB=B.row0 * B.original.numCols + (j - C.col0 + B.col0) * heightA;
org.ejml.alg.block.BlockInnerMultiplication.blockMultPlusTransA$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, heightC, widthC);
}
}
}, 1);

Clazz.newMeth(C$, 'init$org_ejml_data_BlockMatrix64F', function (orig) {
this.A=orig;
var height=Math.min(this.A.blockLength, this.A.numRows);
this.V.reshape$I$I$I$Z(height, this.A.numCols, this.A.blockLength, false);
this.tmp.reshape$I$I$I$Z(height, this.A.numCols, this.A.blockLength, false);
if (this.gammas.length < this.A.numCols) this.gammas=Clazz.array(Double.TYPE, [this.A.numCols]);
this.zerosM.reshape$I$I$Z(this.A.blockLength, this.A.blockLength + 1, false);
}, p$1);

Clazz.newMeth(C$, 'inputModified$', function () {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
