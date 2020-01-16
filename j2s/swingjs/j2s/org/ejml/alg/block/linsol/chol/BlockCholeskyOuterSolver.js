(function(){var P$=Clazz.newPackage("org.ejml.alg.block.linsol.chol"),I$=[[0,'org.ejml.alg.block.decomposition.chol.BlockCholeskyOuterForm','org.ejml.ops.SpecializedOps','org.ejml.data.D1Submatrix64F','org.ejml.alg.block.BlockTriangularSolver','org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockCholeskyOuterSolver", null, null, 'org.ejml.factory.LinearSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chol=Clazz.new_($I$(1,1).c$$Z,[true]);
}, 1);

C$.$fields$=[['I',['blockLength'],'O',['chol','org.ejml.alg.block.decomposition.chol.BlockCholeskyOuterForm','temp','double[]']]]

Clazz.newMeth(C$, ['setA$org_ejml_data_BlockMatrix64F','setA$TT'], function (A) {
if (!this.chol.decompose$org_ejml_data_BlockMatrix64F(A)) return false;
this.blockLength=A.blockLength;
return true;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(2).qualityTriangular$Z$org_ejml_data_D1Matrix64F(false, this.chol.getT$org_ejml_data_BlockMatrix64F(null));
});

Clazz.newMeth(C$, ['solve$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F','solve$TT$TT'], function (B, X) {
if (B.blockLength != this.blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected blocklength in B."]);
var L=Clazz.new_($I$(3,1).c$$org_ejml_data_D1Matrix64F,[this.chol.getT$org_ejml_data_BlockMatrix64F(null)]);
if (X != null ) {
if (X.blockLength != this.blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected blocklength in X."]);
if (X.numRows != L.col1) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not enough rows in X"]);
}if (B.numRows != L.col1) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not enough rows in B"]);
$I$(4).solve$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z(this.blockLength, false, L, Clazz.new_($I$(3,1).c$$org_ejml_data_D1Matrix64F,[B]), false);
$I$(4).solve$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z(this.blockLength, false, L, Clazz.new_($I$(3,1).c$$org_ejml_data_D1Matrix64F,[B]), true);
if (X != null ) {
$I$(5).extractAligned$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F(B, X);
}});

Clazz.newMeth(C$, ['invert$org_ejml_data_BlockMatrix64F','invert$TT'], function (A_inv) {
var T=this.chol.getT$org_ejml_data_BlockMatrix64F(null);
if (A_inv.numRows != T.numRows || A_inv.numCols != T.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected number or rows and/or columns"]);
if (this.temp == null  || this.temp.length < this.blockLength * this.blockLength ) this.temp=Clazz.array(Double.TYPE, [this.blockLength * this.blockLength]);
$I$(5).zeroTriangle$Z$org_ejml_data_BlockMatrix64F(true, A_inv);
var L=Clazz.new_($I$(3,1).c$$org_ejml_data_D1Matrix64F,[T]);
var B=Clazz.new_($I$(3,1).c$$org_ejml_data_D1Matrix64F,[A_inv]);
$I$(4).invert$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA(this.blockLength, false, L, B, this.temp);
$I$(4).solveL$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z(this.blockLength, L, B, true);
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return this.chol.inputModified$();
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
