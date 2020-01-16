(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},p$2={},I$=[[0,'java.util.ArrayList','net.imagej.axis.Axes','io.scif.util.FormatTools',['io.scif.formats.APNGFormat','.ACTLChunk'],['io.scif.formats.APNGFormat','.FCTLChunk'],['io.scif.formats.APNGFormat','.IDATChunk'],['io.scif.formats.APNGFormat','.FDATChunk'],['io.scif.formats.APNGFormat','.IHDRChunk'],['io.scif.formats.APNGFormat','.PLTEChunk'],['io.scif.formats.APNGFormat','.IENDChunk'],'io.scif.gui.AWTImageTools','net.imglib2.display.ColorTable8','java.io.DataInputStream','java.io.BufferedInputStream','org.scijava.io.handle.DataHandleInputStream','javax.imageio.ImageIO','io.scif.util.SCIFIOMetadataTools','java.io.ByteArrayOutputStream','io.scif.formats.APNGFormat','org.scijava.util.Bytes','org.scijava.io.location.BytesLocation','net.imglib2.FinalInterval','java.awt.image.BufferedImage','java.util.zip.CRC32','java.util.zip.DeflaterOutputStream','io.scif.Metadata',['io.scif.formats.APNGFormat','.Metadata'],'io.scif.FieldPrinter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "APNGFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['Writer',9],['APNGTranslator',9],['APNGChunk',9],['IHDRChunk',9],['PLTEChunk',9],['FCTLChunk',9],['IDATChunk',9],['ACTLChunk',9],['FDATChunk',9],['IENDChunk',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.PNG_SIGNATURE=Clazz.array(Byte.TYPE, -1, [-119, 80, 78, 71, 13, 10, 26, 10]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['PNG_SIGNATURE','byte[]']]]

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["png"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.APNGFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Animated PNG" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.signed=false;
this.littleEndian=false;
}, 1);

C$.$fields$=[['Z',['separateDefault','signed','littleEndian'],'O',['idat','java.util.List','+fctl','actl','io.scif.formats.APNGFormat.ACTLChunk','ihdr','io.scif.formats.APNGFormat.IHDRChunk','plte','io.scif.formats.APNGFormat.PLTEChunk','iend','io.scif.formats.APNGFormat.IENDChunk']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.fctl=Clazz.new_(1,{E:"io.scif.formats.APNGFormat.FCTLChunk"},$I$(1,1));
this.idat=Clazz.new_(1,{E:"io.scif.formats.APNGFormat.IDATChunk"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'isSigned$', function () {
return this.signed;
});

Clazz.newMeth(C$, 'setSigned$Z', function (signed) {
this.signed=signed;
});

Clazz.newMeth(C$, 'isSeparateDefault$', function () {
return this.separateDefault;
});

Clazz.newMeth(C$, 'setSeparateDefault$Z', function (separateDefault) {
this.separateDefault=separateDefault;
});

Clazz.newMeth(C$, 'isLittleEndian$', function () {
return this.littleEndian;
});

Clazz.newMeth(C$, 'setLittleEndian$Z', function (littleEndian) {
this.littleEndian=littleEndian;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.createImageMetadata$I(1);
var imageMeta=this.get$I(0);
imageMeta.setOrderCertain$Z(true);
imageMeta.setFalseColor$Z(false);
imageMeta.setThumbnail$Z(false);
imageMeta.setLittleEndian$Z(this.isLittleEndian$());
var indexed=false;
var rgb=true;
var sizec=1;
var bpp=this.getIhdr$().getBitDepth$();
switch (this.getIhdr$().getColourType$()) {
case 0:
rgb=false;
break;
case 2:
sizec=3;
break;
case 3:
indexed=true;
sizec=1;
break;
case 4:
rgb=false;
sizec=2;
break;
case 6:
sizec=4;
break;
}
imageMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(2).X, $I$(2).Y]);
imageMeta.setAxisLengths$JA(Clazz.array(Long.TYPE, -1, [this.getIhdr$().getWidth$(), this.getIhdr$().getHeight$()]));
imageMeta.setPlanarAxisCount$I(2);
imageMeta.setBitsPerPixel$I(bpp);
try {
imageMeta.setPixelType$I($I$(3).pixelTypeFromBytes$I$Z$Z((bpp/8|0), this.isSigned$(), false));
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().error$O$Throwable("Failed to find pixel type from bytes: " + ((bpp/8|0)), e);
} else {
throw e;
}
}
if (rgb) {
imageMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).CHANNEL, sizec);
imageMeta.setPlanarAxisCount$I(3);
}var actl=this.getActl$();
if (actl != null ) {
imageMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).TIME, actl.getNumFrames$());
}imageMeta.setIndexed$Z(indexed);
imageMeta.setMetadataComplete$Z(false);
this.get$I(0).getTable$().put$TK$TV("separate default", new Boolean(this.isSeparateDefault$()));
});

Clazz.newMeth(C$, 'getIdat$', function () {
return this.idat;
});

Clazz.newMeth(C$, 'setIdat$java_util_List', function (idat) {
this.idat=idat;
});

Clazz.newMeth(C$, 'addIdat$io_scif_formats_APNGFormat_IDATChunk', function (idat) {
this.idat.add$TE(idat);
});

