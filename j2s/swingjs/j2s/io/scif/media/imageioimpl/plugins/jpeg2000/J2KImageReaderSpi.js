(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','javax.imageio.spi.ImageReaderSpi','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KImageReaderSpi", null, 'javax.imageio.spi.ImageReaderSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$writerSpiNames=Clazz.array(String, -1, ["io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriterSpi"]);
C$.formatNames=Clazz.array(String, -1, ["jpeg 2000", "JPEG 2000", "jpeg2000", "JPEG2000"]);
C$.extensions=Clazz.array(String, -1, ["jp2"]);
C$.mimeTypes=Clazz.array(String, -1, ["image/jp2", "image/jpeg2000"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$writerSpiNames','String[]','+formatNames','+extensions','+mimeTypes']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), C$.formatNames, C$.extensions, C$.mimeTypes, "io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReader", $I$(2).STANDARD_INPUT_TYPE, C$.$writerSpiNames, false, null, null, null, null, true, "com_sun_media_imageio_plugins_jpeg2000_image_1.0", "io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
var codecLibReaderSPIClass=null;
try {
codecLibReaderSPIClass=Clazz.forName("io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReaderCodecLibSpi");
} catch (t) {
}
if (codecLibReaderSPIClass != null ) {
var codecLibReaderSPI=registry.getServiceProviderByClass$Class(codecLibReaderSPIClass);
if (codecLibReaderSPI != null ) {
registry.setOrdering$Class$TT$TT(category, codecLibReaderSPI, this);
}}});

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(1).getSpecificationTitle$() + " JPEG 2000 Image Reader";
return desc;
});

Clazz.newMeth(C$, 'canDecodeInput$O', function (source) {
if (!(Clazz.instanceOf(source, "javax.imageio.stream.ImageInputStream"))) {
return false;
}var stream=source;
stream.mark$();
var marker=(stream.read$() << 8) | stream.read$();
if (marker == 65359) {
stream.reset$();
return true;
}stream.reset$();
stream.mark$();
var b=Clazz.array(Byte.TYPE, [12]);
stream.readFully$BA(b);
stream.reset$();
if (b[0] != 0 || b[1] != 0  || b[2] != 0  || b[3] != 12 ) return false;
if ((b[4] & 255) != 106 || (b[5] & 255) != 80  || (b[6] & 255) != 32  || (b[7] & 255) != 32 ) return false;
if ((b[8] & 255) != 13 || (b[9] & 255) != 10  || (b[10] & 255) != 135  || (b[11] & 255) != 10 ) return false;
return true;
});

Clazz.newMeth(C$, 'createReaderInstance$O', function (extension) {
return Clazz.new_($I$(3,1).c$$javax_imageio_spi_ImageReaderSpi,[this]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
