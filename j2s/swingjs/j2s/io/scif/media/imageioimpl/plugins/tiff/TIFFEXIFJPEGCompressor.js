(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TIFFEXIFJPEGCompressor", null, 'io.scif.media.imageioimpl.plugins.tiff.TIFFBaseJPEGCompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_ImageWriteParam', function (param) {
;C$.superclazz.c$$S$I$Z$javax_imageio_ImageWriteParam.apply(this,["EXIF JPEG", 6, false, param]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setMetadata$javax_imageio_metadata_IIOMetadata', function (metadata) {
C$.superclazz.prototype.setMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [metadata]);
this.initJPEGWriter$Z$Z(false, true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