Clazz.newMeth(C$, 'getFctl$', function () {
return this.fctl;
});

Clazz.newMeth(C$, 'setFctl$java_util_List', function (fctl) {
this.fctl=fctl;
});

Clazz.newMeth(C$, 'getActl$', function () {
return this.actl;
});

Clazz.newMeth(C$, 'setActl$io_scif_formats_APNGFormat_ACTLChunk', function (actl) {
this.actl=actl;
});

Clazz.newMeth(C$, 'getIhdr$', function () {
return this.ihdr;
});

Clazz.newMeth(C$, 'setIhdr$io_scif_formats_APNGFormat_IHDRChunk', function (ihdr) {
this.ihdr=ihdr;
});

Clazz.newMeth(C$, 'getPlte$', function () {
return this.plte;
});

Clazz.newMeth(C$, 'setPlte$io_scif_formats_APNGFormat_PLTEChunk', function (plte) {
this.plte=plte;
});

Clazz.newMeth(C$, 'getIend$', function () {
return this.iend;
});

Clazz.newMeth(C$, 'setIend$io_scif_formats_APNGFormat_IENDChunk', function (iend) {
this.iend=iend;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.fctl=Clazz.new_(1,{E:"io.scif.formats.APNGFormat.FCTLChunk"},$I$(1,1));
this.idat=Clazz.new_(1,{E:"io.scif.formats.APNGFormat.IDATChunk"},$I$(1,1));
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var blockLen=8;
if (!$I$(3).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, 8, false)) return false;
var signature=Clazz.array(Byte.TYPE, [8]);
stream.read$BA(signature);
if (signature[0] != -119 || signature[1] != 80  || signature[2] != 78  || signature[3] != 71  || signature[4] != 13  || signature[5] != 10  || signature[6] != 26  || signature[7] != 10 ) {
return false;
}return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_APNGFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (handle, meta, config) {
var signature=Clazz.array(Byte.TYPE, [8]);
handle.read$BA(signature);
if (signature[0] != -119 || signature[1] != 80  || signature[2] != 78  || signature[3] != 71  || signature[4] != 13  || signature[5] != 10  || signature[6] != 26  || signature[7] != 10 ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid PNG signature."]);
}var sawFctl=false;
while (handle.offset$() < handle.length$()){
var length=handle.readInt$();
var type=handle.readString$I(4);
var offset=handle.offset$();
var chunk=null;
if (type.equals$O("acTL")) {
chunk=Clazz.new_($I$(4,1));
var actl=chunk;
actl.setNumFrames$I(handle.readInt$());
actl.setNumPlays$I(handle.readInt$());
meta.setActl$io_scif_formats_APNGFormat_ACTLChunk(actl);
} else if (type.equals$O("fcTL")) {
sawFctl=true;
chunk=Clazz.new_($I$(5,1));
var fctl=chunk;
fctl.setSequenceNumber$I(handle.readInt$());
fctl.setWidth$I(handle.readInt$());
fctl.setHeight$I(handle.readInt$());
fctl.setxOffset$I(handle.readInt$());
fctl.setyOffset$I(handle.readInt$());
fctl.setDelayNum$H(handle.readShort$());
fctl.setDelayDen$H(handle.readShort$());
fctl.setDisposeOp$B(($b$[0] = handle.readByte$(), $b$[0]));
fctl.setBlendOp$B(($b$[0] = handle.readByte$(), $b$[0]));
meta.getFctl$().add$TE(fctl);
} else if (type.equals$O("IDAT")) {
meta.setSeparateDefault$Z(!sawFctl);
chunk=Clazz.new_($I$(6,1));
meta.addIdat$io_scif_formats_APNGFormat_IDATChunk(chunk);
handle.skipBytes$I(length);
} else if (type.equals$O("fdAT")) {
chunk=Clazz.new_($I$(7,1));
(chunk).setSequenceNumber$I(handle.readInt$());
meta.getFctl$().get$I(meta.getFctl$().size$() - 1).addChunk$io_scif_formats_APNGFormat_FDATChunk((chunk));
handle.skipBytes$I(length - 4);
} else if (type.equals$O("IHDR")) {
chunk=Clazz.new_($I$(8,1));
var ihdr=chunk;
ihdr.setWidth$I(handle.readInt$());
ihdr.setHeight$I(handle.readInt$());
ihdr.setBitDepth$B(($b$[0] = handle.readByte$(), $b$[0]));
ihdr.setColourType$B(($b$[0] = handle.readByte$(), $b$[0]));
ihdr.setCompressionMethod$B(($b$[0] = handle.readByte$(), $b$[0]));
ihdr.setFilterMethod$B(($b$[0] = handle.readByte$(), $b$[0]));
ihdr.setInterlaceMethod$B(($b$[0] = handle.readByte$(), $b$[0]));
meta.setIhdr$io_scif_formats_APNGFormat_IHDRChunk(ihdr);
} else if (type.equals$O("PLTE")) {
chunk=Clazz.new_($I$(9,1));
var plte=chunk;
var red=Clazz.array(Byte.TYPE, [(length/3|0)]);
var blue=Clazz.array(Byte.TYPE, [(length/3|0)]);
var green=Clazz.array(Byte.TYPE, [(length/3|0)]);
for (var i=0; i < (length/3|0); i++) {
red[i]=(handle.readByte$()|0);
green[i]=(handle.readByte$()|0);
blue[i]=(handle.readByte$()|0);
}
plte.setRed$BA(red);
plte.setGreen$BA(green);
plte.setBlue$BA(blue);
meta.setPlte$io_scif_formats_APNGFormat_PLTEChunk(plte);
} else if (type.equals$O("IEND")) {
chunk=Clazz.new_($I$(10,1));
handle.skipBytes$I(((handle.length$() - handle.offset$())|0));
meta.setIend$io_scif_formats_APNGFormat_IENDChunk(chunk);
} else handle.skipBytes$I(length);
if (chunk != null ) {
chunk.setOffset$J(offset);
chunk.setLength$I(length);
}if (handle.offset$() < handle.length$() - 4) {
handle.skipBytes$I(4);
}}
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.gui.BufferedImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastPlaneIndex=-1;
}, 1);

