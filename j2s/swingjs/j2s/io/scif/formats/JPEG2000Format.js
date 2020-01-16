(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},I$=[[0,['io.scif.formats.JPEG2000Format','.Index'],'net.imagej.axis.Axes','io.scif.DefaultImageMetadata','io.scif.util.FormatTools','net.imglib2.display.ColorTable8','net.imglib2.display.ColorTable16','io.scif.codec.JPEG2000BoxType','java.util.ArrayList',['org.scijava.io.handle.DataHandle','.ByteOrder'],'org.scijava.util.Bytes','io.scif.codec.JPEG2000SegmentMarker','org.scijava.io.location.BytesLocation','io.scif.codec.JPEG2000CodecOptions','io.scif.codec.JPEG2000Codec','io.scif.codec.CompressionType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JPEG2000Format", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['Writer',9],['Index',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["jp2", "j2k", "jpf"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.JPEG2000Format',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="JPEG-2000" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEG2000Format, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastIndex=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['L',['pixelsOffset'],'O',['lastIndex','io.scif.formats.JPEG2000Format.Index','lastIndexBytes','byte[]','resolutionLevels','Integer','lut','int[][]','byteLut','byte[][]','shortLut','short[][]']]]

Clazz.newMeth(C$, 'getPixelsOffset$', function () {
return this.pixelsOffset;
});

Clazz.newMeth(C$, 'setPixelsOffset$J', function (pixelsOffset) {
this.pixelsOffset=pixelsOffset;
});

Clazz.newMeth(C$, 'getLastIndex$', function () {
if (this.lastIndex == null ) this.lastIndex=Clazz.new_($I$(1,1));
return this.lastIndex;
});

Clazz.newMeth(C$, 'setLastIndex$I$J', function (imageIndex, planeIndex) {
if (this.lastIndex == null ) this.lastIndex=Clazz.new_($I$(1,1).c$$I$J,[imageIndex, planeIndex]);
 else {
this.lastIndex.setImageIndex$I(imageIndex);
this.lastIndex.setPlaneIndex$J(imageIndex);
}});

Clazz.newMeth(C$, 'getLastIndexBytes$', function () {
return this.lastIndexBytes;
});

Clazz.newMeth(C$, 'setLastIndexBytes$BA', function (lastIndexBytes) {
this.lastIndexBytes=lastIndexBytes;
});

Clazz.newMeth(C$, 'getResolutionLevels$', function () {
return this.resolutionLevels;
});

Clazz.newMeth(C$, 'setResolutionLevels$Integer', function (resolutionLevels) {
this.resolutionLevels=resolutionLevels;
});

Clazz.newMeth(C$, 'getLut$', function () {
return this.lut;
});

Clazz.newMeth(C$, 'setLut$IAA', function (lut) {
this.lut=lut;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(2).CHANNEL, $I$(2).X, $I$(2).Y]);
iMeta.setIndexed$Z(!(iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) > 1) && this.getLut$() != null  );
iMeta.setPlanarAxisCount$I(3);
if (this.getResolutionLevels$() != null ) {
var imageCount=(this.resolutionLevels).valueOf() + 1;
for (var i=1; i < imageCount; i++) {
var ms=Clazz.new_($I$(3,1).c$$io_scif_ImageMetadata,[iMeta]);
this.add$io_scif_ImageMetadata(ms);
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, (iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).X)/2|0));
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, (iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).Y)/2|0));
ms.setThumbnail$Z(true);
}
}});

Clazz.newMeth(C$, 'getImageCount$', function () {
return 1;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.resolutionLevels=null;
this.lut=null;
this.byteLut=null;
this.shortLut=null;
this.pixelsOffset=0;
this.lastIndex=null;
this.lastIndexBytes=null;
}});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
if (this.lut == null ) return null;
if ($I$(4).getBytesPerPixel$I(this.get$I(0).getPixelType$()) == 1) {
if (this.byteLut == null ) {
this.byteLut=Clazz.array(Byte.TYPE, [this.lut.length, this.lut[0].length]);
for (var i=0; i < this.lut.length; i++) {
for (var j=0; j < this.lut[i].length; j++) {
this.byteLut[i][j]=(((this.lut[i][j] & 255)|0)|0);
}
}
}return Clazz.new_($I$(5,1).c$$BAA,[this.byteLut]);
} else if ($I$(4).getBytesPerPixel$I(this.get$I(0).getPixelType$()) == 1) {
if (this.shortLut == null ) {
this.shortLut=Clazz.array(Short.TYPE, [this.lut.length, this.lut[0].length]);
for (var i=0; i < this.lut.length; i++) {
for (var j=0; j < this.lut[i].length; j++) {
this.shortLut[i][j]=((this.lut[i][j] & 65535)|0);
}
}
}return Clazz.new_($I$(6,1).c$$HAA,[this.shortLut]);
}return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEG2000Format, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (handle) {
var blockLen=40;
if (!$I$(4).validStream$org_scijava_io_handle_DataHandle$I$Z(handle, 40, false)) return false;
var validStart=(handle.readShort$() & 65535) == 65359;
if (!validStart) {
handle.skipBytes$I(2);
validStart=handle.readInt$() == $I$(7).SIGNATURE.getCode$();
if (validStart) {
handle.skipBytes$I(12);
validStart=!handle.readString$I(4).equals$O("jpx ");
}}handle.seek$J(handle.length$() - 2);
var validEnd=(handle.readShort$() & 65535) == 65497;
return validStart && validEnd ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEG2000Format, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isRawCodestream=false;
}, 1);

