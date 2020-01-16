(function(){var P$=Clazz.newPackage("org.scijava.cache"),I$=[[0,'java.util.WeakHashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultCacheService", null, 'org.scijava.service.AbstractService', 'org.scijava.cache.CacheService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['map','java.util.Map']]]

Clazz.newMeth(C$, 'put$O$O', function (key, value) {
this.map.put$TK$TV(key, value);
});

Clazz.newMeth(C$, 'get$O', function (key) {
return this.map.get$O(key);
});

Clazz.newMeth(C$, 'initialize$', function () {
this.map=Clazz.new_(1,{K:"java.lang.Object",V:"java.lang.Object"},$I$(1,1));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.cache.DefaultCacheService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" priority="-10000.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
