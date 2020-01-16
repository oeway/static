(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.qr"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QRDecompositionHouseholder", null, null, 'org.ejml.factory.QRDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['error'],'D',['gamma','tau'],'I',['numCols','numRows','minLength'],'O',['QR','org.ejml.data.DenseMatrix64F','u','double[]','+v','+dataQR','+gammas']]]

Clazz.newMeth(C$, 'setExpectedMaxSize$I$I', function (numRows, numCols) {
this.error=false;
this.numCols=numCols;
this.numRows=numRows;
this.minLength=Math.min(numRows, numCols);
var maxLength=Math.max(numRows, numCols);
if (this.QR == null ) {
this.QR=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
this.u=Clazz.array(Double.TYPE, [maxLength]);
this.v=Clazz.array(Double.TYPE, [maxLength]);
this.gammas=Clazz.array(Double.TYPE, [this.minLength]);
} else {
this.QR.reshape$I$I$Z(numRows, numCols, false);
}this.dataQR=this.QR.data;
if (this.u.length < maxLength) {
this.u=Clazz.array(Double.TYPE, [maxLength]);
this.v=Clazz.array(Double.TYPE, [maxLength]);
}if (this.gammas.length < this.minLength) {
this.gammas=Clazz.array(Double.TYPE, [this.minLength]);
}});

Clazz.newMeth(C$, 'getQR$', function () {
return this.QR;
});

Clazz.newMeth(C$, ['getQ$org_ejml_data_DenseMatrix64F$Z','getQ$TT$Z'], function (Q, compact) {
if (compact) {
if (Q == null ) {
Q=$I$(2).identity$I$I(this.numRows, this.minLength);
} else {
if (Q.numRows != this.numRows || Q.numCols != this.minLength ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension."]);
} else {
$I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
}}} else {
if (Q == null ) {
Q=$I$(2).identity$I(this.numRows);
} else {
if (Q.numRows != this.numRows || Q.numCols != this.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension."]);
} else {
$I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
}}}for (var j=this.minLength - 1; j >= 0; j--) {
this.u[j]=1;
for (var i=j + 1; i < this.numRows; i++) {
this.u[i]=this.QR.get$I$I(i, j);
}
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(Q, this.u, this.gammas[j], j, j, this.numRows, this.v);
}
return Q;
});

Clazz.newMeth(C$, ['getR$org_ejml_data_DenseMatrix64F$Z','getR$TT$Z'], function (R, compact) {
if (R == null ) {
if (compact) {
R=Clazz.new_($I$(1,1).c$$I$I,[this.minLength, this.numCols]);
} else R=Clazz.new_($I$(1,1).c$$I$I,[this.numRows, this.numCols]);
} else {
if (compact) {
if (R.numCols != this.numCols || R.numRows != this.minLength ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions"]);
} else {
if (R.numCols != this.numCols || R.numRows != this.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions"]);
}for (var i=0; i < R.numRows; i++) {
var min=Math.min(i, R.numCols);
for (var j=0; j < min; j++) {
R.set$I$I$D(i, j, 0);
}
}
}for (var i=0; i < this.minLength; i++) {
for (var j=i; j < this.numCols; j++) {
var val=this.QR.get$I$I(i, j);
R.set$I$I$D(i, j, val);
}
}
return R;
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
this.commonSetup$org_ejml_data_DenseMatrix64F(A);
for (var j=0; j < this.minLength; j++) {
this.householder$I(j);
this.updateA$I(j);
}
return !this.error;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return false;
});

Clazz.newMeth(C$, 'householder$I', function (j) {
var index=j + j * this.numCols;
var max=0;
for (var i=j; i < this.numRows; i++) {
var d=this.u[i]=this.dataQR[index];
if (d < 0 ) d=-d;
if (max < d ) {
max=d;
}index+=this.numCols;
}
if (max == 0.0 ) {
this.gamma=0;
this.error=true;
} else {
this.tau=0;
for (var i=j; i < this.numRows; i++) {
this.u[i] /= max;
var d=this.u[i];
this.tau += d * d;
}
this.tau=Math.sqrt(this.tau);
if (this.u[j] < 0 ) this.tau=-this.tau;
var u_0=this.u[j] + this.tau;
this.gamma=u_0 / this.tau;
for (var i=j + 1; i < this.numRows; i++) {
this.u[i] /= u_0;
}
this.u[j]=1;
this.tau *= max;
}this.gammas[j]=this.gamma;
});

Clazz.newMeth(C$, 'updateA$I', function (w) {
for (var i=w + 1; i < this.numCols; i++) {
this.v[i]=this.u[w] * this.dataQR[w * this.numCols + i];
}
for (var k=w + 1; k < this.numRows; k++) {
var indexQR=k * this.numCols + w + 1;
for (var i=w + 1; i < this.numCols; i++) {
this.v[i] += this.u[k] * this.dataQR[indexQR++];
}
}
for (var i=w + 1; i < this.numCols; i++) {
this.v[i] *= this.gamma;
}
for (var i=w; i < this.numRows; i++) {
var valU=this.u[i];
var indexQR=i * this.numCols + w + 1;
for (var j=w + 1; j < this.numCols; j++) {
this.dataQR[indexQR++] -= valU * this.v[j];
}
}
if (w < this.numCols) {
this.dataQR[w + w * this.numCols]=-this.tau;
}for (var i=w + 1; i < this.numRows; i++) {
this.dataQR[w + i * this.numCols]=this.u[i];
}
});

Clazz.newMeth(C$, 'commonSetup$org_ejml_data_DenseMatrix64F', function (A) {
this.setExpectedMaxSize$I$I(A.numRows, A.numCols);
this.QR.set$org_ejml_data_D1Matrix64F(A);
});

Clazz.newMeth(C$, 'getGammas$', function () {
return this.gammas;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
