(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.qr"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QrUpdate");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['autoGrow'],'I',['maxCols','maxRows','m','n','m_m'],'O',['Q','org.ejml.data.DenseMatrix64F','+R','+U_tran','+Qm','r_row','double[]']]]

Clazz.newMeth(C$, 'c$$I$I', function (maxRows, maxCols) {
;C$.$init$.apply(this);
this.autoGrow=false;
this.declareInternalData$I$I(maxRows, maxCols);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$Z', function (maxRows, maxCols, autoGrow) {
;C$.$init$.apply(this);
this.autoGrow=autoGrow;
this.declareInternalData$I$I(maxRows, maxCols);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.autoGrow=true;
}, 1);

Clazz.newMeth(C$, 'declareInternalData$I$I', function (maxRows, maxCols) {
this.maxRows=maxRows;
this.maxCols=maxCols;
this.U_tran=Clazz.new_($I$(1,1).c$$I$I,[maxRows, maxRows]);
this.Qm=Clazz.new_($I$(1,1).c$$I$I,[maxRows, maxRows]);
this.r_row=Clazz.array(Double.TYPE, [maxCols]);
});

Clazz.newMeth(C$, 'addRow$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$DA$I$Z', function (Q, R, row, rowIndex, resizeR) {
p$1.setQR$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$I.apply(this, [Q, R, 1]);
this.m_m=this.m + 1;
if (Q.data.length < this.m_m * this.m_m) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Q matrix does not have enough data to grow"]);
if (resizeR && R.data.length < this.m_m * this.n ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["R matrix does not have enough data to grow"]);
if (resizeR) R.reshape$I$I$Z(this.m_m, this.n, false);
this.U_tran.reshape$I$I$Z(this.m_m, this.m_m, false);
p$1.applyFirstGivens$DA.apply(this, [row]);
p$1.applyLaterGivens.apply(this, []);
p$1.updateInsertQ$I.apply(this, [rowIndex]);
this.Q=this.R=null;
});

Clazz.newMeth(C$, 'deleteRow$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$I$Z', function (Q, R, rowIndex, resizeR) {
p$1.setQR$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$I.apply(this, [Q, R, 0]);
if (this.m - 1 < this.n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Removing any row would make the system under determined."]);
}this.m_m=this.m - 1;
this.U_tran.reshape$I$I$Z(this.m, this.m, false);
if (resizeR) R.reshape$I$I$Z(this.m_m, this.n, false);
p$1.computeRemoveGivens$I.apply(this, [rowIndex]);
p$1.updateRemoveQ$I.apply(this, [rowIndex]);
p$1.updateRemoveR.apply(this, []);
this.Q=this.R=null;
});

Clazz.newMeth(C$, 'setQR$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$I', function (Q, R, growRows) {
if (Q.numRows != Q.numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Q should be square."]);
}this.Q=Q;
this.R=R;
this.m=Q.numRows;
this.n=R.numCols;
if (this.m + growRows > this.maxRows || this.n > this.maxCols ) {
if (this.autoGrow) {
this.declareInternalData$I$I(this.m + growRows, this.n);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Autogrow has been set to false and the maximum number of rows or columns has been exceeded."]);
}}}, p$1);

Clazz.newMeth(C$, 'updateInsertQ$I', function (rowIndex) {
this.Qm.setReshape$org_ejml_data_DenseMatrix64F(this.Q);
this.Q.reshape$I$I$Z(this.m_m, this.m_m, false);
for (var i=0; i < rowIndex; i++) {
for (var j=0; j < this.m_m; j++) {
var sum=0;
for (var k=0; k < this.m; k++) {
sum += this.Qm.data[i * this.m + k] * this.U_tran.data[j * this.m_m + k + 1];
}
this.Q.data[i * this.m_m + j]=sum;
}
}
for (var j=0; j < this.m_m; j++) {
this.Q.data[rowIndex * this.m_m + j]=this.U_tran.data[j * this.m_m];
}
for (var i=rowIndex + 1; i < this.m_m; i++) {
for (var j=0; j < this.m_m; j++) {
var sum=0;
for (var k=0; k < this.m; k++) {
sum += this.Qm.data[(i - 1) * this.m + k] * this.U_tran.data[j * this.m_m + k + 1];
}
this.Q.data[i * this.m_m + j]=sum;
}
}
}, p$1);

