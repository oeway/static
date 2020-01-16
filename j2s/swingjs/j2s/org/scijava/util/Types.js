(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,['org.scijava.util.Types','.TypeUtils','.WildcardTypeImpl'],['org.scijava.util.Types','.TypeUtils'],'java.util.Objects','java.util.Arrays','java.lang.reflect.Type','java.util.HashMap','org.scijava.util.Types','java.util.HashSet','java.util.Collections','java.util.ArrayList',['org.scijava.util.Types','.TypeUtils','.ParameterizedTypeImpl'],['org.scijava.util.Types','.TypeUtils','.WildcardTypeBuilder'],['org.scijava.util.Types','.TypeUtils','.GenericArrayTypeImpl'],'StringBuilder',['org.scijava.util.Types','.VarMap'],'AssertionError',['org.scijava.util.Types','.CaptureTypeImpl'],'java.util.LinkedHashSet','Thread','java.net.URL',['org.scijava.util.Types','.GenericTypeReflector'],'Boolean','Void','java.lang.reflect.Array','Enum']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Types", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TypeUtils',10],['GenericTypeReflector',10],['CaptureType',10],['CaptureTypeImpl',10],['VarMap',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'load$S', function (name) {
return C$.load$S$ClassLoader$Z(name, null, true);
}, 1);

Clazz.newMeth(C$, 'load$S$ClassLoader', function (name, classLoader) {
return C$.load$S$ClassLoader$Z(name, classLoader, true);
}, 1);

Clazz.newMeth(C$, 'load$S$Z', function (className, quietly) {
return C$.load$S$ClassLoader$Z(className, null, quietly);
}, 1);

Clazz.newMeth(C$, 'load$S$ClassLoader$Z', function (name, classLoader, quietly) {
if (name.equals$O("Z") || name.equals$O("boolean") ) return Boolean.TYPE;
if (name.equals$O("B") || name.equals$O("byte") ) return Byte.TYPE;
if (name.equals$O("C") || name.equals$O("char") ) return Character.TYPE;
if (name.equals$O("D") || name.equals$O("double") ) return Double.TYPE;
if (name.equals$O("F") || name.equals$O("float") ) return Float.TYPE;
if (name.equals$O("I") || name.equals$O("int") ) return Integer.TYPE;
if (name.equals$O("J") || name.equals$O("long") ) return Long.TYPE;
if (name.equals$O("S") || name.equals$O("short") ) return Short.TYPE;
if (name.equals$O("V") || name.equals$O("void") ) return Void.TYPE;
var className;
if (name.equals$O("string")) className="java.lang.String";
 else className=name;
if (name.endsWith$S("[]")) {
var elementClassName=name.substring$I$I(0, name.length$() - 2);
return C$.arrayOrNull$Class(C$.load$S$ClassLoader(elementClassName, classLoader));
}if (name.startsWith$S("[L") && name.endsWith$S(";") ) {
var elementClassName=name.substring$I$I(2, name.length$() - 1);
return C$.arrayOrNull$Class(C$.load$S$ClassLoader(elementClassName, classLoader));
}if (name.startsWith$S("[")) {
var elementClassName=name.substring$I(1);
return C$.arrayOrNull$Class(C$.load$S$ClassLoader(elementClassName, classLoader));
}try {

Clazz._isQuietLoad=true;
var cl=classLoader == null  ? $I$(19).currentThread$().getContextClassLoader$() : classLoader;
return cl.loadClass$S(className);
} catch (t) {
if (quietly) return null;
throw C$.iae$Throwable$SA(t, ["Cannot load class: " + className]);
} finally {

Clazz._isQuietLoad=false;
}
}, 1);

Clazz.newMeth(C$, 'location$Class', function (c) {
return C$.location$Class$Z(c, true);
}, 1);

