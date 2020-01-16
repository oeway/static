(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol"),I$=[[0,'org.ejml.alg.dense.misc.UnrolledInverseFromMinor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverUnrolled", null, null, 'org.ejml.factory.LinearSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['A','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
if (A.numRows != A.numCols) return false;
this.A=A;
return A.numRows <= 5;
});

Clazz.newMeth(C$, 'quality$', function () {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not supported by this solver."]);
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Not supported"]);
});

Clazz.newMeth(C$, ['invert$org_ejml_data_DenseMatrix64F','invert$TT'], function (A_inv) {
if (this.A.numRows == 1) A_inv.set$I$D(0, 1.0 / this.A.get$I(0));
$I$(1).inv$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.A, A_inv);
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return false;
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
