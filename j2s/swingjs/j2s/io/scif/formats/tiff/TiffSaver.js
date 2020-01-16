(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),p$1={},I$=[[0,'org.scijava.io.location.FileLocation','java.util.Objects','io.scif.SCIFIO','org.scijava.Context','io.scif.util.FormatTools','java.io.ByteArrayOutputStream','java.io.DataOutputStream','io.scif.formats.tiff.TiffParser','java.util.Arrays','java.util.ArrayList','java.util.TreeSet','org.scijava.io.location.BytesLocation','org.scijava.io.handle.DataHandles','io.scif.formats.tiff.TiffRational','io.scif.formats.tiff.IFDType','io.scif.formats.tiff.IFD','io.scif.formats.tiff.TiffCompression','io.scif.formats.tiff.PhotoInterp']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TiffSaver", null, 'org.scijava.AbstractContextual');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bigTiff=false;
this.sequentialWrite=false;
}, 1);

C$.$fields$=[['Z',['bigTiff','sequentialWrite'],'O',['out','org.scijava.io.handle.DataHandle','loc','org.scijava.io.location.Location','bytes','org.scijava.io.location.BytesLocation','options','io.scif.codec.CodecOptions','scifio','io.scif.SCIFIO','log','org.scijava.log.LogService','dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$S', function (ctx, filename) {
C$.c$$org_scijava_Context$org_scijava_io_location_Location.apply(this, [ctx, Clazz.new_($I$(1,1).c$$S,[filename])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_io_location_Location', function (ctx, loc) {
Clazz.super_(C$, this);
$I$(2).requireNonNull$TT(loc);
$I$(2).requireNonNull$TT(ctx);
this.setContext$org_scijava_Context(ctx);
this.loc=loc;
this.out=this.dataHandleService.create$TD(loc);
this.scifio=Clazz.new_($I$(3,1).c$$org_scijava_Context,[ctx]);
this.log=this.scifio.log$();
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_io_handle_DataHandle', function (ctx, out) {
Clazz.super_(C$, this);
if (out == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Output stream expected to be not-null"]);
}this.out=out;
this.loc=out.get$();
this.setContext$org_scijava_Context(ctx);
this.scifio=Clazz.new_($I$(3,1).c$$org_scijava_Context,[ctx]);
this.log=this.scifio.log$();
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle$org_scijava_io_location_BytesLocation', function (out, bytes) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(Clazz.new_($I$(4,1)));
if (out == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Output stream expected to be not-null"]);
}if (bytes == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bytes expected to be not null"]);
}this.out=out;
this.bytes=bytes;
}, 1);

Clazz.newMeth(C$, 'setWritingSequentially$Z', function (sequential) {
this.sequentialWrite=sequential;
});

Clazz.newMeth(C$, 'getStream$', function () {
return this.out;
});

Clazz.newMeth(C$, 'setLittleEndian$Z', function (littleEndian) {
this.out.setLittleEndian$Z(littleEndian);
});

Clazz.newMeth(C$, 'setBigTiff$Z', function (bigTiff) {
this.bigTiff=bigTiff;
});

Clazz.newMeth(C$, 'isLittleEndian$', function () {
return this.out.isLittleEndian$();
});

Clazz.newMeth(C$, 'isBigTiff$', function () {
return this.bigTiff;
});

Clazz.newMeth(C$, 'setCodecOptions$io_scif_codec_CodecOptions', function (options) {
this.options=options;
});

Clazz.newMeth(C$, 'writeHeader$', function () {
this.out.seek$J(0);
if (this.isLittleEndian$()) {
this.out.writeByte$I(73);
this.out.writeByte$I(73);
} else {
this.out.writeByte$I(77);
this.out.writeByte$I(77);
}if (this.bigTiff) {
this.out.writeShort$I(43);
} else this.out.writeShort$I(42);
if (this.bigTiff) {
this.out.writeShort$I(8);
this.out.writeShort$I(0);
this.out.writeLong$J(16);
} else {
this.out.writeInt$I(8);
}});

Clazz.newMeth(C$, 'writeImage$BAA$io_scif_formats_tiff_IFDList$I', function (buf, ifds, pixelType) {
if (ifds == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["IFD cannot be null"]);
}if (buf == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Image data cannot be null"]);
}for (var i=0; i < ifds.size$(); i++) {
if (i < buf.length) {
this.writeImage$BA$io_scif_formats_tiff_IFD$I$I$Z(buf[i], ifds.get$I(i), i, pixelType, i == ifds.size$() - 1);
}}
});

Clazz.newMeth(C$, 'writeImage$BA$io_scif_formats_tiff_IFD$I$I$Z', function (buf, ifd, no, pixelType, last) {
if (ifd == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["IFD cannot be null"]);
}var w=(ifd.getImageWidth$()|0);
var h=(ifd.getImageLength$()|0);
this.writeImage$BA$io_scif_formats_tiff_IFD$J$I$I$I$I$I$Z(buf, ifd, no, pixelType, 0, 0, w, h, last);
});

Clazz.newMeth(C$, 'writeImage$BA$io_scif_formats_tiff_IFD$J$I$I$I$I$I$Z', function (buf, ifd, planeIndex, pixelType, x, y, w, h, last) {
this.writeImage$BA$io_scif_formats_tiff_IFD$J$I$I$I$I$I$Z$Integer$Z(buf, ifd, planeIndex, pixelType, x, y, w, h, last, null, false);
});

Clazz.newMeth(C$, 'writeImage$BA$io_scif_formats_tiff_IFD$J$I$I$I$I$I$Z$Integer$Z', function (buf, ifd, planeIndex, pixelType, x, y, w, h, last, nChannels, copyDirectly) {
this.log.debug$O("Attempting to write image.");
if (buf == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Image data cannot be null"]);
}if (ifd == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["IFD cannot be null"]);
}var compression;
var tileWidth;
var tileHeight;
var nStrips;
var interleaved;
var stripBuf;
{
var bytesPerPixel=$I$(5).getBytesPerPixel$I(pixelType);
var blockSize=w * h * bytesPerPixel ;
if (nChannels == null ) {
nChannels=new Integer((buf.length/(w * h * bytesPerPixel )|0));
}interleaved=ifd.getPlanarConfiguration$() == 1;
p$1.makeValidIFD$io_scif_formats_tiff_IFD$I$I.apply(this, [ifd, pixelType, (nChannels).valueOf()]);
compression=ifd.getCompression$();
tileWidth=(ifd.getTileWidth$()|0);
tileHeight=(ifd.getTileLength$()|0);
var tilesPerRow=(ifd.getTilesPerRow$()|0);
var rowsPerStrip=(ifd.getRowsPerStrip$()[0]|0);
var stripSize=rowsPerStrip * tileWidth * bytesPerPixel ;
nStrips=(((w + tileWidth - 1)/tileWidth|0)) * (((h + tileHeight - 1)/tileHeight|0));
if (interleaved) stripSize=(stripSize*((nChannels).valueOf())|0);
 else nStrips=(nStrips*((nChannels).valueOf())|0);
stripBuf=Clazz.array($I$(6), [nStrips]);
var stripOut=Clazz.array($I$(7), [nStrips]);
for (var strip=0; strip < nStrips; strip++) {
stripBuf[strip]=Clazz.new_($I$(6,1).c$$I,[stripSize]);
stripOut[strip]=Clazz.new_($I$(7,1).c$$java_io_OutputStream,[stripBuf[strip]]);
}
var bps=ifd.getBitsPerSample$();
var off;
var effectiveStrips=!interleaved ? nStrips / (nChannels).valueOf() : nStrips;
if (effectiveStrips == 1 && copyDirectly ) {
stripOut[0].write$BA(buf);
} else {
for (var strip=0; strip < effectiveStrips; strip++) {
var xOffset=(strip % tilesPerRow) * tileWidth;
var yOffset=((strip/tilesPerRow|0)) * tileHeight;
for (var row=0; row < tileHeight; row++) {
for (var col=0; col < tileWidth; col++) {
var ndx=((row + yOffset) * w + col + xOffset) * bytesPerPixel;
for (var c=0; c < (nChannels).valueOf() ; c++) {
for (var n=0; n < (bps[c]/8|0); n++) {
if (interleaved) {
off=ndx * (nChannels).valueOf() + c * bytesPerPixel + n;
if (row >= h || col >= w ) {
stripOut[strip].writeByte$I(0);
} else {
stripOut[strip].writeByte$I(buf[off]);
}} else {
off=c * blockSize + ndx + n;
if (row >= h || col >= w ) {
stripOut[strip].writeByte$I(0);
} else {
stripOut[c * (nStrips / (nChannels).valueOf()) + strip].writeByte$I(buf[off]);
}}}
}
}
}
}
}}var strips=Clazz.array(Byte.TYPE, [nStrips, null]);
for (var strip=0; strip < nStrips; strip++) {
strips[strip]=stripBuf[strip].toByteArray$();
this.scifio.tiff$().difference$BA$io_scif_formats_tiff_IFD(strips[strip], ifd);
var codecOptions=compression.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions(ifd, this.options);
codecOptions.height=tileHeight;
codecOptions.width=tileWidth;
codecOptions.channels=interleaved ? (nChannels).valueOf() : 1;
strips[strip]=compression.compress$io_scif_codec_CodecService$BA$io_scif_codec_CodecOptions(this.scifio.codec$(), strips[strip], codecOptions);
if (this.log.isDebug$()) {
this.log.debug$O(String.format$S$OA("Compressed strip %d/%d length %d", [new Integer(strip + 1), new Integer(nStrips), new Integer(strips[strip].length)]));
}}
{
p$1.writeImageIFD$io_scif_formats_tiff_IFD$J$BAA$I$Z$I$I.apply(this, [ifd, planeIndex, strips, (nChannels).valueOf(), last, x, y]);
}});

Clazz.newMeth(C$, 'writeImageIFD$io_scif_formats_tiff_IFD$J$BAA$I$Z$I$I', function (ifd, planeIndex, strips, nChannels, last, x, y) {
this.log.debug$O("Attempting to write image IFD.");
var tilesPerRow=(ifd.getTilesPerRow$()|0);
var tilesPerColumn=(ifd.getTilesPerColumn$()|0);
var interleaved=ifd.getPlanarConfiguration$() == 1;
var isTiled=ifd.isTiled$();
if (!this.sequentialWrite) {
var $in=null;
if (this.loc != null ) {
$in=this.dataHandleService.create$TD(this.loc);
} else if (this.out != null ) {
$in=this.dataHandleService.create$TD(this.out.get$());
} else if (this.bytes != null ) {
$in=this.dataHandleService.create$TD(this.bytes);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Filename and bytes are null, cannot create new input stream!"]);
}try {
var parser=Clazz.new_($I$(8,1).c$$org_scijava_Context$org_scijava_io_handle_DataHandle,[this.getContext$(), $in]);
var ifdOffsets=parser.getIFDOffsets$();
this.log.debug$O("IFD offsets: " + $I$(9).toString$JA(ifdOffsets));
if (planeIndex < ifdOffsets.length) {
this.out.seek$J(ifdOffsets[(planeIndex|0)]);
this.log.debug$O("Reading IFD from " + ifdOffsets[(planeIndex|0)] + " in non-sequential write." );
ifd=parser.getIFD$J(ifdOffsets[(planeIndex|0)]);
}} finally {
$in.close$();
}
}var byteCounts=Clazz.new_(1,{E:"Long"},$I$(10,1));
var offsets=Clazz.new_(1,{E:"Long"},$I$(10,1));
var totalTiles=tilesPerRow * tilesPerColumn;
if (!interleaved) {
totalTiles*=nChannels;
}if (ifd.containsKey$O(new Integer(279)) || ifd.containsKey$O(new Integer(325)) ) {
var ifdByteCounts=isTiled ? ifd.getIFDLongArray$I(325) : ifd.getStripByteCounts$();
for (var stripByteCount, $stripByteCount = 0, $$stripByteCount = ifdByteCounts; $stripByteCount<$$stripByteCount.length&&((stripByteCount=($$stripByteCount[$stripByteCount])),1);$stripByteCount++) {
byteCounts.add$TE(new Long(stripByteCount));
}
} else {
while (byteCounts.size$() < totalTiles){
byteCounts.add$TE(new Long(0));
}
}var tileOrStripOffsetX=(x/(ifd.getTileWidth$()|0)|0);
var tileOrStripOffsetY=(y/(ifd.getTileLength$()|0)|0);
var firstOffset=(tileOrStripOffsetY * tilesPerRow) + tileOrStripOffsetX;
if (ifd.containsKey$O(new Integer(273)) || ifd.containsKey$O(new Integer(324)) ) {
var ifdOffsets=isTiled ? ifd.getIFDLongArray$I(324) : ifd.getStripOffsets$();
for (var ifdOffset, $ifdOffset = 0, $$ifdOffset = ifdOffsets; $ifdOffset<$$ifdOffset.length&&((ifdOffset=($$ifdOffset[$ifdOffset])),1);$ifdOffset++) {
offsets.add$TE(new Long(ifdOffset));
}
} else {
while (offsets.size$() < totalTiles){
offsets.add$TE(new Long(0));
}
}if (isTiled) {
ifd.putIFDValue$I$O(325, p$1.toPrimitiveArray$java_util_List.apply(this, [byteCounts]));
ifd.putIFDValue$I$O(324, p$1.toPrimitiveArray$java_util_List.apply(this, [offsets]));
} else {
ifd.putIFDValue$I$O(279, p$1.toPrimitiveArray$java_util_List.apply(this, [byteCounts]));
ifd.putIFDValue$I$O(273, p$1.toPrimitiveArray$java_util_List.apply(this, [offsets]));
}var fp=this.out.offset$();
this.writeIFD$io_scif_formats_tiff_IFD$J(ifd, 0);
for (var i=0; i < strips.length; i++) {
this.out.seek$J(this.out.length$());
var thisOffset=firstOffset + i;
offsets.set$I$TE(thisOffset, new Long(this.out.offset$()));
byteCounts.set$I$TE(thisOffset, new Long(strips[i].length));
if (this.log.isDebug$()) {
this.log.debug$O(String.format$S$OA("Writing tile/strip %d/%d size: %d offset: %d", [new Integer(thisOffset + 1), new Long(totalTiles), byteCounts.get$I(thisOffset), offsets.get$I(thisOffset)]));
}this.out.write$BA(strips[i]);
}
if (isTiled) {
ifd.putIFDValue$I$O(325, p$1.toPrimitiveArray$java_util_List.apply(this, [byteCounts]));
ifd.putIFDValue$I$O(324, p$1.toPrimitiveArray$java_util_List.apply(this, [offsets]));
} else {
ifd.putIFDValue$I$O(279, p$1.toPrimitiveArray$java_util_List.apply(this, [byteCounts]));
ifd.putIFDValue$I$O(273, p$1.toPrimitiveArray$java_util_List.apply(this, [offsets]));
}var endFP=this.out.offset$();
if (this.log.isDebug$()) {
this.log.debug$O("Offset before IFD write: " + this.out.offset$() + " Seeking to: " + fp );
}this.out.seek$J(fp);
if (this.log.isDebug$()) {
this.log.debug$O("Writing tile/strip offsets: " + $I$(9).toString$JA(p$1.toPrimitiveArray$java_util_List.apply(this, [offsets])));
this.log.debug$O("Writing tile/strip byte counts: " + $I$(9).toString$JA(p$1.toPrimitiveArray$java_util_List.apply(this, [byteCounts])));
}this.writeIFD$io_scif_formats_tiff_IFD$J(ifd, last ? 0 : endFP);
if (this.log.isDebug$()) {
this.log.debug$O("Offset after IFD write: " + this.out.offset$());
}}, p$1);

Clazz.newMeth(C$, 'writeIFD$io_scif_formats_tiff_IFD$J', function (ifd, nextOffset) {
var keys=Clazz.new_(1,{E:"Integer"},$I$(11,1).c$$java_util_Collection,[ifd.keySet$()]);
var keyCount=keys.size$();
if (ifd.containsKey$O(new Integer(0))) keyCount--;
if (ifd.containsKey$O(new Integer(1))) keyCount--;
if (ifd.containsKey$O(new Integer(3))) keyCount--;
var fp=this.out.offset$();
var bytesPerEntry=this.bigTiff ? 20 : 12;
var ifdBytes=(this.bigTiff ? 16 : 6) + bytesPerEntry * keyCount;
if (this.bigTiff) this.out.writeLong$J(keyCount);
 else this.out.writeShort$I(keyCount);
var extra=Clazz.new_($I$(12,1).c$$I,[0]);
try {
var extraHandle=this.dataHandleService.create$TD(extra);
/*try*/ {
for (var key, $key = keys.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (key.equals$O(new Integer(0)) || key.equals$O(new Integer(1)) || key.equals$O(new Integer(3))  ) continue;
var value=ifd.get$O(key);
this.writeIFDValue$org_scijava_io_handle_DataHandle$J$I$O(extraHandle, ifdBytes + fp, key.intValue$(), value);
}
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, nextOffset]);
var ifdLen=(extraHandle.offset$()|0);
extraHandle.seek$J(0);
$I$(13).copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$I(extraHandle, this.out, ifdLen);
}
}finally{/*res*/
try{extraHandle&&extraHandle.close$&&extraHandle.close$()}catch(_){}}
});

