(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FloatColumn", null, 'org.scijava.util.FloatArray', 'org.scijava.table.PrimitiveColumn');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['header']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (header) {
Clazz.super_(C$, this);
this.header=header;
}, 1);

Clazz.newMeth(C$, 'getHeader$', function () {
return this.header;
});

Clazz.newMeth(C$, 'setHeader$S', function (header) {
this.header=header;
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass(Float);
});

Clazz.newMeth(C$, ['fill$FA','fill$TArrayType'], function (values) {
this.setArray$FA(values.clone$());
this.setSize$I(values.length);
});

Clazz.newMeth(C$, ['fill$FA$I','fill$TArrayType$I'], function (values, offset) {
if (this.getArray$() == null ) this.setArray$FA(values.clone$());
 else {
System.arraycopy$O$I$O$I$I(values, 0, this.getArray$(), offset, values.length);
}this.setSize$I(values.length);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1