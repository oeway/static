(function(){var P$=Clazz.newPackage("org.scijava.annotations"),p$1={},I$=[[0,'java.io.File','java.io.FileOutputStream','Thread','org.scijava.annotations.Index',['org.scijava.annotations.AnnotationCombiner','.AnnotationStreamFactory'],'java.util.HashSet','org.scijava.util.FileUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AnnotationCombiner", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.annotations.AbstractIndexWriter', 'org.scijava.util.Combiner');
C$.$classes$=[['AnnotationStreamFactory',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['combine$java_io_File','combine$'], function (outputDirectory) {
if (outputDirectory == null ) {
outputDirectory=Clazz.new_($I$(1,1).c$$S,["src/main/assembly/all"]);
}var annotationFiles=this.getAnnotationFiles$();
var loader=$I$(3).currentThread$().getContextClassLoader$();
p$1.log$S.apply(this, [""]);
p$1.log$S.apply(this, ["Writing annotations to " + outputDirectory.getAbsolutePath$()]);
Clazz.new_($I$(1,1).c$$java_io_File$S,[outputDirectory, "META-INF/json/"]).mkdirs$();
for (var annotationFile, $annotationFile = annotationFiles.iterator$(); $annotationFile.hasNext$()&&((annotationFile=($annotationFile.next$())),1);) {
var annotationName=annotationFile.substring$I("META-INF/json/".length$());
var annotation=loader.loadClass$S(annotationName);
for (var item, $item = $I$(4).load$Class$ClassLoader(annotation, loader).iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
this.add$java_util_Map$S$S(this.adapt$TA(item.annotation$()), annotationName, item.className$());
}
}
this.write$org_scijava_annotations_AbstractIndexWriter_StreamFactory(Clazz.new_($I$(5,1).c$$java_io_File,[outputDirectory]));
});

Clazz.newMeth(C$, 'getAnnotationFiles$', function () {
var files=Clazz.new_(1,{E:"String"},$I$(6,1));
for (var prefix, $prefix = 0, $$prefix = Clazz.array(String, -1, ["META-INF/json/", "META-INF/annotations/"]); $prefix<$$prefix.length&&((prefix=($$prefix[$prefix])),1);$prefix++) {
var directories=$I$(3).currentThread$().getContextClassLoader$().getResources$S(prefix);
while (directories.hasMoreElements$()){
var url=directories.nextElement$();
for (var annotationIndexURL, $annotationIndexURL = $I$(7).listContents$java_net_URL(url).iterator$(); $annotationIndexURL.hasNext$()&&((annotationIndexURL=($annotationIndexURL.next$())),1);) {
var string=annotationIndexURL.toString();
if (string.endsWith$S("/")) {
continue;
}var length=string.length$();
p$1.add$java_util_HashSet$S.apply(this, [files, "META-INF/json/" + string.substring$I$I(string.lastIndexOf$I$I("/", length - 1) + 1, length)]);
}
}
}
return files;
});

Clazz.newMeth(C$, 'add$java_util_HashSet$S', function (set, item) {
p$1.log$S.apply(this, ["\t" + item]);
set.add$TE(item);
}, p$1);

Clazz.newMeth(C$, 'log$S', function (msg) {
System.out.println$S(msg);
}, p$1);

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$).combine$java_io_File(args.length > 0 ? Clazz.new_($I$(1,1).c$$S,[args[0]]) : null);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationCombiner, "AnnotationStreamFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.scijava.annotations.AbstractIndexWriter','org.scijava.annotations.AbstractIndexWriter.StreamFactory']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['outputDirectory','java.io.File']]]

Clazz.newMeth(C$, 'c$$java_io_File', function (outputDirectory) {
;C$.$init$.apply(this);
this.outputDirectory=outputDirectory;
}, 1);

Clazz.newMeth(C$, 'openInput$S', function (annotationName) {
return null;
});

Clazz.newMeth(C$, 'openOutput$S', function (annotationName) {
var file=Clazz.new_($I$(1,1).c$$java_io_File$S,[this.outputDirectory, "META-INF/json/" + annotationName]);
return Clazz.new_($I$(2,1).c$$java_io_File,[file]);
});

Clazz.newMeth(C$, 'isClassObsolete$S', function (className) {
return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
