(function(){var P$=Clazz.newPackage("org.scijava.console"),I$=[[0,'java.util.concurrent.CopyOnWriteArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MultiOutputStream", null, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['streams','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStreamA', function (os) {
Clazz.super_(C$, this);
this.streams=Clazz.new_(1,{E:"java.io.OutputStream"},$I$(1,1).c$$TEA,[os]);
}, 1);

Clazz.newMeth(C$, 'addOutputStream$java_io_OutputStream', function (os) {
this.streams.add$TE(os);
});

Clazz.newMeth(C$, 'removeOutputStream$java_io_OutputStream', function (os) {
this.streams.remove$O(os);
});

Clazz.newMeth(C$, 'write$I', function (b) {
for (var stream, $stream = this.streams.iterator$(); $stream.hasNext$()&&((stream=($stream.next$())),1);) stream.write$I(b);

});

Clazz.newMeth(C$, 'write$BA$I$I', function (buf, off, len) {
for (var stream, $stream = this.streams.iterator$(); $stream.hasNext$()&&((stream=($stream.next$())),1);) stream.write$BA$I$I(buf, off, len);

});

Clazz.newMeth(C$, 'close$', function () {
for (var stream, $stream = this.streams.iterator$(); $stream.hasNext$()&&((stream=($stream.next$())),1);) stream.close$();

});

Clazz.newMeth(C$, 'flush$', function () {
for (var stream, $stream = this.streams.iterator$(); $stream.hasNext$()&&((stream=($stream.next$())),1);) stream.flush$();

});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
