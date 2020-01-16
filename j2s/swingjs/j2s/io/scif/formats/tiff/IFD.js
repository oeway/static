(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),I$=[[0,'Boolean','java.lang.reflect.Array','io.scif.formats.tiff.TiffRational','StringBuilder','io.scif.formats.tiff.FillOrder','java.util.Arrays','io.scif.formats.tiff.TiffCompression','io.scif.formats.tiff.PhotoInterp','io.scif.formats.tiff.ResolutionUnit','org.scijava.util.DebugUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IFD", null, 'java.util.HashMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_log_LogService', function (log) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.log=log;
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_formats_tiff_IFD$org_scijava_log_LogService', function (ifd, log) {
;C$.superclazz.c$$java_util_Map.apply(this,[ifd]);C$.$init$.apply(this);
this.log=log;
}, 1);

Clazz.newMeth(C$, 'isBigTiff$', function () {
return (this.getIFDValue$I$Class(1, Clazz.getClass($I$(1)))).booleanValue$();
});

Clazz.newMeth(C$, 'isLittleEndian$', function () {
return (this.getIFDValue$I$Class(0, Clazz.getClass($I$(1)))).booleanValue$();
});

Clazz.newMeth(C$, 'getIFDValue$I', function (tag) {
return this.get$O( new Integer(tag));
});

Clazz.newMeth(C$, 'getIFDValue$I$Class', function (tag, checkClass) {
var value=this.get$O( new Integer(tag));
if (checkClass != null  && value != null   && !checkClass.isInstance$O(value) ) {
var cType=checkClass.getComponentType$();
var array=Clazz.array(cType == null  ? value.getClass$() : cType, 1);
if (cType === value.getClass$() ) {
$I$(2).set$O$I$O(array, 0, value);
} else if (cType === Boolean.TYPE  && Clazz.instanceOf(value, "java.lang.Boolean") ) {
$I$(2).setBoolean$O$I$Z(array, 0, (value).booleanValue$());
} else if (cType === Byte.TYPE  && Clazz.instanceOf(value, "java.lang.Byte") ) {
$I$(2).setByte$O$I$B(array, 0, ($b$[0] = (value).byteValue$(), $b$[0]));
} else if (cType === Character.TYPE  && Clazz.instanceOf(value, "java.lang.Character") ) {
$I$(2).setChar$O$I$C(array, 0, (value).charValue$());
} else if (cType === Double.TYPE  && Clazz.instanceOf(value, "java.lang.Double") ) {
$I$(2).setDouble$O$I$D(array, 0, (value).doubleValue$());
} else if (cType === Float.TYPE  && Clazz.instanceOf(value, "java.lang.Float") ) {
$I$(2).setFloat$O$I$F(array, 0, (value).floatValue$());
} else if (cType === Integer.TYPE  && Clazz.instanceOf(value, "java.lang.Integer") ) {
$I$(2).setInt$O$I$I(array, 0, (value).intValue$());
} else if (cType === Long.TYPE  && Clazz.instanceOf(value, "java.lang.Long") ) {
$I$(2).setLong$O$I$J(array, 0, (value).longValue$());
} else if (cType === Short.TYPE  && Clazz.instanceOf(value, "java.lang.Short") ) {
$I$(2).setShort$O$I$H(array, 0, (value).shortValue$());
} else {
try {
value=$I$(2).get$O$I(value, 0);
if (checkClass.isInstance$O(value)) return value;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var exc = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var exc = e$$;
{
return null;
}
} else {
throw e$$;
}
}
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,[C$.getIFDTagName$I(tag) + " directory entry is the wrong type (got " + value.getClass$().getName$() + ", expected " + checkClass.getName$() ]);
}return array;
}return value;
});

Clazz.newMeth(C$, 'getIFDLongValue$I$J', function (tag, defaultValue) {
var value=defaultValue;
var number=this.getIFDValue$I$Class(tag, Clazz.getClass(Number));
if (number != null ) value=number.longValue$();
return value;
});

Clazz.newMeth(C$, 'getIFDIntValue$I', function (tag) {
var value=-1;
try {
value=this.getIFDIntValue$I$I(tag, -1);
} catch (exc) {
if (Clazz.exceptionOf(exc,"io.scif.FormatException")){
} else {
throw exc;
}
}
return value;
});

Clazz.newMeth(C$, 'getIFDIntValue$I$I', function (tag, defaultValue) {
var value=defaultValue;
var number=this.getIFDValue$I$Class(tag, Clazz.getClass(Number));
if (number != null ) value=number.intValue$();
return value;
});