C$.$fields$=[['L',['lastPlaneIndex'],'O',['dataHandleService','org.scijava.io.handle.DataHandleService','lastPlane','io.scif.BufferedImagePlane']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['setMetadata$io_scif_formats_APNGFormat_Metadata','setMetadata$TM'], function (meta) {
this.lastPlaneIndex=-1;
this.lastPlane=null;
C$.superclazz.prototype.setMetadata$TM.apply(this, [meta]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_BufferedImagePlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
$I$(3).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, -1, bounds);
if (planeIndex == this.lastPlaneIndex && this.lastPlane != null  ) {
var subImage=$I$(11).getSubimage$java_awt_image_BufferedImage$Z$net_imglib2_Interval(this.lastPlane.getData$(), meta.get$I(imageIndex).isLittleEndian$(), bounds);
plane.setData$java_awt_image_BufferedImage(subImage);
return plane;
} else if (this.lastPlane == null ) {
this.lastPlane=this.createPlane$net_imglib2_Interval(bounds);
if (this.getMetadata$().get$I(imageIndex).isIndexed$()) {
var plte=meta.getPlte$();
if (plte != null ) {
var ct=Clazz.new_($I$(12,1).c$$BAA,[[plte.getRed$(), plte.getGreen$(), plte.getBlue$()]]);
plane.setColorTable$net_imglib2_display_ColorTable(ct);
}}}var handle=this.getHandle$();
if (planeIndex == 0) {
handle.seek$J(0);
var dis=Clazz.new_($I$(13,1).c$$java_io_InputStream,[Clazz.new_($I$(14,1).c$$java_io_InputStream$I,[Clazz.new_(1,{L:"org.scijava.io.location.Location"},$I$(15,1).c$$org_scijava_io_handle_DataHandle,[handle]), 4096])]);
var subImg=$I$(16).read$java_io_InputStream(dis);
this.lastPlane.populate$io_scif_ImageMetadata$TT$net_imglib2_Interval(meta.get$I(imageIndex), subImg, bounds);
this.lastPlaneIndex=0;
plane.setData$java_awt_image_BufferedImage(this.lastPlane.getData$());
if (!$I$(17).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, meta, bounds)) {
subImg=$I$(11).getSubimage$java_awt_image_BufferedImage$Z$net_imglib2_Interval(this.lastPlane.getData$(), meta.get$I(imageIndex).isLittleEndian$(), bounds);
plane.setData$java_awt_image_BufferedImage(subImg);
}return plane;
}var stream=Clazz.new_($I$(18,1));
stream.write$BA($I$(19).PNG_SIGNATURE);
var coords=this.getMetadata$().getFctl$().get$I((planeIndex|0)).getFrameCoordinates$();
var ihdr=this.getMetadata$().getIhdr$();
p$1.processChunk$I$I$J$IA$java_io_ByteArrayOutputStream$Z.apply(this, [imageIndex, ihdr.getLength$(), ihdr.getOffset$(), coords, stream, true]);
var fctl=this.getMetadata$().getFctl$().get$I(((this.getMetadata$().isSeparateDefault$() ? planeIndex - 1 : planeIndex)|0));
for (var fdat, $fdat = fctl.getFdatChunks$().iterator$(); $fdat.hasNext$()&&((fdat=($fdat.next$())),1);) {
handle.seek$J(fdat.getOffset$() + 4);
var b=Clazz.array(Byte.TYPE, [fdat.getLength$() + 8]);
$I$(20).unpack$J$BA$I$I$Z(fdat.getLength$() - 4, b, 0, 4, this.getMetadata$().get$I(imageIndex).isLittleEndian$());
b[4]=("I".$c()|0);
b[5]=("D".$c()|0);
b[6]=("A".$c()|0);
b[7]=("T".$c()|0);
handle.read$BA$I$I(b, 8, b.length - 12);
var crc=(p$1.computeCRC$BA$I.apply(this, [b, b.length - 4])|0);
$I$(20).unpack$J$BA$I$I$Z(crc, b, b.length - 4, 4, this.getMetadata$().get$I(imageIndex).isLittleEndian$());
stream.write$BA(b);
b=null;
}
var plte=this.getMetadata$().getPlte$();
if (plte != null ) {
p$1.processChunk$I$I$J$IA$java_io_ByteArrayOutputStream$Z.apply(this, [imageIndex, plte.getLength$(), plte.getOffset$(), coords, stream, false]);
}var loc=Clazz.new_($I$(21,1).c$$BA,[stream.toByteArray$()]);
var dis=Clazz.new_(1,{L:"org.scijava.io.location.Location"},$I$(15,1).c$$org_scijava_io_handle_DataHandle,[this.dataHandleService.create$TD(loc)]);
var bi=$I$(16).read$java_io_InputStream(dis);
dis.close$();
var firstPlaneBounds=Clazz.new_($I$(22,1).c$$JA,[meta.get$I(imageIndex).getAxesLengthsPlanar$()]);
this.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, 0, firstPlaneBounds, config);
var firstRaster=this.lastPlane.getData$().getRaster$();
var currentRaster=bi.getRaster$();
firstRaster.setDataElements$I$I$java_awt_image_Raster(coords[0], coords[1], currentRaster);
var bImg=Clazz.new_($I$(23,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.lastPlane.getData$().getColorModel$(), firstRaster, false, null]);
this.lastPlane.populate$io_scif_ImageMetadata$TT$net_imglib2_Interval(this.getMetadata$().get$I(imageIndex), bImg, bounds);
this.lastPlaneIndex=planeIndex;
return plane.populate$io_scif_DataPlane(this.lastPlane);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.lastPlane=null;
this.lastPlaneIndex=-1;
}});

