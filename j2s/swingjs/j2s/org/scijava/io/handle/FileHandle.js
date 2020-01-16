(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),p$1={},I$=[[0,'java.util.Date','org.scijava.io.location.FileLocation','java.io.RandomAccessFile']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileHandle", null, 'org.scijava.io.handle.AbstractDataHandle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mode="rw";
}, 1);

C$.$fields$=[['Z',['closed'],'S',['mode'],'O',['raf','java.io.RandomAccessFile']]]

Clazz.newMeth(C$, 'getRandomAccessFile$', function () {
return p$1.writer.apply(this, []);
});

Clazz.newMeth(C$, 'getMode$', function () {
return this.mode;
});

Clazz.newMeth(C$, 'setMode$S', function (mode) {
if (this.raf != null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["File already initialized"]);
}this.mode=mode;
});

Clazz.newMeth(C$, 'isReadable$', function () {
return this.getMode$().contains$CharSequence("r");
});

Clazz.newMeth(C$, 'isWritable$', function () {
return this.getMode$().contains$CharSequence("w");
});

Clazz.newMeth(C$, 'exists$', function () {
return this.get$().getFile$().exists$();
});

Clazz.newMeth(C$, 'lastModified$', function () {
var lastModified=this.get$().getFile$().lastModified$();
return lastModified == 0 ? null : Clazz.new_($I$(1,1).c$$J,[lastModified]);
});

Clazz.newMeth(C$, 'offset$', function () {
return this.exists$() ? p$1.reader.apply(this, []).getFilePointer$() : 0;
});

Clazz.newMeth(C$, 'length$', function () {
return this.exists$() ? p$1.reader.apply(this, []).length$() : -1;
});

Clazz.newMeth(C$, 'setLength$J', function (length) {
p$1.writer.apply(this, []).setLength$J(length);
});

Clazz.newMeth(C$, 'read$', function () {
return p$1.reader.apply(this, []).read$();
});

Clazz.newMeth(C$, 'read$BA', function (b) {
return p$1.reader.apply(this, []).read$BA(b);
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
return p$1.reader.apply(this, []).read$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'seek$J', function (pos) {
p$1.reader.apply(this, []).seek$J(pos);
});

Clazz.newMeth(C$, 'readBoolean$', function () {
return p$1.reader.apply(this, []).readBoolean$();
});

Clazz.newMeth(C$, 'readByte$', function () {
return $b$[0] = p$1.reader.apply(this, []).readByte$(), $b$[0];
});

Clazz.newMeth(C$, 'readFully$BA', function (b) {
p$1.reader.apply(this, []).readFully$BA(b);
});

Clazz.newMeth(C$, 'readFully$BA$I$I', function (b, off, len) {
p$1.reader.apply(this, []).readFully$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'readLine$', function () {
return p$1.reader.apply(this, []).readLine$();
});

Clazz.newMeth(C$, 'readUnsignedByte$', function () {
return p$1.reader.apply(this, []).readUnsignedByte$();
});

Clazz.newMeth(C$, 'readUTF$', function () {
return p$1.reader.apply(this, []).readUTF$();
});

Clazz.newMeth(C$, 'skipBytes$I', function (n) {
return p$1.reader.apply(this, []).skipBytes$I(n);
});

Clazz.newMeth(C$, 'write$BA', function (b) {
p$1.writer.apply(this, []).write$BA(b);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
p$1.writer.apply(this, []).write$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'write$I', function (b) {
p$1.writer.apply(this, []).write$I(b);
});

Clazz.newMeth(C$, 'writeBoolean$Z', function (v) {
p$1.writer.apply(this, []).writeBoolean$Z(v);
});

Clazz.newMeth(C$, 'writeByte$I', function (v) {
p$1.writer.apply(this, []).writeByte$I(v);
});

Clazz.newMeth(C$, 'writeBytes$S', function (s) {
p$1.writer.apply(this, []).writeBytes$S(s);
});

Clazz.newMeth(C$, 'writeChars$S', function (s) {
p$1.writer.apply(this, []).writeChars$S(s);
});

Clazz.newMeth(C$, 'writeUTF$S', function (str) {
p$1.writer.apply(this, []).writeUTF$S(str);
});

Clazz.newMeth(C$, 'close$', function () {
if (this.raf != null ) this.raf.close$();
this.closed=true;
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(2));
});

Clazz.newMeth(C$, 'writer', function () {
if (this.raf == null ) p$1.initRAF$Z.apply(this, [true]);
return this.raf;
}, p$1);

Clazz.newMeth(C$, 'reader', function () {
if (this.raf == null ) p$1.initRAF$Z.apply(this, [false]);
return this.raf;
}, p$1);

Clazz.newMeth(C$, 'initRAF$Z', function (create) {
if (!create && !this.exists$() ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Trying to read from non-existent file!"]);
}if (this.closed) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Handle already closed"]);
if (this.raf != null ) return;
this.raf=Clazz.new_($I$(3,1).c$$java_io_File$S,[this.get$().getFile$(), this.getMode$()]);
}, p$1);
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.io.handle.FileHandle',null,['org.scijava.plugin.Plugin']],['type="org.scijava.io.handle.DataHandle.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
