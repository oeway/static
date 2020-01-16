(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.svd"),p$1={},I$=[[0,'org.ejml.alg.dense.decomposition.svd.implicitqr.SvdImplicitQrAlgorithm','org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecompositionTall','org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecompositionRow']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SvdImplicitQrDecompose", null, null, 'org.ejml.factory.SingularValueDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.qralg=Clazz.new_($I$(1,1));
this.A_mod=Clazz.new_($I$(2,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['Z',['canUseTallBidiagonal','compact','computeU','computeV','prefComputeU','prefComputeV','transposed'],'I',['numRows','numCols','numRowsT','numColsT','numSingular'],'O',['bidiag','org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecomposition','qralg','org.ejml.alg.dense.decomposition.svd.implicitqr.SvdImplicitQrAlgorithm','diag','double[]','+off','Ut','org.ejml.data.DenseMatrix64F','+Vt','singularValues','double[]','A_mod','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$Z$Z$Z$Z', function (compact, computeU, computeV, canUseTallBidiagonal) {
;C$.$init$.apply(this);
this.compact=compact;
this.prefComputeU=computeU;
this.prefComputeV=computeV;
this.canUseTallBidiagonal=canUseTallBidiagonal;
}, 1);

Clazz.newMeth(C$, 'getSingularValues$', function () {
return this.singularValues;
});

Clazz.newMeth(C$, 'numberOfSingularValues$', function () {
return this.numSingular;
});

Clazz.newMeth(C$, 'isCompact$', function () {
return this.compact;
});

Clazz.newMeth(C$, ['getU$org_ejml_data_DenseMatrix64F$Z','getU$TT$Z'], function (U, transpose) {
if (!this.prefComputeU) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["As requested U was not computed."]);
if (transpose) {
if (U == null ) return this.Ut;
 else if (U.numRows != this.Ut.numRows || U.numCols != this.Ut.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected shape of U"]);
U.set$org_ejml_data_D1Matrix64F(this.Ut);
} else {
if (U == null ) U=Clazz.new_($I$(2,1).c$$I$I,[this.Ut.numCols, this.Ut.numRows]);
 else if (U.numRows != this.Ut.numCols || U.numCols != this.Ut.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected shape of U"]);
$I$(3).transpose$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.Ut, U);
}return U;
});

Clazz.newMeth(C$, ['getV$org_ejml_data_DenseMatrix64F$Z','getV$TT$Z'], function (V, transpose) {
if (!this.prefComputeV) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["As requested V was not computed."]);
if (transpose) {
if (V == null ) return this.Vt;
 else if (V.numRows != this.Vt.numRows || V.numCols != this.Vt.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected shape of V"]);
V.set$org_ejml_data_D1Matrix64F(this.Vt);
} else {
if (V == null ) V=Clazz.new_($I$(2,1).c$$I$I,[this.Vt.numCols, this.Vt.numRows]);
 else if (V.numRows != this.Vt.numCols || V.numCols != this.Vt.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected shape of V"]);
$I$(3).transpose$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.Vt, V);
}return V;
});

Clazz.newMeth(C$, ['getW$org_ejml_data_DenseMatrix64F','getW$TT'], function (W) {
var m=this.compact ? this.numSingular : this.numRows;
var n=this.compact ? this.numSingular : this.numCols;
if (W == null ) W=Clazz.new_($I$(2,1).c$$I$I,[m, n]);
 else {
W.reshape$I$I$Z(m, n, false);
W.zero$();
}for (var i=0; i < this.numSingular; i++) {
W.unsafe_set$I$I$D(i, i, this.singularValues[i]);
}
return W;
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (orig) {
p$1.setup$org_ejml_data_DenseMatrix64F.apply(this, [orig]);
if (p$1.bidiagonalization$org_ejml_data_DenseMatrix64F.apply(this, [orig])) return false;
if (p$1.computeUWV.apply(this, [])) return false;
p$1.makeSingularPositive.apply(this, []);
p$1.undoTranspose.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return false;
});

Clazz.newMeth(C$, 'bidiagonalization$org_ejml_data_DenseMatrix64F', function (orig) {
if (this.transposed) {
this.A_mod.reshape$I$I$Z(orig.numCols, orig.numRows, false);
$I$(3).transpose$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(orig, this.A_mod);
} else {
this.A_mod.reshape$I$I$Z(orig.numRows, orig.numCols, false);
this.A_mod.set$org_ejml_data_D1Matrix64F(orig);
}return !this.bidiag.decompose$TT(this.A_mod);
}, p$1);

Clazz.newMeth(C$, 'undoTranspose', function () {
if (this.transposed) {
var temp=this.Vt;
this.Vt=this.Ut;
this.Ut=temp;
}}, p$1);

Clazz.newMeth(C$, 'computeUWV', function () {
this.bidiag.getDiagonal$DA$DA(this.diag, this.off);
this.qralg.setMatrix$I$I$DA$DA(this.numRowsT, this.numColsT, this.diag, this.off);
if (this.computeU) this.Ut=this.bidiag.getU$TT$Z$Z(this.Ut, true, this.compact);
if (this.computeV) this.Vt=this.bidiag.getV$TT$Z$Z(this.Vt, true, this.compact);
this.qralg.setFastValues$Z(false);
if (this.computeU) this.qralg.setUt$org_ejml_data_DenseMatrix64F(this.Ut);
 else this.qralg.setUt$org_ejml_data_DenseMatrix64F(null);
if (this.computeV) this.qralg.setVt$org_ejml_data_DenseMatrix64F(this.Vt);
 else this.qralg.setVt$org_ejml_data_DenseMatrix64F(null);
var ret=!this.qralg.process$();
return ret;
}, p$1);

Clazz.newMeth(C$, 'setup$org_ejml_data_DenseMatrix64F', function (orig) {
this.transposed=orig.numCols > orig.numRows;
if (this.transposed) {
this.computeU=this.prefComputeV;
this.computeV=this.prefComputeU;
this.numRowsT=orig.numCols;
this.numColsT=orig.numRows;
} else {
this.computeU=this.prefComputeU;
this.computeV=this.prefComputeV;
this.numRowsT=orig.numRows;
this.numColsT=orig.numCols;
}this.numRows=orig.numRows;
this.numCols=orig.numCols;
if (this.diag == null  || this.diag.length < this.numColsT ) {
this.diag=Clazz.array(Double.TYPE, [this.numColsT]);
this.off=Clazz.array(Double.TYPE, [this.numColsT - 1]);
}if (this.canUseTallBidiagonal && this.numRows > this.numCols * 2  && !this.computeU ) {
if (this.bidiag == null  || !(Clazz.instanceOf(this.bidiag, "org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecompositionTall")) ) {
this.bidiag=Clazz.new_($I$(4,1));
}} else if (this.bidiag == null  || !(Clazz.instanceOf(this.bidiag, "org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecompositionRow")) ) {
this.bidiag=Clazz.new_($I$(5,1));
}}, p$1);

Clazz.newMeth(C$, 'makeSingularPositive', function () {
this.numSingular=this.qralg.getNumberOfSingularValues$();
this.singularValues=this.qralg.getSingularValues$();
for (var i=0; i < this.numSingular; i++) {
var val=this.qralg.getSingularValue$I(i);
if (val < 0 ) {
this.singularValues[i]=0.0 - val;
if (this.computeU) {
var start=i * this.Ut.numCols;
var stop=start + this.Ut.numCols;
for (var j=start; j < stop; j++) {
this.Ut.set$I$D(j, 0.0 - this.Ut.get$I(j));
}
}} else {
this.singularValues[i]=val;
}}
}, p$1);

Clazz.newMeth(C$, 'numRows$', function () {
return this.numRows;
});

Clazz.newMeth(C$, 'numCols$', function () {
return this.numCols;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
