(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "EventObject", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O', function (source) {
;C$.$init$.apply(this);
if (source == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null source"]);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[source=" + this.source + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
