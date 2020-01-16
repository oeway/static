(function(){var P$=Clazz.newPackage("io.scif.services"),p$1={},I$=[[0,'javax.imageio.ImageIO','javax.imageio.spi.IIORegistry','javax.imageio.spi.ServiceRegistry','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriterSpi','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriter','javax.imageio.IIOImage','io.scif.codec.JPEG2000CodecOptions','javax.imageio.stream.MemoryCacheImageInputStream','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReaderSpi','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JAIIIOServiceImpl", null, 'org.scijava.service.AbstractService', 'io.scif.services.JAIIIOService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'writeImage$java_io_OutputStream$java_awt_image_BufferedImage$io_scif_codec_JPEG2000CodecOptions', function (out, img, options) {
var ios=$I$(1).createImageOutputStream$O(out);
var registry=$I$(2).getDefaultInstance$();
var iter=$I$(3).lookupProviders$Class(Clazz.getClass($I$(4)));
registry.registerServiceProviders$java_util_Iterator(iter);
var spi=registry.getServiceProviderByClass$Class(Clazz.getClass($I$(4)));
var writer=Clazz.new_($I$(5,1).c$$javax_imageio_spi_ImageWriterSpi,[spi]);
writer.setOutput$O(ios);
var filter=options.lossless ? "w5x3" : "w9x7";
var iioImage=Clazz.new_($I$(6,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[img, null, null]);
var param=writer.getDefaultWriteParam$();
param.setCompressionMode$I(2);
param.setCompressionType$S("JPEG2000");
param.setLossless$Z(options.lossless);
param.setFilter$S(filter);
param.setCodeBlockSize$IA(options.codeBlockSize);
param.setEncodingRate$D(options.quality);
if (options.tileWidth > 0 && options.tileHeight > 0 ) {
param.setTiling$I$I$I$I(options.tileWidth, options.tileHeight, options.tileGridXOffset, options.tileGridYOffset);
}if (options.numDecompositionLevels != null ) {
param.setNumDecompositionLevels$I(options.numDecompositionLevels.intValue$());
}writer.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, iioImage, param);
ios.close$();
});

Clazz.newMeth(C$, 'writeImage$java_io_OutputStream$java_awt_image_BufferedImage$Z$IA$D', function (out, img, lossless, codeBlockSize, quality) {
var options=$I$(7).getDefaultOptions$();
options.lossless=lossless;
options.codeBlockSize=codeBlockSize;
options.quality=quality;
this.writeImage$java_io_OutputStream$java_awt_image_BufferedImage$io_scif_codec_JPEG2000CodecOptions(out, img, options);
});

Clazz.newMeth(C$, 'readImage$java_io_InputStream$io_scif_codec_JPEG2000CodecOptions', function ($in, options) {
var reader=p$1.getReader.apply(this, []);
var mciis=Clazz.new_($I$(8,1).c$$java_io_InputStream,[$in]);
reader.setInput$O$Z$Z(mciis, false, true);
var param=reader.getDefaultReadParam$();
if (options.resolution != null ) {
param.setResolution$I(options.resolution.intValue$());
}return reader.read$I$javax_imageio_ImageReadParam(0, param);
});

Clazz.newMeth(C$, 'readImage$java_io_InputStream', function ($in) {
return this.readImage$java_io_InputStream$io_scif_codec_JPEG2000CodecOptions($in, $I$(7).getDefaultOptions$());
});

Clazz.newMeth(C$, 'readRaster$java_io_InputStream$io_scif_codec_JPEG2000CodecOptions', function ($in, options) {
var reader=p$1.getReader.apply(this, []);
var mciis=Clazz.new_($I$(8,1).c$$java_io_InputStream,[$in]);
reader.setInput$O$Z$Z(mciis, false, true);
var param=reader.getDefaultReadParam$();
if (options.resolution != null ) {
param.setResolution$I(options.resolution.intValue$());
}return reader.readRaster$I$javax_imageio_ImageReadParam(0, param);
});

Clazz.newMeth(C$, 'readRaster$java_io_InputStream', function ($in) {
return this.readRaster$java_io_InputStream$io_scif_codec_JPEG2000CodecOptions($in, $I$(7).getDefaultOptions$());
});

Clazz.newMeth(C$, 'getReader', function () {
var registry=$I$(2).getDefaultInstance$();
var iter=$I$(3).lookupProviders$Class(Clazz.getClass($I$(9)));
registry.registerServiceProviders$java_util_Iterator(iter);
var spi=registry.getServiceProviderByClass$Class(Clazz.getClass($I$(9)));
return Clazz.new_($I$(10,1).c$$javax_imageio_spi_ImageReaderSpi,[spi]);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.services.JAIIIOServiceImpl',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
