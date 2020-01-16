(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllformedLocaleException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._errIdx=-1;
}, 1);

C$.$fields$=[['I',['_errIdx']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (message, errorIndex) {
;C$.superclazz.c$$S.apply(this,[message + ((errorIndex < 0) ? "" : " [at index " + errorIndex + "]" )]);C$.$init$.apply(this);
this._errIdx=errorIndex;
}, 1);

Clazz.newMeth(C$, 'getErrorIndex$', function () {
return this._errIdx;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