C$.$fields$=[['Z',['isRawCodestream'],'L',['codestreamOffset','maximumReadOffset'],'O',['headerSizeX','Integer','+headerSizeY','headerSizeC','Short','headerPixelType','Integer','+codestreamSizeX','+codestreamSizeY','codestreamSizeC','Short','codestreamPixelType','Integer','comments','java.util.ArrayList']]]

Clazz.newMeth(C$, ['parse$org_scijava_io_handle_DataHandle$io_scif_formats_JPEG2000Format_Metadata$J','parse$org_scijava_io_handle_DataHandle$TM$J'], function (stream, meta, maximumReadOffset) {
meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
var sizeX;
var sizeY;
var sizeC;
var pixelType;
this.maximumReadOffset=maximumReadOffset;
this.comments=Clazz.new_(1,{E:"String"},$I$(8,1));
var isLittleEndian=stream.isLittleEndian$();
try {
p$1.parseBoxes$io_scif_formats_JPEG2000Format_Metadata.apply(this, [meta]);
} finally {
stream.setOrder$org_scijava_io_handle_DataHandle_ByteOrder(isLittleEndian ? $I$(9).LITTLE_ENDIAN : $I$(9).BIG_ENDIAN);
}
if (this.isRawCodestream$()) {
this.log$().info$O("Codestream is raw, using codestream dimensions.");
sizeX=(this.getCodestreamSizeX$()).valueOf();
sizeY=(this.getCodestreamSizeY$()).valueOf();
sizeC=(this.getCodestreamSizeC$()).valueOf();
pixelType=(this.getCodestreamPixelType$()).valueOf();
} else {
this.log$().info$O("Codestream is JP2 boxed, using header dimensions.");
sizeX=(this.getHeaderSizeX$()).valueOf();
sizeY=(this.getHeaderSizeY$()).valueOf();
sizeC=(this.getHeaderSizeC$()).valueOf();
pixelType=(this.getHeaderPixelType$()).valueOf();
}iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, sizeX);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, sizeY);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, sizeC);
iMeta.setPixelType$I(pixelType);
meta.setPixelsOffset$J(this.getCodestreamOffset$());
iMeta.setLittleEndian$Z(false);
for (var comment, $comment = this.getComments$().iterator$(); $comment.hasNext$()&&((comment=($comment.next$())),1);) {
var equal=comment.indexOf$S("=");
if (equal >= 0) {
var key=comment.substring$I$I(0, equal);
var value=comment.substring$I(equal + 1);
meta.getTable$().put$TK$TV(key, value);
} else {
meta.getTable$().put$TK$TV("Comment", comment);
}}
});

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_JPEG2000Format_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
this.parse$org_scijava_io_handle_DataHandle$io_scif_formats_JPEG2000Format_Metadata$J(stream, meta, stream.length$());
});

Clazz.newMeth(C$, 'getCodestreamOffset$', function () {
return this.codestreamOffset;
});

Clazz.newMeth(C$, 'getComments$', function () {
return this.comments;
});

