(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.qr"),I$=[[0,'org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions','org.ejml.data.DenseMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QRDecompositionHouseholderColumn", null, null, 'org.ejml.factory.QRDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['error'],'D',['gamma','tau'],'I',['numCols','numRows','minLength'],'O',['dataQR','double[][]','v','double[]','+gammas']]]

Clazz.newMeth(C$, 'setExpectedMaxSize$I$I', function (numRows, numCols) {
this.numCols=numCols;
this.numRows=numRows;
this.minLength=Math.min(numCols, numRows);
var maxLength=Math.max(numCols, numRows);
if (this.dataQR == null  || this.dataQR.length < numCols  || this.dataQR[0].length < numRows ) {
this.dataQR=Clazz.array(Double.TYPE, [numCols, numRows]);
this.v=Clazz.array(Double.TYPE, [maxLength]);
this.gammas=Clazz.array(Double.TYPE, [this.minLength]);
}if (this.v.length < maxLength) {
this.v=Clazz.array(Double.TYPE, [maxLength]);
}if (this.gammas.length < this.minLength) {
this.gammas=Clazz.array(Double.TYPE, [this.minLength]);
}});

Clazz.newMeth(C$, 'getQR$', function () {
return this.dataQR;
});

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
}}}for (var j=this.minLength - 1; j >= 0; j--) {
var u=this.dataQR[j];
var vv=u[j];
u[j]=1;
$I$(2).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(Q, u, this.gammas[j], j, j, this.numRows, this.v);
u[j]=vv;
}
return Q;
});

Clazz.newMeth(C$, ['getR$org_ejml_data_DenseMatrix64F$Z','getR$TT$Z'], function (R, compact) {
if (R == null ) {
if (compact) {
R=Clazz.new_($I$(3,1).c$$I$I,[this.minLength, this.numCols]);
} else R=Clazz.new_($I$(3,1).c$$I$I,[this.numRows, this.numCols]);
} else {
if (compact) {
if (R.numCols != this.numCols || R.numRows != this.minLength ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions: found( " + R.numRows + " " + R.numCols + " ) expected( " + this.minLength + " " + this.numCols + " )" ]);
} else {
if (R.numCols != this.numCols || R.numRows != this.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions"]);
}for (var i=0; i < R.numRows; i++) {
var min=Math.min(i, R.numCols);
for (var j=0; j < min; j++) {
R.set$I$I$D(i, j, 0);
}
}
}for (var j=0; j < this.numCols; j++) {
var colR=this.dataQR[j];
var l=Math.min(j, this.numRows - 1);
for (var i=0; i <= l; i++) {
var val=colR[i];
R.set$I$I$D(i, j, val);
}
}
return R;
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
this.setExpectedMaxSize$I$I(A.numRows, A.numCols);
this.convertToColumnMajor$org_ejml_data_DenseMatrix64F(A);
this.error=false;
for (var j=0; j < this.minLength; j++) {
this.householder$I(j);
this.updateA$I(j);
}
return !this.error;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return false;
});

Clazz.newMeth(C$, 'convertToColumnMajor$org_ejml_data_DenseMatrix64F', function (A) {
for (var x=0; x < this.numCols; x++) {
var colQ=this.dataQR[x];
for (var y=0; y < this.numRows; y++) {
colQ[y]=A.data[y * this.numCols + x];
}
}
});

Clazz.newMeth(C$, 'householder$I', function (j) {
var u=this.dataQR[j];
var max=$I$(2).findMax$DA$I$I(u, j, this.numRows - j);
if (max == 0.0 ) {
this.gamma=0;
this.error=true;
} else {
this.tau=$I$(2).computeTauAndDivide$I$I$DA$D(j, this.numRows, u, max);
var u_0=u[j] + this.tau;
$I$(2).divideElements$I$I$DA$D(j + 1, this.numRows, u, u_0);
this.gamma=u_0 / this.tau;
this.tau *= max;
u[j]=-this.tau;
}this.gammas[j]=this.gamma;
});

Clazz.newMeth(C$, 'updateA$I', function (w) {
var u=this.dataQR[w];
for (var j=w + 1; j < this.numCols; j++) {
var colQ=this.dataQR[j];
var val=colQ[w];
for (var k=w + 1; k < this.numRows; k++) {
val += u[k] * colQ[k];
}
val *= this.gamma;
colQ[w] -= val;
for (var i=w + 1; i < this.numRows; i++) {
colQ[i] -= u[i] * val;
}
}
});

Clazz.newMeth(C$, 'getGammas$', function () {
return this.gammas;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