Clazz.newMeth(C$, 'location$Class$Z', function (c, quietly) {
var cause=null;
var why=null;
try {
var codeSource=c.getProtectionDomain$().getCodeSource$();
if (codeSource != null ) {
var location=codeSource.getLocation$();
if (location != null ) return location;
why="null code source location";
} else why="null code source";
} catch (exc) {
if (Clazz.exceptionOf(exc,"SecurityException")){
cause=exc;
why="cannot access protection domain";
} else {
throw exc;
}
}
var classResource=c.getResource$S(c.getSimpleName$() + ".class");
if (classResource == null ) {
if (quietly) return null;
throw C$.iae$Throwable$SA(cause, ["No class resource for class: " + C$.name$reflect_Type(c), why]);
}var url=classResource.toString();
var suffix=c.getCanonicalName$().replace$C$C(".", "/") + ".class";
if (!url.endsWith$S(suffix)) {
if (quietly) return null;
throw C$.iae$Throwable$SA(cause, ["Unsupported URL format: " + url, why]);
}var base=url.substring$I$I(0, url.length$() - suffix.length$());
var path=base;
if (path.startsWith$S("jar:")) path=path.substring$I$I(4, path.length$() - 2);
try {
return Clazz.new_($I$(20,1).c$$S,[path]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
if (quietly) return null;
throw C$.iae$Throwable$SA(e, ["Malformed URL", why]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'name$reflect_Type', function (t) {
if (Clazz.instanceOf(t, "java.lang.Class")) {
var c=t;
return c.isArray$() ? (C$.name$reflect_Type(C$.component$reflect_Type(c)) + "[]") : c.getName$();
}return t.toString();
}, 1);

Clazz.newMeth(C$, 'raw$reflect_Type', function (type) {
if (type == null ) return null;
if (Clazz.instanceOf(type, "java.lang.Class")) return type;
var c=C$.raws$reflect_Type(type);
if (c == null  || c.size$() == 0 ) return null;
return c.get$I(0);
}, 1);

Clazz.newMeth(C$, 'raws$reflect_Type', function (type) {
if (type == null ) return null;
return $I$(21).getUpperBoundClassAndInterfaces$reflect_Type(type);
}, 1);

Clazz.newMeth(C$, 'isBoolean$Class', function (type) {
return type === Boolean.TYPE  || Clazz.getClass($I$(22)).isAssignableFrom$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'isByte$Class', function (type) {
return type === Byte.TYPE  || Clazz.getClass(Byte).isAssignableFrom$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'isCharacter$Class', function (type) {
return type === Character.TYPE  || Clazz.getClass(Character).isAssignableFrom$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'isDouble$Class', function (type) {
return type === Double.TYPE  || Clazz.getClass(Double).isAssignableFrom$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'isFloat$Class', function (type) {
return type === Float.TYPE  || Clazz.getClass(Float).isAssignableFrom$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'isInteger$Class', function (type) {
return type === Integer.TYPE  || Clazz.getClass(Integer).isAssignableFrom$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'isLong$Class', function (type) {
return type === Long.TYPE  || Clazz.getClass(Long).isAssignableFrom$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'isShort$Class', function (type) {
return type === Short.TYPE  || Clazz.getClass(Short).isAssignableFrom$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'isNumber$Class', function (type) {
return Clazz.getClass(Number).isAssignableFrom$Class(type) || type === Byte.TYPE   || type === Double.TYPE   || type === Float.TYPE   || type === Integer.TYPE   || type === Long.TYPE   || type === Short.TYPE  ;
}, 1);

Clazz.newMeth(C$, 'isText$Class', function (type) {
return Clazz.getClass(String).isAssignableFrom$Class(type) || C$.isCharacter$Class(type) ;
}, 1);

Clazz.newMeth(C$, 'box$Class', function (type) {
var destType;
if (type === Boolean.TYPE ) destType=Clazz.getClass($I$(22));
 else if (type === Byte.TYPE ) destType=Clazz.getClass(Byte);
 else if (type === Character.TYPE ) destType=Clazz.getClass(Character);
 else if (type === Double.TYPE ) destType=Clazz.getClass(Double);
 else if (type === Float.TYPE ) destType=Clazz.getClass(Float);
 else if (type === Integer.TYPE ) destType=Clazz.getClass(Integer);
 else if (type === Long.TYPE ) destType=Clazz.getClass(Long);
 else if (type === Short.TYPE ) destType=Clazz.getClass(Short);
 else if (type === Void.TYPE ) destType=Clazz.getClass($I$(23));
 else destType=type;
var result=destType;
return result;
}, 1);

Clazz.newMeth(C$, 'unbox$Class', function (type) {
var destType;
if (type === Clazz.getClass($I$(22)) ) destType=Boolean.TYPE;
 else if (type === Clazz.getClass(Byte) ) destType=Byte.TYPE;
 else if (type === Clazz.getClass(Character) ) destType=Character.TYPE;
 else if (type === Clazz.getClass(Double) ) destType=Double.TYPE;
 else if (type === Clazz.getClass(Float) ) destType=Float.TYPE;
 else if (type === Clazz.getClass(Integer) ) destType=Integer.TYPE;
 else if (type === Clazz.getClass(Long) ) destType=Long.TYPE;
 else if (type === Clazz.getClass(Short) ) destType=Short.TYPE;
 else if (type === Clazz.getClass($I$(23)) ) destType=Void.TYPE;
 else destType=type;
var result=destType;
return result;
}, 1);

Clazz.newMeth(C$, 'nullValue$Class', function (type) {
var defaultValue;
if (type === Boolean.TYPE ) defaultValue=new Boolean(false);
 else if (type === Byte.TYPE ) defaultValue=new Byte(($b$[0] = 0, $b$[0]));
 else if (type === Character.TYPE ) defaultValue=new Character('\u0000');
 else if (type === Double.TYPE ) defaultValue=new Double(0.0);
 else if (type === Float.TYPE ) defaultValue=new Float(0.0);
 else if (type === Integer.TYPE ) defaultValue=new Integer(0);
 else if (type === Long.TYPE ) defaultValue=new Long(0);
 else if (type === Short.TYPE ) defaultValue=new Short(($s$[0] = 0, $s$[0]));
 else defaultValue=null;
var result=defaultValue;
return result;
}, 1);

Clazz.newMeth(C$, 'field$Class$S', function (c, name) {
if (c == null ) throw C$.iae$SA(["No such field: " + name]);
try {
return c.getDeclaredField$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchFieldException")){
} else {
throw e;
}
}
return C$.field$Class$S(c.getSuperclass$(), name);
}, 1);

Clazz.newMeth(C$, 'method$Class$S$ClassA', function (c, name, parameterTypes) {
if (c == null ) throw C$.iae$SA(["No such field: " + name]);
try {
return c.getDeclaredMethod$S$ClassA(name, parameterTypes);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NoSuchMethodException")){
} else {
throw exc;
}
}
return C$.method$Class$S$ClassA(c.getSuperclass$(), name, parameterTypes);
}, 1);

Clazz.newMeth(C$, 'array$Class', function (componentType) {
if (componentType == null ) return null;
return Clazz.array(componentType, 0).getClass$();
}, 1);

Clazz.newMeth(C$, 'array$Class$I', function (componentType, dim) {
if (dim < 0) throw C$.iae$SA(["Negative dimension"]);
if (dim == 0) return componentType;
return C$.array$Class$I(C$.array$Class(componentType), dim - 1);
}, 1);

Clazz.newMeth(C$, 'array$reflect_Type', function (componentType) {
if (componentType == null ) return null;
if (Clazz.instanceOf(componentType, "java.lang.Class")) {
return C$.array$Class(componentType);
}return Clazz.new_($I$(13,1).c$$reflect_Type,[componentType]);
}, 1);

Clazz.newMeth(C$, 'component$reflect_Type', function (type) {
if (Clazz.instanceOf(type, "java.lang.Class")) {
return (type).getComponentType$();
}if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
return (type).getGenericComponentType$();
}return null;
}, 1);

Clazz.newMeth(C$, 'fieldType$reflect_Field$Class', function (field, type) {
var wildType=$I$(21).addWildcardParameters$Class(type);
return $I$(21).getExactFieldType$reflect_Field$reflect_Type(field, wildType);
}, 1);

Clazz.newMeth(C$, 'methodReturnType$reflect_Method$Class', function (method, type) {
var wildType=$I$(21).addWildcardParameters$Class(type);
return $I$(21).getExactReturnType$reflect_Method$reflect_Type(method, wildType);
}, 1);

Clazz.newMeth(C$, 'methodParamTypes$reflect_Method$Class', function (method, type) {
var wildType=$I$(21).addWildcardParameters$Class(type);
return $I$(21).getExactParameterTypes$reflect_Method$reflect_Type(method, wildType);
}, 1);

Clazz.newMeth(C$, 'param$reflect_Type$Class$I', function (type, c, no) {
return $I$(21).getTypeParameter$reflect_Type$reflect_TypeVariable(type, c.getTypeParameters$()[no]);
}, 1);

Clazz.newMeth(C$, 'isAssignable$reflect_Type$reflect_Type', function (source, target) {
return $I$(2).isAssignable$reflect_Type$reflect_Type(source, target);
}, 1);

Clazz.newMeth(C$, 'isInstance$O$Class', function (obj, dest) {
if (dest == null ) return false;
return obj == null  || dest.isInstance$O(obj) ;
}, 1);

Clazz.newMeth(C$, 'cast$O$Class', function (src, dest) {
if (!C$.isInstance$O$Class(src, dest)) return null;
var result=src;
return result;
}, 1);

Clazz.newMeth(C$, 'enumValue$S$Class', function (name, dest) {
if (!dest.isEnum$()) throw C$.iae$SA(["Not an enum type: " + C$.name$reflect_Type(dest)]);
var result=$I$(25).valueOf$Class$S(dest, name);
var typedResult=result;
return typedResult;
}, 1);

Clazz.newMeth(C$, 'parameterize$Class$reflect_TypeA', function (rawType, typeArgs) {
return C$.parameterize$Class$reflect_Type$reflect_TypeA(rawType, rawType.getDeclaringClass$(), typeArgs);
}, 1);

Clazz.newMeth(C$, 'parameterize$Class$reflect_Type$reflect_TypeA', function (rawType, ownerType, typeArgs) {
return Clazz.new_($I$(11,1).c$$Class$reflect_Type$reflect_TypeA,[rawType, ownerType, typeArgs]);
}, 1);

Clazz.newMeth(C$, 'wildcard$', function () {
return C$.wildcard$reflect_Type$reflect_Type(null, null);
}, 1);

Clazz.newMeth(C$, 'wildcard$reflect_Type$reflect_Type', function (upperBound, lowerBound) {
return Clazz.new_($I$(1,1).c$$reflect_Type$reflect_Type,[upperBound, lowerBound]);
}, 1);

Clazz.newMeth(C$, 'wildcard$reflect_TypeA$reflect_TypeA', function (upperBounds, lowerBounds) {
return Clazz.new_($I$(1,1).c$$reflect_TypeA$reflect_TypeA,[upperBounds, lowerBounds]);
}, 1);

Clazz.newMeth(C$, 'containsTypeVars$reflect_Type', function (type) {
return $I$(2).containsTypeVariables$reflect_Type(type);
}, 1);

Clazz.newMeth(C$, 'args$reflect_Type$Class', function (type, toClass) {
return $I$(2).getTypeArguments$reflect_Type$Class(type, toClass);
}, 1);

Clazz.newMeth(C$, 'args$Class$reflect_ParameterizedType', function (c, superType) {
return $I$(2).determineTypeArguments$Class$reflect_ParameterizedType(c, superType);
}, 1);

Clazz.newMeth(C$, 'parameterize$Class$java_util_Map', function (raw, typeArgMappings) {
return $I$(2).parameterize$Class$java_util_Map(raw, typeArgMappings);
}, 1);

Clazz.newMeth(C$, 'iae$SA', function (s) {
return C$.iae$Throwable$SA(null, s);
}, 1);

Clazz.newMeth(C$, 'iae$Throwable$SA', function (cause, notes) {
var s=String.join$CharSequence$CharSequenceA(", ", notes);
var exc=Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[s]);
if (cause != null ) exc.initCause$Throwable(cause);
throw exc;
}, 1);

Clazz.newMeth(C$, 'arrayOrNull$Class', function (componentType) {
try {
return C$.array$Class(componentType);
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
return null;
} else {
throw exc;
}
}
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Types, "TypeUtils", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['WildcardTypeBuilder',9],['GenericArrayTypeImpl',26],['ParameterizedTypeImpl',26],['WildcardTypeImpl',26]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.WILDCARD_ALL=C$.wildcardType$().withUpperBounds$reflect_TypeA([Clazz.getClass(java.lang.Object)]).build$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['WILDCARD_ALL','java.lang.reflect.WildcardType']]]

Clazz.newMeth(C$, 'isAssignable$reflect_Type$reflect_Type', function (type, toType) {
if (toType == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Destination type is null"]);
}return C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(type, toType, null);
}, 1);

Clazz.newMeth(C$, 'isAssignable$reflect_Type$reflect_Type$java_util_Map', function (type, toType, typeVarAssigns) {
if (toType == null  || Clazz.instanceOf(toType, "java.lang.Class") ) {
return C$.isAssignable$reflect_Type$Class(type, toType);
}if (Clazz.instanceOf(toType, "java.lang.reflect.ParameterizedType")) {
return C$.isAssignable$reflect_Type$reflect_ParameterizedType$java_util_Map(type, toType, typeVarAssigns);
}if (Clazz.instanceOf(toType, "java.lang.reflect.GenericArrayType")) {
return C$.isAssignable$reflect_Type$reflect_GenericArrayType$java_util_Map(type, toType, typeVarAssigns);
}if (Clazz.instanceOf(toType, "java.lang.reflect.WildcardType")) {
return C$.isAssignable$reflect_Type$reflect_WildcardType$java_util_Map(type, toType, typeVarAssigns);
}if (Clazz.instanceOf(toType, "java.lang.reflect.TypeVariable")) {
return C$.isAssignable$reflect_Type$reflect_TypeVariable$java_util_Map(type, toType, typeVarAssigns);
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["found an unhandled type: " + toType]);
}, 1);

Clazz.newMeth(C$, 'isAssignable$reflect_Type$Class', function (type, toClass) {
if (type == null ) {
return toClass == null  || !toClass.isPrimitive$() ;
}if (toClass == null ) {
return false;
}if (toClass.equals$O(type)) {
return true;
}if (Clazz.instanceOf(type, "java.lang.Class")) {
return toClass.isAssignableFrom$Class(type);
}if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
return C$.isAssignable$reflect_Type$Class(C$.getRawType$reflect_ParameterizedType(type), toClass);
}if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
for (var bound, $bound = 0, $$bound = (type).getBounds$(); $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (C$.isAssignable$reflect_Type$Class(bound, toClass)) {
return true;
}}
return false;
}if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
return toClass.equals$O(Clazz.getClass(java.lang.Object)) || toClass.isArray$() && C$.isAssignable$reflect_Type$Class((type).getGenericComponentType$(), toClass.getComponentType$())  ;
}if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
return false;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["found an unhandled type: " + type]);
}, 1);

Clazz.newMeth(C$, 'isAssignable$reflect_Type$reflect_ParameterizedType$java_util_Map', function (type, toParameterizedType, typeVarAssigns) {
if (type == null ) {
return true;
}if (toParameterizedType == null ) {
return false;
}if (toParameterizedType.equals$O(type)) {
return true;
}var toClass=C$.getRawType$reflect_ParameterizedType(toParameterizedType);
var fromTypeVarAssigns=C$.getTypeArguments$reflect_Type$Class$java_util_Map(type, toClass, null);
if (fromTypeVarAssigns == null ) {
return false;
}if (fromTypeVarAssigns.isEmpty$()) {
return true;
}var toTypeVarAssigns=C$.getTypeArguments$reflect_ParameterizedType$Class$java_util_Map(toParameterizedType, toClass, typeVarAssigns);
for (var $var, $$var = toTypeVarAssigns.keySet$().iterator$(); $$var.hasNext$()&&(($var=($$var.next$())),1);) {
var toTypeArg=C$.unrollVariableAssignments$reflect_TypeVariable$java_util_Map($var, toTypeVarAssigns);
var fromTypeArg=C$.unrollVariableAssignments$reflect_TypeVariable$java_util_Map($var, fromTypeVarAssigns);
if (fromTypeArg != null  && !toTypeArg.equals$O(fromTypeArg)  && !(Clazz.instanceOf(toTypeArg, "java.lang.reflect.WildcardType") && C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(fromTypeArg, toTypeArg, typeVarAssigns) ) ) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'unrollVariableAssignments$reflect_TypeVariable$java_util_Map', function ($var, typeVarAssigns) {
var result;
do {
result=typeVarAssigns.get$O($var);
if (Clazz.instanceOf(result, "java.lang.reflect.TypeVariable") && !result.equals$O($var) ) {
$var=result;
continue;
}break;
} while (true);
return result;
}, 1);

Clazz.newMeth(C$, 'isAssignable$reflect_Type$reflect_GenericArrayType$java_util_Map', function (type, toGenericArrayType, typeVarAssigns) {
if (type == null ) {
return true;
}if (toGenericArrayType == null ) {
return false;
}if (toGenericArrayType.equals$O(type)) {
return true;
}var toComponentType=toGenericArrayType.getGenericComponentType$();
if (Clazz.instanceOf(type, "java.lang.Class")) {
var cls=type;
return cls.isArray$() && C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(cls.getComponentType$(), toComponentType, typeVarAssigns) ;
}if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
return C$.isAssignable$reflect_Type$reflect_Type$java_util_Map((type).getGenericComponentType$(), toComponentType, typeVarAssigns);
}if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
for (var bound, $bound = 0, $$bound = C$.getImplicitUpperBounds$reflect_WildcardType(type); $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (C$.isAssignable$reflect_Type$reflect_Type(bound, toGenericArrayType)) {
return true;
}}
return false;
}if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
for (var bound, $bound = 0, $$bound = C$.getImplicitBounds$reflect_TypeVariable(type); $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (C$.isAssignable$reflect_Type$reflect_Type(bound, toGenericArrayType)) {
return true;
}}
return false;
}if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
return false;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["found an unhandled type: " + type]);
}, 1);

Clazz.newMeth(C$, 'isAssignable$reflect_Type$reflect_WildcardType$java_util_Map', function (type, toWildcardType, typeVarAssigns) {
if (type == null ) {
return true;
}if (toWildcardType == null ) {
return false;
}if (toWildcardType.equals$O(type)) {
return true;
}var toUpperBounds=C$.getImplicitUpperBounds$reflect_WildcardType(toWildcardType);
var toLowerBounds=C$.getImplicitLowerBounds$reflect_WildcardType(toWildcardType);
if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
var wildcardType=type;
var upperBounds=C$.getImplicitUpperBounds$reflect_WildcardType(wildcardType);
var lowerBounds=C$.getImplicitLowerBounds$reflect_WildcardType(wildcardType);
for (var toBound, $toBound = 0, $$toBound = toUpperBounds; $toBound<$$toBound.length&&((toBound=($$toBound[$toBound])),1);$toBound++) {
toBound=C$.substituteTypeVariables$reflect_Type$java_util_Map(toBound, typeVarAssigns);
for (var bound, $bound = 0, $$bound = upperBounds; $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (!C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(bound, toBound, typeVarAssigns)) {
return false;
}}
}
for (var toBound, $toBound = 0, $$toBound = toLowerBounds; $toBound<$$toBound.length&&((toBound=($$toBound[$toBound])),1);$toBound++) {
toBound=C$.substituteTypeVariables$reflect_Type$java_util_Map(toBound, typeVarAssigns);
for (var bound, $bound = 0, $$bound = lowerBounds; $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (!C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(toBound, bound, typeVarAssigns)) {
return false;
}}
}
return true;
}for (var toBound, $toBound = 0, $$toBound = toUpperBounds; $toBound<$$toBound.length&&((toBound=($$toBound[$toBound])),1);$toBound++) {
if (!C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(type, C$.substituteTypeVariables$reflect_Type$java_util_Map(toBound, typeVarAssigns), typeVarAssigns)) {
return false;
}}
for (var toBound, $toBound = 0, $$toBound = toLowerBounds; $toBound<$$toBound.length&&((toBound=($$toBound[$toBound])),1);$toBound++) {
if (!C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(C$.substituteTypeVariables$reflect_Type$java_util_Map(toBound, typeVarAssigns), type, typeVarAssigns)) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isAssignable$reflect_Type$reflect_TypeVariable$java_util_Map', function (type, toTypeVariable, typeVarAssigns) {
if (type == null ) {
return true;
}if (toTypeVariable == null ) {
return false;
}if (toTypeVariable.equals$O(type)) {
return true;
}if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
var bounds=C$.getImplicitBounds$reflect_TypeVariable(type);
for (var bound, $bound = 0, $$bound = bounds; $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (C$.isAssignable$reflect_Type$reflect_TypeVariable$java_util_Map(bound, toTypeVariable, typeVarAssigns)) {
return true;
}}
}if (Clazz.instanceOf(type, "java.lang.Class") || Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType") || Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType") || Clazz.instanceOf(type, "java.lang.reflect.WildcardType")  ) {
return false;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["found an unhandled type: " + type]);
}, 1);

