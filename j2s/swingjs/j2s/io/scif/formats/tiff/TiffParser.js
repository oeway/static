(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),p$1={},I$=[[0,'io.scif.codec.CodecOptions','org.scijava.io.handle.DataHandleService','io.scif.SCIFIO','io.scif.formats.tiff.IFDList','java.util.Vector','io.scif.formats.tiff.IFD','Boolean','io.scif.formats.tiff.TiffIFDEntry','java.util.HashSet','io.scif.formats.tiff.IFDType','io.scif.formats.tiff.OnDemandLongArray','io.scif.formats.tiff.TiffRational','io.scif.formats.tiff.PhotoInterp','org.scijava.util.Bytes','io.scif.formats.tiff.TiffCompression','org.scijava.util.IntRect','io.scif.codec.BitBuffer','io.scif.formats.tiff.FillOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TiffParser", null, 'org.scijava.AbstractContextual');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.uint=new Uint32Array(1) ||Clazz.array(Long.TYPE, [1]);
C$.REVERSE=Clazz.array(Byte.TYPE, -1, [0, -128, 64, -64, 32, -96, 96, -32, 16, -112, 80, -48, 48, -80, 112, -16, 8, -120, 72, -56, 40, -88, 104, -24, 24, -104, 88, -40, 56, -72, 120, -8, 4, -124, 68, -60, 36, -92, 100, -28, 20, -108, 84, -44, 52, -76, 116, -12, 12, -116, 76, -52, 44, -84, 108, -20, 28, -100, 92, -36, 60, -68, 124, -4, 2, -126, 66, -62, 34, -94, 98, -30, 18, -110, 82, -46, 50, -78, 114, -14, 10, -118, 74, -54, 42, -86, 106, -22, 26, -102, 90, -38, 58, -70, 122, -6, 6, -122, 70, -58, 38, -90, 102, -26, 22, -106, 86, -42, 54, -74, 118, -10, 14, -114, 78, -50, 46, -82, 110, -18, 30, -98, 94, -34, 62, -66, 126, -2, 1, -127, 65, -63, 33, -95, 97, -31, 17, -111, 81, -47, 49, -79, 113, -15, 9, -119, 73, -55, 41, -87, 105, -23, 25, -103, 89, -39, 57, -71, 121, -7, 5, -123, 69, -59, 37, -91, 101, -27, 21, -107, 85, -43, 53, -75, 117, -11, 13, -115, 77, -51, 45, -83, 109, -19, 29, -99, 93, -35, 61, -67, 125, -3, 3, -125, 67, -61, 35, -93, 99, -29, 19, -109, 83, -45, 51, -77, 115, -13, 11, -117, 75, -53, 43, -85, 107, -21, 27, -101, 91, -37, 59, -69, 123, -5, 7, -121, 71, -57, 39, -89, 103, -25, 23, -105, 87, -41, 55, -73, 119, -9, 15, -113, 79, -49, 47, -81, 111, -17, 31, -97, 95, -33, 63, -65, 127, -1]);
}

Clazz.newMeth(C$, '$init$', function () {
this.fakeBigTiff=false;
this.ycbcrCorrection=true;
this.equalStrips=false;
this.codecOptions=$I$(1).getDefaultOptions$();
}, 1);

C$.$fields$=[['Z',['bigTiff','fakeBigTiff','ycbcrCorrection','equalStrips','doCaching'],'O',['$in','org.scijava.io.handle.DataHandle','cachedTileBuffer','byte[]','ifdList','io.scif.formats.tiff.IFDList','firstIFD','io.scif.formats.tiff.IFD','scifio','io.scif.SCIFIO','log','org.scijava.log.LogService','codecOptions','io.scif.codec.CodecOptions']]
,['O',['uint','long[]','REVERSE','byte[]']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_io_location_Location', function (context, loc) {
C$.c$$org_scijava_Context$org_scijava_io_handle_DataHandle.apply(this, [context, context.getService$Class(Clazz.getClass($I$(2),['exists$org_scijava_io_location_Location','getPluginType$','getType$','readBuffer$org_scijava_io_handle_DataHandle','readBuffer$org_scijava_io_location_Location','writeBuffer$org_scijava_io_handle_DataHandle'])).create$TD(loc)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_io_handle_DataHandle', function (context, $in) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
this.scifio=Clazz.new_($I$(3,1).c$$org_scijava_Context,[context]);
this.log=this.scifio.log$();
this.$in=$in;
this.doCaching=true;
try {
var fp=$in.offset$();
this.checkHeader$();
$in.seek$J(fp);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setAssumeEqualStrips$Z', function (equalStrips) {
this.equalStrips=equalStrips;
});

Clazz.newMeth(C$, 'setCodecOptions$io_scif_codec_CodecOptions', function (codecOptions) {
this.codecOptions=codecOptions;
});

Clazz.newMeth(C$, 'getCodecOptions$', function () {
return this.codecOptions;
});

Clazz.newMeth(C$, 'setDoCaching$Z', function (doCaching) {
this.doCaching=doCaching;
});

Clazz.newMeth(C$, 'setUse64BitOffsets$Z', function (use64Bit) {
this.fakeBigTiff=use64Bit;
});

Clazz.newMeth(C$, 'setYCbCrCorrection$Z', function (correctionAllowed) {
this.ycbcrCorrection=correctionAllowed;
});

Clazz.newMeth(C$, 'getStream$', function () {
return this.$in;
});

Clazz.newMeth(C$, 'isValidHeader$', function () {
try {
return this.checkHeader$() != null ;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'checkHeader$', function () {
if (this.$in.length$() < 4) return null;
this.$in.seek$J(0);
var endianOne=this.$in.read$();
var endianTwo=this.$in.read$();
var littleEndian=endianOne == 73 && endianTwo == 73 ;
var bigEndian=endianOne == 77 && endianTwo == 77 ;
if (!littleEndian && !bigEndian ) return null;
this.$in.setLittleEndian$Z(littleEndian);
var magic=this.$in.readShort$();
this.bigTiff=magic == 43;
if (magic != 42 && magic != 43 ) {
return null;
}return new Boolean(littleEndian);
});

Clazz.newMeth(C$, 'isBigTiff$', function () {
return this.bigTiff;
});

Clazz.newMeth(C$, 'getIFDs$', function () {
if (this.ifdList != null ) return this.ifdList;
var offsets=this.getIFDOffsets$();
var ifds=Clazz.new_($I$(4,1));
for (var offset, $offset = 0, $$offset = offsets; $offset<$$offset.length&&((offset=($$offset[$offset])),1);$offset++) {
var ifd=this.getIFD$J(offset);
if (ifd == null ) continue;
if (ifd.containsKey$O(new Integer(256))) ifds.add$TE(ifd);
var subOffsets=null;
try {
if (!this.doCaching && ifd.containsKey$O(new Integer(330)) ) {
this.fillInIFD$io_scif_formats_tiff_IFD(ifd);
}subOffsets=ifd.getIFDLongArray$I(330);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
} else {
throw e;
}
}
if (subOffsets != null ) {
for (var subOffset, $subOffset = 0, $$subOffset = subOffsets; $subOffset<$$subOffset.length&&((subOffset=($$subOffset[$subOffset])),1);$subOffset++) {
var sub=this.getIFD$J(subOffset);
if (sub != null ) {
ifds.add$TE(sub);
}}
}}
if (this.doCaching) this.ifdList=ifds;
return ifds;
});

Clazz.newMeth(C$, 'getThumbnailIFDs$', function () {
var ifds=this.getIFDs$();
var thumbnails=Clazz.new_($I$(4,1));
for (var ifd, $ifd = ifds.iterator$(); $ifd.hasNext$()&&((ifd=($ifd.next$())),1);) {
var subfile=ifd.getIFDValue$I(254);
var subfileType=subfile == null  ? 0 : subfile.intValue$();
if (subfileType == 1) {
thumbnails.add$TE(ifd);
}}
return thumbnails;
});

Clazz.newMeth(C$, 'getNonThumbnailIFDs$', function () {
var ifds=this.getIFDs$();
var nonThumbs=Clazz.new_($I$(4,1));
for (var ifd, $ifd = ifds.iterator$(); $ifd.hasNext$()&&((ifd=($ifd.next$())),1);) {
var subfile=ifd.getIFDValue$I(254);
var subfileType=subfile == null  ? 0 : subfile.intValue$();
if (subfileType != 1 || ifds.size$() <= 1 ) {
nonThumbs.add$TE(ifd);
}}
return nonThumbs;
});

Clazz.newMeth(C$, 'getExifIFDs$', function () {
var ifds=this.getIFDs$();
var exif=Clazz.new_($I$(4,1));
for (var ifd, $ifd = ifds.iterator$(); $ifd.hasNext$()&&((ifd=($ifd.next$())),1);) {
var offset=ifd.getIFDLongValue$I$J(34665, 0);
if (offset != 0) {
var exifIFD=this.getIFD$J(offset);
if (exifIFD != null ) {
exif.add$TE(exifIFD);
}}}
return exif;
});

Clazz.newMeth(C$, 'getIFDOffsets$', function () {
var bytesPerEntry=this.bigTiff ? 20 : 12;
var offsets=Clazz.new_(1,{E:"Long"},$I$(5,1));
var offset=this.getFirstOffset$();
while (offset > 0 && offset < this.$in.length$() ){
this.$in.seek$J(offset);
offsets.add$TE(new Long(offset));
var nEntries=this.bigTiff ? (this.$in.readLong$()|0) : this.$in.readUnsignedShort$();
this.$in.skipBytes$I(nEntries * bytesPerEntry);
offset=p$1.getNextOffset$J.apply(this, [offset]);
}
var f=Clazz.array(Long.TYPE, [offsets.size$()]);
for (var i=0; i < f.length; i++) {
f[i]=offsets.get$I(i).longValue$();
}
return f;
});

Clazz.newMeth(C$, 'getFirstIFD$', function () {
if (this.firstIFD != null ) return this.firstIFD;
var offset=this.getFirstOffset$();
var ifd=this.getIFD$J(offset);
if (this.doCaching) this.firstIFD=ifd;
return ifd;
});

Clazz.newMeth(C$, 'getFirstIFDEntry$I', function (tag) {
var offset=this.getFirstOffset$();
if (offset < 0) return null;
this.$in.seek$J(offset);
var numEntries=this.bigTiff ? this.$in.readLong$() : this.$in.readUnsignedShort$();
for (var i=0; i < numEntries; i++) {
this.$in.seek$J(offset + (this.bigTiff ? 8 : 2) + (this.bigTiff ? 20 : 12) * i );
var entry=this.readTiffIFDEntry$();
if (entry.getTag$() == tag) {
return entry;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown tag: " + tag]);
});

Clazz.newMeth(C$, 'getFirstOffset$', function () {
var header=this.checkHeader$();
if (header == null ) return -1;
if (this.bigTiff) this.$in.skipBytes$I(4);
return p$1.getNextOffset$J.apply(this, [0]);
});

Clazz.newMeth(C$, 'getIFD$J', function (offset) {
if (offset < 0 || offset >= this.$in.length$() ) return null;
var ifd=Clazz.new_($I$(6,1).c$$org_scijava_log_LogService,[this.log]);
ifd.put$TK$TV( new Integer(0), $I$(7).valueOf$Z(this.$in.isLittleEndian$()));
ifd.put$TK$TV( new Integer(1), $I$(7).valueOf$Z(this.bigTiff));
this.log.trace$O("getIFDs: seeking IFD at " + offset);
this.$in.seek$J(offset);
var numEntries=this.bigTiff ? this.$in.readLong$() : this.$in.readUnsignedShort$();
this.log.trace$O("getIFDs: " + numEntries + " directory entries to read" );
if (numEntries == 0 || numEntries == 1 ) return ifd;
var bytesPerEntry=this.bigTiff ? 20 : 12;
var baseOffset=this.bigTiff ? 8 : 2;
for (var i=0; i < numEntries; i++) {
this.$in.seek$J(offset + baseOffset + bytesPerEntry * i );
var entry=null;
try {
entry=this.readTiffIFDEntry$();
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.enumeration.EnumException")){
this.log.debug$O$Throwable("", e);
} else {
throw e;
}
}
if (entry == null ) break;
var count=entry.getValueCount$();
var tag=entry.getTag$();
var pointer=entry.getValueOffset$();
var bpe=entry.getType$().getBytesPerElement$();
if (count < 0 || bpe <= 0 ) {
this.$in.skipBytes$I(bytesPerEntry - 4 - (this.bigTiff ? 8 : 4) );
continue;
}var value=null;
var inputLen=this.$in.length$();
if (count * bpe + pointer > inputLen) {
var oldCount=count;
count=((((inputLen - pointer)/bpe|0))|0);
this.log.trace$O("getIFDs: truncated " + (oldCount - count) + " array elements for tag " + tag );
if (count < 0) count=oldCount;
entry=Clazz.new_($I$(8,1).c$$I$io_scif_formats_tiff_IFDType$I$J,[entry.getTag$(), entry.getType$(), count, entry.getValueOffset$()]);
}if (count < 0 || count > this.$in.length$() ) break;
if (pointer != this.$in.offset$() && !this.doCaching ) {
value=entry;
} else value=this.getIFDValue$io_scif_formats_tiff_TiffIFDEntry(entry);
if (value != null  && !ifd.containsKey$O( new Integer(tag)) ) {
ifd.put$TK$TV( new Integer(tag), value);
}}
this.$in.seek$J(offset + baseOffset + bytesPerEntry * numEntries );
return ifd;
});

Clazz.newMeth(C$, 'fillInIFD$io_scif_formats_tiff_IFD', function (ifd) {
var entries=Clazz.new_(1,{E:"io.scif.formats.tiff.TiffIFDEntry"},$I$(9,1));
for (var key, $key = ifd.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (Clazz.instanceOf(ifd.get$O(key), "io.scif.formats.tiff.TiffIFDEntry")) {
entries.add$TE(ifd.get$O(key));
}}
for (var entry, $entry = entries.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getValueCount$() < 10485760 || entry.getTag$() < 32768 ) {
ifd.put$TK$TV( new Integer(entry.getTag$()), this.getIFDValue$io_scif_formats_tiff_TiffIFDEntry(entry));
}}
});

Clazz.newMeth(C$, 'getIFDValue$io_scif_formats_tiff_TiffIFDEntry', function (entry) {
var type=entry.getType$();
var count=entry.getValueCount$();
var offset=entry.getValueOffset$();
this.log.trace$O("Reading entry " + entry.getTag$() + " from " + offset + "; type=" + type + ", count=" + count );
if (offset >= this.$in.length$()) {
return null;
}if (offset != this.$in.offset$()) {
this.$in.seek$J(offset);
}if (type === $I$(10).BYTE ) {
if (count == 1) return  new Short(this.$in.readByte$());
var bytes=Clazz.array(Byte.TYPE, [count]);
this.$in.readFully$BA(bytes);
var shorts=Clazz.array(Short.TYPE, [count]);
for (var j=0; j < count; j++) shorts[j]=((bytes[j] & 255)|0);

return shorts;
} else if (type === $I$(10).ASCII ) {
var ascii=Clazz.array(Byte.TYPE, [count]);
this.$in.read$BA(ascii);
var nullCount=0;
for (var j=0; j < count; j++) {
if (ascii[j] == 0 || j == count - 1 ) nullCount++;
}
var strings=nullCount == 1 ? null : Clazz.array(String, [nullCount]);
var s=null;
var c=0;
var ndx=-1;
for (var j=0; j < count; j++) {
if (ascii[j] == 0) {
s= String.instantialize(ascii, ndx + 1, j - ndx - 1 , "UTF-8");
ndx=j;
} else if (j == count - 1) {
s= String.instantialize(ascii, ndx + 1, j - ndx, "UTF-8");
} else s=null;
if (strings != null  && s != null  ) strings[c++]=s;
}
return strings == null  ? s : strings;
} else if (type === $I$(10).SHORT ) {
if (count == 1) return  new Integer(this.$in.readUnsignedShort$());
var shorts=Clazz.array(Integer.TYPE, [count]);
for (var j=0; j < count; j++) {
shorts[j]=this.$in.readUnsignedShort$();
}
return shorts;
} else if (type === $I$(10).LONG  || type === $I$(10).IFD  ) {
if (count == 1) return  new Long(this.$in.readInt$());
var longs=Clazz.array(Long.TYPE, [count]);
for (var j=0; j < count; j++) {
if (this.$in.offset$() + 4 <= this.$in.length$()) {
longs[j]=this.$in.readInt$();
}}
return longs;
} else if (type === $I$(10).LONG8  || type === $I$(10).SLONG8   || type === $I$(10).IFD8  ) {
if (count == 1) return  new Long(this.$in.readLong$());
var longs=null;
if (this.equalStrips && (entry.getTag$() == 279 || entry.getTag$() == 325 ) ) {
longs=Clazz.array(Long.TYPE, [1]);
longs[0]=this.$in.readLong$();
} else if (this.equalStrips && (entry.getTag$() == 273 || entry.getTag$() == 324 ) ) {
var offsets=Clazz.new_($I$(11,1).c$$org_scijava_io_handle_DataHandle,[this.$in]);
offsets.setSize$I(count);
return offsets;
} else {
longs=Clazz.array(Long.TYPE, [count]);
for (var j=0; j < count; j++) longs[j]=this.$in.readLong$();

}return longs;
} else if (type === $I$(10).RATIONAL  || type === $I$(10).SRATIONAL  ) {
if (count == 1) return Clazz.new_($I$(12,1).c$$J$J,[this.$in.readInt$(), this.$in.readInt$()]);
var rationals=Clazz.array($I$(12), [count]);
for (var j=0; j < count; j++) {
rationals[j]=Clazz.new_($I$(12,1).c$$J$J,[this.$in.readInt$(), this.$in.readInt$()]);
}
return rationals;
} else if (type === $I$(10).SBYTE  || type === $I$(10).UNDEFINED  ) {
if (count == 1) return  new Byte(($b$[0] = this.$in.readByte$(), $b$[0]));
var sbytes=Clazz.array(Byte.TYPE, [count]);
this.$in.read$BA(sbytes);
return sbytes;
} else if (type === $I$(10).SSHORT ) {
if (count == 1) return  new Short(this.$in.readShort$());
var sshorts=Clazz.array(Short.TYPE, [count]);
for (var j=0; j < count; j++) sshorts[j]=this.$in.readShort$();

return sshorts;
} else if (type === $I$(10).SLONG ) {
if (count == 1) return  new Integer(this.$in.readInt$());
var slongs=Clazz.array(Integer.TYPE, [count]);
for (var j=0; j < count; j++) slongs[j]=this.$in.readInt$();

return slongs;
} else if (type === $I$(10).FLOAT ) {
if (count == 1) return  new Float(this.$in.readFloat$());
var floats=Clazz.array(Float.TYPE, [count]);
for (var j=0; j < count; j++) floats[j]=this.$in.readFloat$();

return floats;
} else if (type === $I$(10).DOUBLE ) {
if (count == 1) return  new Double(this.$in.readDouble$());
var doubles=Clazz.array(Double.TYPE, [count]);
for (var j=0; j < count; j++) {
doubles[j]=this.$in.readDouble$();
}
return doubles;
}return null;
});

Clazz.newMeth(C$, 'getComment$', function () {
var firstIFD=this.getFirstIFD$();
if (firstIFD == null ) {
return null;
}this.fillInIFD$io_scif_formats_tiff_IFD(firstIFD);
return firstIFD.getComment$();
});

Clazz.newMeth(C$, 'getTile$io_scif_formats_tiff_IFD$BA$I$I', function (ifd, buf, row, col) {
var jpegTable=ifd.getIFDValue$I(347);
this.codecOptions.interleaved=true;
this.codecOptions.littleEndian=ifd.isLittleEndian$();
var tileWidth=ifd.getTileWidth$();
var tileLength=ifd.getTileLength$();
var samplesPerPixel=ifd.getSamplesPerPixel$();
var planarConfig=ifd.getPlanarConfiguration$();
var compression=ifd.getCompression$();
var numTileCols=ifd.getTilesPerRow$();
var pixel=ifd.getBytesPerSample$()[0];
var effectiveChannels=planarConfig == 2 ? 1 : samplesPerPixel;
var stripByteCounts=ifd.getStripByteCounts$();
var rowsPerStrip=ifd.getRowsPerStrip$();
var offsetIndex=((row * numTileCols + col)|0);
var countIndex=offsetIndex;
if (this.equalStrips) {
countIndex=0;
}if (stripByteCounts[countIndex] == (rowsPerStrip[0] * tileWidth) && pixel > 1 ) {
stripByteCounts[countIndex]*=pixel;
}var stripOffset=0;
var nStrips=0;
if (ifd.getOnDemandStripOffsets$() != null ) {
var stripOffsets=ifd.getOnDemandStripOffsets$();
stripOffset=stripOffsets.get$I(offsetIndex);
nStrips=stripOffsets.size$();
} else {
var stripOffsets=ifd.getStripOffsets$();
stripOffset=stripOffsets[offsetIndex];
nStrips=stripOffsets.length;
}var size=((tileWidth * tileLength * pixel * effectiveChannels )|0);
if (buf == null ) buf=Clazz.array(Byte.TYPE, [size]);
if (stripByteCounts[countIndex] == 0 || stripOffset >= this.$in.length$() ) {
return buf;
}var tile=Clazz.array(Byte.TYPE, [(stripByteCounts[countIndex]|0)]);
this.log.debug$O("Reading tile Length " + tile.length + " Offset " + stripOffset );
this.$in.seek$J(stripOffset);
this.$in.read$BA(tile);
this.codecOptions.maxBytes=Math.max(size, tile.length);
this.codecOptions.ycbcr=ifd.getPhotometricInterpretation$() === $I$(13).Y_CB_CR  && ifd.getIFDIntValue$I(530) == 1  && this.ycbcrCorrection ;
if (jpegTable != null ) {
var q=Clazz.array(Byte.TYPE, [jpegTable.length + tile.length - 4]);
System.arraycopy$O$I$O$I$I(jpegTable, 0, q, 0, jpegTable.length - 2);
System.arraycopy$O$I$O$I$I(tile, 2, q, jpegTable.length - 2, tile.length - 2);
tile=compression.decompress$io_scif_codec_CodecService$BA$io_scif_codec_CodecOptions(this.scifio.codec$(), q, this.codecOptions);
} else tile=compression.decompress$io_scif_codec_CodecService$BA$io_scif_codec_CodecOptions(this.scifio.codec$(), tile, this.codecOptions);
this.scifio.tiff$().undifference$BA$io_scif_formats_tiff_IFD(tile, ifd);
p$1.unpackBytes$BA$I$BA$io_scif_formats_tiff_IFD.apply(this, [buf, 0, tile, ifd]);
if (planarConfig == 2 && !ifd.isTiled$()  && ifd.getSamplesPerPixel$() > 1 ) {
var channel=((row % nStrips)|0);
if (channel < ifd.getBytesPerSample$().length) {
var realBytes=ifd.getBytesPerSample$()[channel];
if (realBytes != pixel) {
var littleEndian=ifd.isLittleEndian$();
var samples=Clazz.array(Integer.TYPE, [(buf.length/pixel|0)]);
for (var i=0; i < samples.length; i++) {
samples[i]=$I$(14).toInt$BA$I$I$Z(buf, i * realBytes, realBytes, littleEndian);
}
for (var i=0; i < samples.length; i++) {
$I$(14).unpack$J$BA$I$I$Z(samples[i], buf, i * pixel, pixel, littleEndian);
}
}}}return buf;
});

Clazz.newMeth(C$, 'getSamples$io_scif_formats_tiff_IFD$BA', function (ifd, buf) {
var width=ifd.getImageWidth$();
var length=ifd.getImageLength$();
return this.getSamples$io_scif_formats_tiff_IFD$BA$I$I$J$J(ifd, buf, 0, 0, width, length);
});

Clazz.newMeth(C$, 'getSamples$io_scif_formats_tiff_IFD$BA$I$I$J$J', function (ifd, buf, x, y, width, height) {
return this.getSamples$io_scif_formats_tiff_IFD$BA$I$I$J$J$I$I(ifd, buf, x, y, width, height, 0, 0);
});

Clazz.newMeth(C$, 'getSamples$io_scif_formats_tiff_IFD$BA$I$I$J$J$I$I', function (ifd, buf, x, y, width, height, overlapX, overlapY) {
this.log.trace$O("parsing IFD entries");
this.$in.setLittleEndian$Z(ifd.isLittleEndian$());
var samplesPerPixel=ifd.getSamplesPerPixel$();
var tileWidth=ifd.getTileWidth$();
var tileLength=ifd.getTileLength$();
if (tileLength <= 0) {
this.log.trace$O("Tile length is " + tileLength + "; setting it to " + height );
tileLength=height;
}var numTileRows=ifd.getTilesPerColumn$();
var numTileCols=ifd.getTilesPerRow$();
var photoInterp=ifd.getPhotometricInterpretation$();
var planarConfig=ifd.getPlanarConfiguration$();
var pixel=ifd.getBytesPerSample$()[0];
var effectiveChannels=planarConfig == 2 ? 1 : samplesPerPixel;
if (this.log.isTrace$()) {
ifd.printIFD$();
}if (width * height > 2147483647) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, ImageWidth x ImageLength > " + 2147483647 + " is not supported (" + width + " x " + height + ")" ]);
}if (width * height * effectiveChannels * pixel  > 2147483647) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, ImageWidth x ImageLength x SamplesPerPixel x BitsPerSample > " + 2147483647 + " is not supported (" + width + " x " + height + " x " + samplesPerPixel + " x " + (pixel * 8) + ")" ]);
}var numSamples=((width * height)|0);
this.log.trace$O("reading image data (samplesPerPixel=" + samplesPerPixel + "; numSamples=" + numSamples + ")" );
var compression=ifd.getCompression$();
if (compression === $I$(15).JPEG_2000  || compression === $I$(15).JPEG_2000_LOSSY  ) {
this.codecOptions=compression.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions(ifd, this.codecOptions);
} else this.codecOptions=compression.getCompressionCodecOptions$io_scif_formats_tiff_IFD(ifd);
this.codecOptions.interleaved=true;
this.codecOptions.littleEndian=ifd.isLittleEndian$();
var imageLength=ifd.getImageLength$();
if ((x % tileWidth) == 0 && (y % tileLength) == 0  && width == tileWidth  && height == imageLength  && samplesPerPixel == 1  && (ifd.getBitsPerSample$()[0] % 8) == 0  && photoInterp !== $I$(13).WHITE_IS_ZERO   && photoInterp !== $I$(13).CMYK   && photoInterp !== $I$(13).Y_CB_CR   && compression === $I$(15).UNCOMPRESSED  ) {
var stripOffsets=ifd.getStripOffsets$();
var stripByteCounts=ifd.getStripByteCounts$();
if (stripOffsets != null  && stripByteCounts != null  ) {
var column=(x/tileWidth|0);
var firstTile=((((y/tileLength|0)) * numTileCols + column)|0);
var lastTile=(((((y + height)/tileLength|0)) * numTileCols + column)|0);
lastTile=Math.min(lastTile, stripOffsets.length - 1);
var offset=0;
for (var tile=firstTile; tile <= lastTile; tile++) {
var byteCount=this.equalStrips ? stripByteCounts[0] : stripByteCounts[tile];
if (byteCount == numSamples && pixel > 1 ) {
byteCount*=pixel;
}this.$in.seek$J(stripOffsets[tile]);
var len=(Math.min(buf.length - offset, byteCount)|0);
this.$in.read$BA$I$I(buf, offset, len);
offset+=len;
}
}return p$1.adjustFillOrder$io_scif_formats_tiff_IFD$BA.apply(this, [ifd, buf]);
}var nrows=numTileRows;
if (planarConfig != 2) numTileRows*=samplesPerPixel;
var imageBounds=Clazz.new_($I$(16,1).c$$I$I$I$I,[x, y, (width|0), (height|0)]);
var endX=(width|0) + x;
var endY=(height|0) + y;
var w=tileWidth;
var h=tileLength;
var rowLen=pixel * (w|0);
var tileSize=((rowLen * h)|0);
var planeSize=((width * height * pixel )|0);
var outputRowLen=((pixel * width)|0);
var bufferSizeSamplesPerPixel=samplesPerPixel;
if (ifd.getPlanarConfiguration$() == 2) bufferSizeSamplesPerPixel=1;
var bpp=ifd.getBytesPerSample$()[0];
var bufferSize=(tileWidth|0) * (tileLength|0) * bufferSizeSamplesPerPixel * bpp ;
this.cachedTileBuffer=Clazz.array(Byte.TYPE, [bufferSize]);
var tileBounds=Clazz.new_($I$(16,1).c$$I$I$I$I,[0, 0, (tileWidth|0), (tileLength|0)]);
for (var row=0; row < numTileRows; row++) {
if (row == 0) {
tileBounds.height=((tileLength - overlapY)|0);
}for (var col=0; col < numTileCols; col++) {
if (col == 0) {
tileBounds.width=((tileWidth - overlapX)|0);
}tileBounds.x=col * ((tileWidth - overlapX)|0);
tileBounds.y=row * ((tileLength - overlapY)|0);
if (planarConfig == 2) {
tileBounds.y=(((row % nrows) * (tileLength - overlapY))|0);
}if (!imageBounds.intersects$org_scijava_util_IntRect(tileBounds)) continue;
this.getTile$io_scif_formats_tiff_IFD$BA$I$I(ifd, this.cachedTileBuffer, row, col);
var tileX=Math.max(tileBounds.x, x);
var tileY=Math.max(tileBounds.y, y);
var realX=tileX % ((tileWidth - overlapX)|0);
var realY=tileY % ((tileLength - overlapY)|0);
var twidth=(Math.min(endX - tileX, tileWidth - realX)|0);
if (twidth <= 0) {
twidth=(Math.max(endX - tileX, tileWidth - realX)|0);
}var theight=(Math.min(endY - tileY, tileLength - realY)|0);
if (theight <= 0) {
theight=(Math.max(endY - tileY, tileLength - realY)|0);
}var copy=pixel * twidth;
realX*=pixel;
realY*=rowLen;
for (var q=0; q < effectiveChannels; q++) {
var src=q * tileSize + realX + realY;
var dest=q * planeSize + pixel * (tileX - x) + outputRowLen * (tileY - y);
if (planarConfig == 2) dest+=(planeSize * ((row/nrows|0)));
if (rowLen == outputRowLen && overlapX == 0  && overlapY == 0 ) {
System.arraycopy$O$I$O$I$I(this.cachedTileBuffer, src, buf, dest, copy * theight);
} else {
for (var tileRow=0; tileRow < theight; tileRow++) {
System.arraycopy$O$I$O$I$I(this.cachedTileBuffer, src, buf, dest, copy);
src+=rowLen;
dest+=outputRowLen;
}
}}
}
}
return p$1.adjustFillOrder$io_scif_formats_tiff_IFD$BA.apply(this, [ifd, buf]);
});

Clazz.newMeth(C$, 'readTiffIFDEntry$', function () {
var entryTag=this.$in.readUnsignedShort$();
var entryType;
try {
entryType=$I$(10).get$I(this.$in.readUnsignedShort$());
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.enumeration.EnumException")){
this.log.error$O("Error reading IFD type at: " + this.$in.offset$());
throw e;
} else {
throw e;
}
}
var valueCount=this.bigTiff ? (this.$in.readLong$()|0) : this.$in.readInt$();
if (valueCount < 0) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Count of '" + valueCount + "' unexpected." ]);
}var nValueBytes=valueCount * entryType.getBytesPerElement$();
var threshhold=this.bigTiff ? 8 : 4;
var offset=nValueBytes > threshhold ? p$1.getNextOffset$J.apply(this, [0]) : this.$in.offset$();
return Clazz.new_($I$(8,1).c$$I$io_scif_formats_tiff_IFDType$I$J,[entryTag, entryType, valueCount, offset]);
});

Clazz.newMeth(C$, 'unpackBytes$BA$I$BA$io_scif_formats_tiff_IFD', function (samples, startIndex, bytes, ifd) {
var planar=ifd.getPlanarConfiguration$() == 2;
var compression=ifd.getCompression$();
var photoInterp=ifd.getPhotometricInterpretation$();
if (compression === $I$(15).JPEG ) photoInterp=$I$(13).RGB;
var bitsPerSample=ifd.getBitsPerSample$();
var nChannels=bitsPerSample.length;
var sampleCount=((((8 * bytes.length)/bitsPerSample[0]|0))|0);
if (photoInterp === $I$(13).Y_CB_CR ) sampleCount*=3;
if (planar) {
nChannels=1;
} else {
sampleCount=(sampleCount/(nChannels)|0);
}this.log.trace$O("unpacking " + sampleCount + " samples (startIndex=" + startIndex + "; totalBits=" + (nChannels * bitsPerSample[0]) + "; numBytes=" + bytes.length + ")" );
var imageWidth=ifd.getImageWidth$();
var imageHeight=ifd.getImageLength$();
var bps0=bitsPerSample[0];
var numBytes=ifd.getBytesPerSample$()[0];
var nSamples=(samples.length/(nChannels * numBytes)|0);
var noDiv8=bps0 % 8 != 0;
var bps8=bps0 == 8;
var bps16=bps0 == 16;
var littleEndian=ifd.isLittleEndian$();
var bb=Clazz.new_($I$(17,1).c$$BA,[bytes]);
if ((bps8 || bps16 ) && bytes.length <= samples.length  && nChannels == 1  && photoInterp !== $I$(13).WHITE_IS_ZERO   && photoInterp !== $I$(13).CMYK   && photoInterp !== $I$(13).Y_CB_CR  ) {
System.arraycopy$O$I$O$I$I(bytes, 0, samples, 0, bytes.length);
return;
}var maxValue=(Math.pow(2, bps0)|0) - 1;
if (photoInterp === $I$(13).CMYK ) maxValue=2147483647;
var skipBits=((8 - ((imageWidth * bps0 * nChannels ) % 8))|0);
if (skipBits == 8 || (bytes.length * 8 < bps0 * (nChannels * imageWidth + imageHeight)) ) {
skipBits=0;
}var lumaRed=0.299;
var lumaGreen=0.587;
var lumaBlue=0.114;
var reference=ifd.getIFDIntArray$I(532);
if (reference == null ) {
reference=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 0, 0]);
}var subsampling=ifd.getIFDIntArray$I(530);
var coefficients=ifd.getIFDValue$I(529);
if (coefficients != null ) {
lumaRed=coefficients[0].floatValue$();
lumaGreen=coefficients[1].floatValue$();
lumaBlue=coefficients[2].floatValue$();
}var subX=subsampling == null  ? 2 : subsampling[0];
var subY=subsampling == null  ? 2 : subsampling[1];
var block=subX * subY;
var nTiles=(((imageWidth/subX|0))|0);
for (var sample=0; sample < sampleCount; sample++) {
var ndx=startIndex + sample;
if (ndx >= nSamples) break;
for (var channel=0; channel < nChannels; channel++) {
var index=numBytes * (sample * nChannels + channel);
var outputIndex=(channel * nSamples + ndx) * numBytes;
if (photoInterp !== $I$(13).Y_CB_CR ) {
var value=0;
if (noDiv8) {
if ((channel == 0 && photoInterp === $I$(13).RGB_PALETTE  ) || (photoInterp !== $I$(13).CFA_ARRAY  && photoInterp !== $I$(13).RGB_PALETTE  ) ) {
value=bb.getBits$I(bps0) & 65535;
if ((ndx % imageWidth) == imageWidth - 1) {
bb.skipBits$J(skipBits);
}}} else {
value=$I$(14).toLong$BA$I$I$Z(bytes, index, numBytes, littleEndian);
}if (photoInterp === $I$(13).WHITE_IS_ZERO  || photoInterp === $I$(13).CMYK  ) {
value=maxValue - value;
}if (outputIndex + numBytes <= samples.length) {
$I$(14).unpack$J$BA$I$I$Z(value, samples, outputIndex, numBytes, littleEndian);
}} else {
if (channel == nChannels - 1) {
var lumaIndex=sample + (2 * ((sample/block|0)));
var chromaIndex=((sample/block|0)) * (block + 2) + block;
if (chromaIndex + 1 >= bytes.length) break;
var tile=(ndx/block|0);
var pixel=ndx % block;
var r=subY * ((tile/nTiles|0)) + ((pixel/subX|0));
var c=subX * (tile % nTiles) + (pixel % subX);
var idx=((r * imageWidth + c)|0);
if (idx < nSamples) {
var y=(bytes[lumaIndex] & 255) - reference[0];
var cb=(bytes[chromaIndex] & 255) - reference[2];
var cr=(bytes[chromaIndex + 1] & 255) - reference[4];
var red=((cr * (2 - 2 * lumaRed) + y)|0);
var blue=((cb * (2 - 2 * lumaBlue) + y)|0);
var green=(((y - lumaBlue * blue - lumaRed * red) / lumaGreen)|0);
samples[idx]=(((red & 255)|0)|0);
samples[nSamples + idx]=(((green & 255)|0)|0);
samples[2 * nSamples + idx]=(((blue & 255)|0)|0);
}}}}
}
}, p$1);

Clazz.newMeth(C$, 'getNextOffset$J', function (previous) {
if (this.bigTiff || this.fakeBigTiff ) {
return this.$in.readLong$();
}var offset=this.$in.readInt$();
{
offset = (previous/0x100000000|0)*0x100000000 + (C$.uint[0] = offset, C$.uint[0]);
}
if (offset < previous && offset != 0  && this.$in.length$() > 2147483647 ) {
offset+=4294967296;
}return offset;
}, p$1);

Clazz.newMeth(C$, 'adjustFillOrder$io_scif_formats_tiff_IFD$BA', function (ifd, buf) {
if (ifd.getFillOrder$() === $I$(18).REVERSED ) {
for (var i=0; i < buf.length; i++) {
buf[i]=(C$.REVERSE[255 & buf[i]]|0);
}
}return buf;
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
