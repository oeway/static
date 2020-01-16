(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "ByteTable", null, null, 'org.scijava.table.Table');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getValue$I$I', function (col, row) {
return $b$[0] = this.get$I(col).getValue$I(row), $b$[0];
});

Clazz.newMeth(C$, 'setValue$I$I$B', function (col, row, value) {
this.get$I(col).setValue$I$B(row, ($b$[0] = value, $b$[0]));
});
};var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