Clazz.newMeth(C$, 'writeIFDValue$org_scijava_io_handle_DataHandle$J$I$O', function (extraOut, offset, tag, value) {
extraOut.setLittleEndian$Z(this.isLittleEndian$());
if (Clazz.instanceOf(value, "java.lang.Short")) {
value=Clazz.array(Short.TYPE, -1, [(value).shortValue$()]);
} else if (Clazz.instanceOf(value, "java.lang.Integer")) {
value=Clazz.array(Integer.TYPE, -1, [(value).intValue$()]);
} else if (Clazz.instanceOf(value, "java.lang.Long")) {
value=Clazz.array(Long.TYPE, -1, [(value).longValue$()]);
} else if (Clazz.instanceOf(value, "io.scif.formats.tiff.TiffRational")) {
value=Clazz.array($I$(14), -1, [value]);
} else if (Clazz.instanceOf(value, "java.lang.Float")) {
value=Clazz.array(Float.TYPE, -1, [(value).floatValue$()]);
} else if (Clazz.instanceOf(value, "java.lang.Double")) {
value=Clazz.array(Double.TYPE, -1, [(value).doubleValue$()]);
}var dataLength=this.bigTiff ? 8 : 4;
this.out.writeShort$I(tag);
if (Clazz.instanceOf(value, Clazz.array(Short.TYPE, -1))) {
var q=value;
this.out.writeShort$I($I$(15).BYTE.getCode$());
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, q.length]);
if (q.length <= dataLength) {
for (var i=0; i < q.length; i++) this.out.writeByte$I(q[i]);

for (var i=q.length; i < dataLength; i++) this.out.writeByte$I(0);

} else {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, offset + extraOut.length$()]);
for (var i=0; i < q.length; i++) extraOut.writeByte$I(q[i]);

}} else if (Clazz.instanceOf(value, "java.lang.String")) {
var q=(value).toCharArray$();
this.out.writeShort$I($I$(15).ASCII.getCode$());
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, q.length + 1]);
if (q.length < dataLength) {
for (var i=0; i < q.length; i++) this.out.writeByte$I(q[i].$c());

for (var i=q.length; i < dataLength; i++) this.out.writeByte$I(0);

} else {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, offset + extraOut.length$()]);
for (var i=0; i < q.length; i++) extraOut.writeByte$I(q[i].$c());

