(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),p$1={},I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.I18N','java.awt.image.Raster','java.awt.Point','io.scif.media.imageioimpl.common.ImageUtil','java.awt.Rectangle','java.awt.image.BufferedImage','java.util.Hashtable','io.scif.media.imageioimpl.plugins.jpeg2000.IISRandomAccessIO','io.scif.jj2000.j2k.fileformat.reader.FileFormatReader','io.scif.jj2000.j2k.codestream.HeaderInfo','io.scif.jj2000.j2k.codestream.reader.HeaderDecoder','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReader','Boolean','io.scif.jj2000.j2k.codestream.reader.BitstreamReaderAgent','io.scif.jj2000.j2k.wavelet.synthesis.InverseWT','io.scif.jj2000.j2k.image.ImgDataConverter','io.scif.jj2000.j2k.image.invcomptransf.InvCompTransf','io.scif.jj2000.j2k.image.DataBlkInt','javax.imageio.ImageTypeSpecifier','java.awt.image.MultiPixelPackedSampleModel','java.awt.image.PixelInterleavedSampleModel','java.awt.color.ColorSpace','java.awt.image.ComponentColorModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KReadState");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iis=null;
this.decSpec=null;
this.j2krparam=null;
this.destinationBands=null;
this.sourceBands=null;
this.levelShift=null;
this.minValues=null;
this.maxValues=null;
this.fracBits=null;
this.dataBlocks=null;
this.bandOffsets=null;
this.maxDepth=0;
this.isSigned=false;
this.colorModel=null;
this.sampleModel=null;
this.nComp=0;
this.tileWidth=0;
this.tileHeight=0;
this.destinationRegion=null;
this.pixbuf=null;
this.bytebuf=null;
this.channelMap=null;
this.noTransform=true;
}, 1);

