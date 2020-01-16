(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EventServiceAction", null, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.throwsExceptionOnNullEventService=true;
this.publishesOnTopic=true;
}, 1);

C$.$fields$=[['Z',['throwsExceptionOnNullEventService','publishesOnTopic'],'S',['topicName']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_ImageIcon', function (actionName, icon) {
;C$.superclazz.c$$S$javax_swing_Icon.apply(this,[actionName, icon]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isPublishesOnTopic$', function () {
return this.publishesOnTopic;
});

Clazz.newMeth(C$, 'setPublishesOnTopic$Z', function (onTopic) {
this.publishesOnTopic=onTopic;
});

Clazz.newMeth(C$, 'setTopicName$S', function (topicName) {
this.topicName=topicName;
});

Clazz.newMeth(C$, 'getTopicName$java_awt_event_ActionEvent', function (event) {
if (this.topicName != null ) {
return this.topicName;
}var topic=this.getValue$S("event-service-topic");
if (topic != null ) {
return topic + "";
} else {
topic=this.getValue$S("ID");
if (topic != null ) {
return topic + "";
} else {
topic=this.getValue$S("ActionCommandKey");
if (topic != null ) {
return topic + "";
} else {
topic=event.getActionCommand$();
if (topic != null ) {
return topic + "";
} else {
return this.getName$();
}}}}});

Clazz.newMeth(C$, 'getTopicValue$java_awt_event_ActionEvent', function (event) {
return event;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.getValue$S("Name");
});

Clazz.newMeth(C$, 'getEventServiceEvent$java_awt_event_ActionEvent', function (event) {
return event;
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (event) {
var eventService=this.getEventService$java_awt_event_ActionEvent(event);
if (eventService == null ) {
if (this.getThrowsExceptionOnNullEventService$()) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Null EventService supplied to EventServiceAction with name:" + this.getName$()]);
} else {
return;
}}if (this.isPublishesOnTopic$()) {
var topic=this.getTopicName$java_awt_event_ActionEvent(event);
var topicValue=this.getTopicValue$java_awt_event_ActionEvent(event);
eventService.publish$S$O(topic, topicValue);
} else {
var esEvent=this.getEventServiceEvent$java_awt_event_ActionEvent(event);
eventService.publish$O(esEvent);
}});

Clazz.newMeth(C$, 'getThrowsExceptionOnNullEventService$', function () {
return this.throwsExceptionOnNullEventService;
});

Clazz.newMeth(C$, 'setThrowsExceptionOnNullEventService$Z', function (throwsExceptionOnNullEventService) {
this.throwsExceptionOnNullEventService=throwsExceptionOnNullEventService;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