extraOut.writeByte$I(0);
}} else if (Clazz.instanceOf(value, Clazz.array(Integer.TYPE, -1))) {
var q=value;
this.out.writeShort$I($I$(15).SHORT.getCode$());
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, q.length]);
if (q.length <= (dataLength/2|0)) {
for (var i=0; i < q.length; i++) {
this.out.writeShort$I(q[i]);
}
for (var i=q.length; i < (dataLength/2|0); i++) {
this.out.writeShort$I(0);
}
} else {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, offset + extraOut.length$()]);
for (var i=0; i < q.length; i++) {
extraOut.writeShort$I(q[i]);
}
}} else if (Clazz.instanceOf(value, Clazz.array(Long.TYPE, -1))) {
var q=value;
var type=this.bigTiff ? $I$(15).LONG8.getCode$() : $I$(15).LONG.getCode$();
this.out.writeShort$I(type);
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, q.length]);
var div=this.bigTiff ? 8 : 4;
if (q.length <= (dataLength/div|0)) {
for (var i=0; i < q.length; i++) {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, q[0]]);
}
for (var i=q.length; i < (dataLength/div|0); i++) {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, 0]);
}
} else {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, offset + extraOut.length$()]);
for (var i=0; i < q.length; i++) {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [extraOut, q[i]]);
}
}} else if (Clazz.instanceOf(value, Clazz.array($I$(14), -1))) {
var q=value;
this.out.writeShort$I($I$(15).RATIONAL.getCode$());
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, q.length]);
if (this.bigTiff && q.length == 1 ) {
this.out.writeInt$I((q[0].getNumerator$()|0));
this.out.writeInt$I((q[0].getDenominator$()|0));
} else {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, offset + extraOut.length$()]);
for (var i=0; i < q.length; i++) {
extraOut.writeInt$I((q[i].getNumerator$()|0));
extraOut.writeInt$I((q[i].getDenominator$()|0));
}
}} else if (Clazz.instanceOf(value, Clazz.array(Float.TYPE, -1))) {
var q=value;
this.out.writeShort$I($I$(15).FLOAT.getCode$());
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, q.length]);
if (q.length <= (dataLength/4|0)) {
for (var i=0; i < q.length; i++) {
this.out.writeFloat$F(q[0]);
}
for (var i=q.length; i < (dataLength/4|0); i++) {
this.out.writeInt$I(0);
}
} else {
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, offset + extraOut.length$()]);
for (var i=0; i < q.length; i++) {
extraOut.writeFloat$F(q[i]);
}
}} else if (Clazz.instanceOf(value, Clazz.array(Double.TYPE, -1))) {
var q=value;
this.out.writeShort$I($I$(15).DOUBLE.getCode$());
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, q.length]);
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, offset + extraOut.length$()]);
for (var doubleVal, $doubleVal = 0, $$doubleVal = q; $doubleVal<$$doubleVal.length&&((doubleVal=($$doubleVal[$doubleVal])),1);$doubleVal++) {
extraOut.writeDouble$D(doubleVal);
}
} else {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unknown IFD value type (" + value.getClass$().getName$() + "): " + value ]);
}});

