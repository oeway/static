(function(){var P$=Clazz.newPackage("org.ejml.alg.generic"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GenericMatrixOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isEquivalent$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$D', function (a, b, tol) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) return false;
for (var i=0; i < a.numRows; i++) {
for (var j=0; j < a.numCols; j++) {
var diff=Math.abs(a.get$I$I(i, j) - b.get$I$I(i, j));
if (diff > tol ) return false;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isIdentity$org_ejml_data_ReshapeMatrix64F$D', function (a, tol) {
for (var i=0; i < a.numRows; i++) {
for (var j=0; j < a.numCols; j++) {
if (i == j) {
if (Math.abs(a.get$I$I(i, j) - 1.0) > tol ) return false;
} else {
if (Math.abs(a.get$I$I(i, j)) > tol ) return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isEquivalentTriangle$Z$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$D', function (upper, a, b, tol) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) return false;
if (upper) {
for (var i=0; i < a.numRows; i++) {
for (var j=i; j < a.numCols; j++) {
var diff=Math.abs(a.get$I$I(i, j) - b.get$I$I(i, j));
if (diff > tol ) return false;
}
}
} else {
for (var j=0; j < a.numCols; j++) {
for (var i=j; i < a.numRows; i++) {
var diff=Math.abs(a.get$I$I(i, j) - b.get$I$I(i, j));
if (diff > tol ) return false;
}
}
}return true;
}, 1);

Clazz.newMeth(C$, 'copy$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F', function (from, to) {
var numCols=from.getNumCols$();
var numRows=from.getNumRows$();
for (var i=0; i < numRows; i++) {
for (var j=0; j < numCols; j++) {
to.set$I$I$D(i, j, from.get$I$I(i, j));
}
}
}, 1);

Clazz.newMeth(C$, 'setRandom$org_ejml_data_ReshapeMatrix64F$D$D$java_util_Random', function (a, min, max, rand) {
for (var i=0; i < a.numRows; i++) {
for (var j=0; j < a.numCols; j++) {
var val=rand.nextDouble$() * (max - min) + min;
a.set$I$I$D(i, j, val);
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