C$.$fields$=[['Z',['isSigned','noTransform'],'I',['maxDepth','nComp','tileWidth','tileHeight','scaleX','scaleY','xOffset','yOffset','tileXOffset','tileYOffset','width','height','resolution','stepX','stepY','tileStepX','tileStepY'],'O',['iis','javax.imageio.stream.ImageInputStream','ff','io.scif.jj2000.j2k.fileformat.reader.FileFormatReader','hi','io.scif.jj2000.j2k.codestream.HeaderInfo','hd','io.scif.jj2000.j2k.codestream.reader.HeaderDecoder','$in','io.scif.jj2000.j2k.io.RandomAccessIO','breader','io.scif.jj2000.j2k.codestream.reader.BitstreamReaderAgent','entdec','io.scif.jj2000.j2k.entropy.decoder.EntropyDecoder','roids','io.scif.jj2000.j2k.roi.ROIDeScaler','deq','io.scif.jj2000.j2k.quantization.dequantizer.Dequantizer','invWT','io.scif.jj2000.j2k.wavelet.synthesis.InverseWT','ictransf','io.scif.jj2000.j2k.image.invcomptransf.InvCompTransf','converter','io.scif.jj2000.j2k.image.ImgDataConverter','+converter2','decSpec','io.scif.jj2000.j2k.decoder.DecoderSpecs','j2krparam','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReadParamJava','destinationBands','int[]','+sourceBands','+levelShift','+minValues','+maxValues','+fracBits','dataBlocks','io.scif.jj2000.j2k.image.DataBlkInt[]','bandOffsets','int[]','colorModel','java.awt.image.ColorModel','sampleModel','java.awt.image.SampleModel','destinationRegion','java.awt.Rectangle','sourceOrigin','java.awt.Point','pixbuf','int[]','bytebuf','byte[]','channelMap','int[]','metadata','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadata','destImage','java.awt.image.BufferedImage','reader','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReader']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader', function (iis, param, metadata, reader) {
;C$.$init$.apply(this);
if (iis == null  || param == null   || metadata == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KReadState0")]);
this.iis=iis;
this.j2krparam=param;
this.metadata=metadata;
this.reader=reader;
p$1.initializeRead$I$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata.apply(this, [0, param, metadata]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader', function (iis, param, reader) {
;C$.$init$.apply(this);
if (iis == null  || param == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KReadState0")]);
this.iis=iis;
this.j2krparam=param;
this.reader=reader;
p$1.initializeRead$I$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata.apply(this, [0, param, null]);
}, 1);

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getHeader$', function () {
return this.hd;
});

Clazz.newMeth(C$, 'getTile$I$I$java_awt_image_WritableRaster', function (tileX, tileY, raster) {
var nT=this.ictransf.getNumTiles$java_awt_Point(null);
if (this.noTransform) {
if (tileX >= nT.x || tileY >= nT.y ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageReader0")]);
this.ictransf.setTile$I$I(tileX * this.tileStepX, tileY * this.tileStepY);
var tOffx;
var tOffy;
var cTileWidth;
var cTileHeight;
if (raster != null  && (this.resolution < this.hd.getDecoderSpecs$().dls.getMin$())  || this.stepX != 1  || this.stepY != 1 ) {
tOffx=raster.getMinX$();
tOffy=raster.getMinY$();
cTileWidth=Math.min(raster.getWidth$(), this.ictransf.getTileWidth$());
cTileHeight=Math.min(raster.getHeight$(), this.ictransf.getTileHeight$());
} else {
tOffx=this.ictransf.getCompULX$I(0) - ((this.ictransf.getImgULX$() + this.ictransf.getCompSubsX$I(0) - 1)/this.ictransf.getCompSubsX$I(0)|0) + this.destinationRegion.x;
tOffy=this.ictransf.getCompULY$I(0) - ((this.ictransf.getImgULY$() + this.ictransf.getCompSubsY$I(0) - 1)/this.ictransf.getCompSubsY$I(0)|0) + this.destinationRegion.y;
cTileWidth=this.ictransf.getTileWidth$();
cTileHeight=this.ictransf.getTileHeight$();
}if (raster == null ) raster=$I$(2).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel, Clazz.new_($I$(3,1).c$$I$I,[tOffx, tOffy]));
var numBands=this.sampleModel.getNumBands$();
if (tOffx + cTileWidth >= this.destinationRegion.width + this.destinationRegion.x) cTileWidth=this.destinationRegion.width + this.destinationRegion.x - tOffx;
if (tOffy + cTileHeight >= this.destinationRegion.height + this.destinationRegion.y) cTileHeight=this.destinationRegion.height + this.destinationRegion.y - tOffy;
if (this.pixbuf == null  || this.pixbuf.length < cTileWidth * numBands ) this.pixbuf=Clazz.array(Integer.TYPE, [cTileWidth * numBands]);
var prog=false;
for (var l=0; l < cTileHeight; l++) {
if (this.reader.getAbortRequest$()) break;
for (var i=0; i < numBands; i++) {
if (this.reader.getAbortRequest$()) break;
var db=this.dataBlocks[i];
db.ulx=0;
db.uly=l;
db.w=cTileWidth;
db.h=1;
this.ictransf.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(db, this.channelMap[this.sourceBands[i]]);
prog=prog || db.progressive ;
var data=db.data;
var k1=db.offset + cTileWidth - 1;
var fracBit=this.fracBits[i];
var lS=this.levelShift[i];
var min=this.minValues[i];
var max=this.maxValues[i];
if ($I$(4).isBinary$java_awt_image_SampleModel(this.sampleModel)) {
min=0;
max=1;
if (this.bytebuf == null  || this.bytebuf.length < cTileWidth * numBands ) this.bytebuf=Clazz.array(Byte.TYPE, [cTileWidth * numBands]);
for (var j=cTileWidth - 1; j >= 0; j--) {
var tmp=(data[k1--] >> fracBit) + lS;
this.bytebuf[j]=((((tmp < min) ? min : ((tmp > max) ? max : tmp))|0)|0);
}
$I$(4).setUnpackedBinaryData$BA$java_awt_image_WritableRaster$java_awt_Rectangle(this.bytebuf, raster, Clazz.new_($I$(5,1).c$$I$I$I$I,[tOffx, tOffy + l, cTileWidth, 1]));
} else {
for (var j=cTileWidth - 1; j >= 0; j--) {
var tmp=(data[k1--] >> fracBit) + lS;
this.pixbuf[j]=(tmp < min) ? min : ((tmp > max) ? max : tmp);
}
raster.setSamples$I$I$I$I$I$IA(tOffx, tOffy + l, cTileWidth, 1, this.destinationBands[i], this.pixbuf);
}}
}
} else {
p$1.readSubsampledRaster$java_awt_image_WritableRaster.apply(this, [raster]);
}return raster;
});

Clazz.newMeth(C$, 'getDestinationRegion$', function () {
return this.destinationRegion;
});

Clazz.newMeth(C$, 'readBufferedImage$', function () {
this.colorModel=this.getColorModel$();
this.sampleModel=this.getSampleModel$();
var raster=null;
var image=this.j2krparam.getDestination$();
var x=this.destinationRegion.x;
var y=this.destinationRegion.y;
this.destinationRegion.setLocation$java_awt_Point(this.j2krparam.getDestinationOffset$());
if (image == null ) {
var type=this.j2krparam.getDestinationType$();
if (type != null ) this.colorModel=type.getColorModel$();
raster=$I$(2).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel.createCompatibleSampleModel$I$I(this.destinationRegion.x + this.destinationRegion.width, this.destinationRegion.y + this.destinationRegion.height), Clazz.new_($I$(3,1).c$$I$I,[0, 0]));
image=Clazz.new_($I$(6,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, raster, this.colorModel.isAlphaPremultiplied$(), Clazz.new_($I$(7,1))]);
} else raster=image.getWritableTile$I$I(0, 0);
this.destImage=image;
p$1.readSubsampledRaster$java_awt_image_WritableRaster.apply(this, [raster]);
this.destinationRegion.setLocation$I$I(x, y);
this.destImage=null;
return image;
});

