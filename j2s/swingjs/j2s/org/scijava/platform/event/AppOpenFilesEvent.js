(function(){var P$=Clazz.newPackage("org.scijava.platform.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AppOpenFilesEvent", null, 'org.scijava.platform.event.ApplicationEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['files','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (files) {
Clazz.super_(C$, this);
this.files=files;
}, 1);

Clazz.newMeth(C$, 'getFiles$', function () {
return this.files;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
