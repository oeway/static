(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,['org.ejml.ops.EjmlUnitTests','.TestException']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EjmlUnitTests", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TestException',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'assertCountable$org_ejml_data_ReshapeMatrix64F', function (A) {
for (var i=0; i < A.numRows; i++) {
for (var j=0; j < A.numCols; j++) {
C$.assertTrue$Z$S(!Double.isNaN$D(A.get$I$I(i, j)), "NaN found at " + i + " " + j );
C$.assertTrue$Z$S(!Double.isInfinite$D(A.get$I$I(i, j)), "Infinite found at " + i + " " + j );
}
}
}, 1);

Clazz.newMeth(C$, 'assertShape$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F', function (A, B) {
C$.assertTrue$Z$S(A.numRows == B.numRows, "Number of rows do not match");
C$.assertTrue$Z$S(A.numCols == B.numCols, "Number of columns do not match");
}, 1);

Clazz.newMeth(C$, 'assertShape$org_ejml_data_ReshapeMatrix64F$I$I', function (A, numRows, numCols) {
C$.assertTrue$Z$S(A.numRows == numRows, "Unexpected number of rows.");
C$.assertTrue$Z$S(A.numCols == numCols, "Unexpected number of columns.");
}, 1);

Clazz.newMeth(C$, 'assertEqualsUncountable$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$D', function (A, B, tol) {
C$.assertShape$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F(A, B);
for (var i=0; i < A.numRows; i++) {
for (var j=0; j < A.numCols; j++) {
var valA=A.get$I$I(i, j);
var valB=B.get$I$I(i, j);
if (Double.isNaN$D(valA)) {
C$.assertTrue$Z$S(Double.isNaN$D(valB), "At (" + i + "," + j + ") A = " + new Double(valA).toString() + " B = " + new Double(valB).toString() );
} else if (Double.isInfinite$D(valA)) {
C$.assertTrue$Z$S(Double.isInfinite$D(valB), "At (" + i + "," + j + ") A = " + new Double(valA).toString() + " B = " + new Double(valB).toString() );
} else {
var diff=Math.abs(valA - valB);
C$.assertTrue$Z$S(diff <= tol , "At (" + i + "," + j + ") A = " + new Double(valA).toString() + " B = " + new Double(valB).toString() );
}}
}
}, 1);

Clazz.newMeth(C$, 'assertEquals$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$D', function (A, B, tol) {
C$.assertShape$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F(A, B);
for (var i=0; i < A.numRows; i++) {
for (var j=0; j < A.numCols; j++) {
var valA=A.get$I$I(i, j);
var valB=B.get$I$I(i, j);
C$.assertTrue$Z$S(!Double.isNaN$D(valA) && !Double.isNaN$D(valB) , "At (" + i + "," + j + ") A = " + new Double(valA).toString() + " B = " + new Double(valB).toString() );
C$.assertTrue$Z$S(!Double.isInfinite$D(valA) && !Double.isInfinite$D(valB) , "At (" + i + "," + j + ") A = " + new Double(valA).toString() + " B = " + new Double(valB).toString() );
C$.assertTrue$Z$S(Math.abs(valA - valB) <= tol , "At (" + i + "," + j + ") A = " + new Double(valA).toString() + " B = " + new Double(valB).toString() );
}
}
}, 1);

Clazz.newMeth(C$, 'assertEqualsTrans$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$D', function (A, B, tol) {
C$.assertShape$org_ejml_data_ReshapeMatrix64F$I$I(A, B.numCols, B.numRows);
for (var i=0; i < A.numRows; i++) {
for (var j=0; j < A.numCols; j++) {
var valA=A.get$I$I(i, j);
var valB=B.get$I$I(j, i);
C$.assertTrue$Z$S(!Double.isNaN$D(valA) && !Double.isNaN$D(valB) , "A(" + i + "," + j + ") = " + new Double(valA).toString() + ") B(" + j + "," + i + ") = " + new Double(valB).toString() );
C$.assertTrue$Z$S(!Double.isInfinite$D(valA) && !Double.isInfinite$D(valB) , "A(" + i + "," + j + ") = " + new Double(valA).toString() + ") B(" + j + "," + i + ") = " + new Double(valB).toString() );
C$.assertTrue$Z$S(Math.abs(valA - valB) <= tol , "A(" + i + "," + j + ") = " + new Double(valA).toString() + ") B(" + j + "," + i + ") = " + new Double(valB).toString() );
}
}
}, 1);

Clazz.newMeth(C$, 'assertTrue$Z$S', function (result, message) {
Clazz.assert(C$, this, function(){return result}, function(){return message});
if (!result) throw Clazz.new_($I$(1,1).c$$S,[message]);
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.EjmlUnitTests, "TestException", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
