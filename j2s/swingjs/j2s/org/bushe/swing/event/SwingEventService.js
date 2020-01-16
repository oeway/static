(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[[0,'javax.swing.SwingUtilities','org.bushe.swing.event.ThreadSafeEventService',['org.bushe.swing.event.Logger','.Level'],'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SwingEventService", null, 'org.bushe.swing.event.ThreadSafeEventService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Long$Z$Integer$Integer$Long.apply(this,[new Long(200), false, null, null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Long', function (timeThresholdForEventTimingEventPublication) {
;C$.superclazz.c$$Long$Z$Integer$Integer$Long.apply(this,[timeThresholdForEventTimingEventPublication, false, null, null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Long$Z', function (timeThresholdForEventTimingEventPublication, subscribeTimingEventsInternally) {
;C$.superclazz.c$$Long$Z$Integer$Integer$Long.apply(this,[timeThresholdForEventTimingEventPublication, subscribeTimingEventsInternally, null, null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'publish$O$S$O$java_util_List$java_util_List$StackTraceElementA', function (event, topic, eventObj, subscribers, vetoSubscribers, callingStack) {
if ($I$(1).isEventDispatchThread$()) {
C$.superclazz.prototype.publish$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [event, topic, eventObj, subscribers, vetoSubscribers, callingStack]);
} else {
$I$(1).invokeLater$Runnable(((P$.SwingEventService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingEventService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if ($I$(2).LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
$I$(2).LOG.debug$S("publish(" + this.$finals$.event + "," + this.$finals$.topic + "," + this.$finals$.eventObj + "), called from non-EDT Thread:" + $I$(4).toString$OA(this.$finals$.callingStack) );
}P$.SwingEventService.prototype.publish$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [this.$finals$.event, this.$finals$.topic, this.$finals$.eventObj, this.$finals$.subscribers, this.$finals$.vetoSubscribers, this.$finals$.callingStack]);
});
})()
), Clazz.new_(P$.SwingEventService$1.$init$, [this, {vetoSubscribers:vetoSubscribers,event:event,subscribers:subscribers,eventObj:eventObj,topic:topic,callingStack:callingStack}])));
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
