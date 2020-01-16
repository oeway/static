(function(){var P$=Clazz.newPackage("org.ejml.alg.block.decomposition.chol"),p$1={},I$=[[0,'org.ejml.data.D1Submatrix64F','org.ejml.alg.block.decomposition.chol.BlockInnerCholesky','org.ejml.alg.block.BlockTriangularSolver','org.ejml.alg.block.BlockInnerRankUpdate','org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockCholeskyOuterForm", null, null, 'org.ejml.factory.CholeskyDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lower=false;
}, 1);

C$.$fields$=[['Z',['lower'],'O',['T','org.ejml.data.BlockMatrix64F']]]

Clazz.newMeth(C$, 'c$$Z', function (lower) {
;C$.$init$.apply(this);
this.lower=lower;
}, 1);

Clazz.newMeth(C$, ['decompose$org_ejml_data_BlockMatrix64F','decompose$TT'], function (A) {
if (A.numCols != A.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A must be square"]);
this.T=A;
if (this.lower) return p$1.decomposeLower.apply(this, []);
 else return p$1.decomposeUpper.apply(this, []);
});

Clazz.newMeth(C$, 'decomposeLower', function () {
var blockLength=this.T.blockLength;
var subA=Clazz.new_($I$(1,1).c$$org_ejml_data_D1Matrix64F,[this.T]);
var subB=Clazz.new_($I$(1,1).c$$org_ejml_data_D1Matrix64F,[this.T]);
var subC=Clazz.new_($I$(1,1).c$$org_ejml_data_D1Matrix64F,[this.T]);
for (var i=0; i < this.T.numCols; i+=blockLength) {
var widthA=Math.min(blockLength, this.T.numCols - i);
subA.col0=i;
subA.col1=i + widthA;
subA.row0=subA.col0;
subA.row1=subA.col1;
subB.col0=i;
subB.col1=i + widthA;
subB.row0=i + widthA;
subB.row1=this.T.numRows;
subC.col0=i + widthA;
subC.col1=this.T.numRows;
subC.row0=i + widthA;
subC.row1=this.T.numRows;
if (!$I$(2).lower$org_ejml_data_D1Submatrix64F(subA)) return false;
if (widthA == blockLength) {
$I$(3).solveBlock$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z$Z(blockLength, false, subA, subB, false, true);
$I$(4).symmRankNMinus_L$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, subC, subB);
}}
$I$(5).zeroTriangle$Z$org_ejml_data_BlockMatrix64F(true, this.T);
return true;
}, p$1);

Clazz.newMeth(C$, 'decomposeUpper', function () {
var blockLength=this.T.blockLength;
var subA=Clazz.new_($I$(1,1).c$$org_ejml_data_D1Matrix64F,[this.T]);
var subB=Clazz.new_($I$(1,1).c$$org_ejml_data_D1Matrix64F,[this.T]);
var subC=Clazz.new_($I$(1,1).c$$org_ejml_data_D1Matrix64F,[this.T]);
for (var i=0; i < this.T.numCols; i+=blockLength) {
var widthA=Math.min(blockLength, this.T.numCols - i);
subA.col0=i;
subA.col1=i + widthA;
subA.row0=subA.col0;
subA.row1=subA.col1;
subB.col0=i + widthA;
subB.col1=this.T.numCols;
subB.row0=i;
subB.row1=i + widthA;
subC.col0=i + widthA;
subC.col1=this.T.numCols;
subC.row0=i + widthA;
subC.row1=this.T.numCols;
if (!$I$(2).upper$org_ejml_data_D1Submatrix64F(subA)) return false;
if (widthA == blockLength) {
$I$(3).solveBlock$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z$Z(blockLength, true, subA, subB, true, false);
$I$(4).symmRankNMinus_U$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, subC, subB);
}}
$I$(5).zeroTriangle$Z$org_ejml_data_BlockMatrix64F(false, this.T);
return true;
}, p$1);

Clazz.newMeth(C$, 'isLower$', function () {
return this.lower;
});

Clazz.newMeth(C$, ['getT$org_ejml_data_BlockMatrix64F','getT$TMatrixType'], function (T) {
if (T == null ) return this.T;
T.set$org_ejml_data_BlockMatrix64F(this.T);
return T;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
