(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SelectWindow", null, null, 'org.scijava.command.Command');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['displayService','org.scijava.display.DisplayService','display','org.scijava.display.Display']]]

Clazz.newMeth(C$, 'run$', function () {
this.displayService.setActiveDisplay$org_scijava_display_Display(this.display);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.SelectWindow',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" label="Select Window..." ']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['display','org.scijava.display.Display',null,['org.scijava.plugin.Parameter']],['autoFill="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