Clazz.newMeth(C$, 'parseBoxes$io_scif_formats_JPEG2000Format_Metadata', function (meta) {
var originalPos=this.getSource$().offset$();
var nextPos=0;
var pos=originalPos;
this.log$().trace$O("Parsing JPEG 2000 boxes at " + pos);
var length=0;
var boxCode;
var boxType;
while (pos < this.maximumReadOffset){
pos=this.getSource$().offset$();
length=this.getSource$().readInt$();
boxCode=this.getSource$().readInt$();
boxType=$I$(7).get$I(boxCode);
if (boxType === $I$(7).SIGNATURE_WRONG_ENDIANNESS ) {
this.log$().trace$O("Swapping endianness during box parsing.");
this.getSource$().setOrder$org_scijava_io_handle_DataHandle_ByteOrder(this.getSource$().isLittleEndian$() ? $I$(9).BIG_ENDIAN : $I$(9).LITTLE_ENDIAN);
length=$I$(10).swap$I(length);
}nextPos=pos + length;
if (length >= 8) {
length-=8;
}if (boxType == null ) {
this.log$().warn$O("Unknown JPEG 2000 box 0x" + Integer.toHexString$I(boxCode) + " at " + pos );
if (pos == originalPos) {
this.getSource$().seek$J(originalPos);
if ($I$(11).get$I(this.getSource$().readUnsignedShort$()) != null ) {
this.log$().info$O("File is a raw codestream not a JP2.");
this.isRawCodestream=true;
this.getSource$().seek$J(originalPos);
p$1.parseContiguousCodestream$io_scif_formats_JPEG2000Format_Metadata$J.apply(this, [meta, this.getSource$().length$()]);
}}} else {
this.log$().trace$O("Found JPEG 2000 '" + boxType.getName$() + "' box at " + pos );
switch (boxType) {
case $I$(7).CONTIGUOUS_CODESTREAM:
{
try {
p$1.parseContiguousCodestream$io_scif_formats_JPEG2000Format_Metadata$J.apply(this, [meta, length == 0 ? this.getSource$().length$() : length]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.log$().warn$O$Throwable("Could not parse contiguous codestream.", e);
} else {
throw e;
}
}
break;
}case $I$(7).HEADER:
{
this.getSource$().skipBytes$I(4);
var s=this.getSource$().readString$I(4);
if (s.equals$O("ihdr")) {
this.headerSizeY=new Integer(this.getSource$().readInt$());
this.headerSizeX=new Integer(this.getSource$().readInt$());
this.headerSizeC=new Short(this.getSource$().readShort$());
var type=this.getSource$().read$();
this.getSource$().skipBytes$I(3);
this.headerPixelType=new Integer(p$1.convertPixelType$I.apply(this, [type]));
}p$1.parseBoxes$io_scif_formats_JPEG2000Format_Metadata.apply(this, [meta]);
break;
}case $I$(7).PALETTE:
var nEntries=this.getSource$().readShort$();
var nColumns=this.getSource$().read$();
var bitDepths=Clazz.array(Integer.TYPE, [nColumns]);
for (var i=0; i < bitDepths.length; i++) {
bitDepths[i]=this.getSource$().read$() & 127;
while ((bitDepths[i] % 8) != 0){
bitDepths[i]++;
}
}
var lut=Clazz.array(Integer.TYPE, [nColumns, nEntries]);
for (var i=0; i < nColumns; i++) {
for (var j=0; j < lut[i].length; j++) {
if (bitDepths[i] == 8) {
lut[i][j]=this.getSource$().read$();
} else if (bitDepths[i] == 16) {
lut[i][j]=this.getSource$().readShort$();
}}
}
meta.setLut$IAA(lut);
break;
default:
break;
}
}if (nextPos < 0 || nextPos >= this.maximumReadOffset  || length == 0 ) {
this.log$().trace$O("Exiting box parser loop.");
break;
}this.log$().trace$O("Seeking to next box at " + nextPos);
this.getSource$().seek$J(nextPos);
}
}, p$1);

