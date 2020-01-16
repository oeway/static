(function(){var P$=java.io,I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutputStream", null, null, ['java.io.Closeable', 'java.io.Flushable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'write$BA', function (buffer) {
this.write$BA$I$I(buffer, 0, buffer.length);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (buffer, offset, count) {
if (offset <= buffer.length && 0 <= offset  && 0 <= count  && count <= buffer.length - offset ) {
for (var i=offset; i < offset + count; i++) this.write$I(buffer[i]);

} else throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[$I$(1).getString$S("K002f")]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
