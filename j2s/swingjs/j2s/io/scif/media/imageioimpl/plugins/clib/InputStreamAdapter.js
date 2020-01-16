(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.clib");
/*c*/var C$=Clazz.newClass(P$, "InputStreamAdapter", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['stream','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream', function (stream) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.stream=stream;
}, 1);

Clazz.newMeth(C$, 'close$', function () {
this.stream.close$();
});

Clazz.newMeth(C$, 'mark$I', function (readlimit) {
this.stream.mark$();
});

Clazz.newMeth(C$, 'markSupported$', function () {
return true;
});

Clazz.newMeth(C$, 'read$', function () {
return this.stream.read$();
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
return this.stream.read$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'reset$', function () {
this.stream.reset$();
});

Clazz.newMeth(C$, 'skip$J', function (n) {
return this.stream.skipBytes$J(n);
});

Clazz.newMeth(C$, 'getWrappedStream$', function () {
return this.stream;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
