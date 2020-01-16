(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),p$1={},I$=[[0,'io.scif.media.imageio.plugins.jpeg2000.J2KImageWriteParam','io.scif.media.imageioimpl.plugins.jpeg2000.I18N','io.scif.jj2000.j2k.roi.MaxShiftSpec','io.scif.jj2000.j2k.quantization.QuantTypeSpec','io.scif.jj2000.j2k.quantization.QuantStepSizeSpec','io.scif.jj2000.j2k.quantization.GuardBitsSpec','io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterSpec','io.scif.jj2000.j2k.IntegerSpec','io.scif.jj2000.j2k.image.forwcomptransf.ForwCompTransfSpec','io.scif.jj2000.j2k.StringSpec','io.scif.jj2000.j2k.entropy.CBlkSizeSpec','io.scif.jj2000.j2k.entropy.PrecinctSizeSpec','io.scif.media.imageioimpl.plugins.jpeg2000.RenderedImageSrc','io.scif.jj2000.j2k.entropy.ProgressionSpec','java.awt.Rectangle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KImageWriteParamJava", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.packPacketHeaderInTile=false;
this.packPacketHeaderInMain=false;
this.packetPerTilePart=0;
this.encodingRate=1.7976931348623157E308;
this.lossless=true;
this.componentTransformation=null;
this.enableCT=true;
this.filters=null;
this.decompositionLevel=null;
this.guardBits=null;
this.quantizationStep=null;
this.quantizationType=null;
this.startLevelROI=-1;
this.alignROI=false;
this.ROIs=null;
this.codeBlockSize=null;
this.bypass=null;
this.resetMQ=null;
this.terminateOnByte=null;
this.causalCXInfo=null;
this.codeSegSymbol=null;
this.methodForMQTermination=null;
this.methodForMQLengthCalc=null;
this.precinctPartition=null;
this.progressionType=null;
this.progressionName=null;
this.layers="0.015 +20 2.0 +10";
this.EPH=null;
this.SOP=null;
}, 1);

C$.$fields$=[['Z',['packPacketHeaderInTile','packPacketHeaderInMain','lossless','enableCT','alignROI'],'D',['encodingRate'],'I',['packetPerTilePart','startLevelROI','numTiles','numComponents','minX','minY'],'S',['progressionName','layers'],'O',['componentTransformation','io.scif.jj2000.j2k.image.forwcomptransf.ForwCompTransfSpec','filters','io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterSpec','decompositionLevel','io.scif.jj2000.j2k.IntegerSpec','guardBits','io.scif.jj2000.j2k.quantization.GuardBitsSpec','quantizationStep','io.scif.jj2000.j2k.quantization.QuantStepSizeSpec','quantizationType','io.scif.jj2000.j2k.quantization.QuantTypeSpec','ROIs','io.scif.jj2000.j2k.roi.MaxShiftSpec','codeBlockSize','io.scif.jj2000.j2k.entropy.CBlkSizeSpec','bypass','io.scif.jj2000.j2k.StringSpec','+resetMQ','+terminateOnByte','+causalCXInfo','+codeSegSymbol','+methodForMQTermination','+methodForMQLengthCalc','precinctPartition','io.scif.jj2000.j2k.entropy.PrecinctSizeSpec','progressionType','io.scif.jj2000.j2k.entropy.ProgressionSpec','EPH','io.scif.jj2000.j2k.StringSpec','+SOP','imgsrc','java.awt.image.RenderedImage','raster','java.awt.image.Raster']]]

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage$java_util_Locale', function (imgsrc, locale) {
;C$.superclazz.c$$java_util_Locale.apply(this,[locale]);C$.$init$.apply(this);
p$1.setDefaults$java_awt_image_RenderedImage.apply(this, [imgsrc]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_IIOImage$javax_imageio_ImageWriteParam', function (image, param) {
;C$.superclazz.c$$java_util_Locale.apply(this,[param.getLocale$()]);C$.$init$.apply(this);
if (image != null ) {
if (image.hasRaster$()) p$1.setDefaults$java_awt_image_Raster.apply(this, [image.getRaster$()]);
 else p$1.setDefaults$java_awt_image_RenderedImage.apply(this, [image.getRenderedImage$()]);
}this.setSourceRegion$java_awt_Rectangle(param.getSourceRegion$());
this.setSourceBands$IA(param.getSourceBands$());
try {
this.setTiling$I$I$I$I(param.getTileWidth$(), param.getTileHeight$(), param.getTileGridXOffset$(), param.getTileGridYOffset$());
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalStateException")){
} else {
throw e;
}
}
this.setDestinationOffset$java_awt_Point(param.getDestinationOffset$());
this.setSourceSubsampling$I$I$I$I(param.getSourceXSubsampling$(), param.getSourceYSubsampling$(), param.getSubsamplingXOffset$(), param.getSubsamplingYOffset$());
this.setDestinationType$javax_imageio_ImageTypeSpecifier(param.getDestinationType$());
var j2kParam;
if (Clazz.instanceOf(param, "io.scif.media.imageio.plugins.jpeg2000.J2KImageWriteParam")) {
j2kParam=param;
} else {
j2kParam=Clazz.new_($I$(1,1));
}this.setDecompositionLevel$S("" + j2kParam.getNumDecompositionLevels$());
this.setEncodingRate$D(j2kParam.getEncodingRate$());
this.setLossless$Z(j2kParam.getLossless$());
this.setFilters$S(j2kParam.getFilter$());
this.setEPH$S("" + j2kParam.getEPH$());
this.setSOP$S("" + j2kParam.getSOP$());
this.setProgressionName$S(j2kParam.getProgressionType$());
var size=j2kParam.getCodeBlockSize$();
this.setCodeBlockSize$S("" + size[0] + " " + size[1] );
this.enableCT=j2kParam.getComponentTransformation$();
this.setComponentTransformation$S("" + this.enableCT);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
p$1.setSuperProperties.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage', function (imgsrc) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
p$1.setDefaults$java_awt_image_RenderedImage.apply(this, [imgsrc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_Raster', function (raster) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
p$1.setDefaults$java_awt_image_Raster.apply(this, [raster]);
}, 1);

