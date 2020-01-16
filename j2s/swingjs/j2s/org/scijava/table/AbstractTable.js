(function(){var P$=Clazz.newPackage("org.scijava.table"),p$1={},I$=[[0,'org.scijava.util.SizableArrayList','org.scijava.table.Tables','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractTable", null, 'org.scijava.util.SizableArrayList', 'org.scijava.table.Table');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['rowCount'],'O',['rowHeaders','org.scijava.util.SizableArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$I.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (colCount, rowCount) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (rowCount < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid row count: " + rowCount]);
this.rowHeaders=Clazz.new_(1,{E:"String"},$I$(1,1));
this.rowCount=rowCount;
this.setColumnCount$I(colCount);
}, 1);

Clazz.newMeth(C$, 'setColumnCount$I', function (colCount) {
if (colCount < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid column count: " + colCount]);
this.setSize$I(colCount);
p$1.scaleColumns.apply(this, []);
});

Clazz.newMeth(C$, 'insertColumns$I$I', function (col, count) {
$I$(2).checkCol$org_scijava_table_Table$I$I(this, col, 0);
var oldColCount=this.getColumnCount$();
var newColCount=oldColCount + count;
this.setColumnCount$I(newColCount);
for (var oldC=oldColCount - 1; oldC >= col; oldC--) {
var newC=oldC + count;
this.set$I$TE(newC, this.get$I(oldC));
}
var result=Clazz.new_(1,{E:"Object"},$I$(3,1).c$$I,[count]);
for (var c=0; c < count; c++) {
var column=this.createColumn$S(null);
column.setSize$I(this.getRowCount$());
result.add$TE(column);
this.set$I$TE(col + c, column);
}
return result;
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.rowCount;
});

Clazz.newMeth(C$, 'setRowCount$I', function (rowCount) {
if (rowCount < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid row count: " + rowCount]);
this.rowCount=rowCount;
p$1.scaleColumns.apply(this, []);
});

Clazz.newMeth(C$, 'removeRows$I$I', function (row, count) {
$I$(2).checkRow$org_scijava_table_Table$I$I(this, row, count);
var oldRowCount=this.getRowCount$();
var newRowCount=oldRowCount - count;
for (var oldR=row + count; oldR < oldRowCount; oldR++) {
var newR=oldR - count;
this.setRowHeader$I$S(newR, this.getRowHeader$I(oldR));
for (var c=0; c < this.getColumnCount$(); c++) {
this.set$I$I$TT(c, newR, this.get$I$I(c, oldR));
}
}
this.setRowCount$I(newRowCount);
if (this.rowHeaders.size$() > newRowCount) this.rowHeaders.setSize$I(newRowCount);
});

Clazz.newMeth(C$, 'getRowHeader$I', function (row) {
$I$(2).checkRow$org_scijava_table_Table$I$I(this, row, 1);
if (this.rowHeaders.size$() <= row) return null;
return this.rowHeaders.get$I(row);
});

Clazz.newMeth(C$, 'setRowHeader$I$S', function (row, header) {
$I$(2).checkRow$org_scijava_table_Table$I$I(this, row, 1);
if (row >= this.rowHeaders.size$()) {
this.rowHeaders.setSize$I(row + 1);
}this.rowHeaders.set$I$TE(row, header);
});

Clazz.newMeth(C$, ['set$S$I$TT'], function (colHeader, row, value) {
var col=$I$(2).colIndex$org_scijava_table_Table$S(this, colHeader);
$I$(2).checkRow$org_scijava_table_Table$I$I(this, row, 1);
$I$(2).assign$org_scijava_table_Column$I$O(this.get$I(col), row, value);
});

Clazz.newMeth(C$, ['add$TC','add$TE'], function (column) {
if (column.size$() > this.rowCount) this.rowCount=column.size$();
p$1.scaleColumns.apply(this, []);
return C$.superclazz.prototype.add$TE.apply(this, [column]);
});

Clazz.newMeth(C$, ['add$I$TC','add$I$TE'], function (col, column) {
C$.superclazz.prototype.add$I$TE.apply(this, [col, column]);
if (column.size$() > this.rowCount) this.rowCount=column.size$();
p$1.scaleColumns.apply(this, []);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
for (var column, $column = c.iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
if (column.size$() > this.rowCount) this.rowCount=column.size$();
}
p$1.scaleColumns.apply(this, []);
return C$.superclazz.prototype.addAll$java_util_Collection.apply(this, [c]);
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (col, c) {
for (var column, $column = c.iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
if (column.size$() > this.rowCount) this.rowCount=column.size$();
}
p$1.scaleColumns.apply(this, []);
return C$.superclazz.prototype.addAll$I$java_util_Collection.apply(this, [col, c]);
});

Clazz.newMeth(C$, 'scaleColumns', function () {
for (var c=0; c < this.getColumnCount$(); c++) {
if (this.get$I(c) == null ) {
this.set$I$TE(c, this.createColumn$S(null));
}this.get$I(c).setSize$I(this.getRowCount$());
}
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
