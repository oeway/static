(function(){var P$=Clazz.newPackage("net.imagej.app"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Preferences", null, null, 'org.scijava.command.Command');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.clearAll=false;
}, 1);

C$.$fields$=[['Z',['clearAll'],'O',['prefService','org.scijava.prefs.PrefService']]]

Clazz.newMeth(C$, 'run$', function () {
if (this.clearAll) this.prefService.clearAll$();
});

Clazz.newMeth(C$, 'setClearAll$Z', function (val) {
this.clearAll=val;
});

Clazz.newMeth(C$, 'isClearAll$', function () {
return this.clearAll;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.app.Preferences',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" label="Preferences" menu={"@Menu(label = File, weight = 0.0, mnemonic = f)"  "@Menu(label = Preferences, weight = 30)"  } headless="true" attrs={"@Attr(name = no-legacy)"  "@Attr(name = app-command)"  } ']],
  [['prefService','org.scijava.prefs.PrefService',null,['org.scijava.plugin.Parameter']],['']],
  [['clearAll','boolean',null,['org.scijava.plugin.Parameter']],['label="Clear all preferences" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