Clazz.newMeth(C$, 'setSuperProperties', function () {
this.canOffsetTiles=true;
this.canWriteTiles=true;
this.canOffsetTiles=true;
this.canWriteProgressive=true;
this.tilingMode=2;
}, p$1);

Clazz.newMeth(C$, 'setDefaults$java_awt_image_Raster', function (raster) {
p$1.setSuperProperties.apply(this, []);
if (raster != null ) {
this.raster=raster;
this.tileGridXOffset=raster.getMinX$();
this.tileGridYOffset=raster.getMinY$();
this.tileWidth=raster.getWidth$();
this.tileHeight=raster.getHeight$();
this.tilingSet=true;
this.numTiles=1;
this.numComponents=raster.getSampleModel$().getNumBands$();
}p$1.setDefaults.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setDefaults$java_awt_image_RenderedImage', function (imgsrc) {
p$1.setSuperProperties.apply(this, []);
this.tilingMode=2;
if (imgsrc != null ) {
this.imgsrc=imgsrc;
this.tileGridXOffset=imgsrc.getTileGridXOffset$();
this.tileGridYOffset=imgsrc.getTileGridYOffset$();
this.tileWidth=imgsrc.getTileWidth$();
this.tileHeight=imgsrc.getTileHeight$();
this.tilingSet=true;
this.numTiles=imgsrc.getNumXTiles$() * imgsrc.getNumYTiles$();
this.numComponents=imgsrc.getSampleModel$().getNumBands$();
}p$1.setDefaults.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setDefaults', function () {
this.setROIs$S(null);
this.setQuantizationType$S(null);
this.setQuantizationStep$S(null);
this.setGuardBits$S(null);
this.setFilters$S(null);
this.setDecompositionLevel$S(null);
this.setComponentTransformation$S(null);
this.setMethodForMQLengthCalc$S(null);
this.setMethodForMQTermination$S(null);
this.setCodeSegSymbol$S(null);
this.setCausalCXInfo$S(null);
this.setTerminateOnByte$S(null);
this.setResetMQ$S(null);
this.setBypass$S(null);
this.setCodeBlockSize$S(null);
this.setPrecinctPartition$S(null);
this.setSOP$S(null);
this.setEPH$S(null);
}, p$1);

