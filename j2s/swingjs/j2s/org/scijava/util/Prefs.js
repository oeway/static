(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.prefs.DefaultPrefService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Prefs");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.servicePriority=4.9E-324;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['D',['servicePriority'],'O',['prefService','org.scijava.prefs.PrefService','+prefServiceNoContext']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$S', function (name) {
return C$.service$().get$S(name);
}, 1);

Clazz.newMeth(C$, 'get$S$S', function (name, defaultValue) {
return C$.service$().get$S$S(name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getBoolean$S$Z', function (name, defaultValue) {
return C$.service$().getBoolean$S$Z(name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getDouble$S$D', function (name, defaultValue) {
return C$.service$().getDouble$S$D(name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getFloat$S$F', function (name, defaultValue) {
return C$.service$().getFloat$S$F(name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getInt$S$I', function (name, defaultValue) {
return C$.service$().getInt$S$I(name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getLong$S$J', function (name, defaultValue) {
return C$.service$().getLong$S$J(name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'put$S$S', function (name, value) {
C$.service$().put$S$S(name, value);
}, 1);

Clazz.newMeth(C$, 'put$S$Z', function (name, value) {
C$.service$().put$S$Z(name, value);
}, 1);

Clazz.newMeth(C$, 'put$S$D', function (name, value) {
C$.service$().put$S$D(name, value);
}, 1);

Clazz.newMeth(C$, 'put$S$F', function (name, value) {
C$.service$().put$S$F(name, value);
}, 1);

Clazz.newMeth(C$, 'put$S$I', function (name, value) {
C$.service$().put$S$I(name, value);
}, 1);

Clazz.newMeth(C$, 'put$S$J', function (name, value) {
C$.service$().put$S$J(name, value);
}, 1);

Clazz.newMeth(C$, 'get$Class$S', function (c, name) {
return C$.service$().get$Class$S(c, name);
}, 1);

Clazz.newMeth(C$, 'get$Class$S$S', function (c, name, defaultValue) {
return C$.service$().get$Class$S$S(c, name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getBoolean$Class$S$Z', function (c, name, defaultValue) {
return C$.service$().getBoolean$Class$S$Z(c, name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getDouble$Class$S$D', function (c, name, defaultValue) {
return C$.service$().getDouble$Class$S$D(c, name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getFloat$Class$S$F', function (c, name, defaultValue) {
return C$.service$().getFloat$Class$S$F(c, name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getInt$Class$S$I', function (c, name, defaultValue) {
return C$.service$().getInt$Class$S$I(c, name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getLong$Class$S$J', function (c, name, defaultValue) {
return C$.service$().getLong$Class$S$J(c, name, defaultValue);
}, 1);

Clazz.newMeth(C$, 'put$Class$S$S', function (c, name, value) {
C$.service$().put$Class$S$S(c, name, value);
}, 1);

Clazz.newMeth(C$, 'put$Class$S$Z', function (c, name, value) {
C$.service$().put$Class$S$Z(c, name, value);
}, 1);

Clazz.newMeth(C$, 'put$Class$S$D', function (c, name, value) {
C$.service$().put$Class$S$D(c, name, value);
}, 1);

Clazz.newMeth(C$, 'put$Class$S$F', function (c, name, value) {
C$.service$().put$Class$S$F(c, name, value);
}, 1);

Clazz.newMeth(C$, 'put$Class$S$I', function (c, name, value) {
C$.service$().put$Class$S$I(c, name, value);
}, 1);

Clazz.newMeth(C$, 'put$Class$S$J', function (c, name, value) {
C$.service$().put$Class$S$J(c, name, value);
}, 1);

Clazz.newMeth(C$, 'clear$Class', function (c) {
C$.service$().clear$Class(c);
}, 1);

Clazz.newMeth(C$, 'clearAll$', function () {
C$.service$().clearAll$();
}, 1);

Clazz.newMeth(C$, 'clear$S', function (key) {
C$.service$().clear$S(key);
}, 1);

Clazz.newMeth(C$, 'clear$java_util_prefs_Preferences$S', function (preferences, key) {
C$.service$().clear$S$S(preferences.absolutePath$(), key);
}, 1);

Clazz.newMeth(C$, 'remove$java_util_prefs_Preferences$S', function (preferences, key) {
C$.service$().remove$S$S(preferences.absolutePath$(), key);
}, 1);

Clazz.newMeth(C$, 'putMap$java_util_Map$S', function (map, key) {
C$.service$().putMap$java_util_Map$S(map, key);
}, 1);

Clazz.newMeth(C$, 'putMap$java_util_prefs_Preferences$java_util_Map$S', function (preferences, map, key) {
C$.service$().putMap$S$java_util_Map$S(preferences.absolutePath$(), map, key);
}, 1);

Clazz.newMeth(C$, 'putMap$java_util_prefs_Preferences$java_util_Map', function (preferences, map) {
C$.service$().putMap$S$java_util_Map(preferences.absolutePath$(), map);
}, 1);

Clazz.newMeth(C$, 'getMap$S', function (key) {
return C$.service$().getMap$S(key);
}, 1);

Clazz.newMeth(C$, 'getMap$java_util_prefs_Preferences$S', function (preferences, key) {
return C$.service$().getMap$S$S(preferences.absolutePath$(), key);
}, 1);

Clazz.newMeth(C$, 'getMap$java_util_prefs_Preferences', function (preferences) {
return C$.service$().getMap$S(preferences.absolutePath$());
}, 1);

Clazz.newMeth(C$, 'putList$java_util_List$S', function (list, key) {
C$.service$().putList$java_util_List$S(list, key);
}, 1);

Clazz.newMeth(C$, 'putList$java_util_prefs_Preferences$java_util_List$S', function (preferences, list, key) {
C$.service$().putList$S$java_util_List$S(preferences.absolutePath$(), list, key);
}, 1);

Clazz.newMeth(C$, 'putList$java_util_prefs_Preferences$java_util_List', function (preferences, list) {
C$.service$().putList$S$java_util_List(preferences.absolutePath$(), list);
}, 1);

Clazz.newMeth(C$, 'getList$S', function (key) {
return C$.service$().getList$S(key);
}, 1);

Clazz.newMeth(C$, 'getList$java_util_prefs_Preferences$S', function (preferences, key) {
return C$.service$().getList$S$S(preferences.absolutePath$(), key);
}, 1);

Clazz.newMeth(C$, 'getList$java_util_prefs_Preferences', function (preferences) {
return C$.service$().getList$S(preferences.absolutePath$());
}, 1);

Clazz.newMeth(C$, 'setDelegateService$org_scijava_prefs_PrefService$D', function (prefService, priority) {
if (Double.compare$D$D(priority, C$.servicePriority) > 0) {
C$.prefService=prefService;
C$.servicePriority=priority;
}}, 1);

Clazz.newMeth(C$, 'service$', function () {
if (C$.prefService != null ) return C$.prefService;
if (C$.prefServiceNoContext == null ) C$.prefServiceNoContext=Clazz.new_($I$(1,1));
return C$.prefServiceNoContext;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