Clazz.newMeth(C$, 'substituteTypeVariables$reflect_Type$java_util_Map', function (type, typeVarAssigns) {
if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable") && typeVarAssigns != null  ) {
var replacementType=typeVarAssigns.get$O(type);
if (replacementType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing assignment type for type variable " + type]);
}return replacementType;
}return type;
}, 1);

Clazz.newMeth(C$, 'getTypeArguments$reflect_ParameterizedType', function (type) {
return C$.getTypeArguments$reflect_ParameterizedType$Class$java_util_Map(type, C$.getRawType$reflect_ParameterizedType(type), null);
}, 1);

Clazz.newMeth(C$, 'getTypeArguments$reflect_Type$Class', function (type, toClass) {
return C$.getTypeArguments$reflect_Type$Class$java_util_Map(type, toClass, null);
}, 1);

Clazz.newMeth(C$, 'getTypeArguments$reflect_Type$Class$java_util_Map', function (type, toClass, subtypeVarAssigns) {
if (Clazz.instanceOf(type, "java.lang.Class")) {
return C$.getTypeArguments$Class$Class$java_util_Map(type, toClass, subtypeVarAssigns);
}if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
return C$.getTypeArguments$reflect_ParameterizedType$Class$java_util_Map(type, toClass, subtypeVarAssigns);
}if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
return C$.getTypeArguments$reflect_Type$Class$java_util_Map((type).getGenericComponentType$(), toClass.isArray$() ? toClass.getComponentType$() : toClass, subtypeVarAssigns);
}if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
for (var bound, $bound = 0, $$bound = C$.getImplicitUpperBounds$reflect_WildcardType(type); $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (C$.isAssignable$reflect_Type$Class(bound, toClass)) {
return C$.getTypeArguments$reflect_Type$Class$java_util_Map(bound, toClass, subtypeVarAssigns);
}}
return null;
}if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
for (var bound, $bound = 0, $$bound = C$.getImplicitBounds$reflect_TypeVariable(type); $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (C$.isAssignable$reflect_Type$Class(bound, toClass)) {
return C$.getTypeArguments$reflect_Type$Class$java_util_Map(bound, toClass, subtypeVarAssigns);
}}
return null;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["found an unhandled type: " + type]);
}, 1);

Clazz.newMeth(C$, 'getTypeArguments$reflect_ParameterizedType$Class$java_util_Map', function (parameterizedType, toClass, subtypeVarAssigns) {
var cls=C$.getRawType$reflect_ParameterizedType(parameterizedType);
if (!C$.isAssignable$reflect_Type$Class(cls, toClass)) {
return null;
}var ownerType=parameterizedType.getOwnerType$();
var typeVarAssigns;
if (Clazz.instanceOf(ownerType, "java.lang.reflect.ParameterizedType")) {
var parameterizedOwnerType=ownerType;
typeVarAssigns=C$.getTypeArguments$reflect_ParameterizedType$Class$java_util_Map(parameterizedOwnerType, C$.getRawType$reflect_ParameterizedType(parameterizedOwnerType), subtypeVarAssigns);
} else {
typeVarAssigns=subtypeVarAssigns == null  ? Clazz.new_(1,{K:"java.lang.reflect.TypeVariable",V:"java.lang.reflect.Type"},$I$(6,1)) : Clazz.new_(1,{K:"java.lang.reflect.TypeVariable",V:"java.lang.reflect.Type"},$I$(6,1).c$$java_util_Map,[subtypeVarAssigns]);
}var typeArgs=parameterizedType.getActualTypeArguments$();
var typeParams=cls.getTypeParameters$();
for (var i=0; i < typeParams.length; i++) {
var typeArg=typeArgs[i];
typeVarAssigns.put$TK$TV(typeParams[i], typeVarAssigns.containsKey$O(typeArg) ? typeVarAssigns.get$O(typeArg) : typeArg);
}
if (toClass.equals$O(cls)) {
return typeVarAssigns;
}return C$.getTypeArguments$reflect_Type$Class$java_util_Map(C$.getClosestParentType$Class$Class(cls, toClass), toClass, typeVarAssigns);
}, 1);

Clazz.newMeth(C$, 'getTypeArguments$Class$Class$java_util_Map', function (cls, toClass, subtypeVarAssigns) {
if (!C$.isAssignable$reflect_Type$Class(cls, toClass)) {
return null;
}if (cls.isPrimitive$()) {
if (toClass.isPrimitive$()) {
return Clazz.new_(1,{K:"java.lang.reflect.TypeVariable",V:"java.lang.reflect.Type"},$I$(6,1));
}cls=$I$(7).box$Class(cls);
}var typeVarAssigns=subtypeVarAssigns == null  ? Clazz.new_(1,{K:"java.lang.reflect.TypeVariable",V:"java.lang.reflect.Type"},$I$(6,1)) : Clazz.new_(1,{K:"java.lang.reflect.TypeVariable",V:"java.lang.reflect.Type"},$I$(6,1).c$$java_util_Map,[subtypeVarAssigns]);
if (toClass.equals$O(cls)) {
return typeVarAssigns;
}return C$.getTypeArguments$reflect_Type$Class$java_util_Map(C$.getClosestParentType$Class$Class(cls, toClass), toClass, typeVarAssigns);
}, 1);

