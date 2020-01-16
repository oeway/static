(function(){var P$=Clazz.newPackage("org.scijava.command.console"),p$1={},I$=[[0,'org.scijava.console.ConsoleUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RunArgument", null, 'org.scijava.console.AbstractConsoleArgument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['commandService','org.scijava.command.CommandService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$SA.apply(this,[2, ["--class"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'handle$java_util_LinkedList', function (args) {
if (!this.supports$java_util_LinkedList(args)) return;
this.log.warn$O("The --class flag is deprecated, and will\nbe removed in a future release. Use --run instead.");
args.removeFirst$();
var commandToRun=args.removeFirst$();
var paramString=$I$(1).hasParam$java_util_LinkedList(args) ? args.removeFirst$() : "";
p$1.run$S$S.apply(this, [commandToRun, paramString]);
});

Clazz.newMeth(C$, ['supports$java_util_LinkedList','supports$TT','supports$TD'], function (args) {
if (!C$.superclazz.prototype.supports$java_util_LinkedList.apply(this, [args])) return false;
return p$1.getInfo$S.apply(this, [args.get$I(1)]) != null ;
});

Clazz.newMeth(C$, 'run$S$S', function (commandToRun, optionString) {
var info=p$1.getInfo$S.apply(this, [commandToRun]);
if (info == null ) return;
var inputMap=$I$(1).parseParameterString$S$org_scijava_module_ModuleInfo$org_scijava_log_LogService(optionString, info, this.log);
try {
this.commandService.run$org_scijava_command_CommandInfo$Z$java_util_Map(info, true, inputMap).get$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
this.log.error$Throwable(exc);
} else {
throw exc;
}
}
}, p$1);

Clazz.newMeth(C$, 'getInfo$S', function (commandToRun) {
var info=this.commandService.getCommand$S(commandToRun);
if (info == null ) {
var label=commandToRun.replace$C$C("_", " ");
for (var ci, $ci = this.commandService.getCommands$().iterator$(); $ci.hasNext$()&&((ci=($ci.next$())),1);) {
if (label.equals$O(ci.getTitle$())) {
info=ci;
break;
}}
}return info;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.command.console.RunArgument',null,['org.scijava.plugin.Plugin']],['type="org.scijava.console.ConsoleArgument.class" ']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
