(function(){var P$=Clazz.newPackage("org.scijava.ui.console"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UIArgument", null, 'org.scijava.console.AbstractConsoleArgument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['uiService','org.scijava.ui.UIService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$SA.apply(this,[2, ["--ui"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'handle$java_util_LinkedList', function (args) {
if (!this.supports$java_util_LinkedList(args)) return;
args.removeFirst$();
var uiName=args.removeFirst$();
var ui=this.uiService.getUI$S(uiName);
if (ui == null ) {
this.log.error$O("No such UI: " + uiName);
} else {
this.uiService.setDefaultUI$org_scijava_ui_UserInterface(ui);
}});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.console.UIArgument',null,['org.scijava.plugin.Plugin']],['type="org.scijava.console.ConsoleArgument.class" ']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