Clazz.newMeth(C$, 'computeCRC$BA$I', function (buf, len) {
var crc=Clazz.new_($I$(24,1));
crc.update$BA$I$I(buf, 0, len);
return crc.getValue$();
}, p$1);

Clazz.newMeth(C$, 'processChunk$I$I$J$IA$java_io_ByteArrayOutputStream$Z', function (imageIndex, length, offset, coords, stream, isIHDR) {
var b=Clazz.array(Byte.TYPE, [length + 12]);
var littleEndian=this.getMetadata$().get$I(imageIndex).isLittleEndian$();
$I$(20).unpack$J$BA$I$I$Z(length, b, 0, 4, littleEndian);
var typeBytes=(isIHDR ? "IHDR".getBytes$() : "PLTE".getBytes$());
System.arraycopy$O$I$O$I$I(typeBytes, 0, b, 4, 4);
this.getHandle$().seek$J(offset);
this.getHandle$().read$BA$I$I(b, 8, b.length - 12);
if (isIHDR) {
$I$(20).unpack$J$BA$I$I$Z(coords[2], b, 8, 4, littleEndian);
$I$(20).unpack$J$BA$I$I$Z(coords[3], b, 12, 4, littleEndian);
}var crc=(p$1.computeCRC$BA$I.apply(this, [b, b.length - 4])|0);
$I$(20).unpack$J$BA$I$I$Z(crc, b, b.length - 4, 4, littleEndian);
stream.write$BA(b);
b=null;
}, p$1);
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numFrames=0;
this.numFramesPointer=0;
}, 1);

C$.$fields$=[['I',['numFrames','nextSequenceNumber'],'L',['numFramesPointer']]]

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, 'initialize$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
if (!this.isInitialized$I$J(imageIndex, planeIndex)) {
if (this.numFrames == 0) {
if (!this.getMetadata$().isSeparateDefault$()) {
p$2.writeFCTL$J.apply(this, [planeIndex]);
}p$2.writePLTE.apply(this, []);
}}C$.superclazz.prototype.initialize$I$J$net_imglib2_Interval.apply(this, [imageIndex, planeIndex, bounds]);
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig', function (out, imageIndex, config) {
C$.superclazz.prototype.setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig.apply(this, [out, imageIndex, config]);
if (out.length$() == 0) {
var imageMetadata=this.getMetadata$().get$I(imageIndex);
var width=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var height=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
var bytesPerPixel=$I$(3).getBytesPerPixel$I(imageMetadata.getPixelType$());
var nChannels=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0);
var indexed=this.getColorModel$() != null  && (Clazz.instanceOf(this.getColorModel$(), "java.awt.image.IndexColorModel")) ;
out.write$BA($I$(19).PNG_SIGNATURE);
out.writeInt$I(13);
var b=Clazz.array(Byte.TYPE, [17]);
b[0]=("I".$c()|0);
b[1]=("H".$c()|0);
b[2]=("D".$c()|0);
b[3]=("R".$c()|0);
$I$(20).unpack$J$BA$I$I$Z(width, b, 4, 4, false);
$I$(20).unpack$J$BA$I$I$Z(height, b, 8, 4, false);
b[12]=(((bytesPerPixel * 8)|0)|0);
if (indexed) b[13]=(3|0);
 else if (nChannels == 1) b[13]=(0|0);
 else if (nChannels == 2) b[13]=(4|0);
 else if (nChannels == 3) b[13]=(2|0);
 else if (nChannels == 4) b[13]=(6|0);