Clazz.newMeth(C$, 'overwriteLastIFDOffset$org_scijava_io_handle_DataHandle', function (handle) {
if (handle == null ) throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Output cannot be null"]);
var parser=Clazz.new_($I$(8,1).c$$org_scijava_Context$org_scijava_io_handle_DataHandle,[this.getContext$(), handle]);
parser.getIFDOffsets$();
this.out.seek$J(handle.offset$() - (this.bigTiff ? 8 : 4));
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, 0]);
});

Clazz.newMeth(C$, 'overwriteIFDValue$org_scijava_io_handle_DataHandle$I$I$O', function (raf, ifd, tag, value) {
if (raf == null ) throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Output cannot be null"]);
this.log.debug$O("overwriteIFDValue (ifd=" + ifd + "; tag=" + tag + "; value=" + value + ")" );
raf.seek$J(0);
var parser=Clazz.new_($I$(8,1).c$$org_scijava_Context$org_scijava_io_handle_DataHandle,[this.getContext$(), raf]);
var valid=parser.checkHeader$();
if (valid == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid TIFF header"]);
}var little=valid.booleanValue$();
var bigTiff=parser.isBigTiff$();
this.setLittleEndian$Z(little);
this.setBigTiff$Z(bigTiff);
var offset=bigTiff ? 8 : 4;
var bytesPerEntry=bigTiff ? 20 : 12;
raf.seek$J(offset);
var offsets=parser.getIFDOffsets$();
if (ifd >= offsets.length) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["No such IFD (" + ifd + " of " + offsets.length + ")" ]);
}raf.seek$J(offsets[ifd]);
var num=bigTiff ? raf.readLong$() : raf.readUnsignedShort$();
for (var i=0; i < num; i++) {
raf.seek$J(offsets[ifd] + (bigTiff ? 8 : 2) + bytesPerEntry * i );
var entry=parser.readTiffIFDEntry$();
if (entry.getTag$() == tag) {
var ifdHandle=this.dataHandleService.create$TD(Clazz.new_($I$(12,1).c$$I,[bytesPerEntry]));
var extraHandle=this.dataHandleService.create$TD(Clazz.new_($I$(12,1).c$$I,[0]));
extraHandle.setLittleEndian$Z(little);
var saver=Clazz.new_(C$.c$$org_scijava_io_handle_DataHandle$org_scijava_io_location_BytesLocation,[ifdHandle, Clazz.new_($I$(12,1).c$$I,[bytesPerEntry])]);
saver.setLittleEndian$Z(this.isLittleEndian$());
saver.writeIFDValue$org_scijava_io_handle_DataHandle$J$I$O(extraHandle, entry.getValueOffset$(), tag, value);
ifdHandle.seek$J(0);
extraHandle.seek$J(0);
var newTag=ifdHandle.readShort$();
var newType=ifdHandle.readShort$();
var newCount;
var newOffset;
if (bigTiff) {
newCount=ifdHandle.readInt$();
newOffset=ifdHandle.readLong$();
} else {
newCount=ifdHandle.readInt$();
newOffset=ifdHandle.readInt$();
}this.log.debug$O("overwriteIFDValue:");
this.log.debug$O("\told (" + entry + ");" );
this.log.debug$O("\tnew: (tag=" + newTag + "; type=" + newType + "; count=" + newCount + "; offset=" + newOffset + ")" );
if (extraHandle.length$() == 0) {
this.log.debug$O("overwriteIFDValue: new entry is inline");
} else if (entry.getValueOffset$() + entry.getValueCount$() * entry.getType$().getBytesPerElement$() == raf.length$()) {
newOffset=entry.getValueOffset$();
this.log.debug$O("overwriteIFDValue: old entry is at EOF");
} else if (newCount <= entry.getValueCount$()) {
newOffset=entry.getValueOffset$();
this.log.debug$O("overwriteIFDValue: new entry is <= old entry");
} else {
newOffset=raf.length$();
this.log.debug$O("overwriteIFDValue: old entry will be orphaned");
}this.out.seek$J(offsets[ifd] + (bigTiff ? 8 : 2) + bytesPerEntry * i  + 2);
this.out.writeShort$I(newType);
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, newCount]);
p$1.writeIntValue$org_scijava_io_handle_DataHandle$J.apply(this, [this.out, newOffset]);
if (extraHandle.length$() > 0) {
this.out.seek$J(newOffset);
extraHandle.seek$J(0);
$I$(13).copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$I(extraHandle, this.out, newCount);
}return;
}}
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Tag not found (" + $I$(16).getIFDTagName$I(tag) + ")" ]);
});