Clazz.newMeth(C$, 'determineTypeArguments$Class$reflect_ParameterizedType', function (cls, superType) {
C$.validateNotNull$TT$S$OA(cls, "cls is null", []);
C$.validateNotNull$TT$S$OA(superType, "superType is null", []);
var superClass=C$.getRawType$reflect_ParameterizedType(superType);
if (!C$.isAssignable$reflect_Type$Class(cls, superClass)) {
return null;
}if (cls.equals$O(superClass)) {
return C$.getTypeArguments$reflect_ParameterizedType$Class$java_util_Map(superType, superClass, null);
}var midType=C$.getClosestParentType$Class$Class(cls, superClass);
if (Clazz.instanceOf(midType, "java.lang.Class")) {
return C$.determineTypeArguments$Class$reflect_ParameterizedType(midType, superType);
}var midParameterizedType=midType;
var midClass=C$.getRawType$reflect_ParameterizedType(midParameterizedType);
var typeVarAssigns=C$.determineTypeArguments$Class$reflect_ParameterizedType(midClass, superType);
C$.mapTypeVariablesToArguments$Class$reflect_ParameterizedType$java_util_Map(cls, midParameterizedType, typeVarAssigns);
return typeVarAssigns;
}, 1);

Clazz.newMeth(C$, 'mapTypeVariablesToArguments$Class$reflect_ParameterizedType$java_util_Map', function (cls, parameterizedType, typeVarAssigns) {
var ownerType=parameterizedType.getOwnerType$();
if (Clazz.instanceOf(ownerType, "java.lang.reflect.ParameterizedType")) {
C$.mapTypeVariablesToArguments$Class$reflect_ParameterizedType$java_util_Map(cls, ownerType, typeVarAssigns);
}var typeArgs=parameterizedType.getActualTypeArguments$();
var typeVars=C$.getRawType$reflect_ParameterizedType(parameterizedType).getTypeParameters$();
var typeVarList=$I$(4).asList$TTA(cls.getTypeParameters$());
for (var i=0; i < typeArgs.length; i++) {
var typeVar=typeVars[i];
var typeArg=typeArgs[i];
if (typeVarList.contains$O(typeArg) && typeVarAssigns.containsKey$O(typeVar) ) {
typeVarAssigns.put$TK$TV(typeArg, typeVarAssigns.get$O(typeVar));
}}
}, 1);

Clazz.newMeth(C$, 'getClosestParentType$Class$Class', function (cls, superClass) {
if (superClass.isInterface$()) {
var interfaceTypes=cls.getGenericInterfaces$();
var genericInterface=null;
for (var midType, $midType = 0, $$midType = interfaceTypes; $midType<$$midType.length&&((midType=($$midType[$midType])),1);$midType++) {
var midClass=null;
if (Clazz.instanceOf(midType, "java.lang.reflect.ParameterizedType")) {
midClass=C$.getRawType$reflect_ParameterizedType(midType);
} else if (Clazz.instanceOf(midType, "java.lang.Class")) {
midClass=midType;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unexpected generic" + " interface type found: " + midType ]);
}if (C$.isAssignable$reflect_Type$Class(midClass, superClass) && C$.isAssignable$reflect_Type$reflect_Type(genericInterface, midClass) ) {
genericInterface=midType;
}}
if (genericInterface != null ) {
return genericInterface;
}}return cls.getGenericSuperclass$();
}, 1);

Clazz.newMeth(C$, 'isInstance$O$reflect_Type', function (value, type) {
if (type == null ) {
return false;
}return value == null  ? !(Clazz.instanceOf(type, "java.lang.Class")) || !(type).isPrimitive$()  : C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(value.getClass$(), type, null);
}, 1);

Clazz.newMeth(C$, 'normalizeUpperBounds$reflect_TypeA', function (bounds) {
C$.validateNotNull$TT$S$OA(bounds, "null value specified for bounds array", []);
if (bounds.length < 2) {
return bounds;
}var types=Clazz.new_(1,{E:"java.lang.reflect.Type"},$I$(8,1).c$$I,[bounds.length]);
for (var type1, $type1 = 0, $$type1 = bounds; $type1<$$type1.length&&((type1=($$type1[$type1])),1);$type1++) {
var subtypeFound=false;
for (var type2, $type2 = 0, $$type2 = bounds; $type2<$$type2.length&&((type2=($$type2[$type2])),1);$type2++) {
if (type1 !== type2  && C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(type2, type1, null) ) {
subtypeFound=true;
break;
}}
if (!subtypeFound) {
types.add$TE(type1);
}}
return types.toArray$TTA(Clazz.array($I$(5), [types.size$()]));
}, 1);

Clazz.newMeth(C$, 'getImplicitBounds$reflect_TypeVariable', function (typeVariable) {
C$.validateNotNull$TT$S$OA(typeVariable, "typeVariable is null", []);
var bounds=typeVariable.getBounds$();
return bounds.length == 0 ? Clazz.array($I$(5), -1, [Clazz.getClass(java.lang.Object)]) : C$.normalizeUpperBounds$reflect_TypeA(bounds);
}, 1);

Clazz.newMeth(C$, 'getImplicitUpperBounds$reflect_WildcardType', function (wildcardType) {
C$.validateNotNull$TT$S$OA(wildcardType, "wildcardType is null", []);
var bounds=wildcardType.getUpperBounds$();
return bounds.length == 0 ? Clazz.array($I$(5), -1, [Clazz.getClass(java.lang.Object)]) : C$.normalizeUpperBounds$reflect_TypeA(bounds);
}, 1);

Clazz.newMeth(C$, 'getImplicitLowerBounds$reflect_WildcardType', function (wildcardType) {
C$.validateNotNull$TT$S$OA(wildcardType, "wildcardType is null", []);
var bounds=wildcardType.getLowerBounds$();
return bounds.length == 0 ? Clazz.array($I$(5), -1, [null]) : bounds;
}, 1);

Clazz.newMeth(C$, 'typesSatisfyVariables$java_util_Map', function (typeVarAssigns) {
C$.validateNotNull$TT$S$OA(typeVarAssigns, "typeVarAssigns is null", []);
for (var entry, $entry = typeVarAssigns.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var typeVar=entry.getKey$();
var type=entry.getValue$();
for (var bound, $bound = 0, $$bound = C$.getImplicitBounds$reflect_TypeVariable(typeVar); $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
if (!C$.isAssignable$reflect_Type$reflect_Type$java_util_Map(type, C$.substituteTypeVariables$reflect_Type$java_util_Map(bound, typeVarAssigns), typeVarAssigns)) {
return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'getRawType$reflect_ParameterizedType', function (parameterizedType) {
var rawType=parameterizedType.getRawType$();
if (!(Clazz.instanceOf(rawType, "java.lang.Class"))) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Wait... What!? Type of rawType: " + rawType]);
}return rawType;
}, 1);

Clazz.newMeth(C$, 'getRawType$reflect_Type$reflect_Type', function (type, assigningType) {
if (Clazz.instanceOf(type, "java.lang.Class")) {
return type;
}if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
return C$.getRawType$reflect_ParameterizedType(type);
}if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
if (assigningType == null ) {
return null;
}var genericDeclaration=(type).getGenericDeclaration$();
if (!(Clazz.instanceOf(genericDeclaration, "java.lang.Class"))) {
return null;
}var typeVarAssigns=C$.getTypeArguments$reflect_Type$Class(assigningType, genericDeclaration);
if (typeVarAssigns == null ) {
return null;
}var typeArgument=typeVarAssigns.get$O(type);
if (typeArgument == null ) {
return null;
}return C$.getRawType$reflect_Type$reflect_Type(typeArgument, assigningType);
}if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
var rawComponentType=C$.getRawType$reflect_Type$reflect_Type((type).getGenericComponentType$(), assigningType);
return P$.Types.array$Class(rawComponentType);
}if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
return null;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unknown type: " + type]);
}, 1);

Clazz.newMeth(C$, 'isArrayType$reflect_Type', function (type) {
return Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType") || Clazz.instanceOf(type, "java.lang.Class") && (type).isArray$()  ;
}, 1);

Clazz.newMeth(C$, 'getArrayComponentType$reflect_Type', function (type) {
if (Clazz.instanceOf(type, "java.lang.Class")) {
var clazz=type;
return clazz.isArray$() ? clazz.getComponentType$() : null;
}if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
return (type).getGenericComponentType$();
}return null;
}, 1);

Clazz.newMeth(C$, 'unrollVariables$java_util_Map$reflect_Type', function (typeArguments, type) {
if (typeArguments == null ) {
typeArguments=$I$(9).emptyMap$();
}if (C$.containsTypeVariables$reflect_Type(type)) {
if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
return C$.unrollVariables$java_util_Map$reflect_Type(typeArguments, typeArguments.get$O(type));
}if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
var p=type;
var parameterizedTypeArguments;
if (p.getOwnerType$() == null ) {
parameterizedTypeArguments=typeArguments;
} else {
parameterizedTypeArguments=Clazz.new_(1,{K:"java.lang.reflect.TypeVariable",V:"java.lang.reflect.Type"},$I$(6,1).c$$java_util_Map,[typeArguments]);
parameterizedTypeArguments.putAll$java_util_Map(C$.getTypeArguments$reflect_ParameterizedType(p));
}var args=p.getActualTypeArguments$();
for (var i=0; i < args.length; i++) {
var unrolled=C$.unrollVariables$java_util_Map$reflect_Type(parameterizedTypeArguments, args[i]);
if (unrolled != null ) {
args[i]=unrolled;
}}
return C$.parameterizeWithOwner$reflect_Type$Class$reflect_TypeA(p.getOwnerType$(), p.getRawType$(), args);
}if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
var wild=type;
return C$.wildcardType$().withUpperBounds$reflect_TypeA(C$.unrollBounds$java_util_Map$reflect_TypeA(typeArguments, wild.getUpperBounds$())).withLowerBounds$reflect_TypeA(C$.unrollBounds$java_util_Map$reflect_TypeA(typeArguments, wild.getLowerBounds$())).build$();
}}return type;
}, 1);

