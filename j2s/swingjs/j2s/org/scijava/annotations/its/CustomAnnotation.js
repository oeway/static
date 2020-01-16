(function(){var P$=Clazz.newPackage("org.scijava.annotations.its"),I$=[];
/*@*/var C$=Clazz.newClass(P$, "CustomAnnotation", null, null, 'java.lang.annotation.Annotation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() { var a=[];
a.push(['greeting','String',"Hello, World!"]);
a.push(['number','int',123]);
return a}
Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:18 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
