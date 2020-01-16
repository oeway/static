(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000");
/*c*/var C$=Clazz.newClass(P$, "ImageInputStreamWrapper", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['src','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream', function (src) {
Clazz.super_(C$, this);
this.src=src;
}, 1);

Clazz.newMeth(C$, 'read$', function () {
return this.src.read$();
});

Clazz.newMeth(C$, 'close$', function () {
this.src.close$();
});

Clazz.newMeth(C$, 'mark$I', function (readlimit) {
this.src.mark$();
});

Clazz.newMeth(C$, 'markSupported$', function () {
return true;
});

Clazz.newMeth(C$, 'read$BA', function (b) {
return this.src.read$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
return this.src.read$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'reset$', function () {
this.src.reset$();
});

Clazz.newMeth(C$, 'skip$J', function (n) {
return this.src.skipBytes$J(n);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