Clazz.newMeth(C$, 'readAsRaster$', function () {
var image=this.j2krparam.getDestination$();
var raster=null;
if (image == null ) {
this.sampleModel=this.getSampleModel$();
raster=$I$(2).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel.createCompatibleSampleModel$I$I(this.destinationRegion.x + this.destinationRegion.width, this.destinationRegion.y + this.destinationRegion.height), Clazz.new_($I$(3,1).c$$I$I,[0, 0]));
} else raster=image.getWritableTile$I$I(0, 0);
p$1.readSubsampledRaster$java_awt_image_WritableRaster.apply(this, [raster]);
return raster;
});

Clazz.newMeth(C$, 'initializeRead$I$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata', function (imageIndex, param, metadata) {
try {
this.iis.mark$();
this.$in=Clazz.new_($I$(8,1).c$$javax_imageio_stream_ImageInputStream,[this.iis]);
this.ff=Clazz.new_($I$(9,1).c$$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata,[this.$in, metadata]);
this.ff.readFileFormat$();
this.$in.seek$I(this.ff.getFirstCodeStreamPos$());
this.hi=Clazz.new_($I$(10,1));
try {
this.hd=Clazz.new_($I$(11,1).c$$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_jj2000_j2k_codestream_HeaderInfo,[this.$in, this.j2krparam, this.hi]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.EOFException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("J2KReadState2")]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[ioe]);
}
} else {
throw e$$;
}
}
this.width=this.hd.getImgWidth$();
this.height=this.hd.getImgHeight$();
var sourceRegion=param.getSourceRegion$();
this.sourceOrigin=Clazz.new_($I$(3,1));
sourceRegion=Clazz.new_($I$(5,1).c$$I$I$I$I,[this.hd.getImgULX$(), this.hd.getImgULY$(), this.width, this.height]);
var compConsistent=true;
this.stepX=this.hd.getCompSubsX$I(0);
this.stepY=this.hd.getCompSubsY$I(0);
for (var i=1; i < this.nComp; i++) {
if (this.stepX != this.hd.getCompSubsX$I(i) || this.stepY != this.hd.getCompSubsY$I(i) ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("J2KReadState12")]);
}
var minResLevels=this.hd.getDecoderSpecs$().dls.getMin$();
this.resolution=param != null  ? param.getResolution$() : minResLevels;
if (this.resolution < 0 || this.resolution > minResLevels ) {
this.resolution=minResLevels;
}if (this.resolution != minResLevels || this.stepX != 1  || this.stepY != 1 ) {
sourceRegion=$I$(12).getReducedRect$java_awt_Rectangle$I$I$I$I(sourceRegion, minResLevels, this.resolution, this.stepX, this.stepY);
}this.destinationRegion=sourceRegion.clone$();
$I$(12).computeRegionsWrapper$javax_imageio_ImageReadParam$Z$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, false, this.width, this.height, param.getDestination$(), sourceRegion, this.destinationRegion);
this.sourceOrigin=Clazz.new_($I$(3,1).c$$I$I,[sourceRegion.x, sourceRegion.y]);
this.scaleX=param.getSourceXSubsampling$();
this.scaleY=param.getSourceYSubsampling$();
this.xOffset=param.getSubsamplingXOffset$();
this.yOffset=param.getSubsamplingYOffset$();
this.width=this.destinationRegion.width;
this.height=this.destinationRegion.height;
var tileOffset=this.hd.getTilingOrigin$java_awt_Point(null);
this.tileWidth=this.hd.getNomTileWidth$();
this.tileHeight=this.hd.getNomTileHeight$();
if (this.resolution != minResLevels || this.stepX != 1  || this.stepY != 1 ) {
var tileRect=Clazz.new_($I$(5,1).c$$java_awt_Point,[tileOffset]);
tileRect.width=this.tileWidth;
tileRect.height=this.tileHeight;
tileRect=$I$(12).getReducedRect$java_awt_Rectangle$I$I$I$I(tileRect, minResLevels, this.resolution, this.stepX, this.stepY);
tileOffset=tileRect.getLocation$();
this.tileWidth=tileRect.width;
this.tileHeight=tileRect.height;
}this.tileXOffset=tileOffset.x;
this.tileYOffset=tileOffset.y;
if (this.tileWidth * (1 << (minResLevels - this.resolution)) * this.stepX  > this.hd.getNomTileWidth$()) {
this.tileStepX=((this.tileWidth * (1 << (minResLevels - this.resolution)) * this.stepX  + this.hd.getNomTileWidth$() - 1)/this.hd.getNomTileWidth$()|0);
} else {
this.tileStepX=1;
}if (this.tileHeight * (1 << (minResLevels - this.resolution)) * this.stepY  > this.hd.getNomTileHeight$()) {
this.tileStepY=((this.tileHeight * (1 << (minResLevels - this.resolution)) * this.stepY  + this.hd.getNomTileHeight$() - 1)/this.hd.getNomTileHeight$()|0);
} else {
this.tileStepY=1;
}if (!this.destinationRegion.equals$O(sourceRegion)) this.noTransform=false;
this.decSpec=this.hd.getDecoderSpecs$();
this.nComp=this.hd.getNumComps$();
var depth=Clazz.array(Integer.TYPE, [this.nComp]);
for (var i=0; i < this.nComp; i++) depth[i]=this.hd.getOriginalBitDepth$I(i);