b[14]=(this.getMetadata$().getIhdr$().getCompressionMethod$()|0);
b[15]=(this.getMetadata$().getIhdr$().getFilterMethod$()|0);
b[16]=(this.getMetadata$().getIhdr$().getInterlaceMethod$()|0);
out.write$BA(b);
out.writeInt$I(p$2.crc$BA.apply(this, [b]));
var actl=this.getMetadata$().getActl$();
out.writeInt$I(8);
out.writeBytes$S("acTL");
this.numFramesPointer=out.offset$();
out.writeInt$I(actl == null  ? 0 : actl.getNumFrames$());
out.writeInt$I(actl == null  ? 0 : actl.getNumPlays$());
out.writeInt$I(0);
}});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
this.checkParams$I$J$BA$net_imglib2_Interval(imageIndex, planeIndex, plane.getBytes$(), bounds);
if (!$I$(17).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, this.getMetadata$(), bounds)) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["APNGWriter does not yet support saving image tiles."]);
}if (this.numFrames == 0) {
p$2.writePixels$I$S$io_scif_Plane$net_imglib2_Interval.apply(this, [imageIndex, "IDAT", plane, bounds]);
} else {
p$2.writeFCTL$J.apply(this, [planeIndex]);
p$2.writePixels$I$S$io_scif_Plane$net_imglib2_Interval.apply(this, [imageIndex, "fdAT", plane, bounds]);
}this.numFrames++;
});

Clazz.newMeth(C$, 'canDoStacks$', function () {
return true;
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [1, 3]);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
if (this.getHandle$() != null ) {
p$2.writeFooter.apply(this, []);
}C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
this.numFrames=0;
this.numFramesPointer=0;
this.nextSequenceNumber=0;
});

Clazz.newMeth(C$, 'crc$BA', function (buf) {
return p$2.crc$BA$I$I.apply(this, [buf, 0, buf.length]);
}, p$2);

Clazz.newMeth(C$, 'crc$BA$I$I', function (buf, off, len) {
var crc=Clazz.new_($I$(24,1));
crc.update$BA$I$I(buf, off, len);
return (crc.getValue$()|0);
}, p$2);

Clazz.newMeth(C$, 'writeFCTL$J', function (planeIndex) {
this.getHandle$().writeInt$I(26);
var fctl=this.getMetadata$().getFctl$().get$I(((this.getMetadata$().isSeparateDefault$() ? planeIndex - 1 : planeIndex)|0));
var b=Clazz.array(Byte.TYPE, [30]);
$I$(20).unpack$J$BA$I$I$Z(22, b, 0, 4, false);
b[0]=("f".$c()|0);
b[1]=("c".$c()|0);
b[2]=("T".$c()|0);
b[3]=("L".$c()|0);
$I$(20).unpack$J$BA$I$I$Z(this.nextSequenceNumber++, b, 4, 4, false);
$I$(20).unpack$J$BA$I$I$Z(fctl.getWidth$(), b, 8, 4, false);
$I$(20).unpack$J$BA$I$I$Z(fctl.getHeight$(), b, 12, 4, false);
$I$(20).unpack$J$BA$I$I$Z(fctl.getxOffset$(), b, 16, 4, false);
$I$(20).unpack$J$BA$I$I$Z(fctl.getyOffset$(), b, 20, 4, false);
$I$(20).unpack$J$BA$I$I$Z(fctl.getDelayNum$(), b, 24, 2, false);
$I$(20).unpack$J$BA$I$I$Z(fctl.getDelayDen$(), b, 26, 2, false);
b[28]=(fctl.getDisposeOp$()|0);
b[29]=(fctl.getBlendOp$()|0);
this.getHandle$().write$BA(b);
this.getHandle$().writeInt$I(p$2.crc$BA.apply(this, [b]));
}, p$2);

Clazz.newMeth(C$, 'writePLTE', function () {
if (!(Clazz.instanceOf(this.getColorModel$(), "java.awt.image.IndexColorModel"))) return;
var model=this.getColorModel$();
var lut=Clazz.array(Byte.TYPE, [3, 256]);
model.getReds$BA(lut[0]);
model.getGreens$BA(lut[1]);
model.getBlues$BA(lut[2]);
this.getHandle$().writeInt$I(768);
var b=Clazz.array(Byte.TYPE, [772]);
b[0]=("P".$c()|0);
b[1]=("L".$c()|0);
b[2]=("T".$c()|0);
b[3]=("E".$c()|0);
for (var i=0; i < lut[0].length; i++) {
for (var j=0; j < lut.length; j++) {
b[i * lut.length + j + 4]=(lut[j][i]|0);
}
}
this.getHandle$().write$BA(b);
this.getHandle$().writeInt$I(p$2.crc$BA.apply(this, [b]));
}, p$2);

