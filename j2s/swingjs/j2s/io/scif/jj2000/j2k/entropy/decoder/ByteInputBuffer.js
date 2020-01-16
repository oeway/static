(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.decoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ByteInputBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['count','pos'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$$BA', function (buf) {
;C$.$init$.apply(this);
this.buf=buf;
this.count=buf.length;
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I', function (buf, offset, length) {
;C$.$init$.apply(this);
this.buf=buf;
this.pos=offset;
this.count=offset + length;
}, 1);

Clazz.newMeth(C$, 'setByteArray$BA$I$I', function (buf, offset, length) {
if (buf == null ) {
if (length < 0 || this.count + length > this.buf.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (offset < 0) {
this.pos=this.count;
this.count+=length;
} else {
this.count=offset + length;
this.pos=offset;
}} else {
if (offset < 0 || length < 0  || offset + length > buf.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.buf=buf;
this.count=offset + length;
this.pos=offset;
}});

Clazz.newMeth(C$, 'addByteArray$BA$I$I', function (data, off, len) {
if (len < 0 || off < 0  || len + off > this.buf.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (this.count + len <= this.buf.length) {
System.arraycopy$O$I$O$I$I(data, off, this.buf, this.count, len);
this.count+=len;
} else {
if (this.count - this.pos + len <= this.buf.length) {
System.arraycopy$O$I$O$I$I(this.buf, this.pos, this.buf, 0, this.count - this.pos);
} else {
var oldbuf=this.buf;
this.buf=Clazz.array(Byte.TYPE, [this.count - this.pos + len]);
System.arraycopy$O$I$O$I$I(oldbuf, this.count, this.buf, 0, this.count - this.pos);
}this.count-=this.pos;
this.pos=0;
System.arraycopy$O$I$O$I$I(data, off, this.buf, this.count, len);
this.count+=len;
}});

Clazz.newMeth(C$, 'readChecked$', function () {
if (this.pos < this.count) {
return this.buf[this.pos++] & 255;
} else {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}});

Clazz.newMeth(C$, 'read$', function () {
if (this.pos < this.count) {
return this.buf[this.pos++] & 255;
} else {
return -1;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
