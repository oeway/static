(function(){var P$=Clazz.newPackage("org.scijava.command.run"),p$1={},I$=[[0,'org.scijava.command.Command']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CommandCodeRunner", null, 'org.scijava.run.AbstractCodeRunner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['commandService','org.scijava.command.CommandService']]]

Clazz.newMeth(C$, 'run$O$OA', function (code, args) {
var c=p$1.getCommandClass$O.apply(this, [code]);
if (c != null ) this.waitFor$java_util_concurrent_Future(this.commandService.run$Class$Z$OA(c, true, args));
var info=p$1.getCommandInfo$O.apply(this, [code]);
if (info != null ) this.waitFor$java_util_concurrent_Future(this.commandService.run$org_scijava_command_CommandInfo$Z$OA(info, true, args));
});

Clazz.newMeth(C$, 'run$O$java_util_Map', function (code, inputMap) {
var c=p$1.getCommandClass$O.apply(this, [code]);
if (c != null ) this.waitFor$java_util_concurrent_Future(this.commandService.run$Class$Z$java_util_Map(c, true, inputMap));
var info=p$1.getCommandInfo$O.apply(this, [code]);
if (info != null ) this.waitFor$java_util_concurrent_Future(this.commandService.run$org_scijava_command_CommandInfo$Z$java_util_Map(info, true, inputMap));
});

Clazz.newMeth(C$, ['supports$O','supports$TT','supports$TD'], function (code) {
return p$1.getCommandClass$O.apply(this, [code]) != null  || p$1.getCommandInfo$O.apply(this, [code]) != null  ;
});

Clazz.newMeth(C$, 'getCommandClass$O', function (code) {
if (!(Clazz.instanceOf(code, "java.lang.Class"))) return null;
var c=code;
if (!Clazz.getClass($I$(1),[]).isAssignableFrom$Class(c)) return null;
var commandClass=c;
return commandClass;
}, p$1);

Clazz.newMeth(C$, 'getCommandInfo$O', function (code) {
if (!(Clazz.instanceOf(code, "java.lang.String"))) return null;
var command=code;
var info=this.commandService.getCommand$S(command);
if (info != null ) return info;
for (var ci, $ci = this.commandService.getCommands$().iterator$(); $ci.hasNext$()&&((ci=($ci.next$())),1);) {
if (command.equals$O(ci.getTitle$())) return ci;
}
return null;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.command.run.CommandCodeRunner',null,['org.scijava.plugin.Plugin']],['type="org.scijava.run.CodeRunner.class" ']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
