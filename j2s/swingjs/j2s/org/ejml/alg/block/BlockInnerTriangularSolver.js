(function(){var P$=Clazz.newPackage("org.ejml.alg.block"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BlockInnerTriangularSolver");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'invertLower$DA$DA$I$I$I', function (L, L_inv, m, offsetL, offsetL_inv) {
for (var i=0; i < m; i++) {
var L_ii=L[offsetL + i * m + i];
for (var j=0; j < i; j++) {
var val=0;
for (var k=j; k < i; k++) {
val += L[offsetL + i * m + k] * L_inv[offsetL_inv + k * m + j];
}
L_inv[offsetL_inv + i * m + j]=-val / L_ii;
}
L_inv[offsetL_inv + i * m + i]=1.0 / L_ii;
}
}, 1);

Clazz.newMeth(C$, 'invertLower$DA$I$I', function (L, m, offsetL) {
for (var i=0; i < m; i++) {
var L_ii=L[offsetL + i * m + i];
for (var j=0; j < i; j++) {
var val=0;
for (var k=j; k < i; k++) {
val += L[offsetL + i * m + k] * L[offsetL + k * m + j];
}
L[offsetL + i * m + j]=-val / L_ii;
}
L[offsetL + i * m + i]=1.0 / L_ii;
}
}, 1);

Clazz.newMeth(C$, 'solveL$DA$DA$I$I$I$I$I', function (L, b, m, n, strideL, offsetL, offsetB) {
for (var j=0; j < n; j++) {
for (var i=0; i < m; i++) {
var sum=b[offsetB + i * n + j];
for (var k=0; k < i; k++) {
sum -= L[offsetL + i * strideL + k] * b[offsetB + k * n + j];
}
b[offsetB + i * n + j]=sum / L[offsetL + i * strideL + i];
}
}
}, 1);

Clazz.newMeth(C$, 'solveTransL$DA$DA$I$I$I$I$I', function (L, b, m, n, strideL, offsetL, offsetB) {
for (var j=0; j < n; j++) {
for (var i=m - 1; i >= 0; i--) {
var sum=b[offsetB + i * n + j];
for (var k=i + 1; k < m; k++) {
sum -= L[offsetL + k * strideL + i] * b[offsetB + k * n + j];
}
b[offsetB + i * n + j]=sum / L[offsetL + i * strideL + i];
}
}
}, 1);

Clazz.newMeth(C$, 'solveLTransB$DA$DA$I$I$I$I$I', function (L, b, m, n, strideL, offsetL, offsetB) {
for (var j=0; j < n; j++) {
for (var i=0; i < m; i++) {
var sum=b[offsetB + j * m + i];
var l=offsetL + i * strideL;
var bb=offsetB + j * m;
var endL=l + i;
while (l != endL){
sum -= L[l++] * b[bb++];
}
b[offsetB + j * m + i]=sum / L[offsetL + i * strideL + i];
}
}
}, 1);

Clazz.newMeth(C$, 'solveU$DA$DA$I$I$I$I$I', function (U, b, m, n, strideU, offsetU, offsetB) {
for (var j=0; j < n; j++) {
for (var i=m - 1; i >= 0; i--) {
var sum=b[offsetB + i * n + j];
for (var k=i + 1; k < m; k++) {
sum -= U[offsetU + i * strideU + k] * b[offsetB + k * n + j];
}
b[offsetB + i * n + j]=sum / U[offsetU + i * strideU + i];
}
}
}, 1);

Clazz.newMeth(C$, 'solveTransU$DA$DA$I$I$I$I$I', function (U, b, m, n, strideU, offsetU, offsetB) {
for (var j=0; j < n; j++) {
for (var i=0; i < m; i++) {
var sum=b[offsetB + i * n + j];
for (var k=0; k < i; k++) {
sum -= U[offsetU + k * strideU + i] * b[offsetB + k * n + j];
}
b[offsetB + i * n + j]=sum / U[offsetU + i * strideU + i];
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
