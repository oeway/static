(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common"),I$=[[0,'io.scif.media.imageioimpl.common.BitFile','io.scif.media.imageioimpl.common.LZWStringTable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LZWCompressor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['tiffFudge_'],'I',['codeSize_','clearCode_','endOfInfo_','numBits_','limit_'],'H',['prefix_'],'O',['bf_','io.scif.media.imageioimpl.common.BitFile','lzss_','io.scif.media.imageioimpl.common.LZWStringTable']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageOutputStream$I$Z', function (out, codeSize, TIFF) {
;C$.$init$.apply(this);
this.bf_=Clazz.new_($I$(1,1).c$$javax_imageio_stream_ImageOutputStream$Z,[out, !TIFF]);
this.codeSize_=codeSize;
this.tiffFudge_=TIFF;
this.clearCode_=1 << this.codeSize_;
this.endOfInfo_=this.clearCode_ + 1;
this.numBits_=this.codeSize_ + 1;
this.limit_=(1 << this.numBits_) - 1;
if (this.tiffFudge_) --this.limit_;
this.prefix_=-1;
this.lzss_=Clazz.new_($I$(2,1));
this.lzss_.ClearTable$I(this.codeSize_);
this.bf_.writeBits$I$I(this.clearCode_, this.numBits_);
}, 1);

Clazz.newMeth(C$, 'compress$BA$I$I', function (buf, offset, length) {
var idx;
var c;
var index;
var maxOffset=offset + length;
for (idx=offset; idx < maxOffset; ++idx) {
c=($b$[0] = buf[idx], $b$[0]);
if ((index=this.lzss_.FindCharString$H$B(this.prefix_, ($b$[0] = c, $b$[0]))) != -1) this.prefix_=index;
 else {
this.bf_.writeBits$I$I(this.prefix_, this.numBits_);
if (this.lzss_.AddCharString$H$B(this.prefix_, ($b$[0] = c, $b$[0])) > this.limit_) {
if (this.numBits_ == 12) {
this.bf_.writeBits$I$I(this.clearCode_, this.numBits_);
this.lzss_.ClearTable$I(this.codeSize_);
this.numBits_=this.codeSize_ + 1;
} else ++this.numBits_;
this.limit_=(1 << this.numBits_) - 1;
if (this.tiffFudge_) --this.limit_;
}this.prefix_=($s$[0] = (c & 255), $s$[0]);
}}
});

Clazz.newMeth(C$, 'flush$', function () {
if (this.prefix_ != -1) this.bf_.writeBits$I$I(this.prefix_, this.numBits_);
this.bf_.writeBits$I$I(this.endOfInfo_, this.numBits_);
this.bf_.flush$();
});

Clazz.newMeth(C$, 'dump$java_io_PrintStream', function (out) {
this.lzss_.dump$java_io_PrintStream(out);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
