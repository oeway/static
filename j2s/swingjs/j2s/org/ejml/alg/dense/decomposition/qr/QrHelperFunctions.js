(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.qr"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "QrHelperFunctions");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'findMax$DA$I$I', function (u, startU, length) {
var max=-1;
var index=startU;
var stopIndex=startU + length;
for (; index < stopIndex; index++) {
var val=u[index];
val=(val < 0.0 ) ? -val : val;
if (val > max ) max=val;
}
return max;
}, 1);

Clazz.newMeth(C$, 'divideElements$I$I$DA$D', function (j, numRows, u, u_0) {
for (var i=j; i < numRows; i++) {
u[i] /= u_0;
}
}, 1);

Clazz.newMeth(C$, 'divideElements$I$I$DA$I$D', function (j, numRows, u, startU, u_0) {
for (var i=j; i < numRows; i++) {
u[i + startU] /= u_0;
}
}, 1);

Clazz.newMeth(C$, 'divideElements_Brow$I$I$DA$DA$I$D', function (j, numRows, u, b, startB, u_0) {
for (var i=j; i < numRows; i++) {
u[i]=b[i + startB] /= u_0;
}
}, 1);

Clazz.newMeth(C$, 'divideElements_Bcol$I$I$I$DA$DA$I$D', function (j, numRows, numCols, u, b, startB, u_0) {
var indexB=j * numCols + startB;
for (var i=j; i < numRows; i++, indexB+=numCols) {
b[indexB]=u[i] /= u_0;
}
}, 1);

Clazz.newMeth(C$, 'computeTauAndDivide$I$I$DA$I$D', function (j, numRows, u, startU, max) {
var tau=0;
for (var i=j; i < numRows; i++) {
var d=u[startU + i] /= max;
tau += d * d;
}
tau=Math.sqrt(tau);
if (u[startU + j] < 0 ) tau=-tau;
return tau;
}, 1);

Clazz.newMeth(C$, 'computeTauAndDivide$I$I$DA$D', function (j, numRows, u, max) {
var tau=0;
for (var i=j; i < numRows; i++) {
var d=u[i] /= max;
tau += d * d;
}
tau=Math.sqrt(tau);
if (u[j] < 0 ) tau=-tau;
return tau;
}, 1);

Clazz.newMeth(C$, 'rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA', function (A, u, gamma, colA0, w0, w1, _temp) {
for (var i=colA0; i < A.numCols; i++) {
_temp[i]=u[w0] * A.data[w0 * A.numCols + i];
}
for (var k=w0 + 1; k < w1; k++) {
var indexA=k * A.numCols + colA0;
var valU=u[k];
for (var i=colA0; i < A.numCols; i++) {
_temp[i] += valU * A.data[indexA++];
}
}
for (var i=colA0; i < A.numCols; i++) {
_temp[i] *= gamma;
}
for (var i=w0; i < w1; i++) {
var valU=u[i];
var indexA=i * A.numCols + colA0;
for (var j=colA0; j < A.numCols; j++) {
A.data[indexA++] -= valU * _temp[j];
}
}
}, 1);

Clazz.newMeth(C$, 'rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$I$D$I$I$I$DA', function (A, u, offsetU, gamma, colA0, w0, w1, _temp) {
for (var i=colA0; i < A.numCols; i++) {
_temp[i]=u[w0 + offsetU] * A.data[w0 * A.numCols + i];
}
for (var k=w0 + 1; k < w1; k++) {
var indexA=k * A.numCols + colA0;
var valU=u[k + offsetU];
for (var i=colA0; i < A.numCols; i++) {
_temp[i] += valU * A.data[indexA++];
}
}
for (var i=colA0; i < A.numCols; i++) {
_temp[i] *= gamma;
}
for (var i=w0; i < w1; i++) {
var valU=u[i + offsetU];
var indexA=i * A.numCols + colA0;
for (var j=colA0; j < A.numCols; j++) {
A.data[indexA++] -= valU * _temp[j];
}
}
}, 1);

Clazz.newMeth(C$, 'rank1UpdateMultL$org_ejml_data_DenseMatrix64F$DA$D$I$I$I', function (A, u, gamma, colA0, w0, w1) {
for (var i=colA0; i < A.numRows; i++) {
var startIndex=i * A.numCols + w0;
var sum=0;
var rowIndex=startIndex;
for (var j=w0; j < w1; j++) {
sum += A.data[rowIndex++] * u[j];
}
sum=-gamma * sum;
rowIndex=startIndex;
for (var j=w0; j < w1; j++) {
A.data[rowIndex++] += sum * u[j];
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
