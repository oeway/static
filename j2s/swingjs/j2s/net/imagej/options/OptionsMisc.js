(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsMisc", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.divByZeroVal="Infinity";
this.usePtrCursor=false;
this.hideProcessStackDialog=false;
this.requireCommandKey=false;
this.moveIsolatedPlugins=false;
this.runSingleInstanceListener=false;
this.debugMode=false;
this.exitWhenQuitting=true;
}, 1);

C$.$fields$=[['Z',['usePtrCursor','hideProcessStackDialog','requireCommandKey','moveIsolatedPlugins','runSingleInstanceListener','debugMode','exitWhenQuitting'],'S',['divByZeroVal']]]

Clazz.newMeth(C$, 'getDivByZeroVal$', function () {
return this.divByZeroVal;
});

Clazz.newMeth(C$, 'isUsePtrCursor$', function () {
return this.usePtrCursor;
});

Clazz.newMeth(C$, 'isHideProcessStackDialog$', function () {
return this.hideProcessStackDialog;
});

Clazz.newMeth(C$, 'isRequireCommandKey$', function () {
return this.requireCommandKey;
});

Clazz.newMeth(C$, 'isMoveIsolatedPlugins$', function () {
return this.moveIsolatedPlugins;
});

Clazz.newMeth(C$, 'isRunSingleInstanceListener$', function () {
return this.runSingleInstanceListener;
});

Clazz.newMeth(C$, 'isDebugMode$', function () {
return this.debugMode;
});

Clazz.newMeth(C$, 'isExitWhenQuitting$', function () {
return this.exitWhenQuitting;
});

Clazz.newMeth(C$, 'setDivByZeroVal$S', function (divByZeroVal) {
this.divByZeroVal=divByZeroVal;
});

Clazz.newMeth(C$, 'setUsePtrCursor$Z', function (usePtrCursor) {
this.usePtrCursor=usePtrCursor;
});

Clazz.newMeth(C$, 'setHideProcessStackDialog$Z', function (hideProcessStackDialog) {
this.hideProcessStackDialog=hideProcessStackDialog;
});

Clazz.newMeth(C$, 'setRequireCommandKey$Z', function (requireCommandKey) {
this.requireCommandKey=requireCommandKey;
});

Clazz.newMeth(C$, 'setMoveIsolatedPlugins$Z', function (moveIsolatedPlugins) {
this.moveIsolatedPlugins=moveIsolatedPlugins;
});

Clazz.newMeth(C$, 'setRunSingleInstanceListener$Z', function (runSingleInstanceListener) {
this.runSingleInstanceListener=runSingleInstanceListener;
});

Clazz.newMeth(C$, 'setDebugMode$Z', function (debugMode) {
this.debugMode=debugMode;
});

Clazz.newMeth(C$, 'setExitWhenQuitting$Z', function (val) {
this.exitWhenQuitting=val;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsMisc',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Misc..., weight = 17)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['divByZeroVal','String',null,['org.scijava.plugin.Parameter']],['label="Divide by zero value" ']],
  [['usePtrCursor','boolean',null,['org.scijava.plugin.Parameter']],['label="Use pointer cursor" ']],
  [['hideProcessStackDialog','.',null,['org.scijava.plugin.Parameter']],['label="Hide "Process Stack?" dialog" ']],
  [['requireCommandKey','.',null,['org.scijava.plugin.Parameter']],['label="Require command key for shortcuts" ']],
  [['moveIsolatedPlugins','.',null,['org.scijava.plugin.Parameter']],['label="Move isolated plugins to Misc. menu" ']],
  [['runSingleInstanceListener','.',null,['org.scijava.plugin.Parameter']],['label="Run single instance listener" ']],
  [['debugMode','.',null,['org.scijava.plugin.Parameter']],['label="Debug mode" ']],
  [['exitWhenQuitting','.',null,['org.scijava.plugin.Parameter']],['label="Exit when quitting" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
