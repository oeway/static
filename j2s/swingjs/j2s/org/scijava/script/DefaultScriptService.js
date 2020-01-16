(function(){var P$=Clazz.newPackage("org.scijava.script"),p$1={},I$=[[0,'java.util.Collections','org.scijava.util.Types','org.scijava.script.ScriptLanguageIndex','java.util.ArrayList','java.io.File','java.util.HashMap','org.scijava.script.ScriptFinder','Boolean','org.scijava.Context','java.math.BigDecimal','java.math.BigInteger','org.scijava.util.ColorRGB','org.scijava.util.ColorRGBA','java.util.Date','org.scijava.service.Service','org.scijava.Gateway','org.scijava.script.ScriptInfo']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultScriptService", null, 'org.scijava.plugin.AbstractSingletonService', 'org.scijava.script.ScriptService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$pluginService','org.scijava.plugin.PluginService','moduleService','org.scijava.module.ModuleService','commandService','org.scijava.command.CommandService','appService','org.scijava.app.AppService','scriptProcessorService','org.scijava.script.process.ScriptProcessorService','parser','org.scijava.parse.ParseService','$log','org.scijava.log.LogService','scriptLanguageIndex','org.scijava.script.ScriptLanguageIndex','scriptDirs','java.util.ArrayList','menuPrefixes','java.util.HashMap','+scripts','+aliasMap']]]

Clazz.newMeth(C$, 'getIndex$', function () {
return p$1.scriptLanguageIndex.apply(this, []);
});

Clazz.newMeth(C$, 'getScriptDirectories$', function () {
return $I$(1).unmodifiableList$java_util_List(p$1.scriptDirs.apply(this, []));
});

Clazz.newMeth(C$, 'getMenuPrefix$java_io_File', function (scriptDirectory) {
return p$1.menuPrefixes.apply(this, []).get$O(scriptDirectory);
});

Clazz.newMeth(C$, 'addScriptDirectory$java_io_File', function (scriptDirectory) {
p$1.scriptDirs.apply(this, []).add$TE(scriptDirectory);
});

Clazz.newMeth(C$, 'addScriptDirectory$java_io_File$org_scijava_MenuPath', function (scriptDirectory, menuPrefix) {
p$1.scriptDirs.apply(this, []).add$TE(scriptDirectory);
p$1.menuPrefixes.apply(this, []).put$TK$TV(scriptDirectory, menuPrefix);
});

Clazz.newMeth(C$, 'removeScriptDirectory$java_io_File', function (scriptDirectory) {
p$1.scriptDirs.apply(this, []).remove$O(scriptDirectory);
});

Clazz.newMeth(C$, 'getScripts$', function () {
return $I$(1).unmodifiableCollection$java_util_Collection(p$1.scripts.apply(this, []).values$());
});

Clazz.newMeth(C$, 'getScript$java_io_File', function (scriptFile) {
return p$1.getOrCreate$java_io_File.apply(this, [scriptFile]);
});

Clazz.newMeth(C$, 'run$java_io_File$Z$OA', function (file, process, inputs) {
return this.run$org_scijava_script_ScriptInfo$Z$OA(p$1.getOrCreate$java_io_File.apply(this, [file]), process, inputs);
});

Clazz.newMeth(C$, 'run$java_io_File$Z$java_util_Map', function (file, process, inputMap) {
return this.run$org_scijava_script_ScriptInfo$Z$java_util_Map(p$1.getOrCreate$java_io_File.apply(this, [file]), process, inputMap);
});

Clazz.newMeth(C$, 'run$org_scijava_script_ScriptInfo$Z$OA', function (info, process, inputs) {
return p$1.cast$java_util_concurrent_Future.apply(this, [this.moduleService.run$org_scijava_module_ModuleInfo$Z$OA(info, process, inputs)]);
});

Clazz.newMeth(C$, 'run$org_scijava_script_ScriptInfo$Z$java_util_Map', function (info, process, inputMap) {
return p$1.cast$java_util_concurrent_Future.apply(this, [this.moduleService.run$org_scijava_module_ModuleInfo$Z$java_util_Map(info, process, inputMap)]);
});

Clazz.newMeth(C$, 'addAlias$S$Class', function (alias, type) {
p$1.aliasMap.apply(this, []).put$TK$TV(alias, type);
});

Clazz.newMeth(C$, 'getAliases$', function () {
return $I$(1).unmodifiableMap$java_util_Map(p$1.aliasMap.apply(this, []));
});

Clazz.newMeth(C$, 'lookupClass$S', function (alias) {
var componentAlias=p$1.stripArrayNotation$S.apply(this, [alias]);
var type=p$1.aliasMap.apply(this, []).get$O(componentAlias);
if (type != null ) {
var arrayDim=((alias.length$() - componentAlias.length$())/2|0);
return $I$(2).array$Class$I(type, arrayDim);
}try {
var c=$I$(2).load$S$Z(alias, false);
p$1.aliasMap.apply(this, []).put$TK$TV(alias, c);
return c;
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
var se=Clazz.new_(Clazz.load('javax.script.ScriptException').c$$S,["Unknown type: " + alias]);
se.initCause$Throwable(exc);
throw se;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'initialize$', function () {
C$.superclazz.prototype.initialize$.apply(this, []);
var lazyScripts=(P$.DefaultScriptService$lambda1$||(P$.DefaultScriptService$lambda1$=(((P$.DefaultScriptService$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DefaultScriptService$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.scijava.object.LazyObjects', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (p$1.scripts.apply(this.b$['org.scijava.script.DefaultScriptService'], []).values$());});
})()
), Clazz.new_(1,{T:"org.scijava.script.ScriptInfo"},P$.DefaultScriptService$lambda1.$init$, [this, null])))));
this.moduleService.getIndex$().addLater$org_scijava_object_LazyObjects(lazyScripts);
});

Clazz.newMeth(C$, 'scriptLanguageIndex', function () {
if (this.scriptLanguageIndex == null ) p$1.initScriptLanguageIndex.apply(this, []);
return this.scriptLanguageIndex;
}, p$1);

Clazz.newMeth(C$, 'scriptDirs', function () {
if (this.scriptDirs == null ) p$1.initScriptDirs.apply(this, []);
return this.scriptDirs;
}, p$1);

Clazz.newMeth(C$, 'menuPrefixes', function () {
if (this.menuPrefixes == null ) p$1.initMenuPrefixes.apply(this, []);
return this.menuPrefixes;
}, p$1);

Clazz.newMeth(C$, 'scripts', function () {
if (this.scripts == null ) p$1.initScripts.apply(this, []);
return this.scripts;
}, p$1);

Clazz.newMeth(C$, 'aliasMap', function () {
if (this.aliasMap == null ) p$1.initAliasMap.apply(this, []);
return this.aliasMap;
}, p$1);

Clazz.newMeth(C$, 'initScriptLanguageIndex', function () {
if (this.scriptLanguageIndex != null ) return;
var index=Clazz.new_($I$(3,1).c$$org_scijava_log_LogService,[this.$log]);
for (var language, $language = this.getInstances$().iterator$(); $language.hasNext$()&&((language=($language.next$())),1);) {
index.add$javax_script_ScriptEngineFactory$Z(language, true);
}
this.scriptLanguageIndex=index;
}, p$1);

Clazz.newMeth(C$, 'initScriptDirs', function () {
if (this.scriptDirs != null ) return;
var dirs=Clazz.new_(1,{E:"java.io.File"},$I$(4,1));
var baseDir=this.appService.getApp$().getBaseDirectory$();
dirs.add$TE(Clazz.new_($I$(5,1).c$$java_io_File$S,[baseDir, "scripts"]));
var scriptsPath=System.getProperty$S("scijava.scripts.path");
if (scriptsPath != null ) {
for (var dir, $dir = 0, $$dir = scriptsPath.split$S($I$(5).pathSeparator); $dir<$$dir.length&&((dir=($$dir[$dir])),1);$dir++) {
dirs.add$TE(Clazz.new_($I$(5,1).c$$S,[dir]));
}
}this.scriptDirs=dirs;
}, p$1);

Clazz.newMeth(C$, 'initMenuPrefixes', function () {
if (this.menuPrefixes != null ) return;
this.menuPrefixes=Clazz.new_(1,{K:"java.io.File",V:"org.scijava.MenuPath"},$I$(6,1));
}, p$1);

Clazz.newMeth(C$, 'initScripts', function () {
if (this.scripts != null ) return;
var map=Clazz.new_(1,{K:"String",V:"org.scijava.script.ScriptInfo"},$I$(6,1));
var scriptList=Clazz.new_(1,{E:"org.scijava.script.ScriptInfo"},$I$(4,1));
Clazz.new_($I$(7,1).c$$org_scijava_Context,[this.context$()]).findScripts$java_util_List(scriptList);
for (var info, $info = scriptList.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
map.put$TK$TV(info.getPath$(), info);
}
this.scripts=map;
}, p$1);

Clazz.newMeth(C$, 'initAliasMap', function () {
if (this.aliasMap != null ) return;
var map=Clazz.new_(1,{K:"String",V:"Class"},$I$(6,1));
p$1.addAliases$java_util_HashMap$ClassA.apply(this, [map, [Boolean.TYPE, Byte.TYPE, Character.TYPE, Double.TYPE, Float.TYPE, Integer.TYPE, Long.TYPE, Short.TYPE]]);
p$1.addAliases$java_util_HashMap$ClassA.apply(this, [map, [Clazz.getClass($I$(8)), Clazz.getClass(Byte), Clazz.getClass(Character), Clazz.getClass(Double), Clazz.getClass(Float), Clazz.getClass(Integer), Clazz.getClass(Long), Clazz.getClass(Short)]]);
p$1.addAliases$java_util_HashMap$ClassA.apply(this, [map, [Clazz.getClass($I$(9)), Clazz.getClass($I$(10)), Clazz.getClass($I$(11)), Clazz.getClass($I$(12)), Clazz.getClass($I$(13)), Clazz.getClass($I$(14)), Clazz.getClass($I$(5)), Clazz.getClass(String)]]);
p$1.addAliases$java_util_HashMap$ClassA.apply(this, [map, p$1.pluginClasses$Class.apply(this, [Clazz.getClass($I$(15),['initialize$','registerEventHandlers$'])])]);
p$1.addAliases$java_util_HashMap$ClassA.apply(this, [map, p$1.pluginClasses$Class.apply(this, [Clazz.getClass($I$(16),['app$','appEvent$','command$','console$','display$','event$','eventHistory$','get$Class','get$S','getApp$','getInfo$Z','getShortName$','getTitle$','icon$','input$','io$','launch$SA','log$','main$','menu$','module$','object$','options$','platform$','plugin$','recentFile$','script$','startup$','status$','text$','thread$','tool$','ui$','widget$'])])]);
this.aliasMap=map;
}, p$1);

Clazz.newMeth(C$, 'getOrCreate$java_io_File', function (file) {
var info=p$1.scripts.apply(this, []).get$O(file.getAbsolutePath$());
if (info != null ) return info;
return Clazz.new_($I$(17,1).c$$org_scijava_Context$java_io_File,[this.getContext$(), file]);
}, p$1);

Clazz.newMeth(C$, 'cast$java_util_concurrent_Future', function (future) {
return future;
}, p$1);

Clazz.newMeth(C$, 'addAliases$java_util_HashMap$ClassA', function (map, types) {
for (var type, $type = 0, $$type = types; $type<$$type.length&&((type=($$type[$type])),1);$type++) {
p$1.addAlias$java_util_HashMap$Class.apply(this, [map, type]);
}
}, p$1);

Clazz.newMeth(C$, 'addAlias$java_util_HashMap$Class', function (map, type) {
if (type == null ) return;
map.put$TK$TV(type.getSimpleName$(), type);
p$1.addAlias$java_util_HashMap$Class.apply(this, [map, type.getSuperclass$()]);
p$1.addAliases$java_util_HashMap$ClassA.apply(this, [map, type.getInterfaces$()]);
}, p$1);

Clazz.newMeth(C$, 'pluginClasses$Class', function (type) {
return this.$pluginService.getPluginsOfType$Class(type).stream$().map$java_util_function_Function((P$.DefaultScriptService$lambda2$||(P$.DefaultScriptService$lambda2$=(((P$.DefaultScriptService$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DefaultScriptService$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (info) {
try {
return info.loadClass$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.InstantiableException")){
this.b$['org.scijava.script.DefaultScriptService'].$log.warn$O$Throwable("Invalid class: " + info.getClassName$(), exc);
return null;
} else {
throw exc;
}
}
});
})()
), Clazz.new_(1,{T:"? super org.scijava.plugin.PluginInfo",R:"? extends java.lang.Class"},P$.DefaultScriptService$lambda2.$init$, [this, null])))))).toArray$java_util_function_IntFunction(((P$.DefaultScriptService$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DefaultScriptService$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(Class, [t.intValue()])});
})()
), Clazz.new_(1,{R:"Class[]"},P$.DefaultScriptService$lambda3.$init$, [this, null])));
}, p$1);

Clazz.newMeth(C$, 'stripArrayNotation$S', function (alias) {
if (!alias.endsWith$S("[]")) return alias;
return p$1.stripArrayNotation$S.apply(this, [alias.substring$I$I(0, alias.length$() - 2)]);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.script.DefaultScriptService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['$pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']],
  [['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']],
  [['scriptProcessorService','org.scijava.script.process.ScriptProcessorService',null,['org.scijava.plugin.Parameter']],['']],
  [['parser','org.scijava.parse.ParseService',null,['org.scijava.plugin.Parameter']],['']],
  [['$log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