Clazz.newMeth(C$, 'unrollBounds$java_util_Map$reflect_TypeA', function (typeArguments, bounds) {
var result=Clazz.new_(1,{E:"java.lang.reflect.Type"},$I$(10,1));
for (var bound, $bound = 0, $$bound = bounds; $bound<$$bound.length&&((bound=($$bound[$bound])),1);$bound++) {
var unrolled=C$.unrollVariables$java_util_Map$reflect_Type(typeArguments, bound);
if (unrolled != null ) result.add$TE(unrolled);
}
return result.toArray$TTA(Clazz.array($I$(5), [result.size$()]));
}, 1);

Clazz.newMeth(C$, 'containsTypeVariables$reflect_Type', function (type) {
if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
return true;
}if (Clazz.instanceOf(type, "java.lang.Class")) {
return (type).getTypeParameters$().length > 0;
}if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
for (var arg, $arg = 0, $$arg = (type).getActualTypeArguments$(); $arg<$$arg.length&&((arg=($$arg[$arg])),1);$arg++) {
if (C$.containsTypeVariables$reflect_Type(arg)) {
return true;
}}
return false;
}if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
var wild=type;
return C$.containsTypeVariables$reflect_Type(C$.getImplicitLowerBounds$reflect_WildcardType(wild)[0]) || C$.containsTypeVariables$reflect_Type(C$.getImplicitUpperBounds$reflect_WildcardType(wild)[0]) ;
}return false;
}, 1);

Clazz.newMeth(C$, 'parameterize$Class$reflect_TypeA', function (raw, typeArguments) {
return C$.parameterizeWithOwner$reflect_Type$Class$reflect_TypeA(null, raw, typeArguments);
}, 1);

Clazz.newMeth(C$, 'parameterize$Class$java_util_Map', function (raw, typeArgMappings) {
C$.validateNotNull$TT$S$OA(raw, "raw class is null", []);
C$.validateNotNull$TT$S$OA(typeArgMappings, "typeArgMappings is null", []);
return C$.parameterizeWithOwner$reflect_Type$Class$reflect_TypeA(null, raw, C$.extractTypeArgumentsFrom$java_util_Map$reflect_TypeVariableA(typeArgMappings, raw.getTypeParameters$()));
}, 1);

Clazz.newMeth(C$, 'parameterizeWithOwner$reflect_Type$Class$reflect_TypeA', function (owner, raw, typeArguments) {
C$.validateNotNull$TT$S$OA(raw, "raw class is null", []);
var useOwner;
if (raw.getEnclosingClass$() == null ) {
C$.validateIsTrue$Z$S$OA(owner == null , "no owner allowed for top-level %s", [raw]);
useOwner=null;
} else if (owner == null ) {
useOwner=raw.getEnclosingClass$();
} else {
C$.validateIsTrue$Z$S$OA(C$.isAssignable$reflect_Type$Class(owner, raw.getEnclosingClass$()), "%s is invalid owner type for parameterized %s", [owner, raw]);
useOwner=owner;
}C$.validateNoNullElements$TTA$S$OA(typeArguments, "null type argument at index %s", []);
C$.validateIsTrue$Z$S$OA(raw.getTypeParameters$().length == typeArguments.length, "invalid number of type parameters specified: expected %s, got %s", [new Integer(raw.getTypeParameters$().length), new Integer(typeArguments.length)]);
return Clazz.new_($I$(11,1).c$$Class$reflect_Type$reflect_TypeA,[raw, useOwner, typeArguments]);
}, 1);

Clazz.newMeth(C$, 'parameterizeWithOwner$reflect_Type$Class$java_util_Map', function (owner, raw, typeArgMappings) {
C$.validateNotNull$TT$S$OA(raw, "raw class is null", []);
C$.validateNotNull$TT$S$OA(typeArgMappings, "typeArgMappings is null", []);
return C$.parameterizeWithOwner$reflect_Type$Class$reflect_TypeA(owner, raw, C$.extractTypeArgumentsFrom$java_util_Map$reflect_TypeVariableA(typeArgMappings, raw.getTypeParameters$()));
}, 1);

Clazz.newMeth(C$, 'extractTypeArgumentsFrom$java_util_Map$reflect_TypeVariableA', function (mappings, variables) {
var result=Clazz.array($I$(5), [variables.length]);
var index=0;
for (var $var, $$var = 0, $$$var = variables; $$var<$$$var.length&&(($var=($$$var[$$var])),1);$$var++) {
C$.validateIsTrue$Z$S$OA(mappings.containsKey$O($var), "missing argument mapping for %s", [C$.toString$reflect_Type($var)]);
result[index++]=mappings.get$O($var);
}
return result;
}, 1);

Clazz.newMeth(C$, 'wildcardType$', function () {
return Clazz.new_($I$(12,1));
}, 1);

Clazz.newMeth(C$, 'genericArrayType$reflect_Type', function (componentType) {
return Clazz.new_($I$(13,1).c$$reflect_Type,[C$.validateNotNull$TT$S$OA(componentType, "componentType is null", [])]);
}, 1);

Clazz.newMeth(C$, 'equals$reflect_Type$reflect_Type', function (t1, t2) {
if ($I$(3).equals$O$O(t1, t2)) {
return true;
}if (Clazz.instanceOf(t1, "java.lang.reflect.ParameterizedType")) {
return C$.equals$reflect_ParameterizedType$reflect_Type(t1, t2);
}if (Clazz.instanceOf(t1, "java.lang.reflect.GenericArrayType")) {
return C$.equals$reflect_GenericArrayType$reflect_Type(t1, t2);
}if (Clazz.instanceOf(t1, "java.lang.reflect.WildcardType")) {
return C$.equals$reflect_WildcardType$reflect_Type(t1, t2);
}return false;
}, 1);

Clazz.newMeth(C$, 'equals$reflect_ParameterizedType$reflect_Type', function (p, t) {
if (Clazz.instanceOf(t, "java.lang.reflect.ParameterizedType")) {
var other=t;
if (C$.equals$reflect_Type$reflect_Type(p.getRawType$(), other.getRawType$()) && C$.equals$reflect_Type$reflect_Type(p.getOwnerType$(), other.getOwnerType$()) ) {
return C$.equals$reflect_TypeA$reflect_TypeA(p.getActualTypeArguments$(), other.getActualTypeArguments$());
}}return false;
}, 1);

Clazz.newMeth(C$, 'equals$reflect_GenericArrayType$reflect_Type', function (a, t) {
return Clazz.instanceOf(t, "java.lang.reflect.GenericArrayType") && C$.equals$reflect_Type$reflect_Type(a.getGenericComponentType$(), (t).getGenericComponentType$()) ;
}, 1);

Clazz.newMeth(C$, 'equals$reflect_WildcardType$reflect_Type', function (w, t) {
if (Clazz.instanceOf(t, "java.lang.reflect.WildcardType")) {
var other=t;
return C$.equals$reflect_TypeA$reflect_TypeA(C$.getImplicitLowerBounds$reflect_WildcardType(w), C$.getImplicitLowerBounds$reflect_WildcardType(other)) && C$.equals$reflect_TypeA$reflect_TypeA(C$.getImplicitUpperBounds$reflect_WildcardType(w), C$.getImplicitUpperBounds$reflect_WildcardType(other)) ;
}return true;
}, 1);

Clazz.newMeth(C$, 'equals$reflect_TypeA$reflect_TypeA', function (t1, t2) {
if (t1.length == t2.length) {
for (var i=0; i < t1.length; i++) {
if (!C$.equals$reflect_Type$reflect_Type(t1[i], t2[i])) {
return false;
}}
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'toString$reflect_Type', function (type) {
return C$.toString$reflect_Type$java_util_Set(type, Clazz.new_(1,{E:"java.lang.reflect.Type"},$I$(8,1)));
}, 1);

Clazz.newMeth(C$, 'toString$reflect_Type$java_util_Set', function (type, done) {
C$.validateNotNull$TT(type);
if (Clazz.instanceOf(type, "java.lang.Class")) {
return C$.classToString$Class$java_util_Set(type, done);
}if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
return C$.parameterizedTypeToString$reflect_ParameterizedType$java_util_Set(type, done);
}if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
return C$.wildcardTypeToString$reflect_WildcardType$java_util_Set(type, done);
}if (Clazz.instanceOf(type, "org.scijava.util.Types.CaptureType")) {
return C$.captureTypeToString$org_scijava_util_Types_CaptureType$java_util_Set(type, done);
}if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
return C$.typeVariableToString$reflect_TypeVariable$java_util_Set(type, done);
}if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
return C$.genericArrayTypeToString$reflect_GenericArrayType(type);
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown generic type: " + type.getClass$().getName$()]);
}, 1);

Clazz.newMeth(C$, 'toLongString$reflect_TypeVariable', function ($var) {
C$.validateNotNull$TT$S$OA($var, "var is null", []);
var buf=Clazz.new_($I$(14,1));
var d=($var).getGenericDeclaration$();
if (Clazz.instanceOf(d, "java.lang.Class")) {
var c=d;
while (true){
if (c.getEnclosingClass$() == null ) {
buf.insert$I$S(0, c.getName$());
break;
}buf.insert$I$S(0, c.getSimpleName$()).insert$I$C(0, ".");
c=c.getEnclosingClass$();
}
} else if (Clazz.instanceOf(d, "java.lang.reflect.Type")) {
buf.append$S(C$.toString$reflect_Type(d));
} else {
buf.append$O(d);
}return buf.append$C(":").append$S(C$.typeVariableToString$reflect_TypeVariable$java_util_Set($var, Clazz.new_(1,{E:"java.lang.reflect.Type"},$I$(8,1)))).toString();
}, 1);