Clazz.newMeth(C$, 'writePixels$I$S$io_scif_Plane$net_imglib2_Interval', function (imageIndex, chunk, plane, bounds) {
var stream=plane.getBytes$();
var imageMetadata=this.getMetadata$().get$I(imageIndex);
var rgbCCount=imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL);
var interleaved=plane.getImageMetadata$().getInterleavedAxisCount$() > 0;
var pixelType=imageMetadata.getPixelType$();
var signed=$I$(3).isSigned$I(pixelType);
if (!$I$(17).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, this.getMetadata$(), bounds)) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["APNGWriter does not support writing tiles."]);
}var width=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var height=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
var s=Clazz.new_($I$(18,1));
s.write$BA(chunk.getBytes$());
if (chunk.equals$O("fdAT")) {
s.write$BA($I$(20).fromInt$I$Z(this.nextSequenceNumber++, false));
}var deflater=Clazz.new_($I$(25,1).c$$java_io_OutputStream,[s]);
var planeSize=(stream.length/rgbCCount|0);
var rowLen=(stream.length/height|0);
var bytesPerPixel=(stream.length/((width * height * rgbCCount )|0)|0);
var littleEndian=this.getMetadata$().get$I(0).isLittleEndian$();
var rowBuf=Clazz.array(Byte.TYPE, [rowLen]);
for (var i=0; i < height; i++) {
deflater.write$I(0);
if (interleaved) {
if (littleEndian) {
for (var col=0; col < width * rgbCCount; col++) {
var offset=((i * rgbCCount * width  + col)|0) * bytesPerPixel;
var pixel=$I$(20).toInt$BA$I$I$Z(stream, offset, bytesPerPixel, littleEndian);
$I$(20).unpack$J$BA$I$I$Z(pixel, rowBuf, col * bytesPerPixel, bytesPerPixel, false);
}
} else System.arraycopy$O$I$O$I$I(stream, i * rowLen, rowBuf, 0, rowLen);
} else {
var max=(Math.pow(2, bytesPerPixel * 8 - 1)|0);
for (var col=0; col < width; col++) {
for (var c=0; c < rgbCCount; c++) {
var offset=((c * planeSize + (i * width + col) * bytesPerPixel)|0);
var pixel=$I$(20).toInt$BA$I$I$Z(stream, offset, bytesPerPixel, littleEndian);
if (signed) {
if (pixel < max) pixel+=max;
 else pixel-=max;
}var output=((col * rgbCCount + c)|0) * bytesPerPixel;
$I$(20).unpack$J$BA$I$I$Z(pixel, rowBuf, output, bytesPerPixel, false);
}
}
}deflater.write$BA(rowBuf);
}
deflater.finish$();
var b=s.toByteArray$();
var handle=this.getHandle$();
handle.writeInt$I(b.length - 4);
handle.write$BA(b);
handle.writeInt$I(p$2.crc$BA.apply(this, [b]));
}, p$2);

Clazz.newMeth(C$, 'writeFooter', function () {
var handle=this.getHandle$();
handle.writeInt$I(0);
handle.writeBytes$S("IEND");
handle.writeInt$I(p$2.crc$BA.apply(this, ["IEND".getBytes$()]));
handle.seek$J(this.numFramesPointer);
handle.writeInt$I(this.numFrames);
handle.skipBytes$I(4);
var b=Clazz.array(Byte.TYPE, [12]);
b[0]=("a".$c()|0);
b[1]=("c".$c()|0);
b[2]=("T".$c()|0);
b[3]=("L".$c()|0);
$I$(20).unpack$J$BA$I$I$Z(this.numFrames, b, 4, 4, false);
$I$(20).unpack$J$BA$I$I$Z(this.getMetadata$().getActl$() == null  ? 0 : this.getMetadata$().getActl$().getNumPlays$(), b, 8, 4, false);
handle.writeInt$I(p$2.crc$BA.apply(this, [b]));
}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "APNGTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(26),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(27));
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_formats_APNGFormat_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
var ihdr=dest.getIhdr$() == null  ? Clazz.new_($I$(8,1)) : dest.getIhdr$();
var plte=dest.getPlte$() == null  ? Clazz.new_($I$(9,1)) : dest.getPlte$();
var actl=dest.getActl$() == null  ? Clazz.new_($I$(4,1)) : dest.getActl$();
var fctl=Clazz.new_(1,{E:"io.scif.formats.APNGFormat.FCTLChunk"},$I$(1,1));
dest.setIhdr$io_scif_formats_APNGFormat_IHDRChunk(ihdr);
dest.setPlte$io_scif_formats_APNGFormat_PLTEChunk(plte);
dest.setActl$io_scif_formats_APNGFormat_ACTLChunk(actl);
dest.setFctl$java_util_List(fctl);
ihdr.setWidth$I((source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0));
ihdr.setHeight$I((source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0));
ihdr.setBitDepth$B(($b$[0] = (source.get$I(0).getBitsPerPixel$()|0), $b$[0]));
ihdr.setFilterMethod$B(($b$[0] = 0, $b$[0]));
ihdr.setCompressionMethod$B(($b$[0] = 0, $b$[0]));
ihdr.setInterlaceMethod$B(($b$[0] = 0, $b$[0]));
var sizec=source.get$I(0).isMultichannel$() ? source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) : 1;
var indexed=source.get$I(0).isIndexed$();
if (indexed) {
ihdr.setColourType$B(($b$[0] = 3, $b$[0]));
} else if (sizec == 2) {
ihdr.setColourType$B(($b$[0] = 4, $b$[0]));
ihdr.setBitDepth$B(($b$[0] = (((ihdr.getBitDepth$()/2|0))|0), $b$[0]));
} else if (sizec == 4) {
ihdr.setColourType$B(($b$[0] = 6, $b$[0]));
ihdr.setBitDepth$B(($b$[0] = (((ihdr.getBitDepth$()/2|0))|0), $b$[0]));
} else if (sizec != 3) {
ihdr.setColourType$B(($b$[0] = 0, $b$[0]));
} else {
ihdr.setColourType$B(($b$[0] = 2, $b$[0]));
}actl.setNumFrames$I((source.get$I(0).getPlaneCount$()|0));
for (var i=0; i < actl.getNumFrames$(); i++) {
var frame=Clazz.new_($I$(5,1));
frame.setHeight$I(ihdr.getHeight$());
frame.setWidth$I(ihdr.getWidth$());
frame.setxOffset$I(0);
frame.setyOffset$I(0);
frame.setSequenceNumber$I(i);
frame.setDelayDen$H(0);
frame.setDelayNum$H(0);
frame.setBlendOp$B(($b$[0] = 0, $b$[0]));
frame.setDisposeOp$B(($b$[0] = 0, $b$[0]));
fctl.add$TE(frame);
}
dest.setLittleEndian$Z(source.get$I(0).isLittleEndian$());
var signed=$I$(3).isSigned$I(source.get$I(0).getPixelType$());
dest.setSigned$Z(signed);
var separateDefault=source.get$I(0).getTable$().get$O("separate default");
dest.setSeparateDefault$Z(separateDefault == null  ? false : (separateDefault).valueOf());
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.APNGFormat.APNGTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "APNGChunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['length'],'L',['offset'],'O',['chunkSignature','byte[]']]]