var cdb=null;
if (metadata != null ) cdb=metadata.getElement$S("JPEG2000ChannelDefinitionBox");
this.channelMap=Clazz.array(Integer.TYPE, [this.nComp]);
if (cdb != null  && metadata.getElement$S("JPEG2000PaletteBox") == null  ) {
var assoc=cdb.getAssociation$();
var types=cdb.getTypes$();
var channels=cdb.getChannel$();
for (var i=0; i < types.length; i++) if (types[i] == 0) this.channelMap[channels[i]]=assoc[i] - 1;
 else if (types[i] == 1 || types[i] == 2 ) this.channelMap[channels[i]]=channels[i];

} else {
for (var i=0; i < this.nComp; i++) this.channelMap[i]=i;

}try {
var logJJ2000Messages=$I$(13).getBoolean$S("io.scif.jj2000.j2k.decoder.log");
this.breader=$I$(14).createInstance$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_jj2000_j2k_codestream_reader_HeaderDecoder$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_jj2000_j2k_decoder_DecoderSpecs$Z$io_scif_jj2000_j2k_codestream_HeaderInfo(this.$in, this.hd, this.j2krparam, this.decSpec, logJJ2000Messages, this.hi);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("J2KReadState3") + " " + ((e.getMessage$() != null ) ? (":\n" + e.getMessage$()) : "") ]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("J2KReadState4") + " " + ((e.getMessage$() != null ) ? (":\n" + e.getMessage$()) : "") ]);
}
} else {
throw e$$;
}
}
try {
this.entdec=this.hd.createEntropyDecoder$io_scif_jj2000_j2k_entropy_decoder_CodedCBlkDataSrcDec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava(this.breader, this.j2krparam);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("J2KReadState5") + " " + ((e.getMessage$() != null ) ? (":\n" + e.getMessage$()) : "") ]);
} else {
throw e;
}
}
try {
this.roids=this.hd.createROIDeScaler$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_jj2000_j2k_decoder_DecoderSpecs(this.entdec, this.j2krparam, this.decSpec);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("J2KReadState6") + " " + ((e.getMessage$() != null ) ? (":\n" + e.getMessage$()) : "") ]);
} else {
throw e;
}
}
try {
this.deq=this.hd.createDequantizer$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$IA$io_scif_jj2000_j2k_decoder_DecoderSpecs(this.roids, depth, this.decSpec);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("J2KReadState7") + " " + ((e.getMessage$() != null ) ? (":\n" + e.getMessage$()) : "") ]);
} else {
throw e;
}
}
try {
this.invWT=$I$(15).createInstance$io_scif_jj2000_j2k_wavelet_synthesis_CBlkWTDataSrcDec$io_scif_jj2000_j2k_decoder_DecoderSpecs(this.deq, this.decSpec);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("J2KReadState8") + " " + ((e.getMessage$() != null ) ? (":\n" + e.getMessage$()) : "") ]);
} else {
throw e;
}
}
var res=this.breader.getImgRes$();
var mrl=this.decSpec.dls.getMin$();
this.invWT.setImgResLevel$I(res);
this.converter=Clazz.new_($I$(16,1).c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$I,[this.invWT, 0]);
this.ictransf=Clazz.new_($I$(17,1).c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_jj2000_j2k_decoder_DecoderSpecs$IA,[this.converter, this.decSpec, depth]);
this.sourceBands=this.j2krparam.getSourceBands$();
if (this.sourceBands == null ) {
this.sourceBands=Clazz.array(Integer.TYPE, [this.nComp]);
for (var i=0; i < this.nComp; i++) this.sourceBands[i]=i;

}this.nComp=this.sourceBands.length;
this.destinationBands=this.j2krparam.getDestinationBands$();
if (this.destinationBands == null ) {
this.destinationBands=Clazz.array(Integer.TYPE, [this.nComp]);
for (var i=0; i < this.nComp; i++) this.destinationBands[i]=i;

}$I$(12).checkReadParamBandSettingsWrapper$javax_imageio_ImageReadParam$I$I(param, this.hd.getNumComps$(), this.destinationBands.length);
this.levelShift=Clazz.array(Integer.TYPE, [this.nComp]);
this.minValues=Clazz.array(Integer.TYPE, [this.nComp]);
this.maxValues=Clazz.array(Integer.TYPE, [this.nComp]);
this.fracBits=Clazz.array(Integer.TYPE, [this.nComp]);
this.dataBlocks=Clazz.array($I$(18), [this.nComp]);
depth=Clazz.array(Integer.TYPE, [this.nComp]);
this.bandOffsets=Clazz.array(Integer.TYPE, [this.nComp]);
this.maxDepth=0;
this.isSigned=false;
for (var i=0; i < this.nComp; i++) {
depth[i]=this.hd.getOriginalBitDepth$I(this.sourceBands[i]);
if (depth[i] > this.maxDepth) this.maxDepth=depth[i];
this.dataBlocks[i]=Clazz.new_($I$(18,1));
this.bandOffsets[i]=i;
if (this.hd.isOriginalSigned$I(this.sourceBands[i])) this.isSigned=true;
 else {
this.levelShift[i]=1 << (this.ictransf.getNomRangeBits$I(this.sourceBands[i]) - 1);
}var nomRangeBits=this.ictransf.getNomRangeBits$I(this.sourceBands[i]);
this.maxValues[i]=(1 << (this.isSigned == true  ? (nomRangeBits - 1) : nomRangeBits)) - 1;
this.minValues[i]=this.isSigned ? -(this.maxValues[i] + 1) : 0;
this.fracBits[i]=this.ictransf.getFixedPoint$I(this.sourceBands[i]);
}
this.iis.reset$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[e.getMessage$(), e]);
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
if (e.getMessage$() != null ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[e.getMessage$(), e]);
 else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[$I$(1).getString$S("J2KReadState9"), e]);
}}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var e = e$$;
{
if (e.getMessage$() != null ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[$I$(1).getString$S("J2KReadState10") + " " + e.getMessage$() , e]);
 else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[$I$(1).getString$S("J2KReadState10"), e]);
}}
} else {
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[$I$(1).getString$S("J2KReadState10"), e]);
}
}
}
}, p$1);

