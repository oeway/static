(function(){var P$=Clazz.newPackage("org.ejml.simple"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.alg.generic.GenericMatrixOps','org.ejml.ops.CommonOps','org.ejml.ops.RandomMatrices']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleMatrix", null, 'org.ejml.simple.SimpleBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$Z$DA', function (numRows, numCols, rowMajor, data) {
Clazz.super_(C$, this);
this.mat=Clazz.new_($I$(1,1).c$$I$I$Z$DA,[numRows, numCols, rowMajor, data]);
}, 1);

Clazz.newMeth(C$, 'c$$DAA', function (data) {
Clazz.super_(C$, this);
this.mat=Clazz.new_($I$(1,1).c$$DAA,[data]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (numRows, numCols) {
Clazz.super_(C$, this);
this.mat=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_simple_SimpleMatrix', function (orig) {
Clazz.super_(C$, this);
this.mat=orig.mat.copy$();
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_DenseMatrix64F', function (orig) {
Clazz.super_(C$, this);
this.mat=orig.copy$();
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_ReshapeMatrix64F', function (orig) {
Clazz.super_(C$, this);
this.mat=Clazz.new_($I$(1,1).c$$I$I,[orig.numRows, orig.numCols]);
$I$(2).copy$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F(orig, this.mat);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'wrap$org_ejml_data_DenseMatrix64F', function (internalMat) {
var ret=Clazz.new_(C$);
ret.mat=internalMat;
return ret;
}, 1);

Clazz.newMeth(C$, 'identity$I', function (width) {
var ret=Clazz.new_(C$.c$$I$I,[width, width]);
$I$(3).setIdentity$org_ejml_data_RowD1Matrix64F(ret.mat);
return ret;
}, 1);

Clazz.newMeth(C$, 'diag$DA', function (vals) {
var m=$I$(3).diag$DA(vals);
var ret=C$.wrap$org_ejml_data_DenseMatrix64F(m);
return ret;
}, 1);

Clazz.newMeth(C$, 'random$I$I$D$D$java_util_Random', function (numRows, numCols, minValue, maxValue, rand) {
var ret=Clazz.new_(C$.c$$I$I,[numRows, numCols]);
$I$(4).setRandom$org_ejml_data_D1Matrix64F$D$D$java_util_Random(ret.mat, minValue, maxValue, rand);
return ret;
}, 1);

Clazz.newMeth(C$, 'createMatrix$I$I', function (numRows, numCols) {
return Clazz.new_(C$.c$$I$I,[numRows, numCols]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
