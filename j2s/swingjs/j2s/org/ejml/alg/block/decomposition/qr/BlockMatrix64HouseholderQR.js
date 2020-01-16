(function(){var P$=Clazz.newPackage("org.ejml.alg.block.decomposition.qr"),p$1={},I$=[[0,'org.ejml.data.BlockMatrix64F','org.ejml.data.D1Submatrix64F','org.ejml.alg.block.BlockMatrixOps','org.ejml.alg.block.decomposition.qr.BlockHouseHolder','org.ejml.alg.block.BlockMultiplication']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockMatrix64HouseholderQR", null, null, 'org.ejml.factory.QRDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataW=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.dataWTA=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.A=Clazz.new_($I$(2,1));
this.Y=Clazz.new_($I$(2,1));
this.W=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[this.dataW]);
this.WTA=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[this.dataWTA]);
this.temp=Clazz.array(Double.TYPE, [1]);
this.gammas=Clazz.array(Double.TYPE, [1]);
this.saveW=false;
}, 1);

C$.$fields$=[['Z',['saveW'],'I',['blockLength'],'O',['dataA','org.ejml.data.BlockMatrix64F','+dataW','+dataWTA','A','org.ejml.data.D1Submatrix64F','+Y','+W','+WTA','temp','double[]','+gammas']]]

Clazz.newMeth(C$, 'getQR$', function () {
return this.dataA;
});

Clazz.newMeth(C$, 'setSaveW$Z', function (saveW) {
this.saveW=saveW;
});

Clazz.newMeth(C$, ['getQ$org_ejml_data_BlockMatrix64F$Z','getQ$TT$Z'], function (Q, compact) {
Q=C$.initializeQ$org_ejml_data_BlockMatrix64F$I$I$I$Z(Q, this.dataA.numRows, this.dataA.numCols, this.blockLength, compact);
this.applyQ$org_ejml_data_BlockMatrix64F$Z(Q, true);
return Q;
});

Clazz.newMeth(C$, 'initializeQ$org_ejml_data_BlockMatrix64F$I$I$I$Z', function (Q, numRows, numCols, blockLength, compact) {
var minLength=Math.min(numRows, numCols);
if (compact) {
if (Q == null ) {
Q=Clazz.new_($I$(1,1).c$$I$I$I,[numRows, minLength, blockLength]);
$I$(3).setIdentity$org_ejml_data_BlockMatrix64F(Q);
} else {
if (Q.numRows != numRows || Q.numCols != minLength ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension. Found " + Q.numRows + " " + Q.numCols ]);
} else {
$I$(3).setIdentity$org_ejml_data_BlockMatrix64F(Q);
}}} else {
if (Q == null ) {
Q=Clazz.new_($I$(1,1).c$$I$I$I,[numRows, numRows, blockLength]);
$I$(3).setIdentity$org_ejml_data_BlockMatrix64F(Q);
} else {
if (Q.numRows != numRows || Q.numCols != numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension. Found " + Q.numRows + " " + Q.numCols ]);
} else {
$I$(3).setIdentity$org_ejml_data_BlockMatrix64F(Q);
}}}return Q;
}, 1);

Clazz.newMeth(C$, 'applyQ$org_ejml_data_BlockMatrix64F', function (B) {
this.applyQ$org_ejml_data_BlockMatrix64F$Z(B, false);
});

Clazz.newMeth(C$, 'applyQ$org_ejml_data_BlockMatrix64F$Z', function (B, isIdentity) {
var minDimen=Math.min(this.dataA.numCols, this.dataA.numRows);
var subB=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[B]);
this.W.col0=this.W.row0=0;
this.Y.row1=this.W.row1=this.dataA.numRows;
this.WTA.row0=this.WTA.col0=0;
var start=minDimen - minDimen % this.blockLength;
if (start == minDimen) start-=this.blockLength;
if (start < 0) start=0;
for (var i=start; i >= 0; i-=this.blockLength) {
this.Y.col0=i;
this.Y.col1=Math.min(this.Y.col0 + this.blockLength, this.dataA.numCols);
this.Y.row0=i;
if (isIdentity) subB.col0=i;
subB.row0=i;
p$1.setW.apply(this, []);
this.WTA.row1=this.Y.col1 - this.Y.col0;
this.WTA.col1=subB.col1 - subB.col0;
this.WTA.original.reshape$I$I$Z(this.WTA.row1, this.WTA.col1, false);
if (!this.saveW) $I$(4).computeW_Column$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA$DA$I(this.blockLength, this.Y, this.W, this.temp, this.gammas, this.Y.col0);
$I$(4).multTransA_vecCol$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.blockLength, this.Y, subB, this.WTA);
$I$(5).multPlus$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.blockLength, this.W, this.WTA, subB);
}
});

