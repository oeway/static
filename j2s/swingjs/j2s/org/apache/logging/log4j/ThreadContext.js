(function(){var P$=Clazz.newPackage("org.apache.logging.log4j"),I$=[[0,['org.apache.logging.log4j.ThreadContext','.EmptyIterator'],'java.util.Collections',['org.apache.logging.log4j.ThreadContext','.EmptyThreadContextStack'],'org.apache.logging.log4j.spi.ThreadContextMapFactory','org.apache.logging.log4j.util.PropertiesUtil','org.apache.logging.log4j.spi.DefaultThreadContextStack','org.apache.logging.log4j.spi.NoOpThreadContextMap','org.apache.logging.log4j.message.ParameterizedMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ThreadContext", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EMPTY_MAP=$I$(2).emptyMap$();
C$.EMPTY_STACK=Clazz.new_($I$(3,1));
{
C$.init$();
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['disableAll','useMap','useStack'],'S',['DISABLE_MAP','DISABLE_STACK','DISABLE_ALL'],'O',['EMPTY_MAP','java.util.Map','EMPTY_STACK','org.apache.logging.log4j.spi.ThreadContextStack','contextMap','org.apache.logging.log4j.spi.ThreadContextMap','contextStack','org.apache.logging.log4j.spi.ThreadContextStack','readOnlyContextMap','org.apache.logging.log4j.spi.ReadOnlyThreadContextMap']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'init$', function () {
$I$(4).init$();
C$.contextMap=null;
var managerProps=$I$(5).getProperties$();
C$.disableAll=managerProps.getBooleanProperty$S("disableThreadContext");
C$.useStack=!(managerProps.getBooleanProperty$S("disableThreadContextStack") || C$.disableAll );
C$.useMap=!(managerProps.getBooleanProperty$S("disableThreadContextMap") || C$.disableAll );
C$.contextStack=Clazz.new_($I$(6,1).c$$Z,[C$.useStack]);
if (!C$.useMap) {
C$.contextMap=Clazz.new_($I$(7,1));
} else {
C$.contextMap=$I$(4).createThreadContextMap$();
}if (Clazz.instanceOf(C$.contextMap, "org.apache.logging.log4j.spi.ReadOnlyThreadContextMap")) {
C$.readOnlyContextMap=C$.contextMap;
} else {
C$.readOnlyContextMap=null;
}}, 1);

Clazz.newMeth(C$, 'put$S$S', function (key, value) {
C$.contextMap.put$S$S(key, value);
}, 1);

Clazz.newMeth(C$, 'putAll$java_util_Map', function (m) {
if (Clazz.instanceOf(C$.contextMap, "org.apache.logging.log4j.spi.ThreadContextMap2")) {
(C$.contextMap).putAll$java_util_Map(m);
} else if (Clazz.instanceOf(C$.contextMap, "org.apache.logging.log4j.spi.DefaultThreadContextMap")) {
(C$.contextMap).putAll$java_util_Map(m);
} else {
for (var entry, $entry = m.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
C$.contextMap.put$S$S(entry.getKey$(), entry.getValue$());
}
}}, 1);

Clazz.newMeth(C$, 'get$S', function (key) {
return C$.contextMap.get$S(key);
}, 1);

Clazz.newMeth(C$, 'remove$S', function (key) {
C$.contextMap.remove$S(key);
}, 1);

Clazz.newMeth(C$, 'removeAll$Iterable', function (keys) {
if (Clazz.instanceOf(C$.contextMap, "org.apache.logging.log4j.spi.CleanableThreadContextMap")) {
(C$.contextMap).removeAll$Iterable(keys);
} else if (Clazz.instanceOf(C$.contextMap, "org.apache.logging.log4j.spi.DefaultThreadContextMap")) {
(C$.contextMap).removeAll$Iterable(keys);
} else {
for (var key, $key = keys.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
C$.contextMap.remove$S(key);
}
}}, 1);

Clazz.newMeth(C$, 'clearMap$', function () {
C$.contextMap.clear$();
}, 1);

Clazz.newMeth(C$, 'clearAll$', function () {
C$.clearMap$();
C$.clearStack$();
}, 1);

Clazz.newMeth(C$, 'containsKey$S', function (key) {
return C$.contextMap.containsKey$S(key);
}, 1);

Clazz.newMeth(C$, 'getContext$', function () {
return C$.contextMap.getCopy$();
}, 1);

Clazz.newMeth(C$, 'getImmutableContext$', function () {
var map=C$.contextMap.getImmutableMapOrNull$();
return map == null  ? C$.EMPTY_MAP : map;
}, 1);

Clazz.newMeth(C$, 'getThreadContextMap$', function () {
return C$.readOnlyContextMap;
}, 1);

Clazz.newMeth(C$, 'isEmpty$', function () {
return C$.contextMap.isEmpty$();
}, 1);

Clazz.newMeth(C$, 'clearStack$', function () {
C$.contextStack.clear$();
}, 1);

Clazz.newMeth(C$, 'cloneStack$', function () {
return C$.contextStack.copy$();
}, 1);

Clazz.newMeth(C$, 'getImmutableStack$', function () {
var result=C$.contextStack.getImmutableStackOrNull$();
return result == null  ? C$.EMPTY_STACK : result;
}, 1);

Clazz.newMeth(C$, 'setStack$java_util_Collection', function (stack) {
if (stack.isEmpty$() || !C$.useStack ) {
return;
}C$.contextStack.clear$();
C$.contextStack.addAll$java_util_Collection(stack);
}, 1);

Clazz.newMeth(C$, 'getDepth$', function () {
return C$.contextStack.getDepth$();
}, 1);

Clazz.newMeth(C$, 'pop$', function () {
return C$.contextStack.pop$();
}, 1);

Clazz.newMeth(C$, 'peek$', function () {
return C$.contextStack.peek$();
}, 1);

Clazz.newMeth(C$, 'push$S', function (message) {
C$.contextStack.push$S(message);
}, 1);

Clazz.newMeth(C$, 'push$S$OA', function (message, args) {
C$.contextStack.push$S($I$(8).format$S$OA(message, args));
}, 1);

Clazz.newMeth(C$, 'removeStack$', function () {
C$.contextStack.clear$();
}, 1);

Clazz.newMeth(C$, 'trim$I', function (depth) {
C$.contextStack.trim$I(depth);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadContext, "EmptyThreadContextStack", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractCollection', 'org.apache.logging.log4j.spi.ThreadContextStack');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EMPTY_ITERATOR=Clazz.new_(1,{E:"String"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['L',['serialVersionUID'],'O',['EMPTY_ITERATOR','java.util.Iterator']]]

Clazz.newMeth(C$, 'pop$', function () {
return null;
});

Clazz.newMeth(C$, 'peek$', function () {
return null;
});

Clazz.newMeth(C$, 'push$S', function (message) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getDepth$', function () {
return 0;
});

Clazz.newMeth(C$, 'asList$', function () {
return $I$(2).emptyList$();
});

Clazz.newMeth(C$, 'trim$I', function (depth) {
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return (Clazz.instanceOf(o, "java.util.Collection")) && (o).isEmpty$() ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return 1;
});

Clazz.newMeth(C$, 'copy$', function () {
return this;
});

Clazz.newMeth(C$, 'toArray$__TA', function (a) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['add$S','add$TE'], function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return false;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'iterator$', function () {
return C$.EMPTY_ITERATOR;
});

Clazz.newMeth(C$, 'size$', function () {
return 0;
});

Clazz.newMeth(C$, 'getImmutableStackOrNull$', function () {
return this;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadContext, "EmptyIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return false;
});

Clazz.newMeth(C$, 'next$', function () {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["This is an empty iterator!"]);
});

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ThreadContext, "ContextStack", function(){
}, null, ['java.io.Serializable', 'java.util.Collection']);

C$.$clinit$=2;
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
