(function(){var P$=Clazz.newPackage("org.scijava.convert"),p$1={},I$=[[0,'org.scijava.util.Types','org.scijava.util.ConversionUtils','java.util.Collection','org.scijava.util.ArrayUtils','java.lang.reflect.Array','java.lang.reflect.Modifier','java.util.List','java.util.ArrayList','java.util.Set','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultConverter", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$reflect_Type', function (src, dest) {
var componentType=$I$(1).component$reflect_Type(dest);
if (componentType != null ) {
return p$1.convertToArray$O$Class.apply(this, [src, $I$(1).raw$reflect_Type(componentType)]);
}if (Clazz.instanceOf(dest, "java.lang.reflect.ParameterizedType") && p$1.isCollection$reflect_Type.apply(this, [dest]) ) {
return p$1.convertToCollection$O$reflect_ParameterizedType.apply(this, [src, dest]);
}return this.convert$O$Class(src, $I$(1).raw$reflect_Type(dest));
});

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var saneDest=$I$(1).box$Class(dest);
if (p$1.isArray$reflect_Type.apply(this, [dest])) {
var array=p$1.convertToArray$O$Class.apply(this, [src, $I$(1).raw$reflect_Type($I$(1).component$reflect_Type(dest))]);
return array;
}if (Clazz.instanceOf(src, "java.lang.Number")) {
var number=src;
if (saneDest === Clazz.getClass(Byte) ) {
var result=new Byte(number.byteValue$());
var typedResult=result;
return typedResult;
}if (saneDest === Clazz.getClass(Double) ) {
var result=new Double(number.doubleValue$());
var typedResult=result;
return typedResult;
}if (saneDest === Clazz.getClass(Float) ) {
var result=new Float(number.floatValue$());
var typedResult=result;
return typedResult;
}if (saneDest === Clazz.getClass(Integer) ) {
var result=new Integer(number.intValue$());
var typedResult=result;
return typedResult;
}if (saneDest === Clazz.getClass(Long) ) {
var result=new Long(number.longValue$());
var typedResult=result;
return typedResult;
}if (saneDest === Clazz.getClass(Short) ) {
var result=new Short(number.shortValue$());
var typedResult=result;
return typedResult;
}}if (Clazz.instanceOf(src, "java.lang.String")) {
var s=src;
if (s.isEmpty$()) {
return $I$(1).nullValue$Class(dest);
}if (saneDest === Clazz.getClass(Character) ) {
var c=Clazz.new_(Character.c$$C,[s.charAt$I(0)]);
var result=c;
return result;
}if (dest.isEnum$()) {
var result=$I$(2).convertToEnum$S$Class(s, dest);
if (result != null ) return result;
}}if (saneDest === Clazz.getClass(String) ) {
var sValue=src.toString();
var result=sValue;
return result;
}try {
var ctor=p$1.getConstructor$Class$Class.apply(this, [saneDest, src.getClass$()]);
if (ctor == null ) return null;
var instance=ctor.newInstance$OA([src]);
return instance;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass(java.lang.Object);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass(java.lang.Object);
});

Clazz.newMeth(C$, 'getConstructor$Class$Class', function (type, argType) {
for (var ctor, $ctor = 0, $$ctor = type.getConstructors$(); $ctor<$$ctor.length&&((ctor=($$ctor[$ctor])),1);$ctor++) {
var params=ctor.getParameterTypes$();
if (params.length == 1 && $I$(1).isAssignable$reflect_Type$reflect_Type($I$(1).box$Class(argType), $I$(1).box$Class(params[0])) ) {
return ctor;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'isArray$reflect_Type', function (type) {
return $I$(1).component$reflect_Type(type) != null ;
}, p$1);

Clazz.newMeth(C$, 'isCollection$reflect_Type', function (type) {
return $I$(1).isAssignable$reflect_Type$reflect_Type($I$(1).raw$reflect_Type(type), Clazz.getClass($I$(3),['add$TE','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','parallelStream$','remove$O','removeAll$java_util_Collection','removeIf$java_util_function_Predicate','retainAll$java_util_Collection','size$','spliterator$','stream$','toArray$','toArray$TTA']));
}, p$1);

Clazz.newMeth(C$, 'convertToArray$O$Class', function (value, componentType) {
var items=$I$(4).toCollection$O(value);
var array=Clazz.array(componentType, items.size$());
var index=0;
for (var item, $item = items.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
$I$(5).set$O$I$O(array, index++, this.convert$O$Class(item, componentType));
}
return array;
}, p$1);

Clazz.newMeth(C$, 'convertToCollection$O$reflect_ParameterizedType', function (value, pType) {
var collection=p$1.createCollection$Class.apply(this, [$I$(1).raw$reflect_Type(pType)]);
if (collection == null ) return null;
var items=$I$(4).toCollection$O(value);
var collectionType=pType.getActualTypeArguments$()[0];
for (var item, $item = items.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
collection.add$TE(this.convert$O$reflect_Type(item, collectionType));
}
return collection;
}, p$1);

Clazz.newMeth(C$, 'createCollection$Class', function (type) {
if (type.isInterface$() || $I$(6).isAbstract$I(type.getModifiers$()) ) {
if ($I$(1).isAssignable$reflect_Type$reflect_Type(type, Clazz.getClass($I$(7),['add$TE','add$I$TE','addAll$java_util_Collection','addAll$I$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','get$I','hashCode$','indexOf$O','isEmpty$','iterator$','lastIndexOf$O','listIterator$','listIterator$I','remove$O','remove$I','removeAll$java_util_Collection','replaceAll$java_util_function_UnaryOperator','retainAll$java_util_Collection','set$I$TE','size$','sort$java_util_Comparator','spliterator$','subList$I$I','toArray$','toArray$TTA']))) return Clazz.new_(1,{E:"java.lang.Object"},$I$(8,1));
if ($I$(1).isAssignable$reflect_Type$reflect_Type(type, Clazz.getClass($I$(9),['add$TE','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','remove$O','removeAll$java_util_Collection','retainAll$java_util_Collection','size$','spliterator$','toArray$','toArray$TTA']))) return Clazz.new_(1,{E:"java.lang.Object"},$I$(10,1));
return null;
}try {
var c=type.newInstance$();
return c;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var exc = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var exc = e$$;
{
return null;
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'canConvert$Class$reflect_Type', function (src, dest) {
if (p$1.isArray$reflect_Type.apply(this, [dest])) return true;
if (Clazz.instanceOf(dest, "java.lang.reflect.ParameterizedType") && p$1.isCollection$reflect_Type.apply(this, [dest]) && p$1.createCollection$Class.apply(this, [$I$(1).raw$reflect_Type(dest)]) != null   ) {
return true;
}return C$.superclazz.prototype.canConvert$Class$reflect_Type.apply(this, [src, dest]);
});

Clazz.newMeth(C$, 'canConvert$Class$Class', function (src, dest) {
var saneDest=$I$(1).box$Class(dest);
if ($I$(1).isAssignable$reflect_Type$reflect_Type($I$(1).box$Class(src), Clazz.getClass(Number)) && ($I$(1).isByte$Class(dest) || $I$(1).isDouble$Class(dest) || $I$(1).isFloat$Class(dest) || $I$(1).isInteger$Class(dest) || $I$(1).isLong$Class(dest) || $I$(1).isShort$Class(dest)  ) ) {
return true;
}if (saneDest === Clazz.getClass(String) ) return true;
if ($I$(1).isAssignable$reflect_Type$reflect_Type(src, Clazz.getClass(String))) {
if (saneDest === Clazz.getClass(Character) ) return true;
if (dest.isEnum$()) return true;
}try {
return p$1.getConstructor$Class$Class.apply(this, [saneDest, src]) != null ;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
return false;
} else {
throw exc;
}
}
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.DefaultConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="-1000000.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
