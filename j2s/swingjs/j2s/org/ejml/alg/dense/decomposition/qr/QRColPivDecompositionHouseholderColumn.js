(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.qr"),p$1={},I$=[[0,'org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions','org.ejml.data.DenseMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QRColPivDecompositionHouseholderColumn", null, 'org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholderColumn', 'org.ejml.factory.QRPDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.singularThreshold=1.0E-100;
}, 1);

C$.$fields$=[['D',['singularThreshold'],'I',['rank'],'O',['pivots','int[]','normsCol','double[]']]]

Clazz.newMeth(C$, 'c$$D', function (singularThreshold) {
Clazz.super_(C$, this);
this.singularThreshold=singularThreshold;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setSingularThreshold$D', function (threshold) {
this.singularThreshold=threshold;
});

Clazz.newMeth(C$, 'setExpectedMaxSize$I$I', function (numRows, numCols) {
C$.superclazz.prototype.setExpectedMaxSize$I$I.apply(this, [numRows, numCols]);
if (this.pivots == null  || this.pivots.length < numCols ) {
this.pivots=Clazz.array(Integer.TYPE, [numCols]);
this.normsCol=Clazz.array(Double.TYPE, [numCols]);
}});

Clazz.newMeth(C$, ['getQ$org_ejml_data_DenseMatrix64F$Z','getQ$TT$Z'], function (Q, compact) {
if (compact) {
if (Q == null ) {
Q=$I$(1).identity$I$I(this.numRows, this.minLength);
} else {
if (Q.numRows != this.numRows || Q.numCols != this.minLength ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension."]);
} else {
$I$(1).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
}}} else {
if (Q == null ) {
Q=$I$(1).identity$I(this.numRows);
} else {
if (Q.numRows != this.numRows || Q.numCols != this.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension."]);
} else {
$I$(1).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
}}}for (var j=this.rank - 1; j >= 0; j--) {
var u=this.dataQR[j];
var vv=u[j];
u[j]=1;
$I$(2).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(Q, u, this.gammas[j], j, j, this.numRows, this.v);
u[j]=vv;
}
return Q;
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
this.setExpectedMaxSize$I$I(A.numRows, A.numCols);
this.convertToColumnMajor$org_ejml_data_DenseMatrix64F(A);
p$1.setupPivotInfo.apply(this, []);
for (var j=0; j < this.minLength; j++) {
if (j > 0) p$1.updateNorms$I.apply(this, [j]);
p$1.swapColumns$I.apply(this, [j]);
if (!this.householderPivot$I(j)) break;
this.updateA$I(j);
this.rank=j + 1;
}
return true;
});

Clazz.newMeth(C$, 'setupPivotInfo', function () {
for (var col=0; col < this.numCols; col++) {
this.pivots[col]=col;
var c=this.dataQR[col];
var norm=0;
for (var row=0; row < this.numRows; row++) {
var element=c[row];
norm += element * element;
}
this.normsCol[col]=norm;
}
}, p$1);

Clazz.newMeth(C$, 'updateNorms$I', function (j) {
var foundNegative=false;
for (var col=j; col < this.numCols; col++) {
var e=this.dataQR[col][j - 1];
this.normsCol[col] -= e * e;
if (this.normsCol[col] < 0 ) {
foundNegative=true;
break;
}}
if (foundNegative) {
for (var col=j; col < this.numCols; col++) {
var u=this.dataQR[col];
var actual=0;
for (var i=j; i < this.numRows; i++) {
var v=u[i];
actual += v * v;
}
this.normsCol[col]=actual;
}
}}, p$1);

Clazz.newMeth(C$, 'swapColumns$I', function (j) {
var largestIndex=j;
var largestNorm=this.normsCol[j];
for (var col=j + 1; col < this.numCols; col++) {
var n=this.normsCol[col];
if (n > largestNorm ) {
largestNorm=n;
largestIndex=col;
}}
var tempC=this.dataQR[j];
this.dataQR[j]=this.dataQR[largestIndex];
this.dataQR[largestIndex]=tempC;
var tempN=this.normsCol[j];
this.normsCol[j]=this.normsCol[largestIndex];
this.normsCol[largestIndex]=tempN;
var tempP=this.pivots[j];
this.pivots[j]=this.pivots[largestIndex];
this.pivots[largestIndex]=tempP;
}, p$1);

Clazz.newMeth(C$, 'householderPivot$I', function (j) {
var u=this.dataQR[j];
var max=$I$(2).findMax$DA$I$I(u, j, this.numRows - j);
if (max <= 0 ) {
return false;
} else {
this.tau=$I$(2).computeTauAndDivide$I$I$DA$D(j, this.numRows, u, max);
var u_0=u[j] + this.tau;
$I$(2).divideElements$I$I$DA$D(j + 1, this.numRows, u, u_0);
this.gamma=u_0 / this.tau;
this.tau *= max;
u[j]=-this.tau;
if (Math.abs(this.tau) <= this.singularThreshold ) {
return false;
}}this.gammas[j]=this.gamma;
return true;
});

Clazz.newMeth(C$, 'getRank$', function () {
return this.rank;
});

Clazz.newMeth(C$, 'getPivots$', function () {
return this.pivots;
});

Clazz.newMeth(C$, 'getPivotMatrix$org_ejml_data_DenseMatrix64F', function (P) {
if (P == null ) P=Clazz.new_($I$(3,1).c$$I$I,[this.numCols, this.numCols]);
 else if (P.numRows != this.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows must be " + this.numCols]);
 else if (P.numCols != this.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns must be " + this.numCols]);
 else {
P.zero$();
}for (var i=0; i < this.numCols; i++) {
P.set$I$I$D(this.pivots[i], i, 1);
}
return P;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