Clazz.newMeth(C$, 'parseContiguousCodestream$io_scif_formats_JPEG2000Format_Metadata$J', function (meta, length) {
if (this.codestreamOffset == 0) {
this.codestreamOffset=this.getSource$().offset$();
}var segmentMarker;
var segmentMarkerCode=0;
var segmentLength=0;
var pos=this.getSource$().offset$();
var nextPos=0;
this.log$().trace$O("Parsing JPEG 2000 contiguous codestream of length " + length + " at " + pos );
var maximumReadOffset=pos + length;
var terminate=false;
while (pos < maximumReadOffset && !terminate ){
pos=this.getSource$().offset$();
segmentMarkerCode=this.getSource$().readUnsignedShort$();
segmentMarker=$I$(11).get$I(segmentMarkerCode);
if (segmentMarker === $I$(11).SOC_WRONG_ENDIANNESS ) {
this.log$().trace$O("Swapping endianness during segment marker parsing.");
this.getSource$().setOrder$org_scijava_io_handle_DataHandle_ByteOrder(this.getSource$().isLittleEndian$() ? $I$(9).BIG_ENDIAN : $I$(9).LITTLE_ENDIAN);
segmentMarkerCode=$I$(11).SOC.getCode$();
segmentMarker=$I$(11).SOC;
}if (segmentMarker === $I$(11).SOC  || segmentMarker === $I$(11).SOD   || segmentMarker === $I$(11).EPH   || segmentMarker === $I$(11).EOC   || (segmentMarkerCode >= $I$(11).RESERVED_DELIMITER_MARKER_MIN.getCode$() && segmentMarkerCode <= $I$(11).RESERVED_DELIMITER_MARKER_MAX.getCode$() ) ) {
segmentLength=0;
} else {
segmentLength=this.getSource$().readUnsignedShort$();
}nextPos=pos + segmentLength + 2 ;
if (segmentMarker == null ) {
this.log$().warn$O("Unknown JPEG 2000 segment marker 0x" + Integer.toHexString$I(segmentMarkerCode) + " at " + pos );
} else {
if (this.log$().isTrace$()) {
this.log$().trace$O(String.format$S$OA("Found JPEG 2000 segment marker \'%s\' of length %d at %d", [segmentMarker.getName$(), new Integer(segmentLength), new Long(pos)]));
}switch (segmentMarker) {
case $I$(11).SOT:
case $I$(11).SOD:
case $I$(11).EOC:
terminate=true;
break;
case $I$(11).SIZ:
{
this.getSource$().skipBytes$I(2);
this.codestreamSizeX=new Integer(this.getSource$().readInt$());
this.log$().trace$O("Read reference grid width " + this.codestreamSizeX + " at " + this.getSource$().offset$() );
this.codestreamSizeY=new Integer(this.getSource$().readInt$());
this.log$().trace$O("Read reference grid height " + this.codestreamSizeY + " at " + this.getSource$().offset$() );
this.getSource$().skipBytes$I(24);
this.codestreamSizeC=new Short(this.getSource$().readShort$());
this.log$().trace$O("Read total components " + this.codestreamSizeC + " at " + this.getSource$().offset$() );
var type=this.getSource$().read$();
this.getSource$().skipBytes$I(3);
this.codestreamPixelType=new Integer(p$1.convertPixelType$I.apply(this, [type]));
this.log$().trace$O("Read codestream pixel type " + this.codestreamPixelType + " at " + this.getSource$().offset$() );
break;
}case $I$(11).COD:
{
this.getSource$().skipBytes$I(5);
meta.setResolutionLevels$Integer(new Integer(this.getSource$().readUnsignedByte$()));
this.log$().trace$O("Found number of resolution levels " + meta.getResolutionLevels$() + " at " + this.getSource$().offset$() );
break;
}case $I$(11).COM:
this.getSource$().skipBytes$I(2);
var comment=this.getSource$().readString$I(segmentLength - 4);
this.comments.add$TE(comment);
break;
default:
break;
}
}if (nextPos < 0 || nextPos >= maximumReadOffset  || terminate ) {
this.log$().trace$O("Exiting segment marker parse loop.");
break;
}this.log$().trace$O("Seeking to next segment marker at " + nextPos);
this.getSource$().seek$J(nextPos);
}
}, p$1);

Clazz.newMeth(C$, 'isRawCodestream$', function () {
return this.isRawCodestream;
});

Clazz.newMeth(C$, 'getHeaderSizeX$', function () {
return this.headerSizeX;
});

Clazz.newMeth(C$, 'getHeaderSizeY$', function () {
return this.headerSizeY;
});

Clazz.newMeth(C$, 'getHeaderSizeC$', function () {
return this.headerSizeC;
});

Clazz.newMeth(C$, 'getHeaderPixelType$', function () {
return this.headerPixelType;
});

Clazz.newMeth(C$, 'getCodestreamSizeX$', function () {
return this.codestreamSizeX;
});

Clazz.newMeth(C$, 'getCodestreamSizeY$', function () {
return this.codestreamSizeY;
});

Clazz.newMeth(C$, 'getCodestreamSizeC$', function () {
return this.codestreamSizeC;
});

Clazz.newMeth(C$, 'getCodestreamPixelType$', function () {
return this.codestreamPixelType;
});

