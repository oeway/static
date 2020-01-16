(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.qr"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QRDecompositionHouseholderTran", null, null, 'org.ejml.factory.QRDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['error'],'D',['gamma','tau'],'I',['numCols','numRows','minLength'],'O',['QR','org.ejml.data.DenseMatrix64F','v','double[]','+gammas']]]

Clazz.newMeth(C$, 'setExpectedMaxSize$I$I', function (numRows, numCols) {
this.numCols=numCols;
this.numRows=numRows;
this.minLength=Math.min(numCols, numRows);
var maxLength=Math.max(numCols, numRows);
if (this.QR == null ) {
this.QR=Clazz.new_($I$(1,1).c$$I$I,[numCols, numRows]);
this.v=Clazz.array(Double.TYPE, [maxLength]);
this.gammas=Clazz.array(Double.TYPE, [this.minLength]);
} else {
this.QR.reshape$I$I$Z(numCols, numRows, false);
}if (this.v.length < maxLength) {
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
var diagIndex=j * this.numRows + j;
var before=this.QR.data[diagIndex];
this.QR.data[diagIndex]=1;
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$I$D$I$I$I$DA(Q, this.QR.data, j * this.numRows, this.gammas[j], j, j, this.numRows, this.v);
this.QR.data[diagIndex]=before;
}
return Q;
});

Clazz.newMeth(C$, 'applyQ$org_ejml_data_DenseMatrix64F', function (A) {
if (A.numRows != this.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A must have at least " + this.numRows + " rows." ]);
for (var j=this.minLength - 1; j >= 0; j--) {
var diagIndex=j * this.numRows + j;
var before=this.QR.data[diagIndex];
this.QR.data[diagIndex]=1;
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$I$D$I$I$I$DA(A, this.QR.data, j * this.numRows, this.gammas[j], 0, j, this.numRows, this.v);
this.QR.data[diagIndex]=before;
}
});

Clazz.newMeth(C$, 'applyTranQ$org_ejml_data_DenseMatrix64F', function (A) {
for (var j=0; j < this.minLength; j++) {
var diagIndex=j * this.numRows + j;
var before=this.QR.data[diagIndex];
this.QR.data[diagIndex]=1;
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$I$D$I$I$I$DA(A, this.QR.data, j * this.numRows, this.gammas[j], 0, j, this.numRows, this.v);
this.QR.data[diagIndex]=before;
}
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
R.unsafe_set$I$I$D(i, j, 0);
}
}
}for (var i=0; i < R.numRows; i++) {
for (var j=i; j < R.numCols; j++) {
R.unsafe_set$I$I$D(i, j, this.QR.unsafe_get$I$I(j, i));
}
}
return R;
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
this.setExpectedMaxSize$I$I(A.numRows, A.numCols);
$I$(2).transpose$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(A, this.QR);
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

Clazz.newMeth(C$, 'householder$I', function (j) {
var startQR=j * this.numRows;
var endQR=startQR + this.numRows;
startQR+=j;
var max=$I$(3).findMax$DA$I$I(this.QR.data, startQR, this.numRows - j);
if (max == 0.0 ) {
this.gamma=0;
this.error=true;
} else {
this.tau=$I$(3).computeTauAndDivide$I$I$DA$D(startQR, endQR, this.QR.data, max);
var u_0=this.QR.data[startQR] + this.tau;
$I$(3).divideElements$I$I$DA$D(startQR + 1, endQR, this.QR.data, u_0);
this.gamma=u_0 / this.tau;
this.tau *= max;
this.QR.data[startQR]=-this.tau;
}this.gammas[j]=this.gamma;
});

Clazz.newMeth(C$, 'updateA$I', function (w) {
var data=this.QR.data;
var rowW=w * this.numRows + w + 1;
var rowJ=rowW + this.numRows;
var rowJEnd=rowJ + (this.numCols - w - 1 ) * this.numRows;
var indexWEnd=rowW + this.numRows - w - 1;
for (; rowJEnd != rowJ; rowJ+=this.numRows) {
var val=data[rowJ - 1];
var indexW=rowW;
var indexJ=rowJ;
while (indexW != indexWEnd){
val += data[indexW++] * data[indexJ++];
}
val *= this.gamma;
data[rowJ - 1] -= val;
indexW=rowW;
indexJ=rowJ;
while (indexW != indexWEnd){
data[indexJ++] -= data[indexW++] * val;
}
}
});

Clazz.newMeth(C$, 'getGammas$', function () {
return this.gammas;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
