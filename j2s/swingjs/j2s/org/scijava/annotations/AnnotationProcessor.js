(function(){var P$=Clazz.newPackage("org.scijava.annotations"),p$1={},I$=[[0,'java.util.HashMap','java.util.ArrayList','javax.lang.model.element.ElementKind',['javax.tools.Diagnostic','.Kind'],'java.util.TreeMap','org.scijava.annotations.Indexable','javax.tools.StandardLocation','javax.lang.model.element.Element','java.io.File','java.io.FileOutputStream',['org.scijava.annotations.AnnotationProcessor','.Writer'],'java.io.ByteArrayOutputStream','java.io.PrintStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AnnotationProcessor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.annotation.processing.AbstractProcessor');
C$.$classes$=[['Writer',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['roundEnv','javax.annotation.processing.RoundEnvironment']]]

Clazz.newMeth(C$, 'process$java_util_Set$javax_annotation_processing_RoundEnvironment', function (elements, env) {
this.roundEnv=env;
var writer=Clazz.new_($I$(11,1), [this, null]);
for (var element, $element = elements.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
writer.add$javax_lang_model_element_TypeElement(element);
}
try {
writer.write$org_scijava_annotations_AbstractIndexWriter_StreamFactory(writer);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
var out=Clazz.new_($I$(12,1));
e.printStackTrace$java_io_PrintStream(Clazz.new_($I$(13,1).c$$java_io_OutputStream,[out]));
try {
out.close$();
this.processingEnv.getMessager$().printMessage$javax_tools_Diagnostic_Kind$CharSequence($I$(4).ERROR, out.toString());
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.io.IOException")){
this.processingEnv.getMessager$().printMessage$javax_tools_Diagnostic_Kind$CharSequence($I$(4).ERROR, e2.getMessage$() + " while printing " + e.getMessage$() );
} else {
throw e2;
}
}
} else {
throw e;
}
}
return false;
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.annotations.AnnotationProcessor',null,['javax.annotation.processing.SupportedSourceVersion','javax.annotation.processing.SupportedAnnotationTypes']],['SourceVersion.RELEASE_8','"*"']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationProcessor, "Writer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.scijava.annotations.AbstractIndexWriter', [['org.scijava.annotations.AbstractIndexWriter','org.scijava.annotations.AbstractIndexWriter.StreamFactory']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.originatingElements=Clazz.new_(1,{K:"String",V:"java.util.List"},$I$(1,1));
this.filer=this.this$0.processingEnv.getFiler$();
this.utils=this.this$0.processingEnv.getElementUtils$();
this.typeUtils=this.this$0.processingEnv.getTypeUtils$();
}, 1);

C$.$fields$=[['O',['originatingElements','java.util.Map','filer','javax.annotation.processing.Filer','utils','javax.lang.model.util.Elements','typeUtils','javax.lang.model.util.Types']]]

Clazz.newMeth(C$, 'add$javax_lang_model_element_TypeElement', function (element) {
var mirror=p$1.getMirror$javax_lang_model_element_TypeElement.apply(this, [element]);
if (mirror != null ) {
var annotationName=this.utils.getBinaryName$javax_lang_model_element_TypeElement(element).toString();
var originating=this.originatingElements.get$O(annotationName);
if (originating == null ) {
originating=Clazz.new_(1,{E:"javax.lang.model.element.Element"},$I$(2,1));
this.originatingElements.put$TK$TV(annotationName, originating);
}for (var annotated, $annotated = this.this$0.roundEnv.getElementsAnnotatedWith$javax_lang_model_element_TypeElement(element).iterator$(); $annotated.hasNext$()&&((annotated=($annotated.next$())),1);) {
switch (annotated.getKind$()) {
case $I$(3).ANNOTATION_TYPE:
case $I$(3).CLASS:
case $I$(3).ENUM:
case $I$(3).INTERFACE:
var className=this.utils.getBinaryName$javax_lang_model_element_TypeElement(annotated).toString();
var values=p$1.adapt$java_util_List$javax_lang_model_type_TypeMirror.apply(this, [annotated.getAnnotationMirrors$(), element.asType$()]);
C$.superclazz.prototype.add$java_util_Map$S$S.apply(this, [values, annotationName, className]);
originating.add$TE(annotated);
break;
default:
this.this$0.processingEnv.getMessager$().printMessage$javax_tools_Diagnostic_Kind$CharSequence($I$(4).ERROR, "Cannot handle annotated element of kind " + annotated.getKind$());
}
}
}});

Clazz.newMeth(C$, 'adapt$java_util_List$javax_lang_model_type_TypeMirror', function (mirrors, annotationType) {
var result=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(5,1));
for (var mirror, $mirror = mirrors.iterator$(); $mirror.hasNext$()&&((mirror=($mirror.next$())),1);) {
if (this.typeUtils.isSameType$javax_lang_model_type_TypeMirror$javax_lang_model_type_TypeMirror(mirror.getAnnotationType$(), annotationType)) {
return this.adapt$O(mirror);
}}
return result;
}, p$1);

Clazz.newMeth(C$, 'adapt$O', function (o) {
if (Clazz.instanceOf(o, "javax.lang.model.element.AnnotationMirror")) {
var mirror=o;
var result=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(5,1));
for (var entry, $entry = mirror.getElementValues$().entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$().getSimpleName$().toString();
var value=this.adapt$O(entry.getValue$().getValue$());
result.put$TK$TV(key, value);
}
return result;
} else if (Clazz.instanceOf(o, "java.util.List")) {
var list=o;
var result=Clazz.new_(1,{E:"java.lang.Object"},$I$(2,1).c$$I,[list.size$()]);
for (var item, $item = list.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
result.add$TE(this.adapt$O(item));
}
return result;
} else if (Clazz.instanceOf(o, "javax.lang.model.type.TypeMirror")) {
var mirror=o;
return this.utils.getBinaryName$javax_lang_model_element_TypeElement(this.typeUtils.asElement$javax_lang_model_type_TypeMirror(mirror)).toString();
} else if (Clazz.instanceOf(o, "javax.lang.model.element.VariableElement")) {
var element=o;
var result=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(5,1));
var enumName=this.utils.getBinaryName$javax_lang_model_element_TypeElement(element.getEnclosingElement$()).toString();
var valueName=element.getSimpleName$().toString();
result.put$TK$TV("enum", enumName);
result.put$TK$TV("value", valueName);
return result;
} else {
return C$.superclazz.prototype.adapt$O.apply(this, [o]);
}});

