(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'io.scif.formats.tiff.PhotoInterp','net.imagej.axis.Axes','java.util.ArrayList','io.scif.codec.JPEG2000CodecOptions','net.imglib2.display.ColorTable16','net.imglib2.display.ColorTable8','io.scif.formats.tiff.TiffParser',['org.scijava.io.handle.DataHandle','.ByteOrder'],'io.scif.formats.tiff.IFDList','io.scif.formats.tiff.TiffCompression','io.scif.formats.JPEG2000Format','io.scif.formats.tiff.IFD','io.scif.util.FormatTools','org.scijava.util.Bytes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MinimalTIFFFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["tif", "tiff"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.MinimalTIFFFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Minimal TIFF" priority="-10000.0" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.MinimalTIFFFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.equalStrips=false;
this.use64Bit=false;
this.lastPlane=0;
this.noSubresolutions=false;
}, 1);

C$.$fields$=[['Z',['equalStrips','use64Bit','noSubresolutions'],'L',['lastPlane'],'O',['ifds','io.scif.formats.tiff.IFDList','+thumbnailIFDs','subResolutionIFDs','java.util.List','tiffParser','io.scif.formats.tiff.TiffParser','resolutionLevels','Integer','j2kCodecOptions','io.scif.codec.JPEG2000CodecOptions']]]

Clazz.newMeth(C$, 'getIfds$', function () {
return this.ifds;
});

Clazz.newMeth(C$, 'setIfds$io_scif_formats_tiff_IFDList', function (ifds) {
this.ifds=ifds;
});

Clazz.newMeth(C$, 'getThumbnailIFDs$', function () {
return this.thumbnailIFDs;
});

Clazz.newMeth(C$, 'setThumbnailIFDs$io_scif_formats_tiff_IFDList', function (thumbnailIFDs) {
this.thumbnailIFDs=thumbnailIFDs;
});

Clazz.newMeth(C$, 'getSubResolutionIFDs$', function () {
return this.subResolutionIFDs;
});

Clazz.newMeth(C$, 'setSubResolutionIFDs$java_util_List', function (subResolutionIFDs) {
this.subResolutionIFDs=subResolutionIFDs;
});

Clazz.newMeth(C$, 'getTiffParser$', function () {
return this.tiffParser;
});

Clazz.newMeth(C$, 'setTiffParser$io_scif_formats_tiff_TiffParser', function (tiffParser) {
this.tiffParser=tiffParser;
});

Clazz.newMeth(C$, 'isEqualStrips$', function () {
return this.equalStrips;
});

Clazz.newMeth(C$, 'setEqualStrips$Z', function (equalStrips) {
this.equalStrips=equalStrips;
});

Clazz.newMeth(C$, 'isUse64Bit$', function () {
return this.use64Bit;
});

Clazz.newMeth(C$, 'setUse64Bit$Z', function (use64Bit) {
this.use64Bit=use64Bit;
});

Clazz.newMeth(C$, 'getLastPlane$', function () {
return this.lastPlane;
});

Clazz.newMeth(C$, 'setLastPlane$J', function (lastPlane) {
this.lastPlane=lastPlane;
});

Clazz.newMeth(C$, 'isNoSubresolutions$', function () {
return this.noSubresolutions;
});

Clazz.newMeth(C$, 'setNoSubresolutions$Z', function (noSubresolutions) {
this.noSubresolutions=noSubresolutions;
});

Clazz.newMeth(C$, 'getResolutionLevels$', function () {
return this.resolutionLevels;
});

Clazz.newMeth(C$, 'setResolutionLevels$Integer', function (resolutionLevels) {
this.resolutionLevels=resolutionLevels;
});

Clazz.newMeth(C$, 'getJ2kCodecOptions$', function () {
return this.j2kCodecOptions;
});

