(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[[0,'java.util.ArrayList','java.io.StringReader','org.scijava.script.ScriptInfo','org.scijava.script.ScriptLanguage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "ScriptService", null, null, ['org.scijava.plugin.SingletonService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.SCRIPTS_PATH_PROPERTY="scijava.scripts.path";
C$.SCRIPTS_RESOURCE_DIR="scripts";
}

C$.$fields$=[[]
,['S',['SCRIPTS_PATH_PROPERTY','SCRIPTS_RESOURCE_DIR']]]
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getLanguages$', function () {
return Clazz.new_(1,{E:"org.scijava.script.ScriptLanguage"},$I$(1,1).c$$java_util_Collection,[this.getIndex$()]);
});

Clazz.newMeth(C$, 'getLanguageByExtension$S', function (extension) {
return this.getIndex$().getByExtension$S(extension);
});

Clazz.newMeth(C$, 'getLanguageByName$S', function (name) {
return this.getIndex$().getByName$S(name);
});

Clazz.newMeth(C$, 'run$S$S$Z$OA', function (path, script, process, inputs) {
return this.run$S$java_io_Reader$Z$OA(path, Clazz.new_($I$(2,1).c$$S,[script]), process, inputs);
});

Clazz.newMeth(C$, 'run$S$S$Z$java_util_Map', function (path, script, process, inputMap) {
return this.run$S$java_io_Reader$Z$java_util_Map(path, Clazz.new_($I$(2,1).c$$S,[script]), process, inputMap);
});

Clazz.newMeth(C$, 'run$S$java_io_Reader$Z$OA', function (path, reader, process, inputs) {
return this.run$org_scijava_script_ScriptInfo$Z$OA(Clazz.new_($I$(3,1).c$$org_scijava_Context$S$java_io_Reader,[this.getContext$(), path, reader]), process, inputs);
});

Clazz.newMeth(C$, 'run$S$java_io_Reader$Z$java_util_Map', function (path, reader, process, inputMap) {
return this.run$org_scijava_script_ScriptInfo$Z$java_util_Map(Clazz.new_($I$(3,1).c$$org_scijava_Context$S$java_io_Reader,[this.getContext$(), path, reader]), process, inputMap);
});

Clazz.newMeth(C$, 'canHandleFile$java_io_File', function (file) {
return this.getIndex$().canHandleFile$java_io_File(file);
});

Clazz.newMeth(C$, 'canHandleFile$S', function (fileName) {
return this.getIndex$().canHandleFile$S(fileName);
});

Clazz.newMeth(C$, 'addAlias$Class', function (type) {
this.addAlias$S$Class(type.getSimpleName$(), type);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(4),['decode$O','getAutoCompleter$','getEngineVersion$','getExtensions$','getLanguageVersion$','getMethodCallSyntax$S$S$SA','getMimeTypes$','getNames$','getOutputStatement$S','getParameter$S','getProgram$SA','isCompiledLanguage$']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
