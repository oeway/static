(function(){var P$=Clazz.newPackage("org.scijava.io"),I$=[[0,'org.scijava.io.event.DataOpenedEvent','org.scijava.io.event.DataSavedEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultIOService", null, 'org.scijava.plugin.AbstractHandlerService', 'org.scijava.io.IOService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$log','org.scijava.log.LogService','eventService','org.scijava.event.EventService']]]

Clazz.newMeth(C$, 'open$S', function (source) {
var opener=this.getOpener$S(source);
if (opener == null ) return null;
var data=opener.open$S(source);
if (data == null ) return null;
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$S$O,[source, data]));
return data;
});

Clazz.newMeth(C$, 'save$O$S', function (data, destination) {
var saver=this.getSaver$TD$S(data, destination);
if (saver != null ) {
saver.save$TD$S(data, destination);
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$S$O,[destination, data]));
}});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.io.DefaultIOService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['$log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
