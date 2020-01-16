(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','javax.imageio.spi.ImageWriterSpi','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$readerSpiNames=Clazz.array(String, -1, ["io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReaderSpi"]);
C$.formatNames=Clazz.array(String, -1, ["jpeg 2000", "JPEG 2000", "jpeg2000", "JPEG2000"]);
C$.extensions=Clazz.array(String, -1, ["jp2"]);
C$.mimeTypes=Clazz.array(String, -1, ["image/jp2", "image/jpeg2000"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$readerSpiNames','String[]','+formatNames','+extensions','+mimeTypes']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), C$.formatNames, C$.extensions, C$.mimeTypes, "io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriter", $I$(2).STANDARD_OUTPUT_TYPE, C$.$readerSpiNames, false, null, null, null, null, true, "com_sun_media_imageio_plugins_jpeg2000_image_1.0", "io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(1).getSpecificationTitle$() + " JPEG 2000 Image Writer";
return desc;
});

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
var codecLibWriterSPIClass=null;
try {
codecLibWriterSPIClass=Clazz.forName("io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriterCodecLibSpi");
} catch (t) {
}
if (codecLibWriterSPIClass != null ) {
var codecLibWriterSPI=registry.getServiceProviderByClass$Class(codecLibWriterSPIClass);
if (codecLibWriterSPI != null ) {
registry.setOrdering$Class$TT$TT(category, codecLibWriterSPI, this);
}}});

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageTypeSpecifier', function (type) {
var sm=type.getSampleModel$();
if (sm.getNumBands$() > 16384) return false;
if (sm.getDataType$() < 0 || sm.getDataType$() > 3 ) return false;
return true;
});

Clazz.newMeth(C$, 'createWriterInstance$O', function (extension) {
return Clazz.new_($I$(3,1).c$$javax_imageio_spi_ImageWriterSpi,[this]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
