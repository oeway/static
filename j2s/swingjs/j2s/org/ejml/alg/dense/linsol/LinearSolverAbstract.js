(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol"),I$=[[0,'org.ejml.alg.dense.linsol.InvertUsingSolve']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverAbstract", null, null, 'org.ejml.factory.LinearSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numRows','numCols'],'O',['A','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'getA$', function () {
return this.A;
});

Clazz.newMeth(C$, '_setA$org_ejml_data_DenseMatrix64F', function (A) {
this.A=A;
this.numRows=A.numRows;
this.numCols=A.numCols;
});

Clazz.newMeth(C$, ['invert$org_ejml_data_DenseMatrix64F','invert$TT'], function (A_inv) {
$I$(1).invert$org_ejml_factory_LinearSolver$org_ejml_data_RowD1Matrix64F$org_ejml_data_DenseMatrix64F(this, this.A, A_inv);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
