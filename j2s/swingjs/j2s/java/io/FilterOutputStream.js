(function(){var P$=java.io,I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FilterOutputStream", null, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['out','java.io.OutputStream']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream', function (out) {
Clazz.super_(C$, this);
this.out=out;
}, 1);

Clazz.newMeth(C$, 'close$', function () {
try {
this.flush$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.out.close$();
});

Clazz.newMeth(C$, 'flush$', function () {
this.out.flush$();
});

Clazz.newMeth(C$, 'write$BA', function (buffer) {
this.write$BA$I$I(buffer, 0, buffer.length);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (buffer, offset, count) {
if (offset <= buffer.length && 0 <= offset  && 0 <= count  && count <= buffer.length - offset ) {
for (var i=0; i < count; i++) {
this.write$I(buffer[offset + i]);
}
} else {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[$I$(1).getString$S("K002f")]);
}});

Clazz.newMeth(C$, 'write$I', function (oneByte) {
this.out.write$I(oneByte);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
