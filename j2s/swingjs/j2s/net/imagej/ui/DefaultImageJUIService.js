(function(){var P$=Clazz.newPackage("net.imagej.ui"),I$=[[0,'net.imagej.options.OptionsMemoryAndThreads']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultImageJUIService", null, 'org.scijava.service.AbstractService', 'net.imagej.ui.ImageJUIService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['optionsService','org.scijava.options.OptionsService','statusService','org.scijava.app.StatusService','appService','org.scijava.app.AppService']]]

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsPressedEvent', function (event) {
if (event.getDisplay$() == null ) {
var options=this.optionsService.getOptions$Class(Clazz.getClass($I$(1)));
if (options.isRunGcOnClick$()) System.gc$();
this.statusService.showStatus$S(this.appService.getApp$().getInfo$Z(true));
}});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.ui.DefaultImageJUIService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['optionsService','org.scijava.options.OptionsService',null,['org.scijava.plugin.Parameter']],['']],
  [['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['']],
  [['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_input_MsPressedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
