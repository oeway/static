(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'java.io.ByteArrayOutputStream','java.io.PrintStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFFaxDecompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFDecompressor');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.table1=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 7, 15, 31, 63, 127, 255]);
C$.table2=Clazz.array(Integer.TYPE, -1, [0, 128, 192, 224, 240, 248, 252, 254, 255]);
C$.flipTable=Clazz.array(Byte.TYPE, -1, [0, -128, 64, -64, 32, -96, 96, -32, 16, -112, 80, -48, 48, -80, 112, -16, 8, -120, 72, -56, 40, -88, 104, -24, 24, -104, 88, -40, 56, -72, 120, -8, 4, -124, 68, -60, 36, -92, 100, -28, 20, -108, 84, -44, 52, -76, 116, -12, 12, -116, 76, -52, 44, -84, 108, -20, 28, -100, 92, -36, 60, -68, 124, -4, 2, -126, 66, -62, 34, -94, 98, -30, 18, -110, 82, -46, 50, -78, 114, -14, 10, -118, 74, -54, 42, -86, 106, -22, 26, -102, 90, -38, 58, -70, 122, -6, 6, -122, 70, -58, 38, -90, 102, -26, 22, -106, 86, -42, 54, -74, 118, -10, 14, -114, 78, -50, 46, -82, 110, -18, 30, -98, 94, -34, 62, -66, 126, -2, 1, -127, 65, -63, 33, -95, 97, -31, 17, -111, 81, -47, 49, -79, 113, -15, 9, -119, 73, -55, 41, -87, 105, -23, 25, -103, 89, -39, 57, -71, 121, -7, 5, -123, 69, -59, 37, -91, 101, -27, 21, -107, 85, -43, 53, -75, 117, -11, 13, -115, 77, -51, 45, -83, 109, -19, 29, -99, 93, -35, 61, -67, 125, -3, 3, -125, 67, -61, 35, -93, 99, -29, 19, -109, 83, -45, 51, -77, 115, -13, 11, -117, 75, -53, 43, -85, 107, -21, 27, -101, 91, -37, 59, -69, 123, -5, 7, -121, 71, -57, 39, -89, 103, -25, 23, -105, 87, -41, 55, -73, 119, -9, 15, -113, 79, -49, 47, -81, 111, -17, 31, -97, 95, -33, 63, -65, 127, -1]);
C$.white=Clazz.array(Short.TYPE, -1, [6430, 6400, 6400, 6400, 3225, 3225, 3225, 3225, 944, 944, 944, 944, 976, 976, 976, 976, 1456, 1456, 1456, 1456, 1488, 1488, 1488, 1488, 718, 718, 718, 718, 718, 718, 718, 718, 750, 750, 750, 750, 750, 750, 750, 750, 1520, 1520, 1520, 1520, 1552, 1552, 1552, 1552, 428, 428, 428, 428, 428, 428, 428, 428, 428, 428, 428, 428, 428, 428, 428, 428, 654, 654, 654, 654, 654, 654, 654, 654, 1072, 1072, 1072, 1072, 1104, 1104, 1104, 1104, 1136, 1136, 1136, 1136, 1168, 1168, 1168, 1168, 1200, 1200, 1200, 1200, 1232, 1232, 1232, 1232, 622, 622, 622, 622, 622, 622, 622, 622, 1008, 1008, 1008, 1008, 1040, 1040, 1040, 1040, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 1712, 1712, 1712, 1712, 1744, 1744, 1744, 1744, 846, 846, 846, 846, 846, 846, 846, 846, 1264, 1264, 1264, 1264, 1296, 1296, 1296, 1296, 1328, 1328, 1328, 1328, 1360, 1360, 1360, 1360, 1392, 1392, 1392, 1392, 1424, 1424, 1424, 1424, 686, 686, 686, 686, 686, 686, 686, 686, 910, 910, 910, 910, 910, 910, 910, 910, 1968, 1968, 1968, 1968, 2000, 2000, 2000, 2000, 2032, 2032, 2032, 2032, 16, 16, 16, 16, 10257, 10257, 10257, 10257, 12305, 12305, 12305, 12305, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 878, 878, 878, 878, 878, 878, 878, 878, 1904, 1904, 1904, 1904, 1936, 1936, 1936, 1936, -18413, -18413, -16365, -16365, -14317, -14317, -10221, -10221, 590, 590, 590, 590, 590, 590, 590, 590, 782, 782, 782, 782, 782, 782, 782, 782, 1584, 1584, 1584, 1584, 1616, 1616, 1616, 1616, 1648, 1648, 1648, 1648, 1680, 1680, 1680, 1680, 814, 814, 814, 814, 814, 814, 814, 814, 1776, 1776, 1776, 1776, 1808, 1808, 1808, 1808, 1840, 1840, 1840, 1840, 1872, 1872, 1872, 1872, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, 6157, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, -12275, 14353, 14353, 14353, 14353, 16401, 16401, 16401, 16401, 22547, 22547, 24595, 24595, 20497, 20497, 20497, 20497, 18449, 18449, 18449, 18449, 26643, 26643, 28691, 28691, 30739, 30739, -32749, -32749, -30701, -30701, -28653, -28653, -26605, -26605, -24557, -24557, -22509, -22509, -20461, -20461, 8207, 8207, 8207, 8207, 8207, 8207, 8207, 8207, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 4107, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 266, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 524, 524, 524, 524, 524, 524, 524, 524, 524, 524, 524, 524, 524, 524, 524, 524, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 460, 460, 460, 460, 460, 460, 460, 460, 460, 460, 460, 460, 460, 460, 460, 460, 492, 492, 492, 492, 492, 492, 492, 492, 492, 492, 492, 492, 492, 492, 492, 492, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 2059, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232, 232]);
C$.additionalMakeup=Clazz.array(Short.TYPE, -1, [28679, 28679, 31752, -32759, -31735, -30711, -29687, -28663, 29703, 29703, 30727, 30727, -27639, -26615, -25591, -24567]);
C$.initBlack=Clazz.array(Short.TYPE, -1, [3226, 6412, 200, 168, 38, 38, 134, 134, 100, 100, 100, 100, 68, 68, 68, 68]);
C$.twoBitBlack=Clazz.array(Short.TYPE, -1, [292, 260, 226, 226]);
C$.black=Clazz.array(Short.TYPE, -1, [62, 62, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 3225, 588, 588, 588, 588, 588, 588, 588, 588, 1680, 1680, 20499, 22547, 24595, 26643, 1776, 1776, 1808, 1808, -24557, -22509, -20461, -18413, 1904, 1904, 1936, 1936, -16365, -14317, 782, 782, 782, 782, 814, 814, 814, 814, -12269, -10221, 10257, 10257, 12305, 12305, 14353, 14353, 16403, 18451, 1712, 1712, 1744, 1744, 28691, 30739, -32749, -30701, -28653, -26605, 2061, 2061, 2061, 2061, 2061, 2061, 2061, 2061, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 424, 750, 750, 750, 750, 1616, 1616, 1648, 1648, 1424, 1424, 1456, 1456, 1488, 1488, 1520, 1520, 1840, 1840, 1872, 1872, 1968, 1968, 8209, 8209, 524, 524, 524, 524, 524, 524, 524, 524, 556, 556, 556, 556, 556, 556, 556, 556, 1552, 1552, 1584, 1584, 2000, 2000, 2032, 2032, 976, 976, 1008, 1008, 1040, 1040, 1072, 1072, 1296, 1296, 1328, 1328, 718, 718, 718, 718, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 456, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 326, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 4113, 4113, 6161, 6161, 848, 848, 880, 880, 912, 912, 944, 944, 622, 622, 622, 622, 654, 654, 654, 654, 1104, 1104, 1136, 1136, 1168, 1168, 1200, 1200, 1232, 1232, 1264, 1264, 686, 686, 686, 686, 1360, 1360, 1392, 1392, 12, 12, 12, 12, 12, 12, 12, 12, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390]);
C$.twoDCodes=Clazz.array(Byte.TYPE, -1, [80, 88, 23, 71, 30, 30, 62, 62, 4, 4, 4, 4, 4, 4, 4, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41]);
}

