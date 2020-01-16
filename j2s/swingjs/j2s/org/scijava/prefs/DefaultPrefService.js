(function(){var P$=Clazz.newPackage("org.scijava.prefs"),p$1={},p$2={},p$3={},I$=[[0,'java.util.HashMap','java.util.ArrayList','org.scijava.prefs.PrefService',['org.scijava.prefs.DefaultPrefService','.SmartPrefs'],'java.util.prefs.Preferences']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultPrefService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.prefs.AbstractPrefService');
C$.$classes$=[['SmartPrefs',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'get$Class$S$S', function (c, name, defaultValue) {
return p$3.prefs$Class.apply(this, [c]).get$S$S(name, defaultValue);
});

Clazz.newMeth(C$, 'getBoolean$Class$S$Z', function (c, name, defaultValue) {
return p$3.prefs$Class.apply(this, [c]).getBoolean$S$Z(name, defaultValue);
});

Clazz.newMeth(C$, 'getDouble$Class$S$D', function (c, name, defaultValue) {
return p$3.prefs$Class.apply(this, [c]).getDouble$S$D(name, defaultValue);
});

Clazz.newMeth(C$, 'getFloat$Class$S$F', function (c, name, defaultValue) {
return p$3.prefs$Class.apply(this, [c]).getFloat$S$F(name, defaultValue);
});

Clazz.newMeth(C$, 'getInt$Class$S$I', function (c, name, defaultValue) {
return p$3.prefs$Class.apply(this, [c]).getInt$S$I(name, defaultValue);
});

Clazz.newMeth(C$, 'getLong$Class$S$J', function (c, name, defaultValue) {
return p$3.prefs$Class.apply(this, [c]).getLong$S$J(name, defaultValue);
});

Clazz.newMeth(C$, 'getMap$Class$S', function (c, name) {
return p$3.prefs$Class.apply(this, [c]).node$S(name).getMap$();
});

Clazz.newMeth(C$, 'getList$Class$S', function (c, name) {
return p$3.prefs$Class.apply(this, [c]).node$S(name).getList$();
});

Clazz.newMeth(C$, 'put$Class$S$S', function (c, name, value) {
p$3.prefs$Class.apply(this, [c]).put$S$O(name, value);
});

Clazz.newMeth(C$, 'put$Class$S$Z', function (c, name, value) {
p$3.prefs$Class.apply(this, [c]).putBoolean$S$Z(name, value);
});

Clazz.newMeth(C$, 'put$Class$S$D', function (c, name, value) {
p$3.prefs$Class.apply(this, [c]).putDouble$S$D(name, value);
});

Clazz.newMeth(C$, 'put$Class$S$F', function (c, name, value) {
p$3.prefs$Class.apply(this, [c]).putFloat$S$F(name, value);
});

Clazz.newMeth(C$, 'put$Class$S$I', function (c, name, value) {
p$3.prefs$Class.apply(this, [c]).putInt$S$I(name, value);
});

Clazz.newMeth(C$, 'put$Class$S$J', function (c, name, value) {
p$3.prefs$Class.apply(this, [c]).putLong$S$J(name, value);
});

Clazz.newMeth(C$, 'put$Class$S$java_util_Map', function (c, name, value) {
p$3.prefs$Class.apply(this, [c]).node$S(name).putMap$java_util_Map(value);
});

Clazz.newMeth(C$, 'put$Class$S$Iterable', function (c, name, value) {
p$3.prefs$Class.apply(this, [c]).node$S(name).putList$Iterable(value);
});

Clazz.newMeth(C$, 'remove$Class$S', function (c, name) {
p$3.prefs$Class.apply(this, [c]).remove$S(name);
});

Clazz.newMeth(C$, 'clear$Class', function (c) {
p$3.prefs$Class.apply(this, [c]).removeNode$();
});

Clazz.newMeth(C$, 'clearAll$', function () {
for (var name, $name = 0, $$name = p$3.allPrefs.apply(this, []); $name<$$name.length&&((name=($$name[$name])),1);$name++) p$3.prefs$S.apply(this, [name]).removeNode$();

});

Clazz.newMeth(C$, 'putMap$Class$java_util_Map', function (c, map) {
p$3.prefs$Class.apply(this, [c]).putMap$java_util_Map(map);
});

Clazz.newMeth(C$, 'getMap$Class', function (c) {
return p$3.prefs$Class.apply(this, [c]).getMap$();
});

Clazz.newMeth(C$, 'putList$Class$java_util_List', function (c, list) {
p$3.prefs$Class.apply(this, [c]).putList$Iterable(list);
});

Clazz.newMeth(C$, 'getList$Class', function (c) {
return p$3.prefs$Class.apply(this, [c]).getList$();
});

Clazz.newMeth(C$, 'getIterable$Class$S', function (c, name) {
return p$3.prefs$Class.apply(this, [c]).node$S(name).getIterable$();
});

Clazz.newMeth(C$, 'clear$S$S', function (absolutePath, key) {
p$3.prefs$S.apply(this, [absolutePath]).clear$S(key);
});

Clazz.newMeth(C$, 'remove$S$S', function (absolutePath, key) {
p$3.prefs$S.apply(this, [absolutePath]).remove$S(key);
});

Clazz.newMeth(C$, 'putMap$S$java_util_Map$S', function (absolutePath, map, key) {
p$3.prefs$S.apply(this, [absolutePath]).node$S(key).putMap$java_util_Map(map);
});

Clazz.newMeth(C$, 'putMap$S$java_util_Map', function (absolutePath, map) {
p$3.prefs$S.apply(this, [absolutePath]).putMap$java_util_Map(map);
});

Clazz.newMeth(C$, 'getMap$S$S', function (absolutePath, key) {
return p$3.prefs$S.apply(this, [absolutePath]).node$S(key).getMap$();
});

Clazz.newMeth(C$, 'putList$S$java_util_List$S', function (absolutePath, list, key) {
p$3.prefs$S.apply(this, [absolutePath]).node$S(key).putList$Iterable(list);
});

Clazz.newMeth(C$, 'putList$S$java_util_List', function (absolutePath, list) {
p$3.prefs$S.apply(this, [absolutePath]).putList$Iterable(list);
});

Clazz.newMeth(C$, 'getList$S$S', function (absolutePath, key) {
return p$3.prefs$S.apply(this, [absolutePath]).node$S(key).getList$();
});

Clazz.newMeth(C$, 'clear$Class$S', function (c, name) {
p$3.prefs$Class.apply(this, [c]).clear$S(name);
});

Clazz.newMeth(C$, 'prefs$Class', function (c) {
var nodeClass=c == null  ? Clazz.getClass($I$(3),['clear$Class','clear$S','clear$S$S','clear$Class$S','clearAll$','get$Class$S','get$Class$S$S','get$S','get$S$S','getBoolean$Class$S$Z','getBoolean$S$Z','getDouble$Class$S$D','getDouble$S$D','getFloat$Class$S$F','getFloat$S$F','getInt$Class$S$I','getInt$S$I','getIterable$Class$S','getIterable$S','getList$Class$S','getList$Class','getList$S','getList$S$S','getLong$Class$S$J','getLong$S$J','getMap$Class$S','getMap$Class','getMap$S','getMap$S$S','put$Class$S$S','put$Class$S$Z','put$Class$S$D','put$Class$S$F','put$Class$S$I','put$Class$S$J','put$Class$S$java_util_Map','put$Class$S$Iterable','put$S$S','put$S$Z','put$S$D','put$S$F','put$S$I','put$S$J','putIterable$Class$Iterable$S','putIterable$Iterable$S','putList$Class$java_util_List$S','putList$Class$java_util_List','putList$java_util_List$S','putList$S$java_util_List$S','putList$S$java_util_List','putMap$Class$java_util_Map$S','putMap$Class$java_util_Map','putMap$java_util_Map$S','putMap$S$java_util_Map','putMap$S$java_util_Map$S','remove$Class$S','remove$S$S']) : c;
return Clazz.new_($I$(4,1).c$$java_util_prefs_Preferences$org_scijava_log_LogService,[$I$(5).userNodeForPackage$Class(nodeClass).node$S(nodeClass.getSimpleName$()), this.log]);
}, p$3);

Clazz.newMeth(C$, 'prefs$S', function (absolutePath) {
return Clazz.new_($I$(4,1).c$$java_util_prefs_Preferences$org_scijava_log_LogService,[$I$(5).userRoot$().node$S(absolutePath), this.log]);
}, p$3);

Clazz.newMeth(C$, 'allPrefs', function () {
try {
return $I$(5).userRoot$().childrenNames$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.prefs.BackingStoreException")){
if (this.log != null ) this.log.error$Throwable(exc);
return Clazz.array(String, [0]);
} else {
throw exc;
}
}
}, p$3);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.prefs.DefaultPrefService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultPrefService, "SmartPrefs", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['p','java.util.prefs.Preferences','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$java_util_prefs_Preferences$org_scijava_log_LogService', function (p, log) {
;C$.$init$.apply(this);
this.p=p;
this.log=log;
}, 1);

Clazz.newMeth(C$, 'remove$S', function (key) {
if (this.nodeExists$S(key)) this.node$S(key).removeNode$();
this.p.remove$S(p$1.safeKey$S.apply(this, [key]));
});

Clazz.newMeth(C$, 'putMap$java_util_Map', function (map) {
var iter=map.entrySet$().iterator$();
while (iter.hasNext$()){
var entry=iter.next$();
var key=entry.getKey$().toString();
var value=entry.getValue$();
this.put$S$O(key, value);
}
});

Clazz.newMeth(C$, 'getMap$', function () {
var map=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
var keys=this.keys$();
for (var index=0; index < keys.length; index++) {
map.put$TK$TV(keys[index], this.get$S(keys[index]));
}
return map;
});

Clazz.newMeth(C$, 'putList$Iterable', function (list) {
var index=0;
for (var value, $value = list.iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
this.put$S$O("" + index++, value);
}
});

Clazz.newMeth(C$, 'getList$', function () {
var list=Clazz.new_(1,{E:"String"},$I$(2,1));
for (var index=0; index < 2147483647; index++) {
var value=this.get$S("" + index);
if (value == null ) break;
list.add$TE(value);
}
return list;
});

Clazz.newMeth(C$, 'getIterable$', function () {
return ((P$.DefaultPrefService$SmartPrefs$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultPrefService$SmartPrefs$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Iterable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.DefaultPrefService$SmartPrefs$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultPrefService$SmartPrefs$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
{
p$2.findNext.apply(this, []);
}
}, 1);

C$.$fields$=[['I',['index'],'S',['value']]]

Clazz.newMeth(C$, 'next$', function () {
var result=this.value;
p$2.findNext.apply(this, []);
return result;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.value != null ;
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'findNext', function () {
if (this.index < 0) return;
this.value=this.b$['org.scijava.prefs.DefaultPrefService.SmartPrefs'].get$S.apply(this.b$['org.scijava.prefs.DefaultPrefService.SmartPrefs'], ["" + this.index]);
this.index=this.value == null  ? -1 : this.index + 1;
}, p$2);
})()
), Clazz.new_(P$.DefaultPrefService$SmartPrefs$1$1.$init$, [this, null]));
});
})()
), Clazz.new_(P$.DefaultPrefService$SmartPrefs$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'put$S$O', function (key, value) {
this.p.put$S$S(p$1.safeKey$S.apply(this, [key]), p$1.safeValue$O.apply(this, [value]));
});

