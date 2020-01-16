(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[[0,'StringBuilder','org.scijava.script.ScriptHeader','org.scijava.script.ScriptLanguage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "ScriptHeaderService", null, null, ['org.scijava.plugin.HandlerService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getHeader$org_scijava_script_ScriptLanguage', function (language) {
var header=Clazz.new_($I$(1,1));
for (var scriptHeader, $scriptHeader = this.getInstances$().iterator$(); $scriptHeader.hasNext$()&&((scriptHeader=($scriptHeader.next$())),1);) {
if (scriptHeader.supports$TT(language)) {
header.append$S(scriptHeader.getHeader$());
header.append$S("\n");
}}
return header.toString();
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(2),['getHeader$','getType$']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(3),['decode$O','getAutoCompleter$','getEngineVersion$','getExtensions$','getLanguageVersion$','getMethodCallSyntax$S$S$SA','getMimeTypes$','getNames$','getOutputStatement$S','getParameter$S','getProgram$SA','isCompiledLanguage$']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
