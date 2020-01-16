(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TriangularSolver");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'invertLower$DA$I', function (L, m) {
for (var i=0; i < m; i++) {
var L_ii=L[i * m + i];
for (var j=0; j < i; j++) {
var val=0;
for (var k=j; k < i; k++) {
val += L[i * m + k] * L[k * m + j];
}
L[i * m + j]=-val / L_ii;
}
L[i * m + i]=1.0 / L_ii;
}
}, 1);

Clazz.newMeth(C$, 'invertLower$DA$DA$I', function (L, L_inv, m) {
for (var i=0; i < m; i++) {
var L_ii=L[i * m + i];
for (var j=0; j < i; j++) {
var val=0;
for (var k=j; k < i; k++) {
val -= L[i * m + k] * L_inv[k * m + j];
}
L_inv[i * m + j]=val / L_ii;
}
L_inv[i * m + i]=1.0 / L_ii;
}
}, 1);

Clazz.newMeth(C$, 'solveL$DA$DA$I', function (L, b, n) {
for (var i=0; i < n; i++) {
var sum=b[i];
var indexL=i * n;
for (var k=0; k < i; k++) {
sum -= L[indexL++] * b[k];
}
b[i]=sum / L[indexL];
}
}, 1);

Clazz.newMeth(C$, 'solveL$DA$DA$I$I', function (L, b, m, n) {
for (var j=0; j < n; j++) {
for (var i=0; i < m; i++) {
var sum=b[i * n + j];
for (var k=0; k < i; k++) {
sum -= L[i * m + k] * b[k * n + j];
}
b[i * n + j]=sum / L[i * m + i];
}
}
}, 1);

Clazz.newMeth(C$, 'solveTranL$DA$DA$I', function (L, b, n) {
for (var i=n - 1; i >= 0; i--) {
var sum=b[i];
for (var k=i + 1; k < n; k++) {
sum -= L[k * n + i] * b[k];
}
b[i]=sum / L[i * n + i];
}
}, 1);

Clazz.newMeth(C$, 'solveU$DA$DA$I', function (U, b, n) {
for (var i=n - 1; i >= 0; i--) {
var sum=b[i];
var indexU=i * n + i + 1;
for (var j=i + 1; j < n; j++) {
sum -= U[indexU++] * b[j];
}
b[i]=sum / U[i * n + i];
}
}, 1);

Clazz.newMeth(C$, 'solveU$DA$DA$I$I$I', function (U, b, sideLength, minRow, maxRow) {
for (var i=maxRow - 1; i >= minRow; i--) {
var sum=b[i];
var indexU=i * sideLength + i + 1;
for (var j=i + 1; j < maxRow; j++) {
sum -= U[indexU++] * b[j];
}
b[i]=sum / U[i * sideLength + i];
}
}, 1);

Clazz.newMeth(C$, 'solveU$DA$I$I$I$DA$I$I$I', function (U, startU, strideU, widthU, b, startB, strideB, widthB) {
for (var colB=0; colB < widthB; colB++) {
for (var i=widthU - 1; i >= 0; i--) {
var sum=b[startB + i * strideB + colB];
for (var j=i + 1; j < widthU; j++) {
sum -= U[startU + i * strideU + j] * b[startB + j * strideB + colB];
}
b[startB + i * strideB + colB]=sum / U[startU + i * strideU + i];
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
