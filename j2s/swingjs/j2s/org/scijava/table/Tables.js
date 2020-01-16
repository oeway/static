(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[[0,'java.util.Objects','java.util.stream.Collectors',['org.scijava.table.Tables','.ColumnAccessor']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Tables", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ReadOnlyTable',10],['ReadOnlyColumn',10],['ColumnAccessor',1034]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'wrap$java_util_Map$S', function (data, colHeader) {
var rowHeaders=data.keySet$().stream$().map$java_util_function_Function((P$.Tables$lambda1$||(P$.Tables$lambda1$=(((P$.Tables$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tables$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (k) { return (k == null  ? null : k.toString());});
})()
), Clazz.new_(1,{T:"_.? super ",R:"? extends java.lang.String"},P$.Tables$lambda1.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(2).toList$());
return ((P$.Tables$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tables$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.scijava.table.Tables','org.scijava.table.Tables.ReadOnlyTable']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.$finals$.data.size$();
});

Clazz.newMeth(C$, 'getRowHeader$I', function (row) {
return this.$finals$.rowHeaders.get$I(row);
});

Clazz.newMeth(C$, 'size$', function () {
return 1;
});

Clazz.newMeth(C$, 'get$I', function (col) {
if (col != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column out of range: " + col]);
return ((P$.Tables$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tables$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.table.Tables','.ColumnAccessor']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.$finals$.data.size$();
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.$finals$.data.get$O(this.$finals$.rowHeaders.get$I(index));
});
})()
), Clazz.new_(1,{T:"Object"},$I$(3,1).c$$O$S, [this, {data:this.$finals$.data,rowHeaders:this.$finals$.rowHeaders}, this.$finals$.data, this.$finals$.colHeader],P$.Tables$1$1));
});
})()
), Clazz.new_(P$.Tables$1.$init$, [this, {data:data,colHeader:colHeader,rowHeaders:rowHeaders}]));
}, 1);

Clazz.newMeth(C$, 'wrap$java_util_List$S$java_util_List', function (data, colHeader, rowHeaders) {
return ((P$.Tables$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tables$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.scijava.table.Tables','org.scijava.table.Tables.ReadOnlyTable']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.$finals$.data.size$();
});

Clazz.newMeth(C$, 'getRowHeader$I', function (row) {
if (this.$finals$.rowHeaders == null  || this.$finals$.rowHeaders.size$() < row ) return null;
return this.$finals$.rowHeaders.get$I(row);
});

Clazz.newMeth(C$, 'size$', function () {
return 1;
});

Clazz.newMeth(C$, 'get$I', function (col) {
if (col != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column out of range: " + col]);
return ((P$.Tables$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tables$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.table.Tables','.ColumnAccessor']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.$finals$.data.size$();
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.$finals$.data.get$I(index);
});
})()
), Clazz.new_(1,{T:"Object"},$I$(3,1).c$$O$S, [this, {data:this.$finals$.data}, this.$finals$.data, this.$finals$.colHeader],P$.Tables$2$1));
});
})()
), Clazz.new_(P$.Tables$2.$init$, [this, {rowHeaders:rowHeaders,colHeader:colHeader,data:data}]));
}, 1);

Clazz.newMeth(C$, 'wrap$java_util_List$java_util_List', function (data, rowHeaders) {
if (data.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot wrap an empty list"]);
return ((P$.Tables$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tables$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.scijava.table.Tables','org.scijava.table.Tables.ReadOnlyTable']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.$finals$.data.size$();
});

Clazz.newMeth(C$, 'getRowHeader$I', function (row) {
if (this.$finals$.rowHeaders == null  || this.$finals$.rowHeaders.size$() < row ) return null;
return this.$finals$.rowHeaders.get$I(row);
});

Clazz.newMeth(C$, 'size$', function () {
return this.$finals$.data.get$I(0).size$();
});

Clazz.newMeth(C$, 'get$I', function (col) {
return ((P$.Tables$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tables$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.table.Tables','.ColumnAccessor']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['initialized'],'S',['$colHeader']]]

Clazz.newMeth(C$, 'getHeader$', function () {
if (!this.initialized) {
var c=0;
for (var key, $key = this.$finals$.data.get$I(0).keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (this.$finals$.col == c++) {
this.$colHeader=key == null  ? null : key.toString();
break;
}}
this.initialized=true;
}return this.$colHeader;
});

Clazz.newMeth(C$, 'size$', function () {
return this.$finals$.data.size$();
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.$finals$.data.get$I(index).get$O(this.getHeader$());
});
})()
), Clazz.new_(1,{T:"Object"},$I$(3,1).c$$O$S, [this, {col:col,data:this.$finals$.data}, this.$finals$.data, null],P$.Tables$3$1));
});
})()
), Clazz.new_(P$.Tables$3.$init$, [this, {rowHeaders:rowHeaders,data:data}]));
}, 1);

