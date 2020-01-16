(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'java.util.regex.Pattern','java.io.File','java.util.Calendar','java.io.DataInputStream','java.io.FileInputStream','java.io.FileOutputStream','org.scijava.util.FileUtils','org.scijava.util.PlatformUtils','java.net.URL','StringBuilder','java.util.ArrayList','org.scijava.util.IteratorPlus','java.net.URI','Thread','java.util.Collections','java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileUtils");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.VERSION_PATTERN=C$.buildVersionPattern$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['VERSION_PATTERN','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPath$java_io_File', function (file) {
var path=file.getAbsolutePath$();
var slash=System.getProperty$S("file.separator");
return C$.getPath$S$S(path, slash);
}, 1);

Clazz.newMeth(C$, 'getPath$S$S', function (path, separator) {
return path.replaceAll$S$S($I$(1).quote$S(separator), "/");
}, 1);

Clazz.newMeth(C$, 'getExtension$java_io_File', function (file) {
var name=file.getName$();
var dot=name.lastIndexOf$I(".");
if (dot < 0) return "";
return name.substring$I(dot + 1);
}, 1);

Clazz.newMeth(C$, 'getExtension$S', function (path) {
return C$.getExtension$java_io_File(Clazz.new_($I$(2,1).c$$S,[path]));
}, 1);

Clazz.newMeth(C$, 'getModifiedTime$java_io_File', function (file) {
var modifiedTime=file.lastModified$();
var c=$I$(3).getInstance$();
c.setTimeInMillis$J(modifiedTime);
return c.getTime$();
}, 1);

Clazz.newMeth(C$, 'readFile$java_io_File', function (file) {
var length=file.length$();
if (length > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["File too large"]);
}var bytes=Clazz.array(Byte.TYPE, [(length|0)]);
try {
var dis=Clazz.new_($I$(4,1).c$$java_io_InputStream,[Clazz.new_($I$(5,1).c$$java_io_File,[file])]);
/*try*/ {
dis.readFully$BA(bytes);
}
}finally{/*res*/
try{dis&&dis.close$&&dis.close$()}catch(_){}}
return bytes;
}, 1);

Clazz.newMeth(C$, 'writeFile$java_io_File$BA', function (file, bytes) {
try {
var out=Clazz.new_($I$(6,1).c$$java_io_File,[file]);
/*try*/ {
out.write$BA(bytes);
}
}finally{/*res*/
try{out&&out.close$&&out.close$()}catch(_){}}
}, 1);

Clazz.newMeth(C$, 'stripFilenameVersion$S', function (filename) {
var matcher=C$.VERSION_PATTERN.matcher$CharSequence(filename);
if (!matcher.matches$()) return filename;
return matcher.group$I(1) + matcher.group$I(5);
}, 1);

Clazz.newMeth(C$, 'getAllVersions$java_io_File$S', function (directory, filename) {
var matcher=C$.VERSION_PATTERN.matcher$CharSequence(filename);
if (!matcher.matches$()) {
var file=Clazz.new_($I$(2,1).c$$java_io_File$S,[directory, filename]);
return file.exists$() ? Clazz.array($I$(2), -1, [file]) : null;
}var baseName=matcher.group$I(1);
var classifier=matcher.group$I(6);
return directory.listFiles$java_io_FilenameFilter(((P$.FileUtils$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FilenameFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$java_io_File$S','accept$'], function (dir, name) {
if (!name.startsWith$S(this.$finals$.baseName)) return false;
var matcher2=$I$(7).VERSION_PATTERN.matcher$CharSequence(name);
return matcher2.matches$() && this.$finals$.baseName.equals$O(matcher2.group$I(1)) && p$1.equals$S$S.apply(this, [this.$finals$.classifier, matcher2.group$I(6)])  ;
});

Clazz.newMeth(C$, 'equals$S$S', function (a, b) {
if (a == null ) {
return b == null ;
}return a.equals$O(b);
}, p$1);
})()
), Clazz.new_(P$.FileUtils$1.$init$, [this, {classifier:classifier,baseName:baseName}])));
}, 1);

Clazz.newMeth(C$, 'urlToFile$java_net_URL', function (url) {
return url == null  ? null : C$.urlToFile$S(url.toString());
}, 1);

