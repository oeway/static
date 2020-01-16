(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "TIFFLZWUtil");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.andTable=Clazz.array(Integer.TYPE, -1, [511, 1023, 2047, 4095]);
}

Clazz.newMeth(C$, '$init$', function () {
this.dstIndex=0;
this.bitsToGet=9;
this.nextData=0;
this.nextBits=0;
}, 1);

C$.$fields$=[['I',['srcIndex','dstIndex','tableIndex','bitsToGet','predictor','samplesPerPixel','nextData','nextBits'],'O',['srcData','byte[]','+dstData','stringTable','byte[][]']]
,['O',['andTable','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'decode$BA$I$I$I$I', function (data, predictor, samplesPerPixel, width, height) {
if (data[0] == 0 && data[1] == 1 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["TIFF 5.0-style LZW compression is not supported!"]);
}this.srcData=data;
this.srcIndex=0;
this.nextData=0;
this.nextBits=0;
this.dstData=Clazz.array(Byte.TYPE, [8192]);
this.dstIndex=0;
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
if (predictor == 2) {
var count;
for (var j=0; j < height; j++) {
count=samplesPerPixel * (j * width + 1);
for (var i=samplesPerPixel; i < width * samplesPerPixel; i++) {
this.dstData[$k$=count]=(this.dstData[$k$]+(this.dstData[count - samplesPerPixel])|0);
count++;
}
}
}var newDstData=Clazz.array(Byte.TYPE, [this.dstIndex]);
System.arraycopy$O$I$O$I$I(this.dstData, 0, newDstData, 0, this.dstIndex);
return newDstData;
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

Clazz.newMeth(C$, 'ensureCapacity$I', function (bytesToAdd) {
if (this.dstIndex + bytesToAdd > this.dstData.length) {
var newDstData=Clazz.array(Byte.TYPE, [Math.max(((this.dstData.length * 1.2)|0), this.dstIndex + bytesToAdd)]);
System.arraycopy$O$I$O$I$I(this.dstData, 0, newDstData, 0, this.dstData.length);
this.dstData=newDstData;
}}, p$1);

Clazz.newMeth(C$, 'writeString$BA', function (string) {
p$1.ensureCapacity$I.apply(this, [string.length]);
for (var i=0; i < string.length; i++) {
this.dstData[this.dstIndex++]=(string[i]|0);
}
});

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
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
