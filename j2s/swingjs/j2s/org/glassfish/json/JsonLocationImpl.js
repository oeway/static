(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JsonLocationImpl", null, null, 'javax.json.stream.JsonLocation');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.UNKNOWN=Clazz.new_(C$.c$$J$J$J,[-1, -1, -1]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['columnNo','lineNo','offset']]
,['O',['UNKNOWN','javax.json.stream.JsonLocation']]]

Clazz.newMeth(C$, 'c$$J$J$J', function (lineNo, columnNo, streamOffset) {
;C$.$init$.apply(this);
this.lineNo=lineNo;
this.columnNo=columnNo;
this.offset=streamOffset;
}, 1);

Clazz.newMeth(C$, 'getLineNumber$', function () {
return this.lineNo;
});

Clazz.newMeth(C$, 'getColumnNumber$', function () {
return this.columnNo;
});

Clazz.newMeth(C$, 'getStreamOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'toString', function () {
return "(line no=" + this.lineNo + ", column no=" + this.columnNo + ", offset=" + this.offset + ")" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:49 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