Clazz.newMeth(C$, 'getIFDRationalValue$I', function (tag) {
return this.getIFDValue$I$Class(tag, Clazz.getClass($I$(3)));
});

Clazz.newMeth(C$, 'getIFDStringValue$I', function (tag) {
return this.getIFDValue$I$Class(tag, Clazz.getClass(String));
});

Clazz.newMeth(C$, 'getIFDTextValue$I', function (tag) {
var value=null;
var o=this.getIFDValue$I(tag);
if (Clazz.instanceOf(o, Clazz.array(String, -1))) {
var sb=Clazz.new_($I$(4,1));
var s=o;
for (var i=0; i < s.length; i++) {
sb.append$S(s[i]);
if (i < s.length - 1) sb.append$S("\n");
}
value=sb.toString();
} else if (Clazz.instanceOf(o, Clazz.array(Short.TYPE, -1))) {
var sb=Clazz.new_($I$(4,1));
for (var s, $s = 0, $$s = (o); $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (!Character.isISOControl$C(String.fromCharCode(s))) {
sb.append$C(String.fromCharCode(s));
} else if (s != 0) sb.append$S("\n");
}
value=sb.toString();
} else if (o != null ) value=o.toString();
if (value != null ) {
value=value.replaceAll$S$S("\r\n", "\n");
value=value.replaceAll$S$S("\r", "\n");
}return value;
});

Clazz.newMeth(C$, 'getIFDLongArray$I', function (tag) {
var value=this.getIFDValue$I(tag);
var results=null;
if (Clazz.instanceOf(value, Clazz.array(Long.TYPE, -1))) results=value;
 else if (Clazz.instanceOf(value, "java.lang.Number")) {
results=Clazz.array(Long.TYPE, -1, [(value).longValue$()]);
} else if (Clazz.instanceOf(value, Clazz.array(Number, -1))) {
var numbers=value;
results=Clazz.array(Long.TYPE, [numbers.length]);
for (var i=0; i < results.length; i++) results[i]=numbers[i].longValue$();

} else if (Clazz.instanceOf(value, Clazz.array(Integer.TYPE, -1))) {
var integers=value;
results=Clazz.array(Long.TYPE, [integers.length]);
for (var i=0; i < integers.length; i++) results[i]=integers[i];

} else if (value != null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,[C$.getIFDTagName$I(tag) + " directory entry is the wrong type (got " + value.getClass$().getName$() + ", expected Number, long[], Number[] or int[])" ]);
}return results;
});

Clazz.newMeth(C$, 'getIFDIntArray$I', function (tag) {
var value=this.getIFDValue$I(tag);
var results=null;
if (Clazz.instanceOf(value, Clazz.array(Integer.TYPE, -1))) results=value;
 else if (Clazz.instanceOf(value, Clazz.array(Long.TYPE, -1))) {
var v=value;
results=Clazz.array(Integer.TYPE, [v.length]);
for (var i=0; i < v.length; i++) {
results[i]=(v[i]|0);
}
} else if (Clazz.instanceOf(value, "java.lang.Number")) {
results=Clazz.array(Integer.TYPE, -1, [(value).intValue$()]);
} else if (Clazz.instanceOf(value, Clazz.array(Number, -1))) {
var numbers=value;
results=Clazz.array(Integer.TYPE, [numbers.length]);
for (var i=0; i < results.length; i++) results[i]=numbers[i].intValue$();

} else if (value != null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,[C$.getIFDTagName$I(tag) + " directory entry is the wrong type (got " + value.getClass$().getName$() + ", expected Number, int[] or Number[])" ]);
}return results;
});

Clazz.newMeth(C$, 'getIFDShortArray$I', function (tag) {
var value=this.getIFDValue$I(tag);
var results=null;
if (Clazz.instanceOf(value, Clazz.array(Short.TYPE, -1))) results=value;
 else if (Clazz.instanceOf(value, Clazz.array(Integer.TYPE, -1))) {
var v=value;
results=Clazz.array(Short.TYPE, [v.length]);
for (var i=0; i < v.length; i++) {
results[i]=(v[i]|0);
}
} else if (Clazz.instanceOf(value, "java.lang.Number")) {
results=Clazz.array(Short.TYPE, -1, [(value).shortValue$()]);
} else if (Clazz.instanceOf(value, Clazz.array(Number, -1))) {
var numbers=value;
results=Clazz.array(Short.TYPE, [numbers.length]);
for (var i=0; i < results.length; i++) {
results[i]=numbers[i].shortValue$();
}
} else if (value != null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,[C$.getIFDTagName$I(tag) + " directory entry is the wrong type (got " + value.getClass$().getName$() + ", expected Number, short[] or Number[])" ]);
}return results;
});

