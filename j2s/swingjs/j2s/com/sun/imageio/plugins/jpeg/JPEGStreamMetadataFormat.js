(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JPEGStreamMetadataFormat", null, 'com.sun.imageio.plugins.jpeg.JPEGMetadataFormat');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['theInstance','com.sun.imageio.plugins.jpeg.JPEGStreamMetadataFormat']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I.apply(this,["javax_imageio_jpeg_stream_1.0", 4]);C$.$init$.apply(this);
this.addStreamElements$S(this.getRootName$());
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.theInstance == null ) {
C$.theInstance=Clazz.new_(C$);
}return C$.theInstance;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
