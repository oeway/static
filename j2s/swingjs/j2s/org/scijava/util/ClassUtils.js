(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'java.util.HashMap','java.util.ArrayList',['org.scijava.util.ClassUtils','.FieldCache'],['org.scijava.util.ClassUtils','.MethodCache'],'org.scijava.util.Query','java.lang.reflect.Method','java.lang.reflect.Field','java.util.HashSet','org.scijava.util.Types','org.scijava.util.ConversionUtils','org.scijava.util.MiscUtils','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ClassUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FieldCache',10],['MethodCache',10],['CacheMap',10]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.fieldCache=Clazz.new_($I$(3,1));
C$.methodCache=Clazz.new_($I$(4,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['fieldCache','org.scijava.util.ClassUtils.FieldCache','methodCache','org.scijava.util.ClassUtils.MethodCache']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAnnotatedMethods$Class$Class', function (c, annotationClass) {
var methods=C$.methodCache.getList$Class$Class(c, annotationClass);
if (methods == null ) {
methods=Clazz.new_(1,{E:"java.lang.reflect.Method"},$I$(2,1));
C$.getAnnotatedMethods$Class$Class$java_util_List(c, annotationClass, methods);
}return methods;
}, 1);

Clazz.newMeth(C$, 'getAnnotatedMethods$Class$Class$java_util_List', function (c, annotationClass, methods) {
var cachedMethods=C$.methodCache.getList$Class$Class(c, annotationClass);
if (cachedMethods == null ) {
var query=Clazz.new_($I$(5,1));
query.put$TK$TV(annotationClass, Clazz.getClass($I$(6)));
C$.cacheAnnotatedObjects$Class$org_scijava_util_Query(c, query);
cachedMethods=C$.methodCache.getList$Class$Class(c, annotationClass);
}if (cachedMethods != null ) methods.addAll$java_util_Collection(cachedMethods);
}, 1);

Clazz.newMeth(C$, 'getAnnotatedFields$Class$Class', function (c, annotationClass) {
var fields=C$.fieldCache.getList$Class$Class(c, annotationClass);
if (fields == null ) {
fields=Clazz.new_(1,{E:"java.lang.reflect.Field"},$I$(2,1));
C$.getAnnotatedFields$Class$Class$java_util_List(c, annotationClass, fields);
}return fields;
}, 1);

Clazz.newMeth(C$, 'getAnnotatedFields$Class$Class$java_util_List', function (c, annotationClass, fields) {
var cachedFields=C$.fieldCache.getList$Class$Class(c, annotationClass);
if (cachedFields == null ) {
var query=Clazz.new_($I$(5,1));
query.put$TK$TV(annotationClass, Clazz.getClass($I$(7)));
C$.cacheAnnotatedObjects$Class$org_scijava_util_Query(c, query);
cachedFields=C$.fieldCache.getList$Class$Class(c, annotationClass);
}fields.addAll$java_util_Collection(cachedFields);
}, 1);

Clazz.newMeth(C$, 'cacheAnnotatedObjects$Class$org_scijava_util_Query', function (scannedClass, query) {
{
if (scannedClass == null  || scannedClass === Clazz.getClass(java.lang.Object)  ) return;
var keysToDrop=Clazz.new_(1,{E:"Class"},$I$(8,1));
for (var annotationClass, $annotationClass = query.keySet$().iterator$(); $annotationClass.hasNext$()&&((annotationClass=($annotationClass.next$())),1);) {
if (C$.fieldCache.getList$Class$Class(scannedClass, annotationClass) != null ) {
keysToDrop.add$TE(annotationClass);
} else if (C$.methodCache.getList$Class$Class(scannedClass, annotationClass) != null ) {
keysToDrop.add$TE(annotationClass);
}}
for (var key, $key = keysToDrop.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
query.remove$O(key);
}
if (query.isEmpty$()) return;
var inherited=Clazz.new_(1,{E:"Class"},$I$(2,1));
var superClass=scannedClass.getSuperclass$();
if (superClass != null ) {
C$.cacheAnnotatedObjects$Class$org_scijava_util_Query(superClass, Clazz.new_($I$(5,1).c$$org_scijava_util_Query,[query]));
inherited.add$TE(superClass);
}for (var ifaceClass, $ifaceClass = 0, $$ifaceClass = scannedClass.getInterfaces$(); $ifaceClass<$$ifaceClass.length&&((ifaceClass=($$ifaceClass[$ifaceClass])),1);$ifaceClass++) {
C$.cacheAnnotatedObjects$Class$org_scijava_util_Query(ifaceClass, Clazz.new_($I$(5,1).c$$org_scijava_util_Query,[query]));
inherited.add$TE(ifaceClass);
}
for (var annotationClass, $annotationClass = query.keySet$().iterator$(); $annotationClass.hasNext$()&&((annotationClass=($annotationClass.next$())),1);) {
var objectClass=query.get$O(annotationClass);
try {
if (Clazz.getClass($I$(6)).isAssignableFrom$Class(objectClass)) {
C$.populateCache$Class$java_util_List$Class$org_scijava_util_ClassUtils_CacheMap$TTA(scannedClass, inherited, annotationClass, C$.methodCache, scannedClass.getDeclaredMethods$());
} else if (Clazz.getClass($I$(7)).isAssignableFrom$Class(objectClass)) {
C$.populateCache$Class$java_util_List$Class$org_scijava_util_ClassUtils_CacheMap$TTA(scannedClass, inherited, annotationClass, C$.fieldCache, scannedClass.getDeclaredFields$());
}} catch (t) {
}
}
}}, 1);

