(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'javax.imageio.spi.IIORegistry',['io.scif.media.imageioimpl.plugins.tiff.TIFFJPEGCompressor','.JPEGSPIFilter'],'io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','io.scif.media.imageio.plugins.tiff.TIFFField','java.io.ByteArrayInputStream','javax.imageio.stream.MemoryCacheImageInputStream','java.io.ByteArrayOutputStream','javax.imageio.stream.MemoryCacheImageOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFJPEGCompressor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.media.imageioimpl.plugins.tiff.TIFFBaseJPEGCompressor');
C$.$classes$=[['JPEGSPIFilter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getJPEGTablesReader$', function () {
var jpegReader=null;
try {
var registry=$I$(1).getDefaultInstance$();
var imageReaderClass=Clazz.forName("javax.imageio.spi.ImageReaderSpi");
var readerSPIs=registry.getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(imageReaderClass, Clazz.new_($I$(2,1)), true);
if (readerSPIs.hasNext$()) {
var jpegReaderSPI=readerSPIs.next$();
jpegReader=jpegReaderSPI.createReaderInstance$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return jpegReader;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_ImageWriteParam', function (param) {
;C$.superclazz.c$$S$I$Z$javax_imageio_ImageWriteParam.apply(this,["JPEG", 7, false, param]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setMetadata$javax_imageio_metadata_IIOMetadata', function (metadata) {
C$.superclazz.prototype.setMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [metadata]);
if (Clazz.instanceOf(metadata, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata")) {
var tim=metadata;
var rootIFD=tim.getRootIFD$();
var base=$I$(3).getInstance$();
var f=tim.getTIFFField$I(277);
var numBands=f.getAsInt$I(0);
if (numBands == 1) {
rootIFD.removeTIFFField$I(530);
rootIFD.removeTIFFField$I(531);
rootIFD.removeTIFFField$I(532);
} else {
var YCbCrSubSamplingField=Clazz.new_($I$(4,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(530), 3, 2, Clazz.array(Character.TYPE, -1, [2, 2])]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(YCbCrSubSamplingField);
var YCbCrPositioningField=Clazz.new_($I$(4,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(531), 3, 1, Clazz.array(Character.TYPE, -1, [1])]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(YCbCrPositioningField);
var referenceBlackWhiteField=Clazz.new_($I$(4,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(532), 5, 6, Clazz.array(Long.TYPE, -2, [Clazz.array(Long.TYPE, -1, [0, 1]), Clazz.array(Long.TYPE, -1, [255, 1]), Clazz.array(Long.TYPE, -1, [128, 1]), Clazz.array(Long.TYPE, -1, [255, 1]), Clazz.array(Long.TYPE, -1, [128, 1]), Clazz.array(Long.TYPE, -1, [255, 1])])]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(referenceBlackWhiteField);
}var JPEGTablesField=tim.getTIFFField$I(347);
if (JPEGTablesField != null ) {
this.initJPEGWriter$Z$Z(true, false);
}if (JPEGTablesField != null  && this.JPEGWriter != null  ) {
if (false) System.out.println$S("Has JPEGTables ...");
this.writeAbbreviatedStream=true;
if (JPEGTablesField.getCount$() > 0) {
if (false) System.out.println$S("JPEGTables > 0");
var tables=JPEGTablesField.getAsBytes$();
var bais=Clazz.new_($I$(5,1).c$$BA,[tables]);
var iis=Clazz.new_($I$(6,1).c$$java_io_InputStream,[bais]);
var jpegReader=C$.getJPEGTablesReader$();
jpegReader.setInput$O(iis);
try {
this.JPEGStreamMetadata=jpegReader.getStreamMetadata$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.JPEGStreamMetadata=null;
} else {
throw e;
}
} finally {
jpegReader.reset$();
}
if (false) System.out.println$O(this.JPEGStreamMetadata);
}if (this.JPEGStreamMetadata == null ) {
if (false) System.out.println$S("JPEGTables == 0");
this.JPEGStreamMetadata=this.JPEGWriter.getDefaultStreamMetadata$javax_imageio_ImageWriteParam(this.JPEGParam);
var tableByteStream=Clazz.new_($I$(7,1));
var tableStream=Clazz.new_($I$(8,1).c$$java_io_OutputStream,[tableByteStream]);
this.JPEGWriter.setOutput$O(tableStream);
try {
this.JPEGWriter.prepareWriteSequence$javax_imageio_metadata_IIOMetadata(this.JPEGStreamMetadata);
tableStream.flush$();
this.JPEGWriter.endWriteSequence$();
var tables=tableByteStream.toByteArray$();
if (false) System.out.println$S("tables.length = " + tables.length);
JPEGTablesField=Clazz.new_($I$(4,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(347), 7, tables.length, tables]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(JPEGTablesField);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
rootIFD.removeTIFFField$I(347);
this.writeAbbreviatedStream=false;
} else {
throw e;
}
}
}} else {
rootIFD.removeTIFFField$I(347);
this.initJPEGWriter$Z$Z(false, false);
}}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFJPEGCompressor, "JPEGSPIFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.imageio.spi.ServiceRegistry','javax.imageio.spi.ServiceRegistry.Filter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['filter$O','filter$'], function (provider) {
var readerSPI=provider;
if (readerSPI != null ) {
var streamMetadataName=readerSPI.getNativeStreamMetadataFormatName$();
if (streamMetadataName != null ) {
return streamMetadataName.equals$O("javax_imageio_jpeg_stream_1.0");
} else {
return false;
}}return false;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
