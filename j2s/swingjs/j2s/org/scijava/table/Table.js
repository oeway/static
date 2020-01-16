(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[[0,'org.scijava.table.Tables','java.util.ArrayList','java.util.Objects','org.scijava.table.SimpleCollections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Table", null, null, 'java.util.List');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.size$();
});

Clazz.newMeth(C$, 'get$S', function (colHeader) {
return this.get$I($I$(1).colIndex$org_scijava_table_Table$S(this, colHeader));
});

Clazz.newMeth(C$, 'appendColumn$', function () {
return this.appendColumn$S(null);
});

Clazz.newMeth(C$, 'appendColumn$S', function (colHeader) {
return this.insertColumn$I$S(this.getColumnCount$(), colHeader);
});

Clazz.newMeth(C$, 'appendColumns$I', function (count) {
var result=Clazz.new_(1,{E:"Object"},$I$(2,1).c$$I,[count]);
for (var c=0; c < count; c++) result.add$TE(this.appendColumn$());

return result;
});

Clazz.newMeth(C$, 'appendColumns$SA', function (colHeaders) {
var result=Clazz.new_(1,{E:"Object"},$I$(2,1).c$$I,[colHeaders.length]);
for (var colHeader, $colHeader = 0, $$colHeader = colHeaders; $colHeader<$$colHeader.length&&((colHeader=($$colHeader[$colHeader])),1);$colHeader++) {
result.add$TE(this.appendColumn$S(colHeader));
}
return result;
});

Clazz.newMeth(C$, 'insertColumn$I', function (col) {
return this.insertColumn$I$S(col, null);
});

Clazz.newMeth(C$, 'insertColumn$I$S', function (col, colHeader) {
var result=this.insertColumns$I$I(col, 1);
this.setColumnHeader$I$S(col, colHeader);
return result.get$I(0);
});

Clazz.newMeth(C$, 'insertColumns$I$SA', function (col, headers) {
var result=this.insertColumns$I$I(col, headers.length);
for (var c=0; c < headers.length; c++) {
this.setColumnHeader$I$S(col + c, headers[c]);
}
return result;
});

Clazz.newMeth(C$, 'removeColumn$I', function (col) {
return this.remove$I(col);
});

Clazz.newMeth(C$, 'removeColumn$S', function (colHeader) {
return this.removeColumn$I($I$(1).colIndex$org_scijava_table_Table$S(this, colHeader));
});

Clazz.newMeth(C$, 'removeColumns$I$I', function (col, count) {
$I$(1).checkCol$org_scijava_table_Table$I$I(this, col, count);
var result=Clazz.new_(1,{E:"Object"},$I$(2,1).c$$I,[count]);
for (var c=0; c < count; c++) {
result.add$TE(this.get$I(col + c));
}
var oldColCount=this.getColumnCount$();
var newColCount=oldColCount - count;
for (var oldC=col + count; oldC < oldColCount; oldC++) {
var newC=oldC - count;
this.set$I$TC(newC, this.get$I(oldC));
}
this.setColumnCount$I(newColCount);
return result;
});

Clazz.newMeth(C$, 'removeColumns$SA', function (colHeaders) {
var result=Clazz.new_(1,{E:"Object"},$I$(2,1).c$$I,[colHeaders.length]);
for (var colHeader, $colHeader = 0, $$colHeader = colHeaders; $colHeader<$$colHeader.length&&((colHeader=($$colHeader[$colHeader])),1);$colHeader++) {
result.add$TE(this.removeColumn$S(colHeader));
}
return result;
});

Clazz.newMeth(C$, 'appendRow$', function () {
this.appendRow$S(null);
});

Clazz.newMeth(C$, 'appendRow$S', function (header) {
this.insertRow$I$S(this.getRowCount$(), header);
});

Clazz.newMeth(C$, 'appendRows$I', function (count) {
for (var c=0; c < count; c++) this.appendRow$();

});

Clazz.newMeth(C$, 'appendRows$SA', function (headers) {
for (var header, $header = 0, $$header = headers; $header<$$header.length&&((header=($$header[$header])),1);$header++) this.appendRow$S(header);

});

Clazz.newMeth(C$, 'insertRow$I', function (row) {
this.insertRow$I$S(row, null);
});

Clazz.newMeth(C$, 'insertRow$I$S', function (row, header) {
this.insertRows$I$I(row, 1);
this.setRowHeader$I$S(row, header);
});

Clazz.newMeth(C$, 'insertRows$I$I', function (row, count) {
$I$(1).checkRow$org_scijava_table_Table$I$I(this, row, 0);
var oldRowCount=this.getRowCount$();
var newRowCount=oldRowCount + count;
this.setRowCount$I(newRowCount);
for (var oldR=oldRowCount - 1; oldR >= row; oldR--) {
var newR=oldR + count;
for (var c=0; c < this.getColumnCount$(); c++) this.set$I$I$TT(c, newR, this.get$I$I(c, oldR));

}
for (var oldR=oldRowCount - 1; oldR >= row; oldR--) {
var newR=oldR + count;
this.setRowHeader$I$S(newR, this.getRowHeader$I(oldR));
}
for (var r=0; r < count; r++) {
for (var c=0; c < this.getColumnCount$(); c++) this.set$I$I$TT(c, row + r, null);

}
for (var r=0; r < count; r++) {
this.setRowHeader$I$S(row + r, null);
}
});

Clazz.newMeth(C$, 'insertRows$I$SA', function (row, headers) {
this.insertRows$I$I(row, headers.length);
for (var r=0; r < headers.length; r++) {
this.setRowHeader$I$S(row + r, headers[r]);
}
});

Clazz.newMeth(C$, 'removeRow$I', function (row) {
this.removeRows$I$I(row, 1);
});

Clazz.newMeth(C$, 'removeRow$S', function (header) {
var row=this.getColumnIndex$S(header);
if (row < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["No such row: " + header]);
this.removeRow$I(row);
});

Clazz.newMeth(C$, 'removeRows$SA', function (headers) {
for (var header, $header = 0, $$header = headers; $header<$$header.length&&((header=($$header[$header])),1);$header++) {
this.removeRow$S(header);
}
});

Clazz.newMeth(C$, 'setDimensions$I$I', function (colCount, rowCount) {
this.setColumnCount$I(colCount);
this.setRowCount$I(rowCount);
});

Clazz.newMeth(C$, 'getColumnHeader$I', function (col) {
return this.get$I(col).getHeader$();
});

Clazz.newMeth(C$, 'setColumnHeader$I$S', function (col, colHeader) {
this.get$I(col).setHeader$S(colHeader);
});

Clazz.newMeth(C$, 'getColumnIndex$S', function (colHeader) {
for (var c=0; c < this.getColumnCount$(); c++) {
var h=this.getColumnHeader$I(c);
if ($I$(3).equals$O$O(h, colHeader)) return c;
}
return -1;
});

Clazz.newMeth(C$, 'getRowIndex$S', function (header) {
for (var r=0; r < this.getRowCount$(); r++) {
var h=this.getRowHeader$I(r);
if ($I$(3).equals$O$O(h, header)) return r;
}
return -1;
});

Clazz.newMeth(C$, ['set$I$I$TT'], function (col, row, value) {
$I$(1).checkCol$org_scijava_table_Table$I$I(this, col, 1);
$I$(1).checkRow$org_scijava_table_Table$I$I(this, row, 1);
$I$(1).assign$org_scijava_table_Column$I$O(this.get$I(col), row, value);
});

Clazz.newMeth(C$, 'get$I$I', function (col, row) {
$I$(1).checkCol$org_scijava_table_Table$I$I(this, col, 1);
$I$(1).checkRow$org_scijava_table_Table$I$I(this, row, 1);
return this.get$I(col).get$I(row);
});

Clazz.newMeth(C$, 'get$S$I', function (colHeader, row) {
var col=$I$(1).colIndex$org_scijava_table_Table$S(this, colHeader);
$I$(1).checkRow$org_scijava_table_Table$I$I(this, row, 1);
return this.get$I(col).get$I(row);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'contains$O', function (column) {
return this.indexOf$O(column) >= 0;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.listIterator$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return $I$(4).toArray$java_util_List(this);
});

Clazz.newMeth(C$, ['toArray$TAA'], function (a) {
return $I$(4).toArray$java_util_List$TAA(this, a);
});

Clazz.newMeth(C$, ['add$TC','add$TE'], function (column) {
return $I$(4).add$java_util_List$TE(this, column);
});

Clazz.newMeth(C$, 'remove$O', function (column) {
return $I$(4).remove$java_util_List$O(this, column);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return $I$(4).containsAll$java_util_Collection$java_util_Collection(this, c);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
return $I$(4).addAll$java_util_Collection$java_util_Collection(this, c);
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (col, c) {
return $I$(4).addAll$java_util_List$I$java_util_Collection(this, col, c);
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
return $I$(4).removeAll$java_util_Collection$java_util_Collection(this, c);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
return $I$(4).retainAll$java_util_Collection$java_util_Collection(this, c);
});

Clazz.newMeth(C$, 'indexOf$O', function (column) {
return $I$(4).indexOf$java_util_List$O(this, column);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (column) {
return $I$(4).lastIndexOf$java_util_List$O(this, column);
});

Clazz.newMeth(C$, 'listIterator$', function () {
return this.listIterator$I(0);
});

Clazz.newMeth(C$, 'listIterator$I', function (col) {
return $I$(4).listIterator$java_util_List$I(this, col);
});

Clazz.newMeth(C$, 'subList$I$I', function (fromCol, toCol) {
return $I$(4).subList$java_util_List$I$I(this, fromCol, toCol);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
