(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.gif"),I$=[[0,'javax.imageio.spi.ImageWriterSpi','io.scif.media.imageioimpl.common.PaletteBuilder','io.scif.media.imageioimpl.common.PackageUtil','io.scif.media.imageioimpl.common.ImageUtil','io.scif.media.imageioimpl.plugins.gif.GIFImageWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GIFImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$names=Clazz.array(String, -1, ["gif", "GIF"]);
C$.$suffixes=Clazz.array(String, -1, ["gif"]);
C$.$MIMETypes=Clazz.array(String, -1, ["image/gif"]);
C$.$readerSpiNames=Clazz.array(String, -1, ["com.sun.imageio.plugins.gif.GIFImageReaderSpi"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$names','String[]','+$suffixes','+$MIMETypes','+$readerSpiNames']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,["Sun Microsystems, Inc.", "1.0", C$.$names, C$.$suffixes, C$.$MIMETypes, "io.scif.media.imageioimpl.plugins.gif.GIFImageWriter", $I$(1).STANDARD_OUTPUT_TYPE, C$.$readerSpiNames, true, "javax_imageio_gif_stream_1.0", "io.scif.media.imageioimpl.plugins.gif.GIFStreamMetadataFormat", null, null, true, "javax_imageio_gif_image_1.0", "io.scif.media.imageioimpl.plugins.gif.GIFStreamMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageTypeSpecifier', function (type) {
if (type == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type == null!"]);
}var sm=type.getSampleModel$();
var cm=type.getColorModel$();
var canEncode=sm.getNumBands$() == 1 && sm.getSampleSize$I(0) <= 8  && sm.getWidth$() <= 65535  && sm.getHeight$() <= 65535  && (cm == null  || cm.getComponentSize$()[0] <= 8 ) ;
if (canEncode) {
return true;
} else {
return $I$(2).canCreatePalette$javax_imageio_ImageTypeSpecifier(type);
}});

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(3).getSpecificationTitle$() + " GIF Image Writer";
return desc;
});

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
$I$(4).processOnRegistration$javax_imageio_spi_ServiceRegistry$Class$S$javax_imageio_spi_ImageReaderWriterSpi$I$I(registry, category, "GIF", this, 9, 8);
});

Clazz.newMeth(C$, 'createWriterInstance$O', function (extension) {
return Clazz.new_($I$(5,1).c$$io_scif_media_imageioimpl_plugins_gif_GIFImageWriterSpi,[this]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