Clazz.newMeth(C$, 'classToString$Class$java_util_Set', function (c, done) {
var buf=Clazz.new_($I$(14,1));
if (c.getEnclosingClass$() != null ) {
buf.append$S(C$.classToString$Class$java_util_Set(c.getEnclosingClass$(), done)).append$C(".").append$S(c.getSimpleName$());
} else {
buf.append$S(c.getName$());
}if (c.getTypeParameters$().length > 0) {
buf.append$C("<");
C$.appendAllTo$StringBuilder$S$java_util_Set$reflect_TypeA(buf, ", ", done, c.getTypeParameters$());
buf.append$C(">");
}return buf.toString();
}, 1);

Clazz.newMeth(C$, 'typeVariableToString$reflect_TypeVariable$java_util_Set', function (v, done) {
var buf=Clazz.new_($I$(14,1).c$$S,[v.getName$()]);
if (done.contains$O(v)) return buf.toString();
done.add$TE(v);
var bounds=v.getBounds$();
if (bounds.length > 0 && !(bounds.length == 1 && Clazz.getClass(java.lang.Object).equals$O(bounds[0]) ) ) {
buf.append$S(" extends ");
C$.appendAllTo$StringBuilder$S$java_util_Set$reflect_TypeA(buf, " & ", done, v.getBounds$());
}return buf.toString();
}, 1);

Clazz.newMeth(C$, 'parameterizedTypeToString$reflect_ParameterizedType$java_util_Set', function (p, done) {
var buf=Clazz.new_($I$(14,1));
var useOwner=p.getOwnerType$();
var raw=p.getRawType$();
var typeArguments=p.getActualTypeArguments$();
if (useOwner == null ) {
buf.append$S(raw.getName$());
} else {
if (Clazz.instanceOf(useOwner, "java.lang.Class")) {
buf.append$S((useOwner).getName$());
} else {
buf.append$S(useOwner.toString());
}buf.append$C(".").append$S(raw.getSimpleName$());
}C$.appendAllTo$StringBuilder$S$java_util_Set$reflect_TypeA(buf.append$C("<"), ", ", done, typeArguments).append$C(">");
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'wildcardTypeToString$reflect_WildcardType$java_util_Set', function (w, done) {
var buf=Clazz.new_($I$(14,1)).append$C("?");
if (done.contains$O(w)) return buf.toString();
done.add$TE(w);
C$.appendTypeBounds$StringBuilder$reflect_TypeA$reflect_TypeA$java_util_Set(buf, w.getLowerBounds$(), w.getUpperBounds$(), done);
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'captureTypeToString$org_scijava_util_Types_CaptureType$java_util_Set', function (t, done) {
var buf=Clazz.new_($I$(14,1)).append$S("capture of ?");
if (done.contains$O(t)) return buf.toString();
done.add$TE(t);
C$.appendTypeBounds$StringBuilder$reflect_TypeA$reflect_TypeA$java_util_Set(buf, t.getLowerBounds$(), t.getUpperBounds$(), done);
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'genericArrayTypeToString$reflect_GenericArrayType', function (g) {
return String.format$S$OA("%s[]", [C$.toString$reflect_Type(g.getGenericComponentType$())]);
}, 1);

Clazz.newMeth(C$, 'appendTypeBounds$StringBuilder$reflect_TypeA$reflect_TypeA$java_util_Set', function (buf, lowerBounds, upperBounds, done) {
if (lowerBounds.length > 1 || lowerBounds.length == 1 && lowerBounds[0] != null   ) {
C$.appendAllTo$StringBuilder$S$java_util_Set$reflect_TypeA(buf.append$S(" super "), " & ", done, lowerBounds);
} else if (upperBounds.length > 1 || upperBounds.length == 1 && !Clazz.getClass(java.lang.Object).equals$O(upperBounds[0])  ) {
C$.appendAllTo$StringBuilder$S$java_util_Set$reflect_TypeA(buf.append$S(" extends "), " & ", done, upperBounds);
}}, 1);

Clazz.newMeth(C$, 'appendAllTo$StringBuilder$S$java_util_Set$reflect_TypeA', function (buf, sep, done, types) {
C$.validateNotEmpty$TTA(C$.validateNoNullElements$TTA(types));
if (types.length > 0) {
buf.append$S(C$.toString$reflect_Type$java_util_Set(types[0], done));
for (var i=1; i < types.length; i++) {
buf.append$S(sep).append$S(C$.toString$reflect_Type$java_util_Set(types[i], done));
}
}return buf;
}, 1);

Clazz.newMeth(C$, 'validateNotNull$TT', function (object) {
return C$.validateNotNull$TT$S$OA(object, "The validated object is null", []);
}, 1);

Clazz.newMeth(C$, 'validateNotNull$TT$S$OA', function (object, message, values) {
if (object == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[String.format$S$OA(message, values)]);
}return object;
}, 1);

Clazz.newMeth(C$, 'validateIsTrue$Z$S$OA', function (expression, message, values) {
if (expression == false ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[String.format$S$OA(message, values)]);
}}, 1);

Clazz.newMeth(C$, 'validateNoNullElements$TTA', function (array) {
return C$.validateNoNullElements$TTA$S$OA(array, "The validated array contains null element at index: %d", []);
}, 1);

Clazz.newMeth(C$, 'validateNoNullElements$TTA$S$OA', function (array, message, values) {
C$.validateNotNull$TT(array);
for (var i=0; i < array.length; i++) {
if (array[i] == null ) {
var values2=Clazz.array(java.lang.Object, [values.length + 1]);
System.arraycopy$O$I$O$I$I(values, 0, values2, 0, values.length);
values2[values.length]=Integer.valueOf$I(i);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[String.format$S$OA(message, values2)]);
}}
return array;
}, 1);

Clazz.newMeth(C$, 'validateNotEmpty$TTA', function (array) {
return C$.validateNotEmpty$TTA$S$OA(array, "The validated array is empty", []);
}, 1);

Clazz.newMeth(C$, 'validateNotEmpty$TTA$S$OA', function (array, message, values) {
if (array == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[String.format$S$OA(message, values)]);
}if (array.length == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[String.format$S$OA(message, values)]);
}return array;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Types.TypeUtils, "WildcardTypeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['upperBounds','java.lang.reflect.Type[]','+lowerBounds']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'withUpperBounds$reflect_TypeA', function (bounds) {
this.upperBounds=bounds;
return this;
});

Clazz.newMeth(C$, 'withLowerBounds$reflect_TypeA', function (bounds) {
this.lowerBounds=bounds;
return this;
});