Clazz.newMeth(C$, 'applyQTran$org_ejml_data_BlockMatrix64F', function (B) {
var minDimen=Math.min(this.dataA.numCols, this.dataA.numRows);
var subB=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[B]);
this.W.col0=this.W.row0=0;
this.Y.row1=this.W.row1=this.dataA.numRows;
this.WTA.row0=this.WTA.col0=0;
for (var i=0; i < minDimen; i+=this.blockLength) {
this.Y.col0=i;
this.Y.col1=Math.min(this.Y.col0 + this.blockLength, this.dataA.numCols);
this.Y.row0=i;
subB.row0=i;
p$1.setW.apply(this, []);
this.WTA.row0=0;
this.WTA.col0=0;
this.WTA.row1=this.W.col1 - this.W.col0;
this.WTA.col1=subB.col1 - subB.col0;
this.WTA.original.reshape$I$I$Z(this.WTA.row1, this.WTA.col1, false);
if (!this.saveW) $I$(4).computeW_Column$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA$DA$I(this.blockLength, this.Y, this.W, this.temp, this.gammas, this.Y.col0);
$I$(5).multTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.blockLength, this.W, subB, this.WTA);
$I$(4).multAdd_zeros$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.blockLength, this.Y, this.WTA, subB);
}
});

Clazz.newMeth(C$, ['getR$org_ejml_data_BlockMatrix64F$Z','getR$TT$Z'], function (R, compact) {
var min=Math.min(this.dataA.numRows, this.dataA.numCols);
if (R == null ) {
if (compact) {
R=Clazz.new_($I$(1,1).c$$I$I$I,[min, this.dataA.numCols, this.blockLength]);
} else {
R=Clazz.new_($I$(1,1).c$$I$I$I,[this.dataA.numRows, this.dataA.numCols, this.blockLength]);
}} else {
if (compact) {
if (R.numCols != this.dataA.numCols || R.numRows != min ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimension."]);
}} else if (R.numCols != this.dataA.numCols || R.numRows != this.dataA.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimension."]);
}}$I$(3).zeroTriangle$Z$org_ejml_data_BlockMatrix64F(false, R);
$I$(3).copyTriangle$Z$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F(true, this.dataA, R);
return R;
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_BlockMatrix64F','decompose$TT'], function (orig) {
p$1.setup$org_ejml_data_BlockMatrix64F.apply(this, [orig]);
var m=Math.min(orig.numCols, orig.numRows);
for (var j=0; j < m; j+=this.blockLength) {
this.Y.col0=j;
this.Y.col1=Math.min(orig.numCols, this.Y.col0 + this.blockLength);
this.Y.row0=j;
if (!$I$(4).decomposeQR_block_col$I$org_ejml_data_D1Submatrix64F$DA(this.blockLength, this.Y, this.gammas)) {
return false;
}this.updateA$org_ejml_data_D1Submatrix64F(this.A);
}
return true;
});

Clazz.newMeth(C$, 'setup$org_ejml_data_BlockMatrix64F', function (orig) {
this.blockLength=orig.blockLength;
this.dataW.blockLength=this.blockLength;
this.dataWTA.blockLength=this.blockLength;
this.dataA=orig;
this.A.original=this.dataA;
var l=Math.min(this.blockLength, orig.numCols);
this.dataW.reshape$I$I$Z(orig.numRows, l, false);
this.dataWTA.reshape$I$I$Z(l, orig.numRows, false);
this.Y.original=orig;
this.Y.row1=this.W.row1=orig.numRows;
if (this.temp.length < this.blockLength) this.temp=Clazz.array(Double.TYPE, [this.blockLength]);
if (this.gammas.length < orig.numCols) this.gammas=Clazz.array(Double.TYPE, [orig.numCols]);
if (this.saveW) {
this.dataW.reshape$I$I$Z(orig.numRows, orig.numCols, false);
}}, p$1);

Clazz.newMeth(C$, 'updateA$org_ejml_data_D1Submatrix64F', function (A) {
p$1.setW.apply(this, []);
A.row0=this.Y.row0;
A.row1=this.Y.row1;
A.col0=this.Y.col1;
A.col1=this.Y.original.numCols;
this.WTA.row0=0;
this.WTA.col0=0;
this.WTA.row1=this.W.col1 - this.W.col0;
this.WTA.col1=A.col1 - A.col0;
this.WTA.original.reshape$I$I$Z(this.WTA.row1, this.WTA.col1, false);
if (A.col1 > A.col0) {
$I$(4).computeW_Column$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA$DA$I(this.blockLength, this.Y, this.W, this.temp, this.gammas, this.Y.col0);
$I$(5).multTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.blockLength, this.W, A, this.WTA);
$I$(4).multAdd_zeros$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(this.blockLength, this.Y, this.WTA, A);
} else if (this.saveW) {
$I$(4).computeW_Column$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA$DA$I(this.blockLength, this.Y, this.W, this.temp, this.gammas, this.Y.col0);
}});

Clazz.newMeth(C$, 'setW', function () {
if (this.saveW) {
this.W.col0=this.Y.col0;
this.W.col1=this.Y.col1;
this.W.row0=this.Y.row0;
this.W.row1=this.Y.row1;
} else {
this.W.col1=this.Y.col1 - this.Y.col0;
this.W.row0=this.Y.row0;
}}, p$1);

Clazz.newMeth(C$, 'inputModified$', function () {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
