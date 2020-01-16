(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'java.util.Objects','java.nio.file.FileVisitResult']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleFileVisitor", null, null, 'java.nio.file.FileVisitor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['preVisitDirectory$TT$java_nio_file_attribute_BasicFileAttributes'], function (dir, attrs) {
$I$(1).requireNonNull$TT(dir);
$I$(1).requireNonNull$TT(attrs);
return $I$(2).CONTINUE;
});

Clazz.newMeth(C$, ['visitFile$TT$java_nio_file_attribute_BasicFileAttributes'], function (file, attrs) {
$I$(1).requireNonNull$TT(file);
$I$(1).requireNonNull$TT(attrs);
return $I$(2).CONTINUE;
});

Clazz.newMeth(C$, ['visitFileFailed$TT$java_io_IOException'], function (file, exc) {
$I$(1).requireNonNull$TT(file);
throw exc;
});

Clazz.newMeth(C$, ['postVisitDirectory$TT$java_io_IOException'], function (dir, exc) {
$I$(1).requireNonNull$TT(dir);
if (exc != null ) throw exc;
return $I$(2).CONTINUE;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
