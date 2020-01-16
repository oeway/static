(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'io.scif.util.SCIFIOMetadataTools','net.imagej.axis.Axes','io.scif.util.FormatTools','net.imglib2.FinalInterval','io.scif.config.SCIFIOConfig','org.scijava.util.ArrayUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractWriter", null, 'io.scif.AbstractHasSource', 'io.scif.TypedWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['sequential'],'I',['fps','validBits'],'S',['compression'],'O',['metadata','<M extends io.scif.TypedMetadata>','compressionTypes','String[]','options','io.scif.codec.CodecOptions','initialized','boolean[][]','out','org.scijava.io.handle.DataHandle','model','java.awt.image.ColorModel','handles','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'checkParams$I$J$BA$net_imglib2_Interval', function (imageIndex, planeIndex, buf, bounds) {
$I$(1).verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_handle_DataHandle$I(this.metadata, this.out, imageIndex);
if (buf == null ) throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Buffer cannot be null."]);
var planes=this.metadata.get$I(imageIndex).getPlaneCount$();
if (this.metadata.get$I(imageIndex).isMultichannel$()) planes*=this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL);
if (planeIndex < 0) throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,[String.format$S$OA("Plane index:%d must be >= 0", [new Long(planeIndex)])]);
if (planeIndex >= planes) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,[String.format$S$OA("Plane index:%d must be < %d", [new Long(planeIndex), new Long(planes)])]);
}$I$(3).checkPlaneForWriting$io_scif_Metadata$I$J$I$net_imglib2_Interval(this.getMetadata$(), imageIndex, planeIndex, buf.length, bounds);
$I$(3).assertId$O$Z$I(this.out, true, 0);
});

Clazz.newMeth(C$, 'initialize$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
this.initialized[imageIndex][(planeIndex|0)]=true;
});

Clazz.newMeth(C$, 'savePlane$I$J$io_scif_Plane', function (imageIndex, planeIndex, plane) {
var bounds=Clazz.new_($I$(4,1).c$$JA,[this.metadata.get$I(imageIndex).getAxesLengthsPlanar$()]);
this.savePlane$I$J$io_scif_Plane$net_imglib2_Interval(imageIndex, planeIndex, plane, bounds);
});

Clazz.newMeth(C$, 'savePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
this.initialize$I$J$net_imglib2_Interval(imageIndex, planeIndex, bounds);
this.writePlane$I$J$io_scif_Plane$net_imglib2_Interval(imageIndex, planeIndex, plane, bounds);
});

Clazz.newMeth(C$, 'canDoStacks$', function () {
return false;
});

Clazz.newMeth(C$, ['setMetadata$io_scif_Metadata','setMetadatanull'], function (meta) {
this.setMetadata$TM($I$(1).castMeta$io_scif_Metadata(meta));
});

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.metadata;
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_location_Location', function (fileName) {
this.setDest$org_scijava_io_location_Location$I(fileName, 0);
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle', function (out) {
this.setDest$org_scijava_io_handle_DataHandle$I(out, 0);
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_location_Location$I', function (loc, imageIndex) {
this.setDest$org_scijava_io_location_Location$I$io_scif_config_SCIFIOConfig(loc, imageIndex, Clazz.new_($I$(5,1)));
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle$I', function (out, imageIndex) {
this.setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig(out, imageIndex, Clazz.new_($I$(5,1)));
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (loc, config) {
this.setDest$org_scijava_io_location_Location$I$io_scif_config_SCIFIOConfig(loc, 0, config);
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig', function (out, config) {
this.setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig(out, 0, config);
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_location_Location$I$io_scif_config_SCIFIOConfig', function (loc, imageIndex, config) {
var handle=this.handles.create$TD(loc);
p$1.setDestinationMeta$I$io_scif_config_SCIFIOConfig.apply(this, [imageIndex, config]);
if (handle != null ) {
this.out=handle;
this.setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig(this.out, imageIndex, config);
} else {
this.getMetadata$().setDestinationLocation$org_scijava_io_location_Location(loc);
$I$(1).verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_location_Location(this.metadata, loc);
}});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig', function (out, imageIndex, config) {
p$1.setDestinationMeta$I$io_scif_config_SCIFIOConfig.apply(this, [imageIndex, config]);
this.getMetadata$().setDatasetName$S(out.get$().getName$());
this.out=out;
$I$(1).verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_handle_DataHandle(this.metadata, out);
});

