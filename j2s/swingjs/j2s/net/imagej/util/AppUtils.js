(function(){var P$=Clazz.newPackage("net.imagej.util"),I$=[[0,'org.scijava.util.AppUtils','java.util.ArrayList','java.util.Collections','java.io.File','Thread','java.util.HashMap','java.util.regex.Pattern','org.scijava.util.FileUtils','java.net.URI']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AppUtils");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.isJS=true ||false;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['isJS']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBaseDirectory$', function () {
return $I$(1).getBaseDirectory$S$Class$S("ij.dir", Clazz.getClass(C$), "core/core");
}, 1);

Clazz.newMeth(C$, 'findResources$S$S', function (regex, pathPrefix) {
var loader=C$.getContextClassLoader$();
var urls=Clazz.new_(1,{E:"java.net.URL"},$I$(2,1));
try {
urls.addAll$java_util_Collection($I$(3).list$java_util_Enumeration(loader.getResources$S(pathPrefix + "/")));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
var baseDirectory=C$.getBaseDirectory$();
if (baseDirectory != null ) {
try {
urls.add$TE(Clazz.new_($I$(4,1).c$$java_io_File$S,[baseDirectory, pathPrefix]).toURI$().toURL$());
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.MalformedURLException")){
} else {
throw exc;
}
}
}return C$.findResources$S$Iterable(regex, urls);
}, 1);

Clazz.newMeth(C$, 'getContextClassLoader$', function () {
if (C$.isJS) {
return ClassLoader.getSystemClassLoader$();
} else {
return $I$(5).currentThread$().getContextClassLoader$();
}}, 1);

Clazz.newMeth(C$, 'findResources$S$Iterable', function (regex, urls) {
var result=Clazz.new_(1,{K:"String",V:"java.net.URL"},$I$(6,1));
var pattern=regex == null  ? null : $I$(7).compile$S(regex);
for (var url, $url = urls.iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
C$.getResources$java_util_regex_Pattern$java_util_Map$java_net_URL(pattern, result, url);
}
return result;
}, 1);

Clazz.newMeth(C$, 'getResources$java_util_regex_Pattern$java_util_Map$java_net_URL', function (pattern, result, base) {
var prefix=C$.urlPath$java_net_URL(base);
if (prefix == null ) return;
for (var url, $url = $I$(8).listContents$java_net_URL(base).iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
var s=C$.urlPath$java_net_URL(url);
if (s == null  || !s.startsWith$S(prefix) ) continue;
if (pattern == null  || pattern.matcher$CharSequence(s).matches$() ) {
var key=C$.urlPath$S(s.substring$I(prefix.length$()));
if (key != null ) result.put$TK$TV(key, url);
}}
}, 1);

Clazz.newMeth(C$, 'urlPath$java_net_URL', function (url) {
try {
return url.toURI$().toString();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'urlPath$S', function (path) {
try {
return Clazz.new_($I$(9,1).c$$S,[path]).getPath$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
return null;
} else {
throw exc;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
