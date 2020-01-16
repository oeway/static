(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),p$1={},I$=[[0,'org.scijava.io.handle.DataHandles']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WriteBufferDataHandle", null, 'org.scijava.io.handle.AbstractHigherOrderHandle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
this.nextPos=0;
}, 1);

C$.$fields$=[['I',['nextPos','bufferSize'],'L',['offset'],'O',['buffer','byte[]']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle', function (handle) {
C$.c$$org_scijava_io_handle_DataHandle$I.apply(this, [handle, 10000]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle$I', function (handle, bufferSize) {
;C$.superclazz.c$$org_scijava_io_handle_DataHandle.apply(this,[handle]);C$.$init$.apply(this);
this.bufferSize=bufferSize;
}, 1);

Clazz.newMeth(C$, 'write$I', function (b) {
this.ensureOpen$();
if (this.nextPos >= this.buffer.length) {
p$1.flush.apply(this, []);
}this.buffer[this.nextPos]=((b|0)|0);
this.nextPos++;
this.offset++;
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
this.ensureOpen$();
if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) > b.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}if (len > this.buffer.length) {
p$1.flush.apply(this, []);
this.handle$().write$BA$I$I(b, off, len);
this.offset+=len;
return;
}var start=off;
var total=off + len;
while (start < total){
var numItems=Math.min(this.buffer.length - this.nextPos, total - start);
System.arraycopy$O$I$O$I$I(b, start, this.buffer, this.nextPos, numItems);
start+=numItems;
this.nextPos+=numItems;
if (this.nextPos >= this.buffer.length) {
p$1.flush.apply(this, []);
}}
});

Clazz.newMeth(C$, 'flush', function () {
this.ensureOpen$();
if (this.nextPos == 0) return;
this.handle$().write$BA$I$I(this.buffer, 0, this.nextPos);
this.nextPos=0;
}, p$1);

Clazz.newMeth(C$, 'length$', function () {
return this.handle$().length$() + this.nextPos - 1;
});

Clazz.newMeth(C$, 'setLength$J', function (length) {
this.ensureOpen$();
this.handle$().setLength$J(length);
});

Clazz.newMeth(C$, 'isReadable$', function () {
return false;
});

Clazz.newMeth(C$, 'ensureOpen$', function () {
C$.superclazz.prototype.ensureOpen$.apply(this, []);
if (this.buffer == null ) {
this.buffer=Clazz.array(Byte.TYPE, [this.bufferSize]);
}});

Clazz.newMeth(C$, 'offset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'seek$J', function (pos) {
this.ensureOpen$();
if (pos >= this.length$()) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}p$1.flush.apply(this, []);
this.offset=pos;
this.handle$().seek$J(this.offset);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Operation \'skip\' is not supported!"]);
});

Clazz.newMeth(C$, 'readByte$', function () {
throw $I$(1).writeOnlyException$();
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
throw $I$(1).writeOnlyException$();
});

Clazz.newMeth(C$, 'cleanup$', function () {
p$1.flush.apply(this, []);
this.buffer=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
