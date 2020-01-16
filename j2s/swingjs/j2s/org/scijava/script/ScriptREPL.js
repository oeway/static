(function(){var P$=Clazz.newPackage("org.scijava.script"),p$1={},I$=[[0,'java.io.PrintStream','java.io.BufferedReader','java.io.InputStreamReader','org.scijava.script.ScriptInterpreter','java.util.ArrayList','org.scijava.script.DefaultScriptInterpreter','org.scijava.Context','org.scijava.Gateway','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptREPL");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['debug'],'O',['context','org.scijava.Context','scriptService','org.scijava.script.ScriptService','pluginService','org.scijava.plugin.PluginService','out','java.io.PrintStream','languages','java.util.List','interpreter','org.scijava.script.ScriptInterpreter']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
C$.c$$org_scijava_Context$java_io_OutputStream.apply(this, [context, System.out]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_io_OutputStream', function (context, out) {
;C$.$init$.apply(this);
context.inject$O(this);
this.out=Clazz.instanceOf(out, "java.io.PrintStream") ? out : Clazz.new_($I$(1,1).c$$java_io_OutputStream,[out]);
}, 1);

Clazz.newMeth(C$, 'getInterpretedLanguages$', function () {
if (this.languages == null ) p$1.initLanguages.apply(this, []);
return this.languages;
});

Clazz.newMeth(C$, 'getInterpreter$', function () {
return this.interpreter;
});

Clazz.newMeth(C$, 'loop$', function () {
this.loop$java_io_InputStream(System.$in);
});

Clazz.newMeth(C$, 'loop$java_io_InputStream', function ($in) {
this.initialize$();
var bin=Clazz.new_($I$(2,1).c$$java_io_Reader,[Clazz.new_($I$(3,1).c$$java_io_InputStream,[$in])]);
while (true){
this.prompt$();
var line=bin.readLine$();
if (line == null ) break;
if (!this.evaluate$S(line)) return;
}
});

Clazz.newMeth(C$, 'initialize$', function () {
this.initialize$Z(true);
});

Clazz.newMeth(C$, 'initialize$Z', function (verbose) {
if (verbose) {
this.out.println$S("Welcome to the SciJava REPL!");
this.out.println$();
this.help$();
}var langs=this.getInterpretedLanguages$();
if (verbose) {
if (langs.isEmpty$()) {
this.out.println$S("--------------------------------------------------------------");
this.out.println$S("Uh oh! There are no SciJava script languages available!");
this.out.println$S("Are any on your classpath? E.g.: org.scijava:scripting-groovy?");
this.out.println$S("--------------------------------------------------------------");
this.out.println$();
return;
}this.out.println$S("Have fun!");
this.out.println$();
this.lang$S(langs.get$I(0).getLanguageName$());
} else if (!langs.isEmpty$()) this.lang$org_scijava_script_ScriptLanguage(langs.get$I(0));
p$1.populateBindings$javax_script_Bindings.apply(this, [this.interpreter.getBindings$()]);
});

Clazz.newMeth(C$, 'prompt$', function () {
this.out.print$S(this.interpreter == null  || this.interpreter.isReady$()  ? "> " : "\\ ");
});

Clazz.newMeth(C$, 'evaluate$S', function (line) {
try {
var tLine=line.trim$();
if (tLine.equals$O(":help")) this.help$();
 else if (tLine.equals$O(":vars")) this.vars$();
 else if (tLine.equals$O(":langs")) this.langs$();
 else if (tLine.equals$O(":debug")) this.debug$();
 else if (tLine.startsWith$S(":lang ")) this.lang$S(line.substring$I(6).trim$());
 else if (tLine.equals$O(":quit")) return false;
 else {
if (this.interpreter == null ) return true;
var result=this.interpreter.interpret$S(line);
if (result !== $I$(4).MORE_INPUT_PENDING ) {
this.out.println$S(C$.s$O(result));
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.script.ScriptException")){
var exc = e$$;
{
if (this.debug) exc.printStackTrace$java_io_PrintStream(this.out);
 else {
var msg=exc.getMessage$();
this.out.println$S(msg == null  ? exc.getClass$().getName$() : msg);
}}
} else {
var exc = e$$;
{
exc.printStackTrace$java_io_PrintStream(this.out);
}
}
}
return true;
});

Clazz.newMeth(C$, 'help$', function () {
this.out.println$S("Available built-in commands:");
this.out.println$();
this.out.println$S("  :help           | this handy list of commands");
this.out.println$S("  :vars           | dump a list of variables");
this.out.println$S("  :lang <name>    | switch the active language");
this.out.println$S("  :langs          | list available languages");
this.out.println$S("  :debug          | toggle full stack traces");
this.out.println$S("  :quit           | exit the REPL");
this.out.println$();
this.out.println$S("Or type a statement to evaluate it with the active language.");
this.out.println$();
});

Clazz.newMeth(C$, 'vars$', function () {
if (this.interpreter == null ) return;
var keys=Clazz.new_(1,{E:"String"},$I$(5,1));
var types=Clazz.new_(1,{E:"java.lang.Object"},$I$(5,1));
var bindings=this.interpreter.getBindings$();
for (var key, $key = bindings.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=bindings.get$O(key);
keys.add$TE(key);
types.add$TE(p$1.type$O.apply(this, [value]));
}
p$1.printColumns$java_util_ListA.apply(this, [[keys, types]]);
});

Clazz.newMeth(C$, 'lang$S', function (langName) {
var language=this.scriptService.getLanguageByName$S(langName);
if (language == null ) {
this.out.println$S("No such language: " + langName);
return;
}this.lang$org_scijava_script_ScriptLanguage(language);
this.out.println$S("language -> " + this.interpreter.getLanguage$().getLanguageName$());
});

Clazz.newMeth(C$, 'lang$org_scijava_script_ScriptLanguage', function (language) {
var newInterpreter=Clazz.new_($I$(6,1).c$$org_scijava_script_ScriptLanguage,[language]);
try {
p$1.copyBindings$org_scijava_script_ScriptInterpreter$org_scijava_script_ScriptInterpreter.apply(this, [this.interpreter, newInterpreter]);
} catch (t) {
t.printStackTrace$java_io_PrintStream(this.out);
}
this.interpreter=newInterpreter;
});

Clazz.newMeth(C$, 'langs$', function () {
var names=Clazz.new_(1,{E:"String"},$I$(5,1));
var versions=Clazz.new_(1,{E:"String"},$I$(5,1));
var aliases=Clazz.new_(1,{E:"java.lang.Object"},$I$(5,1));
for (var lang, $lang = this.getInterpretedLanguages$().iterator$(); $lang.hasNext$()&&((lang=($lang.next$())),1);) {
names.add$TE(lang.getLanguageName$());
versions.add$TE(lang.getLanguageVersion$());
aliases.add$TE(lang.getNames$());
}
p$1.printColumns$java_util_ListA.apply(this, [[names, versions, aliases]]);
});

Clazz.newMeth(C$, 'debug$', function () {
this.debug=!this.debug;
this.out.println$S("debug mode -> " + this.debug);
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var context=Clazz.new_($I$(7,1));
var scriptCLI=Clazz.new_(C$.c$$org_scijava_Context,[context]);
scriptCLI.loop$();
context.dispose$();
System.exit$I(0);
}, 1);

Clazz.newMeth(C$, 'initLanguages', function () {
if (this.languages != null ) return;
var langs=Clazz.new_(1,{E:"org.scijava.script.ScriptLanguage"},$I$(5,1));
for (var lang, $lang = this.scriptService.getLanguages$().iterator$(); $lang.hasNext$()&&((lang=($lang.next$())),1);) {
if (!lang.isCompiledLanguage$()) langs.add$TE(lang);
}
this.languages=langs;
}, p$1);

Clazz.newMeth(C$, 'populateBindings$javax_script_Bindings', function (bindings) {
bindings.put$S$O("ctx", this.context);
for (var service, $service = this.context.getServiceIndex$().getAll$().iterator$(); $service.hasNext$()&&((service=($service.next$())),1);) {
var name=p$1.serviceName$org_scijava_service_Service.apply(this, [service]);
bindings.put$S$O(name, service);
}
for (var gateway, $gateway = p$1.gateways.apply(this, []).iterator$(); $gateway.hasNext$()&&((gateway=($gateway.next$())),1);) {
bindings.put$S$O(gateway.getShortName$(), gateway);
}
}, p$1);

Clazz.newMeth(C$, 'copyBindings$org_scijava_script_ScriptInterpreter$org_scijava_script_ScriptInterpreter', function (src, dest) {
if (src == null ) return;
var srcBindings=src.getBindings$();
var destBindings=dest.getBindings$();
for (var key, $key = src.getBindings$().keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=src.getLanguage$().decode$O(srcBindings.get$O(key));
destBindings.put$S$O(key, value);
}
}, p$1);

Clazz.newMeth(C$, 'gateways', function () {
var gateways=Clazz.new_(1,{E:"org.scijava.Gateway"},$I$(5,1));
if (this.pluginService == null ) return gateways;
var infos=this.pluginService.getPluginsOfType$Class(Clazz.getClass($I$(8),['app$','appEvent$','command$','console$','display$','event$','eventHistory$','get$Class','get$S','getApp$','getInfo$Z','getShortName$','getTitle$','icon$','input$','io$','launch$SA','log$','main$','menu$','module$','object$','options$','platform$','plugin$','recentFile$','script$','startup$','status$','text$','thread$','tool$','ui$','widget$']));
for (var info, $info = infos.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
try {
var ctor=info.loadClass$().getConstructor$ClassA([Clazz.getClass($I$(7))]);
var gateway=ctor.newInstance$OA([this.context]);
gateways.add$TE(gateway);
} catch (t) {
t.printStackTrace$java_io_PrintStream(this.out);
}
}
return gateways;
}, p$1);

Clazz.newMeth(C$, 'serviceName$org_scijava_service_Service', function (service) {
var serviceName=service.getClass$().getSimpleName$();
var shortName=C$.lowerCamelCase$S(serviceName.replaceAll$S$S("^(Default)?(.*)Service$", "$2"));
return shortName;
}, p$1);

Clazz.newMeth(C$, 'type$O', function (value) {
if (value == null ) return "<null>";
var decoded=this.interpreter.getLanguage$().decode$O(value);
if (decoded == null ) return "<null>";
return "[" + decoded.getClass$().getName$() + "]" ;
}, p$1);

Clazz.newMeth(C$, 'printColumns$java_util_ListA', function (columns) {
var pad=2;
var widths=Clazz.array(Integer.TYPE, [columns.length]);
for (var c=0; c < columns.length; c++) {
var list=columns[c];
for (var o, $o = list.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
var s=C$.s$O(o);
if (s.length$() > widths[c]) widths[c]=s.length$();
}
}
for (var i=0; i < columns[0].size$(); i++) {
for (var c=0; c < columns.length; c++) {
var s=C$.s$O(columns[c].get$I(i));
this.out.print$S(s);
for (var p=s.length$(); p < widths[c] + 2; p++) {
this.out.print$C(" ");
}
}
this.out.println$();
}
}, p$1);

Clazz.newMeth(C$, 'lowerCamelCase$S', function (s) {
var sb=Clazz.new_($I$(9,1).c$$S,[s]);
for (var i=0; i < sb.length$(); i++) {
var c=sb.charAt$I(i);
if (c >= "A" && c <= "Z" ) sb.setCharAt$I$C(i, String.fromCharCode((c.$c() - 65 + 97)));
 else break;
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 's$O', function (o) {
return o == null  ? "<null>" : o.toString();
}, 1);
C$.$getAnn$ = function(){ return [
[['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
