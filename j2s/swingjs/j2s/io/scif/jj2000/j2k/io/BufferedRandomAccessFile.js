(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.io"),I$=[[0,'java.io.RandomAccessFile','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BufferedRandomAccessFile", null, null, ['io.scif.jj2000.j2k.io.RandomAccessIO', 'io.scif.jj2000.j2k.io.EndianType']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isReadOnly=true;
}, 1);

C$.$fields$=[['Z',['isReadOnly','byteBufferChanged','isEOFInBuffer'],'I',['offset','pos','maxByte','byteOrdering'],'S',['fileName'],'O',['theFile','java.io.RandomAccessFile','byteBuffer','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_File$S$I', function (file, mode, bufferSize) {
;C$.$init$.apply(this);
this.fileName=file.getName$();
if (mode.equals$O("rw") || mode.equals$O("rw+") ) {
this.isReadOnly=false;
if (mode.equals$O("rw")) {
if (file.exists$()) file.delete$();
}mode="rw";
}this.theFile=Clazz.new_($I$(1,1).c$$java_io_File$S,[file, mode]);
this.byteBuffer=Clazz.array(Byte.TYPE, [bufferSize]);
this.readNewBuffer$I(0);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S', function (file, mode) {
C$.c$$java_io_File$S$I.apply(this, [file, mode, 512]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I', function (name, mode, bufferSize) {
C$.c$$java_io_File$S$I.apply(this, [Clazz.new_($I$(2,1).c$$S,[name]), mode, bufferSize]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (name, mode) {
C$.c$$S$S$I.apply(this, [name, mode, 512]);
}, 1);

Clazz.newMeth(C$, 'readNewBuffer$I', function (off) {
if (this.byteBufferChanged) {
this.flush$();
}if (this.isReadOnly && off >= this.theFile.length$() ) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}this.offset=off;
this.theFile.seek$J(this.offset);
this.maxByte=this.theFile.read$BA$I$I(this.byteBuffer, 0, this.byteBuffer.length);
this.pos=0;
if (this.maxByte < this.byteBuffer.length) {
this.isEOFInBuffer=true;
if (this.maxByte == -1) {
this.maxByte++;
}} else {
this.isEOFInBuffer=false;
}});

Clazz.newMeth(C$, 'close$', function () {
this.flush$();
this.byteBuffer=null;
this.theFile.close$();
});

Clazz.newMeth(C$, 'getPos$', function () {
return (this.offset + this.pos);
});

Clazz.newMeth(C$, 'length$', function () {
var len;
len=(this.theFile.length$()|0);
if ((this.offset + this.maxByte) <= len) {
return (len);
} else {
return (this.offset + this.maxByte);
}});

Clazz.newMeth(C$, 'seek$I', function (off) {
if ((off >= this.offset) && (off < (this.offset + this.byteBuffer.length)) ) {
if (this.isReadOnly && this.isEOFInBuffer && off > this.offset + this.maxByte  ) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}this.pos=off - this.offset;
} else {
this.readNewBuffer$I(off);
}});

Clazz.newMeth(C$, 'read$', function () {
if (this.pos < this.maxByte) {
return (this.byteBuffer[this.pos++] & 255);
} else if (this.isEOFInBuffer) {
this.pos=this.maxByte + 1;
throw Clazz.new_(Clazz.load('java.io.EOFException'));
} else {
this.readNewBuffer$I(this.offset + this.pos);
return this.read$();
}});

Clazz.newMeth(C$, 'readFully$BA$I$I', function (b, off, len) {
var clen;
while (len > 0){
if (this.pos < this.maxByte) {
clen=this.maxByte - this.pos;
if (clen > len) clen=len;
System.arraycopy$O$I$O$I$I(this.byteBuffer, this.pos, b, off, clen);
this.pos+=clen;
off+=clen;
len-=clen;
} else if (this.isEOFInBuffer) {
this.pos=this.maxByte + 1;
throw Clazz.new_(Clazz.load('java.io.EOFException'));
} else {
this.readNewBuffer$I(this.offset + this.pos);
}}
});

Clazz.newMeth(C$, 'write$I', function (b) {
if (this.pos < this.byteBuffer.length) {
if (this.isReadOnly) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["File is read only"]);
this.byteBuffer[this.pos]=((b|0)|0);
if (this.pos >= this.maxByte) {
this.maxByte=this.pos + 1;
}this.pos++;
this.byteBufferChanged=true;
} else {
this.readNewBuffer$I(this.offset + this.pos);
this.write$I(b);
}});

Clazz.newMeth(C$, 'write$B', function (b) {
if (this.pos < this.byteBuffer.length) {
if (this.isReadOnly) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["File is read only"]);
this.byteBuffer[this.pos]=(b|0);
if (this.pos >= this.maxByte) {
this.maxByte=this.pos + 1;
}this.pos++;
this.byteBufferChanged=true;
} else {
this.readNewBuffer$I(this.offset + this.pos);
this.write$B(($b$[0] = b, $b$[0]));
}});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, offset, length) {
var i;
var stop;
stop=offset + length;
if (stop > b.length) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[b.length]);
for (i=offset; i < stop; i++) {
this.write$B(($b$[0] = b[i], $b$[0]));
}
});

Clazz.newMeth(C$, 'writeByte$I', function (v) {
this.write$I(v);
});

Clazz.newMeth(C$, 'flush$', function () {
if (this.byteBufferChanged) {
this.theFile.seek$J(this.offset);
this.theFile.write$BA$I$I(this.byteBuffer, 0, this.maxByte);
this.byteBufferChanged=false;
}});

Clazz.newMeth(C$, 'readByte$', function () {
if (this.pos < this.maxByte) {
return $b$[0] = this.byteBuffer[this.pos++], $b$[0];
} else if (this.isEOFInBuffer) {
this.pos=this.maxByte + 1;
throw Clazz.new_(Clazz.load('java.io.EOFException'));
} else {
this.readNewBuffer$I(this.offset + this.pos);
return $b$[0] = this.readByte$(), $b$[0];
}});

Clazz.newMeth(C$, 'readUnsignedByte$', function () {
return this.read$();
});

Clazz.newMeth(C$, 'getByteOrdering$', function () {
return this.byteOrdering;
});

Clazz.newMeth(C$, 'skipBytes$I', function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not skip negative number of bytes"]);
if (n <= (this.maxByte - this.pos)) {
this.pos+=n;
return n;
} else {
this.seek$I(this.offset + this.pos + n );
return n;
}});

Clazz.newMeth(C$, 'toString', function () {
return "BufferedRandomAccessFile: " + this.fileName + " (" + ((this.isReadOnly) ? "read only" : "read/write") + ")" ;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