Clazz.newMeth(C$, 'updateRemoveQ$I', function (rowIndex) {
this.Qm.setReshape$org_ejml_data_DenseMatrix64F(this.Q);
this.Q.reshape$I$I$Z(this.m_m, this.m_m, false);
for (var i=0; i < rowIndex; i++) {
for (var j=1; j < this.m; j++) {
var sum=0;
for (var k=0; k < this.m; k++) {
sum += this.Qm.data[i * this.m + k] * this.U_tran.data[j * this.m + k];
}
this.Q.data[i * this.m_m + j - 1]=sum;
}
}
for (var i=rowIndex + 1; i < this.m; i++) {
for (var j=1; j < this.m; j++) {
var sum=0;
for (var k=0; k < this.m; k++) {
sum += this.Qm.data[i * this.m + k] * this.U_tran.data[j * this.m + k];
}
this.Q.data[(i - 1) * this.m_m + j - 1]=sum;
}
}
}, p$1);

Clazz.newMeth(C$, 'updateRemoveR', function () {
for (var i=1; i < this.n + 1; i++) {
for (var j=0; j < this.n; j++) {
var sum=0;
for (var k=i - 1; k <= j; k++) {
sum += this.U_tran.data[i * this.m + k] * this.R.data[k * this.n + j];
}
this.R.data[(i - 1) * this.n + j]=sum;
}
}
}, p$1);

Clazz.newMeth(C$, 'applyFirstGivens$DA', function (row) {
var c;
var s;
var xi=row[0];
var xj=this.R.data[0];
var r=xi * xi + xj * xj;
if (r != 0 ) {
r=Math.sqrt(r);
c=xi / r;
s=xj / r;
} else {
c=1;
s=0;
}this.R.data[0]=r;
for (var col=1; col < this.n; col++) {
var vali=row[col];
var valj=this.R.data[col];
this.R.data[col]=c * vali + s * valj;
this.r_row[col]=c * valj - s * vali;
}
$I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(this.U_tran);
this.U_tran.data[0]=c;
this.U_tran.data[1]=s;
this.U_tran.data[this.m_m]=-s;
this.U_tran.data[this.m_m + 1]=c;
}, p$1);

Clazz.newMeth(C$, 'applyLaterGivens', function () {
for (var row=1; row < this.n; row++) {
var c;
var s;
var xi=this.r_row[row];
var xj=this.R.data[this.n * row + row];
var r=xi * xi + xj * xj;
if (r != 0 ) {
r=Math.sqrt(r);
c=xi / r;
s=xj / r;
} else {
c=1;
s=0;
}this.R.data[this.n * row + row]=r;
for (var col=row + 1; col < this.n; col++) {
var vali=this.r_row[col];
var valj=this.R.data[this.n * row + col];
this.R.data[this.n * row + col]=c * vali + s * valj;
this.r_row[col]=c * valj - s * vali;
}
for (var col=0; col <= row + 1; col++) {
var q1=this.U_tran.data[row * this.m_m + col];
var q2=this.U_tran.data[(row + 1) * this.m_m + col];
this.U_tran.data[row * this.m_m + col]=c * q1 + s * q2;
this.U_tran.data[(row + 1) * this.m_m + col]=c * q2 - s * q1;
}
}
}, p$1);

Clazz.newMeth(C$, 'computeRemoveGivens$I', function (selectedRow) {
$I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(this.U_tran);
var xj=this.Q.data[selectedRow * this.m + this.m - 1];
for (var j=this.m - 2; j >= 0; j--) {
var c;
var s;
var xi=this.Q.data[selectedRow * this.m + j];
var r=xi * xi + xj * xj;
if (r != 0 ) {
r=Math.sqrt(r);
c=xi / r;
s=xj / r;
} else {
c=1;
s=0;
}xj=r;
for (var col=j; col < this.m; col++) {
var q1=this.U_tran.data[j * this.m + col];
var q2=this.U_tran.data[(j + 1) * this.m + col];
this.U_tran.data[j * this.m + col]=c * q1 + s * q2;
this.U_tran.data[(j + 1) * this.m + col]=c * q2 - s * q1;
}
}
}, p$1);

Clazz.newMeth(C$, 'getU_tran$', function () {
return this.U_tran;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
