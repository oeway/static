(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BitFile");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.blocks_=false;
}, 1);

C$.$fields$=[['Z',['blocks_'],'I',['index_','bitsLeft_'],'O',['output_','javax.imageio.stream.ImageOutputStream','buffer_','byte[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageOutputStream$Z', function (output, blocks) {
;C$.$init$.apply(this);
this.output_=output;
this.blocks_=blocks;
this.buffer_=Clazz.array(Byte.TYPE, [256]);
this.index_=0;
this.bitsLeft_=8;
}, 1);

Clazz.newMeth(C$, 'flush$', function () {
var numBytes=this.index_ + (this.bitsLeft_ == 8 ? 0 : 1);
if (numBytes > 0) {
if (this.blocks_) this.output_.write$I(numBytes);
this.output_.write$BA$I$I(this.buffer_, 0, numBytes);
this.buffer_[0]=(0|0);
this.index_=0;
this.bitsLeft_=8;
}});

Clazz.newMeth(C$, 'writeBits$I$I', function (bits, numbits) {
var bitsWritten=0;
var numBytes=255;
do {
if ((this.index_ == 254 && this.bitsLeft_ == 0 ) || this.index_ > 254 ) {
if (this.blocks_) this.output_.write$I(numBytes);
this.output_.write$BA$I$I(this.buffer_, 0, numBytes);
this.buffer_[0]=(0|0);
this.index_=0;
this.bitsLeft_=8;
}if (numbits <= this.bitsLeft_) {
if (this.blocks_) {
this.buffer_[$k$=this.index_]=(this.buffer_[$k$]|((bits & ((1 << numbits) - 1)) << (8 - this.bitsLeft_))|0);
bitsWritten+=numbits;
this.bitsLeft_-=numbits;
numbits=0;
} else {
this.buffer_[$k$=this.index_]=(this.buffer_[$k$]|((bits & ((1 << numbits) - 1)) << (this.bitsLeft_ - numbits))|0);
bitsWritten+=numbits;
this.bitsLeft_-=numbits;
numbits=0;
}} else {
if (this.blocks_) {
this.buffer_[$k$=this.index_]=(this.buffer_[$k$]|((bits & ((1 << this.bitsLeft_) - 1)) << (8 - this.bitsLeft_))|0);
bitsWritten+=this.bitsLeft_;
bits>>=this.bitsLeft_;
numbits-=this.bitsLeft_;
this.buffer_[++this.index_]=(0|0);
this.bitsLeft_=8;
} else {
var topbits=(bits >>> (numbits - this.bitsLeft_)) & ((1 << this.bitsLeft_) - 1);
this.buffer_[$k$=this.index_]=(this.buffer_[$k$]|(topbits)|0);
numbits-=this.bitsLeft_;
bitsWritten+=this.bitsLeft_;
this.buffer_[++this.index_]=(0|0);
this.bitsLeft_=8;
}}} while (numbits != 0);
});
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
