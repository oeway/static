(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.alg.dense.mult.VectorVectorMult','org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.ops.SpecializedOps','org.ejml.ops.NormOps','org.ejml.UtilEjml','org.ejml.factory.LinearSolverFactory','org.ejml.ops.MatrixFeatures','org.ejml.data.Eigenpair','org.ejml.alg.dense.decomposition.eig.EigenPowerMethod']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EigenOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'computeEigenValue$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (A, eigenVector) {
var bottom=$I$(1).innerProd$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(eigenVector, eigenVector);
var top=$I$(1).innerProdA$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(eigenVector, A, eigenVector);
return top / bottom;
}, 1);

Clazz.newMeth(C$, 'computeEigenVector$org_ejml_data_DenseMatrix64F$D', function (A, eigenvalue) {
if (A.numRows != A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be a square matrix."]);
var M=Clazz.new_($I$(2,1).c$$I$I,[A.numRows, A.numCols]);
var x=Clazz.new_($I$(2,1).c$$I$I,[A.numRows, 1]);
var b=Clazz.new_($I$(2,1).c$$I$I,[A.numRows, 1]);
$I$(3).fill$org_ejml_data_D1Matrix64F$D(b, 1);
var origEigenvalue=eigenvalue;
$I$(4).addIdentity$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$D(A, M, -eigenvalue);
var threshold=$I$(5).normPInf$org_ejml_data_DenseMatrix64F(A) * $I$(6).EPS;
var prevError=1.7976931348623157E308;
var hasWorked=false;
var solver=$I$(7).linear$I(M.numRows);
var perp=1.0E-4;
for (var i=0; i < 200; i++) {
var failed=false;
if (!solver.setA$TT(M)) {
failed=true;
} else {
solver.solve$TT$TT(b, x);
}if ($I$(8).hasUncountable$org_ejml_data_D1Matrix64F(x)) {
failed=true;
}if (failed) {
if (!hasWorked) {
var val=i % 2 == 0 ? 1.0 - perp : 1.0 + perp;
eigenvalue=origEigenvalue * Math.pow(val, (i/2|0) + 1);
$I$(4).addIdentity$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$D(A, M, -eigenvalue);
} else {
return Clazz.new_($I$(9,1).c$$D$org_ejml_data_DenseMatrix64F,[eigenvalue, b]);
}} else {
hasWorked=true;
b.set$org_ejml_data_D1Matrix64F(x);
$I$(5).normalizeF$org_ejml_data_DenseMatrix64F(b);
$I$(3).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(M, b, x);
var error=$I$(5).normPInf$org_ejml_data_DenseMatrix64F(x);
if (error - prevError > $I$(6).EPS * 10 ) {
prevError=1.7976931348623157E308;
hasWorked=false;
var val=i % 2 == 0 ? 1.0 - perp : 1.0 + perp;
eigenvalue=origEigenvalue * Math.pow(val, 1);
} else {
if (error <= threshold  || Math.abs(prevError - error) <= $I$(6).EPS  ) return Clazz.new_($I$(9,1).c$$D$org_ejml_data_DenseMatrix64F,[eigenvalue, b]);
prevError=error;
eigenvalue=$I$(1).innerProdA$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(b, A, b);
}$I$(4).addIdentity$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$D(A, M, -eigenvalue);
}}
return null;
}, 1);

Clazz.newMeth(C$, 'dominantEigenpair$org_ejml_data_DenseMatrix64F', function (A) {
var power=Clazz.new_($I$(10,1).c$$I,[A.numRows]);
if (!power.computeShiftInvert$org_ejml_data_DenseMatrix64F$D(A, 0.1)) return null;
return null;
}, 1);

Clazz.newMeth(C$, 'boundLargestEigenValue$org_ejml_data_DenseMatrix64F$DA', function (A, bound) {
if (A.numRows != A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A must be a square matrix."]);
var min=1.7976931348623157E308;
var max=0;
var n=A.numRows;
for (var i=0; i < n; i++) {
var total=0;
for (var j=0; j < n; j++) {
var v=A.get$I$I(i, j);
if (v < 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix must be positive"]);
total += v;
}
if (total < min ) {
min=total;
}if (total > max ) {
max=total;
}}
if (bound == null ) bound=Clazz.array(Double.TYPE, [2]);
bound[0]=min;
bound[1]=max;
return bound;
}, 1);

Clazz.newMeth(C$, 'createMatrixD$org_ejml_factory_EigenDecomposition', function (eig) {
var N=eig.getNumberOfEigenvalues$();
var D=Clazz.new_($I$(2,1).c$$I$I,[N, N]);
for (var i=0; i < N; i++) {
var c=eig.getEigenvalue$I(i);
if (c.isReal$()) {
D.set$I$I$D(i, i, c.real);
}}
return D;
}, 1);

Clazz.newMeth(C$, 'createMatrixV$org_ejml_factory_EigenDecomposition', function (eig) {
var N=eig.getNumberOfEigenvalues$();
var V=Clazz.new_($I$(2,1).c$$I$I,[N, N]);
for (var i=0; i < N; i++) {
var c=eig.getEigenvalue$I(i);
if (c.isReal$()) {
var v=eig.getEigenVector$I(i);
if (v != null ) {
for (var j=0; j < N; j++) {
V.set$I$I$D(j, i, v.get$I$I(j, 0));
}
}}}
return V;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