Clazz.newMeth(C$, 'getComment$', function () {
return this.getIFDTextValue$I(270);
});

Clazz.newMeth(C$, 'getFillOrder$', function () {
var fillOrder=this.getIFDIntValue$I$I(266, 1);
return $I$(5).get$I(fillOrder);
});

Clazz.newMeth(C$, 'getTileWidth$', function () {
var tileWidth=this.getIFDLongValue$I$J(322, 0);
return tileWidth == 0 ? this.getImageWidth$() : tileWidth;
});

Clazz.newMeth(C$, 'getTileLength$', function () {
var tileLength=this.getIFDLongValue$I$J(323, 0);
return tileLength == 0 ? this.getRowsPerStrip$()[0] : tileLength;
});

Clazz.newMeth(C$, 'getTilesPerRow$', function () {
var tileWidth=this.getTileWidth$();
var imageWidth=this.getImageWidth$();
var nTiles=(imageWidth/tileWidth|0);
if (nTiles * tileWidth < imageWidth) nTiles++;
return nTiles;
});

Clazz.newMeth(C$, 'getTilesPerColumn$', function () {
var tileLength=this.getTileLength$();
var imageLength=this.getImageLength$();
var nTiles=(imageLength/tileLength|0);
if (nTiles * tileLength < imageLength) nTiles++;
return nTiles;
});

Clazz.newMeth(C$, 'isTiled$', function () {
var offsets=this.get$O( new Integer(273));
var tileWidth=this.get$O( new Integer(322));
return offsets == null  && tileWidth != null  ;
});

Clazz.newMeth(C$, 'getImageWidth$', function () {
var width=this.getIFDLongValue$I$J(256, 0);
if (width > 2147483647) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, ImageWidth > 2147483647 is not supported."]);
}return width;
});

Clazz.newMeth(C$, 'getImageLength$', function () {
var length=this.getIFDLongValue$I$J(257, 0);
if (length > 2147483647) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, ImageLength > 2147483647 is not supported."]);
}return length;
});

Clazz.newMeth(C$, 'getBitsPerSample$', function () {
var bitsPerSample=this.getIFDIntArray$I(258);
if (bitsPerSample == null ) bitsPerSample=Clazz.array(Integer.TYPE, -1, [1]);
var samplesPerPixel=this.getSamplesPerPixel$();
if (bitsPerSample.length < samplesPerPixel) {
this.log.debug$O("BitsPerSample length (" + bitsPerSample.length + ") does not match SamplesPerPixel (" + samplesPerPixel + ")" );
var bits=bitsPerSample[0];
bitsPerSample=Clazz.array(Integer.TYPE, [samplesPerPixel]);
$I$(6).fill$IA$I(bitsPerSample, bits);
}var nSamples=Math.min(bitsPerSample.length, samplesPerPixel);
for (var i=0; i < nSamples; i++) {
if (bitsPerSample[i] < 1) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Illegal BitsPerSample (" + bitsPerSample[i] + ")" ]);
}}
return bitsPerSample;
});

Clazz.newMeth(C$, 'getPixelType$', function () {
var bps=this.getBitsPerSample$()[0];
var bitFormat=this.getIFDIntValue$I(339);
while (bps % 8 != 0)bps++;

if (bps == 24 && bitFormat != 3 ) bps=32;
switch (bps) {
case 16:
if (bitFormat == 3) return 6;
return bitFormat == 2 ? 2 : 3;
case 24:
return 6;
case 64:
return 7;
case 32:
if (bitFormat == 3) return 6;
return bitFormat == 2 ? 4 : 5;
default:
return bitFormat == 2 ? 0 : 1;
}
});

Clazz.newMeth(C$, 'getBytesPerSample$', function () {
var bitsPerSample=this.getBitsPerSample$();
var bps=Clazz.array(Integer.TYPE, [bitsPerSample.length]);
for (var i=0; i < bitsPerSample.length; i++) {
bps[i]=bitsPerSample[i];
while ((bps[i] % 8) != 0)bps[i]++;

bps[i]=(bps[i]/(8)|0);
if (bps[i] == 0) bps[i]=1;
}
return bps;
});

