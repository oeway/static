(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.wbmp"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','javax.imageio.spi.ImageReaderSpi','io.scif.media.imageioimpl.common.ImageUtil','io.scif.media.imageioimpl.plugins.wbmp.WBMPImageReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WBMPImageReaderSpi", null, 'javax.imageio.spi.ImageReaderSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$writerSpiNames=Clazz.array(String, -1, ["io.scif.media.imageioimpl.plugins.wbmp.WBMPImageWriterSpi"]);
C$.formatNames=Clazz.array(String, -1, ["wbmp", "WBMP"]);
C$.entensions=Clazz.array(String, -1, ["wbmp"]);
C$.mimeType=Clazz.array(String, -1, ["image/vnd.wap.wbmp"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$writerSpiNames','String[]','+formatNames','+entensions','+mimeType']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), C$.formatNames, C$.entensions, C$.mimeType, "io.scif.media.imageioimpl.plugins.wbmp.WBMPImageReader", $I$(2).STANDARD_INPUT_TYPE, C$.$writerSpiNames, true, null, null, null, null, true, "com_sun_media_imageio_plugins_wbmp_image_1.0", "io.scif.media.imageioimpl.plugins.wbmp.WBMPMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
$I$(3).processOnRegistration$javax_imageio_spi_ServiceRegistry$Class$S$javax_imageio_spi_ImageReaderWriterSpi$I$I(registry, category, "WBMP", this, 8, 7);
});

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(1).getSpecificationTitle$() + " WBMP Image Reader";
return desc;
});

Clazz.newMeth(C$, 'canDecodeInput$O', function (source) {
if (!(Clazz.instanceOf(source, "javax.imageio.stream.ImageInputStream"))) {
return false;
}var stream=source;
stream.mark$();
var type=stream.readByte$();
var fixHeaderField=($b$[0] = stream.readByte$(), $b$[0]);
var width=$I$(3).readMultiByteInteger$javax_imageio_stream_ImageInputStream(stream);
var height=$I$(3).readMultiByteInteger$javax_imageio_stream_ImageInputStream(stream);
var remainingBytes=stream.length$() - stream.getStreamPosition$();
stream.reset$();
if (type != 0 || fixHeaderField != 0 ) {
return false;
}if (width <= 0 || height <= 0 ) {
return false;
}var scanSize=((width/8|0)) + ((width % 8) == 0 ? 0 : 1);
return (remainingBytes == scanSize * height);
});

Clazz.newMeth(C$, 'createReaderInstance$O', function (extension) {
return Clazz.new_($I$(4,1).c$$javax_imageio_spi_ImageReaderSpi,[this]);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
