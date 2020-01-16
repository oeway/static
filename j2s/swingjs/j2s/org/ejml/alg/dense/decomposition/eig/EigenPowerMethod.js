(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.ops.NormOps','org.ejml.ops.SpecializedOps','org.ejml.factory.LinearSolverFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EigenPowerMethod");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tol=1.0E-10;
this.maxIterations=20;
}, 1);

C$.$fields$=[['D',['tol'],'I',['maxIterations'],'O',['q0','org.ejml.data.DenseMatrix64F','+q1','+q2','+B','+seed']]]

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.$init$.apply(this);
this.q0=Clazz.new_($I$(1,1).c$$I$I,[size, 1]);
this.q1=Clazz.new_($I$(1,1).c$$I$I,[size, 1]);
this.q2=Clazz.new_($I$(1,1).c$$I$I,[size, 1]);
this.B=Clazz.new_($I$(1,1).c$$I$I,[size, size]);
}, 1);

Clazz.newMeth(C$, 'setSeed$org_ejml_data_DenseMatrix64F', function (seed) {
this.seed=seed;
});

Clazz.newMeth(C$, 'setOptions$I$D', function (maxIterations, tolerance) {
this.maxIterations=maxIterations;
this.tol=tolerance;
});

Clazz.newMeth(C$, 'computeDirect$org_ejml_data_DenseMatrix64F', function (A) {
p$1.initPower$org_ejml_data_DenseMatrix64F.apply(this, [A]);
var converged=false;
for (var i=0; i < this.maxIterations && !converged ; i++) {
$I$(2).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(A, this.q0, this.q1);
var s=$I$(3).normPInf$org_ejml_data_DenseMatrix64F(this.q1);
$I$(2).divide$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(s, this.q1, this.q2);
converged=p$1.checkConverged$org_ejml_data_DenseMatrix64F.apply(this, [A]);
}
return converged;
});

Clazz.newMeth(C$, 'initPower$org_ejml_data_DenseMatrix64F', function (A) {
if (A.numRows != A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A must be a square matrix."]);
if (this.seed != null ) {
this.q0.set$org_ejml_data_D1Matrix64F(this.seed);
} else {
for (var i=0; i < A.numRows; i++) {
this.q0.data[i]=1;
}
}}, p$1);

Clazz.newMeth(C$, 'checkConverged$org_ejml_data_DenseMatrix64F', function (A) {
var worst=0;
var worst2=0;
for (var j=0; j < A.numRows; j++) {
var val=Math.abs(this.q2.data[j] - this.q0.data[j]);
if (val > worst ) worst=val;
val=Math.abs(this.q2.data[j] + this.q0.data[j]);
if (val > worst2 ) worst2=val;
}
var temp=this.q0;
this.q0=this.q2;
this.q2=temp;
if (worst < this.tol ) return true;
 else if (worst2 < this.tol ) return true;
 else return false;
}, p$1);

Clazz.newMeth(C$, 'computeShiftDirect$org_ejml_data_DenseMatrix64F$D', function (A, alpha) {
$I$(4).addIdentity$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$D(A, this.B, -alpha);
return this.computeDirect$org_ejml_data_DenseMatrix64F(this.B);
});

Clazz.newMeth(C$, 'computeShiftInvert$org_ejml_data_DenseMatrix64F$D', function (A, alpha) {
p$1.initPower$org_ejml_data_DenseMatrix64F.apply(this, [A]);
var solver=$I$(5).linear$I(A.numCols);
$I$(4).addIdentity$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$D(A, this.B, -alpha);
solver.setA$TT(this.B);
var converged=false;
for (var i=0; i < this.maxIterations && !converged ; i++) {
solver.solve$TT$TT(this.q0, this.q1);
var s=$I$(3).normPInf$org_ejml_data_DenseMatrix64F(this.q1);
$I$(2).divide$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(s, this.q1, this.q2);
converged=p$1.checkConverged$org_ejml_data_DenseMatrix64F.apply(this, [A]);
}
return converged;
});

Clazz.newMeth(C$, 'getEigenVector$', function () {
return this.q0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