Clazz.newMeth(C$, 'build$', function () {
return Clazz.new_($I$(1,1).c$$reflect_TypeA$reflect_TypeA,[this.upperBounds, this.lowerBounds]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Types.TypeUtils, "GenericArrayTypeImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.lang.reflect.GenericArrayType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['componentType','java.lang.reflect.Type']]]

Clazz.newMeth(C$, 'c$$reflect_Type', function (componentType) {
;C$.$init$.apply(this);
this.componentType=componentType;
}, 1);

Clazz.newMeth(C$, 'getGenericComponentType$', function () {
return this.componentType;
});

Clazz.newMeth(C$, 'toString', function () {
return $I$(2).toString$reflect_Type(this);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return obj === this  || Clazz.instanceOf(obj, "java.lang.reflect.GenericArrayType") && $I$(2).equals$reflect_GenericArrayType$reflect_Type(this, obj)  ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=1072;
result|=this.componentType.hashCode$();
return result;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Types.TypeUtils, "ParameterizedTypeImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.lang.reflect.ParameterizedType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['raw','Class','useOwner','java.lang.reflect.Type','typeArguments','java.lang.reflect.Type[]']]]

Clazz.newMeth(C$, 'c$$Class$reflect_Type$reflect_TypeA', function (raw, useOwner, typeArguments) {
;C$.$init$.apply(this);
this.raw=raw;
this.useOwner=useOwner;
this.typeArguments=typeArguments;
}, 1);

Clazz.newMeth(C$, 'getRawType$', function () {
return this.raw;
});

Clazz.newMeth(C$, 'getOwnerType$', function () {
return this.useOwner;
});

Clazz.newMeth(C$, 'getActualTypeArguments$', function () {
return this.typeArguments.clone$();
});

Clazz.newMeth(C$, 'toString', function () {
return $I$(2).toString$reflect_Type(this);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return obj === this  || Clazz.instanceOf(obj, "java.lang.reflect.ParameterizedType") && $I$(2).equals$reflect_ParameterizedType$reflect_Type(this, (obj))  ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=1136;
result|=this.raw.hashCode$();
result<<=4;
result|=$I$(3).hashCode$O(this.useOwner);
result<<=8;
result|=$I$(4).hashCode$OA(this.typeArguments);
return result;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Types.TypeUtils, "WildcardTypeImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.lang.reflect.WildcardType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EMPTY_BOUNDS=Clazz.array($I$(5), [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['+upperBounds','+lowerBounds']]
,['O',['EMPTY_BOUNDS','java.lang.reflect.Type[]']]]

Clazz.newMeth(C$, 'c$$reflect_Type$reflect_Type', function (upperBound, lowerBound) {
C$.c$$reflect_TypeA$reflect_TypeA.apply(this, [upperBound == null  ? null : Clazz.array($I$(5), -1, [upperBound]), lowerBound == null  ? null : Clazz.array($I$(5), -1, [lowerBound])]);
}, 1);

Clazz.newMeth(C$, 'c$$reflect_TypeA$reflect_TypeA', function (upperBounds, lowerBounds) {
;C$.$init$.apply(this);
this.upperBounds=upperBounds == null  ? C$.EMPTY_BOUNDS : upperBounds;
this.lowerBounds=lowerBounds == null  ? C$.EMPTY_BOUNDS : lowerBounds;
}, 1);

Clazz.newMeth(C$, 'getUpperBounds$', function () {
return this.upperBounds.clone$();
});

Clazz.newMeth(C$, 'getLowerBounds$', function () {
return this.lowerBounds.clone$();
});

Clazz.newMeth(C$, 'toString', function () {
return $I$(2).toString$reflect_Type(this);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return obj === this  || Clazz.instanceOf(obj, "java.lang.reflect.WildcardType") && $I$(2).equals$reflect_WildcardType$reflect_Type(this, obj)  ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=18688;
result|=$I$(4).hashCode$OA(this.upperBounds);
result<<=8;
result|=$I$(4).hashCode$OA(this.lowerBounds);
return result;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Types, "GenericTypeReflector", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.UNBOUND_WILDCARD=Clazz.new_($I$(1,1).c$$reflect_TypeA$reflect_TypeA,[Clazz.array($I$(5), -1, [Clazz.getClass(java.lang.Object)]), Clazz.array($I$(5), -1, [])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['UNBOUND_WILDCARD','java.lang.reflect.Type']]]

Clazz.newMeth(C$, 'erase$reflect_Type', function (type) {
if (Clazz.instanceOf(type, "java.lang.Class")) {
return type;
} else if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
return (type).getRawType$();
} else if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
var tv=type;
if (tv.getBounds$().length == 0) return Clazz.getClass(java.lang.Object);
return C$.erase$reflect_Type(tv.getBounds$()[0]);
} else if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
var aType=type;
return P$.Types.array$Class(C$.erase$reflect_Type(aType.getGenericComponentType$()));
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["not supported: " + type.getClass$()]);
}}, 1);

Clazz.newMeth(C$, 'mapTypeParameters$reflect_Type$reflect_Type', function (toMapType, typeAndParams) {
if (C$.isMissingTypeParameters$reflect_Type(typeAndParams)) {
return C$.erase$reflect_Type(toMapType);
}var varMap=Clazz.new_($I$(15,1));
var handlingTypeAndParams=typeAndParams;
while (Clazz.instanceOf(handlingTypeAndParams, "java.lang.reflect.ParameterizedType")){
var pType=handlingTypeAndParams;
var clazz=pType.getRawType$();
varMap.addAll$reflect_TypeVariableA$reflect_TypeA(clazz.getTypeParameters$(), pType.getActualTypeArguments$());
handlingTypeAndParams=pType.getOwnerType$();
}
return varMap.map$reflect_Type(toMapType);
}, 1);

Clazz.newMeth(C$, 'isMissingTypeParameters$reflect_Type', function (type) {
if (Clazz.instanceOf(type, "java.lang.Class")) {
for (var clazz=type; clazz != null ; clazz=clazz.getEnclosingClass$()) {
if (clazz.getTypeParameters$().length != 0) return true;
}
return false;
} else if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
return false;
} else {
throw Clazz.new_($I$(16,1).c$$O,["Unexpected type " + type.getClass$()]);
}}, 1);

Clazz.newMeth(C$, 'addWildcardParameters$Class', function (clazz) {
if (clazz.isArray$()) {
return P$.Types.array$reflect_Type(C$.addWildcardParameters$Class(clazz.getComponentType$()));
} else if (C$.isMissingTypeParameters$reflect_Type(clazz)) {
var vars=clazz.getTypeParameters$();
var $arguments=Clazz.array($I$(5), [vars.length]);
$I$(4).fill$OA$O($arguments, C$.UNBOUND_WILDCARD);
var owner=clazz.getDeclaringClass$() == null  ? null : C$.addWildcardParameters$Class(clazz.getDeclaringClass$());
return P$.Types.parameterize$Class$reflect_Type$reflect_TypeA(clazz, owner, $arguments);
} else {
return clazz;
}}, 1);

Clazz.newMeth(C$, 'getExactSuperType$reflect_Type$Class', function (type, searchClass) {
if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType") || Clazz.instanceOf(type, "java.lang.Class") || Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")  ) {
var clazz=C$.erase$reflect_Type(type);
if (searchClass === clazz ) {
return type;
}if (!searchClass.isAssignableFrom$Class(clazz)) return null;
}for (var superType, $superType = 0, $$superType = C$.getExactDirectSuperTypes$reflect_Type(type); $superType<$$superType.length&&((superType=($$superType[$superType])),1);$superType++) {
var result=C$.getExactSuperType$reflect_Type$Class(superType, searchClass);
if (result != null ) return result;
}
return null;
}, 1);

Clazz.newMeth(C$, 'getTypeParameter$reflect_Type$reflect_TypeVariable', function (type, variable) {
var clazz=variable.getGenericDeclaration$();
var superType=C$.getExactSuperType$reflect_Type$Class(type, clazz);
if (Clazz.instanceOf(superType, "java.lang.reflect.ParameterizedType")) {
var index=$I$(4).asList$TTA(clazz.getTypeParameters$()).indexOf$O(variable);
return (superType).getActualTypeArguments$()[index];
}return null;
}, 1);

Clazz.newMeth(C$, 'isSuperType$reflect_Type$reflect_Type', function (superType, subType) {
if (Clazz.instanceOf(superType, "java.lang.reflect.ParameterizedType") || Clazz.instanceOf(superType, "java.lang.Class") || Clazz.instanceOf(superType, "java.lang.reflect.GenericArrayType")  ) {
var superClass=C$.erase$reflect_Type(superType);
var mappedSubType=C$.getExactSuperType$reflect_Type$Class(C$.capture$reflect_Type(subType), superClass);
if (mappedSubType == null ) {
return false;
} else if (Clazz.instanceOf(superType, "java.lang.Class")) {
return true;
} else if (Clazz.instanceOf(mappedSubType, "java.lang.Class")) {
return true;
} else if (Clazz.instanceOf(mappedSubType, "java.lang.reflect.GenericArrayType")) {
var superComponentType=C$.getArrayComponentType$reflect_Type(superType);
Clazz.assert(C$, this, function(){return superComponentType != null });
var mappedSubComponentType=C$.getArrayComponentType$reflect_Type(mappedSubType);
Clazz.assert(C$, this, function(){return mappedSubComponentType != null });
return C$.isSuperType$reflect_Type$reflect_Type(superComponentType, mappedSubComponentType);
} else {
Clazz.assert(C$, this, function(){return Clazz.instanceOf(mappedSubType, "java.lang.reflect.ParameterizedType")});
var pMappedSubType=mappedSubType;
Clazz.assert(C$, this, function(){return pMappedSubType.getRawType$() === superClass });
var pSuperType=superType;
var superTypeArgs=pSuperType.getActualTypeArguments$();
var subTypeArgs=pMappedSubType.getActualTypeArguments$();
Clazz.assert(C$, this, function(){return superTypeArgs.length == subTypeArgs.length});
for (var i=0; i < superTypeArgs.length; i++) {
if (!C$.contains$reflect_Type$reflect_Type(superTypeArgs[i], subTypeArgs[i])) {
return false;
}}
return pSuperType.getOwnerType$() == null  || C$.isSuperType$reflect_Type$reflect_Type(pSuperType.getOwnerType$(), pMappedSubType.getOwnerType$()) ;
}} else if (Clazz.instanceOf(superType, "org.scijava.util.Types.CaptureType")) {
if (superType.equals$O(subType)) return true;
for (var lowerBound, $lowerBound = 0, $$lowerBound = (superType).getLowerBounds$(); $lowerBound<$$lowerBound.length&&((lowerBound=($$lowerBound[$lowerBound])),1);$lowerBound++) {
if (C$.isSuperType$reflect_Type$reflect_Type(lowerBound, subType)) {
return true;
}}
return false;
} else if (Clazz.instanceOf(superType, "java.lang.reflect.GenericArrayType")) {
return C$.isArraySupertype$reflect_Type$reflect_Type(superType, subType);
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["not implemented: " + superType.getClass$()]);
}}, 1);

Clazz.newMeth(C$, 'isArraySupertype$reflect_Type$reflect_Type', function (arraySuperType, subType) {
var superTypeComponent=C$.getArrayComponentType$reflect_Type(arraySuperType);
Clazz.assert(C$, this, function(){return superTypeComponent != null });
var subTypeComponent=C$.getArrayComponentType$reflect_Type(subType);
if (subTypeComponent == null ) {
return false;
}return C$.isSuperType$reflect_Type$reflect_Type(superTypeComponent, subTypeComponent);
}, 1);

Clazz.newMeth(C$, 'getArrayComponentType$reflect_Type', function (type) {
if (Clazz.instanceOf(type, "java.lang.Class")) {
var clazz=type;
return clazz.getComponentType$();
} else if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
var aType=type;
return aType.getGenericComponentType$();
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'contains$reflect_Type$reflect_Type', function (containingType, containedType) {
if (Clazz.instanceOf(containingType, "java.lang.reflect.WildcardType")) {
var wContainingType=containingType;
for (var upperBound, $upperBound = 0, $$upperBound = wContainingType.getUpperBounds$(); $upperBound<$$upperBound.length&&((upperBound=($$upperBound[$upperBound])),1);$upperBound++) {
if (!C$.isSuperType$reflect_Type$reflect_Type(upperBound, containedType)) {
return false;
}}
for (var lowerBound, $lowerBound = 0, $$lowerBound = wContainingType.getLowerBounds$(); $lowerBound<$$lowerBound.length&&((lowerBound=($$lowerBound[$lowerBound])),1);$lowerBound++) {
if (!C$.isSuperType$reflect_Type$reflect_Type(containedType, lowerBound)) {
return false;
}}
return true;
}return containingType.equals$O(containedType);
}, 1);

Clazz.newMeth(C$, 'getExactDirectSuperTypes$reflect_Type', function (type) {
if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType") || Clazz.instanceOf(type, "java.lang.Class") ) {
var clazz;
if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
clazz=(type).getRawType$();
} else {
clazz=type;
if (clazz.isArray$()) return C$.getArrayExactDirectSuperTypes$reflect_Type(clazz);
}var superInterfaces=clazz.getGenericInterfaces$();
var superClass=clazz.getGenericSuperclass$();
var result;
var resultIndex;
if (superClass == null ) {
result=Clazz.array($I$(5), [superInterfaces.length]);
resultIndex=0;
} else {
result=Clazz.array($I$(5), [superInterfaces.length + 1]);
resultIndex=1;
result[0]=C$.mapTypeParameters$reflect_Type$reflect_Type(superClass, type);
}for (var superInterface, $superInterface = 0, $$superInterface = superInterfaces; $superInterface<$$superInterface.length&&((superInterface=($$superInterface[$superInterface])),1);$superInterface++) {
result[resultIndex++]=C$.mapTypeParameters$reflect_Type$reflect_Type(superInterface, type);
}
return result;
} else if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
var tv=type;
return tv.getBounds$();
} else if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
return (type).getUpperBounds$();
} else if (Clazz.instanceOf(type, "org.scijava.util.Types.CaptureType")) {
return (type).getUpperBounds$();
} else if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
return C$.getArrayExactDirectSuperTypes$reflect_Type(type);
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["not implemented type: " + type]);
}}, 1);

