(function(){var P$=Clazz.newPackage("org.scijava.table"),p$1={},I$=[[0,'org.scijava.table.Table','org.scijava.table.DefaultDoubleTable','org.scijava.table.DoubleColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTableDisplay", null, 'org.scijava.display.AbstractDisplay', 'org.scijava.table.TableDisplay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1),['add$TC','add$I$TC','addAll$java_util_Collection','addAll$I$java_util_Collection','appendColumn$','appendColumn$S','appendColumns$I','appendColumns$SA','appendRow$','appendRow$S','appendRows$I','appendRows$SA','clear$','contains$O','containsAll$java_util_Collection','get$S','get$I$I','get$S$I','get$I','getColumnCount$','getColumnHeader$I','getColumnIndex$S','getRowCount$','getRowHeader$I','getRowIndex$S','indexOf$O','insertColumn$I','insertColumn$I$S','insertColumns$I$I','insertColumns$I$SA','insertRow$I','insertRow$I$S','insertRows$I$I','insertRows$I$SA','isEmpty$','iterator$','lastIndexOf$O','listIterator$','listIterator$I','remove$O','remove$I','removeAll$java_util_Collection','removeColumn$I','removeColumn$S','removeColumns$I$I','removeColumns$SA','removeRow$I','removeRow$S','removeRows$I$I','removeRows$SA','retainAll$java_util_Collection','set$I$I$TT','set$S$I$TT','set$I$TC','setColumnCount$I','setColumnHeader$I$S','setDimensions$I$I','setRowCount$I','setRowHeader$I$S','size$','subList$I$I','toArray$','toArray$TAA'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'canDisplay$Class', function (c) {
if (c === Clazz.array(Double.TYPE, -1)  || c === Clazz.array(Double.TYPE, -2)  ) return true;
return C$.superclazz.prototype.canDisplay$Class.apply(this, [c]);
});

Clazz.newMeth(C$, 'display$O', function (o) {
if (Clazz.instanceOf(o, Clazz.array(Double.TYPE, -1))) {
this.display$O(p$1.wrapArrayAsTable$DAA.apply(this, [Clazz.array(Double.TYPE, -2, [o])]));
return;
}if (Clazz.instanceOf(o, Clazz.array(Double.TYPE, -2))) {
this.display$O(p$1.wrapArrayAsTable$DAA.apply(this, [o]));
return;
}C$.superclazz.prototype.display$O.apply(this, [o]);
});

Clazz.newMeth(C$, 'isDisplaying$O', function (o) {
if (C$.superclazz.prototype.isDisplaying$O.apply(this, [o])) return true;
if (Clazz.instanceOf(o, Clazz.array(Double.TYPE, -1))) {
p$1.arrayEqualsTable$DAA.apply(this, [Clazz.array(Double.TYPE, -2, [o])]);
}if (Clazz.instanceOf(o, Clazz.array(Double.TYPE, -2))) {
p$1.arrayEqualsTable$DAA.apply(this, [o]);
}return false;
});

Clazz.newMeth(C$, 'wrapArrayAsTable$DAA', function (array) {
var table=Clazz.new_($I$(2,1));
var rowCount=0;
for (var d=0; d < array.length; d++) {
var column=Clazz.new_($I$(3,1));
column.setArray$DA(array[d]);
table.add$TC(column);
if (rowCount < array[d].length) rowCount=array[d].length;
}
table.setRowCount$I(rowCount);
return table;
}, p$1);

Clazz.newMeth(C$, 'arrayEqualsTable$DAA', function (array) {
for (var table, $table = this.iterator$(); $table.hasNext$()&&((table=($table.next$())),1);) {
if (!(Clazz.instanceOf(table, "org.scijava.table.DoubleTable"))) continue;
var resultsTable=table;
if (array.length != resultsTable.getColumnCount$()) continue;
var equal=true;
for (var c=0; c < array.length; c++) {
if (array[c] !== resultsTable.get$I(c).getArray$() ) {
equal=false;
break;
}}
return equal;
}
return false;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.table.DefaultTableDisplay',null,['org.scijava.plugin.Plugin']],['type="org.scijava.display.Display.class" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
