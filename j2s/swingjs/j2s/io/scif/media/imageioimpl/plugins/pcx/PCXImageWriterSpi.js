(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pcx"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','javax.imageio.spi.ImageWriterSpi','io.scif.media.imageioimpl.plugins.pcx.PCXImageWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PCXImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$readerSpiNames=Clazz.array(String, -1, ["io.scif.media.imageioimpl.plugins.pcx.PCXImageReaderSpi"]);
C$.formatNames=Clazz.array(String, -1, ["pcx", "PCX"]);
C$.extensions=Clazz.array(String, -1, ["pcx"]);
C$.mimeTypes=Clazz.array(String, -1, ["image/pcx", "image/x-pcx", "image/x-windows-pcx", "image/x-pc-paintbrush"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$readerSpiNames','String[]','+formatNames','+extensions','+mimeTypes']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), C$.formatNames, C$.extensions, C$.mimeTypes, "io.scif.media.imageioimpl.plugins.pcx.PCXImageWriter", $I$(2).STANDARD_OUTPUT_TYPE, C$.$readerSpiNames, false, null, null, null, null, true, null, null, null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(1).getSpecificationTitle$() + " PCX Image Writer";
return desc;
});

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
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
return Clazz.new_($I$(3,1).c$$io_scif_media_imageioimpl_plugins_pcx_PCXImageWriterSpi,[this]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
