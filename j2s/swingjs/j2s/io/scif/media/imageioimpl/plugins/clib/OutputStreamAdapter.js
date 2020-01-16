(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.clib"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OutputStreamAdapter", null, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['stream','javax.imageio.stream.ImageOutputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageOutputStream', function (stream) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.stream=stream;
}, 1);

Clazz.newMeth(C$, 'close$', function () {
this.stream.close$();
});

Clazz.newMeth(C$, 'write$BA', function (b) {
this.stream.write$BA(b);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
this.stream.write$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'write$I', function (b) {
this.stream.write$I(b);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
