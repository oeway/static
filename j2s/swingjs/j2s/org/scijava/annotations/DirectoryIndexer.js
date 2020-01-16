(function(){var P$=Clazz.newPackage("org.scijava.annotations"),I$=[[0,'java.net.URLClassLoader','java.net.URL','Thread','org.scijava.annotations.ByteCodeAnalyzer','org.scijava.annotations.Indexable','java.io.File','java.io.FileInputStream','java.io.FileOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DirectoryIndexer", null, 'org.scijava.annotations.AbstractIndexWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'index$java_io_File', function (directory) {
try {
var loader=Clazz.new_($I$(1,1).c$$java_net_URLA$ClassLoader,[Clazz.array($I$(2), -1, [directory.toURL$()]), $I$(3).currentThread$().getContextClassLoader$()]);
this.discoverAnnotations$java_io_File$S$ClassLoader(directory, "", loader);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
} else {
throw e;
}
}
this.write$java_io_File(directory);
});

Clazz.newMeth(C$, 'discoverAnnotations$java_io_File$S$ClassLoader', function (directory, classNamePrefix, loader) {
var list=directory.listFiles$();
if (list == null ) {
return;
}for (var file, $file = 0, $$file = list; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
if (file.isDirectory$()) {
this.discoverAnnotations$java_io_File$S$ClassLoader(file, classNamePrefix + file.getName$() + "." , loader);
} else if (file.isFile$()) {
var fileName=file.getName$();
if (!fileName.endsWith$S(".class")) {
continue;
}var className=classNamePrefix + fileName.substring$I$I(0, fileName.length$() - 6);
try {
for (var entry, $entry = $I$(4).getAnnotations$java_io_File(file).entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var annotationName=entry.getKey$();
try {
if (!C$.isIndexable$Class(loader.loadClass$S(annotationName))) {
continue;
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
if (!C$.isIndexable$Class(Clazz.forName(annotationName))) {
continue;
}} else {
throw e;
}
}
this.add$java_util_Map$S$S(entry.getValue$(), annotationName, className);
}
} catch (e) {
System.err.println$S("Warning: could not load class '" + className + "'; skipping" );
e.printStackTrace$();
}
}}
});

Clazz.newMeth(C$, 'add$TA$S', function (annotation, className) {
if (!C$.isIndexable$TA(annotation)) {
return;
}this.add$java_util_Map$S$S(this.adapt$TA(annotation), annotation.annotationType$().getName$(), className);
});

Clazz.newMeth(C$, 'isIndexable$TA', function (annotation) {
return C$.isIndexable$Class(annotation.annotationType$());
}, 1);

Clazz.newMeth(C$, 'isIndexable$Class', function (annotationClass) {
return annotationClass.getAnnotation$Class(Clazz.getClass($I$(5),[])) != null ;
}, 1);

Clazz.newMeth(C$, 'write$java_io_File', function (directory) {
var factory=((P$.DirectoryIndexer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DirectoryIndexer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.scijava.annotations.AbstractIndexWriter','org.scijava.annotations.AbstractIndexWriter.StreamFactory']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'openInput$S', function (annotationName) {
var file=Clazz.new_($I$(6,1).c$$java_io_File$S,[this.$finals$.directory, "META-INF/json/" + annotationName]);
if (file.exists$()) {
return Clazz.new_($I$(7,1).c$$java_io_File,[file]);
}return null;
});

Clazz.newMeth(C$, 'openOutput$S', function (annotationName) {
var file=Clazz.new_($I$(6,1).c$$java_io_File$S,[this.$finals$.directory, "META-INF/json/" + annotationName]);
var dir=file.getParentFile$();
if (dir != null  && !dir.isDirectory$()  && !dir.mkdirs$() ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not make directory " + dir]);
}return ((P$.DirectoryIndexer$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DirectoryIndexer$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.FileOutputStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'close$', function () {
C$.superclazz.prototype.close$.apply(this, []);
if (this.$finals$.file.length$() == 0) {
this.$finals$.file.delete$();
}});
})()
), Clazz.new_($I$(8,1).c$$java_io_File, [this, {file:file}, file],P$.DirectoryIndexer$1$1));
});

Clazz.newMeth(C$, 'isClassObsolete$S', function (className) {
var classPath=className.replace$C$C(".", "/") + ".class";
return !Clazz.new_($I$(6,1).c$$java_io_File$S,[this.$finals$.directory, classPath]).exists$();
});
})()
), Clazz.new_(P$.DirectoryIndexer$1.$init$, [this, {directory:directory}]));
var possiblyObsoletes=Clazz.new_($I$(6,1).c$$java_io_File$S,[directory, "META-INF/json/"]).listFiles$();
if (possiblyObsoletes != null ) {
for (var candidate, $candidate = 0, $$candidate = possiblyObsoletes; $candidate<$$candidate.length&&((candidate=($$candidate[$candidate])),1);$candidate++) {
if (candidate.isFile$()) {
var annotationName=candidate.getName$();
this.merge$S$org_scijava_annotations_AbstractIndexWriter_StreamFactory(annotationName, factory);
}}
}this.write$org_scijava_annotations_AbstractIndexWriter_StreamFactory(factory);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
