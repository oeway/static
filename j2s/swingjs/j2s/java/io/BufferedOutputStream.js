(function(){var P$=java.io,I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BufferedOutputStream", null, 'java.io.FilterOutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['count'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream', function (out) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
this.buf=Clazz.array(Byte.TYPE, [8192]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$I', function (out, size) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
if (size <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("K0058")]);
}this.buf=Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'flush$', function () {
if (this.count > 0) {
this.out.write$BA$I$I(this.buf, 0, this.count);
}this.count=0;
this.out.flush$();
});

Clazz.newMeth(C$, 'write$BA$I$I', function (buffer, offset, length) {
if (buffer == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(1).getString$S("K0047")]);
}if (offset < 0 || offset > buffer.length - length  || length < 0 ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[$I$(1).getString$S("K002f")]);
}if (this.count == 0 && length >= this.buf.length ) {
this.out.write$BA$I$I(buffer, offset, length);
return;
}var available=this.buf.length - this.count;
if (length < available) {
available=length;
}if (available > 0) {
System.arraycopy$O$I$O$I$I(buffer, offset, this.buf, this.count, available);
this.count+=available;
}if (this.count == this.buf.length) {
this.out.write$BA$I$I(this.buf, 0, this.buf.length);
this.count=0;
if (length > available) {
offset+=available;
available=length - available;
if (available >= this.buf.length) {
this.out.write$BA$I$I(buffer, offset, available);
} else {
System.arraycopy$O$I$O$I$I(buffer, offset, this.buf, this.count, available);
this.count+=available;
}}}});

Clazz.newMeth(C$, 'write$I', function (oneByte) {
if (this.count == this.buf.length) {
this.out.write$BA$I$I(this.buf, 0, this.count);
this.count=0;
}this.buf[this.count++]=((oneByte|0)|0);
});

Clazz.newMeth(C$, 'hashCode$', function () {
try {
this.flush$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return this.out.hashCode$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
