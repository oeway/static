(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.chol"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.alg.dense.decomposition.chol.CholeskyBlockHelper']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CholeskyDecompositionBlock", null, 'org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionCommon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['blockWidth'],'O',['B','org.ejml.data.DenseMatrix64F','chol','org.ejml.alg.dense.decomposition.chol.CholeskyBlockHelper']]]

Clazz.newMeth(C$, 'c$$I', function (blockWidth) {
;C$.superclazz.c$$Z.apply(this,[true]);C$.$init$.apply(this);
this.blockWidth=blockWidth;
}, 1);

Clazz.newMeth(C$, 'setExpectedMaxSize$I$I', function (numRows, numCols) {
C$.superclazz.prototype.setExpectedMaxSize$I$I.apply(this, [numRows, numCols]);
if (numRows < this.blockWidth) this.B=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
 else this.B=Clazz.new_($I$(1,1).c$$I$I,[this.blockWidth, this.maxWidth]);
this.chol=Clazz.new_($I$(2,1).c$$I,[this.blockWidth]);
});

Clazz.newMeth(C$, 'decomposeLower$', function () {
if (this.n < this.blockWidth) this.B.reshape$I$I$Z(0, 0, false);
 else this.B.reshape$I$I$Z(this.blockWidth, this.n - this.blockWidth, false);
var numBlocks=(this.n/this.blockWidth|0);
var remainder=this.n % this.blockWidth;
if (remainder > 0) {
numBlocks++;
}this.B.numCols=this.n;
for (var i=0; i < numBlocks; i++) {
this.B.numCols-=this.blockWidth;
if (this.B.numCols > 0) {
if (!this.chol.decompose$org_ejml_data_DenseMatrix64F$I$I(this.T, (i * this.blockWidth) * this.T.numCols + i * this.blockWidth, this.blockWidth)) return false;
var indexSrc=i * this.blockWidth * this.T.numCols  + (i + 1) * this.blockWidth;
var indexDst=(i + 1) * this.blockWidth * this.T.numCols  + i * this.blockWidth;
C$.solveL_special$DA$org_ejml_data_DenseMatrix64F$I$I$org_ejml_data_DenseMatrix64F(this.chol.getL$().data, this.T, indexSrc, indexDst, this.B);
var indexL=(i + 1) * this.blockWidth * this.n  + (i + 1) * this.blockWidth;
C$.symmRankTranA_sub$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$I(this.B, this.T, indexL);
} else {
var width=remainder > 0 ? remainder : this.blockWidth;
if (!this.chol.decompose$org_ejml_data_DenseMatrix64F$I$I(this.T, (i * this.blockWidth) * this.T.numCols + i * this.blockWidth, width)) return false;
}}
for (var i=0; i < this.n; i++) {
for (var j=i + 1; j < this.n; j++) {
this.t[i * this.n + j]=0.0;
}
}
return true;
});

Clazz.newMeth(C$, 'decomposeUpper$', function () {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Not implemented.  Do a lower decomposition and transpose it..."]);
});

Clazz.newMeth(C$, 'solveL_special$DA$org_ejml_data_DenseMatrix64F$I$I$org_ejml_data_DenseMatrix64F', function (L, b_src, indexSrc, indexDst, B) {
var dataSrc=b_src.data;
var b=B.data;
var m=B.numRows;
var n=B.numCols;
var widthL=m;
for (var j=0; j < n; j++) {
var indexb=j;
var rowL=0;
for (var i=0; i < widthL; i++, indexb+=n, rowL+=widthL) {
var sum=dataSrc[indexSrc + i * b_src.numCols + j];
var indexL=rowL;
var endL=indexL + i;
var indexB=j;
for (; indexL != endL; indexB+=n) {
sum -= L[indexL++] * b[indexB];
}
var val=sum / L[i * widthL + i];
dataSrc[indexDst + j * b_src.numCols + i]=val;
b[indexb]=val;
}
}
}, 1);

Clazz.newMeth(C$, 'symmRankTranA_sub$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$I', function (a, c, startIndexC) {
var dataA=a.data;
var dataC=c.data;
var strideC=c.numCols + 1;
for (var i=0; i < a.numCols; i++) {
var indexA=i;
var endR=a.numCols;
for (var k=0; k < a.numRows; k++, indexA+=a.numCols, endR+=a.numCols) {
var indexC=startIndexC;
var valA=dataA[indexA];
var indexR=indexA;
while (indexR < endR){
dataC[indexC++] -= valA * dataA[indexR++];
}
}
startIndexC+=strideC;
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