Clazz.newMeth(C$, 'readSubsampledRaster$java_awt_image_WritableRaster', function (raster) {
if (raster == null ) raster=$I$(2).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel.createCompatibleSampleModel$I$I(this.destinationRegion.x + this.destinationRegion.width, this.destinationRegion.y + this.destinationRegion.height), Clazz.new_($I$(3,1).c$$I$I,[this.destinationRegion.x, this.destinationRegion.y]));
var pixbuf=null;
var prog=false;
var nT=this.ictransf.getNumTiles$java_awt_Point(null);
var numBands=this.sourceBands.length;
var destRect=raster.getBounds$().intersection$java_awt_Rectangle(this.destinationRegion);
var offx=this.destinationRegion.x;
var offy=this.destinationRegion.y;
var sourceSX=(destRect.x - offx) * this.scaleX + this.sourceOrigin.x;
var sourceSY=(destRect.y - offy) * this.scaleY + this.sourceOrigin.y;
var sourceEX=(destRect.width - 1) * this.scaleX + sourceSX;
var sourceEY=(destRect.height - 1) * this.scaleY + sourceSY;
var startXTile=((sourceSX - this.tileXOffset)/this.tileWidth|0);
var startYTile=((sourceSY - this.tileYOffset)/this.tileHeight|0);
var endXTile=((sourceEX - this.tileXOffset)/this.tileWidth|0);
var endYTile=((sourceEY - this.tileYOffset)/this.tileHeight|0);
startXTile=p$1.clip$I$I$I.apply(this, [startXTile, 0, nT.x - 1]);
startYTile=p$1.clip$I$I$I.apply(this, [startYTile, 0, nT.y - 1]);
endXTile=p$1.clip$I$I$I.apply(this, [endXTile, 0, nT.x - 1]);
endYTile=p$1.clip$I$I$I.apply(this, [endYTile, 0, nT.y - 1]);
var totalXTiles=endXTile - startXTile + 1;
var totalYTiles=endYTile - startYTile + 1;
var totalTiles=totalXTiles * totalYTiles;
for (var y=startYTile; y <= endYTile; y++) {
if (this.reader.getAbortRequest$()) break;
for (var x=startXTile; x <= endXTile; x++) {
if (this.reader.getAbortRequest$()) break;
var initialFraction=((x - startXTile + (y - startYTile) * totalXTiles)/totalTiles|0);
this.ictransf.setTile$I$I(x * this.tileStepX, y * this.tileStepY);
var sx=this.hd.getCompSubsX$I(0);
var cTileWidth=((this.ictransf.getTileWidth$() + sx - 1)/sx|0);
var sy=this.hd.getCompSubsY$I(0);
var cTileHeight=((this.ictransf.getTileHeight$() + sy - 1)/sy|0);
var tx=0;
var ty=0;
var startX=this.tileXOffset + x * this.tileWidth;
var startY=this.tileYOffset + y * this.tileHeight;
if (sourceSX > startX) {
if (startX >= this.hd.getImgULX$()) {
tx=sourceSX - startX;
cTileWidth-=tx;
}startX=sourceSX;
}if (sourceSY > startY) {
if (startY >= this.hd.getImgULY$()) {
ty=sourceSY - startY;
cTileHeight-=ty;
}startY=sourceSY;
}if (sourceEX < startX + cTileWidth - 1) {
cTileWidth+=sourceEX - startX - cTileWidth  + 1;
}if (sourceEY < startY + cTileHeight - 1) {
cTileHeight+=sourceEY - startY - cTileHeight  + 1;
}var x1=((startX + this.scaleX - 1 - this.sourceOrigin.x)/this.scaleX|0);
var x2=((startX + this.scaleX - 1 + cTileWidth - this.sourceOrigin.x)/this.scaleX|0);
var lineLength=x2 - x1;
if (pixbuf == null  || pixbuf.length < lineLength ) pixbuf=Clazz.array(Integer.TYPE, [lineLength]);
x2=(x2 - 1) * this.scaleX + this.sourceOrigin.x - startX;
var y1=((startY + this.scaleY - 1 - this.sourceOrigin.y)/this.scaleY|0);
x1+=offx;
y1+=offy;
var ycbcr=false;
for (var i=0; i < numBands; i++) {
var db=this.dataBlocks[i];
db.ulx=tx;
db.uly=ty + cTileHeight - 1;
db.w=cTileWidth;
db.h=1;
try {
this.ictransf.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(db, this.channelMap[this.sourceBands[i]]);
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
ycbcr=true;
break;
} else {
throw e;
}
}
}
for (var l=ty, m=y1; l < ty + cTileHeight; l+=this.scaleY, m++) {
if (this.reader.getAbortRequest$()) break;
if (ycbcr) {
var lum=this.dataBlocks[0];
var cb=this.dataBlocks[1];
var cr=this.dataBlocks[2];
lum.ulx=tx;
lum.uly=l;
lum.w=cTileWidth;
lum.h=1;
this.ictransf.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(lum, this.channelMap[this.sourceBands[0]]);
prog=prog || lum.progressive ;
cb.ulx=tx;
cb.uly=l;
cb.w=(cTileWidth/2|0);
cb.h=1;
this.ictransf.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(cb, this.channelMap[this.sourceBands[1]]);
prog=prog || cb.progressive ;
cr.ulx=tx;
cr.uly=l;
cr.w=(cTileWidth/2|0);
cr.h=1;
this.ictransf.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(cr, this.channelMap[this.sourceBands[2]]);
prog=prog || cr.progressive ;
var lumdata=lum.data;
var cbdata=cb.data;
var crdata=cr.data;
var k1=lum.offset + x2;
var fracBit=this.fracBits[0];
var lS=this.levelShift[0];
var min=this.minValues[0];
var max=this.maxValues[0];
var pix=Clazz.array(Integer.TYPE, [3, lineLength]);
for (var j=lineLength - 1; j >= 0; j--, k1-=this.scaleX) {
var red=(lumdata[k1] >> fracBit) + lS;
red=(red < min) ? min : ((red > max) ? max : red);
var cIndex=(k1/2|0);
var chrom1=cbdata[cIndex];
var chrom2=crdata[cIndex];
var lumval=red;
red=((chrom2 * 1.542 + lumval)|0);
var blue=((lumval + 1.772 * chrom1 - 0.886)|0);
var green=((lumval - 0.34413 * chrom1 - 0.71414 * chrom2 - 0.1228785)|0);
if (red > 255) red=255;
if (green > 255) green=255;
if (blue > 255) blue=255;
if (red < 0) red=0;
if (green < 0) green=0;
if (blue < 0) blue=0;
pix[0][j]=red;
pix[1][j]=green;
pix[2][j]=blue;
}
raster.setSamples$I$I$I$I$I$IA(x1, m, lineLength, 1, this.destinationBands[0], pix[0]);
raster.setSamples$I$I$I$I$I$IA(x1, m, lineLength, 1, this.destinationBands[1], pix[1]);
raster.setSamples$I$I$I$I$I$IA(x1, m, lineLength, 1, this.destinationBands[2], pix[2]);
continue;
}for (var i=0; i < numBands; i++) {
var db=this.dataBlocks[i];
db.ulx=tx;
db.uly=l;
db.w=ycbcr && i > 0  ? (cTileWidth/2|0) : cTileWidth;
db.h=1;
this.ictransf.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(db, this.channelMap[this.sourceBands[i]]);
prog=prog || db.progressive ;
var data=db.data;
var k1=db.offset + x2;
var fracBit=this.fracBits[i];
var lS=this.levelShift[i];
var min=this.minValues[i];
var max=this.maxValues[i];
if ($I$(4).isBinary$java_awt_image_SampleModel(this.sampleModel)) {
min=0;
max=1;
if (this.bytebuf == null  || this.bytebuf.length < cTileWidth * numBands ) this.bytebuf=Clazz.array(Byte.TYPE, [cTileWidth * numBands]);
for (var j=lineLength - 1; j >= 0; j--, k1-=this.scaleX) {
var tmp=(data[k1] >> fracBit) + lS;
this.bytebuf[j]=((((tmp < min) ? min : ((tmp > max) ? max : tmp))|0)|0);
}
$I$(4).setUnpackedBinaryData$BA$java_awt_image_WritableRaster$java_awt_Rectangle(this.bytebuf, raster, Clazz.new_($I$(5,1).c$$I$I$I$I,[x1, m, lineLength, 1]));
} else {
for (var j=lineLength - 1; j >= 0; j--, k1-=this.scaleX) {
var tmp=(data[k1] >> fracBit) + lS;
pixbuf[j]=(tmp < min) ? min : ((tmp > max) ? max : tmp);
}
raster.setSamples$I$I$I$I$I$IA(x1, m, lineLength, 1, this.destinationBands[i], pixbuf);
}}
if (this.destImage != null ) this.reader.processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.destImage, x1, m, cTileWidth, 1, 1, 1, this.destinationBands);
var fraction=initialFraction + (l - ty + 1.0) / cTileHeight / totalTiles ;
this.reader.processImageProgressWrapper$F(100.0 * fraction);
}
}
}
return raster;
}, p$1);

