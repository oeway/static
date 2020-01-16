(function(){var P$=Clazz.newPackage("org.scijava.annotations"),p$1={},I$=[[0,'java.util.HashSet','java.util.LinkedHashMap','org.scijava.plugin.PluginInfo','org.scijava.annotations.IndexItem','org.scijava.annotations.IndexReader','Thread','org.scijava.annotations.EclipseHelper',['org.scijava.annotations.Index','.IndexItemIterator']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Index", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Iterable');
C$.$classes$=[['IndexItemIterator',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['annotation','Class','loader','ClassLoader']]]

Clazz.newMeth(C$, 'load$Class', function (annotation) {
return C$.load$Class$ClassLoader(annotation, $I$(6).currentThread$().getContextClassLoader$());
}, 1);

Clazz.newMeth(C$, 'load$Class$ClassLoader', function (annotation, loader) {
$I$(7).updateAnnotationIndex$ClassLoader(loader);
return Clazz.new_(1,{A:"Object"},C$.c$$Class$ClassLoader,[annotation, loader]);
}, 1);

Clazz.newMeth(C$, 'c$$Class$ClassLoader', function (annotation, loader) {
;C$.$init$.apply(this);
this.annotation=annotation;
this.loader=loader;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(8,1).c$$Class, [this, null, this.annotation]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Index, "IndexItemIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['urls','java.util.Enumeration','indexReader','org.scijava.annotations.IndexReader','next','org.scijava.annotations.IndexItem','seen','java.util.Set','legacyURLs','java.util.Map']]]

Clazz.newMeth(C$, 'c$$Class', function (annotation) {
;C$.$init$.apply(this);
this.seen=Clazz.new_(1,{E:"java.net.URL"},$I$(1,1));
try {
this.legacyURLs=Clazz.new_(1,{K:"String",V:"java.net.URL"},$I$(2,1));
var legacy=this.this$0.loader.getResources$S("META-INF/annotations/" + annotation.getName$());
var legacySuffixLength="META-INF/annotations/".length$() + annotation.getName$().length$();
while (legacy.hasMoreElements$()){
var url=legacy.nextElement$();
var string=url.toString();
var key=string.substring$I$I(0, string.length$() - legacySuffixLength) + "META-INF/json/" + annotation.getName$() ;
this.legacyURLs.put$TK$TV(key, url);
}
if (this.legacyURLs.isEmpty$()) {
this.legacyURLs=null;
}this.urls=this.this$0.loader.getResources$S("META-INF/json/" + annotation.getName$());
p$1.readNext.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'readNext', function () {
for (; ; ) {
if (this.indexReader == null ) {
try {
this.indexReader=p$1.getNextReader.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
continue;
} else {
throw e;
}
}
if (this.indexReader == null ) {
this.urls=null;
this.next=null;
return;
}}var map=this.indexReader.next$();
if (map != null ) {
var className=$I$(3).fixClassName$S(map.get$O("class"));
var values=map.get$O("values");
System.out.println$S("Index read " + className + " " + values );
this.next=Clazz.new_(1,{A:"Object"},$I$(4,1).c$$Class$ClassLoader$S$java_util_Map,[this.this$0.annotation, this.this$0.loader, className, values]);
return;
}this.indexReader.close$();
this.indexReader=null;
}
}, p$1);

Clazz.newMeth(C$, 'getNextReader', function () {
if (this.urls == null ) {
return null;
}while (this.urls.hasMoreElements$()){
var url=this.urls.nextElement$();
if (this.seen.contains$O(url)) continue;
if (this.legacyURLs != null ) {
this.legacyURLs.remove$O(url.toString());
}this.seen.add$TE(url);
System.out.println$S("Index reading from " + url);
return Clazz.new_($I$(5,1).c$$java_io_InputStream,[url.openStream$()]);
}
if (this.legacyURLs != null  && !this.legacyURLs.isEmpty$() ) {
var entry=this.legacyURLs.entrySet$().iterator$().next$();
this.legacyURLs.remove$O(entry.getKey$());
return $I$(5).getLegacyReader$java_io_InputStream(entry.getValue$().openStream$());
}return null;
}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.next != null ;
});

Clazz.newMeth(C$, 'next$', function () {
var result=this.next;
try {
p$1.readNext.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
this.next=null;
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
