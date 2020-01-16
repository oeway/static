(function(){var P$=Clazz.newPackage("org.ejml.alg.block.decomposition.bidiagonal"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BidiagonalHelper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'bidiagOuterBlocks$I$org_ejml_data_D1Submatrix64F$DA$DA', function (blockLength, A, gammasU, gammasV) {
var width=Math.min(blockLength, A.col1 - A.col0);
var height=Math.min(blockLength, A.row1 - A.row0);
var min=Math.min(width, height);
for (var i=0; i < min; i++) {
if (!org.ejml.alg.block.decomposition.qr.BlockHouseHolder.computeHouseHolderCol$I$org_ejml_data_D1Submatrix64F$DA$I(blockLength, A, gammasU, i)) return false;
org.ejml.alg.block.decomposition.qr.BlockHouseHolder.rank1UpdateMultR_Col$I$org_ejml_data_D1Submatrix64F$I$D(blockLength, A, i, gammasU[A.col0 + i]);
org.ejml.alg.block.decomposition.qr.BlockHouseHolder.rank1UpdateMultR_TopRow$I$org_ejml_data_D1Submatrix64F$I$D(blockLength, A, i, gammasU[A.col0 + i]);
System.out.println$S("After column stuff");
A.original.print$();
if (!org.ejml.alg.block.decomposition.qr.BlockHouseHolder.computeHouseHolderRow$I$org_ejml_data_D1Submatrix64F$DA$I(blockLength, A, gammasV, i)) return false;
org.ejml.alg.block.decomposition.qr.BlockHouseHolder.rank1UpdateMultL_Row$I$org_ejml_data_D1Submatrix64F$I$I$D(blockLength, A, i, i + 1, gammasV[A.row0 + i]);
System.out.println$S("After update row");
A.original.print$();
System.out.println$S("After row stuff");
A.original.print$();
}
return true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
