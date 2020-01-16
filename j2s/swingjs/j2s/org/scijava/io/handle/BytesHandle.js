(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),p$1={},I$=[[0,'org.scijava.io.location.BytesLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BytesHandle", null, 'org.scijava.io.handle.AbstractDataHandle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
}, 1);

C$.$fields$=[['L',['offset']]]

Clazz.newMeth(C$, 'isReadable$', function () {
return true;
});

Clazz.newMeth(C$, 'isWritable$', function () {
return !p$1.bytes.apply(this, []).isReadOnly$();
});

Clazz.newMeth(C$, 'exists$', function () {
return true;
});

Clazz.newMeth(C$, 'offset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'length$', function () {
return p$1.bytes.apply(this, []).size$();
});

Clazz.newMeth(C$, 'setLength$J', function (length) {
p$1.bytes.apply(this, []).basicRangeCheck$J$J(0, length);
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
if (len == 0) return 0;
if (this.offset + len > this.length$()) {
len=((this.length$() - this.offset)|0);
}if (len == 0) {
return -1;
}p$1.bytes.apply(this, []).getBytes$J$BA$I$I(this.offset, b, off, len);
this.offset+=len;
return len;
});

Clazz.newMeth(C$, 'seek$J', function (pos) {
if (pos > this.length$()) this.setLength$J(pos);
this.offset=pos;
});

Clazz.newMeth(C$, 'readByte$', function () {
this.ensureReadable$J(1);
try {
return $b$[0] = p$1.bytes.apply(this, []).getByte$J(this.offset++), $b$[0];
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw p$1.eofException$Throwable.apply(this, [e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'readFully$BA$I$I', function (b, off, len) {
this.ensureReadable$J(len);
try {
p$1.bytes.apply(this, []).getBytes$J$BA$I$I(this.offset, b, off, len);
this.offset+=len;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw p$1.eofException$Throwable.apply(this, [e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
this.ensureWritable$J(len);
p$1.bytes.apply(this, []).setBytes$J$BA$I$I(this.offset, b, off, len);
this.offset+=len;
});

Clazz.newMeth(C$, 'write$I', function (b) {
this.ensureWritable$J(1);
p$1.bytes.apply(this, []).setByte$J$B(this.offset, ($b$[0] = (b|0), $b$[0]));
this.offset++;
});

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'bytes', function () {
return this.get$().getByteBank$();
}, p$1);

Clazz.newMeth(C$, 'eofException$Throwable', function (cause) {
var eof=Clazz.new_(Clazz.load('java.io.EOFException'));
eof.initCause$Throwable(cause);
return eof;
}, p$1);
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.io.handle.BytesHandle',null,['org.scijava.plugin.Plugin']],['type="org.scijava.io.handle.DataHandle.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
