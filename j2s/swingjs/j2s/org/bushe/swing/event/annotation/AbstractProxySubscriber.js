(function(){var P$=Clazz.newPackage("org.bushe.swing.event.annotation"),I$=[[0,'Boolean','org.bushe.swing.event.annotation.ReferenceStrength','java.lang.ref.WeakReference','java.lang.reflect.AccessibleObject']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractProxySubscriber", null, null, ['org.bushe.swing.event.ProxySubscriber', 'org.bushe.swing.event.Prioritized']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['veto'],'I',['priority'],'O',['proxiedSubscriber','java.lang.Object','subscriptionMethod','java.lang.reflect.Method','referenceStrength','org.bushe.swing.event.annotation.ReferenceStrength','eventService','org.bushe.swing.event.EventService']]]

Clazz.newMeth(C$, 'c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$org_bushe_swing_event_EventService$Z', function (proxiedSubscriber, subscriptionMethod, referenceStrength, es, veto) {
C$.c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$Z.apply(this, [proxiedSubscriber, subscriptionMethod, referenceStrength, 0, es, veto]);
}, 1);

Clazz.newMeth(C$, 'c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$Z', function (proxiedSubscriber, subscriptionMethod, referenceStrength, priority, es, veto) {
;C$.$init$.apply(this);
this.referenceStrength=referenceStrength;
this.priority=priority;
this.eventService=es;
this.veto=veto;
if (proxiedSubscriber == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The realSubscriber cannot be null when constructing a proxy subscriber."]);
}if (subscriptionMethod == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The subscriptionMethod cannot be null when constructing a proxy subscriber."]);
}var returnType=subscriptionMethod.getReturnType$();
if (veto && returnType !== $I$(1).TYPE  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The subscriptionMethod must have the two parameters, the first one must be a String and the second a non-primitive (Object or derivative)."]);
}if ($I$(2).WEAK.equals$O(referenceStrength)) {
this.proxiedSubscriber=Clazz.new_($I$(3,1).c$$TT,[proxiedSubscriber]);
} else {
this.proxiedSubscriber=proxiedSubscriber;
}this.subscriptionMethod=subscriptionMethod;
}, 1);

Clazz.newMeth(C$, 'getProxiedSubscriber$', function () {
if (Clazz.instanceOf(this.proxiedSubscriber, "java.lang.ref.WeakReference")) {
return (this.proxiedSubscriber).get$();
}return this.proxiedSubscriber;
});

Clazz.newMeth(C$, 'getSubscriptionMethod$', function () {
return this.subscriptionMethod;
});

Clazz.newMeth(C$, 'getEventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'getReferenceStrength$', function () {
return this.referenceStrength;
});

Clazz.newMeth(C$, 'getPriority$', function () {
return this.priority;
});

Clazz.newMeth(C$, 'proxyUnsubscribed$', function () {
this.proxiedSubscriber=null;
});

Clazz.newMeth(C$, 'hashCode$', function () {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Proxy subscribers are not allowed in Hash Maps, since the underlying values use Weak References thatmay disappear, the calculations may not be the same insuccessive calls as required by hashCode."]);
});

Clazz.newMeth(C$, 'retryReflectiveCallUsingAccessibleObject$OA$reflect_Method$O$IllegalAccessException$S', function (args, subscriptionMethod, obj, e, message) {
var accessibleTriedAndFailed=false;
if (subscriptionMethod != null ) {
var accessibleMethod=Clazz.array($I$(4), -1, [subscriptionMethod]);
try {
$I$(4).setAccessible$reflect_AccessibleObjectA$Z(accessibleMethod, true);
var returnValue=subscriptionMethod.invoke$O$OA(obj, args);
return ($I$(1).valueOf$S(returnValue + "")).valueOf();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"SecurityException")){
var ex = e$$;
{
accessibleTriedAndFailed=true;
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e1 = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[message, e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e1 = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[message, e]);
}
} else {
throw e$$;
}
}
}if (accessibleTriedAndFailed) {
message=message + ".  An attempt was made to make the method accessible, but the SecurityManager denied the attempt.";
}throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[message, e]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "org.bushe.swing.event.annotation.AbstractProxySubscriber")) {
var bps=obj;
if (this.referenceStrength !== bps.referenceStrength ) {
return false;
}if (this.subscriptionMethod !== bps.subscriptionMethod ) {
return false;
}if ($I$(2).WEAK === this.referenceStrength ) {
if ((this.proxiedSubscriber).get$() !== (bps.proxiedSubscriber).get$() ) {
return false;
}} else {
if (this.proxiedSubscriber !== bps.proxiedSubscriber ) {
return false;
}}if (this.veto != bps.veto ) {
return false;
}if (this.eventService !== bps.eventService ) {
return false;
}return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'toString', function () {
return "AbstractProxySubscriber{realSubscriber=" + (Clazz.instanceOf(this.proxiedSubscriber, "java.lang.ref.WeakReference") ? (this.proxiedSubscriber).get$() : this.proxiedSubscriber) + ", subscriptionMethod=" + this.subscriptionMethod + ", veto=" + this.veto + ", referenceStrength=" + this.referenceStrength + ", eventService=" + this.eventService + '}' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
