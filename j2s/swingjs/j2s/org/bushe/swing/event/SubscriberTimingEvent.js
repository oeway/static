(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubscriberTimingEvent", null, 'org.bushe.swing.event.AbstractEventServiceEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['stringified'],'O',['start','Long','+end','+timeLimitMilliseconds','event','java.lang.Object','subscriber','org.bushe.swing.event.EventSubscriber','vetoEventListener','org.bushe.swing.event.VetoEventListener']]]

Clazz.newMeth(C$, 'c$$O$Long$Long$Long$O$org_bushe_swing_event_EventSubscriber$org_bushe_swing_event_VetoEventListener', function (source, start, end, timeLimitMilliseconds, event, subscriber, vetoEventListener) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.start=start;
this.end=end;
this.timeLimitMilliseconds=timeLimitMilliseconds;
this.event=event;
this.subscriber=subscriber;
this.vetoEventListener=vetoEventListener;
var type="EventServiceSubscriber";
var thing=", EventServiceSubscriber:" + subscriber;
if (vetoEventListener != null ) {
type="VetoEventListener";
thing=", VetoEventListener" + vetoEventListener;
}try {
this.stringified="Time limit exceeded for " + type + ". Handling time=" + (end.longValue$() - start.longValue$()) + ", Time limit=" + timeLimitMilliseconds + ", event:" + event + thing + ", start:" + start + ", end:" + end ;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.stringified="Time limit exceeded for event, toString threw and exception.";
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'getTimeLimitMilliseconds$', function () {
return this.timeLimitMilliseconds;
});

Clazz.newMeth(C$, 'getEvent$', function () {
return this.event;
});

Clazz.newMeth(C$, 'getSubscriber$', function () {
return this.subscriber;
});

Clazz.newMeth(C$, 'getVetoEventListener$', function () {
return this.vetoEventListener;
});

Clazz.newMeth(C$, 'isVetoExceeded$', function () {
return this.vetoEventListener != null ;
});

Clazz.newMeth(C$, 'isEventHandlingExceeded$', function () {
return this.subscriber == null ;
});

Clazz.newMeth(C$, 'toString', function () {
return this.stringified;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