Clazz.newMeth(C$, 'setDestinationMeta$I$io_scif_config_SCIFIOConfig', function (imageIndex, config) {
if (this.metadata == null ) throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Can not set Destination without setting Metadata first."]);
this.fps=config.writerGetFramesPerSecond$();
this.options=config.writerGetCodecOptions$();
this.model=config.writerGetColorModel$();
this.compression=config.writerGetCompression$();
this.sequential=config.writerIsSequential$();
this.initialized=Clazz.array(Boolean.TYPE, [this.metadata.getImageCount$(), null]);
for (var i=0; i < this.metadata.getImageCount$(); i++) {
this.initialized[i]=Clazz.array(Boolean.TYPE, [(this.metadata.get$I(imageIndex).getPlaneCount$()|0)]);
}
}, p$1);

Clazz.newMeth(C$, 'getHandle$', function () {
return this.out;
});

Clazz.newMeth(C$, 'setColorModel$java_awt_image_ColorModel', function (cm) {
this.model=cm;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return this.model;
});

Clazz.newMeth(C$, 'getCompressionTypes$', function () {
if (this.compressionTypes == null ) {
this.compressionTypes=this.makeCompressionTypes$();
}return this.compressionTypes;
});

Clazz.newMeth(C$, 'getFramesPerSecond$', function () {
return this.fps;
});

Clazz.newMeth(C$, 'getCodecOptions$', function () {
return this.options;
});

Clazz.newMeth(C$, 'writeSequential$', function () {
return this.sequential;
});

Clazz.newMeth(C$, 'getValidBits$', function () {
return this.validBits;
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6]);
});

Clazz.newMeth(C$, 'isSupportedType$I$S', function (type, codec) {
var types=this.getPixelTypes$S(codec);
for (var otherType, $otherType = 0, $$otherType = types; $otherType<$$otherType.length&&((otherType=($$otherType[$otherType])),1);$otherType++) {
if (type == otherType) return true;
}
return false;
});

Clazz.newMeth(C$, 'isSupportedCompression$S', function (compression) {
for (var compressionType, $compressionType = 0, $$compressionType = this.compressionTypes; $compressionType<$$compressionType.length&&((compressionType=($$compressionType[$compressionType])),1);$compressionType++) {
if (compressionType.equals$O(compression)) {
this.compression=compression;
return;
}}
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid compression type: " + compression]);
});

Clazz.newMeth(C$, ['setMetadata$TM'], function (meta) {
if (this.metadata != null  && this.metadata !== meta  ) {
try {
this.metadata.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
}if (this.out != null ) {
try {
this.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
}this.metadata=meta;
for (var i=0; i < this.metadata.getImageCount$(); i++) {
var pixelType=this.metadata.get$I(i).getPixelType$();
if (!$I$(6).contains$IA$I(this.getPixelTypes$S(this.compression), pixelType)) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported image type '" + $I$(3).getPixelTypeString$I(pixelType) + "'." ]);
}}
});

Clazz.newMeth(C$, 'isInitialized$I$J', function (imageIndex, planeIndex) {
return this.initialized[imageIndex][(planeIndex|0)];
});

Clazz.newMeth(C$, 'getCompression$', function () {
return this.compression;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
if (this.out != null ) this.out.close$();
if (this.metadata != null ) this.metadata.close$Z(fileOnly);
this.out=null;
this.initialized=null;
});
C$.$getAnn$ = function(){ return [
[['handles','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
