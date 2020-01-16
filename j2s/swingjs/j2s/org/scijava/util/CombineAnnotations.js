(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.annotations.AnnotationCombiner','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CombineAnnotations");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.combiner=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['combiner','org.scijava.annotations.AnnotationCombiner']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'combine$', function () {
try {
this.combiner.combine$java_io_File(null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (Clazz.instanceOf(e, "java.io.IOException")) {
throw e;
}if (Clazz.instanceOf(e, "java.lang.ClassNotFoundException")) {
throw e;
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getAnnotationFiles$', function () {
return this.combiner.getAnnotationFiles$();
});

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_($I$(1,1)).combine$java_io_File(args.length > 0 ? Clazz.new_($I$(2,1).c$$S,[args[0]]) : null);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
