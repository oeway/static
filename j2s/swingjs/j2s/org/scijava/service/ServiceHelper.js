(function(){var P$=Clazz.newPackage("org.scijava.service"),p$1={},I$=[[0,'org.scijava.log.LogService','org.scijava.log.StderrLogService','java.util.HashMap','java.util.ArrayList','org.scijava.event.EventService','org.scijava.service.event.ServicesLoadedEvent','org.scijava.util.ClassUtils','org.scijava.plugin.Parameter','org.scijava.service.Service','org.scijava.event.EventHandler','org.scijava.Optional']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ServiceHelper", null, 'org.scijava.AbstractContextual');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['strict'],'O',['log','org.scijava.log.LogService','classPoolMap','java.util.Map','classPoolList','java.util.List','+serviceClasses']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
C$.c$$org_scijava_Context$java_util_Collection.apply(this, [context, null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_util_Collection', function (context, serviceClasses) {
C$.c$$org_scijava_Context$java_util_Collection$Z.apply(this, [context, serviceClasses, true]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_util_Collection$Z', function (context, serviceClasses, strict) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
this.log=context.getService$Class(Clazz.getClass($I$(1),['setLevel$I','setLevel$S$I','setLevelForLogger$S$I']));
if (this.log == null ) this.log=Clazz.new_($I$(2,1));
this.classPoolMap=Clazz.new_(1,{K:"Class",V:"Double"},$I$(3,1));
this.classPoolList=Clazz.new_(1,{E:"Class"},$I$(4,1));
p$1.findServiceClasses$java_util_Map$java_util_List.apply(this, [this.classPoolMap, this.classPoolList]);
System.out.println$S("ServiceHelper found " + this.classPoolList.size$() + " classes" );
if (this.classPoolList.isEmpty$()) {
this.log.warn$O("Class pool is empty: forgot to call Thread#setClassLoader?");
}this.serviceClasses=Clazz.new_(1,{E:"Class"},$I$(4,1));
if (serviceClasses == null ) {
this.serviceClasses.addAll$java_util_Collection(this.classPoolList);
} else {
this.serviceClasses.addAll$java_util_Collection(serviceClasses);
}this.strict=strict;
}, 1);

Clazz.newMeth(C$, 'loadServices$', function () {
for (var serviceClass, $serviceClass = this.serviceClasses.iterator$(); $serviceClass.hasNext$()&&((serviceClass=($serviceClass.next$())),1);) {
for (var c, $c = this.classPoolList.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (serviceClass.isAssignableFrom$Class(c)) this.loadService$Class(c);
}
this.loadService$Class(serviceClass);
if (Clazz.getClass($I$(1),['setLevel$I','setLevel$S$I','setLevelForLogger$S$I']).isAssignableFrom$Class(serviceClass)) {
var logService=this.context$().getService$Class(Clazz.getClass($I$(1),['setLevel$I','setLevel$S$I','setLevelForLogger$S$I']));
if (logService != null ) this.log=logService;
}}
var eventService=this.context$().getService$Class(Clazz.getClass($I$(5),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']));
if (eventService != null ) {
eventService.publishLater$TE(Clazz.new_($I$(6,1)));
}});

Clazz.newMeth(C$, 'loadServiceDeferred$Class', function (c) {
for (var serviceClass, $serviceClass = this.serviceClasses.iterator$(); $serviceClass.hasNext$()&&((serviceClass=($serviceClass.next$())),1);) {
if (serviceClass.isAssignableFrom$Class(c)) {
this.loadService$Class(c);
this.loadService$Class(serviceClass);
}}
});

Clazz.newMeth(C$, 'loadService$Class', function (c) {
return p$1.loadService$Class$Z.apply(this, [c, !p$1.isOptional$Class.apply(this, [c])]);
});

Clazz.newMeth(C$, 'createExactService$Class', function (c) {
return p$1.createExactService$Class$Z.apply(this, [c, false]);
});

Clazz.newMeth(C$, 'loadService$Class$Z', function (c, required) {
var service=this.context$().getService$Class(c);
if (service != null ) return service;
for (var serviceClass, $serviceClass = this.classPoolList.iterator$(); $serviceClass.hasNext$()&&((serviceClass=($serviceClass.next$())),1);) {
if (c.isAssignableFrom$Class(serviceClass)) {
var result=p$1.createExactService$Class$Z.apply(this, [serviceClass, required]);
if (required && result == null  ) {
var error="No match: " + serviceClass.getName$();
if (this.strict) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[error]);
this.log.error$O(error);
}return result;
}}
if (required && c.isInterface$() ) {
var error="No compatible service: " + c.getName$();
if (this.strict) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[error]);
this.log.error$O(error);
return null;
}return p$1.createExactService$Class$Z.apply(this, [c, required]);
}, p$1);

Clazz.newMeth(C$, 'createExactService$Class$Z', function (c, required) {
var name=c.getName$();
this.log.debug$O$Throwable("Creating service: " + name, null);
try {
var start=0;
var end=0;
var debug=this.log.isDebug$();
if (debug) start=System.currentTimeMillis$();
var service=p$1.createServiceRecursively$Class.apply(this, [c]);
this.context$().getServiceIndex$().add$TE(service);
service.initialize$();
service.registerEventHandlers$();
if (debug) {
end=System.currentTimeMillis$();
this.log.debug$O("Created service '" + name + "' in " + (end - start) + " ms" );
}return service;
} catch (t) {
if (required) {
t.printStackTrace$();
var error="Invalid service: " + name;
if (this.strict) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,[error, t]);
this.log.error$O$Throwable(error, t);
} else if (this.log.isDebug$()) {
this.log.debug$O$Throwable("Invalid service: " + name, t);
} else {
this.log.warn$O("Invalid service: " + name);
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'createServiceRecursively$Class', function (c) {
var service=c.newInstance$();
service.setContext$org_scijava_Context(this.getContext$());
var priority=this.classPoolMap.get$O(c);
if (priority != null ) service.setPriority$D((priority).valueOf());
var eventServiceRequired=true;
var fields=$I$(7).getAnnotatedFields$Class$Class(c, Clazz.getClass($I$(8),['attrs','autoFill','callback','choices','columns','description','initializer','label','max','min','persist','persistKey','required','stepSize','style','type','validater','visibility']));
for (var f, $f = fields.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
f.setAccessible$Z(true);
var type=f.getType$();
if (type.isAssignableFrom$Class(this.context$().getClass$())) {
$I$(7).setValue$reflect_Field$O$O(f, service, this.getContext$());
continue;
}if (!Clazz.getClass($I$(9),['initialize$','registerEventHandlers$']).isAssignableFrom$Class(type)) {
var error="Invalid parameter: " + f.getDeclaringClass$().getName$() + "#" + f.getName$() ;
if (this.strict) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[error]);
this.log.error$O(error);
continue;
}var serviceType=type;
var s=this.context$().getService$Class(serviceType);
if (s == null ) {
var required=f.getAnnotation$Class(Clazz.getClass($I$(8),['attrs','autoFill','callback','choices','columns','description','initializer','label','max','min','persist','persistKey','required','stepSize','style','type','validater','visibility'])).required$();
s=p$1.loadService$Class$Z.apply(this, [serviceType, required]);
if (Clazz.instanceOf(s, "org.scijava.event.EventService")) eventServiceRequired=required;
}$I$(7).setValue$reflect_Field$O$O(f, service, s);
}
if (!$I$(7).getAnnotatedMethods$Class$Class(c, Clazz.getClass($I$(10),['key'])).isEmpty$()) {
p$1.loadService$Class$Z.apply(this, [Clazz.getClass($I$(5),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']), eventServiceRequired]);
}return service;
}, p$1);

Clazz.newMeth(C$, 'findServiceClasses$java_util_Map$java_util_List', function (serviceMap, serviceList) {
var services=this.context$().getPluginIndex$().getPlugins$Class(Clazz.getClass($I$(9),['initialize$','registerEventHandlers$']));
System.out.println$S("ServiceHelper getPlugins returned " + services.size$());
for (var info, $info = services.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
try {
if (info.getClassName$() == null ) continue;
var c=info.loadClass$();
var priority=info.getPriority$();
serviceMap.put$TK$TV(c, new Double(priority));
serviceList.add$TE(c);
} catch (e) {
this.log.error$O$Throwable("Invalid service: " + info, e);
}
}
}, p$1);

Clazz.newMeth(C$, 'isOptional$Class', function (c) {
return Clazz.getClass($I$(11),[]).isAssignableFrom$Class(c);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
