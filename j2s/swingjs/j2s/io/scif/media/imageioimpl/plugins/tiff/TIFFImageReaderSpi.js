(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','javax.imageio.spi.ImageReaderSpi','io.scif.media.imageioimpl.plugins.tiff.TIFFImageReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFImageReaderSpi", null, 'javax.imageio.spi.ImageReaderSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$names=Clazz.array(String, -1, ["tif", "TIF", "tiff", "TIFF"]);
C$.$suffixes=Clazz.array(String, -1, ["tif", "tiff"]);
C$.$MIMETypes=Clazz.array(String, -1, ["image/tiff"]);
C$.$writerSpiNames=Clazz.array(String, -1, ["io.scif.media.imageioimpl.plugins.tiff.TIFFImageWriterSpi"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$names','String[]','+$suffixes','+$MIMETypes','+$writerSpiNames']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), C$.$names, C$.$suffixes, C$.$MIMETypes, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageReader", $I$(2).STANDARD_INPUT_TYPE, C$.$writerSpiNames, false, "com_sun_media_imageio_plugins_tiff_stream_1.0", "io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadataFormat", null, null, true, "com_sun_media_imageio_plugins_tiff_image_1.0", "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(1).getSpecificationTitle$() + " TIFF Image Reader";
return desc;
});

Clazz.newMeth(C$, 'canDecodeInput$O', function (input) {
if (!(Clazz.instanceOf(input, "javax.imageio.stream.ImageInputStream"))) {
return false;
}var stream=input;
var b=Clazz.array(Byte.TYPE, [4]);
stream.mark$();
stream.readFully$BA(b);
stream.reset$();
return ((b[0] == 73 && b[1] == 73  && b[2] == 42  && b[3] == 0 ) || (b[0] == 77 && b[1] == 77  && b[2] == 0  && b[3] == 42 ) );
});

Clazz.newMeth(C$, 'createReaderInstance$O', function (extension) {
return Clazz.new_($I$(3,1).c$$javax_imageio_spi_ImageReaderSpi,[this]);
});

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
