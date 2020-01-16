(function(){var P$=Clazz.newPackage("org.apache.log4j.helpers"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NullEnumeration", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.INSTANCE=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['INSTANCE','org.apache.log4j.helpers.NullEnumeration']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$', function () {
return false;
});

Clazz.newMeth(C$, 'nextElement$', function () {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:24:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