Clazz.newMeth(C$, 'getImageType$', function () {
this.getSampleModel$();
this.getColorModel$();
return Clazz.new_($I$(19,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[this.colorModel, this.sampleModel]);
});

Clazz.newMeth(C$, 'getSampleModel$', function () {
if (this.sampleModel != null ) return this.sampleModel;
var realWidth=Math.min(this.tileWidth, this.width);
var realHeight=Math.min(this.tileHeight, this.height);
if (this.nComp == 1 && (this.maxDepth == 1 || this.maxDepth == 2  || this.maxDepth == 4 ) ) this.sampleModel=Clazz.new_($I$(20,1).c$$I$I$I$I,[0, realWidth, realHeight, this.maxDepth]);
 else if (this.maxDepth <= 8) this.sampleModel=Clazz.new_($I$(21,1).c$$I$I$I$I$I$IA,[0, realWidth, realHeight, this.nComp, realWidth * this.nComp, this.bandOffsets]);
 else if (this.maxDepth <= 16) this.sampleModel=Clazz.new_($I$(21,1).c$$I$I$I$I$I$IA,[this.isSigned ? 2 : 1, realWidth, realHeight, this.nComp, realWidth * this.nComp, this.bandOffsets]);
 else if (this.maxDepth <= 32) this.sampleModel=Clazz.new_($I$(21,1).c$$I$I$I$I$I$IA,[3, realWidth, realHeight, this.nComp, realWidth * this.nComp, this.bandOffsets]);
 else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KReadState11") + " " + +this.maxDepth ]);
return this.sampleModel;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
if (this.colorModel != null ) return this.colorModel;
this.colorModel=this.ff.getColorModel$();
if (this.colorModel != null ) return this.colorModel;
if (this.hi.siz.csiz <= 4) {
var cs;
if (this.hi.siz.csiz > 2) {
cs=$I$(22).getInstance$I(1000);
} else {
cs=$I$(22).getInstance$I(1003);
}var bitsPerComponent=Clazz.array(Integer.TYPE, [this.hi.siz.csiz]);
var isSigned=false;
var maxBitDepth=-1;
for (var i=0; i < this.hi.siz.csiz; i++) {
bitsPerComponent[i]=this.hi.siz.getOrigBitDepth$I(i);
if (maxBitDepth < bitsPerComponent[i]) {
maxBitDepth=bitsPerComponent[i];
}isSigned|=this.hi.siz.isOrigSigned$I(i);
}
var hasAlpha=this.hi.siz.csiz % 2 == 0;
var type=-1;
if (maxBitDepth <= 8) {
type=0;
} else if (maxBitDepth <= 16) {
type=isSigned ? 2 : 1;
} else if (maxBitDepth <= 32) {
type=3;
}if (type != -1) {
if (this.hi.siz.csiz == 1 && (maxBitDepth == 1 || maxBitDepth == 2  || maxBitDepth == 4 ) ) {
this.colorModel=$I$(4).createColorModel$java_awt_image_SampleModel(this.getSampleModel$());
} else {
this.colorModel=Clazz.new_($I$(23,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, bitsPerComponent, hasAlpha, false, hasAlpha ? 3 : 1, type]);
}return this.colorModel;
}}if (this.sampleModel == null ) {
this.sampleModel=this.getSampleModel$();
}if (this.sampleModel == null ) return null;
return $I$(4).createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel(null, this.sampleModel);
});

Clazz.newMeth(C$, 'getTile0Rect$', function () {
return Clazz.new_($I$(5,1).c$$I$I$I$I,[this.tileXOffset, this.tileYOffset, this.tileWidth, this.tileHeight]);
});

Clazz.newMeth(C$, 'clip$I$I$I', function (value, min, max) {
if (value < min) value=min;
if (value > max) value=max;
return value;
}, p$1);

Clazz.newMeth(C$, 'clipDestination$java_awt_Rectangle', function (dest) {
var offset=this.j2krparam.getDestinationOffset$();
if (dest.x < offset.x) {
dest.width+=dest.x - offset.x;
dest.x=offset.x;
}if (dest.y < offset.y) {
dest.height+=dest.y - offset.y;
dest.y=offset.y;
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
