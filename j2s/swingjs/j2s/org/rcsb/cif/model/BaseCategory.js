(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),p$1={},I$=[[0,'java.util.Collections','org.rcsb.cif.model.Column','java.util.ArrayList','org.rcsb.cif.Platform','org.rcsb.cif.binary.codec.Codec','org.rcsb.cif.model.ModelFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseCategory", null, null, 'org.rcsb.cif.model.Category');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.rowCount=0;
this.columnNamesEncoded=null;
this.columnNamesLC=null;
this.isText=false;
this.textFields=null;
this.encodedColumns=null;
this.decodedColumns=null;
this.defined=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
this.name=name;
this.rowCount=0;
this.columnNamesEncoded=$I$(1).emptyList$();
this.columnNamesLC=$I$(1).emptyList$();
this.isText=false;
this.textFields=$I$(1).emptyMap$();
this.encodedColumns=Clazz.array(java.lang.Object, [0]);
this.decodedColumns=$I$(1).emptyMap$();
this.defined=false;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Map', function (name, textColumns) {
;C$.$init$.apply(this);
this.name=name;
this.rowCount=(textColumns.values$().stream$().findFirst$().map$java_util_function_Function((function($$){((P$.BaseCategory$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseCategory$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=false ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName org.rcsb.cif.model.Column*/t.getRowCount$.apply(t,[])});
})()
)); return Clazz.new_(P$.BaseCategory$lambda1.$init$, [this, null])})($I$(2))).orElse$TT(new Integer(0))).intValue$();
this.columnNamesEncoded=Clazz.new_($I$(3,1).c$$java_util_Collection,[textColumns.keySet$()]);
this.columnNamesLC=Clazz.new_($I$(3,1).c$$java_util_Collection,[textColumns.keySet$()]);
this.isText=true;
this.textFields=textColumns;
this.encodedColumns=null;
this.decodedColumns=null;
this.defined=true;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$OA', function (name, rowCount, encodedColumns) {
;C$.$init$.apply(this);
this.name=name;
this.rowCount=rowCount;
this.isText=false;
this.encodedColumns=encodedColumns;
this.decodedColumns=$I$(4).getMap$();
try {
this.columnNamesEncoded=Clazz.new_($I$(3,1));
this.columnNamesLC=Clazz.new_($I$(3,1));
for (var i=0, n=encodedColumns.length; i < n; i++) {
var s=$I$(5).getStringFromBytes$BA((encodedColumns[i]).get$O("name"));
this.columnNamesEncoded.add$TE(s);
this.columnNamesLC.add$TE(s.toLowerCase$());
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
this.textFields=null;
this.defined=true;
}, 1);

Clazz.newMeth(C$, 'getCategoryName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.rowCount;
});

Clazz.newMeth(C$, 'getColumn$S', function (name) {
name=name.toLowerCase$();
return this.isText ? p$1.getTextColumn$S.apply(this, [name]) : this.getBinaryColumn$S(name);
});

Clazz.newMeth(C$, 'getTextColumn$S', function (name) {
return this.textFields.computeIfAbsent$TK$java_util_function_Function(name, /*addLambdaReuse org.rcsb.cif.model.BaseCategory$lambda2*/(P$.BaseCategory$lambda2$||(P$.BaseCategory$lambda2$=(((P$.BaseCategory$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseCategory$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (n) { return ($I$(6).createEmptyColumn$S$S(this.b$['org.rcsb.cif.model.BaseCategory'].name, n));});
})()
), Clazz.new_(P$.BaseCategory$lambda2.$init$, [this, null]))))));
}, p$1);

Clazz.newMeth(C$, 'getBinaryColumn$S', function (name) {
var col=p$1.find$S.apply(this, [name]);
if (col == null ) {
return $I$(6).createEmptyColumn$S$S(this.name, name);
}if (this.decodedColumns.containsKey$O(name)) {
return this.decodedColumns.get$O(name);
}var decodedColumn=$I$(6).createColumnBinary$S$S$java_util_Map(this.name, name, col);
this.decodedColumns.put$TK$TV(name, decodedColumn);
return decodedColumn;
});

Clazz.newMeth(C$, 'find$S', function (name) {
for (var i=this.columnNamesEncoded.size$(); --i >= 0; ) if (this.columnNamesEncoded.get$I(i).equalsIgnoreCase$S(name)) return this.encodedColumns[i];

return null;
}, p$1);

Clazz.newMeth(C$, 'getColumnNamesEncoded$', function () {
return this.columnNamesEncoded;
});

Clazz.newMeth(C$, 'getColumnNames$', function () {
return this.columnNamesLC;
});

Clazz.newMeth(C$, 'isDefined$', function () {
return this.defined;
});

Clazz.newMeth(C$, 'fillFloat$SA', function (colNames) {
if (colNames.length == 0) return Clazz.array(Double.TYPE, [0, null]);
try {
var a=Clazz.array(Double.TYPE, [colNames.length, this.rowCount]);
for (var i=colNames.length; --i >= 0; ) {
var col=this.getColumn$S(colNames[i]);
var data=col.getUnmaskedData$();
switch (col.type) {
case 2:
continue;
case 1:
a[i]=data;
break;
case 0:
for (var j=this.rowCount; --j >= 0; ) {
a[i][j]=(data)[j];
}
break;
}
}
return a;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
