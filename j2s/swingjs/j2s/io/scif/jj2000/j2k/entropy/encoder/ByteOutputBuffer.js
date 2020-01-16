(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ByteOutputBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['count'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.buf=Clazz.array(Byte.TYPE, [256]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.$init$.apply(this);
this.buf=Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'write$I', function (b) {
if (this.count == this.buf.length) {
var tmpbuf=this.buf;
this.buf=Clazz.array(Byte.TYPE, [this.buf.length + 512]);
System.arraycopy$O$I$O$I$I(tmpbuf, 0, this.buf, 0, this.count);
}this.buf[this.count++]=((b|0)|0);
});

Clazz.newMeth(C$, 'toByteArray$I$I$BA$I', function (off, len, outbuf, outoff) {
System.arraycopy$O$I$O$I$I(this.buf, off, outbuf, outoff, len);
});

Clazz.newMeth(C$, 'size$', function () {
return this.count;
});

Clazz.newMeth(C$, 'reset$', function () {
this.count=0;
});

Clazz.newMeth(C$, 'getByte$I', function (pos) {
if (pos >= this.count) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return this.buf[pos] & 255;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
