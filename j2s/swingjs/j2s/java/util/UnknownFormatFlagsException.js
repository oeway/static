(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnknownFormatFlagsException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['flags']]]

Clazz.newMeth(C$, 'c$$S', function (f) {
Clazz.super_(C$, this);
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.flags=f;
}, 1);

Clazz.newMeth(C$, 'getFlags$', function () {
return this.flags;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return "Flags = " + this.flags;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1