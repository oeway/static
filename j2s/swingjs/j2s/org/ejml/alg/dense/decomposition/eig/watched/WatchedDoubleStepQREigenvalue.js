(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig.watched"),p$1={},I$=[[0,'org.ejml.alg.dense.decomposition.eig.watched.WatchedDoubleStepQREigen']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WatchedDoubleStepQREigenvalue", null, null, 'org.ejml.alg.dense.decomposition.eig.EigenvalueExtractor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numSplits','x1','x2'],'O',['implicitQR','org.ejml.alg.dense.decomposition.eig.watched.WatchedDoubleStepQREigen','splits','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.implicitQR=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'setup$org_ejml_data_DenseMatrix64F', function (A) {
this.implicitQR.setup$org_ejml_data_DenseMatrix64F(A);
this.implicitQR.setQ$org_ejml_data_DenseMatrix64F(null);
this.splits=Clazz.array(Integer.TYPE, [A.numRows]);
this.numSplits=0;
});

Clazz.newMeth(C$, 'process$org_ejml_data_DenseMatrix64F', function (origA) {
this.setup$org_ejml_data_DenseMatrix64F(origA);
this.x1=0;
this.x2=origA.numRows - 1;
while (this.implicitQR.numEigen < origA.numRows){
if (this.implicitQR.steps > this.implicitQR.maxIterations) return false;
this.implicitQR.incrementSteps$();
if (this.x2 < this.x1) {
p$1.moveToNextSplit.apply(this, []);
} else if (this.x2 - this.x1 == 0) {
this.implicitQR.addEigenAt$I(this.x1);
this.x2--;
} else if (this.x2 - this.x1 == 1) {
this.implicitQR.addComputedEigen2x2$I$I(this.x1, this.x2);
this.x2-=2;
} else if (this.implicitQR.steps - this.implicitQR.lastExceptional > this.implicitQR.exceptionalThreshold) {
if (Double.isNaN$D(this.implicitQR.A.get$I$I(this.x2, this.x2))) {
return false;
}this.implicitQR.exceptionalShift$I$I(this.x1, this.x2);
} else if (this.implicitQR.isZero$I$I(this.x2, this.x2 - 1)) {
this.implicitQR.addEigenAt$I(this.x2);
this.x2--;
} else {
p$1.performIteration.apply(this, []);
}}
return true;
});

Clazz.newMeth(C$, 'moveToNextSplit', function () {
if (this.numSplits <= 0) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["bad"]);
this.x2=this.splits[--this.numSplits];
if (this.numSplits > 0) {
this.x1=this.splits[this.numSplits - 1] + 1;
} else {
this.x1=0;
}}, p$1);

Clazz.newMeth(C$, 'performIteration', function () {
var changed=false;
for (var i=this.x2; i > this.x1; i--) {
if (this.implicitQR.isZero$I$I(i, i - 1)) {
this.x1=i;
this.splits[this.numSplits++]=i - 1;
changed=true;
break;
}}
if (!changed) this.implicitQR.implicitDoubleStep$I$I(this.x1, this.x2);
}, p$1);

Clazz.newMeth(C$, 'getNumberOfEigenvalues$', function () {
return this.implicitQR.getNumberOfEigenvalues$();
});

Clazz.newMeth(C$, 'getEigenvalues$', function () {
return this.implicitQR.getEigenvalues$();
});

Clazz.newMeth(C$, 'getImplicitQR$', function () {
return this.implicitQR;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