Clazz.newMeth(C$, 'setJ2kCodecOptions$io_scif_codec_JPEG2000CodecOptions', function (j2kCodecOptions) {
this.j2kCodecOptions=j2kCodecOptions;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
if (this.getImageCount$() == 0) this.createImageMetadata$I(1);
var ms0=this.get$I(0);
var firstIFD=this.ifds.get$I(0);
try {
var photo=firstIFD.getPhotometricInterpretation$();
var samples=firstIFD.getSamplesPerPixel$();
if (samples <= 1 && photo === $I$(1).RGB  ) samples=3;
var planarAxes=2;
ms0.setLittleEndian$Z(firstIFD.isLittleEndian$());
ms0.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, (firstIFD.getImageWidth$()|0));
ms0.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, (firstIFD.getImageLength$()|0));
if (this.thumbnailIFDs != null  && this.thumbnailIFDs.size$() > 0 ) {
ms0.setThumbSizeX$J(this.thumbnailIFDs.get$I(0).getImageWidth$());
ms0.setThumbSizeY$J(this.thumbnailIFDs.get$I(0).getImageLength$());
}if (samples > 1) {
ms0.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, samples);
planarAxes=3;
}ms0.setPlanarAxisCount$I(planarAxes);
ms0.setPixelType$I(firstIFD.getPixelType$());
ms0.setMetadataComplete$Z(true);
ms0.setIndexed$Z(photo === $I$(1).RGB_PALETTE  && (this.getColorTable$I$J(0, 0) != null ) );
if (ms0.isIndexed$()) {
ms0.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 1);
for (var ifd, $ifd = this.ifds.iterator$(); $ifd.hasNext$()&&((ifd=($ifd.next$())),1);) {
ifd.putIFDValue$I$O(262, $I$(1).RGB_PALETTE);
}
}ms0.setBitsPerPixel$I(firstIFD.getBitsPerSample$()[0]);
if (this.resolutionLevels != null  && this.subResolutionIFDs.size$() > 0 ) {
var ifds=this.subResolutionIFDs.get$I(0);
if (ifds.size$() + 1 < ms0.getAxisLength$net_imagej_axis_AxisType($I$(2).TIME)) {
ms0.setAxisLength$net_imagej_axis_AxisType$J($I$(2).TIME, ms0.getAxisLength$net_imagej_axis_AxisType($I$(2).TIME) - (ifds.size$() + 1));
}for (var ifd, $ifd = ifds.iterator$(); $ifd.hasNext$()&&((ifd=($ifd.next$())),1);) {
var ms=ms0.copy$();
this.add$io_scif_ImageMetadata(ms);
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, (ifd.getImageWidth$()|0));
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, (ifd.getImageLength$()|0));
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(2).TIME, ms0.getAxisLength$net_imagej_axis_AxisType($I$(2).TIME));
ms.setThumbnail$Z(true);
ms.setThumbSizeX$J(ms0.getThumbSizeX$());
ms.setThumbSizeY$J(ms0.getThumbSizeY$());
}
}} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().error$O$Throwable("Error populating TIFF image metadata", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
if (this.ifds != null ) {
for (var ifd, $ifd = this.ifds.iterator$(); $ifd.hasNext$()&&((ifd=($ifd.next$())),1);) {
if (ifd.getOnDemandStripOffsets$() != null ) {
ifd.getOnDemandStripOffsets$().close$();
}}
}this.ifds=null;
this.thumbnailIFDs=null;
this.subResolutionIFDs=Clazz.new_(1,{E:"io.scif.formats.tiff.IFDList"},$I$(3,1));
this.lastPlane=0;
this.tiffParser=null;
this.resolutionLevels=null;
this.j2kCodecOptions=$I$(4).getDefaultOptions$();
}});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
if (this.ifds == null  || this.lastPlane < 0  || this.lastPlane >= this.ifds.size$() ) return null;
var lastIFD=this.ifds.get$I((this.lastPlane|0));
var table=null;
try {
var bits=lastIFD.getBitsPerSample$();
var colorMap=lastIFD.getIFDIntArray$I(320);
if (bits[0] <= 16 && bits[0] > 8 ) {
if (colorMap == null  || colorMap.length < 196608 ) {
if (this.lastPlane != 0) {
lastIFD=this.ifds.get$I(0);
colorMap=lastIFD.getIFDIntArray$I(320);
if (colorMap == null  || colorMap.length < 196608 ) return null;
} else return null;
}var table16=Clazz.array(Short.TYPE, [3, (colorMap.length/3|0)]);
var next=0;
for (var i=0; i < table16.length; i++) {
for (var j=0; j < table16[0].length; j++) {
table16[i][j]=((colorMap[next++] & 65535)|0);
}
}
table=Clazz.new_($I$(5,1).c$$HAA,[table16]);
} else if (bits[0] <= 8) {
if (colorMap == null ) {
if (this.lastPlane != 0) {
lastIFD=this.ifds.get$I(0);
colorMap=lastIFD.getIFDIntArray$I(320);
if (colorMap == null ) return null;
} else return null;
}var table8=Clazz.array(Byte.TYPE, [3, (colorMap.length/3|0)]);
var next=0;
for (var j=0; j < table8.length; j++) {
for (var i=0; i < table8[0].length; i++) {
if (colorMap[next] > 255) {
table8[j][i]=((((colorMap[next++] >> 8) & 255)|0)|0);
} else {
table8[j][i]=(((colorMap[next++] & 255)|0)|0);
}}
}
table=Clazz.new_($I$(6,1).c$$BAA,[table8]);
}} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().error$O$Throwable("Failed to get IFD int array", e);
} else {
throw e;
}
}
return table;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MinimalTIFFFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
return Clazz.new_($I$(7,1).c$$org_scijava_Context$org_scijava_io_handle_DataHandle,[this.getContext$(), stream]).isValidHeader$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MinimalTIFFFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$$formatService','io.scif.services.FormatService']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
var tiffParser=Clazz.new_($I$(7,1).c$$org_scijava_Context$org_scijava_io_handle_DataHandle,[this.getContext$(), stream]);
tiffParser.setDoCaching$Z(false);
tiffParser.setUse64BitOffsets$Z(meta.isUse64Bit$());
meta.setTiffParser$io_scif_formats_tiff_TiffParser(tiffParser);
var littleEndian=tiffParser.checkHeader$();
if (littleEndian == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid TIFF file"]);
}this.getSource$().setOrder$org_scijava_io_handle_DataHandle_ByteOrder(littleEndian ? $I$(8).LITTLE_ENDIAN : $I$(8).BIG_ENDIAN);
this.log$().debug$O("Reading IFDs");
var allIFDs=tiffParser.getIFDs$();
if (allIFDs == null  || allIFDs.isEmpty$() ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["No IFDs found"]);
}var ifds=Clazz.new_($I$(9,1));
var thumbnailIFDs=Clazz.new_($I$(9,1));
meta.setIfds$io_scif_formats_tiff_IFDList(ifds);
meta.setThumbnailIFDs$io_scif_formats_tiff_IFDList(thumbnailIFDs);
for (var ifd, $ifd = allIFDs.iterator$(); $ifd.hasNext$()&&((ifd=($ifd.next$())),1);) {
var subfile=ifd.getIFDValue$I(254);
var subfileType=subfile == null  ? 0 : subfile.intValue$();
if (subfileType != 1 || allIFDs.size$() <= 1 ) {
ifds.add$TE(ifd);
} else if (subfileType == 1) {
thumbnailIFDs.add$TE(ifd);
}}
this.log$().debug$O("Populating metadata");
tiffParser.setAssumeEqualStrips$Z(meta.isEqualStrips$());
for (var ifd, $ifd = ifds.iterator$(); $ifd.hasNext$()&&((ifd=($ifd.next$())),1);) {
tiffParser.fillInIFD$io_scif_formats_tiff_IFD(ifd);
if (ifd.getCompression$() === $I$(10).JPEG_2000  || ifd.getCompression$() === $I$(10).JPEG_2000_LOSSY  ) {
this.log$().debug$O("Found IFD with JPEG 2000 compression");
var stripOffsets=ifd.getStripOffsets$();
var stripByteCounts=ifd.getStripByteCounts$();
if (stripOffsets.length > 0) {
var stripOffset=stripOffsets[0];
stream.seek$J(stripOffset);
var jp2kFormat=this.$$formatService.getFormatFromClass$Class(Clazz.getClass($I$(11)));
var jp2kMeta=jp2kFormat.createMetadata$();
(jp2kFormat.createParser$()).parse$org_scijava_io_handle_DataHandle$io_scif_formats_JPEG2000Format_Metadata$J(stream, jp2kMeta, stripOffset + stripByteCounts[0]);
meta.setResolutionLevels$Integer(jp2kMeta.getResolutionLevels$());
if (meta.getResolutionLevels$() != null  && !meta.isNoSubresolutions$() ) {
if (this.log$().isDebug$()) {
this.log$().debug$O(String.format$S$OA("Original resolution IFD Levels %d %dx%d Tile %dx%d", [meta.getResolutionLevels$(), new Long(ifd.getImageWidth$()), new Long(ifd.getImageLength$()), new Long(ifd.getTileWidth$()), new Long(ifd.getTileLength$())]));
}var theseSubResolutionIFDs=Clazz.new_($I$(9,1));
meta.getSubResolutionIFDs$().add$TE(theseSubResolutionIFDs);
for (var level=1; level <= (meta.getResolutionLevels$()).valueOf() ; level++) {
var newIFD=Clazz.new_($I$(12,1).c$$io_scif_formats_tiff_IFD$org_scijava_log_LogService,[ifd, this.log$()]);
var imageWidth=ifd.getImageWidth$();
var imageLength=ifd.getImageLength$();
var tileWidth=ifd.getTileWidth$();
var tileLength=ifd.getTileLength$();
var factor=(Math.pow(2, level)|0);
var newTileWidth=Math.round(tileWidth / factor);
newTileWidth=newTileWidth < 1 ? 1 : newTileWidth;
var newTileLength=Math.round(tileLength / factor);
newTileLength=newTileLength < 1 ? 1 : newTileLength;
var evenTilesPerRow=(imageWidth/tileWidth|0);
var evenTilesPerColumn=(imageLength/tileLength|0);
var remainingWidth=((imageWidth - (evenTilesPerRow * tileWidth))) / factor;
remainingWidth=remainingWidth < 1  ? Math.ceil(remainingWidth) : Math.round(remainingWidth);
var remainingLength=((imageLength - (evenTilesPerColumn * tileLength))) / factor;
remainingLength=remainingLength < 1  ? Math.ceil(remainingLength) : Math.round(remainingLength);
var newImageWidth=(((evenTilesPerRow * newTileWidth) + remainingWidth)|0);
var newImageLength=(((evenTilesPerColumn * newTileLength) + remainingLength)|0);
var resolutionLevel=Math.abs(level - (meta.getResolutionLevels$()).valueOf());
newIFD.put$TK$TV(new Integer(256), new Long(newImageWidth));
newIFD.put$TK$TV(new Integer(257), new Long(newImageLength));
newIFD.put$TK$TV(new Integer(322), new Long(newTileWidth));
newIFD.put$TK$TV(new Integer(323), new Long(newTileLength));
if (this.log$().isDebug$()) {
this.log$().debug$O(String.format$S$OA("Added JPEG 2000 sub-resolution IFD Level %d %dx%d Tile %dx%d", [new Integer(resolutionLevel), new Long(newImageWidth), new Long(newImageLength), new Long(newTileWidth), new Long(newTileLength)]));
}theseSubResolutionIFDs.add$TE(newIFD);
}
}} else {
this.log$().warn$O("IFD has no strip offsets!");
}}}
});
C$.$getAnn$ = function(){ return [
[['$$formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MinimalTIFFFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
plane.setColorTable$net_imglib2_display_ColorTable(meta.getColorTable$I$J(imageIndex, planeIndex));
var buf=plane.getBytes$();
var ifds=meta.getIfds$();
var tiffParser=meta.getTiffParser$();
var xIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).X);
var yIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).Y);
var x=(bounds.min$I(xIndex)|0);
var y=(bounds.min$I(yIndex)|0);
var w=(bounds.dimension$I(xIndex)|0);
var h=(bounds.dimension$I(yIndex)|0);
$I$(13).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
var firstIFD=ifds.get$I(0);
meta.setLastPlane$J(imageIndex);
var ifd=ifds.get$I(imageIndex);
if ((firstIFD.getCompression$() === $I$(10).JPEG_2000  || firstIFD.getCompression$() === $I$(10).JPEG_2000_LOSSY  ) && meta.getResolutionLevels$() != null  ) {
this.setResolutionLevel$io_scif_formats_tiff_IFD(ifd);
}tiffParser.getSamples$io_scif_formats_tiff_IFD$BA$I$I$J$J(ifd, buf, x, y, w, h);
var float16=meta.get$I(imageIndex).getPixelType$() == 6 && firstIFD.getBitsPerSample$()[0] == 16 ;
var float24=meta.get$I(imageIndex).getPixelType$() == 6 && firstIFD.getBitsPerSample$()[0] == 24 ;
if (float16 || float24 ) {
var nPixels=w * h * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0) ;
var nBytes=float16 ? 2 : 3;
var mantissaBits=float16 ? 10 : 16;
var exponentBits=float16 ? 5 : 7;
var maxExponent=(Math.pow(2, exponentBits)|0) - 1;
var bits=(nBytes * 8) - 1;
var newBuf=Clazz.array(Byte.TYPE, [buf.length]);
for (var i=0; i < nPixels; i++) {
var v=$I$(14).toInt$BA$I$I$Z(buf, i * nBytes, nBytes, meta.get$I(imageIndex).isLittleEndian$());
var sign=v >> bits;
var exponent=(v >> mantissaBits) & ((Math.pow(2, exponentBits) - 1)|0);
var mantissa=v & ((Math.pow(2, mantissaBits) - 1)|0);
if (exponent == 0) {
if (mantissa != 0) {
while ((mantissa & (Math.pow(2, mantissaBits)|0)) == 0){
mantissa<<=1;
exponent--;
}
exponent++;
mantissa&=((Math.pow(2, mantissaBits) - 1)|0);
exponent=(exponent+(127 - (Math.pow(2, exponentBits - 1) - 1))|0);
}} else if (exponent == maxExponent) {
exponent=255;
} else {
exponent=(exponent+(127 - (Math.pow(2, exponentBits - 1) - 1))|0);
}mantissa<<=(23 - mantissaBits);
var value=(sign << 31) | (exponent << 23) | mantissa ;
$I$(14).unpack$J$BA$I$I$Z(value, newBuf, i * 4, 4, meta.get$I(imageIndex).isLittleEndian$());
}
System.arraycopy$O$I$O$I$I(newBuf, 0, buf, 0, newBuf.length);
}return plane;
});