Clazz.newMeth(C$, 'c$$BA', function (signature) {
;C$.$init$.apply(this);
this.chunkSignature=signature;
}, 1);

Clazz.newMeth(C$, 'getCHUNK_SIGNATURE$', function () {
return this.chunkSignature;
});

Clazz.newMeth(C$, 'getFrameCoordinates$', function () {
return Clazz.array(Integer.TYPE, [0]);
});

Clazz.newMeth(C$, 'setOffset$J', function (offset) {
this.offset=offset;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'setLength$I', function (length) {
this.length=length;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'toString', function () {
return Clazz.new_($I$(28,1).c$$O,[this]).toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "IHDRChunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.APNGFormat','.APNGChunk']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['B',['bitDepth','colourType','compressionMethod','filterMethod','interlaceMethod'],'I',['width','height']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$BA.apply(this,[Clazz.array(Byte.TYPE, -1, [73, 72, 68, 82])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$I', function (width) {
this.width=width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$I', function (height) {
this.height=height;
});

Clazz.newMeth(C$, 'getBitDepth$', function () {
return $b$[0] = this.bitDepth, $b$[0];
});

Clazz.newMeth(C$, 'setBitDepth$B', function (bitDepth) {
this.bitDepth=($b$[0] = bitDepth, $b$[0]);
});

Clazz.newMeth(C$, 'getColourType$', function () {
return $b$[0] = this.colourType, $b$[0];
});

Clazz.newMeth(C$, 'setColourType$B', function (colourType) {
this.colourType=($b$[0] = colourType, $b$[0]);
});

Clazz.newMeth(C$, 'getCompressionMethod$', function () {
return $b$[0] = this.compressionMethod, $b$[0];
});

Clazz.newMeth(C$, 'setCompressionMethod$B', function (compressionMethod) {
this.compressionMethod=($b$[0] = compressionMethod, $b$[0]);
});

Clazz.newMeth(C$, 'getFilterMethod$', function () {
return $b$[0] = this.filterMethod, $b$[0];
});

Clazz.newMeth(C$, 'setFilterMethod$B', function (filterMethod) {
this.filterMethod=($b$[0] = filterMethod, $b$[0]);
});

Clazz.newMeth(C$, 'getInterlaceMethod$', function () {
return $b$[0] = this.interlaceMethod, $b$[0];
});

Clazz.newMeth(C$, 'setInterlaceMethod$B', function (interlaceMethod) {
this.interlaceMethod=($b$[0] = interlaceMethod, $b$[0]);
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[['width','int',null,['io.scif.Field']],['label="Width" ']],
  [['height','.',null,['io.scif.Field']],['label="height" ']],
  [['bitDepth','byte',null,['io.scif.Field']],['label="Bit depth" ']],
  [['colourType','.',null,['io.scif.Field']],['label="Colour type" ']],
  [['compressionMethod','.',null,['io.scif.Field']],['label="Compression Method" ']],
  [['filterMethod','.',null,['io.scif.Field']],['label="Filter method" ']],
  [['interlaceMethod','.',null,['io.scif.Field']],['label="Interlace method" ']]]}
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "PLTEChunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.APNGFormat','.APNGChunk']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['red','byte[]','+green','+blue']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$BA.apply(this,[Clazz.array(Byte.TYPE, -1, [80, 76, 84, 69])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getRed$', function () {
return this.red;
});

Clazz.newMeth(C$, 'setRed$BA', function (red) {
this.red=red;
});

Clazz.newMeth(C$, 'getGreen$', function () {
return this.green;
});

Clazz.newMeth(C$, 'setGreen$BA', function (green) {
this.green=green;
});

Clazz.newMeth(C$, 'getBlue$', function () {
return this.blue;
});

