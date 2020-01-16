(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image.input"),p$1={},I$=[[0,'java.io.RandomAccessFile','io.scif.jj2000.j2k.image.DataBlkInt','io.scif.jj2000.j2k.JJ2KExceptionHandler']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgReaderPGM", null, 'io.scif.jj2000.j2k.image.input.ImgReader');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DC_OFFSET=128;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['offset','rb'],'O',['$in','java.io.RandomAccessFile','buf','byte[]','intBlk','io.scif.jj2000.j2k.image.DataBlkInt']]
,['I',['DC_OFFSET']]]

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
C$.c$$java_io_RandomAccessFile.apply(this, [Clazz.new_($I$(1,1).c$$java_io_File$S,[file, "r"])]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (fname) {
C$.c$$java_io_RandomAccessFile.apply(this, [Clazz.new_($I$(1,1).c$$S$S,[fname, "r"])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_RandomAccessFile', function ($in) {
Clazz.super_(C$, this);
this.$in=$in;
p$1.confirmFileType.apply(this, []);
p$1.skipCommentAndWhiteSpace.apply(this, []);
this.w=p$1.readHeaderInt.apply(this, []);
p$1.skipCommentAndWhiteSpace.apply(this, []);
this.h=p$1.readHeaderInt.apply(this, []);
p$1.skipCommentAndWhiteSpace.apply(this, []);
p$1.readHeaderInt.apply(this, []);
this.nc=1;
this.rb=8;
}, 1);

Clazz.newMeth(C$, 'close$', function () {
this.$in.close$();
this.$in=null;
});

Clazz.newMeth(C$, 'getNomRangeBits$I', function (c) {
if (c != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return this.rb;
});

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
if (c != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return 0;
});

Clazz.newMeth(C$, 'getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
var k;
var j;
var i;
var mi;
var barr;
if (c != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (blk.getDataType$() != 3) {
if (this.intBlk == null ) this.intBlk=Clazz.new_($I$(2,1).c$$I$I$I$I,[blk.ulx, blk.uly, blk.w, blk.h]);
 else {
this.intBlk.ulx=blk.ulx;
this.intBlk.uly=blk.uly;
this.intBlk.w=blk.w;
this.intBlk.h=blk.h;
}blk=this.intBlk;
}barr=blk.getData$();
if (barr == null  || barr.length < blk.w * blk.h ) {
barr=Clazz.array(Integer.TYPE, [blk.w * blk.h]);
blk.setData$O(barr);
}if (this.buf == null  || this.buf.length < blk.w ) {
this.buf=Clazz.array(Byte.TYPE, [blk.w]);
}try {
mi=blk.uly + blk.h;
for (i=blk.uly; i < mi; i++) {
this.$in.seek$J(this.offset + i * this.w + blk.ulx);
this.$in.read$BA$I$I(this.buf, 0, blk.w);
for (k=(i - blk.uly) * blk.w + blk.w - 1, j=blk.w - 1; j >= 0; j--, k--) {
barr[k]=((this.buf[j]) & 255) - C$.DC_OFFSET;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(3).handleException$Throwable(e);
} else {
throw e;
}
}
blk.progressive=false;
blk.offset=0;
blk.scanw=blk.w;
return blk;
});

Clazz.newMeth(C$, 'getCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
return this.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
});

Clazz.newMeth(C$, 'countedByteRead', function () {
this.offset++;
return $b$[0] = this.$in.readByte$(), $b$[0];
}, p$1);

Clazz.newMeth(C$, 'confirmFileType', function () {
var type=Clazz.array(Byte.TYPE, -1, [80, 53]);
var i;
var b;
for (i=0; i < 2; i++) {
b=($b$[0] = p$1.countedByteRead.apply(this, []), $b$[0]);
if (b != type[i]) {
if (i == 1 && b == 50 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["JJ2000 does not support ascii-PGM files. Use  raw-PGM file instead. "]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a raw-PGM file"]);
}}}
}, p$1);

Clazz.newMeth(C$, 'skipCommentAndWhiteSpace', function () {
var done=false;
var b;
while (!done){
b=($b$[0] = p$1.countedByteRead.apply(this, []), $b$[0]);
if (b == 35) {
while (b != 10 && b != 13 ){
b=($b$[0] = p$1.countedByteRead.apply(this, []), $b$[0]);
}
} else if (!(b == 9 || b == 10  || b == 13  || b == 32 )) {
done=true;
}}
this.offset--;
this.$in.seek$J(this.offset);
}, p$1);

Clazz.newMeth(C$, 'readHeaderInt', function () {
var res=0;
var b=($b$[0] = 0, $b$[0]);
b=($b$[0] = p$1.countedByteRead.apply(this, []), $b$[0]);
while (b != 32 && b != 10  && b != 9  && b != 13 ){
res=res * 10 + b - 48;
b=($b$[0] = p$1.countedByteRead.apply(this, []), $b$[0]);
}
return res;
}, p$1);

Clazz.newMeth(C$, 'isOrigSigned$I', function (c) {
if (c != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return false;
});

Clazz.newMeth(C$, 'toString', function () {
return "ImgReaderPGM: WxH = " + this.w + "x" + this.h + ", Component = 0" + "\nUnderlying RandomAccessIO:\n" + this.$in.toString() ;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
