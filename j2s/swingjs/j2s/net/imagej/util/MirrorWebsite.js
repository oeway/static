(function(){var P$=Clazz.newPackage("net.imagej.util"),p$1={},I$=[[0,'Thread','java.util.HashMap','java.util.LinkedHashSet','java.util.concurrent.Executors','java.util.TreeSet','java.util.LinkedHashMap','java.util.concurrent.TimeUnit',['net.imagej.util.MirrorWebsite','.MirrorJob'],'java.net.URL','java.io.File','java.util.ArrayList','StringBuffer','java.util.Collections','java.io.FileInputStream','java.io.FileOutputStream','java.io.ByteArrayInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MirrorWebsite", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MirrorJob',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.linkMap=Clazz.new_(1,{K:"String",V:"String"},$I$(2,1));
this.missingLinks=Clazz.new_(1,{E:"String"},$I$(3,1));
}, 1);

C$.$fields$=[['I',['threadCount'],'L',['delay'],'S',['baseURL','basePath'],'O',['localDirectory','java.io.File','linkMap','java.util.Map','missingLinks','java.util.Set','executorService','java.util.concurrent.ExecutorService','jobs','java.util.Map','done','java.util.Set']]]

Clazz.newMeth(C$, 'c$$S$java_io_File$I$J', function (baseURL, localDirectory, threadCount, delay) {
;C$.$init$.apply(this);
this.baseURL=baseURL + (baseURL.endsWith$S("/") ? "" : "/");
this.basePath=baseURL.startsWith$S("file:") ? baseURL.substring$I(5) : null;
this.localDirectory=localDirectory;
this.threadCount=threadCount;
this.delay=delay;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
{
if (this.jobs != null ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Mirroring already in progress!"]);
this.executorService=$I$(4).newFixedThreadPool$I(this.threadCount);
this.done=Clazz.new_(1,{E:"String"},$I$(5,1));
this.jobs=Clazz.new_(1,{K:"String",V:"net.imagej.util.MirrorWebsite.MirrorJob"},$I$(6,1));
this.mirror$S("index.html");
}this.executorService.awaitTermination$J$java_util_concurrent_TimeUnit(9223372036854775807, $I$(7).SECONDS);
});

Clazz.newMeth(C$, 'mirror$S', function (path) {
var job;
{
if (this.jobs.containsKey$O(path)) return;
job=Clazz.new_($I$(8,1).c$$S, [this, null, path]);
this.jobs.put$TK$TV(path, job);
}try {
this.executorService.execute$(job);
} catch (t) {
t.printStackTrace$();
this.done.add$TE(path);
}
});

Clazz.newMeth(C$, 'getRemoteTimestamp$S', function (url) {
var connection=null;
try {
connection=Clazz.new_($I$(9,1).c$$S,[url]).openConnection$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
if (url.endsWith$S("/index.html")) connection=Clazz.new_($I$(9,1).c$$S,[url.substring$I$I(0, url.length$() - 10)]).openConnection$();
 else throw e;
} else {
throw e;
}
}
if (Clazz.instanceOf(connection, "java.net.HttpURLConnection")) (connection).setRequestMethod$S("HEAD");
connection.setUseCaches$Z(false);
var lastModified=connection.getLastModified$();
connection.getInputStream$().close$();
return lastModified;
}, 1);

Clazz.newMeth(C$, 'upToDate$S', function (path) {
var remote=C$.getRemoteTimestamp$S(this.baseURL + path);
var file=Clazz.new_($I$(10,1).c$$java_io_File$S,[this.localDirectory, path]);
if (!file.exists$()) return remote;
var local=file.lastModified$();
return remote < 0 || local == remote  ? 0 : remote;
}, p$1);

Clazz.newMeth(C$, 'getValue$S$I', function (html, startOffset) {
var offset=startOffset;
while (offset < html.length$() && (html.charAt$I(offset) == "\n" || html.charAt$I(offset) == "\r"  || html.charAt$I(offset) == " " ) )offset++;

if (offset + 1 >= html.length$()) return "";
var delim=" ";
var delim2=">";
var c=html.charAt$I(offset);
if (c == "\"" || c == "\'" ) {
delim=delim2=c;
offset++;
}for (var end=offset; end < html.length$(); end++) if (html.charAt$I(end) == delim || html.charAt$I(end) == delim2 ) return html.substring$I$I(offset, end);

return html.substring$I(offset);
}, p$1);

Clazz.newMeth(C$, 'addLinkRelation$java_util_List$S$S', function (result, sourceURL, url) {
var normalized=C$.normalizeURL$S(url);
if (normalized == null ) return;
result.add$TE(normalized);
{
var previous=this.linkMap.get$O(normalized);
if (previous == null ) this.linkMap.put$TK$TV(normalized, sourceURL);
 else if ((" " + previous + " " ).indexOf$S(" " + sourceURL + " " ) < 0) this.linkMap.put$TK$TV(normalized, previous + " " + sourceURL );
}}, p$1);

Clazz.newMeth(C$, 'getLinks$S$S$S', function (relativePath, path, html) {
var result=Clazz.new_(1,{E:"String"},$I$(11,1));
var offset=-1;
for (; ; ) {
var newOffset=-1;
for (var pattern, $pattern = 0, $$pattern = Clazz.array(String, -1, [" href=", " src=", " HREF=", " SRC="]); $pattern<$$pattern.length&&((pattern=($$pattern[$pattern])),1);$pattern++) {
var tmp=html.indexOf$S$I(pattern, offset + 1);
if (tmp >= 0 && (newOffset < 0 || newOffset > tmp ) ) newOffset=tmp + pattern.length$();
}
if (newOffset < 0) break;
offset=newOffset;
var value=p$1.getValue$S$I.apply(this, [html, offset]);
offset+=value.length$();
if (value.startsWith$S("mailto:") || value.startsWith$S("MAILTO:") ) continue;
for (var c, $c = 0, $$c = Clazz.array(Character.TYPE, -1, ["#", "?", ";"]); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
var hash=value.indexOf$I(c);
if (hash >= 0) value=value.substring$I$I(0, hash);
}
if (value.endsWith$S("/")) value += "index.html";
if (value.startsWith$S("/")) {
var colon=this.baseURL.indexOf$S("://");
var slash=this.baseURL.indexOf$I$I("/", colon + 3);
value=this.baseURL.substring$I$I(0, slash) + value;
} else if (value.indexOf$S("://") < 0) {
if (!value.equals$O("")) p$1.addLinkRelation$java_util_List$S$S.apply(this, [result, path, relativePath + value]);
if (offset < 0) break;
continue;
}if (value.startsWith$S(this.baseURL)) p$1.addLinkRelation$java_util_List$S$S.apply(this, [result, path, value.substring$I(this.baseURL.length$())]);
if (offset < 0) break;
}
return result;
}, p$1);

Clazz.newMeth(C$, 'isHTML$S', function (path) {
var lower=path.toLowerCase$();
return lower.endsWith$S(".htm") || lower.endsWith$S(".html") ;
}, 1);

Clazz.newMeth(C$, 'copyStream$java_io_InputStream$StringBuffer$java_io_OutputStream', function ($in, string, out) {
var buffer=Clazz.array(Byte.TYPE, [65536]);
for (; ; ) {
var count=$in.read$BA(buffer);
if (count < 0) break;
if (string != null ) string.append$S( String.instantialize(buffer, 0, count));
if (out != null ) out.write$BA$I$I(buffer, 0, count);
}
$in.close$();
if (out != null ) out.close$();
}, 1);

Clazz.newMeth(C$, 'ensureUptodate$S', function (path) {
var string=Clazz.new_($I$(12,1));
var relativePath=path.substring$I$I(0, path.lastIndexOf$I("/") + 1);
var file=Clazz.new_($I$(10,1).c$$java_io_File$S,[this.localDirectory, path]);
if (this.basePath != null  && ("/" + path).endsWith$S("/index.html")  && !Clazz.new_($I$(10,1).c$$S,[this.basePath + path]).exists$() ) {
var directory=path.substring$I$I(0, path.length$() - 10);
var list=Clazz.new_($I$(10,1).c$$S,[this.basePath + directory]).listFiles$();
if (list == null ) return $I$(13).emptyList$();
var result=Clazz.new_(1,{E:"String"},$I$(11,1));
for (var item, $item = 0, $$item = list; $item<$$item.length&&((item=($$item[$item])),1);$item++) {
if (item.isDirectory$()) result.add$TE(directory + item.getName$() + "/index.html" );
 else result.add$TE(directory + item.getName$());
}
return result;
}var remoteLastModified;
try {
remoteLastModified=p$1.upToDate$S.apply(this, [path]);
if (remoteLastModified == 0) {
if (!C$.isHTML$S(path)) return $I$(13).emptyList$();
C$.copyStream$java_io_InputStream$StringBuffer$java_io_OutputStream(Clazz.new_($I$(14,1).c$$java_io_File,[file]), string, null);
return p$1.getLinks$S$S$S.apply(this, [relativePath, path, string.toString()]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
if (!path.endsWith$S("/index.html")) throw e;
remoteLastModified=-1;
} else {
throw e;
}
}
var $in=null;
try {
$in=Clazz.new_($I$(9,1).c$$S,[this.baseURL + path]).openStream$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.net.MalformedURLException').c$$S,[this.baseURL + path]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
if (path.endsWith$S("/index.html")) $in=Clazz.new_($I$(9,1).c$$S,[this.baseURL + path.substring$I$I(0, path.length$() - 10)]).openStream$();
 else throw e;
}
} else {
throw e$$;
}
}
System.err.println$S("Downloading " + path);
var tmp=Clazz.new_($I$(10,1).c$$java_io_File$S,[this.localDirectory, path + ".download.tmp"]);
tmp.getParentFile$().mkdirs$();
var out=Clazz.new_($I$(15,1).c$$java_io_File,[tmp]);
if (C$.isHTML$S(path)) {
C$.copyStream$java_io_InputStream$StringBuffer$java_io_OutputStream($in, string, null);
var rewritten=string.toString().replaceAll$S$S("http://rsb.info.nih.gov", "http://imagej.nih.gov");
var replacement="";
var path2=path;
for (; ; ) {
path2=path2.substring$I$I(0, path2.lastIndexOf$I("/") + 1);
rewritten=rewritten.replaceAll$S$S(this.baseURL + path2, replacement);
if (this.basePath != null ) {
rewritten=rewritten.replaceAll$S$S("http://imagej.nih.gov/ij/" + path2, replacement);
}if (path2.equals$O("")) break;
path2=path2.substring$I$I(0, path2.length$() - 1);
replacement="../" + replacement;
}
C$.copyStream$java_io_InputStream$StringBuffer$java_io_OutputStream(Clazz.new_($I$(16,1).c$$BA,[rewritten.getBytes$()]), null, out);
} else C$.copyStream$java_io_InputStream$StringBuffer$java_io_OutputStream($in, null, out);
tmp.renameTo$java_io_File(file);
if (remoteLastModified >= 0) file.setLastModified$J(remoteLastModified);
if (!C$.isHTML$S(path)) return $I$(13).emptyList$();
return p$1.getLinks$S$S$S.apply(this, [relativePath, path, string.toString()]);
}, p$1);

Clazz.newMeth(C$, 'normalizeURL$S', function (originalPath) {
var path=originalPath;
for (; ; ) {
var dot=path.indexOf$S("/./");
if (dot >= 0) {
path=path.substring$I$I(0, dot) + path.substring$I(dot + 2);
continue;
}var dotdot=path.indexOf$S("/../");
if (dotdot < 0) break;
if (dotdot == 0) return null;
var slash=path.lastIndexOf$I(dotdot - 1);
if (slash < 0) return null;
path=path.substring$I$I(0, slash) + path.substring$I(dotdot + 3);
}
if (path.startsWith$S("../")) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["ignore"]);
return path;
}, 1);

