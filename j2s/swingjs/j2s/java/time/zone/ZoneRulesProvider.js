(function(){var P$=Clazz.newPackage("java.time.zone"),I$=[[0,'java.util.concurrent.CopyOnWriteArrayList','java.util.concurrent.ConcurrentHashMap','java.util.ArrayList','java.security.AccessController','java.time.zone.ZoneRulesProvider','Error','java.time.zone.TzdbZoneRulesProvider','java.util.ServiceLoader','java.util.HashSet','java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ZoneRulesProvider");
C$.PROVIDERS=null;
C$.ZONES=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.PROVIDERS=Clazz.new_($I$(1,1));
C$.ZONES=Clazz.new_($I$(2,1).c$$I$F$I,[512, 0.75, 2]);
{
var loaded=Clazz.new_($I$(3,1));
$I$(4).doPrivileged$java_security_PrivilegedAction(((P$.ZoneRulesProvider$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ZoneRulesProvider$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var prop=System.getProperty$S("java.time.zone.DefaultZoneRulesProvider");
if (prop != null ) {
try {
var c=Clazz.forName(prop, true, ClassLoader.getSystemClassLoader$());
var provider=Clazz.getClass($I$(5)).cast$O(c.newInstance$());
P$.ZoneRulesProvider.registerProvider$java_time_zone_ZoneRulesProvider(provider);
loaded.add$TE(provider);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
throw Clazz.new_($I$(6,1).c$$Throwable,[x]);
} else {
throw x;
}
}
} else {
P$.ZoneRulesProvider.registerProvider$java_time_zone_ZoneRulesProvider(Clazz.new_($I$(7,1)));
}return null;
});
})()
), Clazz.new_(P$.ZoneRulesProvider$1.$init$, [this, null])));
var sl=$I$(8).load$Class$ClassLoader(Clazz.getClass(C$), ClassLoader.getSystemClassLoader$());
var it=sl.iterator$();
while (it.hasNext$()){
var provider;
try {
provider=it.next$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.util.ServiceConfigurationError")){
if (Clazz.instanceOf(ex.getCause$(), "java.lang.SecurityException")) {
continue;
}throw ex;
} else {
throw ex;
}
}
var found=false;
for (var p, $p = loaded.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.getClass$() === provider.getClass$() ) {
found=true;
}}
if (!found) {
C$.registerProvider0$java_time_zone_ZoneRulesProvider(provider);
loaded.add$TE(provider);
}}
C$.PROVIDERS.addAll$java_util_Collection(loaded);
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAvailableZoneIds$', function () {
return Clazz.new_($I$(9,1).c$$java_util_Collection,[C$.ZONES.keySet$()]);
}, 1);

Clazz.newMeth(C$, 'getRules$S$Z', function (zoneId, forCaching) {
$I$(10).requireNonNull$TT$S(zoneId, "zoneId");
return C$.getProvider$S(zoneId).provideRules$S$Z(zoneId, forCaching);
}, 1);

Clazz.newMeth(C$, 'getVersions$S', function (zoneId) {
$I$(10).requireNonNull$TT$S(zoneId, "zoneId");
return C$.getProvider$S(zoneId).provideVersions$S(zoneId);
}, 1);

Clazz.newMeth(C$, 'getProvider$S', function (zoneId) {
var provider=C$.ZONES.get$O(zoneId);
if (provider == null ) {
if (C$.ZONES.isEmpty$()) {
throw Clazz.new_(Clazz.load('java.time.zone.ZoneRulesException').c$$S,["No time-zone data files registered"]);
}throw Clazz.new_(Clazz.load('java.time.zone.ZoneRulesException').c$$S,["Unknown time-zone ID: " + zoneId]);
}return provider;
}, 1);

Clazz.newMeth(C$, 'registerProvider$java_time_zone_ZoneRulesProvider', function (provider) {
$I$(10).requireNonNull$TT$S(provider, "provider");
C$.registerProvider0$java_time_zone_ZoneRulesProvider(provider);
C$.PROVIDERS.add$TE(provider);
}, 1);

Clazz.newMeth(C$, 'registerProvider0$java_time_zone_ZoneRulesProvider', function (provider) {
for (var zoneId, $zoneId = provider.provideZoneIds$().iterator$(); $zoneId.hasNext$()&&((zoneId=($zoneId.next$())),1);) {
$I$(10).requireNonNull$TT$S(zoneId, "zoneId");
var old=C$.ZONES.putIfAbsent$TK$TV(zoneId, provider);
if (old != null ) {
throw Clazz.new_(Clazz.load('java.time.zone.ZoneRulesException').c$$S,["Unable to register zone as one already registered with that ID: " + zoneId + ", currently loading from provider: " + provider ]);
}}
}, 1);

Clazz.newMeth(C$, 'refresh$', function () {
var changed=false;
for (var provider, $provider = C$.PROVIDERS.iterator$(); $provider.hasNext$()&&((provider=($provider.next$())),1);) {
changed|=provider.provideRefresh$();
}
return changed;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'provideRefresh$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:59 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
