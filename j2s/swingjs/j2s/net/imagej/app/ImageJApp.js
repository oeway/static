(function(){var P$=Clazz.newPackage("net.imagej.app"),I$=[[0,'net.imagej.app.AboutImageJ','net.imagej.app.Preferences','net.imagej.app.QuitProgram']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageJApp", null, 'org.scijava.app.AbstractApp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['commandService','org.scijava.command.CommandService']]]

Clazz.newMeth(C$, 'getGroupId$', function () {
return "net.imagej";
});

Clazz.newMeth(C$, 'getArtifactId$', function () {
return "imagej-common";
});

Clazz.newMeth(C$, 'about$', function () {
this.commandService.run$Class$Z$OA(Clazz.getClass($I$(1)), true, []);
});

Clazz.newMeth(C$, 'prefs$', function () {
this.commandService.run$Class$Z$OA(Clazz.getClass($I$(2)), true, []);
});

Clazz.newMeth(C$, 'quit$', function () {
this.commandService.run$Class$Z$OA(Clazz.getClass($I$(3)), true, []);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.app.ImageJApp',null,['org.scijava.plugin.Plugin']],['type="org.scijava.app.App.class" name="ImageJ" priority="100.0" ']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
