(function(){var P$=Clazz.newPackage("org.ejml.simple"),I$=[[0,'org.ejml.factory.DecompositionFactory','org.ejml.simple.SimpleMatrix','org.ejml.ops.SingularOps','org.ejml.UtilEjml']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleSVD");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['svd','org.ejml.factory.SingularValueDecomposition','U','<T extends org.ejml.simple.SimpleMatrix>','+W','+V','mat','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$org_ejml_data_DenseMatrix64F$Z', function (mat, compact) {
;C$.$init$.apply(this);
this.mat=mat;
this.svd=$I$(1).svd$I$I$Z$Z$Z(mat.numRows, mat.numCols, true, true, compact);
if (!this.svd.decompose$TT(mat)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Decomposition failed"]);
this.U=$I$(2).wrap$org_ejml_data_DenseMatrix64F(this.svd.getU$TT$Z(null, false));
this.W=$I$(2).wrap$org_ejml_data_DenseMatrix64F(this.svd.getW$TT(null));
this.V=$I$(2).wrap$org_ejml_data_DenseMatrix64F(this.svd.getV$TT$Z(null, false));
$I$(3).descendingOrder$org_ejml_data_DenseMatrix64F$Z$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$Z(this.U.getMatrix$(), false, this.W.getMatrix$(), this.V.getMatrix$(), false);
}, 1);

Clazz.newMeth(C$, 'getU$', function () {
return this.U;
});

Clazz.newMeth(C$, 'getW$', function () {
return this.W;
});

Clazz.newMeth(C$, 'getV$', function () {
return this.V;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(1).quality$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.mat, this.U.getMatrix$(), this.W.getMatrix$(), this.V.transpose$().getMatrix$());
});

Clazz.newMeth(C$, 'nullSpace$', function () {
return $I$(2).wrap$org_ejml_data_DenseMatrix64F($I$(3).nullSpace$org_ejml_factory_SingularValueDecomposition$org_ejml_data_DenseMatrix64F$D(this.svd, null, $I$(4).EPS));
});

Clazz.newMeth(C$, 'getSingleValue$I', function (index) {
return this.W.get$I$I(index, index);
});

Clazz.newMeth(C$, 'rank$', function () {
return $I$(3).rank$org_ejml_factory_SingularValueDecomposition$D(this.svd, 10.0 * $I$(4).EPS);
});

Clazz.newMeth(C$, 'nullity$', function () {
return $I$(3).nullity$org_ejml_factory_SingularValueDecomposition$D(this.svd, 10.0 * $I$(4).EPS);
});

Clazz.newMeth(C$, 'getSVD$', function () {
return this.svd;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
