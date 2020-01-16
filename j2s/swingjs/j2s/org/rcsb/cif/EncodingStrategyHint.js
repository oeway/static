(function(){var P$=Clazz.newPackage("org.rcsb.cif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EncodingStrategyHint");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.categoryName=null;
this.columnName=null;
this.encoding=null;
this.precision=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$Integer', function (categoryName, columnName, encoding, precision) {
;C$.$init$.apply(this);
this.categoryName=categoryName;
this.columnName=columnName;
this.encoding=encoding;
this.precision=precision;
}, 1);

Clazz.newMeth(C$, 'getCategoryName$', function () {
return this.categoryName;
});

Clazz.newMeth(C$, 'setCategoryName$S', function (categoryName) {
this.categoryName=categoryName;
});

Clazz.newMeth(C$, 'getColumnName$', function () {
return this.columnName;
});

Clazz.newMeth(C$, 'setColumnName$S', function (columnName) {
this.columnName=columnName;
});

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setEncoding$S', function (encoding) {
this.encoding=encoding;
});

Clazz.newMeth(C$, 'getPrecision$', function () {
return this.precision;
});

Clazz.newMeth(C$, 'setPrecision$Integer', function (precision) {
this.precision=precision;
});
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:24 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
