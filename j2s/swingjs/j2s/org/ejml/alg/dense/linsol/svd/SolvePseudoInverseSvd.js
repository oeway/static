(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.svd"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.UtilEjml','org.ejml.factory.DecompositionFactory','org.ejml.ops.CommonOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SolvePseudoInverseSvd", null, null, 'org.ejml.factory.LinearSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pinv=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.threshold=$I$(2).EPS;
}, 1);

C$.$fields$=[['D',['threshold'],'O',['svd','org.ejml.factory.SingularValueDecomposition','pinv','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$I$I', function (maxRows, maxCols) {
;C$.$init$.apply(this);
this.svd=$I$(3).svd$I$I$Z$Z$Z(maxRows, maxCols, true, true, true);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$I.apply(this, [100, 100]);
}, 1);

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
this.pinv.reshape$I$I$Z(A.numCols, A.numRows, false);
if (!this.svd.decompose$TT(A)) return false;
var U_t=this.svd.getU$TT$Z(null, true);
var V=this.svd.getV$TT$Z(null, false);
var S=this.svd.getSingularValues$();
var N=Math.min(A.numRows, A.numCols);
var maxSingular=0;
for (var i=0; i < N; i++) {
if (S[i] > maxSingular ) maxSingular=S[i];
}
var tau=this.threshold * Math.max(A.numCols, A.numRows) * maxSingular ;
for (var i=0; i < N; i++) {
var s=S[i];
if (s < tau ) S[i]=0;
 else S[i]=1.0 / S[i];
}
for (var i=0; i < V.numRows; i++) {
var index=i * V.numCols;
for (var j=0; j < V.numCols; j++) {
V.data[index++] *= S[j];
}
}
$I$(4).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(V, U_t, this.pinv);
return true;
});

Clazz.newMeth(C$, 'quality$', function () {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not supported by this solver."]);
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (b, x) {
$I$(4).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.pinv, b, x);
});

Clazz.newMeth(C$, ['invert$org_ejml_data_DenseMatrix64F','invert$TT'], function (A_inv) {
A_inv.set$org_ejml_data_D1Matrix64F(this.pinv);
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return this.svd.inputModified$();
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});

Clazz.newMeth(C$, 'setThreshold$D', function (threshold) {
this.threshold=threshold;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
