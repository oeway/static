(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pcx"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','javax.imageio.spi.ImageReaderSpi','io.scif.media.imageioimpl.plugins.pcx.PCXImageReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PCXImageReaderSpi", null, 'javax.imageio.spi.ImageReaderSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$writerSpiNames=Clazz.array(String, -1, ["io.scif.media.imageioimpl.plugins.pcx.PCXImageWriterSpi"]);
C$.formatNames=Clazz.array(String, -1, ["pcx", "PCX"]);
C$.extensions=Clazz.array(String, -1, ["pcx"]);
C$.mimeTypes=Clazz.array(String, -1, ["image/pcx", "image/x-pcx", "image/x-windows-pcx", "image/x-pc-paintbrush"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$writerSpiNames','String[]','+formatNames','+extensions','+mimeTypes']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), C$.formatNames, C$.extensions, C$.mimeTypes, "io.scif.media.imageioimpl.plugins.pcx.PCXImageReader", $I$(2).STANDARD_INPUT_TYPE, C$.$writerSpiNames, false, null, null, null, null, true, null, null, null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
});

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(1).getSpecificationTitle$() + " PCX Image Reader";
return desc;
});

Clazz.newMeth(C$, 'canDecodeInput$O', function (source) {
if (!(Clazz.instanceOf(source, "javax.imageio.stream.ImageInputStream"))) {
return false;
}var stream=source;
stream.mark$();
var b=($b$[0] = stream.readByte$(), $b$[0]);
stream.reset$();
return (b == 10);
});

Clazz.newMeth(C$, 'createReaderInstance$O', function (extension) {
return Clazz.new_($I$(3,1).c$$io_scif_media_imageioimpl_plugins_pcx_PCXImageReaderSpi,[this]);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