Clazz.newMeth(C$, 'overwriteComment$org_scijava_io_handle_DataHandle$O', function ($in, value) {
this.overwriteIFDValue$org_scijava_io_handle_DataHandle$I$I$O($in, 0, 270, value);
});

Clazz.newMeth(C$, 'toPrimitiveArray$java_util_List', function (l) {
var toReturn=Clazz.array(Long.TYPE, [l.size$()]);
for (var i=0; i < l.size$(); i++) {
toReturn[i]=(l.get$I(i)).valueOf();
}
return toReturn;
}, p$1);

Clazz.newMeth(C$, 'writeIntValue$org_scijava_io_handle_DataHandle$J', function (handle, offset) {
if (this.bigTiff) {
handle.writeLong$J(offset);
} else {
handle.writeInt$I((offset|0));
}}, p$1);

Clazz.newMeth(C$, 'makeValidIFD$io_scif_formats_tiff_IFD$I$I', function (ifd, pixelType, nChannels) {
var bytesPerPixel=$I$(5).getBytesPerPixel$I(pixelType);
var bps=8 * bytesPerPixel;
var bpsArray=Clazz.array(Integer.TYPE, [nChannels]);
$I$(9).fill$IA$I(bpsArray, bps);
ifd.putIFDValue$I$O(258, bpsArray);
if ($I$(5).isFloatingPoint$I(pixelType)) {
ifd.putIFDValue$I$I(339, 3);
}if (ifd.getIFDValue$I(259) == null ) {
ifd.putIFDValue$I$I(259, $I$(17).UNCOMPRESSED.getCode$());
}var indexed=nChannels == 1 && ifd.getIFDValue$I(320) != null  ;
var pi=indexed ? $I$(18).RGB_PALETTE : nChannels == 1 ? $I$(18).BLACK_IS_ZERO : $I$(18).RGB;
ifd.putIFDValue$I$I(262, pi.getCode$());
ifd.putIFDValue$I$I(277, nChannels);
if (ifd.get$O(new Integer(282)) == null ) {
ifd.putIFDValue$I$O(282, Clazz.new_($I$(14,1).c$$J$J,[1, 1]));
}if (ifd.get$O(new Integer(283)) == null ) {
ifd.putIFDValue$I$O(283, Clazz.new_($I$(14,1).c$$J$J,[1, 1]));
}if (ifd.get$O(new Integer(305)) == null ) {
ifd.putIFDValue$I$O(305, "SCIFIO");
}if (ifd.get$O(new Integer(278)) == null ) {
ifd.putIFDValue$I$O(278, Clazz.array(Long.TYPE, -1, [1]));
}if (ifd.get$O(new Integer(270)) == null ) {
ifd.putIFDValue$I$O(270, "");
}}, p$1);
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
