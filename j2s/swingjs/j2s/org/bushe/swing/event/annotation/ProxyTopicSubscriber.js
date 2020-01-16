(function(){var P$=Clazz.newPackage("org.bushe.swing.event.annotation"),I$=[[0,'Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ProxyTopicSubscriber", null, 'org.bushe.swing.event.annotation.AbstractProxySubscriber', ['org.bushe.swing.event.EventTopicSubscriber', 'org.bushe.swing.event.VetoTopicEventListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['topic']]]

Clazz.newMeth(C$, 'c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$org_bushe_swing_event_EventService$S$Z', function (proxiedSubscriber, subscriptionMethod, referenceStrength, es, topic, veto) {
C$.c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$Z.apply(this, [proxiedSubscriber, subscriptionMethod, referenceStrength, 0, es, topic, veto]);
}, 1);

Clazz.newMeth(C$, 'c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$Z', function (proxiedSubscriber, subscriptionMethod, referenceStrength, priority, es, topic, veto) {
;C$.superclazz.c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$Z.apply(this,[proxiedSubscriber, subscriptionMethod, referenceStrength, priority, es, veto]);C$.$init$.apply(this);
this.topic=topic;
if (topic == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Proxies for topic subscribers require a non-null topic."]);
}var params=subscriptionMethod.getParameterTypes$();
if (params == null  || params.length != 2  || !Clazz.getClass(String).equals$O(params[0])  || params[1].isPrimitive$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The subscriptionMethod must have the two parameters, the first one must be a String and the second a non-primitive (Object or derivative)."]);
}}, 1);

Clazz.newMeth(C$, ['onEvent$S$O','onEvent$','onEvent$S$TT'], function (topic, data) {
var args=Clazz.array(java.lang.Object, -1, [topic, data]);
var obj=null;
var subscriptionMethod=null;
try {
obj=this.getProxiedSubscriber$();
if (obj == null ) {
return;
}subscriptionMethod=this.getSubscriptionMethod$();
subscriptionMethod.invoke$O$OA(obj, args);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
var message="IllegalAccessException when invoking annotated method from EventService publication.  Topic:" + topic + ", data:" + data + ", subscriber:" + this.getProxiedSubscriber$() + ", subscription Method=" + this.getSubscriptionMethod$() ;
this.retryReflectiveCallUsingAccessibleObject$OA$reflect_Method$O$IllegalAccessException$S(args, subscriptionMethod, obj, e, message);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["InvocationTargetException when invoking annotated method from EventService publication.  Topic:" + topic + ", data:" + data + ", subscriber:" + this.getProxiedSubscriber$() + ", subscription Method=" + this.getSubscriptionMethod$() , e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, ['shouldVeto$S$O','shouldVeto$','shouldVeto$S$TT'], function (topic, data) {
var args=Clazz.array(java.lang.Object, -1, [topic, data]);
var obj=null;
var subscriptionMethod=null;
try {
obj=this.getProxiedSubscriber$();
if (obj == null ) {
return false;
}subscriptionMethod=this.getSubscriptionMethod$();
return ($I$(1).valueOf$S(subscriptionMethod.invoke$O$OA(obj, args) + "")).valueOf();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
var message="IllegalAccessException when invoking annotated veto method from EventService publication.  Topic:" + topic + ", data:" + data + ", subscriber:" + this.getProxiedSubscriber$() + ", subscription Method=" + this.getSubscriptionMethod$() ;
return this.retryReflectiveCallUsingAccessibleObject$OA$reflect_Method$O$IllegalAccessException$S(args, subscriptionMethod, obj, e, message);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["InvocationTargetException when invoking annotated veto method from EventService publication.  Topic:" + topic + ", data:" + data + ", subscriber:" + this.getProxiedSubscriber$() + ", subscription Method=" + this.getSubscriptionMethod$() , e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'unsubscribe$S', function (topic) {
if (this.veto) {
this.getEventService$().unsubscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener(topic, this);
} else {
this.getEventService$().unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber(topic, this);
}});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "org.bushe.swing.event.annotation.ProxyTopicSubscriber")) {
if (!C$.superclazz.prototype.equals$O.apply(this, [obj])) {
return false;
}var proxyTopicSubscriber=obj;
if (this.topic.equals$O(proxyTopicSubscriber.topic)) {
if (this.topic == null ) {
return false;
} else {
if (!this.topic.equals$O(proxyTopicSubscriber.topic)) {
return false;
}}}return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'toString', function () {
return "ProxyTopicSubscriber{topic=\'" + this.topic + '\'' + "veto='" + this.veto + '\'' + "realSubscriber=" + this.getProxiedSubscriber$() + ", subscriptionMethod=" + this.getSubscriptionMethod$() + ", referenceStrength=" + this.getReferenceStrength$() + ", eventService=" + this.getEventService$() + '}' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