Clazz.newMeth(C$, 'getMirror$javax_lang_model_element_TypeElement', function (element) {
for (var candidate, $candidate = this.utils.getAllAnnotationMirrors$javax_lang_model_element_Element(element).iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
var binaryName=this.utils.getBinaryName$javax_lang_model_element_TypeElement(candidate.getAnnotationType$().asElement$());
if (binaryName.contentEquals$CharSequence(Clazz.getClass($I$(6),[]).getName$())) {
return candidate;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'openInput$S', function (annotationName) {
try {
return this.filer.getResource$javax_tools_JavaFileManager_Location$CharSequence$CharSequence($I$(7).CLASS_OUTPUT, "", "META-INF/json/" + annotationName).openInputStream$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException") || Clazz.exceptionOf(e,"java.nio.file.NoSuchFileException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'openOutput$S', function (annotationName) {
var originating=this.originatingElements.get$O(annotationName);
var path="META-INF/json/" + annotationName;
var fileObject=this.filer.createResource$javax_tools_JavaFileManager_Location$CharSequence$CharSequence$javax_lang_model_element_ElementA($I$(7).CLASS_OUTPUT, "", path, originating.toArray$TTA(Clazz.array($I$(8), [originating.size$()])));
var uri=fileObject.toUri$().toString();
if (uri != null  && uri.endsWith$S("/" + path) ) {
return fileObject.openOutputStream$();
}var prefix=uri == null  ? "" : uri.substring$I$I(0, uri.length$() - annotationName.length$());
var file=Clazz.new_($I$(9,1).c$$S,[prefix + path]);
var parent=file.getParentFile$();
if (parent != null  && !parent.isDirectory$()  && !parent.mkdirs$() ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not create directory: " + parent]);
}return Clazz.new_($I$(10,1).c$$java_io_File,[file]);
});

Clazz.newMeth(C$, 'isClassObsolete$S', function (className) {
return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
