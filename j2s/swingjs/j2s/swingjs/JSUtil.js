(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.util.Hashtable','Boolean','java.net.URL','javajs.util.Rdr','java.io.BufferedInputStream','javajs.util.AU','java.io.ByteArrayInputStream','javajs.util.ZipTools','swingjs.api.Interface','javajs.util.PT','java.awt.Toolkit','java.util.Locale','javajs.util.AjaxURLConnection','swingjs.json.JSON','java.awt.Color','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSUtil");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
var j2sdebug=false;
var j2sself=null;
{
j2sself = self.J2S;
j2sdebug = J2S._checkLoad || J2S._debugCode
}
C$.debugging=j2sdebug;
C$.J2S=j2sself;
System.out.println$S("swingjs.JSUtil initialized;debug=" + j2sdebug);
};
C$.useCache=true;
C$.jQuery=C$.getJQuery$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['debugging','useCache'],'O',['J2S','swingjs.api.js.J2SInterface','fileCache','java.util.Hashtable','zipTools','javajs.util.ZipTools','jQuery','swingjs.api.js.JQuery','mapNotImpl','java.util.Map','ctxTemp','java.lang.Object']]]

Clazz.newMeth(C$, 'getFileCache$', function () {
if (C$.fileCache == null  && (C$.fileCache=C$.J2S.getSetJavaFileCache(null)) == null  ) {
C$.fileCache=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
C$.J2S.getSetJavaFileCache(C$.fileCache);
}return C$.fileCache;
}, 1);

Clazz.newMeth(C$, 'getCachedFileData$S', function (path) {
return (C$.useCache && C$.fileCache != null   ? C$.fileCache.get$O(C$.fixCachePath$S(path)) : null);
}, 1);

Clazz.newMeth(C$, 'removeCachedFileData$S', function (path) {
return (C$.useCache && C$.fileCache != null   ? C$.fileCache.put$TK$TV(C$.fixCachePath$S(path), $I$(2).FALSE) : null);
}, 1);

Clazz.newMeth(C$, 'getFileContents$O$Z', function (uriOrJSFile, asBytes) {
if (Clazz.instanceOf(uriOrJSFile, "java.io.File")) {
var bytes=uriOrJSFile.秘bytes ||null;
if (bytes != null ) return bytes;
}var uri=uriOrJSFile.toString();
var data=null;
if (asBytes && uri.indexOf$S(":/") < 0 ) {
data=C$.getCachedFileData$S(uri);
if (data != null ) return data;
if (!uri.startsWith$S("/")) uri="/" + uri;
uri="http://." + uri;
}if (data == null ) {
data=C$.getCachedFileData$S(uri);
}if (data == null  && !uri.startsWith$S("./") ) {
try {
var stream=Clazz.new_($I$(3,1).c$$S,[uri]).getContent$();
data=(asBytes ? $I$(4).getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC(stream, null) : $I$(4).streamToUTF8String$java_io_BufferedInputStream(stream));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
data=C$.J2S.getFileData(uri, null, false, asBytes);
if (data == null ) C$.removeCachedFileData$S(uri);
} else {
throw e;
}
}
}return data;
}, 1);

Clazz.newMeth(C$, 'fixCachePath$S', function (uri) {
var pt;
if (uri.startsWith$S("./")) uri="/" + uri;
if (uri.startsWith$S("https:/")) uri=uri.substring$I(7);
if (uri.startsWith$S("http:/")) uri=uri.substring$I(6);
uri=uri.replace$CharSequence$CharSequence("//", "/");
while ((pt=uri.indexOf$S("/././")) >= 0){
uri=uri.substring$I$I(0, pt) + uri.substring$I(pt + 2);
}
if (uri.startsWith$S("/")) uri=uri.substring$I(1);
if (uri.startsWith$S("./")) uri=uri.substring$I(2);
return uri;
}, 1);

Clazz.newMeth(C$, 'getFileAsString$S', function (filename) {
var data=C$.getFileContents$O$Z(filename, false);
return C$.ensureString$O(data);
}, 1);

Clazz.newMeth(C$, 'ensureString$O', function (data) {
if (data == null ) return null;
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) return $I$(4).bytesToUTF8String$BA(data);
if (Clazz.instanceOf(data, "java.lang.String") || Clazz.instanceOf(data, "javajs.util.SB") ) return data.toString();
if (Clazz.instanceOf(data, "java.io.InputStream")) return $I$(4).streamToUTF8String$java_io_BufferedInputStream(Clazz.new_($I$(5,1).c$$java_io_InputStream,[data]));
return null;
}, 1);

