(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LinearSolverSafe", null, null, 'org.ejml.factory.LinearSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['alg','org.ejml.factory.LinearSolver','A','<T extends org.ejml.data.ReshapeMatrix64F>','+B']]]

Clazz.newMeth(C$, 'c$$org_ejml_factory_LinearSolver', function (alg) {
;C$.$init$.apply(this);
this.alg=alg;
}, 1);

Clazz.newMeth(C$, ['setA$TT'], function (A) {
if (this.alg.modifiesA$()) {
if (this.A == null ) {
this.A=A.copy$();
} else {
if (this.A.numRows != A.numRows || this.A.numCols != A.numCols ) {
this.A.reshape$I$I$Z(A.numRows, A.numCols, false);
}this.A.set$org_ejml_data_ReshapeMatrix64F(A);
}return this.alg.setA$TT(this.A);
}return this.alg.setA$TT(A);
});

Clazz.newMeth(C$, 'quality$', function () {
return this.alg.quality$();
});

Clazz.newMeth(C$, ['solve$TT$TT'], function (B, X) {
if (this.alg.modifiesB$()) {
if (this.B == null ) {
this.B=B.copy$();
} else {
if (this.B.numRows != B.numRows || this.B.numCols != B.numCols ) {
this.B.reshape$I$I$Z(this.A.numRows, B.numCols, false);
}this.B.set$org_ejml_data_ReshapeMatrix64F(B);
}B=this.B;
}this.alg.solve$TT$TT(B, X);
});

Clazz.newMeth(C$, ['invert$TT'], function (A_inv) {
this.alg.invert$TT(A_inv);
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return false;
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