Clazz.newMeth(C$, 'getArrayExactDirectSuperTypes$reflect_Type', function (arrayType) {
var typeComponent=C$.getArrayComponentType$reflect_Type(arrayType);
var result;
var resultIndex;
if (Clazz.instanceOf(typeComponent, "java.lang.Class") && (typeComponent).isPrimitive$() ) {
resultIndex=0;
result=Clazz.array($I$(5), [3]);
} else {
var componentSupertypes=C$.getExactDirectSuperTypes$reflect_Type(typeComponent);
result=Clazz.array($I$(5), [componentSupertypes.length + 3]);
for (resultIndex=0; resultIndex < componentSupertypes.length; resultIndex++) {
result[resultIndex]=P$.Types.array$reflect_Type(componentSupertypes[resultIndex]);
}
}result[resultIndex++]=Clazz.getClass(java.lang.Object);
result[resultIndex++]=Clazz.getClass(Cloneable,[]);
result[resultIndex++]=Clazz.getClass(java.io.Serializable,[]);
return result;
}, 1);

Clazz.newMeth(C$, 'getExactReturnType$reflect_Method$reflect_Type', function (m, type) {
var returnType=m.getGenericReturnType$();
var exactDeclaringType=C$.getExactSuperType$reflect_Type$Class(C$.capture$reflect_Type(type), m.getDeclaringClass$());
if (exactDeclaringType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The method " + m + " is not a member of type " + type ]);
}return C$.mapTypeParameters$reflect_Type$reflect_Type(returnType, exactDeclaringType);
}, 1);

Clazz.newMeth(C$, 'getExactFieldType$reflect_Field$reflect_Type', function (f, type) {
var returnType=f.getGenericType$();
var exactDeclaringType=C$.getExactSuperType$reflect_Type$Class(C$.capture$reflect_Type(type), f.getDeclaringClass$());
if (exactDeclaringType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The field " + f + " is not a member of type " + type ]);
}return C$.mapTypeParameters$reflect_Type$reflect_Type(returnType, exactDeclaringType);
}, 1);

Clazz.newMeth(C$, 'getExactParameterTypes$reflect_Method$reflect_Type', function (m, type) {
var parameterTypes=m.getGenericParameterTypes$();
var exactDeclaringType=C$.getExactSuperType$reflect_Type$Class(C$.capture$reflect_Type(type), m.getDeclaringClass$());
if (exactDeclaringType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The method " + m + " is not a member of type " + type ]);
}var result=Clazz.array($I$(5), [parameterTypes.length]);
for (var i=0; i < parameterTypes.length; i++) {
result[i]=C$.mapTypeParameters$reflect_Type$reflect_Type(parameterTypes[i], exactDeclaringType);
}
return result;
}, 1);

Clazz.newMeth(C$, 'capture$reflect_Type', function (type) {
var varMap=Clazz.new_($I$(15,1));
var toInit=Clazz.new_(1,{E:"org.scijava.util.Types.CaptureTypeImpl"},$I$(10,1));
if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
var pType=type;
var clazz=pType.getRawType$();
var $arguments=pType.getActualTypeArguments$();
var vars=clazz.getTypeParameters$();
var capturedArguments=Clazz.array($I$(5), [$arguments.length]);
Clazz.assert(C$, this, function(){return $arguments.length == vars.length});
for (var i=0; i < $arguments.length; i++) {
var argument=$arguments[i];
if (Clazz.instanceOf(argument, "java.lang.reflect.WildcardType")) {
var captured=Clazz.new_($I$(17,1).c$$reflect_WildcardType$reflect_TypeVariable,[argument, vars[i]]);
argument=captured;
toInit.add$TE(captured);
}capturedArguments[i]=argument;
varMap.add$reflect_TypeVariable$reflect_Type(vars[i], argument);
}
for (var captured, $captured = toInit.iterator$(); $captured.hasNext$()&&((captured=($captured.next$())),1);) {
captured.init$org_scijava_util_Types_VarMap(varMap);
}
var ownerType=(pType.getOwnerType$() == null ) ? null : C$.capture$reflect_Type(pType.getOwnerType$());
return P$.Types.parameterize$Class$reflect_Type$reflect_TypeA(clazz, ownerType, capturedArguments);
}return type;
}, 1);

Clazz.newMeth(C$, 'getUpperBoundClassAndInterfaces$reflect_Type', function (type) {
var result=Clazz.new_(1,{E:"Class"},$I$(18,1));
C$.buildUpperBoundClassAndInterfaces$reflect_Type$java_util_Set(type, result);
return Clazz.new_(1,{E:"Class"},$I$(10,1).c$$java_util_Collection,[result]);
}, 1);

Clazz.newMeth(C$, 'buildUpperBoundClassAndInterfaces$reflect_Type$java_util_Set', function (type, result) {
if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType") || Clazz.instanceOf(type, "java.lang.Class") ) {
result.add$TE(C$.erase$reflect_Type(type));
return;
}for (var superType, $superType = 0, $$superType = C$.getExactDirectSuperTypes$reflect_Type(type); $superType<$$superType.length&&((superType=($$superType[$superType])),1);$superType++) {
C$.buildUpperBoundClassAndInterfaces$reflect_Type$java_util_Set(superType, result);
}
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Types, "CaptureType", function(){
}, null, 'java.lang.reflect.Type');

C$.$clinit$=2;
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Types, "CaptureTypeImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.scijava.util.Types','org.scijava.util.Types.CaptureType']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['wildcard','java.lang.reflect.WildcardType','variable','java.lang.reflect.TypeVariable','lowerBounds','java.lang.reflect.Type[]','+upperBounds']]]

Clazz.newMeth(C$, 'c$$reflect_WildcardType$reflect_TypeVariable', function (wildcard, variable) {
;C$.$init$.apply(this);
this.wildcard=wildcard;
this.variable=variable;
this.lowerBounds=wildcard.getLowerBounds$();
}, 1);

Clazz.newMeth(C$, 'init$org_scijava_util_Types_VarMap', function (varMap) {
var upperBoundsList=Clazz.new_(1,{E:"java.lang.reflect.Type"},$I$(10,1));
upperBoundsList.addAll$java_util_Collection($I$(4).asList$TTA(varMap.map$reflect_TypeA(this.variable.getBounds$())));
var wildcardUpperBounds=$I$(4).asList$TTA(this.wildcard.getUpperBounds$());
if (wildcardUpperBounds.size$() > 0 && wildcardUpperBounds.get$I(0) === Clazz.getClass(java.lang.Object)  ) {
upperBoundsList.addAll$java_util_Collection(wildcardUpperBounds.subList$I$I(1, wildcardUpperBounds.size$()));
} else {
upperBoundsList.addAll$java_util_Collection(wildcardUpperBounds);
}this.upperBounds=Clazz.array($I$(5), [upperBoundsList.size$()]);
upperBoundsList.toArray$TTA(this.upperBounds);
});

Clazz.newMeth(C$, 'getLowerBounds$', function () {
return this.lowerBounds.clone$();
});

Clazz.newMeth(C$, 'getUpperBounds$', function () {
Clazz.assert(C$, this, function(){return this.upperBounds != null });
return this.upperBounds.clone$();
});

Clazz.newMeth(C$, 'toString', function () {
return "capture of " + this.wildcard;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Types, "VarMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_(1,{K:"java.lang.reflect.TypeVariable",V:"java.lang.reflect.Type"},$I$(6,1));
}, 1);

C$.$fields$=[['O',['map','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$reflect_TypeVariable$reflect_Type', function (variable, value) {
this.map.put$TK$TV(variable, value);
});

Clazz.newMeth(C$, 'addAll$reflect_TypeVariableA$reflect_TypeA', function (variables, values) {
Clazz.assert(C$, this, function(){return variables.length == values.length});
for (var i=0; i < variables.length; i++) {
this.map.put$TK$TV(variables[i], values[i]);
}
});

Clazz.newMeth(C$, 'map$reflect_Type', function (type) {
if (Clazz.instanceOf(type, "java.lang.Class")) {
return type;
} else if (Clazz.instanceOf(type, "java.lang.reflect.TypeVariable")) {
Clazz.assert(C$, this, function(){return this.map.containsKey$O(type)});
return this.map.get$O(type);
} else if (Clazz.instanceOf(type, "java.lang.reflect.ParameterizedType")) {
var pType=type;
return P$.Types.parameterize$Class$reflect_Type$reflect_TypeA(pType.getRawType$(), pType.getOwnerType$() == null  ? pType.getOwnerType$() : this.map$reflect_Type(pType.getOwnerType$()), this.map$reflect_TypeA(pType.getActualTypeArguments$()));
} else if (Clazz.instanceOf(type, "java.lang.reflect.WildcardType")) {
var wType=type;
return Clazz.new_($I$(1,1).c$$reflect_TypeA$reflect_TypeA,[this.map$reflect_TypeA(wType.getUpperBounds$()), this.map$reflect_TypeA(wType.getLowerBounds$())]);
} else if (Clazz.instanceOf(type, "java.lang.reflect.GenericArrayType")) {
return P$.Types.array$reflect_Type(this.map$reflect_Type((type).getGenericComponentType$()));
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["not implemented: mapping " + type.getClass$() + " (" + type + ")" ]);
}});

Clazz.newMeth(C$, 'map$reflect_TypeA', function (types) {
var result=Clazz.array($I$(5), [types.length]);
for (var i=0; i < types.length; i++) {
result[i]=this.map$reflect_Type(types[i]);
}
return result;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
