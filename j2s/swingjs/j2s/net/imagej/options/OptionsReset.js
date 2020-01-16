(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsReset", null, null, 'org.scijava.command.Command');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['optionsService','org.scijava.options.OptionsService']]]

Clazz.newMeth(C$, 'run$', function () {
this.optionsService.reset$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsReset',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Reset, weight = 20)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['optionsService','org.scijava.options.OptionsService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
