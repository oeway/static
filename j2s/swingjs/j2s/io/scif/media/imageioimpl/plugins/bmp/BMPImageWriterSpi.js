(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.bmp"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','javax.imageio.spi.ImageWriterSpi','io.scif.media.imageioimpl.common.ImageUtil','io.scif.media.imageioimpl.plugins.bmp.BMPImageWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BMPImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$readerSpiNames=Clazz.array(String, -1, ["io.scif.media.imageioimpl.plugins.bmp.BMPImageReaderSpi"]);
C$.formatNames=Clazz.array(String, -1, ["bmp", "BMP"]);
C$.extensions=Clazz.array(String, -1, ["bmp"]);
C$.mimeTypes=Clazz.array(String, -1, ["image/bmp", "image/x-bmp", "image/x-windows-bmp"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$readerSpiNames','String[]','+formatNames','+extensions','+mimeTypes']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), C$.formatNames, C$.extensions, C$.mimeTypes, "io.scif.media.imageioimpl.plugins.bmp.BMPImageWriter", $I$(2).STANDARD_OUTPUT_TYPE, C$.$readerSpiNames, false, null, null, null, null, true, "com_sun_media_imageio_plugins_bmp_image_1.0", "io.scif.media.imageioimpl.plugins.bmp.BMPMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(1).getSpecificationTitle$() + " BMP Image Writer";
return desc;
});

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
$I$(3).processOnRegistration$javax_imageio_spi_ServiceRegistry$Class$S$javax_imageio_spi_ImageReaderWriterSpi$I$I(registry, category, "BMP", this, 8, 7);
});

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageTypeSpecifier', function (type) {
var dataType=type.getSampleModel$().getDataType$();
if (dataType < 0 || dataType > 3 ) return false;
var sm=type.getSampleModel$();
var numBands=sm.getNumBands$();
if (!(numBands == 1 || numBands == 3 )) return false;
if (numBands == 1 && dataType != 0 ) return false;
if (dataType > 0 && !(Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) ) return false;
return true;
});

Clazz.newMeth(C$, 'createWriterInstance$O', function (extension) {
return Clazz.new_($I$(4,1).c$$javax_imageio_spi_ImageWriterSpi,[this]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