Clazz.newMeth(C$, 'urlToFile$S', function (url) {
var path=url;
if (path.startsWith$S("jar:")) {
var index=path.indexOf$S("!/");
path=path.substring$I$I(4, index);
}try {
if ($I$(8).isWindows$() && path.matches$S("file:[A-Za-z]:.*") ) {
path="file:/" + path.substring$I(5);
}return Clazz.new_($I$(2,1).c$$java_net_URI,[Clazz.new_($I$(9,1).c$$S,[path]).toURI$()]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.net.URISyntaxException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
if (path.startsWith$S("file:")) {
path=path.substring$I(5);
return Clazz.new_($I$(2,1).c$$S,[path]);
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid URL: " + url]);
}, 1);

Clazz.newMeth(C$, 'shortenPath$S', function (path) {
return C$.shortenPath$S$I(path, 4);
}, 1);

Clazz.newMeth(C$, 'shortenPath$S$I', function (path, threshold) {
var regex="\\\\";
var sep="\\";
if (path.indexOf$S("/") > 0) {
regex="/";
sep="/";
}var pathtemp=path.split$S(regex);
var elem=0;
{
var newtemp=Clazz.array(String, [pathtemp.length]);
var j=0;
for (var i=0; i < pathtemp.length; i++) {
if (!pathtemp[i].equals$O("")) {
newtemp[j++]=pathtemp[i];
elem++;
}}
pathtemp=newtemp;
}if (elem > threshold) {
var sb=Clazz.new_($I$(10,1));
var index=0;
var pos2dots=path.indexOf$S(":");
if (pos2dots > 0) {
sb.append$S(path.substring$I$I(0, pos2dots + 2));
index++;
if (path.indexOf$S(":/") > 0 && pathtemp[0].length$() > 2 ) {
sb.append$S("/");
}} else {
var isUNC=path.substring$I$I(0, 2).equals$O("\\\\");
if (isUNC) {
sb.append$S("\\").append$S("\\");
}}for (; index <= threshold; index++) {
sb.append$S(pathtemp[index]).append$S(sep);
}
if (index == (elem - 1)) {
sb.append$S(pathtemp[elem - 1]);
} else {
sb.append$S("...").append$S(sep).append$S(pathtemp[elem - 1]);
}return sb.toString();
}return path;
}, 1);

Clazz.newMeth(C$, 'limitPath$S$I', function (path, limit) {
if (path.length$() <= limit) return path;
var shortPathArray=Clazz.array(Character.TYPE, [limit]);
var pathArray=path.toCharArray$();
var ellipseArray="...".toCharArray$();
var pathindex=pathArray.length - 1;
var shortpathindex=limit - 1;
var i=0;
for (; i < limit; i++) {
if (pathArray[pathindex - i] != "/" && pathArray[pathindex - i] != "\\" ) {
shortPathArray[shortpathindex - i]=pathArray[pathindex - i];
} else {
break;
}}
var free=limit - i;
if (free < "...".length$()) {
for (var j=0; j < ellipseArray.length; j++) {
shortPathArray[j]=ellipseArray[j];
}
} else {
var j=0;
for (; j + ellipseArray.length < free; j++) {
shortPathArray[j]=pathArray[j];
}
for (var k=0; j + k < free; k++) {
shortPathArray[j + k]=ellipseArray[k];
}
}return  String.instantialize(shortPathArray);
}, 1);

Clazz.newMeth(C$, 'createTemporaryDirectory$S', function (prefix) {
return C$.createTemporaryDirectory$S$S$java_io_File(prefix, null, null);
}, 1);

Clazz.newMeth(C$, 'createTemporaryDirectory$S$S', function (prefix, suffix) {
return C$.createTemporaryDirectory$S$S$java_io_File(prefix, suffix, null);
}, 1);

Clazz.newMeth(C$, 'createTemporaryDirectory$S$S$java_io_File', function (prefix, suffix, directory) {
for (var counter=0; counter < 10; counter++) {
var file=$I$(2).createTempFile$S$S$java_io_File(prefix, suffix, directory);
if (!file.delete$()) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not delete file " + file]);
}if (file.mkdir$()) return file;
}
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not create temporary directory (too many race conditions?)"]);
}, 1);

Clazz.newMeth(C$, 'deleteRecursively$java_io_File', function (directory) {
if (directory == null ) return true;
var list=directory.listFiles$();
if (list == null ) return true;
for (var file, $file = 0, $$file = list; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
if (file.isFile$()) {
if (!file.delete$()) return false;
} else if (file.isDirectory$()) {
if (!C$.deleteRecursively$java_io_File(file)) return false;
}}
return directory.delete$();
}, 1);

Clazz.newMeth(C$, 'listContents$java_net_URL', function (directory) {
return C$.listContents$java_net_URL$Z$Z(directory, true, true);
}, 1);

Clazz.newMeth(C$, 'listContents$java_net_URL$Z$Z', function (directory, recurse, filesOnly) {
return C$.appendContents$java_util_Collection$java_net_URL$Z$Z(Clazz.new_(1,{E:"java.net.URL"},$I$(11,1)), directory, recurse, filesOnly);
}, 1);

Clazz.newMeth(C$, 'appendContents$java_util_Collection$java_net_URL', function (result, directory) {
return C$.appendContents$java_util_Collection$java_net_URL$Z$Z(result, directory, true, true);
}, 1);

Clazz.newMeth(C$, 'appendContents$java_util_Collection$java_net_URL$Z$Z', function (result, directory, recurse, filesOnly) {
if (directory == null ) return result;
var protocol=directory.getProtocol$();
if (protocol.equals$O("file")) {
var dir=C$.urlToFile$java_net_URL(directory);
var list=dir.listFiles$();
if (list != null ) {
for (var file, $file = 0, $$file = list; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
try {
if (!filesOnly || file.isFile$() ) {
result.add$TE(file.toURI$().toURL$());
}if (recurse && file.isDirectory$() ) {
C$.appendContents$java_util_Collection$java_net_URL$Z$Z(result, file.toURI$().toURL$(), recurse, filesOnly);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
e.printStackTrace$();
} else {
throw e;
}
}
}
}} else if (protocol.equals$O("jar")) {
try {
var url=directory.toString();
var bang=url.indexOf$S("!/");
if (bang < 0) return result;
var prefix=url.substring$I(bang + 2);
var baseURL=url.substring$I$I(0, bang + 2);
var connection=Clazz.new_($I$(9,1).c$$S,[baseURL]).openConnection$();
try {
var jar=connection.getJarFile$();
/*try*/ {
for (var entry, $entry = Clazz.new_(1,{E:"java.util.jar.JarEntry"},$I$(12,1).c$$java_util_Enumeration,[jar.entries$()]).iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var urlEncoded=Clazz.new_($I$(13,1).c$$S$S$S$S,[null, null, entry.getName$(), null]).toString();
if (urlEncoded.length$() > prefix.length$() && urlEncoded.startsWith$S(prefix) ) {
if (filesOnly && urlEncoded.endsWith$S("/") ) {
continue;
}if (!recurse) {
var slash=urlEncoded.indexOf$S$I("/", prefix.length$());
if (slash >= 0 && slash != urlEncoded.length$() - 1 ) {
continue;
}}result.add$TE(Clazz.new_($I$(9,1).c$$S,[baseURL + urlEncoded]));
}}
}
}finally{/*res*/
try{jar&&jar.close$&&jar.close$()}catch(_){}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.net.URISyntaxException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}return result;
}, 1);

Clazz.newMeth(C$, 'findResources$S$S$java_io_File', function (regex, pathPrefix, baseDirectory) {
var loader=$I$(14).currentThread$().getContextClassLoader$();
var urls=Clazz.new_(1,{E:"java.net.URL"},$I$(11,1));
try {
urls.addAll$java_util_Collection($I$(15).list$java_util_Enumeration(loader.getResources$S(pathPrefix + "/")));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
if (baseDirectory != null ) {
try {
urls.add$TE(Clazz.new_($I$(2,1).c$$java_io_File$S,[baseDirectory, pathPrefix]).toURI$().toURL$());
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.MalformedURLException")){
} else {
throw exc;
}
}
}return C$.findResources$S$Iterable(regex, urls);
}, 1);

Clazz.newMeth(C$, 'findResources$S$Iterable', function (regex, urls) {
var result=Clazz.new_(1,{K:"String",V:"java.net.URL"},$I$(16,1));
var pattern=regex == null  ? null : $I$(1).compile$S(regex);
for (var url, $url = urls.iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
C$.getResources$java_util_regex_Pattern$java_util_Map$java_net_URL(pattern, result, url);
}
return result;
}, 1);

Clazz.newMeth(C$, 'buildVersionPattern$', function () {
var version="\\d+(\\.\\d+|\\d{7})+[a-z]?\\d?(-[A-Za-z0-9.]+?|\\.GA)*?";
var suffix="\\.jar(-[a-z]*)?";
return $I$(1).compile$S("(.+?)(-" + "\\d+(\\.\\d+|\\d{7})+[a-z]?\\d?(-[A-Za-z0-9.]+?|\\.GA)*?" + ")?((-(" + C$.classifiers$() + "))?(" + "\\.jar(-[a-z]*)?" + "))" );
}, 1);

Clazz.newMeth(C$, 'classifiers$', function () {
var classifiers=Clazz.array(String, -1, ["swing", "swt", "shaded", "sources", "javadoc", "native", "(natives-)?(android|linux|macosx|solaris|windows)-(aarch64|amd64|arm|armv6|armv6hf|i586|universal|x86|x86_64)"]);
var sb=Clazz.new_($I$(10,1).c$$S,["("]);
for (var classifier, $classifier = 0, $$classifier = classifiers; $classifier<$$classifier.length&&((classifier=($$classifier[$classifier])),1);$classifier++) {
if (sb.length$() > 1) sb.append$S("|");
sb.append$S(classifier);
}
sb.append$S(")");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getResources$java_util_regex_Pattern$java_util_Map$java_net_URL', function (pattern, result, base) {
var prefix=C$.urlPath$java_net_URL(base);
if (prefix == null ) return;
for (var url, $url = C$.listContents$java_net_URL(base).iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
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
return Clazz.new_($I$(13,1).c$$S,[path]).getPath$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'matchVersionedFilename$S', function (filename) {
return C$.VERSION_PATTERN.matcher$CharSequence(filename);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