Clazz.newMeth(C$, 'reportMissingLinks', function () {
if (this.missingLinks.size$() == 0) return;
System.err.println$S("Found broken links:");
for (var path, $path = this.missingLinks.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var source=this.linkMap.get$O(path);
System.err.println$S(path + (source == null  ? "" : " (linked from " + source + ")" ));
}
}, p$1);

Clazz.newMeth(C$, 'usage$', function () {
System.err.println$S("Usage: MirrorWebsite [<option>...] <url> <directory>");
System.err.println$S("Options:");
System.err.println$S("--help");
System.err.println$S("\tshow this help");
System.err.println$S("--threads <n>");
System.err.println$S("\tuse <n> threads (default: 20)");
System.err.println$S("--delay <microseconds>");
System.err.println$S("\twait after each request (default: 0)");
System.exit$I(1);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var threadCount=20;
var delay=0;
var i=0;
while (i < args.length){
if (!args[i].startsWith$S("--")) break;
var option=args[i++];
if (option.equals$O("--")) break;
if (option.equals$O("--help")) C$.usage$();
if (i + 1 >= args.length) {
System.err.println$S("Missing argument: " + option);
C$.usage$();
}var arg=args[i++];
if (option.equals$O("--threads")) threadCount=Integer.parseInt$S(arg);
 else if (option.equals$O("--delay")) delay=Long.parseLong$S(arg);
 else {
System.err.println$S("Unknown option: " + option);
C$.usage$();
}}
if (args.length - i != 2) C$.usage$();
var directory=Clazz.new_($I$(10,1).c$$S,[args[i + 1]]);
if (!directory.isDirectory$() && !directory.mkdirs$() ) {
System.err.println$S("Could not make directories " + directory);
System.exit$I(1);
}try {
System.err.println$S("Mirroring " + args[i] + " to " + directory );
Clazz.new_(C$.c$$S$java_io_File$I$J,[args[i], directory, threadCount, delay]).run$();
} catch (t) {
t.printStackTrace$();
System.exit$I(1);
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.MirrorWebsite, "MirrorJob", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['path']]]

Clazz.newMeth(C$, 'c$$S', function (path) {
;C$.$init$.apply(this);
this.path=path;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
System.err.println$S("Looking at " + this.path + " (" + (1 + this.this$0.done.size$()) + "/" + this.this$0.jobs.size$() + ")" );
for (var path2, $path2 = p$1.ensureUptodate$S.apply(this.this$0, [this.path]).iterator$(); $path2.hasNext$()&&((path2=($path2.next$())),1);) try {
this.this$0.mirror$S.apply(this.this$0, [path2]);
} catch (e) {
System.err.println$S("" + e);
}

} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
var source=this.this$0.linkMap.get$O(this.path);
System.err.println$S("" + e + (source == null  ? "" : " (linked from " + source + ")" ) );
this.this$0.missingLinks.add$TE(this.path);
}
} else {
var e = e$$;
{
System.err.println$S("Error while trying to mirror " + this.path);
e.printStackTrace$();
}
}
}
if (this.this$0.delay > 0) try {
$I$(1).sleep$J(this.this$0.delay);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
{
this.this$0.done.add$TE(this.path);
if (this.this$0.done.size$() == this.this$0.jobs.size$()) {
this.this$0.executorService.shutdown$();
p$1.reportMissingLinks.apply(this.this$0, []);
}}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
