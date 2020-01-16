(function(){var P$=Clazz.newPackage("org.scijava.io.handle");
/*c*/var C$=Clazz.newClass(P$, "DataHandleInputStream", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mark=-1;
}, 1);

C$.$fields$=[['L',['mark'],'O',['handle','org.scijava.io.handle.DataHandle']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle', function (handle) {
Clazz.super_(C$, this);
this.handle=handle;
}, 1);

Clazz.newMeth(C$, 'getDataHandle$', function () {
return this.handle;
});

Clazz.newMeth(C$, 'read$', function () {
return this.handle.read$();
});

Clazz.newMeth(C$, 'read$BA$I$I', function (array, offset, n) {
return this.handle.read$BA$I$I(array, offset, n);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
return this.handle.skip$J(n);
});

Clazz.newMeth(C$, 'available$', function () {
var remain=this.handle.length$() - this.handle.offset$();
if (remain > 2147483647) remain=2147483647;
return (remain|0);
});

Clazz.newMeth(C$, 'mark$I', function (readLimit) {
try {
this.mark=this.handle.offset$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'reset$', function () {
if (this.mark < 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No mark set"]);
this.handle.seek$J(this.mark);
});

Clazz.newMeth(C$, 'markSupported$', function () {
return true;
});

Clazz.newMeth(C$, 'close$', function () {
this.handle.close$();
this.mark=-1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
