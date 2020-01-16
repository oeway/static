(function(){var P$=Clazz.newPackage("org.scijava.event"),p$1={},I$=[[0,'java.util.ArrayList','StringBuilder','org.scijava.event.EventDetails']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultEventHistory", null, 'org.scijava.service.AbstractService', 'org.scijava.event.EventHistory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.history=Clazz.new_(1,{E:"org.scijava.event.EventDetails"},$I$(1,1));
this.listeners=Clazz.new_(1,{E:"org.scijava.event.EventHistoryListener"},$I$(1,1));
}, 1);

C$.$fields$=[['Z',['active'],'O',['eventService','org.scijava.event.EventService','history','java.util.ArrayList','+listeners']]]

Clazz.newMeth(C$, 'setActive$Z', function (active) {
this.active=active;
});

Clazz.newMeth(C$, 'isActive$', function () {
return this.active;
});

Clazz.newMeth(C$, 'clear$', function () {
this.history.clear$();
});

Clazz.newMeth(C$, 'toHTML$java_util_Set$java_util_Set', function (filtered, highlighted) {
var sb=Clazz.new_($I$(2,1));
for (var details, $details = this.history.iterator$(); $details.hasNext$()&&((details=($details.next$())),1);) {
var eventType=details.getEventType$();
if (filtered != null  && filtered.contains$O(eventType) ) {
continue;
}var bold=highlighted != null  && highlighted.contains$O(eventType) ;
sb.append$S(details.toHTML$Z(bold));
}
return sb.toString();
});

Clazz.newMeth(C$, 'addListener$org_scijava_event_EventHistoryListener', function (l) {
{
this.listeners.add$TE(l);
}this.setActive$Z(true);
});

Clazz.newMeth(C$, 'removeListener$org_scijava_event_EventHistoryListener', function (l) {
{
this.listeners.remove$O(l);
}if (this.listeners.isEmpty$()) {
this.setActive$Z(false);
}});

Clazz.newMeth(C$, 'onEvent$org_scijava_event_SciJavaEvent', function (event) {
if (!this.active) return;
var details=Clazz.new_($I$(3,1).c$$org_scijava_event_SciJavaEvent,[event]);
this.history.add$TE(details);
p$1.notifyListeners$org_scijava_event_EventDetails.apply(this, [details]);
});

Clazz.newMeth(C$, 'notifyListeners$org_scijava_event_EventDetails', function (details) {
{
for (var l, $l = this.listeners.iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) {
l.eventOccurred$(details);
}
}}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.event.DefaultEventHistory',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_event_SciJavaEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
