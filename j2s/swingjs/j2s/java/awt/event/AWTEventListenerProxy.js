(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AWTEventListenerProxy", null, 'java.util.EventListenerProxy', 'java.awt.event.AWTEventListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['eventMask']]]

Clazz.newMeth(C$, 'c$$J$java_awt_event_AWTEventListener', function (eventMask, listener) {
;C$.superclazz.c$$TT.apply(this,[listener]);C$.$init$.apply(this);
this.eventMask=eventMask;
}, 1);

Clazz.newMeth(C$, ['eventDispatched$java_awt_AWTEvent','eventDispatched$'], function (evt) {
(this.getListener$()).eventDispatched$(evt);
});

Clazz.newMeth(C$, 'getEventMask$', function () {
return this.eventMask;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
