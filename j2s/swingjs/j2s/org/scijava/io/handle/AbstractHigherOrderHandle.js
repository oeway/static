(function(){var P$=Clazz.newPackage("org.scijava.io.handle");
/*c*/var C$=Clazz.newClass(P$, "AbstractHigherOrderHandle", null, 'org.scijava.io.handle.AbstractDataHandle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['closed'],'O',['handle','org.scijava.io.handle.DataHandle']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle', function (handle) {
Clazz.super_(C$, this);
this.handle=handle;
this.set$TD(handle.get$());
}, 1);

Clazz.newMeth(C$, 'isReadable$', function () {
return !this.closed && this.handle.isReadable$() ;
});

Clazz.newMeth(C$, 'isWritable$', function () {
return !this.closed && this.handle.isWritable$() ;
});

Clazz.newMeth(C$, 'length$', function () {
this.ensureOpen$();
return this.handle.length$();
});

Clazz.newMeth(C$, 'getType$', function () {
return this.handle.getType$();
});

Clazz.newMeth(C$, 'exists$', function () {
return this.handle.exists$();
});

Clazz.newMeth(C$, 'close$', function () {
if (!this.closed) {
this.cleanup$();
this.closed=true;
this.handle.close$();
this.handle=null;
}});

Clazz.newMeth(C$, 'ensureOpen$', function () {
if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["This handle is closed!"]);
}});

Clazz.newMeth(C$, 'handle$', function () {
return this.handle;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
