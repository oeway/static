(function(){var P$=Clazz.newPackage("org.scijava.script.console"),p$1={},I$=[[0,'org.scijava.console.ConsoleUtils','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RunScriptArgument", null, 'org.scijava.console.AbstractConsoleArgument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['scriptService','org.scijava.script.ScriptService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$SA.apply(this,[2, ["--script"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'handle$java_util_LinkedList', function (args) {
if (!this.supports$java_util_LinkedList(args)) return;
this.log.warn$O("The --script flag is deprecated, and will\nbe removed in a future release. Use --run instead.");
args.removeFirst$();
var scriptToRun=args.removeFirst$();
var paramString=$I$(1).hasParam$java_util_LinkedList(args) ? args.removeFirst$() : "";
p$1.run$S$S.apply(this, [scriptToRun, paramString]);
});

Clazz.newMeth(C$, ['supports$java_util_LinkedList','supports$TT','supports$TD'], function (args) {
if (!C$.superclazz.prototype.supports$java_util_LinkedList.apply(this, [args])) return false;
return p$1.getScript$S.apply(this, [args.get$I(1)]) != null ;
});

Clazz.newMeth(C$, 'run$S$S', function (scriptToRun, paramString) {
var script=p$1.getScript$S.apply(this, [scriptToRun]);
if (script == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Not a script: '" + scriptToRun + "'" ]);
}var info=this.scriptService.getScript$java_io_File(script);
var inputMap=$I$(1).parseParameterString$S$org_scijava_module_ModuleInfo$org_scijava_log_LogService(paramString, info, this.log);
try {
this.scriptService.run$org_scijava_script_ScriptInfo$Z$java_util_Map(info, true, inputMap).get$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
this.log.error$Throwable(exc);
} else {
throw exc;
}
}
}, p$1);

Clazz.newMeth(C$, 'getScript$S', function (string) {
var scriptFile=Clazz.new_($I$(2,1).c$$S,[string]);
return scriptFile.exists$() && this.scriptService.canHandleFile$java_io_File(scriptFile)  ? scriptFile : null;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.script.console.RunScriptArgument',null,['org.scijava.plugin.Plugin']],['type="org.scijava.console.ConsoleArgument.class" ']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
