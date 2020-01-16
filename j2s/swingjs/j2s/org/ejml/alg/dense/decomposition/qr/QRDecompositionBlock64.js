(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.qr"),I$=[[0,'org.ejml.alg.block.decomposition.qr.BlockMatrix64HouseholderQR','org.ejml.EjmlParameters','org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.data.BlockMatrix64F','org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QRDecompositionBlock64", null, 'org.ejml.alg.dense.decomposition.BaseDecompositionBlock64', 'org.ejml.factory.QRDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$org_ejml_factory_DecompositionInterface$I.apply(this,[Clazz.new_($I$(1,1)), $I$(2).BLOCK_WIDTH]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['getQ$org_ejml_data_DenseMatrix64F$Z','getQ$TT$Z'], function (Q, compact) {
var minLength=Math.min(this.Ablock.numRows, this.Ablock.numCols);
if (Q == null ) {
if (compact) {
Q=Clazz.new_($I$(3,1).c$$I$I,[this.Ablock.numRows, minLength]);
$I$(4).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
} else {
Q=Clazz.new_($I$(3,1).c$$I$I,[this.Ablock.numRows, this.Ablock.numRows]);
$I$(4).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
}}var Qblock=Clazz.new_($I$(5,1));
Qblock.numRows=Q.numRows;
Qblock.numCols=Q.numCols;
Qblock.blockLength=this.blockLength;
Qblock.data=Q.data;
(this.alg).getQ$org_ejml_data_BlockMatrix64F$Z(Qblock, compact);
this.convertBlockToRow$I$I$I$DA(Q.numRows, Q.numCols, this.Ablock.blockLength, Q.data);
return Q;
});

Clazz.newMeth(C$, ['getR$org_ejml_data_DenseMatrix64F$Z','getR$TT$Z'], function (R, compact) {
var Rblock;
Rblock=(this.alg).getR$org_ejml_data_BlockMatrix64F$Z(null, compact);
if (R == null ) {
R=Clazz.new_($I$(3,1).c$$I$I,[Rblock.numRows, Rblock.numCols]);
}$I$(6).convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F(Rblock, R);
return R;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