Clazz.newMeth(C$, 'setEncodingRate$D', function (rate) {
this.encodingRate=rate;
});

Clazz.newMeth(C$, 'getEncodingRate$', function () {
return this.encodingRate;
});

Clazz.newMeth(C$, 'setLossless$Z', function (lossless) {
this.lossless=lossless;
});

Clazz.newMeth(C$, 'getLossless$', function () {
return this.lossless;
});

Clazz.newMeth(C$, 'setPacketPerTilePart$I', function (packetPerTilePart) {
if (packetPerTilePart < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("J2KImageWriteParamJava0")]);
this.packetPerTilePart=packetPerTilePart;
if (packetPerTilePart > 0) {
this.setSOP$S("true");
this.setEPH$S("true");
}});

Clazz.newMeth(C$, 'getPacketPerTilePart$', function () {
return this.packetPerTilePart;
});

Clazz.newMeth(C$, 'setPackPacketHeaderInTile$Z', function (packPacketHeaderInTile) {
this.packPacketHeaderInTile=packPacketHeaderInTile;
if (packPacketHeaderInTile) {
this.setSOP$S("true");
this.setEPH$S("true");
}});

Clazz.newMeth(C$, 'getPackPacketHeaderInTile$', function () {
return this.packPacketHeaderInTile;
});

Clazz.newMeth(C$, 'setPackPacketHeaderInMain$Z', function (packPacketHeaderInMain) {
this.packPacketHeaderInMain=packPacketHeaderInMain;
if (packPacketHeaderInMain) {
this.setSOP$S("true");
this.setEPH$S("true");
}});

Clazz.newMeth(C$, 'getPackPacketHeaderInMain$', function () {
return this.packPacketHeaderInMain;
});

Clazz.newMeth(C$, 'setAlignROI$Z', function (align) {
this.alignROI=align;
});

Clazz.newMeth(C$, 'getAlignROI$', function () {
return this.alignROI;
});

Clazz.newMeth(C$, 'setROIs$S', function (values) {
this.ROIs=Clazz.new_($I$(3,1).c$$I$I$B$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), values]);
});

Clazz.newMeth(C$, 'getROIs$', function () {
return this.ROIs;
});

Clazz.newMeth(C$, 'setQuantizationType$S', function (values) {
this.quantizationType=Clazz.new_($I$(4,1).c$$I$I$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), this, values]);
});

Clazz.newMeth(C$, 'getQuantizationType$', function () {
return this.quantizationType;
});

Clazz.newMeth(C$, 'setQuantizationStep$S', function (values) {
this.quantizationStep=Clazz.new_($I$(5,1).c$$I$I$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), this, values]);
});

Clazz.newMeth(C$, 'getQuantizationStep$', function () {
return this.quantizationStep;
});

Clazz.newMeth(C$, 'setGuardBits$S', function (values) {
this.guardBits=Clazz.new_($I$(6,1).c$$I$I$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), this, values]);
});

Clazz.newMeth(C$, 'getGuardBits$', function () {
return this.guardBits;
});

Clazz.newMeth(C$, 'setFilters$S', function (values) {
if ("w9x7".equals$O(values)) this.setQuantizationType$S("expounded");
 else this.setQuantizationType$S("reversible");
this.filters=Clazz.new_($I$(7,1).c$$I$I$B$io_scif_jj2000_j2k_quantization_QuantTypeSpec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), this.quantizationType, this, values]);
this.setComponentTransformation$S("" + this.enableCT);
});

Clazz.newMeth(C$, 'getFilters$', function () {
return this.filters;
});

Clazz.newMeth(C$, 'setDecompositionLevel$S', function (values) {
this.decompositionLevel=Clazz.new_($I$(8,1).c$$I$I$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), this, values, "5"]);
this.setPrecinctPartition$S(null);
});

Clazz.newMeth(C$, 'getDecompositionLevel$', function () {
return this.decompositionLevel;
});

Clazz.newMeth(C$, 'setComponentTransformation$S', function (values) {
this.componentTransformation=Clazz.new_($I$(9,1).c$$I$I$B$io_scif_jj2000_j2k_wavelet_analysis_AnWTFilterSpec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 1, $b$[0]), this.filters, this, values]);
});

