(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.raw"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','javax.imageio.spi.ImageWriterSpi','io.scif.media.imageioimpl.plugins.raw.RawImageWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RawImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$readerSpiNames=Clazz.array(String, -1, ["io.scif.media.imageioimpl.plugins.raw.RawImageReaderSpi"]);
C$.formatNames=Clazz.array(String, -1, ["raw", "RAW"]);
C$.entensions=Clazz.array(String, -1, [""]);
C$.mimeType=Clazz.array(String, -1, [""]);
}

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
}, 1);

C$.$fields$=[['Z',['registered']]
,['O',['$readerSpiNames','String[]','+formatNames','+entensions','+mimeType']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), C$.formatNames, C$.entensions, C$.mimeType, "io.scif.media.imageioimpl.plugins.raw.RawImageWriter", $I$(2).STANDARD_OUTPUT_TYPE, C$.$readerSpiNames, true, null, null, null, null, true, null, null, null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
var desc=$I$(1).getSpecificationTitle$() + " Raw Image Writer";
return desc;
});

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class', function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
});

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageTypeSpecifier', function (type) {
return true;
});

Clazz.newMeth(C$, 'createWriterInstance$O', function (extension) {
return Clazz.new_($I$(3,1).c$$javax_imageio_spi_ImageWriterSpi,[this]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
