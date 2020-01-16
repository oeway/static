(function(){var P$=Clazz.newPackage("net.imagej.config"),p$1={},I$=[[0,'java.util.HashMap','java.io.File','java.io.FileInputStream','java.io.DataInputStream','java.io.InputStreamReader','java.io.BufferedReader','java.util.regex.Pattern','java.io.FileOutputStream','java.io.OutputStreamWriter','java.io.BufferedWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConfigFileParameters", null, 'org.scijava.AbstractContextual');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MINIMUM_MEMORY=new Integer(256);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['appService','org.scijava.app.AppService','log','org.scijava.log.LogService','dataMap','java.util.Map','configFile','java.io.File']]
,['O',['MINIMUM_MEMORY','Integer']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
C$.c$$org_scijava_Context$java_io_File.apply(this, [context, null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_io_File', function (context, configFile) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
this.dataMap=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
this.configFile=configFile == null  ? p$1.defaultConfigFile.apply(this, []) : configFile;
p$1.initialize.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getMemoryInMB$', function () {
var memVal=this.dataMap.get$O("maxheap.mb");
var val=new Integer(0);
try {
val=new Integer(Integer.parseInt$S(memVal));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log.warn$O("Launcher configuration file " + this.configFile + " has key " + "maxheap.mb" + " that is not in an integer format" );
} else {
throw e;
}
}
if ((val).valueOf() < (C$.MINIMUM_MEMORY).valueOf() ) val=C$.MINIMUM_MEMORY;
return (val).valueOf();
});

Clazz.newMeth(C$, 'setMemoryInMB$I', function (numMegabytes) {
var memory=new Integer(numMegabytes);
if ((memory).valueOf() < (C$.MINIMUM_MEMORY).valueOf() ) {
memory=C$.MINIMUM_MEMORY;
this.log.warn$O("Max Java heap size can be no smaller than " + C$.MINIMUM_MEMORY + " megabytes." );
}this.dataMap.put$TK$TV("maxheap.mb", memory.toString());
p$1.save.apply(this, []);
});

Clazz.newMeth(C$, 'getJvmArgs$', function () {
return this.dataMap.get$O("jvmargs");
});

Clazz.newMeth(C$, 'setJvmArgs$S', function (args) {
var value=args;
if (args == null ) value="";
this.dataMap.put$TK$TV("jvmargs", value);
p$1.save.apply(this, []);
});

Clazz.newMeth(C$, 'defaultConfigFile', function () {
var directory=this.appService.getApp$().getBaseDirectory$();
return Clazz.new_($I$(2,1).c$$java_io_File$S,[directory, "ImageJ.cfg"]);
}, p$1);

Clazz.newMeth(C$, 'initialize', function () {
p$1.setDefaultValues$java_util_Map.apply(this, [this.dataMap]);
if (p$1.isLegacyConfigFile$java_io_File.apply(this, [this.configFile])) {
p$1.loadLegacyConfigValues$java_util_Map$java_io_File.apply(this, [this.dataMap, this.configFile]);
} else p$1.loadModernConfigValues$java_util_Map$java_io_File.apply(this, [this.dataMap, this.configFile]);
}, p$1);

Clazz.newMeth(C$, 'save', function () {
p$1.saveConfigValues$java_util_Map$java_io_File.apply(this, [this.dataMap, this.configFile]);
}, p$1);

Clazz.newMeth(C$, 'setDefaultValues$java_util_Map', function (map) {
map.clear$();
map.put$TK$TV("maxheap.mb", C$.MINIMUM_MEMORY.toString());
map.put$TK$TV("jvmargs", "");
}, p$1);

Clazz.newMeth(C$, 'isLegacyConfigFile$java_io_File', function (file) {
if (!file.exists$()) return false;
try {
var fstream=Clazz.new_($I$(3,1).c$$java_io_File,[file]);
var din=Clazz.new_($I$(4,1).c$$java_io_InputStream,[fstream]);
var $in=Clazz.new_($I$(5,1).c$$java_io_InputStream,[din]);
var br=Clazz.new_($I$(6,1).c$$java_io_Reader,[$in]);
var firstLine=br.readLine$();
$in.close$();
return !firstLine.contains$CharSequence("ImageJ startup properties");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'loadLegacyConfigValues$java_util_Map$java_io_File', function (map, file) {
if (!file.exists$()) return false;
try {
var fstream=Clazz.new_($I$(3,1).c$$java_io_File,[file]);
var din=Clazz.new_($I$(4,1).c$$java_io_InputStream,[fstream]);
var $in=Clazz.new_($I$(5,1).c$$java_io_InputStream,[din]);
var br=Clazz.new_($I$(6,1).c$$java_io_Reader,[$in]);
br.readLine$();
br.readLine$();
var argString=br.readLine$();
$in.close$();
var memSize=new Integer(p$1.memorySize$S.apply(this, [argString]));
var jvmArgs=p$1.jvmArgs$S.apply(this, [argString]);
map.put$TK$TV("maxheap.mb", memSize.toString());
map.put$TK$TV("jvmargs", jvmArgs);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.log.warn$O("Couldd not load legacy launcher config file " + file);
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'loadModernConfigValues$java_util_Map$java_io_File', function (map, file) {
if (!file.exists$()) return false;
try {
var fstream=Clazz.new_($I$(3,1).c$$java_io_File,[file]);
var din=Clazz.new_($I$(4,1).c$$java_io_InputStream,[fstream]);
var $in=Clazz.new_($I$(5,1).c$$java_io_InputStream,[din]);
var br=Clazz.new_($I$(6,1).c$$java_io_Reader,[$in]);
var keyValuePairPattern=$I$(7).compile$S("\\s*(.*)\\s*=\\s*(.*)");
br.readLine$();
while (br.ready$()){
var s=br.readLine$();
if (s.trim$().startsWith$S("#")) continue;
var matcher=keyValuePairPattern.matcher$CharSequence(s);
if (matcher.matches$()) {
var key=matcher.group$I(1).trim$();
var value=matcher.group$I(2).trim$();
map.put$TK$TV(key, value);
}}
br.close$();
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log.warn$O("Could not load launcher config file " + file);
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'saveConfigValues$java_util_Map$java_io_File', function (map, file) {
try {
var fos=Clazz.new_($I$(8,1).c$$java_io_File,[file]);
var osw=Clazz.new_($I$(9,1).c$$java_io_OutputStream$S,[fos, "UTF8"]);
var out=Clazz.new_($I$(10,1).c$$java_io_Writer,[osw]);
out.write$S("#" + "ImageJ startup properties" + " (" + p$1.getVersion.apply(this, []) + ")" );
out.newLine$();
for (var key, $key = map.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=map.get$O(key);
value=value.replaceAll$S$S("\n", "");
value=value.replaceAll$S$S("\r", "");
out.write$S(key + " = " + map.get$O(key) );
out.newLine$();
}
out.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log.warn$O("Could not save launcher config file values to " + file);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'memorySize$S', function (argList) {
var args=argList.split$S("\\s+");
for (var arg, $arg = 0, $$arg = args; $arg<$$arg.length&&((arg=($$arg[$arg])),1);$arg++) {
if (arg.startsWith$S("-Xmx")) {
var numString=arg.substring$I(4);
numString=numString.substring$I$I(0, numString.length$() - 1);
try {
return Integer.parseInt$S(numString);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return (C$.MINIMUM_MEMORY).valueOf();
} else {
throw e;
}
}
}}
return (C$.MINIMUM_MEMORY).valueOf();
}, p$1);

Clazz.newMeth(C$, 'jvmArgs$S', function (argList) {
var value="";
var args=argList.split$S("\\s+");
for (var arg, $arg = 0, $$arg = args; $arg<$$arg.length&&((arg=($$arg[$arg])),1);$arg++) {
if (arg.startsWith$S("-Xmx")) continue;
if (arg.equals$O("ij.ImageJ")) continue;
if (value.length$() > 0) value += " ";
value += arg;
}
return value;
}, p$1);

Clazz.newMeth(C$, 'getVersion', function () {
return this.appService.getApp$S("ImageJ").getVersion$();
}, p$1);
C$.$getAnn$ = function(){ return [
[['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
