(function(){var P$=Clazz.newPackage("org.scijava.test"),I$=[[0,'java.io.File','org.scijava.util.Types','org.scijava.util.FileUtils','Thread',['java.util.AbstractMap','.SimpleEntry']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestUtils");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.temporaryDirectoryCounter=1;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['temporaryDirectoryCounter']]]

Clazz.newMeth(C$, 'createPath$java_io_File$S', function (parent, path) {
var file=parent;
var elements=path.split$S("/");
for (var i=0; i < elements.length; i++) {
file=Clazz.new_($I$(1,1).c$$java_io_File$S,[file, elements[i]]);
if (i == elements.length - 1) file.createNewFile$();
 else file.mkdir$();
}
return file;
}, 1);

Clazz.newMeth(C$, 'createTemporaryDirectory$S', function (prefix) {
var calling=C$.getCallingCodeLocation$Class(null);
return C$.createTemporaryDirectory$S$Class$S(prefix, calling.getKey$(), calling.getValue$());
}, 1);

Clazz.newMeth(C$, 'createTemporaryDirectory$S$Class', function (prefix, forClass) {
return C$.createTemporaryDirectory$S$Class$S(prefix, forClass, "" + C$.temporaryDirectoryCounter++);
}, 1);

Clazz.newMeth(C$, 'createTemporaryDirectory$S$Class$S', function (prefix, forClass, suffix) {
var directory=$I$(2).location$Class(forClass);
if (directory == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No location for class " + forClass]);
}if (!"file".equals$O(directory.getProtocol$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid directory: " + directory]);
}var path=directory.getPath$();
if (path == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Directory has null path"]);
var baseDirectory;
if (path.endsWith$S("/target/test-classes/")) {
baseDirectory=Clazz.new_($I$(1,1).c$$S,[path]).getParentFile$();
} else {
baseDirectory=Clazz.new_($I$(1,1).c$$S,[path]);
}var file=Clazz.new_($I$(1,1).c$$java_io_File$S,[baseDirectory, prefix + suffix]);
if (file.isDirectory$()) {
if (!$I$(3).deleteRecursively$java_io_File(file)) {
for (var i=-1; file.isDirectory$(); i--) {
file=Clazz.new_($I$(1,1).c$$java_io_File$S,[baseDirectory, prefix + i + suffix ]);
}
}} else if (file.exists$() && !file.delete$() ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not remove " + file]);
}if (!file.mkdir$()) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not make directory " + file]);
return file;
}, 1);

Clazz.newMeth(C$, 'getCallingClass$Class', function (excluding) {
return C$.getCallingCodeLocation$Class(excluding).getKey$();
}, 1);

Clazz.newMeth(C$, 'getCallingCodeLocation$Class', function (excluding) {
var thisClassName=Clazz.getClass(C$).getName$();
var thisClassName2=excluding == null  ? null : excluding.getName$();
var currentThread=$I$(4).currentThread$();
for (var element, $element = 0, $$element = currentThread.getStackTrace$(); $element<$$element.length&&((element=($$element[$element])),1);$element++) {
var thatClassName=element.getClassName$();
if (thatClassName == null  || thatClassName.equals$O(thisClassName)  || thatClassName.equals$O(thisClassName2)  || thatClassName.endsWith$S("TestUtils")  || thatClassName.startsWith$S("java.lang.") ) {
continue;
}var loader=currentThread.getContextClassLoader$();
var clazz;
try {
clazz=loader.loadClass$S(element.getClassName$());
var url=clazz.getResource$S("/" + clazz.getName$().replace$C$C(".", "/") + ".class" );
if (url == null  || !"file".equals$O(url.getProtocol$()) ) {
continue;
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Could not load " + element.getClassName$() + " with the current context class loader (" + loader + ")!" ]);
} else {
throw e;
}
}
var suffix=element.getMethodName$() + "-L" + element.getLineNumber$() ;
return Clazz.new_(1,{K:"Class",V:"String"},$I$(5,1).c$$TK$TV,[clazz, suffix]);
}
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["No calling class outside " + thisClassName + " found!" ]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
