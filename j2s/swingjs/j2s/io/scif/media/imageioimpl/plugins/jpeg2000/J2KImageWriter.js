(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),p$1={},I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.I18N','io.scif.media.imageio.plugins.jpeg2000.J2KImageWriteParam','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadata','java.util.Arrays','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriteParamJava','io.scif.media.imageioimpl.plugins.jpeg2000.RenderedImageSrc','io.scif.jj2000.j2k.image.Tiler','io.scif.jj2000.j2k.image.forwcomptransf.ForwCompTransf','io.scif.jj2000.j2k.image.ImgDataConverter','io.scif.jj2000.j2k.wavelet.analysis.ForwardWT','io.scif.jj2000.j2k.quantization.quantizer.Quantizer','io.scif.jj2000.j2k.roi.encoder.ROIScaler','io.scif.jj2000.j2k.entropy.encoder.EntropyCoder','java.io.File','io.scif.jj2000.j2k.codestream.writer.FileCodestreamWriter','io.scif.jj2000.j2k.entropy.encoder.PostCompRateAllocator','io.scif.jj2000.j2k.codestream.writer.HeaderEncoder','io.scif.jj2000.j2k.util.CodestreamManipulator','io.scif.media.imageioimpl.common.ImageUtil','javax.imageio.ImageTypeSpecifier','io.scif.jj2000.j2k.fileformat.writer.FileFormatWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KImageWriter", null, 'javax.imageio.ImageWriter');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.WRITE_ABORTED="Write aborted.";
}

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
}, 1);

C$.$fields$=[['O',['stream','javax.imageio.stream.ImageOutputStream']]
,['S',['WRITE_ABORTED']]]

Clazz.newMeth(C$, 'processImageProgressWrapper$F', function (percentageDone) {
this.processImageProgress$F(percentageDone);
});

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi', function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOutput$O', function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageWriter0")]);
this.stream=output;
} else this.stream=null;
});

