(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.qr"),I$=[[0,'org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholderColumn','org.ejml.alg.dense.decomposition.qr.QrUpdate','org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AdjLinearSolverQr", null, 'org.ejml.alg.dense.linsol.qr.LinearSolverQr', 'org.ejml.alg.dense.linsol.AdjustableLinearSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['update','org.ejml.alg.dense.decomposition.qr.QrUpdate','$A','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$org_ejml_factory_QRDecomposition.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setMaxSize$I$I', function (maxRows, maxCols) {
maxRows+=5;
C$.superclazz.prototype.setMaxSize$I$I.apply(this, [maxRows, maxCols]);
this.update=Clazz.new_($I$(2,1).c$$I$I$Z,[maxRows, maxCols, true]);
this.$A=Clazz.new_($I$(3,1).c$$I$I,[maxRows, maxCols]);
});

Clazz.newMeth(C$, 'getA$', function () {
if (this.$A.data.length < this.numRows * this.numCols) {
this.$A=Clazz.new_($I$(3,1).c$$I$I,[this.numRows, this.numCols]);
}this.$A.reshape$I$I$Z(this.numRows, this.numCols, false);
$I$(4).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.Q, this.R, this.$A);
return this.$A;
});

Clazz.newMeth(C$, 'addRowToA$DA$I', function (A_row, rowIndex) {
if (this.numRows + 1 > this.maxRows) {
var grow=(this.maxRows/10|0);
if (grow < 1) grow=1;
this.maxRows=this.numRows + grow;
this.Q.reshape$I$I$Z(this.maxRows, this.maxRows, true);
this.R.reshape$I$I$Z(this.maxRows, this.maxCols, true);
}this.update.addRow$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$DA$I$Z(this.Q, this.R, A_row, rowIndex, true);
this.numRows++;
return true;
});

Clazz.newMeth(C$, 'removeRowFromA$I', function (index) {
this.update.deleteRow$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$I$Z(this.Q, this.R, index, true);
this.numRows--;
return true;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