Clazz.newMeth(C$, 'getSamplesPerPixel$', function () {
if (this.getCompression$() === $I$(7).OLD_JPEG ) {
return 3;
}return this.getIFDIntValue$I$I(277, 1);
});

Clazz.newMeth(C$, 'getCompression$', function () {
return $I$(7).get$I(this.getIFDIntValue$I$I(259, $I$(7).UNCOMPRESSED.getCode$()));
});

Clazz.newMeth(C$, 'getPhotometricInterpretation$', function () {
var photo=this.getIFDValue$I(262);
if (Clazz.instanceOf(photo, "io.scif.formats.tiff.PhotoInterp")) return photo;
if (photo == null  && this.getCompression$() === $I$(7).OLD_JPEG  ) {
return $I$(8).RGB;
}var pi=Clazz.instanceOf(photo, "java.lang.Number") ? (photo).intValue$() : (photo)[0];
return $I$(8).get$I(pi);
});

Clazz.newMeth(C$, 'getPlanarConfiguration$', function () {
var planarConfig=this.getIFDIntValue$I$I(284, 1);
if (planarConfig != 1 && planarConfig != 2 ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, PlanarConfiguration (" + planarConfig + ") not supported." ]);
}return planarConfig;
});

Clazz.newMeth(C$, 'getStripOffsets$', function () {
var tag=this.isTiled$() ? 324 : 273;
var offsets=null;
var compressedOffsets=this.getOnDemandStripOffsets$();
if (compressedOffsets != null ) {
offsets=Clazz.array(Long.TYPE, [(compressedOffsets.size$()|0)]);
try {
for (var q=0; q < offsets.length; q++) {
offsets[q]=compressedOffsets.get$I(q);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Failed to retrieve offset", e]);
} else {
throw e;
}
}
} else {
offsets=this.getIFDLongArray$I(tag);
}if (this.isTiled$() && offsets == null  ) {
offsets=this.getIFDLongArray$I(273);
}if (offsets == null ) return null;
for (var i=0; i < offsets.length; i++) {
if (offsets[i] < 0) {
offsets[i]+=4294967296;
}}
if (this.isTiled$()) return offsets;
var rowsPerStrip=this.getRowsPerStrip$()[0];
var numStrips=((this.getImageLength$() + rowsPerStrip - 1)/rowsPerStrip|0);
if (this.getPlanarConfiguration$() == 2) numStrips*=this.getSamplesPerPixel$();
if (offsets.length < numStrips) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["StripOffsets length (" + offsets.length + ") does not match expected " + "number of strips (" + numStrips + ")" ]);
}return offsets;
});

Clazz.newMeth(C$, 'getOnDemandStripOffsets$', function () {
var tag=this.isTiled$() ? 324 : 273;
var offsets=this.getIFDValue$I(tag);
if (Clazz.instanceOf(offsets, "io.scif.formats.tiff.OnDemandLongArray")) {
return offsets;
}return null;
});

Clazz.newMeth(C$, 'getStripByteCounts$', function () {
var tag=this.isTiled$() ? 325 : 279;
var byteCounts=this.getIFDLongArray$I(tag);
if (this.isTiled$() && byteCounts == null  ) {
byteCounts=this.getIFDLongArray$I(279);
}var imageLength=this.getImageLength$();
if (byteCounts == null ) {
var offsets=this.getStripOffsets$();
if (offsets == null ) return null;
var bytesPerSample=this.getBytesPerSample$()[0];
var imageWidth=this.getImageWidth$();
byteCounts=Clazz.array(Long.TYPE, [offsets.length]);
var samples=this.getSamplesPerPixel$();
var imageSize=imageWidth * imageLength * bytesPerSample * (this.getPlanarConfiguration$() == 2 ? 1 : samples) ;
var count=(imageSize/byteCounts.length|0);
$I$(6).fill$JA$J(byteCounts, count);
}var counts=Clazz.array(Long.TYPE, [byteCounts.length]);
if (this.getCompression$() === $I$(7).LZW  && (!this.containsKey$O(new Integer(278)) || ((imageLength % this.getRowsPerStrip$()[0])) != 0 ) ) {
for (var i=0; i < byteCounts.length; i++) {
counts[i]=byteCounts[i] * 2;
}
} else System.arraycopy$O$I$O$I$I(byteCounts, 0, counts, 0, counts.length);
if (this.isTiled$()) return counts;
var rowsPerStrip=this.getRowsPerStrip$()[0];
var numStrips=((this.getImageLength$() + rowsPerStrip - 1)/rowsPerStrip|0);
if (this.getPlanarConfiguration$() == 2) numStrips*=this.getSamplesPerPixel$();
if (counts.length < numStrips) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["StripByteCounts length (" + counts.length + ") does not match expected " + "number of strips (" + numStrips + ")" ]);
}return counts;
});