Clazz.newMeth(C$, '$init$', function () {
this.uncompressedMode=0;
this.fillBits=0;
this.changingElemSize=0;
this.lastChangingElement=0;
}, 1);

C$.$fields$=[['I',['fillOrder','$compression','t4Options','t6Options','uncompressedMode','fillBits','oneD','bitPointer','bytePointer','w','h','bitsPerScanline','lineBitNum','changingElemSize','lastChangingElement'],'O',['+data','+buffer','prevChangingElems','int[]','+currChangingElems']]
,['O',['table1','int[]','+table2','flipTable','byte[]','white','short[]','+additionalMakeup','+initBlack','+twoBitBlack','+black','twoDCodes','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'beginDecoding$', function () {
C$.superclazz.prototype.beginDecoding$.apply(this, []);
if (Clazz.instanceOf(this.metadata, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata")) {
var tmetadata=this.metadata;
var f;
f=tmetadata.getTIFFField$I(266);
this.fillOrder=f == null  ? 1 : f.getAsInt$I(0);
f=tmetadata.getTIFFField$I(259);
this.$compression=f == null  ? 2 : f.getAsInt$I(0);
f=tmetadata.getTIFFField$I(292);
this.t4Options=f == null  ? 0 : f.getAsInt$I(0);
this.oneD=(this.t4Options & 1);
this.uncompressedMode=((this.t4Options & 2) >> 1);
this.fillBits=((this.t4Options & 4) >> 2);
f=tmetadata.getTIFFField$I(293);
this.t6Options=f == null  ? 0 : f.getAsInt$I(0);
} else {
this.fillOrder=1;
this.$compression=2;
this.t4Options=0;
this.oneD=0;
this.uncompressedMode=0;
this.fillBits=0;
this.t6Options=0;
}});

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (b, dstOffset, pixelBitStride, scanlineStride) {
this.buffer=b;
this.w=this.srcWidth;
this.h=this.srcHeight;
this.bitsPerScanline=scanlineStride * 8;
this.lineBitNum=8 * dstOffset;
this.data=Clazz.array(Byte.TYPE, [this.byteCount]);
this.bitPointer=0;
this.bytePointer=0;
this.prevChangingElems=Clazz.array(Integer.TYPE, [this.w + 1]);
this.currChangingElems=Clazz.array(Integer.TYPE, [this.w + 1]);
this.stream.seek$J(this.offset);
this.stream.readFully$BA(this.data);
try {
if (this.$compression == 2) {
this.decodeRLE$();
} else if (this.$compression == 3) {
this.decodeT4$();
} else if (this.$compression == 4) {
this.uncompressedMode=((this.t6Options & 2) >> 1);
this.decodeT6$();
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unknown compression type " + this.$compression]);
}} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
var baos=Clazz.new_($I$(1,1));
e.printStackTrace$java_io_PrintStream(Clazz.new_($I$(2,1).c$$java_io_OutputStream,[baos]));
var s= String.instantialize(baos.toByteArray$());
p$1.warning$S.apply(this, ["Ignoring exception:\n " + s]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'decodeRLE$', function () {
for (var i=0; i < this.h; i++) {
this.decodeNextScanline$I(this.srcMinY + i);
if (this.bitPointer != 0) {
this.bytePointer++;
this.bitPointer=0;
}this.lineBitNum+=this.bitsPerScanline;
}
});

Clazz.newMeth(C$, 'decodeNextScanline$I', function (lineIndex) {
var bits=0;
var code=0;
var isT=0;
var current;
var entry;
var twoBits;
var isWhite=true;
var dstEnd=0;
var bitOffset=0;
this.changingElemSize=0;
while (bitOffset < this.w){
var runOffset=bitOffset;
while (isWhite && bitOffset < this.w ){
current=p$1.nextNBits$I.apply(this, [10]);
entry=C$.white[current];
isT=entry & 1;
bits=(entry >>> 1) & 15;
if (bits == 12) {
twoBits=p$1.nextLesserThan8Bits$I.apply(this, [2]);
current=((current << 2) & 12) | twoBits;
entry=C$.additionalMakeup[current];
bits=(entry >>> 1) & 7;
code=(entry >>> 4) & 4095;
bitOffset+=code;
p$1.updatePointer$I.apply(this, [4 - bits]);
} else if (bits == 0) {
p$1.warning$S.apply(this, ["Error 0"]);
} else if (bits == 15) {
p$1.warning$S.apply(this, ["Premature EOL in white run of line " + lineIndex + ": read " + bitOffset + " of " + this.w + " expected pixels." ]);
return;
} else {
code=(entry >>> 5) & 2047;
bitOffset+=code;
p$1.updatePointer$I.apply(this, [10 - bits]);
if (isT == 0) {
isWhite=false;
this.currChangingElems[this.changingElemSize++]=bitOffset;
}}}
if (bitOffset == this.w) {
var runLength=bitOffset - runOffset;
if (isWhite && runLength != 0  && runLength % 64 == 0  && p$1.nextNBits$I.apply(this, [8]) != 53 ) {
p$1.warning$S.apply(this, ["Missing zero white run length terminating code!"]);
p$1.updatePointer$I.apply(this, [8]);
}break;
}runOffset=bitOffset;
while (isWhite == false  && bitOffset < this.w ){
current=p$1.nextLesserThan8Bits$I.apply(this, [4]);
entry=C$.initBlack[current];
isT=entry & 1;
bits=(entry >>> 1) & 15;
code=(entry >>> 5) & 2047;
if (code == 100) {
current=p$1.nextNBits$I.apply(this, [9]);
entry=C$.black[current];
isT=entry & 1;
bits=(entry >>> 1) & 15;
code=(entry >>> 5) & 2047;
if (bits == 12) {
p$1.updatePointer$I.apply(this, [5]);
current=p$1.nextLesserThan8Bits$I.apply(this, [4]);
entry=C$.additionalMakeup[current];
bits=(entry >>> 1) & 7;
code=(entry >>> 4) & 4095;
p$1.setToBlack$I$I.apply(this, [bitOffset, code]);
bitOffset+=code;
p$1.updatePointer$I.apply(this, [4 - bits]);
} else if (bits == 15) {
p$1.warning$S.apply(this, ["Premature EOL in black run of line " + lineIndex + ": read " + bitOffset + " of " + this.w + " expected pixels." ]);
return;
} else {
p$1.setToBlack$I$I.apply(this, [bitOffset, code]);
bitOffset+=code;
p$1.updatePointer$I.apply(this, [9 - bits]);
if (isT == 0) {
isWhite=true;
this.currChangingElems[this.changingElemSize++]=bitOffset;
}}} else if (code == 200) {
current=p$1.nextLesserThan8Bits$I.apply(this, [2]);
entry=C$.twoBitBlack[current];
code=(entry >>> 5) & 2047;
bits=(entry >>> 1) & 15;
p$1.setToBlack$I$I.apply(this, [bitOffset, code]);
bitOffset+=code;
p$1.updatePointer$I.apply(this, [2 - bits]);
isWhite=true;
this.currChangingElems[this.changingElemSize++]=bitOffset;
} else {
p$1.setToBlack$I$I.apply(this, [bitOffset, code]);
bitOffset+=code;
p$1.updatePointer$I.apply(this, [4 - bits]);
isWhite=true;
this.currChangingElems[this.changingElemSize++]=bitOffset;
}}
if (bitOffset == this.w) {
var runLength=bitOffset - runOffset;
if (!isWhite && runLength != 0  && runLength % 64 == 0  && p$1.nextNBits$I.apply(this, [10]) != 55 ) {
p$1.warning$S.apply(this, ["Missing zero black run length terminating code!"]);
p$1.updatePointer$I.apply(this, [10]);
}break;
}}
this.currChangingElems[this.changingElemSize++]=bitOffset;
});

Clazz.newMeth(C$, 'decodeT4$', function () {
var height=this.h;
var a0;
var a1;
var b1;
var b2;
var b=Clazz.array(Integer.TYPE, [2]);
var entry;
var code;
var bits;
var color;
var isWhite;
var currIndex=0;
var temp;
if (this.data.length < 2) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Insufficient data to read initial EOL."]);
}var next12=p$1.nextNBits$I.apply(this, [12]);
if (next12 != 1) {
p$1.warning$S.apply(this, ["T.4 compressed data should begin with EOL."]);
}p$1.updatePointer$I.apply(this, [12]);
var modeFlag=0;
var lines=-1;
while (modeFlag != 1){
try {
modeFlag=p$1.findNextLine.apply(this, []);
lines++;
} catch (eofe) {
if (Clazz.exceptionOf(eofe,"java.io.EOFException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["No reference line present."]);
} else {
throw eofe;
}
}
}
var bitOffset;
this.decodeNextScanline$I(this.srcMinY);
lines++;
this.lineBitNum+=this.bitsPerScanline;
while (lines < height){
try {
modeFlag=p$1.findNextLine.apply(this, []);
} catch (eofe) {
if (Clazz.exceptionOf(eofe,"java.io.EOFException")){
p$1.warning$S.apply(this, ["Input exhausted before EOL found at line " + (this.srcMinY + lines) + ": read 0 of " + this.w + " expected pixels." ]);
break;
} else {
throw eofe;
}
}
if (modeFlag == 0) {
temp=this.prevChangingElems;
this.prevChangingElems=this.currChangingElems;
this.currChangingElems=temp;
currIndex=0;
a0=-1;
isWhite=true;
bitOffset=0;
this.lastChangingElement=0;
while (bitOffset < this.w){
p$1.getNextChangingElement$I$Z$IA.apply(this, [a0, isWhite, b]);
b1=b[0];
b2=b[1];
entry=p$1.nextLesserThan8Bits$I.apply(this, [7]);
entry=(C$.twoDCodes[entry] & 255);
code=(entry & 120) >>> 3;
bits=entry & 7;
if (code == 0) {
if (!isWhite) {
p$1.setToBlack$I$I.apply(this, [bitOffset, b2 - bitOffset]);
}bitOffset=a0=b2;
p$1.updatePointer$I.apply(this, [7 - bits]);
} else if (code == 1) {
p$1.updatePointer$I.apply(this, [7 - bits]);
var number;
if (isWhite) {
number=p$1.decodeWhiteCodeWord.apply(this, []);
bitOffset+=number;
this.currChangingElems[currIndex++]=bitOffset;
number=p$1.decodeBlackCodeWord.apply(this, []);
p$1.setToBlack$I$I.apply(this, [bitOffset, number]);
bitOffset+=number;
this.currChangingElems[currIndex++]=bitOffset;
} else {
number=p$1.decodeBlackCodeWord.apply(this, []);
p$1.setToBlack$I$I.apply(this, [bitOffset, number]);
bitOffset+=number;
this.currChangingElems[currIndex++]=bitOffset;
number=p$1.decodeWhiteCodeWord.apply(this, []);
bitOffset+=number;
this.currChangingElems[currIndex++]=bitOffset;
}a0=bitOffset;
} else if (code <= 8) {
a1=b1 + (code - 5);
this.currChangingElems[currIndex++]=a1;
if (!isWhite) {
p$1.setToBlack$I$I.apply(this, [bitOffset, a1 - bitOffset]);
}bitOffset=a0=a1;
isWhite=!isWhite;
p$1.updatePointer$I.apply(this, [7 - bits]);
} else {
p$1.warning$S.apply(this, ["Unknown coding mode encountered at line " + (this.srcMinY + lines) + ": read " + bitOffset + " of " + this.w + " expected pixels." ]);
var numLinesTested=0;
while (modeFlag != 1){
try {
modeFlag=p$1.findNextLine.apply(this, []);
numLinesTested++;
} catch (eofe) {
if (Clazz.exceptionOf(eofe,"java.io.EOFException")){
p$1.warning$S.apply(this, ["Sync loss at line " + (this.srcMinY + lines) + ": read " + lines + " of " + height + " lines." ]);
return;
} else {
throw eofe;
}
}
}
lines+=numLinesTested - 1;
p$1.updatePointer$I.apply(this, [13]);
break;
}}
this.currChangingElems[currIndex++]=bitOffset;
this.changingElemSize=currIndex;
} else {
this.decodeNextScanline$I(this.srcMinY + lines);
}this.lineBitNum+=this.bitsPerScanline;
lines++;
}
});

Clazz.newMeth(C$, 'decodeT6$', function () {
var height=this.h;
var bufferOffset=0;
var a0;
var a1;
var b1;
var b2;
var entry;
var code;
var bits;
var color;
var isWhite;
var currIndex;
var temp;
var b=Clazz.array(Integer.TYPE, [2]);
var cce=this.currChangingElems;
this.changingElemSize=0;
cce[this.changingElemSize++]=this.w;
cce[this.changingElemSize++]=this.w;
var bitOffset;
for (var lines=0; lines < height; lines++) {
a0=-1;
isWhite=true;
temp=this.prevChangingElems;
this.prevChangingElems=this.currChangingElems;
cce=this.currChangingElems=temp;
currIndex=0;
bitOffset=0;
this.lastChangingElement=0;
while (bitOffset < this.w){
p$1.getNextChangingElement$I$Z$IA.apply(this, [a0, isWhite, b]);
b1=b[0];
b2=b[1];
entry=p$1.nextLesserThan8Bits$I.apply(this, [7]);
entry=(C$.twoDCodes[entry] & 255);
code=(entry & 120) >>> 3;
bits=entry & 7;
if (code == 0) {
if (!isWhite) {
if (b2 > this.w) {
b2=this.w;
p$1.warning$S.apply(this, ["Decoded row " + (this.srcMinY + lines) + " too long; ignoring extra samples." ]);
}p$1.setToBlack$I$I.apply(this, [bitOffset, b2 - bitOffset]);
}bitOffset=a0=b2;
p$1.updatePointer$I.apply(this, [7 - bits]);
} else if (code == 1) {
p$1.updatePointer$I.apply(this, [7 - bits]);
var number;
if (isWhite) {
number=p$1.decodeWhiteCodeWord.apply(this, []);
bitOffset+=number;
cce[currIndex++]=bitOffset;
number=p$1.decodeBlackCodeWord.apply(this, []);
if (number > this.w - bitOffset) {
number=this.w - bitOffset;
p$1.warning$S.apply(this, ["Decoded row " + (this.srcMinY + lines) + " too long; ignoring extra samples." ]);
}p$1.setToBlack$I$I.apply(this, [bitOffset, number]);
bitOffset+=number;
cce[currIndex++]=bitOffset;
} else {
number=p$1.decodeBlackCodeWord.apply(this, []);
if (number > this.w - bitOffset) {
number=this.w - bitOffset;
p$1.warning$S.apply(this, ["Decoded row " + (this.srcMinY + lines) + " too long; ignoring extra samples." ]);
}p$1.setToBlack$I$I.apply(this, [bitOffset, number]);
bitOffset+=number;
cce[currIndex++]=bitOffset;
number=p$1.decodeWhiteCodeWord.apply(this, []);
bitOffset+=number;
cce[currIndex++]=bitOffset;
}a0=bitOffset;
} else if (code <= 8) {
a1=b1 + (code - 5);
cce[currIndex++]=a1;
if (!isWhite) {
if (a1 > this.w) {
a1=this.w;
p$1.warning$S.apply(this, ["Decoded row " + (this.srcMinY + lines) + " too long; ignoring extra samples." ]);
}p$1.setToBlack$I$I.apply(this, [bitOffset, a1 - bitOffset]);
}bitOffset=a0=a1;
isWhite=!isWhite;
p$1.updatePointer$I.apply(this, [7 - bits]);
} else if (code == 11) {
var entranceCode=p$1.nextLesserThan8Bits$I.apply(this, [3]);
if (entranceCode != 7) {
var msg="Unsupported entrance code " + entranceCode + " for extension mode at line " + (this.srcMinY + lines) + "." ;
p$1.warning$S.apply(this, [msg]);
}var zeros=0;
var exit=false;
while (!exit){
while (p$1.nextLesserThan8Bits$I.apply(this, [1]) != 1){
zeros++;
}
if (zeros > 5) {
zeros=zeros - 6;
if (!isWhite && (zeros > 0) ) {
cce[currIndex++]=bitOffset;
}bitOffset+=zeros;
if (zeros > 0) {
isWhite=true;
}if (p$1.nextLesserThan8Bits$I.apply(this, [1]) == 0) {
if (!isWhite) {
cce[currIndex++]=bitOffset;
}isWhite=true;
} else {
if (isWhite) {
cce[currIndex++]=bitOffset;
}isWhite=false;
}exit=true;
}if (zeros == 5) {
if (!isWhite) {
cce[currIndex++]=bitOffset;
}bitOffset+=zeros;
isWhite=true;
} else {
bitOffset+=zeros;
cce[currIndex++]=bitOffset;
p$1.setToBlack$I$I.apply(this, [bitOffset, 1]);
++bitOffset;
isWhite=false;
}}
} else {
var msg="Unknown coding mode encountered at line " + (this.srcMinY + lines) + "." ;
p$1.warning$S.apply(this, [msg]);
}}
if (currIndex <= this.w) cce[currIndex++]=bitOffset;
this.changingElemSize=currIndex;
this.lineBitNum+=this.bitsPerScanline;
}
});

Clazz.newMeth(C$, 'setToBlack$I$I', function (bitNum, numBits) {
bitNum+=this.lineBitNum;
var lastBit=bitNum + numBits;
var byteNum=bitNum >> 3;
var shift=bitNum & 7;
if (shift > 0) {
var maskVal=1 << (7 - shift);
var val=($b$[0] = this.buffer[byteNum], $b$[0]);
while (maskVal > 0 && bitNum < lastBit ){
val=($b$[0] = val|(maskVal), $b$[0]);
maskVal>>=1;
++bitNum;
}
this.buffer[byteNum]=(val|0);
}byteNum=bitNum >> 3;
while (bitNum < lastBit - 7){
this.buffer[byteNum++]=(-1|0);
bitNum+=8;
}
while (bitNum < lastBit){
byteNum=bitNum >> 3;
this.buffer[$k$=byteNum]=(this.buffer[$k$]|(1 << (7 - (bitNum & 7)))|0);
++bitNum;
}
}, p$1);

Clazz.newMeth(C$, 'decodeWhiteCodeWord', function () {
var current;
var entry;
var bits;
var isT;
var twoBits;
var code=-1;
var runLength=0;
var isWhite=true;
while (isWhite){
current=p$1.nextNBits$I.apply(this, [10]);
entry=C$.white[current];
isT=entry & 1;
bits=(entry >>> 1) & 15;
if (bits == 12) {
twoBits=p$1.nextLesserThan8Bits$I.apply(this, [2]);
current=((current << 2) & 12) | twoBits;
entry=C$.additionalMakeup[current];
bits=(entry >>> 1) & 7;
code=(entry >>> 4) & 4095;
runLength+=code;
p$1.updatePointer$I.apply(this, [4 - bits]);
} else if (bits == 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Error 0"]);
} else if (bits == 15) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Error 1"]);
} else {
code=(entry >>> 5) & 2047;
runLength+=code;
p$1.updatePointer$I.apply(this, [10 - bits]);
if (isT == 0) {
isWhite=false;
}}}
return runLength;
}, p$1);

Clazz.newMeth(C$, 'decodeBlackCodeWord', function () {
var current;
var entry;
var bits;
var isT;
var twoBits;
var code=-1;
var runLength=0;
var isWhite=false;
while (!isWhite){
current=p$1.nextLesserThan8Bits$I.apply(this, [4]);
entry=C$.initBlack[current];
isT=entry & 1;
bits=(entry >>> 1) & 15;
code=(entry >>> 5) & 2047;
if (code == 100) {
current=p$1.nextNBits$I.apply(this, [9]);
entry=C$.black[current];
isT=entry & 1;
bits=(entry >>> 1) & 15;
code=(entry >>> 5) & 2047;
if (bits == 12) {
p$1.updatePointer$I.apply(this, [5]);
current=p$1.nextLesserThan8Bits$I.apply(this, [4]);
entry=C$.additionalMakeup[current];
bits=(entry >>> 1) & 7;
code=(entry >>> 4) & 4095;
runLength+=code;
p$1.updatePointer$I.apply(this, [4 - bits]);
} else if (bits == 15) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Error 2"]);
} else {
runLength+=code;
p$1.updatePointer$I.apply(this, [9 - bits]);
if (isT == 0) {
isWhite=true;
}}} else if (code == 200) {
current=p$1.nextLesserThan8Bits$I.apply(this, [2]);
entry=C$.twoBitBlack[current];
code=(entry >>> 5) & 2047;
runLength+=code;
bits=(entry >>> 1) & 15;
p$1.updatePointer$I.apply(this, [2 - bits]);
isWhite=true;
} else {
runLength+=code;
p$1.updatePointer$I.apply(this, [4 - bits]);
isWhite=true;
}}
return runLength;
}, p$1);

Clazz.newMeth(C$, 'findNextLine', function () {
var bitIndexMax=this.data.length * 8 - 1;
var bitIndexMax12=bitIndexMax - 12;
var bitIndex=this.bytePointer * 8 + this.bitPointer;
while (bitIndex <= bitIndexMax12){
var next12Bits=p$1.nextNBits$I.apply(this, [12]);
bitIndex+=12;
while (next12Bits != 1 && bitIndex < bitIndexMax ){
next12Bits=((next12Bits & 2047) << 1) | (p$1.nextLesserThan8Bits$I.apply(this, [1]) & 1);
bitIndex++;
}
if (next12Bits == 1) {
if (this.oneD == 1) {
if (bitIndex < bitIndexMax) {
return p$1.nextLesserThan8Bits$I.apply(this, [1]);
}} else {
return 1;
}}}
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}, p$1);

Clazz.newMeth(C$, 'getNextChangingElement$I$Z$IA', function (a0, isWhite, ret) {
var pce=this.prevChangingElems;
var ces=this.changingElemSize;
var start=this.lastChangingElement > 0 ? this.lastChangingElement - 1 : 0;
if (isWhite) {
start&=~1;
} else {
start|=1;
}var i=start;
for (; i < ces; i+=2) {
var temp=pce[i];
if (temp > a0) {
this.lastChangingElement=i;
ret[0]=temp;
break;
}}
if (i + 1 < ces) {
ret[1]=pce[i + 1];
}}, p$1);

Clazz.newMeth(C$, 'nextNBits$I', function (bitsToGet) {
var b;
var next;
var next2next;
var l=this.data.length - 1;
var bp=this.bytePointer;
if (this.fillOrder == 1) {
b=($b$[0] = this.data[bp], $b$[0]);
if (bp == l) {
next=($b$[0] = 0, $b$[0]);
next2next=($b$[0] = 0, $b$[0]);
} else if ((bp + 1) == l) {
next=($b$[0] = this.data[bp + 1], $b$[0]);
next2next=($b$[0] = 0, $b$[0]);
} else {
next=($b$[0] = this.data[bp + 1], $b$[0]);
next2next=($b$[0] = this.data[bp + 2], $b$[0]);
}} else if (this.fillOrder == 2) {
b=($b$[0] = C$.flipTable[this.data[bp] & 255], $b$[0]);
if (bp == l) {
next=($b$[0] = 0, $b$[0]);
next2next=($b$[0] = 0, $b$[0]);
} else if ((bp + 1) == l) {
next=($b$[0] = C$.flipTable[this.data[bp + 1] & 255], $b$[0]);
next2next=($b$[0] = 0, $b$[0]);
} else {
next=($b$[0] = C$.flipTable[this.data[bp + 1] & 255], $b$[0]);
next2next=($b$[0] = C$.flipTable[this.data[bp + 2] & 255], $b$[0]);
}} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Invalid FillOrder"]);
}var bitsLeft=8 - this.bitPointer;
var bitsFromNextByte=bitsToGet - bitsLeft;
var bitsFromNext2NextByte=0;
if (bitsFromNextByte > 8) {
bitsFromNext2NextByte=bitsFromNextByte - 8;
bitsFromNextByte=8;
}this.bytePointer++;
var i1=(b & C$.table1[bitsLeft]) << (bitsToGet - bitsLeft);
var i2=(next & C$.table2[bitsFromNextByte]) >>> (8 - bitsFromNextByte);
var i3=0;
if (bitsFromNext2NextByte != 0) {
i2<<=bitsFromNext2NextByte;
i3=(next2next & C$.table2[bitsFromNext2NextByte]) >>> (8 - bitsFromNext2NextByte);
i2|=i3;
this.bytePointer++;
this.bitPointer=bitsFromNext2NextByte;
} else {
if (bitsFromNextByte == 8) {
this.bitPointer=0;
this.bytePointer++;
} else {
this.bitPointer=bitsFromNextByte;
}}var i=i1 | i2;
return i;
}, p$1);

