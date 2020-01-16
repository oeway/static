(function(){var P$=Clazz.newPackage("org.scijava.welcome"),p$1={},I$=[[0,'java.io.File','org.scijava.util.DigestUtils','Boolean','org.scijava.welcome.event.WelcomeEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultWelcomeService", null, 'org.scijava.service.AbstractService', 'org.scijava.welcome.WelcomeService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','appService','org.scijava.app.AppService','displayService','org.scijava.display.DisplayService','commandService','org.scijava.command.CommandService','textService','org.scijava.text.TextService','eventService','org.scijava.event.EventService','uiService','org.scijava.ui.UIService','prefService','org.scijava.prefs.PrefService']]]

Clazz.newMeth(C$, 'displayWelcome$', function () {
p$1.displayWelcome$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'displayWelcome$Z', function (force) {
var baseDir=this.appService.getApp$().getBaseDirectory$();
var welcomeFile=Clazz.new_($I$(1,1).c$$java_io_File$S,[baseDir, "WELCOME.md"]);
try {
if (welcomeFile.exists$()) {
var welcomeText=this.textService.asHTML$java_io_File(welcomeFile);
var checksum=$I$(2).bestHex$S(welcomeText);
var previousChecksum=this.prefService.get$Class$S(this.getClass$(), "checksum");
if (!force && checksum.equals$O(previousChecksum) ) return;
this.prefService.put$Class$S$S(this.getClass$(), "checksum", checksum);
this.displayService.createDisplay$O(welcomeText);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'isFirstRun$', function () {
var firstRun=this.prefService.get$Class$S(this.getClass$(), p$1.firstRunPrefKey.apply(this, []));
return firstRun == null  || $I$(3).parseBoolean$S(firstRun) ;
});

Clazz.newMeth(C$, 'setFirstRun$Z', function (firstRun) {
this.prefService.put$Class$S$Z(this.getClass$(), p$1.firstRunPrefKey.apply(this, []), firstRun);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_ui_event_UIShownEvent', function (evt) {
if (this.uiService.isHeadless$() || !this.isFirstRun$() ) return;
this.eventService.publish$TE(Clazz.new_($I$(4,1)));
this.setFirstRun$Z(false);
p$1.displayWelcome$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'firstRunPrefKey', function () {
return "firstRun-" + this.appService.getApp$().getVersion$();
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.welcome.DefaultWelcomeService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']],
  [['textService','org.scijava.text.TextService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['']],
  [['prefService','org.scijava.prefs.PrefService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_ui_event_UIShownEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
