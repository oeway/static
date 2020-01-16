(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RrefGaussJordanRowPivot", null, null, 'org.ejml.factory.ReducedRowEchelonForm');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['tol']]]

Clazz.newMeth(C$, 'setTolerance$D', function (tol) {
this.tol=tol;
});

Clazz.newMeth(C$, ['reduce$org_ejml_data_DenseMatrix64F$I','reduce$TT$I'], function (A, coefficientColumns) {
if (A.numCols < coefficientColumns) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The system must be at least as wide as A"]);
var leadIndex=0;
for (var i=0; i < coefficientColumns; i++) {
var pivotRow=-1;
var maxValue=this.tol;
for (var row=leadIndex; row < A.numRows; row++) {
var v=Math.abs(A.data[row * A.numCols + i]);
if (v > maxValue ) {
maxValue=v;
pivotRow=row;
}}
if (pivotRow == -1) continue;
if (leadIndex != pivotRow) C$.swapRows$org_ejml_data_DenseMatrix64F$I$I(A, leadIndex, pivotRow);
for (var row=0; row < A.numRows; row++) {
if (row == leadIndex) continue;
var indexPivot=leadIndex * A.numCols + i;
var indexTarget=row * A.numCols + i;
var alpha=A.data[indexTarget] / A.data[indexPivot++];
A.data[indexTarget++]=0;
for (var col=i + 1; col < A.numCols; col++) {
A.data[indexTarget++] -= A.data[indexPivot++] * alpha;
}
}
var indexPivot=leadIndex * A.numCols + i;
var alpha=1.0 / A.data[indexPivot];
A.data[indexPivot++]=1;
for (var col=i + 1; col < A.numCols; col++) {
A.data[indexPivot++] *= alpha;
}
leadIndex++;
}
});

Clazz.newMeth(C$, 'swapRows$org_ejml_data_DenseMatrix64F$I$I', function (A, rowA, rowB) {
var indexA=rowA * A.numCols;
var indexB=rowB * A.numCols;
for (var i=0; i < A.numCols; i++, indexA++, indexB++) {
var temp=A.data[indexA];
A.data[indexA]=A.data[indexB];
A.data[indexB]=temp;
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
