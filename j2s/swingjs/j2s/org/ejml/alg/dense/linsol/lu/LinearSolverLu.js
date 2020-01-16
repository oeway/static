(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.lu"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LinearSolverLu", null, 'org.ejml.alg.dense.linsol.lu.LinearSolverLuBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doImprove=false;
}, 1);

C$.$fields$=[['Z',['doImprove']]]

Clazz.newMeth(C$, 'c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase', function (decomp) {
;C$.superclazz.c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase.apply(this,[decomp]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase$Z', function (decomp, doImprove) {
;C$.superclazz.c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase.apply(this,[decomp]);C$.$init$.apply(this);
this.doImprove=doImprove;
}, 1);

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (b, x) {
if (b.numCols != x.numCols && b.numRows != this.numCols  && x.numRows != this.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix size"]);
}var numCols=b.numCols;
var dataB=b.data;
var dataX=x.data;
var vv=this.decomp._getVV$();
for (var j=0; j < numCols; j++) {
var index=j;
for (var i=0; i < this.numCols; i++, index+=numCols) vv[i]=dataB[index];

this.decomp._solveVectorInternal$DA(vv);
index=j;
for (var i=0; i < this.numCols; i++, index+=numCols) dataX[index]=vv[i];

}
if (this.doImprove) {
this.improveSol$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(b, x);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
