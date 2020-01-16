(function(){var P$=Clazz.newPackage("java.time.zone"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.io.File','java.io.DataInputStream','java.io.BufferedInputStream','java.io.FileInputStream','java.util.HashSet','java.io.ByteArrayInputStream','java.time.zone.Ser','java.util.TreeMap','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TzdbZoneRulesProvider", null, 'java.time.zone.ZoneRulesProvider');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.regionIds=null;
this.versionId=null;
this.regionToRules=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.regionToRules=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
try {
var libDir=System.getProperty$S("java.home") + $I$(2).separator + "lib" ;
try {
var dis=Clazz.new_($I$(3,1).c$$java_io_InputStream,[Clazz.new_($I$(4,1).c$$java_io_InputStream,[Clazz.new_($I$(5,1).c$$java_io_File,[Clazz.new_($I$(2,1).c$$S$S,[libDir, "tzdb.dat"])])])]);
/*try*/ {
p$1.load$java_io_DataInputStream.apply(this, [dis]);
}
}finally{/*res*/
try{dis&&dis.close$&&dis.close$()}catch(_){}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('java.time.zone.ZoneRulesException').c$$S$Throwable,["Unable to load TZDB time-zone rules", ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'provideZoneIds$', function () {
return Clazz.new_($I$(6,1).c$$java_util_Collection,[this.regionIds]);
});

Clazz.newMeth(C$, 'provideRules$S$Z', function (zoneId, forCaching) {
var obj=this.regionToRules.get$O(zoneId);
if (obj == null ) {
throw Clazz.new_(Clazz.load('java.time.zone.ZoneRulesException').c$$S,["Unknown time-zone ID: " + zoneId]);
}try {
if (Clazz.instanceOf(obj, Clazz.array(Byte.TYPE, -1))) {
var bytes=obj;
var dis=Clazz.new_($I$(3,1).c$$java_io_InputStream,[Clazz.new_($I$(7,1).c$$BA,[bytes])]);
obj=$I$(8).read$java_io_DataInput(dis);
this.regionToRules.put$TK$TV(zoneId, obj);
}return obj;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('java.time.zone.ZoneRulesException').c$$S$Throwable,["Invalid binary time-zone data: TZDB:" + zoneId + ", version: " + this.versionId , ex]);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'provideVersions$S', function (zoneId) {
var map=Clazz.new_($I$(9,1));
var rules=P$.ZoneRulesProvider.getRules$S$Z(zoneId, false);
if (rules != null ) {
map.put$TK$TV(this.versionId, rules);
}return map;
});

Clazz.newMeth(C$, 'load$java_io_DataInputStream', function (dis) {
if (dis.readByte$() != 1) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["File format not recognised"]);
}var groupId=dis.readUTF$();
if ("TZDB".equals$O(groupId) == false ) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["File format not recognised"]);
}var versionCount=dis.readShort$();
for (var i=0; i < versionCount; i++) {
this.versionId=dis.readUTF$();
}
var regionCount=dis.readShort$();
var regionArray=Clazz.array(String, [regionCount]);
for (var i=0; i < regionCount; i++) {
regionArray[i]=dis.readUTF$();
}
this.regionIds=$I$(10).asList$TTA(regionArray);
var ruleCount=dis.readShort$();
var ruleArray=Clazz.array(java.lang.Object, [ruleCount]);
for (var i=0; i < ruleCount; i++) {
var bytes=Clazz.array(Byte.TYPE, [dis.readShort$()]);
dis.readFully$BA(bytes);
ruleArray[i]=bytes;
}
for (var i=0; i < versionCount; i++) {
var versionRegionCount=dis.readShort$();
this.regionToRules.clear$();
for (var j=0; j < versionRegionCount; j++) {
var region=regionArray[dis.readShort$()];
var rule=ruleArray[dis.readShort$() & 65535];
this.regionToRules.put$TK$TV(region, rule);
}
}
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return "TZDB[" + this.versionId + "]" ;
});
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:58 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
