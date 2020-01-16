(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.util.WeakHashMap','org.apache.logging.log4j.spi.AbstractLogger',['org.apache.logging.log4j.spi.LoggerRegistry','.ConcurrentMapFactory'],'java.util.Objects','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LoggerRegistry", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DEFAULT_FACTORY_KEY=$I$(3).DEFAULT_MESSAGE_FACTORY_CLASS.getName$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['factory','org.apache.logging.log4j.spi.LoggerRegistry.MapFactory','map','java.util.Map']]
,['S',['DEFAULT_FACTORY_KEY']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_apache_logging_log4j_spi_LoggerRegistry_MapFactory.apply(this, [Clazz.new_(1,{T:"Object"},$I$(4,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_spi_LoggerRegistry_MapFactory', function (factory) {
;C$.$init$.apply(this);
this.factory=$I$(5).requireNonNull$TT$S(factory, "factory");
this.map=factory.createOuterMap$();
}, 1);

Clazz.newMeth(C$, 'factoryClassKey$Class', function (messageFactoryClass) {
return messageFactoryClass == null  ? C$.DEFAULT_FACTORY_KEY : messageFactoryClass.getName$();
}, 1);

Clazz.newMeth(C$, 'factoryKey$org_apache_logging_log4j_message_MessageFactory', function (messageFactory) {
return messageFactory == null  ? C$.DEFAULT_FACTORY_KEY : messageFactory.getClass$().getName$();
}, 1);

Clazz.newMeth(C$, 'getLogger$S', function (name) {
return p$1.getOrCreateInnerMap$S.apply(this, [C$.DEFAULT_FACTORY_KEY]).get$O(name);
});

Clazz.newMeth(C$, 'getLogger$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
return p$1.getOrCreateInnerMap$S.apply(this, [C$.factoryKey$org_apache_logging_log4j_message_MessageFactory(messageFactory)]).get$O(name);
});

Clazz.newMeth(C$, 'getLoggers$', function () {
return this.getLoggers$java_util_Collection(Clazz.new_(1,{E:"Object"},$I$(6,1)));
});

Clazz.newMeth(C$, 'getLoggers$java_util_Collection', function (destination) {
for (var inner, $inner = this.map.values$().iterator$(); $inner.hasNext$()&&((inner=($inner.next$())),1);) {
destination.addAll$java_util_Collection(inner.values$());
}
return destination;
});

Clazz.newMeth(C$, 'getOrCreateInnerMap$S', function (factoryName) {
var inner=this.map.get$O(factoryName);
if (inner == null ) {
inner=this.factory.createInnerMap$();
this.map.put$TK$TV(factoryName, inner);
}return inner;
}, p$1);

Clazz.newMeth(C$, 'hasLogger$S', function (name) {
return p$1.getOrCreateInnerMap$S.apply(this, [C$.DEFAULT_FACTORY_KEY]).containsKey$O(name);
});

Clazz.newMeth(C$, 'hasLogger$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
return p$1.getOrCreateInnerMap$S.apply(this, [C$.factoryKey$org_apache_logging_log4j_message_MessageFactory(messageFactory)]).containsKey$O(name);
});

Clazz.newMeth(C$, 'hasLogger$S$Class', function (name, messageFactoryClass) {
return p$1.getOrCreateInnerMap$S.apply(this, [C$.factoryClassKey$Class(messageFactoryClass)]).containsKey$O(name);
});

Clazz.newMeth(C$, 'putIfAbsent$S$org_apache_logging_log4j_message_MessageFactory$TT', function (name, messageFactory, logger) {
this.factory.putIfAbsent$java_util_Map$S$TT(p$1.getOrCreateInnerMap$S.apply(this, [C$.factoryKey$org_apache_logging_log4j_message_MessageFactory(messageFactory)]), name, logger);
});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LoggerRegistry, "MapFactory", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoggerRegistry, "ConcurrentMapFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.apache.logging.log4j.spi.LoggerRegistry','org.apache.logging.log4j.spi.LoggerRegistry.MapFactory']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createInnerMap$', function () {
return Clazz.new_(1,{V:"String",K:"Object"},$I$(1,1));
});

Clazz.newMeth(C$, 'createOuterMap$', function () {
return Clazz.new_(1,{V:"String",K:"java.util.Map"},$I$(1,1));
});

Clazz.newMeth(C$, ['putIfAbsent$java_util_Map$S$TT'], function (innerMap, name, logger) {
(innerMap).putIfAbsent$TK$TV(name, logger);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoggerRegistry, "WeakMapFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.apache.logging.log4j.spi.LoggerRegistry','org.apache.logging.log4j.spi.LoggerRegistry.MapFactory']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createInnerMap$', function () {
return Clazz.new_(1,{V:"String",K:"Object"},$I$(2,1));
});

Clazz.newMeth(C$, 'createOuterMap$', function () {
return Clazz.new_(1,{V:"String",K:"java.util.Map"},$I$(2,1));
});

Clazz.newMeth(C$, ['putIfAbsent$java_util_Map$S$TT'], function (innerMap, name, logger) {
innerMap.put$TK$TV(name, logger);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