Clazz.newMeth(C$, 'getDefaultWriteParam$', function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam', function (param) {
return null;
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (imageType, param) {
return Clazz.new_($I$(3,1).c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_ImageWriter,[imageType, param, this]);
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam', function (inData, param) {
return null;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (inData, imageType, param) {
if (inData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData == null!"]);
}if (imageType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["imageType == null!"]);
}if (Clazz.instanceOf(inData, "io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadata")) {
return (inData).clone$();
}try {
var outData=Clazz.new_($I$(3,1));
var formats=$I$(4).asList$TTA(inData.getMetadataFormatNames$());
var format=null;
if (formats.contains$O("com_sun_media_imageio_plugins_jpeg2000_image_1.0")) {
format="com_sun_media_imageio_plugins_jpeg2000_image_1.0";
} else if (inData.isStandardMetadataFormatSupported$()) {
format="javax_imageio_1.0";
}if (format != null ) {
outData.setFromTree$S$org_w3c_dom_Node(format, inData.getAsTree$S(format));
return outData;
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
return null;
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'canWriteRasters$', function () {
return true;
});

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam', function (streamMetadata, image, param) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("J2KImageWriter7")]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageWriter8")]);
}this.clearAbortRequest$();
this.processImageStarted$I(0);
var input=null;
var writeRaster=image.hasRaster$();
var raster=null;
var sampleModel=null;
if (writeRaster) {
raster=image.getRaster$();
sampleModel=raster.getSampleModel$();
} else {
input=image.getRenderedImage$();
sampleModel=input.getSampleModel$();
}p$1.checkSampleModel$java_awt_image_SampleModel.apply(this, [sampleModel]);
if (param == null ) param=this.getDefaultWriteParam$();
var j2kwparam=Clazz.new_($I$(5,1).c$$javax_imageio_IIOImage$javax_imageio_ImageWriteParam,[image, param]);
if (j2kwparam.getPackPacketHeaderInTile$() && j2kwparam.getPackPacketHeaderInMain$() ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageWriter1")]);
if (j2kwparam.getLossless$() && j2kwparam.getEncodingRate$() != 1.7976931348623157E308  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageWriter2")]);
if ((!writeRaster && Clazz.instanceOf(input.getColorModel$(), "java.awt.image.IndexColorModel") ) || (writeRaster && Clazz.instanceOf(raster.getSampleModel$(), "java.awt.image.MultiPixelPackedSampleModel") ) ) {
j2kwparam.setDecompositionLevel$S("0");
j2kwparam.setLossless$Z(true);
j2kwparam.setEncodingRate$D(1.7976931348623157E308);
j2kwparam.setQuantizationType$S("reversible");
j2kwparam.setFilters$S("w5x3");
} else if (j2kwparam.getEncodingRate$() == 1.7976931348623157E308 ) {
j2kwparam.setLossless$Z(true);
j2kwparam.setQuantizationType$S("reversible");
j2kwparam.setFilters$S("w5x3");
}var pphTile=j2kwparam.getPackPacketHeaderInTile$();
var pphMain=j2kwparam.getPackPacketHeaderInMain$();
var tempSop=false;
var tempEph=false;
var bands=param.getSourceBands$();
var ncomp=sampleModel.getNumBands$();
if (bands != null ) ncomp=bands.length;
var imgsrc=null;
if (writeRaster) imgsrc=Clazz.new_($I$(6,1).c$$java_awt_image_Raster$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriter,[raster, j2kwparam, this]);
 else imgsrc=Clazz.new_($I$(6,1).c$$java_awt_image_RenderedImage$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriter,[input, j2kwparam, this]);
var imsigned=Clazz.array(Boolean.TYPE, [ncomp]);
if (bands != null ) {
for (var i=0; i < ncomp; i++) imsigned[i]=(imgsrc).isOrigSigned$I(bands[i]);

} else {
for (var i=0; i < ncomp; i++) imsigned[i]=(imgsrc).isOrigSigned$I(i);

}var tw=j2kwparam.getTileWidth$();
var th=j2kwparam.getTileHeight$();
var refx=j2kwparam.getMinX$();
var refy=j2kwparam.getMinY$();
if (refx < 0 || refy < 0 ) throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(1).getString$S("J2KImageWriter3")]);
var trefx=j2kwparam.getTileGridXOffset$();
var trefy=j2kwparam.getTileGridYOffset$();
if (trefx < 0 || trefy < 0  || trefx > refx  || trefy > refy ) throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(1).getString$S("J2KImageWriter4")]);
var imgtiler=Clazz.new_($I$(7,1).c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$I$I$I$I$I$I,[imgsrc, refx, refy, trefx, trefy, tw, th]);
var fctransf=Clazz.new_($I$(8,1).c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava,[imgtiler, j2kwparam]);
var converter=Clazz.new_($I$(9,1).c$$io_scif_jj2000_j2k_image_BlkImgDataSrc,[fctransf]);
var dwt=$I$(10).createInstance$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava(converter, j2kwparam);
var quant=$I$(11).createInstance$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava(dwt, j2kwparam);
var rois=$I$(12).createInstance$io_scif_jj2000_j2k_quantization_quantizer_Quantizer$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava(quant, j2kwparam);
var ecoder=$I$(13).createInstance$io_scif_jj2000_j2k_quantization_quantizer_CBlkQuantDataSrcEnc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_jj2000_j2k_entropy_CBlkSizeSpec$io_scif_jj2000_j2k_entropy_PrecinctSizeSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec(rois, j2kwparam, j2kwparam.getCodeBlockSize$(), j2kwparam.getPrecinctPartition$(), j2kwparam.getBypass$(), j2kwparam.getResetMQ$(), j2kwparam.getTerminateOnByte$(), j2kwparam.getCausalCXInfo$(), j2kwparam.getCodeSegSymbol$(), j2kwparam.getMethodForMQLengthCalc$(), j2kwparam.getMethodForMQTermination$());
var tmpFile=$I$(14).createTempFile$S$S("jiio-", ".tmp");
tmpFile.deleteOnExit$();
var bwriter=Clazz.new_($I$(15,1).c$$java_io_File$I,[tmpFile, 2147483647]);
var rate=j2kwparam.getEncodingRate$();
var ralloc=$I$(16).createInstance$io_scif_jj2000_j2k_entropy_encoder_CodedCBlkDataSrcEnc$F$io_scif_jj2000_j2k_codestream_writer_CodestreamWriter$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava(ecoder, rate, bwriter, j2kwparam);
var headenc=Clazz.new_($I$(17,1).c$$io_scif_jj2000_j2k_image_ImgData$ZA$io_scif_jj2000_j2k_wavelet_analysis_ForwardWT$io_scif_jj2000_j2k_image_Tiler$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_jj2000_j2k_roi_encoder_ROIScaler$io_scif_jj2000_j2k_entropy_encoder_PostCompRateAllocator,[imgsrc, imsigned, dwt, imgtiler, j2kwparam, rois, ralloc]);
ralloc.setHeaderEncoder$io_scif_jj2000_j2k_codestream_writer_HeaderEncoder(headenc);
headenc.encodeMainHeader$();
try {
ralloc.initialize$();
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
if (C$.WRITE_ABORTED.equals$O(e.getMessage$())) {
bwriter.close$();
tmpFile.delete$();
this.processWriteAborted$();
return;
} else throw e;
} else {
throw e;
}
}
headenc.reset$();
headenc.encodeMainHeader$();
bwriter.commitBitstreamHeader$io_scif_jj2000_j2k_codestream_writer_HeaderEncoder(headenc);
ralloc.runAndWrite$();
bwriter.close$();
var fileLength=bwriter.getLength$();
var pktspertp=j2kwparam.getPacketPerTilePart$();
var ntiles=imgtiler.getNumTiles$();
if (pktspertp > 0 || pphTile  || pphMain ) {
var cm=Clazz.new_($I$(18,1).c$$java_io_File$I$I$Z$Z$Z$Z,[tmpFile, ntiles, pktspertp, pphMain, pphTile, tempSop, tempEph]);
fileLength+=cm.doCodestreamManipulation$();
}var nc=imgsrc.getNumComps$();
var bpc=Clazz.array(Integer.TYPE, [nc]);
for (var comp=0; comp < nc; comp++) bpc[comp]=imgsrc.getNomRangeBits$I(comp);