Clazz.newMeth(C$, 'getOptimalTileWidth$I', function (imageIndex) {
$I$(13).assertId$O$Z$I(this.getHandle$().get$().getName$(), true, 1);
try {
return this.getMetadata$().getIfds$().get$I(0).getTileWidth$();
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().debug$O$Throwable("Could not retrieve tile width", e);
} else {
throw e;
}
}
return C$.superclazz.prototype.getOptimalTileWidth$I.apply(this, [imageIndex]);
});

Clazz.newMeth(C$, 'getOptimalTileHeight$I', function (imageIndex) {
$I$(13).assertId$O$Z$I(this.getHandle$().get$().getName$(), true, 1);
try {
return this.getMetadata$().getIfds$().get$I(0).getTileLength$();
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().debug$O$Throwable("Could not retrieve tile height", e);
} else {
throw e;
}
}
return C$.superclazz.prototype.getOptimalTileHeight$I.apply(this, [imageIndex]);
});

Clazz.newMeth(C$, 'setResolutionLevel$io_scif_formats_tiff_IFD', function (ifd) {
var meta=this.getMetadata$();
var j2kCodecOptions=meta.getJ2kCodecOptions$();
j2kCodecOptions.resolution=new Integer(0);
this.log$().debug$O("Using JPEG 2000 resolution level " + j2kCodecOptions.resolution);
meta.getTiffParser$().setCodecOptions$io_scif_codec_CodecOptions(j2kCodecOptions);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