Clazz.newMeth(C$, 'getFileAsBytes$O$Z', function (file, checkNotFound) {
var data=C$.getFileAsBytes$O(file);
if (data == null ) return null;
if (checkNotFound) {
if (data.length == 0) return null;
if (data.length == 2) {
if (data[0] == 13 && data[1] == 10 ) return null;
}if (data.length == 39) {
if ( String.instantialize(data).equals$O("NetworkError: A network error occurred.")) return null;
}System.out.println$S( String.instantialize(data));
}return data;
}, 1);

Clazz.newMeth(C$, 'getFileAsBytes$O', function (file) {
var data=C$.getFileContents$O$Z(file, true);
if (data == null  || data === $I$(2).FALSE  ) return null;
var b=null;
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) b=data;
 else if (Clazz.instanceOf(data, "java.lang.String")) b=(data).getBytes$();
 else if (Clazz.instanceOf(data, "javajs.util.SB")) b=$I$(4).getBytesFromSB$javajs_util_SB(data);
 else if (Clazz.instanceOf(data, "java.io.InputStream")) try {
b=$I$(4).getLimitedStreamBytes$java_io_InputStream$J(data, -1);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return $I$(6).ensureSignedBytes$BA(b);
}, 1);

Clazz.newMeth(C$, 'haveCachedResource$S$Z', function (resourceName, isJavaPath) {
var path=C$.J2S.getResourcePath(resourceName, isJavaPath);
return (path != null  && C$.getCachedFileData$S(path) != null  );
}, 1);

Clazz.newMeth(C$, 'getJavaResource$S$Z$Z$Z', function (resourceName, isJavaPath, doCache, doProcess) {
System.out.println$S("JSUtil getting Java resource " + resourceName);
var path=C$.J2S.getResourcePath(resourceName, isJavaPath);
if (path == null ) return null;
var data=C$.getCachedFileData$S(path);
if (data === $I$(2).FALSE ) return null;
if (data == null ) {
data=C$.J2S.getFileData(path, null, false, false);
if (data == null ) {
if (C$.useCache && doCache ) {
C$.removeCachedFileData$S(path);
}} else if (C$.useCache && doCache ) {
C$.cacheFileData$S$O(path, data);
}}var sdata=C$.ensureString$O(data);
var ok=(sdata != null  && sdata.indexOf$S("[Exception") != 0 );
System.out.println$S("Processing " + path + " [" + (ok ? "" + sdata.length$() : sdata) + "]" );
return (!ok ? null : !doProcess ? sdata : path.endsWith$S(".css") ? C$.processCSS$S$S(sdata, path) : path.endsWith$S(".js") ? C$.processJS$S$S(sdata, resourceName) : sdata);
}, 1);

Clazz.newMeth(C$, 'getCachedResourceAsStream$S', function (name) {
System.out.println$S("JSUtil getting Java resource " + name);
var path=C$.J2S.getResourcePath(name, false);
if (path == null ) return null;
var stream;
var data=C$.getCachedFileData$S(path);
if (data == null ) {
stream=C$.getResourceAsStream$S(name);
data=stream && stream.$in.buf ||null;
} else {
stream=Clazz.new_($I$(5,1).c$$java_io_InputStream,[Clazz.new_($I$(7,1).c$$BA,[data])]);
}if (stream != null  && C$.useCache ) C$.cacheFileData$S$O(path, data);
return stream;
}, 1);

Clazz.newMeth(C$, 'cacheFileData$S$O', function (path, data) {
if (data == null ) {
System.out.println$S("JSUtil releasing cached bytes for " + path);
C$.getFileCache$().remove$O(path);
} else {
var count="?";
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) count="" + (data).length;
 else if (Clazz.instanceOf(data, "java.lang.String")) count="" + (data).length$();
path=C$.fixCachePath$S(path);
if (!C$.getFileCache$().containsKey$O(path)) System.out.println$S("JSUtil caching " + count + " bytes for " + path );
C$.getFileCache$().put$TK$TV(path, data);
}}, 1);

