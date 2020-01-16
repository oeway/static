(function(){var P$=Clazz.newPackage("org.ejml.alg.block.decomposition.chol"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BlockInnerCholesky");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'upper$org_ejml_data_D1Submatrix64F', function (T) {
var n=T.row1 - T.row0;
var indexT=T.row0 * T.original.numCols + T.col0 * n;
return C$.upper$DA$I$I(T.original.data, indexT, n);
}, 1);

Clazz.newMeth(C$, 'lower$org_ejml_data_D1Submatrix64F', function (T) {
var n=T.row1 - T.row0;
var indexT=T.row0 * T.original.numCols + T.col0 * n;
return C$.lower$DA$I$I(T.original.data, indexT, n);
}, 1);

Clazz.newMeth(C$, 'upper$DA$I$I', function (T, indexT, n) {
var el_ii;
var div_el_ii=0;
for (var i=0; i < n; i++) {
for (var j=i; j < n; j++) {
var sum=T[indexT + i * n + j];
for (var k=0; k < i; k++) {
sum -= T[indexT + k * n + i] * T[indexT + k * n + j];
}
if (i == j) {
if (sum <= 0.0 ) return false;
el_ii=Math.sqrt(sum);
T[indexT + i * n + i]=el_ii;
div_el_ii=1.0 / el_ii;
} else {
T[indexT + i * n + j]=sum * div_el_ii;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'lower$DA$I$I', function (T, indexT, n) {
var el_ii;
var div_el_ii=0;
for (var i=0; i < n; i++) {
for (var j=i; j < n; j++) {
var sum=T[indexT + j * n + i];
for (var k=0; k < i; k++) {
sum -= T[indexT + i * n + k] * T[indexT + j * n + k];
}
if (i == j) {
if (sum <= 0.0 ) return false;
el_ii=Math.sqrt(sum);
T[indexT + i * n + i]=el_ii;
div_el_ii=1.0 / el_ii;
} else {
T[indexT + j * n + i]=sum * div_el_ii;
}}
}
return true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