var colorModel=(input != null ) ? input.getColorModel$() : null;
if (bands != null ) {
var type=param.getDestinationType$();
if (type != null ) colorModel=type.getColorModel$();
}if (colorModel == null ) {
colorModel=$I$(19).createColorModel$java_awt_image_SampleModel(sampleModel);
}var metadata=null;
if (Clazz.instanceOf(param, "io.scif.media.imageio.plugins.jpeg2000.J2KImageWriteParam") && !(param).getWriteCodeStreamOnly$() ) {
var inMetadata=image.getMetadata$();
var metadata1=Clazz.new_($I$(3,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel$I$I$javax_imageio_ImageWriteParam$javax_imageio_ImageWriter,[colorModel, sampleModel, imgsrc.getImgWidth$(), imgsrc.getImgHeight$(), param, this]);
if (inMetadata == null ) {
metadata=metadata1;
} else {
if (colorModel != null ) {
var imageType=Clazz.new_($I$(20,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
metadata=this.convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(inMetadata, imageType, param);
} else {
var metaFormat=null;
var metaFormats=$I$(4).asList$TTA(inMetadata.getMetadataFormatNames$());
if (metaFormats.contains$O("com_sun_media_imageio_plugins_jpeg2000_image_1.0")) {
metaFormat="com_sun_media_imageio_plugins_jpeg2000_image_1.0";
} else if (inMetadata.isStandardMetadataFormatSupported$()) {
metaFormat="javax_imageio_1.0";
}metadata=Clazz.new_($I$(3,1));
if (metaFormat != null ) {
metadata.setFromTree$S$org_w3c_dom_Node(metaFormat, inMetadata.getAsTree$S(metaFormat));
}}metadata.mergeTree$S$org_w3c_dom_Node("com_sun_media_imageio_plugins_jpeg2000_image_1.0", metadata1.getAsTree$S("com_sun_media_imageio_plugins_jpeg2000_image_1.0"));
}}var ffw=Clazz.new_($I$(21,1).c$$java_io_File$javax_imageio_stream_ImageOutputStream$I$I$I$IA$I$java_awt_image_ColorModel$java_awt_image_SampleModel$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata,[tmpFile, this.stream, imgsrc.getImgHeight$(), imgsrc.getImgWidth$(), nc, bpc, fileLength, colorModel, sampleModel, metadata]);
fileLength+=ffw.writeFileFormat$();
tmpFile.delete$();
this.processImageComplete$();
});

Clazz.newMeth(C$, 'abort$', function () {
C$.superclazz.prototype.abort$.apply(this, []);
});

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.stream=null;
});

Clazz.newMeth(C$, 'getAbortRequest$', function () {
return this.abortRequested$();
});

Clazz.newMeth(C$, 'checkSampleModel$java_awt_image_SampleModel', function (sm) {
var type=sm.getDataType$();
if (type < 0 || type > 3 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageWriter5")]);
if (sm.getNumBands$() > 16384) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageWriter6")]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
