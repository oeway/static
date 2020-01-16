(function(){var P$=Clazz.newPackage("org.ejml.alg.block.linsol.qr"),I$=[[0,'org.ejml.alg.block.decomposition.qr.BlockMatrix64HouseholderQR','org.ejml.ops.SpecializedOps','org.ejml.alg.block.BlockMatrixOps','org.ejml.alg.block.BlockTriangularSolver','org.ejml.data.D1Submatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockQrHouseHolderSolver", null, null, 'org.ejml.factory.LinearSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.decomp=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['decomp','org.ejml.alg.block.decomposition.qr.BlockMatrix64HouseholderQR','QR','org.ejml.data.BlockMatrix64F']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.decomp.setSaveW$Z(false);
}, 1);

Clazz.newMeth(C$, ['setA$org_ejml_data_BlockMatrix64F','setA$TT'], function (A) {
if (A.numRows < A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows must be more than or equal to the number of columns.  Can\'t solve an underdetermined system."]);
if (!this.decomp.decompose$org_ejml_data_BlockMatrix64F(A)) return false;
this.QR=this.decomp.getQR$();
return true;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(2).qualityTriangular$Z$org_ejml_data_D1Matrix64F(true, this.decomp.getQR$());
});

Clazz.newMeth(C$, ['solve$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F','solve$TT$TT'], function (B, X) {
if (B.numCols != X.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Columns of B and X do not match"]);
if (this.QR.numCols != X.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Rows in X do not match the columns in A"]);
if (this.QR.numRows != B.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Rows in B do not match the rows in A."]);
if (B.blockLength != this.QR.blockLength || X.blockLength != this.QR.blockLength ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["All matrices must have the same block length."]);
this.decomp.applyQTran$org_ejml_data_BlockMatrix64F(B);
$I$(3).extractAligned$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F(B, X);
var M=Math.min(this.QR.numRows, this.QR.numCols);
$I$(4).solve$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z(this.QR.blockLength, true, Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[this.QR, 0, M, 0, M]), Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[X]), false);
});

Clazz.newMeth(C$, ['invert$org_ejml_data_BlockMatrix64F','invert$TT'], function (A_inv) {
var M=Math.min(this.QR.numRows, this.QR.numCols);
if (A_inv.numRows != M || A_inv.numCols != M ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A_inv must be square an have dimension " + M]);
$I$(3).setIdentity$org_ejml_data_BlockMatrix64F(A_inv);
this.decomp.applyQTran$org_ejml_data_BlockMatrix64F(A_inv);
$I$(4).solve$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z(this.QR.blockLength, true, Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[this.QR, 0, M, 0, M]), Clazz.new_($I$(5,1).c$$org_ejml_data_D1Matrix64F,[A_inv]), false);
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return this.decomp.inputModified$();
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return true;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
