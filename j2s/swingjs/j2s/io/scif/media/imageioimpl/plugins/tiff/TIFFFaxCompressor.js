(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TIFFFaxCompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFCompressor');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.byteTable=Clazz.array(Byte.TYPE, -1, [8, 7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
C$.termCodesBlack=Clazz.array(Integer.TYPE, -1, [230686730, 1073741827, -1073741822, -2147483646, 1610612739, 805306372, 536870916, 402653189, 335544326, 268435462, 134217735, 167772167, 234881031, 67108872, 117440520, 201326601, 96469002, 100663306, 33554442, 216006667, 218103819, 226492427, 115343371, 83886091, 48234507, 50331659, 211812364, 212860940, 213909516, 214958092, 109051916, 110100492, 111149068, 112197644, 220200972, 221249548, 222298124, 223346700, 224395276, 225443852, 113246220, 114294796, 228589580, 229638156, 88080396, 89128972, 90177548, 91226124, 104857612, 105906188, 85983244, 87031820, 37748748, 57671692, 58720268, 40894476, 41943052, 92274700, 93323276, 45088780, 46137356, 94371852, 106954764, 108003340]);
C$.termCodesWhite=Clazz.array(Integer.TYPE, -1, [889192456, 469762054, 1879048196, -2147483644, -1342177276, -1073741820, -536870908, -268435452, -1744830459, -1610612731, 939524101, 1073741829, 536870918, 201326598, -805306362, -738197498, -1476395002, -1409286138, 1308622855, 402653191, 268435463, 771751943, 100663303, 134217735, 1342177287, 1442840583, 637534215, 1207959559, 805306375, 33554440, 50331656, 436207624, 452984840, 301989896, 318767112, 335544328, 352321544, 369098760, 385875976, 671088648, 687865864, 704643080, 721420296, 738197512, 754974728, 67108872, 83886088, 167772168, 184549384, 1375731720, 1392508936, 1409286152, 1426063368, 603979784, 620757000, 1476395016, 1493172232, 1509949448, 1526726664, 1241513992, 1258291208, 838860808, 855638024, 872415240]);
C$.makeupCodesBlack=Clazz.array(Integer.TYPE, -1, [0, 62914570, 209715212, 210763788, 95420428, 53477388, 54525964, 55574540, 56623117, 57147405, 38797325, 39321613, 39845901, 40370189, 59768845, 60293133, 60817421, 61341709, 61865997, 62390285, 42991629, 43515917, 44040205, 44564493, 47185933, 47710221, 52428813, 52953101, 16777227, 25165835, 27262987, 18874380, 19922956, 20971532, 22020108, 23068684, 24117260, 29360140, 30408716, 31457292, 32505868, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
C$.makeupCodesWhite=Clazz.array(Integer.TYPE, -1, [0, -671088635, -1879048187, 1543503878, 1845493767, 905969672, 922746888, 1677721608, 1694498824, 1744830472, 1728053256, 1711276041, 1719664649, 1761607689, 1769996297, 1778384905, 1786773513, 1795162121, 1803550729, 1811939337, 1820327945, 1828716553, 1837105161, 1275068425, 1283457033, 1291845641, 1610612742, 1300234249, 16777227, 25165835, 27262987, 18874380, 19922956, 20971532, 22020108, 23068684, 24117260, 29360140, 30408716, 31457292, 32505868, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
C$.passMode=Clazz.array(Integer.TYPE, -1, [268435460]);
C$.vertMode=Clazz.array(Integer.TYPE, -1, [100663303, 201326598, 1610612739, -2147483647, 1073741827, 134217734, 67108871]);
C$.horzMode=Clazz.array(Integer.TYPE, -1, [536870915]);
C$.termCodes=Clazz.array(Integer.TYPE, -2, [C$.termCodesWhite, C$.termCodesBlack]);
C$.makeupCodes=Clazz.array(Integer.TYPE, -2, [C$.makeupCodesWhite, C$.makeupCodesBlack]);
C$.pass=Clazz.array(Integer.TYPE, -2, [C$.passMode, C$.passMode]);
C$.vert=Clazz.array(Integer.TYPE, -2, [C$.vertMode, C$.vertMode]);
C$.horz=Clazz.array(Integer.TYPE, -2, [C$.horzMode, C$.horzMode]);
}

Clazz.newMeth(C$, '$init$', function () {
this.inverseFill=false;
}, 1);

C$.$fields$=[['Z',['inverseFill'],'I',['bits','ndex']]
,['O',['byteTable','byte[]','termCodesBlack','int[]','+termCodesWhite','+makeupCodesBlack','+makeupCodesWhite','+passMode','+vertMode','+horzMode','termCodes','int[][]','+makeupCodes','+pass','+vert','+horz']]]

Clazz.newMeth(C$, 'c$$S$I$Z', function (compressionType, compressionTagValue, isCompressionLossless) {
;C$.superclazz.c$$S$I$Z.apply(this,[compressionType, compressionTagValue, isCompressionLossless]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setMetadata$javax_imageio_metadata_IIOMetadata', function (metadata) {
C$.superclazz.prototype.setMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [metadata]);
if (Clazz.instanceOf(metadata, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata")) {
var tim=metadata;
var f=tim.getTIFFField$I(266);
this.inverseFill=(f != null  && f.getAsInt$I(0) == 2 );
}});

Clazz.newMeth(C$, 'nextState$BA$I$I$I', function (data, base, bitOffset, maxOffset) {
if (data == null ) {
return maxOffset;
}var next=base + (bitOffset >>> 3);
if (next >= data.length) {
return maxOffset;
}var end=base + (maxOffset >>> 3);
if (end == data.length) {
end--;
}var extra=bitOffset & 7;
var testbyte;
if ((data[next] & (128 >>> extra)) != 0) {
testbyte=~(data[next]) & (255 >>> extra);
while (next < end){
if (testbyte != 0) {
break;
}testbyte=~(data[++next]) & 255;
}
} else {
if ((testbyte=(data[next] & (255 >>> extra))) != 0) {
bitOffset=(next - base) * 8 + C$.byteTable[testbyte];
return ((bitOffset < maxOffset) ? bitOffset : maxOffset);
}while (next < end){
if ((testbyte=data[++next] & 255) != 0) {
bitOffset=(next - base) * 8 + C$.byteTable[testbyte];
return ((bitOffset < maxOffset) ? bitOffset : maxOffset);
}}
}bitOffset=(next - base) * 8 + C$.byteTable[testbyte];
return ((bitOffset < maxOffset) ? bitOffset : maxOffset);
});

Clazz.newMeth(C$, 'initBitBuf$', function () {
this.ndex=0;
this.bits=0;
});

Clazz.newMeth(C$, 'add1DBits$BA$I$I$I', function (buf, where, count, color) {
var sixtyfours;
var mask;
var len=where;
sixtyfours=count >>> 6;
count=count & 63;
if (sixtyfours != 0) {
for (; sixtyfours > 40; sixtyfours-=40) {
mask=C$.makeupCodes[color][40];
this.bits|=(mask & -524288) >>> this.ndex;
this.ndex+=(mask & 65535);
while (this.ndex > 7){
buf[len++]=(((this.bits >>> 24)|0)|0);
this.bits<<=8;
this.ndex-=8;
}
}
mask=C$.makeupCodes[color][sixtyfours];
this.bits|=(mask & -524288) >>> this.ndex;
this.ndex+=(mask & 65535);
while (this.ndex > 7){
buf[len++]=(((this.bits >>> 24)|0)|0);
this.bits<<=8;
this.ndex-=8;
}
}mask=C$.termCodes[color][count];
this.bits|=(mask & -524288) >>> this.ndex;
this.ndex+=(mask & 65535);
while (this.ndex > 7){
buf[len++]=(((this.bits >>> 24)|0)|0);
this.bits<<=8;
this.ndex-=8;
}
return (len - where);
});

Clazz.newMeth(C$, 'add2DBits$BA$I$IAA$I', function (buf, where, mode, entry) {
var mask;
var len=where;
var color=0;
mask=mode[color][entry];
this.bits|=(mask & -524288) >>> this.ndex;
this.ndex+=(mask & 65535);
while (this.ndex > 7){
buf[len++]=(((this.bits >>> 24)|0)|0);
this.bits<<=8;
this.ndex-=8;
}
return (len - where);
});

Clazz.newMeth(C$, 'addEOL$Z$Z$Z$BA$I', function (is1DMode, addFill, add1, buf, where) {
var len=where;
if (addFill) {
this.ndex+=((this.ndex <= 4) ? 4 - this.ndex : 12 - this.ndex);
}if (is1DMode) {
this.bits|=1048576 >>> this.ndex;
this.ndex+=12;
} else {
this.bits|=(add1 ? 1572864 : 1048576) >>> this.ndex;
this.ndex+=13;
}while (this.ndex > 7){
buf[len++]=(((this.bits >>> 24)|0)|0);
this.bits<<=8;
this.ndex-=8;
}
return (len - where);
});

Clazz.newMeth(C$, 'addEOFB$BA$I', function (buf, where) {
var len=where;
this.bits|=1048832 >>> this.ndex;
this.ndex+=24;
while (this.ndex > 0){
buf[len++]=(((this.bits >>> 24)|0)|0);
this.bits<<=8;
this.ndex-=8;
}
return (len - where);
});

Clazz.newMeth(C$, 'encode1D$BA$I$I$I$BA$I', function (data, rowOffset, colOffset, rowLength, compData, compOffset) {
var lineAddr=rowOffset;
var bitIndex=colOffset;
var last=bitIndex + rowLength;
var outIndex=compOffset;
var testbit=((data[lineAddr + (bitIndex >>> 3)] & 255) >>> (7 - (bitIndex & 7))) & 1;
var currentColor=1;
if (testbit != 0) {
outIndex+=this.add1DBits$BA$I$I$I(compData, outIndex, 0, 0);
} else {
currentColor=0;
}while (bitIndex < last){
var bitCount=this.nextState$BA$I$I$I(data, lineAddr, bitIndex, last) - bitIndex;
outIndex+=this.add1DBits$BA$I$I$I(compData, outIndex, bitCount, currentColor);
bitIndex+=bitCount;
currentColor^=1;
}
return outIndex - compOffset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
