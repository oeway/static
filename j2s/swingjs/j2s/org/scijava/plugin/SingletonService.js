(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[[0,'org.scijava.object.ObjectService','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "SingletonService", null, null, 'org.scijava.plugin.PTService');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'objectService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(1),['addObject$O','eventService$','getEventService$','getIndex$','getObjects$Class','removeObject$O']));
});

Clazz.newMeth(C$, 'filterInstances$java_util_List', function (list) {
return list;
});

Clazz.newMeth(C$, 'create$Class', function (pluginClass) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Cannot create singleton plugin instance. Use getInstance(Class) instead."]);
});

Clazz.newMeth(C$, 'initialize$', function () {
this.objectService$().getIndex$().addLater$org_scijava_object_LazyObjects((P$.SingletonService$lambda1$||(P$.SingletonService$lambda1$=(((P$.SingletonService$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "SingletonService$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.scijava.object.LazyObjects', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (Clazz.new_(1,{E:"java.lang.Object"},$I$(2,1).c$$java_util_Collection,[this.b$['org.scijava.plugin.SingletonService'].getInstances$.apply(this.b$['org.scijava.plugin.SingletonService'], [])]));});
})()
), Clazz.new_(1,{T:"? extends java.lang.Object"},P$.SingletonService$lambda1.$init$, [this, null]))))));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