Clazz.newMeth(C$, 'getComponentTransformation$', function () {
return this.componentTransformation;
});

Clazz.newMeth(C$, 'setMethodForMQLengthCalc$S', function (values) {
var strLcs=Clazz.array(String, -1, ["near_opt", "lazy_good", "lazy"]);
this.methodForMQLengthCalc=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "near_opt", strLcs, this, values]);
});

Clazz.newMeth(C$, 'getMethodForMQLengthCalc$', function () {
return this.methodForMQLengthCalc;
});

Clazz.newMeth(C$, 'setMethodForMQTermination$S', function (values) {
var strTerm=Clazz.array(String, -1, ["near_opt", "easy", "predict", "full"]);
this.methodForMQTermination=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "near_opt", strTerm, this, values]);
});

Clazz.newMeth(C$, 'getMethodForMQTermination$', function () {
return this.methodForMQTermination;
});

Clazz.newMeth(C$, 'setCodeSegSymbol$S', function (values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
this.codeSegSymbol=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "false", strBoolean, this, values]);
});

Clazz.newMeth(C$, 'getCodeSegSymbol$', function () {
return this.codeSegSymbol;
});

Clazz.newMeth(C$, 'setCausalCXInfo$S', function (values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
this.causalCXInfo=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "false", strBoolean, this, values]);
});

Clazz.newMeth(C$, 'getCausalCXInfo$', function () {
return this.causalCXInfo;
});

Clazz.newMeth(C$, 'setTerminateOnByte$S', function (values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
this.terminateOnByte=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "false", strBoolean, this, values]);
});

Clazz.newMeth(C$, 'getTerminateOnByte$', function () {
return this.terminateOnByte;
});

Clazz.newMeth(C$, 'setResetMQ$S', function (values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
this.resetMQ=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "false", strBoolean, this, values]);
});

Clazz.newMeth(C$, 'getResetMQ$', function () {
return this.resetMQ;
});

Clazz.newMeth(C$, 'setBypass$S', function (values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
this.bypass=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "false", strBoolean, this, values]);
});

Clazz.newMeth(C$, 'getBypass$', function () {
return this.bypass;
});

Clazz.newMeth(C$, 'setCodeBlockSize$S', function (values) {
this.codeBlockSize=Clazz.new_($I$(11,1).c$$I$I$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), this, values]);
});

Clazz.newMeth(C$, 'getCodeBlockSize$', function () {
return this.codeBlockSize;
});

Clazz.newMeth(C$, 'setPrecinctPartition$S', function (values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
if (this.imgsrc != null ) this.precinctPartition=Clazz.new_($I$(12,1).c$$I$I$B$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_jj2000_j2k_IntegerSpec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), Clazz.new_($I$(13,1).c$$java_awt_image_RenderedImage$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriter,[this.imgsrc, this, null]), this.decompositionLevel, this, values]);
 else if (this.raster != null ) this.precinctPartition=Clazz.new_($I$(12,1).c$$I$I$B$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_jj2000_j2k_IntegerSpec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), Clazz.new_($I$(13,1).c$$java_awt_image_Raster$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriter,[this.raster, this, null]), this.decompositionLevel, this, values]);
});

Clazz.newMeth(C$, 'getPrecinctPartition$', function () {
return this.precinctPartition;
});

Clazz.newMeth(C$, 'setSOP$S', function (values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
this.SOP=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "false", strBoolean, this, values]);
});

Clazz.newMeth(C$, 'getSOP$', function () {
return this.SOP;
});

Clazz.newMeth(C$, 'setEPH$S', function (values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
this.EPH=Clazz.new_($I$(10,1).c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, ($b$[0] = 2, $b$[0]), "false", strBoolean, this, values]);
});

Clazz.newMeth(C$, 'getEPH$', function () {
return this.EPH;
});

Clazz.newMeth(C$, 'setProgressionName$S', function (values) {
this.progressionName=values;
});

Clazz.newMeth(C$, 'getProgressionName$', function () {
return this.progressionName;
});