Clazz.newMeth(C$, 'getRowsPerStrip$', function () {
var rowsPerStrip=this.getIFDLongArray$I(278);
if (rowsPerStrip == null ) {
return Clazz.array(Long.TYPE, -1, [this.getImageLength$()]);
}var imageLength=this.getImageLength$();
for (var i=0; i < rowsPerStrip.length; i++) {
rowsPerStrip[i]=Math.min(rowsPerStrip[i], imageLength);
}
var rows=rowsPerStrip[0];
for (var i=1; i < rowsPerStrip.length; i++) {
if (rows != rowsPerStrip[i]) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, non-uniform RowsPerStrip is not supported"]);
}}
return rowsPerStrip;
});

Clazz.newMeth(C$, 'getResolutionUnit$', function () {
var resolutionUnit=this.getIFDIntValue$I$I(296, 1);
return $I$(9).get$I(resolutionUnit);
});

Clazz.newMeth(C$, 'getResolutionMultiplier$', function () {
var resolutionUnit=this.getResolutionUnit$();
switch (resolutionUnit) {
case $I$(9).INCH:
return 25400;
case $I$(9).CENTIMETER:
return 10000;
default:
return 1;
}
});

Clazz.newMeth(C$, 'getXResolution$', function () {
var xResolution=this.getIFDRationalValue$I(282);
if (xResolution == null ) return null;
var x=1 / xResolution.doubleValue$();
var multiplier=this.getResolutionMultiplier$();
return new Double(x * multiplier);
});

Clazz.newMeth(C$, 'getYResolution$', function () {
var yResolution=this.getIFDRationalValue$I(283);
if (yResolution == null ) return null;
var y=1 / yResolution.doubleValue$();
var multiplier=this.getResolutionMultiplier$();
return new Double(y * multiplier);
});

Clazz.newMeth(C$, 'putIFDValue$I$O', function (tag, value) {
this.put$TK$TV( new Integer(tag), value);
});

Clazz.newMeth(C$, 'putIFDValue$I$H', function (tag, value) {
this.putIFDValue$I$O(tag,  new Short(value));
});

Clazz.newMeth(C$, 'putIFDValue$I$I', function (tag, value) {
this.putIFDValue$I$O(tag,  new Integer(value));
});

Clazz.newMeth(C$, 'putIFDValue$I$J', function (tag, value) {
this.putIFDValue$I$O(tag,  new Long(value));
});

Clazz.newMeth(C$, 'printIFD$', function () {
this.log.trace$O("IFD directory entry values:");
for (var tag, $tag = this.keySet$().iterator$(); $tag.hasNext$()&&((tag=($tag.next$())),1);) {
var value=this.get$O(tag);
var v=null;
if (value == null ) {
this.log.trace$O("\t" + C$.getIFDTagName$I(tag.intValue$()) + "=null" );
} else if ((Clazz.instanceOf(value, "java.lang.Boolean")) || (Clazz.instanceOf(value, "java.lang.Number")) || (Clazz.instanceOf(value, "java.lang.String")) || (Clazz.instanceOf(value, "io.scif.formats.tiff.PhotoInterp")) || (Clazz.instanceOf(value, "io.scif.formats.tiff.TiffCompression")) || (Clazz.instanceOf(value, "io.scif.formats.tiff.TiffIFDEntry"))  ) {
v=value.toString();
this.log.trace$O("\t" + C$.getIFDTagName$I(tag.intValue$()) + "=" + v );
} else {
this.log.trace$O("\t" + C$.getIFDTagName$I(tag.intValue$()) + "=" );
var nElements=$I$(2).getLength$O(value);
for (var i=0; i < nElements; i++) {
this.log.trace$O("\t\t" + $I$(2).get$O$I(value, i));
}
}}
});

Clazz.newMeth(C$, 'getIFDTagName$I', function (tag) {
return $I$(10).getFieldName$Class$I(Clazz.getClass(C$), tag);
}, 1);

Clazz.newMeth(C$, 'getFieldName$I', function (value) {
return $I$(10).getFieldName$Class$I(Clazz.getClass(C$), value);
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
