(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition"),I$=[[0,'org.ejml.data.BlockMatrix64F','org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseDecompositionBlock64", null, null, 'org.ejml.factory.DecompositionInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.Ablock=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['I',['blockLength'],'O',['alg','org.ejml.factory.DecompositionInterface','tmp','double[]','Ablock','org.ejml.data.BlockMatrix64F']]]

Clazz.newMeth(C$, 'c$$org_ejml_factory_DecompositionInterface$I', function (alg, blockLength) {
;C$.$init$.apply(this);
this.alg=alg;
this.blockLength=blockLength;
}, 1);

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
this.Ablock.numRows=A.numRows;
this.Ablock.numCols=A.numCols;
this.Ablock.blockLength=this.blockLength;
this.Ablock.data=A.data;
var tmpLength=Math.min(this.Ablock.blockLength, A.numRows) * A.numCols;
if (this.tmp == null  || this.tmp.length < tmpLength ) this.tmp=Clazz.array(Double.TYPE, [tmpLength]);
$I$(2).convertRowToBlock$I$I$I$DA$DA(A.numRows, A.numCols, this.Ablock.blockLength, A.data, this.tmp);
var ret=this.alg.decompose$TT(this.Ablock);
if (!this.alg.inputModified$()) {
$I$(2).convertBlockToRow$I$I$I$DA$DA(A.numRows, A.numCols, this.Ablock.blockLength, A.data, this.tmp);
}return ret;
});

Clazz.newMeth(C$, 'convertBlockToRow$I$I$I$DA', function (numRows, numCols, blockLength, data) {
var tmpLength=Math.min(blockLength, numRows) * numCols;
if (this.tmp == null  || this.tmp.length < tmpLength ) this.tmp=Clazz.array(Double.TYPE, [tmpLength]);
$I$(2).convertBlockToRow$I$I$I$DA$DA(numRows, numCols, this.Ablock.blockLength, data, this.tmp);
});

Clazz.newMeth(C$, 'inputModified$', function () {
return this.alg.inputModified$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
