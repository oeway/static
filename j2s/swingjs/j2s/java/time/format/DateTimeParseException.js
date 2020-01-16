(function(){var P$=Clazz.newPackage("java.time.format"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DateTimeParseException", null, 'java.time.DateTimeException');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.parsedString=null;
this.errorIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$CharSequence$I', function (message, parsedData, errorIndex) {
;C$.superclazz.c$$S.apply(this, [message]);C$.$init$.apply(this);
this.parsedString=parsedData.toString();
this.errorIndex=errorIndex;
}, 1);

Clazz.newMeth(C$, 'c$$S$CharSequence$I$Throwable', function (message, parsedData, errorIndex, cause) {
;C$.superclazz.c$$S$Throwable.apply(this, [message, cause]);C$.$init$.apply(this);
this.parsedString=parsedData.toString();
this.errorIndex=errorIndex;
}, 1);

Clazz.newMeth(C$, 'getParsedString$', function () {
return this.parsedString;
});

Clazz.newMeth(C$, 'getErrorIndex$', function () {
return this.errorIndex;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:56 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
