(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DataHandleOutputStream", null, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['handle','org.scijava.io.handle.DataHandle']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle', function (handle) {
Clazz.super_(C$, this);
this.handle=handle;
}, 1);

Clazz.newMeth(C$, 'write$I', function (i) {
this.handle.write$I(i);
});

Clazz.newMeth(C$, 'write$BA', function (b) {
this.handle.write$BA(b);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
this.handle.write$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'close$', function () {
this.handle.close$();
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
