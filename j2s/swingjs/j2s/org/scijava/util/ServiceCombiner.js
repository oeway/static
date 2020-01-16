(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'java.util.HashMap','Thread','org.scijava.util.FileUtils','StringBuilder','java.io.InputStreamReader','java.io.BufferedReader','java.io.File','java.io.FileWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ServiceCombiner", null, null, 'org.scijava.util.Combiner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['combine$java_io_File','combine$'], function (outputDirectory) {
var files=Clazz.new_(1,{K:"String",V:"StringBuilder"},$I$(1,1));
var directories=$I$(2).currentThread$().getContextClassLoader$().getResources$S("META-INF/services/");
while (directories.hasMoreElements$()){
for (var url, $url = $I$(3).listContents$java_net_URL(directories.nextElement$()).iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
var urlString=url.toString();
if (urlString.endsWith$S("/")) {
continue;
}var fileName=urlString.substring$I(urlString.lastIndexOf$I("/") + 1);
var builder=files.get$O(fileName);
if (builder == null ) {
builder=Clazz.new_($I$(4,1));
files.put$TK$TV(fileName, builder);
}var reader=Clazz.new_($I$(5,1).c$$java_io_InputStream,[url.openStream$()]);
var buffered=Clazz.new_($I$(6,1).c$$java_io_Reader,[reader]);
for (; ; ) {
var line=buffered.readLine$();
if (line == null ) {
break;
}builder.append$S(line).append$C("\n");
}
buffered.close$();
}
}
if (files.isEmpty$()) {
return;
}var servicesDirectory=Clazz.new_($I$(7,1).c$$java_io_File$S,[outputDirectory, "META-INF/services/"]);
servicesDirectory.mkdirs$();
for (var entry, $entry = files.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var writer=Clazz.new_($I$(8,1).c$$java_io_File,[Clazz.new_($I$(7,1).c$$java_io_File$S,[servicesDirectory, entry.getKey$()])]);
writer.write$S(entry.getValue$().toString());
writer.close$();
}
});

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$).combine$java_io_File(args.length > 0 ? Clazz.new_($I$(7,1).c$$S,[args[0]]) : null);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
