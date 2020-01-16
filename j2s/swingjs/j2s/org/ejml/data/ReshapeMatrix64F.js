(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[[0,'org.ejml.data.MatrixIterator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReshapeMatrix64F", null, null, 'org.ejml.data.Matrix64F');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numRows','numCols']]]

Clazz.newMeth(C$, 'reshape$I$I', function (numRows, numCols) {
this.reshape$I$I$Z(numRows, numCols, false);
});

Clazz.newMeth(C$, 'iterator$Z$I$I$I$I', function (rowMajor, minRow, minCol, maxRow, maxCol) {
return Clazz.new_($I$(1,1).c$$org_ejml_data_ReshapeMatrix64F$Z$I$I$I$I,[this, rowMajor, minRow, minCol, maxRow, maxCol]);
});

Clazz.newMeth(C$, 'getNumRows$', function () {
return this.numRows;
});

Clazz.newMeth(C$, 'getNumCols$', function () {
return this.numCols;
});

Clazz.newMeth(C$, 'setNumRows$I', function (numRows) {
this.numRows=numRows;
});

Clazz.newMeth(C$, 'setNumCols$I', function (numCols) {
this.numCols=numCols;
});

Clazz.newMeth(C$, 'set$org_ejml_data_ReshapeMatrix64F', function (A) {
if (A.numRows != this.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected number of rows."]);
if (A.numCols != this.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected number of columns."]);
for (var i=0; i < A.numRows; i++) {
for (var j=0; j < A.numCols; j++) {
this.set$I$I$D(i, j, A.get$I$I(i, j));
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