Clazz.newMeth(C$, 'convertPixelType$I', function (type) {
var bits=(type & 127) + 1;
var isSigned=((type & 128) >> 7) == 1;
if (bits <= 8) {
return isSigned ? 0 : 1;
} else if (bits <= 16) {
return isSigned ? 2 : 3;
} else if (bits <= 32) {
return isSigned ? 4 : 5;
}return 1;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEG2000Format, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService','codecService','io.scif.codec.CodecService']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var buf=plane.getBytes$();
var meta=this.getMetadata$();
plane.setColorTable$net_imglib2_display_ColorTable(meta.getColorTable$I$J(imageIndex, planeIndex));
$I$(4).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
if (meta.getLastIndex$().getImageIndex$() == imageIndex && meta.getLastIndex$().getPlaneIndex$() == planeIndex  && meta.getLastIndexBytes$() != null  ) {
var s=this.dataHandleService.create$TD(Clazz.new_($I$(12,1).c$$BA,[meta.getLastIndexBytes$()]));
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(s, imageIndex, bounds, plane);
s.close$();
return plane;
}var options=$I$(13).getDefaultOptions$();
options.interleaved=meta.get$I(imageIndex).getInterleavedAxisCount$() > 0;
options.littleEndian=meta.get$I(imageIndex).isLittleEndian$();
if (meta.getResolutionLevels$() != null ) {
options.resolution=new Integer(Math.abs(imageIndex - (meta.getResolutionLevels$()).valueOf()));
} else if (meta.getAll$().size$() > 1) {
options.resolution=new Integer(imageIndex);
}this.getHandle$().seek$J(meta.getPixelsOffset$());
var codec=this.codecService.getCodec$Class(Clazz.getClass($I$(14)));
var lastIndexPlane=codec.decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions(this.getHandle$(), options);
meta.setLastIndexBytes$BA(lastIndexPlane);
var s=this.dataHandleService.create$TD(Clazz.new_($I$(12,1).c$$BA,[meta.getLastIndexBytes$()]));
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(s, imageIndex, bounds, plane);
s.close$();
meta.setLastIndex$I$J(imageIndex, planeIndex);
return plane;
});
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']],
  [['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEG2000Format, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['codecService','io.scif.codec.CodecService']]]

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, -1, [$I$(15).J2K_LOSSY.getCompression$(), $I$(15).J2K.getCompression$()]);
});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
this.getHandle$().write$BA(this.compressBuffer$I$J$io_scif_Plane$net_imglib2_Interval(imageIndex, planeIndex, plane, bounds));
});

Clazz.newMeth(C$, 'compressBuffer$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
var imageMeta=this.getMetadata$().get$I(imageIndex);
var buf=plane.getBytes$();
this.checkParams$I$J$BA$net_imglib2_Interval(imageIndex, planeIndex, buf, bounds);
var littleEndian=imageMeta.isLittleEndian$();
var bytesPerPixel=(imageMeta.getBitsPerPixel$()/8|0);
var nChannels=(imageMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0);
var options=this.getCodecOptions$();
if (options == null ) options=$I$(13).getDefaultOptions$();
options.width=(bounds.dimension$I(imageMeta.getAxisIndex$net_imagej_axis_AxisType($I$(2).X))|0);
options.height=(bounds.dimension$I(imageMeta.getAxisIndex$net_imagej_axis_AxisType($I$(2).Y))|0);
options.channels=nChannels;
options.bitsPerSample=bytesPerPixel * 8;
options.littleEndian=littleEndian;
options.interleaved=plane.getImageMetadata$().getInterleavedAxisCount$() > 0;
options.lossless=this.getCompression$() == null  || this.getCompression$().equals$O($I$(15).J2K.getCompression$()) ;
options.colorModel=this.getColorModel$();
var codec=this.codecService.getCodec$Class(Clazz.getClass($I$(14)));
return codec.compress$BA$io_scif_codec_CodecOptions(buf, options);
});

Clazz.newMeth(C$, 'canDoStacks$', function () {
return false;
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5]);
});
C$.$getAnn$ = function(){ return [
[['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEG2000Format, "Index", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['imageIndex'],'L',['planeIndex']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$J.apply(this, [-1, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$I$J', function (image, plane) {
;C$.$init$.apply(this);
this.imageIndex=image;
this.planeIndex=plane;
}, 1);

Clazz.newMeth(C$, 'setImageIndex$I', function (image) {
this.imageIndex=image;
});

Clazz.newMeth(C$, 'setPlaneIndex$J', function (plane) {
this.planeIndex=plane;
});

Clazz.newMeth(C$, 'getImageIndex$', function () {
return this.imageIndex;
});

Clazz.newMeth(C$, 'getPlaneIndex$', function () {
return this.planeIndex;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