Clazz.newMeth(C$, 'setProgressionType$io_scif_jj2000_j2k_entropy_encoder_LayersInfo$S', function (lyrs, values) {
var strBoolean=Clazz.array(String, -1, ["true", "false"]);
this.progressionType=Clazz.new_($I$(14,1).c$$I$I$I$io_scif_jj2000_j2k_IntegerSpec$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S,[this.numTiles, this.numComponents, lyrs.getTotNumLayers$(), this.decompositionLevel, ($b$[0] = 2, $b$[0]), this, values]);
});

Clazz.newMeth(C$, 'getProgressionType$', function () {
return this.progressionType;
});

Clazz.newMeth(C$, 'setStartLevelROI$I', function (value) {
this.startLevelROI=value;
});

Clazz.newMeth(C$, 'getStartLevelROI$', function () {
return this.startLevelROI;
});

Clazz.newMeth(C$, 'setLayers$S', function (value) {
this.layers=value;
});

Clazz.newMeth(C$, 'getLayers$', function () {
return this.layers;
});

Clazz.newMeth(C$, 'setMinX$I', function (minX) {
this.minX=minX;
});

Clazz.newMeth(C$, 'getMinX$', function () {
return this.minX;
});

Clazz.newMeth(C$, 'setMinY$I', function (minY) {
this.minY=minY;
});

Clazz.newMeth(C$, 'getMinY$', function () {
return this.minY;
});

Clazz.newMeth(C$, 'getNumTiles$', function () {
var sourceRegion=this.getSourceRegion$();
if (sourceRegion == null ) {
if (this.imgsrc != null ) sourceRegion=Clazz.new_($I$(15,1).c$$I$I$I$I,[this.imgsrc.getMinX$(), this.imgsrc.getMinY$(), this.imgsrc.getWidth$(), this.imgsrc.getHeight$()]);
 else sourceRegion=this.raster.getBounds$();
} else {
if (this.imgsrc != null ) sourceRegion=sourceRegion.intersection$java_awt_Rectangle(Clazz.new_($I$(15,1).c$$I$I$I$I,[this.imgsrc.getMinX$(), this.imgsrc.getMinY$(), this.imgsrc.getWidth$(), this.imgsrc.getHeight$()]));
 else sourceRegion=sourceRegion.intersection$java_awt_Rectangle(this.raster.getBounds$());
}var scaleX=this.getSourceXSubsampling$();
var scaleY=this.getSourceYSubsampling$();
var xOffset=this.getSubsamplingXOffset$();
var yOffset=this.getSubsamplingYOffset$();
var w=((sourceRegion.width - xOffset + scaleX - 1)/scaleX|0);
var h=((sourceRegion.height - yOffset + scaleY - 1)/scaleY|0);
this.minX=((sourceRegion.x + xOffset)/scaleX|0);
this.minY=((sourceRegion.y + yOffset)/scaleY|0);
this.numTiles=(((Math.floor((this.minX + w + this.tileWidth  - 1.0) / this.tileWidth) - Math.floor(this.minX / this.tileWidth)) * (Math.floor((this.minY + h + this.tileHeight  - 1.0) / this.tileHeight) - Math.floor(this.minY / this.tileHeight)))|0);
this.tileGridXOffset+=((this.minX - this.tileGridXOffset)/this.tileWidth|0) * this.tileWidth;
this.tileGridYOffset+=((this.minY - this.tileGridYOffset)/this.tileHeight|0) * this.tileHeight;
return this.numTiles;
});

Clazz.newMeth(C$, 'getNumComponents$', function () {
return this.numComponents;
});

Clazz.newMeth(C$, 'setSourceBands$IA', function (bands) {
C$.superclazz.prototype.setSourceBands$IA.apply(this, [bands]);
if (bands != null ) {
this.numComponents=bands.length;
p$1.setDefaults.apply(this, []);
}});

Clazz.newMeth(C$, 'setTiling$I$I$I$I', function (tw, th, xOff, yOff) {
C$.superclazz.prototype.setTiling$I$I$I$I.apply(this, [tw, th, xOff, yOff]);
this.getNumTiles$();
p$1.setDefaults.apply(this, []);
});

Clazz.newMeth(C$, 'setSourceSubsampling$I$I$I$I', function (sx, sy, xOff, yOff) {
C$.superclazz.prototype.setSourceSubsampling$I$I$I$I.apply(this, [sx, sy, xOff, yOff]);
this.getNumTiles$();
p$1.setDefaults.apply(this, []);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
