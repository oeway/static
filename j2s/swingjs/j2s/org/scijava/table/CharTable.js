(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "CharTable", null, null, 'org.scijava.table.Table');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getValue$I$I', function (col, row) {
return this.get$I(col).getValue$I(row);
});

Clazz.newMeth(C$, 'setValue$I$I$C', function (col, row, value) {
this.get$I(col).setValue$I$C(row, value);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
