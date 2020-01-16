(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'java.io.ByteArrayOutputStream','java.io.ByteArrayInputStream','javax.imageio.stream.MemoryCacheImageInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFOldJPEGDecompressor", null, 'io.scif.media.imageioimpl.plugins.tiff.TIFFJPEGDecompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isInitialized=false;
this.JPEGStreamOffset=null;
this.SOFPosition=-1;
this.SOSMarker=null;
this.subsamplingX=2;
this.subsamplingY=2;
}, 1);

C$.$fields$=[['Z',['isInitialized'],'I',['SOFPosition','subsamplingX','subsamplingY'],'O',['JPEGStreamOffset','Long','SOSMarker','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'initialize', function () {
if (this.isInitialized) {
return;
}var tim=this.metadata;
var JPEGInterchangeFormatField=tim.getTIFFField$I(513);
var segmentOffsetField=tim.getTIFFField$I(324);
if (segmentOffsetField == null ) {
segmentOffsetField=tim.getTIFFField$I(273);
if (segmentOffsetField == null ) {
segmentOffsetField=JPEGInterchangeFormatField;
}}var segmentOffsets=segmentOffsetField.getAsLongs$();
var isTiled=segmentOffsets.length > 1;
if (!isTiled) {
this.stream.seek$J(this.offset);
this.stream.mark$();
if (this.stream.read$() == 255 && this.stream.read$() == 216 ) {
this.JPEGStreamOffset= new Long(this.offset);
if (false) System.out.println$S("OLD JPEG CASE 1");
(this.reader).forwardWarningMessage$S("SOI marker detected at start of strip or tile.");
this.isInitialized=true;
this.stream.reset$();
return;
}this.stream.reset$();
if (JPEGInterchangeFormatField != null ) {
var jpegInterchangeOffset=JPEGInterchangeFormatField.getAsLong$I(0);
this.stream.mark$();
this.stream.seek$J(jpegInterchangeOffset);
if (this.stream.read$() == 255 && this.stream.read$() == 216 ) this.JPEGStreamOffset= new Long(jpegInterchangeOffset);
 else (this.reader).forwardWarningMessage$S("JPEGInterchangeFormat does not point to SOI");
this.stream.reset$();
var JPEGInterchangeFormatLengthField=tim.getTIFFField$I(514);
if (JPEGInterchangeFormatLengthField == null ) {
if (false) System.out.println$S("OLD JPEG CASE 2");
(this.reader).forwardWarningMessage$S("JPEGInterchangeFormatLength field is missing");
} else {
var jpegInterchangeLength=JPEGInterchangeFormatLengthField.getAsLong$I(0);
if (jpegInterchangeOffset < segmentOffsets[0] && (jpegInterchangeOffset + jpegInterchangeLength) > segmentOffsets[0] ) {
if (false) System.out.println$S("OLD JPEG CASE 3");
} else {
if (false) System.out.println$S("OLD JPEG CASE 3A");
(this.reader).forwardWarningMessage$S("JPEGInterchangeFormatLength field value is invalid");
}}if (this.JPEGStreamOffset != null ) {
this.isInitialized=true;
return;
}}}var YCbCrSubsamplingField=tim.getTIFFField$I(530);
if (YCbCrSubsamplingField != null ) {
this.subsamplingX=YCbCrSubsamplingField.getAsChars$()[0].$c();
this.subsamplingY=YCbCrSubsamplingField.getAsChars$()[1].$c();
}if (JPEGInterchangeFormatField != null ) {
var jpegInterchangeOffset=JPEGInterchangeFormatField.getAsLong$I(0);
var JPEGInterchangeFormatLengthField=tim.getTIFFField$I(514);
if (JPEGInterchangeFormatLengthField != null ) {
var jpegInterchangeLength=JPEGInterchangeFormatLengthField.getAsLong$I(0);
if (jpegInterchangeLength >= 2 && jpegInterchangeOffset + jpegInterchangeLength <= segmentOffsets[0] ) {
this.stream.mark$();
this.stream.seek$J(jpegInterchangeOffset + jpegInterchangeLength - 2);
if (this.stream.read$() == 255 && this.stream.read$() == 217 ) {
this.tables=Clazz.array(Byte.TYPE, [((jpegInterchangeLength - 2)|0)]);
} else {
this.tables=Clazz.array(Byte.TYPE, [(jpegInterchangeLength|0)]);
}this.stream.reset$();
this.stream.mark$();
this.stream.seek$J(jpegInterchangeOffset);
this.stream.readFully$BA(this.tables);
this.stream.reset$();
if (false) System.out.println$S("OLD JPEG CASE 4");
(this.reader).forwardWarningMessage$S("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables.");
} else {
(this.reader).forwardWarningMessage$S("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile.");
}}}if (this.tables == null ) {
var baos=Clazz.new_($I$(1,1));
var streamLength=this.stream.length$();
baos.write$I(255);
baos.write$I(216);
var f=tim.getTIFFField$I(519);
if (f == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JPEGQTables field missing!"]);
}var off=f.getAsLongs$();
for (var i=0; i < off.length; i++) {
baos.write$I(255);
baos.write$I(219);
var markerLength="C";
baos.write$I((markerLength.$c() >>> 8) & 255);
baos.write$I(markerLength.$c() & 255);
baos.write$I(i);
var qtable=Clazz.array(Byte.TYPE, [64]);
if (streamLength != -1 && off[i] > streamLength ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JPEGQTables offset for index " + i + " is not in the stream!" ]);
}this.stream.seek$J(off[i]);
this.stream.readFully$BA(qtable);
baos.write$BA(qtable);
}
for (var k=0; k < 2; k++) {
var tableTagNumber=k == 0 ? 520 : 521;
f=tim.getTIFFField$I(tableTagNumber);
var fieldName=tableTagNumber == 520 ? "JPEGDCTables" : "JPEGACTables";
if (f == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[fieldName + " field missing!"]);
}off=f.getAsLongs$();
for (var i=0; i < off.length; i++) {
baos.write$I(255);
baos.write$I(196);
var blengths=Clazz.array(Byte.TYPE, [16]);
if (streamLength != -1 && off[i] > streamLength ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[fieldName + " offset for index " + i + " is not in the stream!" ]);
}this.stream.seek$J(off[i]);
this.stream.readFully$BA(blengths);
var numCodes=0;
for (var j=0; j < 16; j++) {
numCodes+=blengths[j] & 255;
}
var markerLength=String.fromCharCode((19 + numCodes));
baos.write$I((markerLength.$c() >>> 8) & 255);
baos.write$I(markerLength.$c() & 255);
baos.write$I(i | (k << 4));
baos.write$BA(blengths);
var bcodes=Clazz.array(Byte.TYPE, [numCodes]);
this.stream.readFully$BA(bcodes);
baos.write$BA(bcodes);
}
}
baos.write$I(-1);
baos.write$I(-64);
var sval=($s$[0] = (8 + 3 * this.samplesPerPixel), $s$[0]);
baos.write$I(($b$[0] = ((sval >>> 8) & 255), $b$[0]));
baos.write$I(($b$[0] = (sval & 255), $b$[0]));
baos.write$I(8);
sval=($s$[0] = this.srcHeight, $s$[0]);
baos.write$I(($b$[0] = ((sval >>> 8) & 255), $b$[0]));
baos.write$I(($b$[0] = (sval & 255), $b$[0]));
sval=($s$[0] = this.srcWidth, $s$[0]);
baos.write$I(($b$[0] = ((sval >>> 8) & 255), $b$[0]));
baos.write$I(($b$[0] = (sval & 255), $b$[0]));
baos.write$I(($b$[0] = this.samplesPerPixel, $b$[0]));
if (this.samplesPerPixel == 1) {
baos.write$I(1);
baos.write$I(17);
baos.write$I(0);
} else {
for (var i=0; i < 3; i++) {
baos.write$I(($b$[0] = (i + 1), $b$[0]));
baos.write$I((i != 0) ? ($b$[0] = 17, $b$[0]) : ($b$[0] = ((((this.subsamplingX & 15) << 4) | (this.subsamplingY & 15))|0), $b$[0]));
baos.write$I(($b$[0] = i, $b$[0]));
}
};f=tim.getTIFFField$I(515);
if (f != null ) {
var restartInterval=f.getAsChars$()[0];
if (restartInterval.$c() != 0 ) {
baos.write$I(-1);
baos.write$I(-35);
sval=($s$[0] = 4, $s$[0]);
baos.write$I(($b$[0] = ((sval >>> 8) & 255), $b$[0]));
baos.write$I(($b$[0] = (sval & 255), $b$[0]));
baos.write$I(($b$[0] = ((restartInterval.$c() >>> 8) & 255), $b$[0]));
baos.write$I(($b$[0] = (restartInterval.$c() & 255), $b$[0]));
}}this.tables=baos.toByteArray$();
if (false) System.out.println$S("OLD JPEG CASE 5");
}var idx=0;
var idxMax=this.tables.length - 1;
while (idx < idxMax){
if ((this.tables[idx] & 255) == 255 && (this.tables[idx + 1] & 255) == 192 ) {
this.SOFPosition=idx;
break;
}idx++;
}
if (this.SOFPosition == -1) {
var tmpTables=Clazz.array(Byte.TYPE, [this.tables.length + 10 + 3 * this.samplesPerPixel ]);
System.arraycopy$O$I$O$I$I(this.tables, 0, tmpTables, 0, this.tables.length);
var tmpOffset=this.tables.length;
this.SOFPosition=this.tables.length;
this.tables=tmpTables;
this.tables[tmpOffset++]=(-1|0);
this.tables[tmpOffset++]=(-64|0);
var sval=($s$[0] = (8 + 3 * this.samplesPerPixel), $s$[0]);
this.tables[tmpOffset++]=((((sval >>> 8) & 255)|0)|0);
this.tables[tmpOffset++]=(((sval & 255)|0)|0);
this.tables[tmpOffset++]=(8|0);
sval=($s$[0] = this.srcHeight, $s$[0]);
this.tables[tmpOffset++]=((((sval >>> 8) & 255)|0)|0);
this.tables[tmpOffset++]=(((sval & 255)|0)|0);
sval=($s$[0] = this.srcWidth, $s$[0]);
this.tables[tmpOffset++]=((((sval >>> 8) & 255)|0)|0);
this.tables[tmpOffset++]=(((sval & 255)|0)|0);
this.tables[tmpOffset++]=((this.samplesPerPixel|0)|0);
if (this.samplesPerPixel == 1) {
this.tables[tmpOffset++]=(1|0);
this.tables[tmpOffset++]=(17|0);
this.tables[tmpOffset++]=(0|0);
} else {
for (var i=0; i < 3; i++) {
this.tables[tmpOffset++]=(((i + 1)|0)|0);
this.tables[tmpOffset++]=((i != 0) ? (17|0) : (((((this.subsamplingX & 15) << 4) | (this.subsamplingY & 15))|0)|0)|0);
this.tables[tmpOffset++]=((i|0)|0);
}
};}this.stream.mark$();
this.stream.seek$J(segmentOffsets[0]);
if (this.stream.read$() == 255 && this.stream.read$() == 218 ) {
var SOSLength=(this.stream.read$() << 8) | this.stream.read$();
this.SOSMarker=Clazz.array(Byte.TYPE, [SOSLength + 2]);
this.SOSMarker[0]=(-1|0);
this.SOSMarker[1]=(-38|0);
this.SOSMarker[2]=((((SOSLength & 65280) >> 8)|0)|0);
this.SOSMarker[3]=(((SOSLength & 255)|0)|0);
this.stream.readFully$BA$I$I(this.SOSMarker, 4, SOSLength - 2);
} else {
this.SOSMarker=Clazz.array(Byte.TYPE, [2 + 6 + 2 * this.samplesPerPixel ]);
var SOSMarkerIndex=0;
this.SOSMarker[SOSMarkerIndex++]=(-1|0);
this.SOSMarker[SOSMarkerIndex++]=(-38|0);
var sval=($s$[0] = (6 + 2 * this.samplesPerPixel), $s$[0]);
this.SOSMarker[SOSMarkerIndex++]=((((sval >>> 8) & 255)|0)|0);
this.SOSMarker[SOSMarkerIndex++]=(((sval & 255)|0)|0);
this.SOSMarker[SOSMarkerIndex++]=((this.samplesPerPixel|0)|0);
if (this.samplesPerPixel == 1) {
this.SOSMarker[SOSMarkerIndex++]=(1|0);
this.SOSMarker[SOSMarkerIndex++]=(0|0);
} else {
for (var i=0; i < 3; i++) {
this.SOSMarker[SOSMarkerIndex++]=(((i + 1)|0)|0);
this.SOSMarker[SOSMarkerIndex++]=((((i << 4) | i)|0)|0);
}
};this.SOSMarker[SOSMarkerIndex++]=(0|0);
this.SOSMarker[SOSMarkerIndex++]=(63|0);
this.SOSMarker[SOSMarkerIndex++]=(0|0);
}this.stream.reset$();
this.isInitialized=true;
}, p$1);

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (b, dstOffset, bitsPerPixel, scanlineStride) {
p$1.initialize.apply(this, []);
var tim=this.metadata;
if (this.JPEGStreamOffset != null ) {
this.stream.seek$J(this.JPEGStreamOffset.longValue$());
this.JPEGReader.setInput$O$Z$Z(this.stream, false, true);
} else {
var tableLength=this.tables.length;
var bufLength=tableLength + this.SOSMarker.length + this.byteCount + 2 ;
var buf=Clazz.array(Byte.TYPE, [bufLength]);
if (this.tables != null ) {
System.arraycopy$O$I$O$I$I(this.tables, 0, buf, 0, tableLength);
}var bufOffset=tableLength;
var sval=($s$[0] = this.srcHeight, $s$[0]);
buf[this.SOFPosition + 5]=((((sval >>> 8) & 255)|0)|0);
buf[this.SOFPosition + 6]=(((sval & 255)|0)|0);
sval=($s$[0] = this.srcWidth, $s$[0]);
buf[this.SOFPosition + 7]=((((sval >>> 8) & 255)|0)|0);
buf[this.SOFPosition + 8]=(((sval & 255)|0)|0);
this.stream.seek$J(this.offset);
var twoBytes=Clazz.array(Byte.TYPE, [2]);
this.stream.readFully$BA(twoBytes);
if (!((twoBytes[0] & 255) == 255 && (twoBytes[1] & 255) == 218 )) {
System.arraycopy$O$I$O$I$I(this.SOSMarker, 0, buf, bufOffset, this.SOSMarker.length);
bufOffset+=this.SOSMarker.length;
}buf[bufOffset++]=(twoBytes[0]|0);
buf[bufOffset++]=(twoBytes[1]|0);
this.stream.readFully$BA$I$I(buf, bufOffset, this.byteCount - 2);
bufOffset+=this.byteCount - 2;
buf[bufOffset++]=(-1|0);
buf[bufOffset++]=(-39|0);
var bais=Clazz.new_($I$(2,1).c$$BA$I$I,[buf, 0, bufOffset]);
var is=Clazz.new_($I$(3,1).c$$java_io_InputStream,[bais]);
this.JPEGReader.setInput$O$Z$Z(is, true, true);
}this.JPEGParam.setDestination$java_awt_image_BufferedImage(this.rawImage);
this.JPEGReader.read$I$javax_imageio_ImageReadParam(0, this.JPEGParam);
});

Clazz.newMeth(C$, 'finalize$', function () {
C$.superclazz.prototype.finalize$.apply(this, []);
this.JPEGReader.dispose$();
});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
