(function(){var P$=Clazz.newPackage("org.scijava.script"),p$1={},I$=[[0,'java.io.InputStreamReader','java.nio.charset.StandardCharsets','java.io.BufferedReader','java.io.StringReader','org.scijava.util.FileUtils','java.util.ArrayList','org.scijava.script.ScriptModule','org.scijava.util.DigestUtils','java.io.File','java.text.SimpleDateFormat','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptInfo", null, 'org.scijava.module.AbstractModuleInfo', 'org.scijava.Contextual');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['appendReturnValue'],'S',['path','script','processedScript'],'O',['url','java.net.URL','context','org.scijava.Context','log','org.scijava.log.LogService','scriptService','org.scijava.script.ScriptService','scriptProcessorService','org.scijava.script.process.ScriptProcessorService','scriptLanguage','org.scijava.script.ScriptLanguage','callbacks','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_io_File', function (context, file) {
C$.c$$org_scijava_Context$java_net_URL$S$java_io_Reader.apply(this, [context, null, file.getPath$(), null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$S', function (context, path) {
C$.c$$org_scijava_Context$java_net_URL$S$java_io_Reader.apply(this, [context, null, path, null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_net_URL$S', function (context, url, path) {
C$.c$$org_scijava_Context$java_net_URL$S$java_io_Reader.apply(this, [context, url, path, Clazz.new_($I$(1,1).c$$java_io_InputStream$java_nio_charset_Charset,[url.openStream$(), $I$(2).UTF_8])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$S$java_io_Reader', function (context, path, reader) {
C$.c$$org_scijava_Context$java_net_URL$S$java_io_Reader.apply(this, [context, null, path, reader]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_net_URL$S$java_io_Reader', function (context, url, path, reader) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
this.url=p$1.url$java_net_URL$S.apply(this, [url, path]);
this.path=p$1.path$java_net_URL$S.apply(this, [url, path]);
var contents=null;
if (reader != null ) {
try {
contents=C$.getReaderContentsAsString$java_io_Reader(reader);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.log.error$O$Throwable("Error reading script: " + path, exc);
} else {
throw exc;
}
}
}this.script=contents;
}, 1);

Clazz.newMeth(C$, 'getURL$', function () {
return this.url;
});

Clazz.newMeth(C$, 'getPath$', function () {
return this.path;
});

Clazz.newMeth(C$, 'getReader$', function () {
if (this.script == null ) {
return null;
}return Clazz.new_($I$(3,1).c$$java_io_Reader$I,[Clazz.new_($I$(4,1).c$$S,[this.script]), 655360]);
});

Clazz.newMeth(C$, 'getProcessedScript$', function () {
return this.processedScript;
});

Clazz.newMeth(C$, 'getLanguage$', function () {
if (this.scriptLanguage == null ) {
var scriptPath=this.getPath$();
if (scriptPath != null ) {
var extension=$I$(5).getExtension$S(scriptPath);
this.scriptLanguage=this.scriptService.getLanguageByExtension$S(extension);
} else {
var langs=this.scriptService.getLanguages$();
if (langs != null  && !langs.isEmpty$() ) this.scriptLanguage=langs.get$I(0);
}}return this.scriptLanguage;
});

Clazz.newMeth(C$, 'setLanguage$org_scijava_script_ScriptLanguage', function (scriptLanguage) {
this.scriptLanguage=scriptLanguage;
});

Clazz.newMeth(C$, 'isReturnValueAppended$', function () {
return this.appendReturnValue;
});

Clazz.newMeth(C$, 'setReturnValueAppended$Z', function (appendReturnValue) {
this.appendReturnValue=appendReturnValue;
});

Clazz.newMeth(C$, 'callbacks$', function () {
if (this.callbacks == null ) this.callbacks=Clazz.new_(1,{E:"org.scijava.script.process.ScriptCallback"},$I$(6,1));
return this.callbacks;
});

Clazz.newMeth(C$, 'parseParameters$', function () {
this.clearParameters$();
try {
this.processedScript=this.scriptProcessorService.process$org_scijava_script_ScriptInfo(this);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'clearParameters$', function () {
C$.superclazz.prototype.clearParameters$.apply(this, []);
});

Clazz.newMeth(C$, 'registerInput$org_scijava_module_ModuleItem', function (input) {
C$.superclazz.prototype.registerInput$org_scijava_module_ModuleItem.apply(this, [input]);
});

Clazz.newMeth(C$, 'registerOutput$org_scijava_module_ModuleItem', function (output) {
C$.superclazz.prototype.registerOutput$org_scijava_module_ModuleItem.apply(this, [output]);
});

Clazz.newMeth(C$, 'getDelegateClassName$', function () {
return Clazz.getClass($I$(7)).getName$();
});

Clazz.newMeth(C$, 'loadDelegateClass$', function () {
return Clazz.getClass($I$(7));
});

Clazz.newMeth(C$, 'createModule$', function () {
return Clazz.new_($I$(7,1).c$$org_scijava_script_ScriptInfo,[this]);
});

Clazz.newMeth(C$, 'canRunHeadless$', function () {
return this.is$S("headless");
});

Clazz.newMeth(C$, 'context$', function () {
if (this.context == null ) throw Clazz.new_(Clazz.load('org.scijava.NullContextException'));
return this.context;
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.context;
});

Clazz.newMeth(C$, 'setContext$org_scijava_Context', function (context) {
context.inject$O(this);
});

Clazz.newMeth(C$, 'getIdentifier$', function () {
var name=this.getName$();
var prefix="script:";
if (name != null ) return "script:" + name;
if (this.path != null ) return "script:" + this.path;
if (this.script != null ) return "script:" + "<" + $I$(8).bestHex$S(this.script) + ">" ;
return "script:<unknown>";
});

Clazz.newMeth(C$, 'getLocation$', function () {
return Clazz.new_($I$(9,1).c$$S,[this.path]).toURI$().normalize$().toString();
});

Clazz.newMeth(C$, 'getVersion$', function () {
var file=Clazz.new_($I$(9,1).c$$S,[this.path]);
if (!file.exists$()) return null;
try {
return $I$(8).bestHex$BA($I$(5).readFile$java_io_File(file));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.log.error$Throwable(exc);
} else {
throw exc;
}
}
var lastModified=$I$(5).getModifiedTime$java_io_File(file);
var datestamp=Clazz.new_($I$(10,1).c$$S,["yyyy-MM-dd-HH:mm:ss"]).format$java_util_Date(lastModified);
return datestamp;
});

Clazz.newMeth(C$, 'url$java_net_URL$S', function (u, p) {
if (u != null ) return u;
if (p == null ) return null;
try {
return Clazz.new_($I$(9,1).c$$S,[p]).toURI$().toURL$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.MalformedURLException")){
this.log.debug$O$Throwable("Cannot glean URL from path: " + p, exc);
return null;
} else {
throw exc;
}
}
}, p$1);

Clazz.newMeth(C$, 'path$java_net_URL$S', function (u, p) {
if (p != null ) return p;
return u == null  ? null : u.getPath$();
}, p$1);

Clazz.newMeth(C$, 'getReaderContentsAsString$java_io_Reader', function (reader) {
var buffer=Clazz.array(Character.TYPE, [8192]);
var builder=Clazz.new_($I$(11,1));
var read;
while ((read=reader.read$CA(buffer)) != -1){
builder.append$CA$I$I(buffer, 0, read);
}
return builder.toString();
}, 1);

Clazz.newMeth(C$, 'isReturnValueDeclared$', function () {
return !this.isReturnValueAppended$();
});
C$.$getAnn$ = function(){ return [
[['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']],
  [['scriptProcessorService','org.scijava.script.process.ScriptProcessorService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