Clazz.newMeth(C$, 'getValue$reflect_Field$O', function (field, instance) {
try {
field.setAccessible$Z(true);
return field.get$O(instance);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalAccessException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setValue$reflect_Field$O$O', function (field, instance, value) {
try {
field.setAccessible$Z(true);
var compatibleValue;
if (value == null  || field.getType$().isInstance$O(value) ) {
compatibleValue=value;
} else {
var fieldType=$I$(9).fieldType$reflect_Field$Class(field, instance.getClass$());
var convertedValue=$I$(10).convert$O$reflect_Type(value, fieldType);
compatibleValue=convertedValue;
}field.set$O$O(instance, compatibleValue);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["No access to field: " + field.getName$(), e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'compare$Class$Class', function (c1, c2) {
if (c1 === c2 ) return 0;
var name1=c1 == null  ? null : c1.getName$();
var name2=c2 == null  ? null : c2.getName$();
return $I$(11).compare$TT$TT(name1, name2);
}, 1);

Clazz.newMeth(C$, 'arrayOrNull$Class', function (componentType) {
try {
return $I$(9).array$Class(componentType);
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'populateCache$Class$java_util_List$Class$org_scijava_util_ClassUtils_CacheMap$TTA', function (scannedClass, inherited, annotationClass, cacheMap, declaredElements) {
for (var inheritedClass, $inheritedClass = inherited.iterator$(); $inheritedClass.hasNext$()&&((inheritedClass=($inheritedClass.next$())),1);) {
var annotatedElements=cacheMap.getList$Class$Class(inheritedClass, annotationClass);
if (annotatedElements != null  && !annotatedElements.isEmpty$() ) {
var scannedElements=cacheMap.makeList$Class$Class(scannedClass, annotationClass);
if (scannedClass.isInterface$()) {
System.out.println$S("?inherited?" + scannedClass.getName$() + " " + inheritedClass.getName$() + " " + annotatedElements );
}scannedElements.addAll$java_util_Collection(annotatedElements);
}}
if (declaredElements != null  && declaredElements.length > 0 ) {
var scannedElements=null;
for (var t, $t = 0, $$t = declaredElements; $t<$$t.length&&((t=($$t[$t])),1);$t++) {
if (t.getAnnotation$Class(annotationClass) != null ) {
if (scannedElements == null ) {
scannedElements=cacheMap.makeList$Class$Class(scannedClass, annotationClass);
}if (scannedClass.isInterface$()) {
System.out.println$S("?declared?" + scannedClass.getName$() + " " + t );
}scannedElements.add$TE(t);
}}
}if (cacheMap.getList$Class$Class(scannedClass, annotationClass) == null ) {
cacheMap.putList$Class$Class$java_util_List(scannedClass, annotationClass, $I$(12).emptyList$());
}}, 1);

Clazz.newMeth(C$, 'loadClass$S', function (name) {
return $I$(9).load$S(name);
}, 1);

Clazz.newMeth(C$, 'loadClass$S$ClassLoader', function (name, classLoader) {
return $I$(9).load$S$ClassLoader(name, classLoader);
}, 1);

Clazz.newMeth(C$, 'loadClass$S$Z', function (className, quietly) {
return $I$(9).load$S$Z(className, quietly);
}, 1);

Clazz.newMeth(C$, 'loadClass$S$ClassLoader$Z', function (name, classLoader, quietly) {
return $I$(9).load$S$ClassLoader$Z(name, classLoader, quietly);
}, 1);

Clazz.newMeth(C$, 'hasClass$S', function (className) {
return $I$(9).load$S(className) != null ;
}, 1);

Clazz.newMeth(C$, 'hasClass$S$ClassLoader', function (className, classLoader) {
return $I$(9).load$S$ClassLoader(className, classLoader) != null ;
}, 1);

Clazz.newMeth(C$, 'getLocation$S', function (className) {
return $I$(9).location$Class($I$(9).load$S(className));
}, 1);

Clazz.newMeth(C$, 'getLocation$S$ClassLoader', function (className, classLoader) {
return $I$(9).location$Class($I$(9).load$S$ClassLoader(className, classLoader));
}, 1);

Clazz.newMeth(C$, 'getLocation$Class', function (c) {
return $I$(9).location$Class(c);
}, 1);

Clazz.newMeth(C$, 'isBoolean$Class', function (type) {
return $I$(9).isBoolean$Class(type);
}, 1);

Clazz.newMeth(C$, 'isByte$Class', function (type) {
return $I$(9).isByte$Class(type);
}, 1);

Clazz.newMeth(C$, 'isCharacter$Class', function (type) {
return $I$(9).isCharacter$Class(type);
}, 1);

Clazz.newMeth(C$, 'isDouble$Class', function (type) {
return $I$(9).isDouble$Class(type);
}, 1);

Clazz.newMeth(C$, 'isFloat$Class', function (type) {
return $I$(9).isFloat$Class(type);
}, 1);

Clazz.newMeth(C$, 'isInteger$Class', function (type) {
return $I$(9).isInteger$Class(type);
}, 1);

Clazz.newMeth(C$, 'isLong$Class', function (type) {
return $I$(9).isLong$Class(type);
}, 1);

Clazz.newMeth(C$, 'isShort$Class', function (type) {
return $I$(9).isShort$Class(type);
}, 1);

Clazz.newMeth(C$, 'isNumber$Class', function (type) {
return $I$(9).isNumber$Class(type);
}, 1);

Clazz.newMeth(C$, 'isText$Class', function (type) {
return $I$(9).isText$Class(type);
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (value, type) {
return $I$(10).convert$O$Class(value, type);
}, 1);

Clazz.newMeth(C$, 'canConvert$Class$Class', function (c, type) {
return $I$(10).canConvert$Class$Class(c, type);
}, 1);

Clazz.newMeth(C$, 'canConvert$O$Class', function (value, type) {
return $I$(10).canConvert$O$Class(value, type);
}, 1);

Clazz.newMeth(C$, 'cast$O$Class', function (obj, type) {
return $I$(9).cast$O$Class(obj, type);
}, 1);

Clazz.newMeth(C$, 'canCast$Class$Class', function (c, type) {
return $I$(9).isAssignable$reflect_Type$reflect_Type(c, type);
}, 1);

Clazz.newMeth(C$, 'canCast$O$Class', function (obj, type) {
return $I$(9).isInstance$O$Class(obj, type);
}, 1);

Clazz.newMeth(C$, 'getNonprimitiveType$Class', function (type) {
return $I$(9).box$Class(type);
}, 1);

Clazz.newMeth(C$, 'getNullValue$Class', function (type) {
return $I$(9).nullValue$Class(type);
}, 1);

Clazz.newMeth(C$, 'getTypes$reflect_Field$Class', function (field, type) {
return $I$(9).raws$reflect_Type($I$(9).fieldType$reflect_Field$Class(field, type));
}, 1);

Clazz.newMeth(C$, 'getGenericType$reflect_Field$Class', function (field, type) {
return $I$(9).fieldType$reflect_Field$Class(field, type);
}, 1);

Clazz.newMeth(C$, 'getField$S$S', function (className, fieldName) {
try {
return $I$(9).field$Class$S($I$(9).load$S(className), fieldName);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getField$Class$S', function (c, fieldName) {
try {
return $I$(9).field$Class$S(c, fieldName);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getArrayClass$Class', function (elementClass) {
return $I$(9).raw$reflect_Type(C$.arrayOrNull$Class(elementClass));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassUtils, "FieldCache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.scijava.util.ClassUtils','.CacheMap']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassUtils, "MethodCache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.scijava.util.ClassUtils','.CacheMap']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassUtils, "CacheMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.HashMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getList$Class$Class', function (c, annotationClass) {
var annotatedFields=null;
var annotationTypes=this.get$O(c);
if (annotationTypes != null ) {
annotatedFields=annotationTypes.get$O(annotationClass);
}return annotatedFields;
});

Clazz.newMeth(C$, 'putList$Class$Class$java_util_List', function (c, annotationClass, annotatedElements) {
var map=this.get$O(c);
if (map == null ) {
map=Clazz.new_(1,{K:"Class",V:"java.util.List"},$I$(1,1));
this.put$TK$TV(c, map);
}map.put$TK$TV(annotationClass, annotatedElements);
});

Clazz.newMeth(C$, 'makeList$Class$Class', function (c, annotationClass) {
var elements=this.getList$Class$Class(c, annotationClass);
if (elements == null ) {
elements=Clazz.new_(1,{E:"Object"},$I$(2,1));
this.putList$Class$Class$java_util_List(c, annotationClass, elements);
}return elements;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
