(function(){var P$=Clazz.newPackage("org.scijava"),p$1={},I$=[[0,'org.scijava.service.ServiceIndex','org.scijava.plugin.PluginIndex','org.scijava.service.ServiceHelper','org.scijava.util.Types','org.scijava.service.Service','org.scijava.util.Query','org.scijava.plugin.Parameter','java.lang.reflect.Field','org.scijava.event.EventHandler','java.lang.reflect.Method','org.scijava.util.ClassUtils','org.scijava.event.EventService','org.scijava.event.ContextDisposingEvent','java.util.Arrays','java.util.Collections','org.scijava.log.LogService','Thread','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Context", null, null, 'org.scijava.Disposable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['strict'],'O',['serviceIndex','org.scijava.service.ServiceIndex','pluginIndex','org.scijava.plugin.PluginIndex','serviceHelper','org.scijava.service.ServiceHelper']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [1 | 2 | (C$.strict$() ? 4 : 0) ]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (mode) {
C$.c$$java_util_Collection$org_scijava_plugin_PluginIndex$Z$Z.apply(this, [C$.services$Z((mode & 1) == 0), C$.plugins$Z((mode & 2) == 0), (mode & 4) != 0, (mode & 8) != 0]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (empty) {
C$.c$$I.apply(this, [(empty ? 0 : 1) | 2]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z', function (noServices, noPlugins) {
C$.c$$I.apply(this, [(noServices ? 0 : 1) | (noPlugins ? 0 : 2)]);
}, 1);

Clazz.newMeth(C$, 'c$$ClassA', function (serviceClasses) {
C$.c$$java_util_Collection.apply(this, [C$.serviceClassList$ClassA(serviceClasses)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (serviceClasses) {
C$.c$$java_util_Collection$org_scijava_plugin_PluginIndex.apply(this, [serviceClasses, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection$Z', function (serviceClasses, strict) {
C$.c$$java_util_Collection$org_scijava_plugin_PluginIndex$Z.apply(this, [serviceClasses, null, strict]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_plugin_PluginIndex', function (pluginIndex) {
C$.c$$java_util_Collection$org_scijava_plugin_PluginIndex.apply(this, [C$.services$Z(false), pluginIndex]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection$org_scijava_plugin_PluginIndex', function (serviceClasses, pluginIndex) {
C$.c$$java_util_Collection$org_scijava_plugin_PluginIndex$Z.apply(this, [serviceClasses, pluginIndex, C$.strict$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection$org_scijava_plugin_PluginIndex$Z', function (serviceClasses, pluginIndex, strict) {
C$.c$$java_util_Collection$org_scijava_plugin_PluginIndex$Z$Z.apply(this, [serviceClasses, pluginIndex, strict, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection$org_scijava_plugin_PluginIndex$Z$Z', function (serviceClasses, pluginIndex, strict, deferred) {
;C$.$init$.apply(this);
this.serviceIndex=Clazz.new_($I$(1,1));
this.pluginIndex=pluginIndex == null  ? Clazz.new_($I$(2,1)) : pluginIndex;
this.pluginIndex.discover$();
this.setStrict$Z(strict);
if (deferred) {
this.serviceHelper=Clazz.new_($I$(3,1).c$$org_scijava_Context$java_util_Collection$Z,[this, serviceClasses, strict]);
} else if (!serviceClasses.isEmpty$()) {
var serviceHelper=Clazz.new_($I$(3,1).c$$org_scijava_Context$java_util_Collection$Z,[this, serviceClasses, strict]);
serviceHelper.loadServices$();
}}, 1);

Clazz.newMeth(C$, 'getServiceIndex$', function () {
return this.serviceIndex;
});

Clazz.newMeth(C$, 'getPluginIndex$', function () {
return this.pluginIndex;
});

Clazz.newMeth(C$, 'isStrict$', function () {
return this.strict;
});

Clazz.newMeth(C$, 'setStrict$Z', function (strict) {
this.strict=strict;
});

Clazz.newMeth(C$, 'service$Class', function (c) {
var service=this.getService$Class(c);
if (service == null ) {
throw Clazz.new_(Clazz.load('org.scijava.NoSuchServiceException').c$$S,["Service " + c.getName$() + " not found." ]);
}return service;
});

Clazz.newMeth(C$, 'service$S', function (className) {
var c=$I$(4).load$S$Z(className, false);
if (!Clazz.getClass($I$(5),['initialize$','registerEventHandlers$']).isAssignableFrom$Class(c)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a service class: " + c.getName$()]);
}var serviceClass=c;
return this.service$Class(serviceClass);
});

Clazz.newMeth(C$, 'getService$Class', function (c) {
return this.serviceIndex.getService$Class(c);
});

Clazz.newMeth(C$, 'getService$S', function (className) {
var c=$I$(4).load$S(className);
if (c == null ) return null;
if (!Clazz.getClass($I$(5),['initialize$','registerEventHandlers$']).isAssignableFrom$Class(c)) return null;
var serviceClass=c;
return this.getService$Class(serviceClass);
});

Clazz.newMeth(C$, 'inject$O', function (o) {
var query=Clazz.new_($I$(6,1));
query.put$TK$TV(Clazz.getClass($I$(7),['attrs','autoFill','callback','choices','columns','description','initializer','label','max','min','persist','persistKey','required','stepSize','style','type','validater','visibility']), Clazz.getClass($I$(8)));
query.put$TK$TV(Clazz.getClass($I$(9),['key']), Clazz.getClass($I$(10)));
$I$(11).cacheAnnotatedObjects$Class$org_scijava_util_Query(o.getClass$(), query);
var fields=p$1.getParameterFields$O.apply(this, [o]);
for (var f, $f = fields.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
p$1.inject$reflect_Field$O.apply(this, [f, o]);
}
p$1.subscribeToEvents$O.apply(this, [o]);
});

Clazz.newMeth(C$, 'isInjectable$Class', function (type) {
if (Clazz.getClass($I$(5),['initialize$','registerEventHandlers$']).isAssignableFrom$Class(type)) return true;
return Clazz.getClass(C$).isAssignableFrom$Class(type) && type.isInstance$O(this) ;
});

Clazz.newMeth(C$, 'dispose$', function () {
var eventService=this.getService$Class(Clazz.getClass($I$(12),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']));
if (eventService != null ) eventService.publish$TE(Clazz.new_($I$(13,1)));
var services=this.serviceIndex.getAll$();
for (var s=services.size$() - 1; s >= 0; s--) {
services.get$I(s).dispose$();
}
});

Clazz.newMeth(C$, 'serviceClassList$ClassA', function (serviceClasses) {
return serviceClasses != null  ? $I$(14).asList$TTA(serviceClasses) : $I$(14).asList$TTA([Clazz.getClass($I$(5),['initialize$','registerEventHandlers$'])]);
}, 1);

Clazz.newMeth(C$, 'getParameterFields$O', function (o) {
try {
return $I$(11).getAnnotatedFields$Class$Class(o.getClass$(), Clazz.getClass($I$(7),['attrs','autoFill','callback','choices','columns','description','initializer','label','max','min','persist','persistKey','required','stepSize','style','type','validater','visibility']));
} catch (t) {
p$1.handleSafely$Throwable.apply(this, [t]);
}
return $I$(15).emptyList$();
}, p$1);

Clazz.newMeth(C$, 'inject$reflect_Field$O', function (f, o) {
try {
f.setAccessible$Z(true);
var type=f.getType$();
if (Clazz.getClass($I$(5),['initialize$','registerEventHandlers$']).isAssignableFrom$Class(type)) {
var existingService=$I$(11).getValue$reflect_Field$O(f, o);
if (this.strict && existingService != null  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Service already injected: " + f.getDeclaringClass$().getName$() + "#" + f.getName$() ]);
}var serviceType=type;
var service=this.getService$Class(serviceType);
if (service == null  && f.getAnnotation$Class(Clazz.getClass($I$(7),['attrs','autoFill','callback','choices','columns','description','initializer','label','max','min','persist','persistKey','required','stepSize','style','type','validater','visibility'])).required$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[p$1.createMissingServiceMessage$Class.apply(this, [serviceType])]);
}if (existingService != null  && existingService !== service  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Mismatched context: " + f.getDeclaringClass$().getName$() + "#" + f.getName$() ]);
}$I$(11).setValue$reflect_Field$O$O(f, o, service);
} else if (Clazz.getClass(C$).isAssignableFrom$Class(type) && type.isInstance$O(this) ) {
var existingContext=$I$(11).getValue$reflect_Field$O(f, o);
if (this.strict && existingContext != null  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Context already injected: " + f.getDeclaringClass$().getName$() + "#" + f.getName$() + " " + o.getClass$().getName$() ]);
}if (existingContext != null  && existingContext !== this  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Mismatched context: " + f.getDeclaringClass$().getName$() + "#" + f.getName$() ]);
}$I$(11).setValue$reflect_Field$O$O(f, o, this);
} else if (!type.isPrimitive$()) {
var value=$I$(11).getValue$reflect_Field$O(f, o);
if (value != null ) this.inject$O(value);
} else {
}} catch (t) {
p$1.handleSafely$Throwable.apply(this, [t]);
}
}, p$1);

Clazz.newMeth(C$, 'subscribeToEvents$O', function (o) {
try {
var eventService=this.getService$Class(Clazz.getClass($I$(12),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']));
if (eventService != null ) eventService.subscribe$O(o);
} catch (t) {
p$1.handleSafely$Throwable.apply(this, [t]);
}
}, p$1);

Clazz.newMeth(C$, 'handleSafely$Throwable', function (t) {
if (this.isStrict$()) {
if (Clazz.instanceOf(t, "java.lang.RuntimeException")) throw t;
if (Clazz.instanceOf(t, "java.lang.Error")) throw t;
}var log=this.getService$Class(Clazz.getClass($I$(16),['setLevel$I','setLevel$S$I','setLevelForLogger$S$I']));
if (log != null ) log.error$Throwable(t);
}, p$1);

Clazz.newMeth(C$, 'createMissingServiceMessage$Class', function (serviceType) {
var nl=System.getProperty$S("line.separator");
var classLoader=$I$(17).currentThread$().getContextClassLoader$();
var msg=Clazz.new_($I$(18,1).c$$S,["Required service is missing: " + serviceType.getName$() + nl ]);
msg.append$S("Context: " + this + nl );
msg.append$S("ClassLoader: " + classLoader + nl );
msg.append$S(nl + "-- Services known to context --" + nl );
for (var knownService, $knownService = this.serviceIndex.getAll$().iterator$(); $knownService.hasNext$()&&((knownService=($knownService.next$())),1);) {
msg.append$S(knownService + nl);
}
msg.append$S(nl + "-- Classpath of ClassLoader --" + nl );
if (Clazz.instanceOf(classLoader, "java.net.URLClassLoader")) {
for (var url, $url = 0, $$url = (classLoader).getURLs$(); $url<$$url.length&&((url=($$url[$url])),1);$url++) {
msg.append$S(url.getPath$() + nl);
}
} else {
msg.append$S("ClassLoader was not a URLClassLoader. Could not print classpath.");
}return msg.toString();
}, p$1);

Clazz.newMeth(C$, 'plugins$Z', function (empty) {
return empty ? Clazz.new_($I$(2,1).c$$org_scijava_plugin_PluginFinder,[null]) : null;
}, 1);

Clazz.newMeth(C$, 'services$Z', function (empty) {
if (empty) return $I$(15).emptyList$();
return $I$(14).asList$TTA([Clazz.getClass($I$(5),['initialize$','registerEventHandlers$'])]);
}, 1);

Clazz.newMeth(C$, 'strict$', function () {
return !"false".equals$O(System.getProperty$S("scijava.context.strict"));
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
