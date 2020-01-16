(function(){var P$=Clazz.newPackage("org.scijava.script.process"),I$=[[0,'java.io.BufferedReader','java.io.FileReader','StringBuilder','org.scijava.script.process.ScriptProcessor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "ScriptProcessorService", null, null, ['org.scijava.plugin.PTService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'process$org_scijava_script_ScriptInfo', function (info) {
var processors=this.pluginService$().createInstances$java_util_List(this.getPlugins$());
var reader=info.getReader$();
if (reader == null ) {
reader=Clazz.new_($I$(1,1).c$$java_io_Reader,[Clazz.new_($I$(2,1).c$$S,[info.getPath$()])]);
}for (var p, $p = processors.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.begin$org_scijava_script_ScriptInfo(info);
}
var sb=Clazz.new_($I$(3,1));
try {
var $in=reader;
/*try*/ {
while (true){
var line=$in.readLine$();
if (line == null ) break;
for (var p, $p = processors.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
line=p.process$S(line);
}
sb.append$S(line);
sb.append$S("\n");
}
}
}finally{/*res*/
try{$in&&$in.close$&&$in.close$()}catch(_){}}
for (var p, $p = processors.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.end$();
}
return sb.toString();
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(4),['begin$org_scijava_script_ScriptInfo','end$','process$S']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
