(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TIFFLZWDecompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFDecompressor');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.andTable=Clazz.array(Integer.TYPE, -1, [511, 1023, 2047, 4095]);
}

Clazz.newMeth(C$, '$init$', function () {
this.bitsToGet=9;
this.nextData=0;
this.nextBits=0;
}, 1);

C$.$fields$=[['I',['predictor','srcIndex','dstIndex','tableIndex','bitsToGet','nextData','nextBits'],'O',['srcData','byte[]','+dstData','stringTable','byte[][]']]
,['O',['andTable','int[]']]]

Clazz.newMeth(C$, 'c$$I', function (predictor) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (predictor != 1 && predictor != 2 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Illegal value for Predictor in TIFF file"]);
}if (false) {
System.out.println$S("Using horizontal differencing predictor");
}this.predictor=predictor;
}, 1);

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (b, dstOffset, bitsPerPixel, scanlineStride) {
if (this.predictor == 2) {
var len=this.bitsPerSample.length;
for (var i=0; i < len; i++) {
if (this.bitsPerSample[i] != 8) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[this.bitsPerSample[i] + "-bit samples " + "are not supported for Horizontal " + "differencing Predictor" ]);
}}
}this.stream.seek$J(this.offset);
var sdata=Clazz.array(Byte.TYPE, [this.byteCount]);
this.stream.readFully$BA(sdata);
var bytesPerRow=((this.srcWidth * bitsPerPixel + 7)/8|0);
var buf;
var bufOffset;
if (bytesPerRow == scanlineStride) {
buf=b;
bufOffset=dstOffset;
} else {
buf=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
bufOffset=0;
}var numBytesDecoded=this.decode$BA$I$BA$I(sdata, 0, buf, bufOffset);
if (bytesPerRow != scanlineStride) {
if (false) {
System.out.println$S("bytesPerRow != scanlineStride");
}var off=0;
for (var y=0; y < this.srcHeight; y++) {
System.arraycopy$O$I$O$I$I(buf, off, b, dstOffset, bytesPerRow);
off+=bytesPerRow;
dstOffset+=scanlineStride;
}
}});

Clazz.newMeth(C$, 'decode$BA$I$BA$I', function (sdata, srcOffset, ddata, dstOffset) {
if (sdata[0] == 0 && sdata[1] == 1 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["TIFF 5.0-style LZW compression is not supported!"]);
}this.srcData=sdata;
this.dstData=ddata;
this.srcIndex=srcOffset;
this.dstIndex=dstOffset;
this.nextData=0;
this.nextBits=0;
this.initializeStringTable$();
var code;
var oldCode=0;
var string;
while ((code=this.getNextCode$()) != 257){
if (code == 256) {
this.initializeStringTable$();
code=this.getNextCode$();
if (code == 257) {
break;
}this.writeString$BA(this.stringTable[code]);
oldCode=code;
} else {
if (code < this.tableIndex) {
string=this.stringTable[code];
this.writeString$BA(string);
this.addStringToTable$BA$B(this.stringTable[oldCode], ($b$[0] = string[0], $b$[0]));
oldCode=code;
} else {
string=this.stringTable[oldCode];
string=this.composeString$BA$B(string, ($b$[0] = string[0], $b$[0]));
this.writeString$BA(string);
this.addStringToTable$BA(string);
oldCode=code;
}}}
if (this.predictor == 2) {
for (var j=0; j < this.srcHeight; j++) {
var count=dstOffset + this.samplesPerPixel * (j * this.srcWidth + 1);
for (var i=this.samplesPerPixel; i < this.srcWidth * this.samplesPerPixel; i++) {
this.dstData[$k$=count]=(this.dstData[$k$]+(this.dstData[count - this.samplesPerPixel])|0);
count++;
}
}
}return this.dstIndex - dstOffset;
});

Clazz.newMeth(C$, 'initializeStringTable$', function () {
this.stringTable=Clazz.array(Byte.TYPE, [4096, null]);
for (var i=0; i < 256; i++) {
this.stringTable[i]=Clazz.array(Byte.TYPE, [1]);
this.stringTable[i][0]=((i|0)|0);
}
this.tableIndex=258;
this.bitsToGet=9;
});

Clazz.newMeth(C$, 'writeString$BA', function (string) {
if (this.dstIndex < this.dstData.length) {
var maxIndex=Math.min(string.length, this.dstData.length - this.dstIndex);
for (var i=0; i < maxIndex; i++) {
this.dstData[this.dstIndex++]=(string[i]|0);
}
}});

Clazz.newMeth(C$, 'addStringToTable$BA$B', function (oldString, newString) {
var length=oldString.length;
var string=Clazz.array(Byte.TYPE, [length + 1]);
System.arraycopy$O$I$O$I$I(oldString, 0, string, 0, length);
string[length]=(newString|0);
this.stringTable[this.tableIndex++]=string;
if (this.tableIndex == 511) {
this.bitsToGet=10;
} else if (this.tableIndex == 1023) {
this.bitsToGet=11;
} else if (this.tableIndex == 2047) {
this.bitsToGet=12;
}});

Clazz.newMeth(C$, 'addStringToTable$BA', function (string) {
this.stringTable[this.tableIndex++]=string;
if (this.tableIndex == 511) {
this.bitsToGet=10;
} else if (this.tableIndex == 1023) {
this.bitsToGet=11;
} else if (this.tableIndex == 2047) {
this.bitsToGet=12;
}});

Clazz.newMeth(C$, 'composeString$BA$B', function (oldString, newString) {
var length=oldString.length;
var string=Clazz.array(Byte.TYPE, [length + 1]);
System.arraycopy$O$I$O$I$I(oldString, 0, string, 0, length);
string[length]=(newString|0);
return string;
});

Clazz.newMeth(C$, 'getNextCode$', function () {
try {
this.nextData=(this.nextData << 8) | (this.srcData[this.srcIndex++] & 255);
this.nextBits+=8;
if (this.nextBits < this.bitsToGet) {
this.nextData=(this.nextData << 8) | (this.srcData[this.srcIndex++] & 255);
this.nextBits+=8;
}var code=(this.nextData >> (this.nextBits - this.bitsToGet)) & C$.andTable[this.bitsToGet - 9];
this.nextBits-=this.bitsToGet;
return code;
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return 257;
} else {
throw e;
}
}
});
var $b$ = new Int8Array(1);
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
