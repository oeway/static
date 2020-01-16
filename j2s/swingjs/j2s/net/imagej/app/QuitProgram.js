(function(){var P$=Clazz.newPackage("net.imagej.app"),p$1={},I$=[[0,'net.imagej.options.OptionsMisc',['org.scijava.ui.DialogPrompt','.MessageType'],['org.scijava.ui.DialogPrompt','.OptionType'],['org.scijava.ui.DialogPrompt','.Result']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QuitProgram", null, 'org.scijava.command.ContextCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['statusService','org.scijava.app.StatusService','windowService','net.imagej.display.WindowService','uiService','org.scijava.ui.UIService','optionsService','org.scijava.options.OptionsService']]]

Clazz.newMeth(C$, 'run$', function () {
if (this.windowService != null  && this.windowService.getOpenWindows$().size$() > 0 ) {
if (!p$1.promptForQuit.apply(this, [])) {
return;
}}if (this.statusService != null ) {
this.statusService.showStatus$S("Quitting...");
}var opts=this.optionsService.getOptions$Class(Clazz.getClass($I$(1)));
var exitWhenQuitting=opts.isExitWhenQuitting$();
this.getContext$().dispose$();
if (exitWhenQuitting) System.exit$I(0);
});

Clazz.newMeth(C$, 'promptForQuit', function () {
var result=this.uiService.showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType("Quit ImageJ?", "Quit", $I$(2).QUESTION_MESSAGE, $I$(3).YES_NO_OPTION);
return result === $I$(4).YES_OPTION ;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.app.QuitProgram',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" label="Quit" iconPath="/icons/commands/door_in.png" menu={"@Menu(label = File, weight = 0.0, mnemonic = f)"  "@Menu(label = Quit, weight = 1.7976931348623157E308, mnemonic = q, accelerator = ^Q)"  } attrs={"@Attr(name = no-legacy)"  "@Attr(name = app-command)"  } ']],
  [['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['']],
  [['windowService','net.imagej.display.WindowService',null,['org.scijava.plugin.Parameter']],['']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['']],
  [['optionsService','org.scijava.options.OptionsService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