Clazz.newMeth(C$, 'loadJavaResourcesFromZip$ClassLoader$S$java_util_Map', function (cl, zipFileName, mapByteData) {
if (mapByteData == null ) mapByteData=C$.getFileCache$();
var fileList="";
try {
var bis=Clazz.new_($I$(5,1).c$$java_io_InputStream,[cl.getResourceAsStream$S(zipFileName)]);
var prefix=C$.J2S.getResourcePath(null, true);
fileList=$I$(8).cacheZipContentsStatic$java_io_BufferedInputStream$S$java_util_Map$Z(bis, prefix, mapByteData, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("JSUtil could not cache files from " + zipFileName);
return;
} else {
throw e;
}
}
if (C$.debugging) System.out.println$S("JSUtil loaded resources from " + zipFileName + ":\n" + fileList );
}, 1);

Clazz.newMeth(C$, 'getZipTools$', function () {
return (C$.zipTools == null  ? (C$.zipTools=$I$(9).getInstance$S$Z("javajs.util.ZipTools", true)) : C$.zipTools);
}, 1);

Clazz.newMeth(C$, 'loadStaticResource$S', function (file) {
var s="alert('" + file + "' was not found)" ;
if (!C$.J2S.isResourceLoaded(file, false)) {
s=C$.getJavaResource$S$Z$Z$Z(file, true, false, true);
C$.J2S.isResourceLoaded(file, true);
}return s;
}, 1);

Clazz.newMeth(C$, 'isClassLoaded$S', function (className) {
return (Clazz._isClassDefined(className) ||false);
}, 1);

Clazz.newMeth(C$, 'processCSS$S$S', function (css, path) {
if (path != null  && css.indexOf$S("images/") >= 0 ) {
path=path.substring$I$I(0, path.lastIndexOf$S("/") + 1) + "images/";
css=$I$(10).rep$S$S$S(css, "images/", path);
}C$.jQuery.$("head").append(C$.jQuery.$("<style type='text/css'>" + css + "</style>" ));
return css;
}, 1);

Clazz.newMeth(C$, 'processJS$S$S', function (js, resourceName) {
try {
{
if (js.indexOf(";//# sourceURL=") < 0) js += ";//# sourceURL=" + J2S.thisApplet._j2sPath + "/" + resourceName;
eval(js);
}
} catch (e) {
C$.alert$O("error processing " + js);
return null;
}
return js;
}, 1);

Clazz.newMeth(C$, 'getJQuery$', function () {
if (C$.jQuery != null ) return C$.jQuery;
{
if (!window.jQuery) alert( "jQuery is required for SwingJS, but window.jQuery is not defined." ); jQuery.$ || (jQuery.$ = jQuery); return(jQuery);
}
}, 1);

Clazz.newMeth(C$, 'parseJSONRaw$S', function (json) {
return C$.getJQuery$().parseJSON(json);
}, 1);

Clazz.newMeth(C$, 'getStackTrace$I', function (n) {
return Clazz._getStackTrace(n) ||null;
}, 1);

Clazz.newMeth(C$, 'getStackTrace$', function () {
{
return Clazz._getStackTrace();
}
}, 1);

Clazz.newMeth(C$, 'notImplemented$S', function (msg) {
var s=null;
if (C$.mapNotImpl == null ) C$.mapNotImpl=Clazz.new_(1,{K:"String",V:"Boolean"},$I$(1,1));
{
s = arguments.callee.caller;
var cl = s.claxxOwner || s.exClazz;
s = (cl ? cl.__CLASS_NAME__ + "." : "") + arguments.callee.caller.exName;
}
if (C$.mapNotImpl.containsKey$O(s + msg)) return;
C$.mapNotImpl.put$TK$TV(s + msg, $I$(2).TRUE);
System.out.println$S(s + " has not been implemented in SwingJS. " + (msg == "" ? "" : (msg == null  ? "" : msg) + C$.getStackTrace$I(-5)) );
}, 1);

