(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "WriteAbortedException", null, 'java.io.ObjectStreamException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['detail','Exception']]]

Clazz.newMeth(C$, 'c$$S$Exception', function (detailMessage, rootCause) {
;C$.superclazz.c$$S.apply(this,[detailMessage]);C$.$init$.apply(this);
this.detail=rootCause;
this.initCause$Throwable(rootCause);
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
var msg=C$.superclazz.prototype.getMessage$.apply(this, []);
if (this.detail != null ) {
msg=msg + "; " + this.detail.toString() ;
}return msg;
});

Clazz.newMeth(C$, 'getCause$', function () {
return this.detail;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
