(function(){var P$=Clazz.newPackage("org.apache.logging.log4j"),p$1={},I$=[[0,'java.util.HashMap','org.apache.logging.log4j.ThreadContext',['org.apache.logging.log4j.CloseableThreadContext','.Instance']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CloseableThreadContext", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'push$S', function (message) {
return Clazz.new_($I$(3,1)).push$S(message);
}, 1);

Clazz.newMeth(C$, 'push$S$OA', function (message, args) {
return Clazz.new_($I$(3,1)).push$S$OA(message, args);
}, 1);

Clazz.newMeth(C$, 'put$S$S', function (key, value) {
return Clazz.new_($I$(3,1)).put$S$S(key, value);
}, 1);

Clazz.newMeth(C$, 'pushAll$java_util_List', function (messages) {
return Clazz.new_($I$(3,1)).pushAll$java_util_List(messages);
}, 1);

Clazz.newMeth(C$, 'putAll$java_util_Map', function (values) {
return Clazz.new_($I$(3,1)).putAll$java_util_Map(values);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.CloseableThreadContext, "Instance", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'AutoCloseable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pushCount=0;
this.originalValues=Clazz.new_(1,{V:"String",K:"String"},$I$(1,1));
}, 1);

C$.$fields$=[['I',['pushCount'],'O',['originalValues','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'push$S', function (message) {
$I$(2).push$S(message);
this.pushCount++;
return this;
});

Clazz.newMeth(C$, 'push$S$OA', function (message, args) {
$I$(2).push$S$OA(message, args);
this.pushCount++;
return this;
});

Clazz.newMeth(C$, 'put$S$S', function (key, value) {
if (!this.originalValues.containsKey$O(key)) {
this.originalValues.put$TK$TV(key, $I$(2).get$S(key));
}$I$(2).put$S$S(key, value);
return this;
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (values) {
var currentValues=$I$(2).getContext$();
$I$(2).putAll$java_util_Map(values);
for (var key, $key = values.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (!this.originalValues.containsKey$O(key)) {
this.originalValues.put$TK$TV(key, currentValues.get$O(key));
}}
return this;
});

Clazz.newMeth(C$, 'pushAll$java_util_List', function (messages) {
for (var message, $message = messages.iterator$(); $message.hasNext$()&&((message=($message.next$())),1);) {
this.push$S(message);
}
return this;
});

Clazz.newMeth(C$, 'close$', function () {
p$1.closeStack.apply(this, []);
p$1.closeMap.apply(this, []);
});

Clazz.newMeth(C$, 'closeMap', function () {
for (var it=this.originalValues.entrySet$().iterator$(); it.hasNext$(); ) {
var entry=it.next$();
var key=entry.getKey$();
var originalValue=entry.getValue$();
if (null == originalValue ) {
$I$(2).remove$S(key);
} else {
$I$(2).put$S$S(key, originalValue);
}it.remove$();
}
}, p$1);

Clazz.newMeth(C$, 'closeStack', function () {
for (var i=0; i < this.pushCount; i++) {
$I$(2).pop$();
}
this.pushCount=0;
}, p$1);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
