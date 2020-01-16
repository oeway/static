(function(){var P$=Clazz.newPackage("org.scijava.script"),p$1={},I$=[[0,'java.util.HashMap','org.scijava.util.FileUtils','org.scijava.script.AdaptedScriptLanguage','org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptLanguageIndex", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.byExtension=Clazz.new_(1,{K:"String",V:"org.scijava.script.ScriptLanguage"},$I$(1,1));
this.byName=Clazz.new_(1,{K:"String",V:"org.scijava.script.ScriptLanguage"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['byExtension','java.util.Map','+byName','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_log_LogService.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_log_LogService', function (log) {
Clazz.super_(C$, this);
this.log=log;
}, 1);

Clazz.newMeth(C$, ['add$javax_script_ScriptEngineFactory$Z','addnull'], function (factory, gently) {
var result=false;
var language=p$1.wrap$javax_script_ScriptEngineFactory.apply(this, [factory]);
result|=p$1.put$S$java_util_Map$S$org_scijava_script_ScriptLanguage$Z.apply(this, ["name", this.byName, language.getLanguageName$(), language, gently]);
for (var name, $name = language.getNames$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
result|=p$1.put$S$java_util_Map$S$org_scijava_script_ScriptLanguage$Z.apply(this, ["name", this.byName, name, language, gently]);
}
for (var extension, $extension = language.getExtensions$().iterator$(); $extension.hasNext$()&&((extension=($extension.next$())),1);) {
if ("".equals$O(extension)) continue;
result|=p$1.put$S$java_util_Map$S$org_scijava_script_ScriptLanguage$Z.apply(this, ["extension", this.byExtension, extension, language, gently]);
}
result|=C$.superclazz.prototype.add$TE.apply(this, [language]);
return result;
});

Clazz.newMeth(C$, 'getByExtension$S', function (extension) {
return this.byExtension.get$O(extension);
});

Clazz.newMeth(C$, 'getByName$S', function (name) {
return this.byName.get$O(name);
});

Clazz.newMeth(C$, 'getFileExtensions$org_scijava_script_ScriptLanguage', function (language) {
var extensions=language.getExtensions$();
return extensions.toArray$TTA(Clazz.array(String, [extensions.size$()]));
});

Clazz.newMeth(C$, 'canHandleFile$java_io_File', function (file) {
var extension=$I$(2).getExtension$java_io_File(file);
if ("".equals$O(extension)) return false;
return this.byExtension.containsKey$O(extension);
});

Clazz.newMeth(C$, 'canHandleFile$S', function (fileName) {
var extension=$I$(2).getExtension$S(fileName);
if ("".equals$O(extension)) return false;
return this.byExtension.containsKey$O(extension);
});

Clazz.newMeth(C$, ['add$org_scijava_script_ScriptLanguage','add$TE'], function (language) {
return this.add$javax_script_ScriptEngineFactory$Z(language, false);
});

Clazz.newMeth(C$, 'put$S$java_util_Map$S$org_scijava_script_ScriptLanguage$Z', function (type, map, key, value, gently) {
var existing=map.get$O(key);
if (existing === value ) {
if (this.log != null  && this.log.isDebug$() ) {
this.log.debug$O(p$1.overwriteMessage$Z$S$S$org_scijava_script_ScriptLanguage$org_scijava_script_ScriptLanguage.apply(this, [false, type, key, value, existing]));
}return false;
}if (existing != null ) {
if (gently) {
if (this.log != null  && this.log.isWarn$() ) {
this.log.warn$O(p$1.overwriteMessage$Z$S$S$org_scijava_script_ScriptLanguage$org_scijava_script_ScriptLanguage.apply(this, [false, type, key, value, existing]));
}return false;
}if (this.log != null  && this.log.isDebug$() ) {
this.log.debug$O(p$1.overwriteMessage$Z$S$S$org_scijava_script_ScriptLanguage$org_scijava_script_ScriptLanguage.apply(this, [true, type, key, value, existing]));
}}map.put$TK$TV(key, value);
return true;
}, p$1);

Clazz.newMeth(C$, 'wrap$javax_script_ScriptEngineFactory', function (factory) {
if (Clazz.instanceOf(factory, "org.scijava.script.ScriptLanguage")) return factory;
return Clazz.new_($I$(3,1).c$$javax_script_ScriptEngineFactory,[factory]);
}, p$1);

Clazz.newMeth(C$, 'overwriteMessage$Z$S$S$org_scijava_script_ScriptLanguage$org_scijava_script_ScriptLanguage', function (overwrite, type, key, proposed, existing) {
return (overwrite ? "Overwriting " : "Not overwriting ") + type + " '" + key + "':\n" + "\tproposed = " + p$1.details$org_scijava_script_ScriptLanguage.apply(this, [proposed]) + "\n" + "\texisting = " + p$1.details$org_scijava_script_ScriptLanguage.apply(this, [existing]) ;
}, p$1);

Clazz.newMeth(C$, 'details$org_scijava_script_ScriptLanguage', function (language) {
var c=language.getClass$();
return c.getName$() + " [" + $I$(4).location$Class(c) ;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