Clazz.newMeth(C$, 'colIndex$org_scijava_table_Table$S', function (table, colHeader) {
var colIndex=table.getColumnIndex$S(colHeader);
if (colIndex < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such column: " + colHeader]);
return colIndex;
}, 1);

Clazz.newMeth(C$, 'checkCol$org_scijava_table_Table$I$I', function (table, col, count) {
C$.check$S$I$I$I("column", col, count, table.getColumnCount$());
}, 1);

Clazz.newMeth(C$, 'checkRow$org_scijava_table_Table$I$I', function (table, row, count) {
C$.check$S$I$I$I("row", row, count, table.getRowCount$());
}, 1);

Clazz.newMeth(C$, 'assign$org_scijava_table_Column$I$O', function (column, row, value) {
if (value != null  && !column.getType$().isInstance$O(value) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["value of type " + value.getClass$() + " is not a " + column.getType$() ]);
}var typedValue=value;
column.set$I$TE(row, typedValue);
}, 1);

Clazz.newMeth(C$, 'check$S$I$I$I', function (name, index, count, bound) {
var last=index + count - 1;
if (index >= 0 && last < bound ) return;
if (count <= 1) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Invalid " + name + ": " + index ]);
}throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Invalid " + name + "s: " + index + " - " + last ]);
}, 1);

Clazz.newMeth(C$, 'readOnlyException$', function () {
return Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Wrapped table is read-only"]);
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Tables, "ReadOnlyTable", function(){
}, null, 'org.scijava.table.Table');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'setColumnCount$I', function (colCount) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'insertColumns$I$I', function (col, count) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'setRowCount$I', function (rowCount) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'removeRows$I$I', function (row, count) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'setRowHeader$I$S', function (row, header) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, ['set$S$I$TT'], function (colHeader, row, value) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, ['add$org_scijava_table_Column','add$TE','add$TC'], function (column) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'remove$O', function (column) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (col, c) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'clear$', function () {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, ['set$I$org_scijava_table_Column','set$I$TE','set$I$TC'], function (col, column) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, ['add$I$org_scijava_table_Column','add$I$TE','add$I$TC'], function (col, column) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'remove$I', function (col) {
throw P$.Tables.readOnlyException$();
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Tables, "ReadOnlyColumn", function(){
}, null, 'org.scijava.table.Column');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['add$TT','add$TE'], function (e) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'remove$O', function (o) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'clear$', function () {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, ['set$I$TT','set$I$TE'], function (index, element) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, ['add$I$TT','add$I$TE'], function (index, element) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'remove$I', function (index) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'setHeader$S', function (header) {
throw P$.Tables.readOnlyException$();
});

Clazz.newMeth(C$, 'setSize$I', function (size) {
throw P$.Tables.readOnlyException$();
});
};})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Tables, "ColumnAccessor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.scijava.table.Tables','org.scijava.table.Tables.ReadOnlyColumn']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['colHeader'],'O',['data','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O$S', function (data, colHeader) {
;C$.$init$.apply(this);
this.data=data;
this.colHeader=colHeader;
}, 1);

Clazz.newMeth(C$, 'getHeader$', function () {
return this.colHeader;
});

Clazz.newMeth(C$, 'getType$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getHeader$().hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "org.scijava.table.Tables.ColumnAccessor"))) return false;
var other=(obj);
if (this.data !== other.data ) return false;
return $I$(1).equals$O$O(this.getHeader$(), other.getHeader$());
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
