(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BitBuffer");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.BACK_MASK=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 7, 15, 31, 63, 127]);
C$.FRONT_MASK=Clazz.array(Integer.TYPE, -1, [0, 128, 192, 224, 240, 248, 252, 254]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['eofFlag'],'I',['currentByte','currentBit','eofByte'],'O',['byteBuffer','byte[]']]
,['O',['BACK_MASK','int[]','+FRONT_MASK']]]

Clazz.newMeth(C$, 'c$$BA', function (byteBuffer) {
;C$.$init$.apply(this);
this.byteBuffer=byteBuffer;
this.currentByte=0;
this.currentBit=0;
this.eofByte=byteBuffer.length;
}, 1);

Clazz.newMeth(C$, 'skipBits$J', function (bits) {
if (bits < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bits to skip may not be negative"]);
}if (this.eofByte * 8 < this.currentByte * 8 + this.currentBit + bits) {
this.eofFlag=true;
this.currentByte=this.eofByte;
this.currentBit=0;
return;
}var skipBytes=(((bits/8|0))|0);
var skipBits=((bits % 8)|0);
this.currentByte+=skipBytes;
this.currentBit+=skipBits;
while (this.currentBit >= 8){
this.currentByte++;
this.currentBit-=8;
}
});

Clazz.newMeth(C$, 'getBits$I', function (bitsToRead) {
if (bitsToRead < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bits to read may not be negative"]);
}if (bitsToRead == 0) return 0;
if (this.eofFlag) return -1;
var toStore=0;
while (bitsToRead != 0 && !this.eofFlag ){
if (this.currentBit < 0 || this.currentBit > 7 ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["byte=" + this.currentByte + ", bit = " + this.currentBit ]);
}var bitsLeft=8 - this.currentBit;
if (bitsToRead >= bitsLeft) {
toStore<<=bitsLeft;
bitsToRead-=bitsLeft;
var cb=this.byteBuffer[this.currentByte];
if (this.currentBit == 0) {
toStore+=cb & 255;
} else {
toStore+=cb & C$.BACK_MASK[bitsLeft];
this.currentBit=0;
}this.currentByte++;
} else {
toStore=toStore << bitsToRead;
var cb=this.byteBuffer[this.currentByte] & 255;
toStore+=(cb & (255 - C$.FRONT_MASK[this.currentBit])) >> (bitsLeft - bitsToRead);
this.currentBit+=bitsToRead;
bitsToRead=0;
}if (this.currentByte == this.eofByte) {
this.eofFlag=true;
return toStore;
}}
return toStore;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