Clazz.newMeth(C$, 'get$S', function (key) {
return this.get$S$S(key, null);
});

Clazz.newMeth(C$, 'get$S$S', function (key, def) {
return this.p.get$S$S(p$1.safeKey$S.apply(this, [key]), def);
});

Clazz.newMeth(C$, 'clear$', function () {
try {
this.p.clear$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.prefs.BackingStoreException")){
if (this.log != null ) this.log.error$Throwable(exc);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'putInt$S$I', function (key, value) {
this.p.putInt$S$I(p$1.safeKey$S.apply(this, [key]), value);
});

Clazz.newMeth(C$, 'getInt$S$I', function (key, def) {
return this.p.getInt$S$I(p$1.safeKey$S.apply(this, [key]), def);
});

Clazz.newMeth(C$, 'putLong$S$J', function (key, value) {
this.p.putLong$S$J(p$1.safeKey$S.apply(this, [key]), value);
});

Clazz.newMeth(C$, 'getLong$S$J', function (key, def) {
return this.p.getLong$S$J(p$1.safeKey$S.apply(this, [key]), def);
});

Clazz.newMeth(C$, 'putBoolean$S$Z', function (key, value) {
this.p.putBoolean$S$Z(p$1.safeKey$S.apply(this, [key]), value);
});

Clazz.newMeth(C$, 'getBoolean$S$Z', function (key, def) {
return this.p.getBoolean$S$Z(p$1.safeKey$S.apply(this, [key]), def);
});

Clazz.newMeth(C$, 'putFloat$S$F', function (key, value) {
this.p.putFloat$S$F(p$1.safeKey$S.apply(this, [key]), value);
});

Clazz.newMeth(C$, 'getFloat$S$F', function (key, def) {
return this.p.getFloat$S$F(p$1.safeKey$S.apply(this, [key]), def);
});

Clazz.newMeth(C$, 'putDouble$S$D', function (key, value) {
this.p.putDouble$S$D(p$1.safeKey$S.apply(this, [key]), value);
});

Clazz.newMeth(C$, 'getDouble$S$D', function (key, def) {
return this.p.getDouble$S$D(p$1.safeKey$S.apply(this, [key]), def);
});

Clazz.newMeth(C$, 'keys$', function () {
try {
var keys=this.p.keys$();
for (var i=0; i < keys.length; i++) {
keys[i]=p$1.safeKey$S.apply(this, [keys[i]]);
}
return keys;
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.prefs.BackingStoreException")){
if (this.log != null ) this.log.error$Throwable(exc);
return Clazz.array(String, [0]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'node$S', function (pathName) {
return Clazz.new_(C$.c$$java_util_prefs_Preferences$org_scijava_log_LogService,[this.p.node$S(p$1.safeName$S.apply(this, [pathName])), this.log]);
});

Clazz.newMeth(C$, 'nodeExists$S', function (pathName) {
try {
return this.p.nodeExists$S(p$1.safeName$S.apply(this, [pathName]));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.prefs.BackingStoreException")){
if (this.log != null ) this.log.error$Throwable(exc);
return false;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'removeNode$', function () {
try {
this.p.removeNode$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.prefs.BackingStoreException")){
if (this.log != null ) this.log.error$Throwable(exc);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'safeKey$S', function (key) {
return p$1.makeSafe$S$I.apply(this, [key, 80]);
}, p$1);

Clazz.newMeth(C$, 'safeValue$O', function (value) {
if (value == null ) return null;
return p$1.makeSafe$S$I.apply(this, [value.toString(), 8192]);
}, p$1);

Clazz.newMeth(C$, 'safeName$S', function (name) {
return p$1.makeSafe$S$I.apply(this, [name, 80]);
}, p$1);

Clazz.newMeth(C$, 'makeSafe$S$I', function (s, max) {
if (s == null ) return "";
var len=s.length$();
if (len < max) return s;
return "..." + s.substring$I$I(len - max + 3, len);
}, p$1);

Clazz.newMeth(C$, 'clear$S', function (key) {
if (this.nodeExists$S(key)) this.node$S(key).clear$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