Clazz.newMeth(C$, 'nextLesserThan8Bits$I', function (bitsToGet) {
var b;
var next;
var l=this.data.length - 1;
var bp=this.bytePointer;
if (this.fillOrder == 1) {
b=($b$[0] = this.data[bp], $b$[0]);
if (bp == l) {
next=($b$[0] = 0, $b$[0]);
} else {
next=($b$[0] = this.data[bp + 1], $b$[0]);
}} else if (this.fillOrder == 2) {
b=($b$[0] = C$.flipTable[this.data[bp] & 255], $b$[0]);
if (bp == l) {
next=($b$[0] = 0, $b$[0]);
} else {
next=($b$[0] = C$.flipTable[this.data[bp + 1] & 255], $b$[0]);
}} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Invalid FillOrder"]);
}var bitsLeft=8 - this.bitPointer;
var bitsFromNextByte=bitsToGet - bitsLeft;
var shift=bitsLeft - bitsToGet;
var i1;
var i2;
if (shift >= 0) {
i1=(b & C$.table1[bitsLeft]) >>> shift;
this.bitPointer+=bitsToGet;
if (this.bitPointer == 8) {
this.bitPointer=0;
this.bytePointer++;
}} else {
i1=(b & C$.table1[bitsLeft]) << (-shift);
i2=(next & C$.table2[bitsFromNextByte]) >>> (8 - bitsFromNextByte);
i1|=i2;
this.bytePointer++;
this.bitPointer=bitsFromNextByte;
}return i1;
}, p$1);

Clazz.newMeth(C$, 'updatePointer$I', function (bitsToMoveBack) {
if (bitsToMoveBack > 8) {
this.bytePointer-=(bitsToMoveBack/8|0);
bitsToMoveBack%=8;
}var i=this.bitPointer - bitsToMoveBack;
if (i < 0) {
this.bytePointer--;
this.bitPointer=8 + i;
} else {
this.bitPointer=i;
}}, p$1);

Clazz.newMeth(C$, 'warning$S', function (msg) {
if (Clazz.instanceOf(this.reader, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageReader")) {
(this.reader).forwardWarningMessage$S(msg);
}}, p$1);
var $b$ = new Int8Array(1);
var $k$;
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
