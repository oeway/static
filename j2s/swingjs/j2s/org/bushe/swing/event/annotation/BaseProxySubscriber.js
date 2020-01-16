(function(){var P$=Clazz.newPackage("org.bushe.swing.event.annotation"),I$=[[0,'Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseProxySubscriber", null, 'org.bushe.swing.event.annotation.AbstractProxySubscriber', ['org.bushe.swing.event.EventSubscriber', 'org.bushe.swing.event.VetoEventListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['subscriptionClass','Class']]]

Clazz.newMeth(C$, 'c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$org_bushe_swing_event_EventService$Class$Z', function (proxiedSubscriber, subscriptionMethod, referenceStrength, es, subscription, veto) {
C$.c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$Class$Z.apply(this, [proxiedSubscriber, subscriptionMethod, referenceStrength, 0, es, subscription, veto]);
}, 1);

Clazz.newMeth(C$, 'c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$Class$Z', function (proxiedSubscriber, subscriptionMethod, referenceStrength, priority, es, subscription, veto) {
;C$.superclazz.c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$Z.apply(this,[proxiedSubscriber, subscriptionMethod, referenceStrength, priority, es, veto]);C$.$init$.apply(this);
this.subscriptionClass=subscription;
var params=subscriptionMethod.getParameterTypes$();
if (params == null  || params.length != 1  || params[0].isPrimitive$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The subscriptionMethod must have a single non-primitive parameter."]);
}}, 1);

Clazz.newMeth(C$, ['onEvent$O','onEvent$','onEvent$TT'], function (event) {
var args=Clazz.array(java.lang.Object, -1, [event]);
var subscriptionMethod=null;
var obj=null;
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
var message="Exception when invoking annotated method from EventService publication.  Event class:" + event.getClass$() + ", Event:" + event + ", subscriber:" + this.getProxiedSubscriber$() + ", subscription Method=" + this.getSubscriptionMethod$() ;
this.retryReflectiveCallUsingAccessibleObject$OA$reflect_Method$O$IllegalAccessException$S(args, subscriptionMethod, obj, e, message);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["InvocationTargetException when invoking annotated method from EventService publication.  Event class:" + event.getClass$() + ", Event:" + event + ", subscriber:" + this.getProxiedSubscriber$() + ", subscription Method=" + this.getSubscriptionMethod$() , e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, ['shouldVeto$O','shouldVeto$','shouldVeto$TT'], function (event) {
var args=Clazz.array(java.lang.Object, -1, [event]);
var subscriptionMethod=null;
var obj=null;
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
var message="Exception when invoking annotated method from EventService publication.  Event class:" + event.getClass$() + ", Event:" + event + ", subscriber:" + this.getProxiedSubscriber$() + ", subscription Method=" + this.getSubscriptionMethod$() ;
return this.retryReflectiveCallUsingAccessibleObject$OA$reflect_Method$O$IllegalAccessException$S(args, subscriptionMethod, obj, e, message);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["InvocationTargetException when invoking annotated method from EventService publication.  Event class:" + event.getClass$() + ", Event:" + event + ", subscriber:" + this.getProxiedSubscriber$() + ", subscription Method=" + this.getSubscriptionMethod$() , e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "org.bushe.swing.event.annotation.BaseProxySubscriber")) {
if (!C$.superclazz.prototype.equals$O.apply(this, [obj])) {
return false;
}var bps=obj;
if (this.subscriptionClass !== bps.subscriptionClass ) {
if (this.subscriptionClass == null ) {
return false;
} else {
if (!this.subscriptionClass.equals$O(bps.subscriptionClass)) {
return false;
}}}return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'toString', function () {
return "BaseProxySubscriber{subscription=" + this.subscriptionClass + "veto=" + this.veto + "realSubscriber=" + this.getProxiedSubscriber$() + ", subscriptionMethod=" + this.getSubscriptionMethod$() + ", referenceStrength=" + this.getReferenceStrength$() + ", eventService=" + this.getEventService$() + '}' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
