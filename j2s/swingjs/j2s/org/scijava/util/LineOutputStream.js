(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LineOutputStream", null, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buffer=Clazz.array(Byte.TYPE, [16384]);
}, 1);

C$.$fields$=[['I',['len'],'O',['buffer','byte[]']]]

Clazz.newMeth(C$, 'write$I', function (b) {
this.ensure$I(this.len + 1);
this.buffer[this.len++]=((b|0)|0);
if (b == 10 ) this.flush$();
});

Clazz.newMeth(C$, 'write$BA', function (buf) {
this.write$BA$I$I(buf, 0, buf.length);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (buf, offset, length) {
var eol=length;
while (eol > 0){
if (buf[eol - 1] == 10 ) break;
eol--;
}
if (eol >= 0) {
this.ensure$I(this.len + eol);
System.arraycopy$O$I$O$I$I(buf, offset, this.buffer, this.len, eol);
this.len+=eol;
this.flush$();
length-=eol;
if (length == 0) return;
offset+=eol;
}this.ensure$I(this.len + length);
System.arraycopy$O$I$O$I$I(buf, offset, this.buffer, this.len, length);
this.len+=length;
});

Clazz.newMeth(C$, 'close$', function () {
this.flush$();
});

Clazz.newMeth(C$, 'flush$', function () {
if (this.len > 0) {
if (this.buffer[this.len - 1] == 10 ) this.len--;
this.println$S( String.instantialize(this.buffer, 0, this.len));
}this.len=0;
});

Clazz.newMeth(C$, 'ensure$I', function (length) {
if (this.buffer.length >= length) return;
var newLength=(this.buffer.length * 3/2|0);
if (newLength < length) newLength=length + 16;
var newBuffer=Clazz.array(Byte.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(this.buffer, 0, newBuffer, 0, this.len);
this.buffer=newBuffer;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
