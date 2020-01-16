(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MatrixIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
}, 1);

C$.$fields$=[['Z',['rowMajor'],'I',['minCol','minRow','index','size','submatrixStride','subRow','subCol'],'O',['a','org.ejml.data.ReshapeMatrix64F']]]

Clazz.newMeth(C$, 'c$$org_ejml_data_ReshapeMatrix64F$Z$I$I$I$I', function (a, rowMajor, minRow, minCol, maxRow, maxCol) {
;C$.$init$.apply(this);
if (maxCol < minCol) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["maxCol has to be more than or equal to minCol"]);
if (maxRow < minRow) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["maxRow has to be more than or equal to minCol"]);
if (maxCol >= a.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["maxCol must be < numCols"]);
if (maxRow >= a.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["maxRow must be < numCRows"]);
this.a=a;
this.rowMajor=rowMajor;
this.minCol=minCol;
this.minRow=minRow;
this.size=(maxCol - minCol + 1) * (maxRow - minRow + 1);
if (rowMajor) this.submatrixStride=maxCol - minCol + 1;
 else this.submatrixStride=maxRow - minRow + 1;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.index < this.size;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.rowMajor) {
this.subRow=(this.index/this.submatrixStride|0);
this.subCol=this.index % this.submatrixStride;
} else {
this.subRow=this.index % this.submatrixStride;
this.subCol=(this.index/this.submatrixStride|0);
}this.index++;
return new Double(this.a.get$I$I(this.subRow + this.minRow, this.subCol + this.minCol));
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Operation not supported"]);
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index - 1;
});

Clazz.newMeth(C$, 'isRowMajor$', function () {
return this.rowMajor;
});

Clazz.newMeth(C$, 'set$D', function (value) {
this.a.set$I$I$D(this.subRow + this.minRow, this.subCol + this.minCol, value);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
