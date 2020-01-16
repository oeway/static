(function(){var P$=Clazz.newPackage("org.scijava.ui.console"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ShowUIArgument", null, 'org.scijava.console.AbstractConsoleArgument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['uiService','org.scijava.ui.UIService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$SA.apply(this,[1, ["--showUI"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'handle$java_util_LinkedList', function (args) {
if (!this.supports$java_util_LinkedList(args)) return;
args.removeFirst$();
this.uiService.showUI$();
});

Clazz.newMeth(C$, ['supports$java_util_LinkedList','supports$TT','supports$TD'], function (args) {
return this.uiService != null  && C$.superclazz.prototype.supports$java_util_LinkedList.apply(this, [args]) ;
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.console.ShowUIArgument',null,['org.scijava.plugin.Plugin']],['type="org.scijava.console.ConsoleArgument.class" ']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
