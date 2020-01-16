(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ByteColumn", null, 'org.scijava.util.ByteArray', 'org.scijava.table.PrimitiveColumn');

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
return Clazz.getClass(Byte);
});

Clazz.newMeth(C$, ['fill$BA','fill$TArrayType'], function (values) {
this.setArray$BA(values.clone$());
this.setSize$I(values.length);
});

Clazz.newMeth(C$, ['fill$BA$I','fill$TArrayType$I'], function (values, offset) {
if (this.getArray$() == null ) this.setArray$BA(values.clone$());
 else {
System.arraycopy$O$I$O$I$I(values, 0, this.getArray$(), offset, values.length);
}this.setSize$I(values.length);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
