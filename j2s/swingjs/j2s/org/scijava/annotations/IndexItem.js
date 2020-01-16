(function(){var P$=Clazz.newPackage("org.scijava.annotations"),I$=[[0,'java.lang.reflect.Proxy','java.lang.reflect.Array','Enum','java.lang.annotation.Annotation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IndexItem");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['className'],'O',['annotation','Class','loader','ClassLoader','map','java.util.Map']]]

Clazz.newMeth(C$, 'c$$Class$ClassLoader$S$java_util_Map', function (annotation, loader, className, map) {
;C$.$init$.apply(this);
this.annotation=annotation;
this.loader=loader;
this.className=className;
this.map=map;
}, 1);

Clazz.newMeth(C$, 'annotation$', function () {
return C$.proxy$Class$ClassLoader$S$java_util_Map(this.annotation, this.loader, this.className, this.map);
});

Clazz.newMeth(C$, 'className$', function () {
return this.className;
});

Clazz.newMeth(C$, 'proxy$Class$ClassLoader$S$java_util_Map', function (annotation, loader, className, map) {
return $I$(1).newProxyInstance$ClassLoader$ClassA$reflect_InvocationHandler(loader, Clazz.array(Class, -1, [annotation]), ((P$.IndexItem$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IndexItem$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.lang.reflect.InvocationHandler', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['invoke$O$reflect_Method$OA','invoke$'], function (proxy, method, args) {
if (this.$finals$.map.containsKey$O(method)) {
return this.$finals$.map.get$O(method);
}var name=method.getName$();
var value;
if (this.$finals$.map.containsKey$O(name)) {
value=this.$finals$.map.get$O(name);
var expectedType=method.getReturnType$();
if (!expectedType.isAssignableFrom$Class(value.getClass$())) {
value=P$.IndexItem.adapt$O$ClassLoader$Class$S(value, this.$finals$.loader, expectedType, this.$finals$.className);
}} else if (name.equals$O("toString") && (args == null  || args.length == 0 ) ) {
value="@" + this.$finals$.annotation.getName$() + this.$finals$.map ;
} else if (name.equals$O("annotationType") && (args == null  || args.length == 0 ) ) {
value=this.$finals$.annotation;
} else if (name.equals$O("hashCode") && (args == null  || args.length == 0 ) ) {
return new Integer(this.$finals$.annotation.hashCode$() ^ this.$finals$.map.hashCode$());
} else if (name.equals$O("equals") && args != null   && args.length == 1 ) {
if (!(Clazz.instanceOf(args[0], "java.lang.annotation.Annotation")) || (args[0]).annotationType$() !== this.$finals$.annotation  ) {
return new Boolean(false);
}for (var method2, $method2 = 0, $$method2 = this.$finals$.annotation.getMethods$(); $method2<$$method2.length&&((method2=($$method2[$method2])),1);$method2++) {
if (method2.getDeclaringClass$() === this.$finals$.annotation ) {
if (!this.invoke$O$reflect_Method$OA(proxy, method2, Clazz.array(java.lang.Object, [0])).equals$O(method2.invoke$O$OA(args[0], []))) {
return new Boolean(false);
}}}
return new Boolean(true);
} else {
value=method.getDefaultValue$();
if (value == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Could not find value for " + name]);
}}this.$finals$.map.put$TK$TV(method, value);
return value;
});
})()
), Clazz.new_(P$.IndexItem$1.$init$, [this, {map:map,className:className,loader:loader,annotation:annotation}])));
}, 1);

Clazz.newMeth(C$, 'adapt$O$ClassLoader$Class$S', function (o, loader, expectedType, className) {
if (o == null ) {
return null;
} else if (expectedType.isAssignableFrom$Class(o.getClass$())) {
return o;
} else if (Clazz.instanceOf(o, "java.lang.Boolean")) {
return new Boolean((o).valueOf());
} else if (Clazz.instanceOf(o, "java.lang.Long")) {
var l=(o).valueOf();
if (expectedType === Byte.TYPE ) {
return new Byte(($b$[0] = l, $b$[0]));
} else if (expectedType === Short.TYPE ) {
return new Short(($s$[0] = l, $s$[0]));
} else if (expectedType === Integer.TYPE ) {
return new Integer((l|0));
} else if (expectedType === Long.TYPE ) {
return new Long(l);
}} else if (Clazz.instanceOf(o, "java.lang.Double")) {
var d=(o).valueOf();
if (expectedType === Float.TYPE ) {
return new Float(d);
}return new Double(d);
} else if (expectedType === Character.TYPE ) {
var s=o;
if (s.length$() == 1) {
return new Character(s.charAt$I(0));
}} else if (expectedType === Clazz.getClass(Class) ) {
try {
return loader.loadClass$S(o);
} catch (t) {
throw C$.cce$O$Class$S$Throwable(o, expectedType, className, t);
}
} else if (expectedType.isArray$()) {
var list=o;
var type=expectedType.getComponentType$();
var length=list.size$();
var array=Clazz.array(type, length);
for (var i=0; i < length; i++) {
$I$(2).set$O$I$O(array, i, C$.adapt$O$ClassLoader$Class$S(list.get$I(i), loader, type, className));
}
return array;
} else if (Clazz.getClass($I$(3)).isAssignableFrom$Class(expectedType)) {
var map=o;
var enumName=map.get$O("enum");
var constName=map.get$O("value");
try {
return loader.loadClass$S(enumName).getField$S(constName).get$O(null);
} catch (t) {
throw C$.cce$O$Class$S$Throwable(o, expectedType, className, t);
}
} else if (Clazz.getClass($I$(4),['annotationType$','equals$O','hashCode$','toString']).isAssignableFrom$Class(expectedType)) {
var annotation=expectedType;
var map=o;
return C$.proxy$Class$ClassLoader$S$java_util_Map(annotation, loader, className, map);
}throw C$.cce$O$Class$S$Throwable(o, expectedType, className, null);
}, 1);

Clazz.newMeth(C$, 'cce$O$Class$S$Throwable', function (o, expectedType, className, cause) {
var oType=o == null  ? "<null>" : o.getClass$().getName$();
var eType=expectedType == null  ? "<null>" : expectedType.getName$();
var cce=Clazz.new_(Clazz.load('ClassCastException').c$$S,[className + ": cannot cast object of type " + oType + " to " + eType ]);
if (cause != null ) cce.initCause$Throwable(cause);
return cce;
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
