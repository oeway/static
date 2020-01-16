(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.lu"),I$=[[0,'org.ejml.ops.SpecializedOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverLuKJI", null, 'org.ejml.alg.dense.linsol.lu.LinearSolverLuBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataLU','double[]','pivot','int[]']]]

Clazz.newMeth(C$, 'c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase', function (decomp) {
;C$.superclazz.c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase.apply(this,[decomp]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
var ret=C$.superclazz.prototype.setA$org_ejml_data_DenseMatrix64F.apply(this, [A]);
this.pivot=this.decomp.getPivot$();
this.dataLU=this.decomp.getLU$().data;
return ret;
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (b, x) {
if (b.numCols != x.numCols && b.numRows != this.numCols  && x.numRows != this.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix size"]);
}if (b !== x ) {
$I$(1).copyChangeRow$IA$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.pivot, b, x);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Current doesn\'t support using the same matrix instance"]);
}var nx=b.numCols;
var dataX=x.data;
for (var k=0; k < this.numCols; k++) {
for (var i=k + 1; i < this.numCols; i++) {
for (var j=0; j < nx; j++) {
dataX[i * nx + j] -= dataX[k * nx + j] * this.dataLU[i * this.numCols + k];
}
}
}
for (var k=this.numCols - 1; k >= 0; k--) {
for (var j=0; j < nx; j++) {
dataX[k * nx + j] /= this.dataLU[k * this.numCols + k];
}
for (var i=0; i < k; i++) {
for (var j=0; j < nx; j++) {
dataX[i * nx + j] -= dataX[k * nx + j] * this.dataLU[i * this.numCols + k];
}
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
