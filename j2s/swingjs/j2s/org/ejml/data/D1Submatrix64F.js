(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[[0,'org.ejml.simple.SimpleMatrix','org.ejml.ops.MatrixIO']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "D1Submatrix64F");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['row0','col0','row1','col1'],'O',['original','org.ejml.data.D1Matrix64F']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_D1Matrix64F$I$I$I$I', function (original, row0, row1, col0, col1) {
;C$.$init$.apply(this);
this.original=original;
this.row0=row0;
this.col0=col0;
this.row1=row1;
this.col1=col1;
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_D1Matrix64F', function (original) {
;C$.$init$.apply(this);
this.original=original;
this.row1=original.numRows;
this.col1=original.numCols;
}, 1);

Clazz.newMeth(C$, 'getRows$', function () {
return this.row1 - this.row0;
});

Clazz.newMeth(C$, 'getCols$', function () {
return this.col1 - this.col0;
});

Clazz.newMeth(C$, 'get$I$I', function (row, col) {
return this.original.get$I$I(row + this.row0, col + this.col0);
});

Clazz.newMeth(C$, 'set$I$I$D', function (row, col, value) {
this.original.set$I$I$D(row + this.row0, col + this.col0, value);
});

Clazz.newMeth(C$, 'extract$', function () {
var ret=Clazz.new_($I$(1,1).c$$I$I,[this.row1 - this.row0, this.col1 - this.col0]);
for (var i=0; i < ret.numRows$(); i++) {
for (var j=0; j < ret.numCols$(); j++) {
ret.set$I$I$D(i, j, this.get$I$I(i, j));
}
}
return ret;
});

Clazz.newMeth(C$, 'print$', function () {
$I$(2).print$java_io_PrintStream$org_ejml_data_ReshapeMatrix64F$S$I$I$I$I(System.out, this.original, "%6.3f", this.row0, this.row1, this.col0, this.col1);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
