(function(){var P$=Clazz.newPackage("org.scijava.script"),p$1={},I$=[[0,'java.util.HashSet','org.scijava.util.FileUtils','java.util.Collections','org.scijava.MenuPath','org.scijava.script.ScriptInfo']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptFinder", null, 'org.scijava.AbstractContextual');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['pathPrefix'],'O',['scriptService','org.scijava.script.ScriptService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
C$.c$$org_scijava_Context$S.apply(this, [context, "scripts"]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$S', function (context, pathPrefix) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
this.pathPrefix=pathPrefix;
}, 1);

Clazz.newMeth(C$, 'findScripts$java_util_List', function (scripts) {
var directories=this.scriptService.getScriptDirectories$();
var urls=Clazz.new_(1,{E:"java.net.URL"},$I$(1,1));
var scriptCount=0;
scriptCount+=p$1.scanResources$java_util_List$java_util_Set.apply(this, [scripts, urls]);
for (var dir, $dir = directories.iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
scriptCount+=p$1.scanDirectory$java_util_List$java_util_Set$java_io_File.apply(this, [scripts, urls, dir]);
}
this.log.debug$O("Found " + scriptCount + " scripts" );
});

Clazz.newMeth(C$, 'scanResources$java_util_List$java_util_Set', function (scripts, urls) {
if (this.pathPrefix == null ) return 0;
var scriptMap=$I$(2).findResources$S$S$java_io_File(null, this.pathPrefix, null);
return p$1.createInfos$java_util_List$java_util_Set$java_util_Map$org_scijava_MenuPath.apply(this, [scripts, urls, scriptMap, null]);
}, p$1);

Clazz.newMeth(C$, 'scanDirectory$java_util_List$java_util_Set$java_io_File', function (scripts, urls, dir) {
if (!dir.exists$()) {
var path=dir.getAbsolutePath$();
this.log.debug$O("Ignoring non-existent scripts directory: " + path);
return 0;
}var menuPrefix=this.scriptService.getMenuPrefix$java_io_File(dir);
try {
var dirURL=$I$(3).singleton$TT(dir.toURI$().toURL$());
var scriptMap=$I$(2).findResources$S$Iterable(null, dirURL);
return p$1.createInfos$java_util_List$java_util_Set$java_util_Map$org_scijava_MenuPath.apply(this, [scripts, urls, scriptMap, menuPrefix]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.MalformedURLException")){
this.log.error$O$Throwable("Invalid script directory: " + dir, exc);
return 0;
} else {
throw exc;
}
}
}, p$1);

Clazz.newMeth(C$, 'createInfos$java_util_List$java_util_Set$java_util_Map$org_scijava_MenuPath', function (scripts, urls, scriptMap, menuPrefix) {
var scriptCount=0;
for (var path, $path = scriptMap.keySet$().iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
if (!this.scriptService.canHandleFile$S(path)) {
this.log.debug$O("Ignoring unsupported script: " + path);
continue;
}var dot=path.lastIndexOf$I(".");
var basePath=dot <= 0 ? path : path.substring$I$I(0, dot);
var friendlyPath=basePath.replace$C$C("_", " ");
var menuPath=Clazz.new_($I$(4,1).c$$java_util_Collection,[menuPrefix]);
menuPath.addAll$java_util_Collection(Clazz.new_($I$(4,1).c$$S$S$Z,[friendlyPath, "/", false]));
if (menuPath.size$() == 1) continue;
var url=scriptMap.get$O(path);
if (urls.contains$O(url)) continue;
urls.add$TE(url);
try {
var info=Clazz.new_($I$(5,1).c$$org_scijava_Context$java_net_URL$S,[this.getContext$(), url, path]);
info.setMenuPath$org_scijava_MenuPath(menuPath);
menuPath.getLeaf$().setIconPath$S("/icons/script_code.png");
scripts.add$TE(info);
scriptCount++;
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.log.error$O$Throwable("Invalid script URL: " + url, exc);
} else {
throw exc;
}
}
}
return scriptCount;
}, p$1);

Clazz.newMeth(C$, 'c$$org_scijava_script_ScriptService', function (scriptService) {
C$.c$$org_scijava_Context.apply(this, [scriptService.context$()]);
}, 1);
C$.$getAnn$ = function(){ return [
[['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
