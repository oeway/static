(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.bidiagonal"),I$=[[0,'org.ejml.factory.DecompositionFactory','org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecompositionRow','org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.UtilEjml']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BidiagonalDecompositionTall", null, null, 'org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.decompQRP=$I$(1).qrp$I$I(500, 100);
this.decompBi=Clazz.new_($I$(2,1));
this.B=Clazz.new_($I$(3,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['I',['m','n','min'],'O',['decompQRP','org.ejml.factory.QRPDecomposition','decompBi','org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecomposition','B','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'getDiagonal$DA$DA', function (diag, off) {
diag[0]=this.B.get$I(0);
for (var i=1; i < this.n; i++) {
diag[i]=this.B.unsafe_get$I$I(i, i);
off[i - 1]=this.B.unsafe_get$I$I(i - 1, i);
}
});

Clazz.newMeth(C$, ['getB$org_ejml_data_DenseMatrix64F$Z','getB$TT$Z'], function (B, compact) {
B=$I$(2).handleB$org_ejml_data_DenseMatrix64F$Z$I$I$I(B, compact, this.m, this.n, this.min);
B.set$I$I$D(0, 0, this.B.get$I$I(0, 0));
for (var i=1; i < this.min; i++) {
B.set$I$I$D(i, i, this.B.get$I$I(i, i));
B.set$I$I$D(i - 1, i, this.B.get$I$I(i - 1, i));
}
if (this.n > this.m) B.set$I$I$D(this.min - 1, this.min, this.B.get$I$I(this.min - 1, this.min));
return B;
});

Clazz.newMeth(C$, ['getU$org_ejml_data_DenseMatrix64F$Z$Z','getU$TT$Z$Z'], function (U, transpose, compact) {
U=$I$(2).handleU$org_ejml_data_DenseMatrix64F$Z$Z$I$I$I(U, false, compact, this.m, this.n, this.min);
if (compact) {
var Q1=this.decompQRP.getQ$TT$Z(null, true);
var U1=this.decompBi.getU$TT$Z$Z(null, false, true);
$I$(4).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(Q1, U1, U);
} else {
var Q=this.decompQRP.getQ$TT$Z(U, false);
var U1=this.decompBi.getU$TT$Z$Z(null, false, true);
var Q1=$I$(4).extract$org_ejml_data_DenseMatrix64F$I$I$I$I(Q, 0, Q.numRows, 0, this.min);
var tmp=Clazz.new_($I$(3,1).c$$I$I,[Q1.numRows, U1.numCols]);
$I$(4).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(Q1, U1, tmp);
$I$(4).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(tmp, Q, 0, 0);
}if (transpose) $I$(4).transpose$org_ejml_data_DenseMatrix64F(U);
return U;
});

Clazz.newMeth(C$, ['getV$org_ejml_data_DenseMatrix64F$Z$Z','getV$TT$Z$Z'], function (V, transpose, compact) {
return this.decompBi.getV$TT$Z$Z(V, transpose, compact);
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (orig) {
this.decompQRP.setSingularThreshold$D($I$(4).elementMaxAbs$org_ejml_data_D1Matrix64F(orig) * $I$(5).EPS);
if (!this.decompQRP.decompose$TT(orig)) {
return false;
}this.m=orig.numRows;
this.n=orig.numCols;
this.min=Math.min(this.m, this.n);
this.B.reshape$I$I$Z(this.min, this.n, false);
this.decompQRP.getR$TT$Z(this.B, true);
var result=Clazz.new_($I$(3,1).c$$I$I,[this.min, this.n]);
var P=this.decompQRP.getPivotMatrix$org_ejml_data_DenseMatrix64F(null);
$I$(4).multTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.B, P, result);
this.B.set$org_ejml_data_D1Matrix64F(result);
return this.decompBi.decompose$TT(this.B);
});

Clazz.newMeth(C$, 'inputModified$', function () {
return this.decompQRP.inputModified$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