Clazz.newMeth(C$, 'setBlue$BA', function (blue) {
this.blue=blue;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "FCTLChunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.APNGFormat','.APNGChunk']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['B',['disposeOp','blendOp'],'I',['sequenceNumber','width','height','xOffset','yOffset'],'H',['delayNum','delayDen'],'O',['fdatChunks','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$BA.apply(this,[Clazz.array(Byte.TYPE, -1, [102, 99, 84, 76])]);C$.$init$.apply(this);
this.fdatChunks=Clazz.new_(1,{E:"io.scif.formats.APNGFormat.FDATChunk"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addChunk$io_scif_formats_APNGFormat_FDATChunk', function (chunk) {
this.fdatChunks.add$TE(chunk);
});

Clazz.newMeth(C$, 'getSequenceNumber$', function () {
return this.sequenceNumber;
});

Clazz.newMeth(C$, 'setSequenceNumber$I', function (sequenceNumber) {
this.sequenceNumber=sequenceNumber;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$I', function (width) {
this.width=width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$I', function (height) {
this.height=height;
});

Clazz.newMeth(C$, 'getxOffset$', function () {
return this.xOffset;
});

Clazz.newMeth(C$, 'setxOffset$I', function (xOffset) {
this.xOffset=xOffset;
});

Clazz.newMeth(C$, 'getyOffset$', function () {
return this.yOffset;
});

Clazz.newMeth(C$, 'setyOffset$I', function (yOffset) {
this.yOffset=yOffset;
});

Clazz.newMeth(C$, 'getDelayNum$', function () {
return this.delayNum;
});

Clazz.newMeth(C$, 'setDelayNum$H', function (delayNum) {
this.delayNum=delayNum;
});

Clazz.newMeth(C$, 'getDelayDen$', function () {
return this.delayDen;
});

Clazz.newMeth(C$, 'setDelayDen$H', function (delayDen) {
this.delayDen=delayDen;
});

Clazz.newMeth(C$, 'getDisposeOp$', function () {
return $b$[0] = this.disposeOp, $b$[0];
});

Clazz.newMeth(C$, 'setDisposeOp$B', function (disposeOp) {
this.disposeOp=($b$[0] = disposeOp, $b$[0]);
});

Clazz.newMeth(C$, 'getBlendOp$', function () {
return $b$[0] = this.blendOp, $b$[0];
});

Clazz.newMeth(C$, 'setBlendOp$B', function (blendOp) {
this.blendOp=($b$[0] = blendOp, $b$[0]);
});

Clazz.newMeth(C$, 'getFdatChunks$', function () {
return this.fdatChunks;
});

Clazz.newMeth(C$, 'getFrameCoordinates$', function () {
return Clazz.array(Integer.TYPE, -1, [this.xOffset, this.yOffset, this.width, this.height]);
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[['sequenceNumber','int',null,['io.scif.Field']],['label="sequence_number" ']],
  [['width','.',null,['io.scif.Field']],['label="width" ']],
  [['height','.',null,['io.scif.Field']],['label="height" ']],
  [['xOffset','.',null,['io.scif.Field']],['label="x_offset" ']],
  [['yOffset','.',null,['io.scif.Field']],['label="y_offset" ']],
  [['delayNum','short',null,['io.scif.Field']],['label="delay_num" ']],
  [['delayDen','.',null,['io.scif.Field']],['label="delay_den" ']],
  [['disposeOp','byte',null,['io.scif.Field']],['label="dispose_op" ']],
  [['blendOp','.',null,['io.scif.Field']],['label="blend_op" ']]]}
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "IDATChunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.APNGFormat','.APNGChunk']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$BA.apply(this,[Clazz.array(Byte.TYPE, -1, [73, 68, 65, 84])]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "ACTLChunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.APNGFormat','.APNGChunk']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['sequenceNumber','numFrames','numPlays']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$BA.apply(this,[Clazz.array(Byte.TYPE, -1, [97, 99, 84, 76])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getNumFrames$', function () {
return this.numFrames;
});

Clazz.newMeth(C$, 'setNumFrames$I', function (numFrames) {
this.numFrames=numFrames;
});

Clazz.newMeth(C$, 'getNumPlays$', function () {
return this.numPlays;
});

Clazz.newMeth(C$, 'setNumPlays$I', function (numPlays) {
this.numPlays=numPlays;
});

Clazz.newMeth(C$, 'getSequenceNumber$', function () {
return this.sequenceNumber;
});

Clazz.newMeth(C$, 'setSequenceNumber$I', function (sequenceNumber) {
this.sequenceNumber=sequenceNumber;
});
C$.$getAnn$ = function(){ return [
[['sequenceNumber','int',null,['io.scif.Field']],['label="sequence_number" ']],
  [['numFrames','.',null,['io.scif.Field']],['label="num_frames" ']],
  [['numPlays','.',null,['io.scif.Field']],['label="num_plays" ']]]}
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "FDATChunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.APNGFormat','.APNGChunk']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['sequenceNumber']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$BA.apply(this,[Clazz.array(Byte.TYPE, -1, [102, 100, 65, 84])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSequenceNumber$', function () {
return this.sequenceNumber;
});

Clazz.newMeth(C$, 'setSequenceNumber$I', function (sequenceNumber) {
this.sequenceNumber=sequenceNumber;
});
C$.$getAnn$ = function(){ return [
[['sequenceNumber','int',null,['io.scif.Field']],['label="sequence_number" ']]]}
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.APNGFormat, "IENDChunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.APNGFormat','.APNGChunk']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$BA.apply(this,[Clazz.array(Byte.TYPE, -1, [73, 69, 78, 68])]);C$.$init$.apply(this);
}, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