Clazz.newMeth(C$, 'log$S', function (msg) {
{
System.out.println(msg);
console.log(msg);
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S', function (className) {
return $I$(9).getInstance$S$Z(className, false);
}, 1);

Clazz.newMeth(C$, 'readyCallback$S$S$java_awt_JSComponent$swingjs_JSAppletViewer', function (aname, fname, applet, appletPanel) {
try {
C$.J2S.readyCallback(aname, fname, true, applet, appletPanel);
} catch (e) {
System.out.println$S("JSUtil Error running readyCallback method for " + fname + " -- check your page JavaScript" );
}
}, 1);

Clazz.newMeth(C$, 'getSignedStreamBytes$java_io_BufferedInputStream', function (bis) {
try {
return $I$(6).ensureSignedBytes$BA($I$(4).getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC(bis, null));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'saveFile$S$O$S$S', function (fileName, data, mimeType, encoding) {
C$.J2S.saveFile(fileName, data, mimeType, encoding);
}, 1);

Clazz.newMeth(C$, 'getResourceAsStream$S', function (name) {
return $I$(11).getDefaultToolkit$().getClass$().getClassLoader$().getResourceAsStream$S(name);
}, 1);

Clazz.newMeth(C$, 'getResource$S', function (name) {
return $I$(11).getDefaultToolkit$().getClass$().getClassLoader$().getResource$S(name);
}, 1);

Clazz.newMeth(C$, 'getDefaultLocale$S', function (language) {
var region;
var country;
var variant;
if (language == null ) language=C$.J2S.getDefaultLanguage(true);
language=language.replace$C$C("-", "_");
if (language == null  || language.length$() == 0  || language.equalsIgnoreCase$S("en") ) language="en_US";
var i=language.indexOf$I("_");
if (i > 0) {
region=language.substring$I(i + 1);
language=language.substring$I$I(0, i);
} else {
region="";
}region=region.toUpperCase$();
i=region.indexOf$I("_");
if (i > 0) {
country=region.substring$I$I(0, i);
variant=region.substring$I(i + 1);
} else {
country=region;
variant="";
}return Clazz.new_($I$(12,1).c$$S$S$S,[language, country, variant]);
}, 1);

Clazz.newMeth(C$, 'getURLInputStream$java_net_URL$Z', function (url, andDelete) {
try {
var bis=$I$(13).getAttachedStreamData$java_net_URL$Z(url, andDelete);
return (bis == null  ? url.openStream$() : bis);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'showWebPage$java_net_URL$O', function (url, target) {

if (target) window.open(url.toString(), target); else window.open(url.toString());
}, 1);

Clazz.newMeth(C$, 'warn$S', function (msg) {
C$.alert$O(msg);
}, 1);

Clazz.newMeth(C$, 'alert$O', function (object) {
{
console.log("[JSUtil] " + object);
alert(object);
}
}, 1);

Clazz.newMeth(C$, 'confirm$S', function (msg) {
{
return confirm(msg);
}
}, 1);

Clazz.newMeth(C$, 'prompt$S$S', function (msg, defaultRet) {
{
return prompt(msg, defaultRet);
}
}, 1);

Clazz.newMeth(C$, 'setAjax$java_net_URL', function (url) {
$I$(14).setAjax$java_net_URL(url);
}, 1);

Clazz.newMeth(C$, 'setAjax$OA', function (params) {
return params.length == 1 ? $I$(14).setAjax$java_net_URL(params[0]) : $I$(14).setAjax$OA(params);
}, 1);

Clazz.newMeth(C$, 'parseJSON$O', function (o) {
return $I$(14).parse$O(o);
}, 1);

Clazz.newMeth(C$, 'getJSONReader$O', function (is) {
return $I$(14).getJSONReader$java_io_InputStream(is);
}, 1);

Clazz.newMeth(C$, 'getJ2SAlias$O$S', function (c, name) {
return (c && c[name] ||null);
}, 1);

Clazz.newMeth(C$, 'isForClass$O$Class', function (f, cl) {
return cl != null  && (!f || f.exClazz == (cl.$clazz$ || cl) ||false) ;
}, 1);

Clazz.newMeth(C$, 'isOverridden$O$S$Class', function (c, name, cl) {
return cl == null  || c != null  && !C$.isForClass$O$Class(C$.getJ2SAlias$O$S(c, name), cl)  ;
}, 1);

Clazz.newMeth(C$, 'getColorFromName$S', function (c) {
var rgb=null;

if (C$.ctxTemp == null) { var d = document.createElement("canvas");
d.height = d.width = 1;
C$.ctxTemp = d.getContext("2d");
} C$.ctxTemp.fillStyle = c;
C$.ctxTemp.fillRect(0, 0, 1, 1);
rgb = C$.ctxTemp.getImageData(0, 0, 1, 1).data;
return Clazz.new_($I$(15,1).c$$I$I$I,[rgb[0], rgb[1], rgb[2]]);
}, 1);

Clazz.newMeth(C$, 'getFileBytes$java_io_File', function (f) {
return f.秘bytes;
}, 1);

Clazz.newMeth(C$, 'getApplet$', function () {
return $I$(16).currentThread$().getThreadGroup$().秘html5Applet;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
