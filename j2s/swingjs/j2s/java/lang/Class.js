(function(){var P$=java.lang,p$1={},I$=[[0,'java.lang.reflect.Method','java.util.Arrays','java.util.Collections','java.util.ArrayList','sun.misc.CompoundEnumeration','java.util.Enumeration','java.lang.reflect.TypeVariable','swingjs.JSUtil','java.lang.reflect.Field','java.lang.reflect.Constructor','Boolean',['sun.reflect.annotation.AnnotationParser','.JSAnnotationObject'],'Void','java.util.HashMap','java.util.Objects','sun.reflect.annotation.AnnotationParser','sun.reflect.annotation.AnnotationSupport','sun.reflect.annotation.AnnotationType','java.util.LinkedHashMap',['Class','.AnnotationData'],'java.util.stream.Collectors','java.lang.annotation.Annotation','java.util.function.Function']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Class", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MethodArray',8],['AnnotationData',10]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.NO_PARAMETERS=Clazz.array(Class, [0]);
C$.UNKNOWN_PARAMETERS=Clazz.array(Class, [0]);
}

Clazz.newMeth(C$, '$init$', function () {
this.modifiers=-1;
this.fieldAnnMap=null;
this.enumConstants=null;
this.enumConstantDirectory=null;
}, 1);

C$.$fields$=[['I',['modifiers'],'S',['name'],'O',['$clazz$','java.lang.Object','$methodList$','String[]','fields','java.lang.reflect.Field[]','implementz','Class[]','fieldAnnMap','java.util.Map','declaredFields','java.lang.reflect.Field[]','$members$','java.lang.reflect.Method[]','enumConstants','_.T[]','enumConstantDirectory','java.util.Map','annotationData','Class.AnnotationData','annotationType','sun.reflect.annotation.AnnotationType','annotations','java.util.Map','+declaredAnnotations']]
,['O',['NO_PARAMETERS','Class[]','+UNKNOWN_PARAMETERS']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return (this.isInterface$() ? "interface " : (this.isPrimitive$() ? "" : "class ")) + this.getName$();
});

Clazz.newMeth(C$, 'forName$S', function (className) {
return C$.forName0$S$Z$ClassLoader(className, true, null);
}, 1);

Clazz.newMeth(C$, 'forName$S$Z$ClassLoader', function (name, initialize, loader) {
return C$.forName0$S$Z$ClassLoader(name, initialize, loader);
}, 1);

Clazz.newMeth(C$, 'forName0$S$Z$ClassLoader', function (name, initialize, loader) {
{
return Clazz.forName(name, initialize, loader);
}
}, 1);

Clazz.newMeth(C$, 'newInstance$', function () {
var c=this.$clazz$;
{
return new c;
}
});

Clazz.newMeth(C$, 'isInstance$O', function (obj) {
var c=this.$clazz$;
{
return Clazz.instanceOf(obj, c);
}
});

Clazz.newMeth(C$, 'isAssignableFrom$Class', function (cls) {
if (cls == null ) return false;
var a=cls.$clazz$;
var me=this.$clazz$;
return Clazz.instanceOf(a, me) ||false;
});

Clazz.newMeth(C$, 'isInterface$', function () {
var me=this.$clazz$;
{
return me.$isInterface;
}
});

Clazz.newMeth(C$, 'isArray$', function () {
var me=this.$clazz$;
{
return !!me.__ARRAYTYPE;
}
});

Clazz.newMeth(C$, 'isPrimitive$', function () {
{
return !!this.__PRIMITIVE;
}
});

Clazz.newMeth(C$, 'isAnnotation$', function () {
var me=this.$clazz$;
{
return !!me.$getMembers$;
}
});

Clazz.newMeth(C$, 'isEnum$', function () {
var me=this.$clazz$;
{
return !!me.$isEnum;
}
});

Clazz.newMeth(C$, 'isSynthetic$', function () {
return false;
});

Clazz.newMeth(C$, 'getName$', function () {
if (this.name == null ) this.name=p$1.getName0.apply(this, []);
return this.name;
});

Clazz.newMeth(C$, 'getName0', function () {
var code="";

code = this.$clazz$.__CLASS_NAME$__ || this.$clazz$.__CLASS_NAME__;
if (code) return (code.indexOf(".") < 0 ? "java.lang." + code : code);
code = this.$clazz$.__PARAMCODE;
switch (code) {
case "S":
code="String";
break;
case "I":
code="Integer";
break;
case "H":
code="Short";
break;
case "B":
code="Byte";
break;
case "L":
code="Long";
break;
case "C":
code="Character";
break;
default:
return null;
}
return "java.lang." + code;
}, p$1);

Clazz.newMeth(C$, 'getClassLoader$', function () {
var cl=this.getClassLoader0$();

cl.baseClass = this;
return cl;
});

Clazz.newMeth(C$, 'getClassLoader0$', function () {
var loader=null;

var baseFolder = Clazz._Loader.getJ2SLibBase();
loader = Clazz._Loader.requireLoaderByBase(baseFolder);
var me = this;
loader.getResourceAsStream$S = function(s) { return me.getResourceAsStream$S(s.indexOf("/") == 0 ? s : "/" + s) };
loader.getResource$S = function(s) { return me.getResource$S(s.indexOf("/") == 0 ? s : "/" + s) };
loader.getResources$S = function(s) { return me.getResources$S(s) };
loader.getParent$ = function() {return null};
return loader;
});

Clazz.newMeth(C$, 'getResources$S', function (name) {
var url1=this.getResource$S(name);
var url2=(name.indexOf$S("/") == 0 ? null : this.getClassLoader$().getResource$S(name));
var e;
if (url1 == null  && url2 == null  ) {
e=$I$(3).emptyEnumeration$();
} else {
var list=Clazz.new_(1,{E:"java.net.URL"},$I$(4,1).c$$I,[2]);
if (url1 != null ) list.add$TE(url1);
if (url2 != null  && !url2.equals$O(url1) ) list.add$TE(url2);
e=$I$(3).enumeration$java_util_Collection(list);
}return Clazz.new_($I$(5,1).c$$java_util_EnumerationA,[Clazz.array($I$(6), -1, [null, e])]);
});

Clazz.newMeth(C$, 'getTypeParameters$', function () {
return Clazz.array($I$(7), [0]);
});

Clazz.newMeth(C$, 'getSuperclass$', function () {
{
if (this.$clazz$ == java.lang.Object) return null;
return Clazz.getClass(this.$clazz$.superclazz || java.lang.Object);
}
});

Clazz.newMeth(C$, 'getInterfaces$', function () {
if (this.implementz == null ) {
var a=Clazz.array(Class, [0]);
var me=this.$clazz$;
var list=me.implementz ||null;
if (list != null ) {
for (var i=0, n=list.length; i < n; i++) {

a.push(Clazz.getClass(list[i]));
}
}this.implementz=a;
}return this.implementz;
});

Clazz.newMeth(C$, 'getComponentType$', function () {
return null;
});

Clazz.newMeth(C$, 'getModifiers$', function () {
return (this.modifiers >= 0 ? this.modifiers : 1 | (this.isEnum$() ? 16384 : this.isInterface$() ? 512 : 0) | (this.isAnnotation$() ? 8192 : 0) );
});

Clazz.newMeth(C$, '_setModifiers$I', function (m) {
this.modifiers=m;
});

Clazz.newMeth(C$, 'getSigners$', function () {
$I$(8).notImplemented$S(null);
return Clazz.array(java.lang.Object, [0]);
});

Clazz.newMeth(C$, 'setSigners$OA', function (signers) {
$I$(8).notImplemented$S(null);
});

Clazz.newMeth(C$, 'getDeclaringClass$', function () {
$I$(8).notImplemented$S(null);
return null;
});

Clazz.newMeth(C$, 'getSimpleName$', function () {
if (this.isArray$()) return this.getComponentType$().getSimpleName$() + "[]";
var name="";
{
name = (this.$clazz$.__ANON ? "" : this.$clazz$.__CLASS_NAME__);
name || (name = this.$clazz$.name);
}
return name.substring$I(name.lastIndexOf$S(".") + 1);
});

Clazz.newMeth(C$, 'getCanonicalName$', function () {
if (this.isArray$()) {
var canonicalName=this.getComponentType$().getCanonicalName$();
if (canonicalName != null ) return canonicalName + "[]";
 else return null;
}if (p$1.isLocalOrAnonymousClass.apply(this, [])) return null;
var name=null;

name = this.$clazz$.__CLASS_NAME__ || null;
return name;
});

Clazz.newMeth(C$, 'isAnonymousClass$', function () {
return "".equals$O(this.getSimpleName$());
});

Clazz.newMeth(C$, 'isLocalClass$', function () {
{
return !!this.$clazz$.__LOCAL;
}
});

Clazz.newMeth(C$, 'isLocalOrAnonymousClass', function () {
{
return !!this.$clazz$.__ISANON || !!this.$clazz$.__LOCAL;
}
}, p$1);

Clazz.newMeth(C$, 'getClasses$', function () {
var list=Clazz.new_($I$(4,1));
var currentClass=this;
while (currentClass != null ){
var members=currentClass.getDeclaredClasses$();
for (var i=0; i < members.length; i++) {
list.add$TE(members[i]);
}
currentClass=currentClass.getSuperclass$();
}
return list.toArray$TTA(Clazz.array(Class, [list.size$()]));
});

Clazz.newMeth(C$, 'getFields$', function () {
if (this.fields != null ) return this.fields;
this.fields=Clazz.array($I$(9), [0]);
p$1.addAllFields$reflect_FieldA$Z.apply(this, [this.fields, true]);
return this.fields;
});

Clazz.newMeth(C$, 'addAllFields$reflect_FieldA$Z', function (fields, recurse) {
var cl=this.$clazz$ ||null;

Clazz._initClass(cl,1,1,0);
p$1.addFields$O$reflect_FieldA$I.apply(this, [cl, fields, 0]);
p$1.addFields$O$reflect_FieldA$I.apply(this, [cl, fields, 8]);
if (!recurse) return;
var c=this.getSuperclass$();
if (c != null ) p$1.addAllFields$reflect_FieldA$Z.apply(c, [fields, true]);
}, p$1);

Clazz.newMeth(C$, 'getFieldAnnMap$O', function (cl) {
p$1.initAnnotationsIfNecessary.apply(this, []);
return this.fieldAnnMap;
});

Clazz.newMeth(C$, 'getMethods$', function () {
return (p$1.privateGetPublicMethods.apply(this, []));
});

Clazz.newMeth(C$, 'getConstructors$', function () {
return null;
});

Clazz.newMeth(C$, 'getField$S', function (name) {
this.getFields$();
for (var i=this.fields.length; --i >= 0; ) {
if (this.fields[i].jsName == name) return this.fields[i];
}
throw Clazz.new_(Clazz.load('NoSuchFieldException').c$$S,["field " + name]);
});

Clazz.newMeth(C$, 'addFields$O$reflect_FieldA$I', function (cl, f, modifiers) {
var fieldNames=Clazz._getFieldNames(cl, !!modifiers) || [] ||null;
var types=Clazz._getFieldTypes(cl, !!modifiers) || [] ||null;
for (var i=0; i < fieldNames.length; i++) {
p$1.addField$reflect_FieldA$S$I$S.apply(this, [f, fieldNames[i], modifiers, types[i]]);
}
}, p$1);

Clazz.newMeth(C$, 'excludeField$S', function (name) {
return (name == "prototype" || name.startsWith$S("__")  || name.startsWith$S("$") && name.endsWith$S("$")   || name == "$isInterface"  || name == "$isEnum"  || name == "implementz" );
});

Clazz.newMeth(C$, 'addField$reflect_FieldA$S$I$S', function (fields, name, modifiers, type) {
var f=Clazz.new_($I$(9,1).c$$Class$S$I,[this, name, modifiers]);
f._setTypeString$S(type);

fields.push(f);
}, p$1);

Clazz.newMeth(C$, 'getMethod$S$ClassA', function (name, paramTypes) {
var m=Clazz.new_($I$(1,1).c$$Class$S$ClassA$Class$ClassA$I,[this, name, paramTypes, null, null, 0]);
if (!this.isInterface$()) {
var o=null;
var qname=m.getSignature$();

o = this.$clazz$;
o = o[qname] || o.prototype && o.prototype[qname];
m._setJSMethod$O(o);
if (o == null ) throw Clazz.new_(Clazz.load('NoSuchMethodException').c$$S,[this.getName$() + "." + qname ]);
}return m;
});

Clazz.newMeth(C$, 'getConstructor$ClassA', function (parameterTypes) {
return Clazz.new_($I$(10,1).c$$Class$ClassA$ClassA$I,[this, parameterTypes, Clazz.array(Class, [0]), 0]);
});

Clazz.newMeth(C$, 'getDeclaredClasses$', function () {
return p$1.getDeclaredClasses0.apply(this, []);
});

Clazz.newMeth(C$, 'getDeclaredFields$', function () {
if (this.declaredFields != null ) return this.declaredFields;
this.declaredFields=Clazz.array($I$(9), [0]);
p$1.addAllFields$reflect_FieldA$Z.apply(this, [this.declaredFields, false]);
return this.declaredFields;
});

Clazz.newMeth(C$, 'getDeclaredMethods$', function () {
return this.getMethods$();
});

Clazz.newMeth(C$, 'getDeclaredConstructors$', function () {
return this.getConstructors$();
});

Clazz.newMeth(C$, 'getDeclaredField$S', function (name) {
return this.getField$S(name);
});

Clazz.newMeth(C$, 'getDeclaredMethod$S$ClassA', function (name, parameterTypes) {
return this.getMethod$S$ClassA(name, parameterTypes);
});

Clazz.newMeth(C$, 'getDeclaredConstructor$ClassA', function (parameterTypes) {
return this.getConstructor$ClassA(parameterTypes);
});

Clazz.newMeth(C$, 'getResourceAsStream$S', function (name) {
var clazzName=this.$clazz$ && (this.$clazz$.__CLASS_NAME$__ ||  this.$clazz$.__CLASS_NAME__)||"";
if (clazzName == "" && !name.startsWith$S("/") ) name="/" + name;
var data=null;
var fname=null;

if (!name) return null;
name = name.replace (/\\/g, '/');
var baseFolder = null;
fname = name;
if (arguments.length == 2 && name.indexOf ('/') != 0) { // additional argument
name = "/" + name;
} if (name.indexOf ('/') == 0) { if (arguments.length == 2)  // additional argument
baseFolder = arguments[1];
if (!baseFolder) baseFolder = Clazz._Loader.getJ2SLibBase();
if (baseFolder.charAt(baseFolder.length - 1) != '/') baseFolder += "/";
fname = baseFolder + name.substring (1);
} else { baseFolder = Clazz._Loader.getJ2SLibBase(); // getClass().getClassLoader() uses full path
fname = baseFolder;
if (this.$_$base == null) { // getClass().getResource() will be here
var pkgs = clazzName.split(".");
var fname = baseFolder;
if (fname.charAt(fname.length - 1) != '/') fname += "/";
var map = Clazz._allPackage;
for (var i = 0; i < pkgs.length - 1; i++) { if (!(map = map[pkgs[i]])) break;
fname += pkgs[i] + "/";
} } fname += name;
} var url = null;
var javapath = fname;
try { if (fname.indexOf(":/") < 0) { var d = document.location.href.split("?")[0].split("/");
d[d.length - 1] = fname;
fname = d.join("/");
} Clazz.load("java.net.URL");
url = Clazz.new_(java.net.URL.c$$S,[fname]);
} catch (e) { return null;
} var fileCache = J2S.getSetJavaFileCache(null);
data = fileCache && fileCache.get$O(javapath);
if (data == null ) data=$I$(8).J2S.getFileData(fname.toString(), null, true, true);
{
if (data == null || data == "error" || data.indexOf && data.indexOf("[Exception") == 0) return null;
var bytes = (data.__BYTESIZE == 1 ? data : J2S._strToBytes(data));
Clazz.load("java.io.BufferedInputStream");
Clazz.load("java.io.ByteArrayInputStream");
var is = Clazz.new_(java.io.BufferedInputStream.c$$java_io_InputStream, [Clazz.new_(java.io.ByteArrayInputStream.c$$BA, [bytes])]);
is.url = url;
url._streamData = is;
return is;
}
});

Clazz.newMeth(C$, 'getResource$S', function (name) {
{
var stream = this.getResourceAsStream$S(name);
return(stream ? stream.url : null);
}
});

Clazz.newMeth(C$, 'getPrimitiveOrStringClass$S', function (name) {
switch (name) {
case "S":
case "String":
return Clazz.getClass(String);
case "Z":
case "boolean":
return $I$(11).TYPE;
case "B":
case "byte":
return Byte.TYPE;
case "C":
case "char":
return Character.TYPE;
case "H":
case "short":
return Short.TYPE;
case "I":
case "int":
return Integer.TYPE;
case "L":
case "long":
return Long.TYPE;
case "F":
case "float":
return Float.TYPE;
case "D":
case "double":
return Double.TYPE;
default:
return null;
}
}, 1);

Clazz.newMeth(C$, 'privateGetPublicMethods', function () {
if (this.isAnnotation$()) {
if (this.$members$ == null ) {
this.$members$=$I$(12).createMethods$Class(this);
}return this.$members$;
}var ms;
if (this.$methodList$ != null ) {
ms=Clazz.array($I$(1), [this.$methodList$.length]);
for (var i=ms.length; --i >= 0; ) {
ms[i]=Clazz.new_($I$(1,1).c$$Class$S$ClassA$Class$ClassA$I,[this, this.$methodList$[i], null, Clazz.getClass($I$(13)), null, 1]);
}
return ms;
}ms=Clazz.array($I$(1), [0]);
var attr=null;
var o=null;

var p = this.$clazz$.prototype;
for (attr in p) { o = p[attr]; if (typeof o == "function" && o.exName && !o.__CLASS_NAME__ && o != this.$clazz$[attr] && o.exClazz == this.$clazz$) { // there are polynormical methods.
var m=Clazz.new_($I$(1,1).c$$Class$S$ClassA$Class$ClassA$I,[this, attr, Class.UNKNOWN_PARAMETERS, Clazz.getClass($I$(13)), Class.NO_PARAMETERS, 1]);
m._setJSMethod$O(o);

ms.push(m);
}} p = this.$clazz$;
for (attr in p) { o = p[attr];if (typeof o == "function" && o.exName && !o.__CLASS_NAME__ && o.exClazz == this.$clazz$) {
m=Clazz.new_($I$(1,1).c$$Class$S$ClassA$Class$ClassA$I,[this, attr, Class.UNKNOWN_PARAMETERS, Clazz.getClass($I$(13)), Class.NO_PARAMETERS, 9]);
m._setJSMethod$O(o);

ms.push(m);
}}
return ms;
}, p$1);

Clazz.newMeth(C$, 'arrayContentsEq$OA$OA', function (a1, a2) {
if (a1 == null ) {
return a2 == null  || a2.length == 0 ;
}if (a2 == null ) {
return a1.length == 0;
}if (a1.length != a2.length) {
return false;
}for (var i=0; i < a1.length; i++) {
if (a1[i] !== a2[i] ) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getDeclaredClasses0', function () {
return $I$(12).getDeclaredClasses$O(this.$clazz$);
}, p$1);

Clazz.newMeth(C$, 'argumentTypesToString$ClassA', function (parameterTypes) {
if (parameterTypes == null ) return "$";
var s="";
for (var i=0; i < parameterTypes.length; i++) s += "$" + (Clazz._getParamCode(parameterTypes[i]) ||null);

return s;
}, 1);

Clazz.newMeth(C$, 'getEnumConstants$', function () {
return this.getEnumConstantsShared$();
});

Clazz.newMeth(C$, 'getEnumConstantsShared$', function () {
if (this.enumConstants == null ) {
if (this.isEnum$()) this.enumConstants=this.$clazz$.values$() ||null;
}return this.enumConstants;
});

Clazz.newMeth(C$, 'enumConstantDirectory$', function () {
if (this.enumConstantDirectory == null ) {
var universe=this.getEnumConstantsShared$();
if (universe == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[this.getName$() + " is not an enum type"]);
var m=Clazz.new_(1,{K:"String",V:"Object"},$I$(14,1).c$$I,[2 * universe.length]);
for (var constant, $constant = 0, $$constant = universe; $constant<$$constant.length&&((constant=($$constant[$constant])),1);$constant++) m.put$TK$TV((constant).name$(), constant);

this.enumConstantDirectory=m;
}return this.enumConstantDirectory;
});

Clazz.newMeth(C$, 'cast$O', function (obj) {
if (obj != null  && !this.isInstance$O(obj) ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[p$1.cannotCastMsg$O.apply(this, [obj])]);
return obj;
});

Clazz.newMeth(C$, 'cannotCastMsg$O', function (obj) {
return "Cannot cast " + obj.getClass$().getName$() + " to " + this.getName$() ;
}, p$1);

Clazz.newMeth(C$, 'asSubclass$Class', function (clazz) {
if (clazz.isAssignableFrom$Class(this)) return this;
 else throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[this.toString()]);
});

Clazz.newMeth(C$, 'getAnnotation$Class', function (annotationClass) {
$I$(15).requireNonNull$TT(annotationClass);
p$1.initAnnotationsIfNecessary.apply(this, []);
return (this.annotations == null  ? null : this.annotations.get$O(annotationClass));
});

Clazz.newMeth(C$, 'getAnnotations$', function () {
p$1.initAnnotationsIfNecessary.apply(this, []);
return this.annotations.values$().toArray$TTA($I$(16).getEmptyAnnotationArray$());
});

Clazz.newMeth(C$, 'getAnnotationsByType$Class', function (annotationClass) {
$I$(15).requireNonNull$TT(annotationClass);
var annotationData=p$1.annotationData.apply(this, []);
return $I$(17).getAssociatedAnnotations$java_util_Map$Class$Class(annotationData.declaredAnnotations, this, annotationClass);
});

Clazz.newMeth(C$, 'annotationData', function () {
var annotationData=this.annotationData;
if (annotationData != null ) {
return annotationData;
}return annotationData=p$1.createAnnotationData$I.apply(this, [0]);
}, p$1);

Clazz.newMeth(C$, 'createAnnotationData$I', function (classRedefinedCount) {
var declaredAnnotations=$I$(16).parseAnnotations$S$Class$Z(null, this, false);
var superClass=this.getSuperclass$();
var annotations=null;
if (superClass != null ) {
var superAnnotations=p$1.annotationData.apply(superClass, []).annotations;
for (var e, $e = superAnnotations.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var annotationClass=e.getKey$();
if ($I$(18).getInstance$Class(annotationClass).isInherited$()) {
if (annotations == null ) {
annotations=Clazz.new_(1,{K:"Class",V:"java.lang.annotation.Annotation"},$I$(19,1).c$$I,[((Math.max(declaredAnnotations.size$(), Math.min(12, declaredAnnotations.size$() + superAnnotations.size$())) * 4 + 2)/3|0)]);
}annotations.put$TK$TV(annotationClass, e.getValue$());
}}
}if (annotations == null ) {
annotations=declaredAnnotations;
} else {
annotations.putAll$java_util_Map(declaredAnnotations);
}return Clazz.new_($I$(20,1).c$$java_util_Map$java_util_Map$I,[annotations, declaredAnnotations, classRedefinedCount]);
}, p$1);

Clazz.newMeth(C$, 'setAnnotationResult$sun_reflect_annotation_AnnotationType', function (type) {
this.annotationType=type;
});

Clazz.newMeth(C$, 'annotationType$', function () {
return (this.isAnnotation$() ? this : null);
});

Clazz.newMeth(C$, 'getAnnotationType$', function () {
return this.annotationType;
});

Clazz.newMeth(C$, 'getDeclaredAnnotationMap$', function () {
return p$1.annotationData.apply(this, []).declaredAnnotations;
});

Clazz.newMeth(C$, 'getDeclaredAnnotations$', function () {
p$1.initAnnotationsIfNecessary.apply(this, []);
return this.declaredAnnotations.values$().toArray$TTA($I$(16).getEmptyAnnotationArray$());
});

Clazz.newMeth(C$, 'initAnnotationsIfNecessary', function () {
if (this.annotations != null ) return;
this.declaredAnnotations=$I$(16).parseAnnotations$S$Class$Z(null, this, false);
var superClass=this.getSuperclass$();
if (superClass == null ) {
this.annotations=this.declaredAnnotations;
} else {
this.annotations=Clazz.new_(1,{K:"Class",V:"java.lang.annotation.Annotation"},$I$(14,1));
p$1.initAnnotationsIfNecessary.apply(superClass, []);
for (var e, $e = superClass.annotations.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var annotationClass=e.getKey$();
if ($I$(18).getInstance$Class(annotationClass).isInherited$()) this.annotations.put$TK$TV(annotationClass, e.getValue$());
}
this.annotations.putAll$java_util_Map(this.declaredAnnotations);
}}, p$1);

Clazz.newMeth(C$, 'setAnnotationType$sun_reflect_annotation_AnnotationType', function (type) {
this.annotationType=type;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var name=null;

name = this.$clazz$.__CLASS_NAME__ || this.$clazz$.toString();
return name.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
{
return o && o.__CLASS_NAME__ == "java.lang.Class" && o.$clazz$ == this.$clazz$;
}
});

Clazz.newMeth(C$, 'getArgumentArray$ClassA$OA$Z', function (types, args, isProxy) {
var a=Clazz.array(java.lang.Object, [args == null  ? 0 : args.length]);
if (args != null  && (types != null  || isProxy ) ) for (var i=args.length; --i >= 0; ) a[i]=(isProxy ? args[i] : (types[i].__PRIMITIVE && args[i].valueOf ? args[i].valueOf() : args[i]) ||null);

return a;
}, 1);

Clazz.newMeth(C$, 'getPackage$', function () {
return null;
});

Clazz.newMeth(C$, 'getJ2SSuperclassFor$Class', function (cl) {
var c=null;
{
c = cl.getSuperclass$ && cl.getSuperclass$();
}
if (c == null  && cl !== Clazz.getClass(java.lang.Object)  ) {
c=Clazz.getClass(java.lang.Object);
}return c;
}, 1);

Clazz.newMeth(C$, 'getDeclaredAnnotation$Class', function (annotationClass) {
$I$(15).requireNonNull$TT(annotationClass);
for (var annotation, $annotation = 0, $$annotation = this.getDeclaredAnnotations$(); $annotation<$$annotation.length&&((annotation=($$annotation[$annotation])),1);$annotation++) {
if (annotationClass.equals$O(annotation.annotationType$())) {
return annotationClass.cast$O(annotation);
}}
return null;
});

Clazz.newMeth(C$, 'getDeclaredAnnotationsByType$Class', function (annotationClass) {
$I$(15).requireNonNull$TT(annotationClass);
return $I$(17).getDirectlyAndIndirectlyPresent$java_util_Map$Class($I$(2).stream$TTA(this.getDeclaredAnnotations$()).collect$java_util_stream_Collector($I$(21).toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Class$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return t.annotationType$.apply(t,[])});
})()
)); return Clazz.new_(1,{T:"? super java.lang.annotation.Annotation",R:"? extends java.lang.Class"},Class$lambda1.$init$, [this, null])})($I$(22)), $I$(23).identity$(), ((Class$lambda2$||(Class$lambda2$=(((P$.Class$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Class$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (first, second) { return (first);});
})()
), Clazz.new_(1,{T:"java.lang.annotation.Annotation"},Class$lambda2.$init$, [this, null])))))), ((P$.Class$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Class$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(19,1),[])});
})()
), Clazz.new_(1,{T:"java.util.LinkedHashMap"},Class$lambda3.$init$, [this, null])))), annotationClass);
});

Clazz.newMeth(C$, 'isAnnotationPresent$Class', function (annotationClass) {
if (annotationClass == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return this.getAnnotation$Class(annotationClass) != null ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Class, "MethodArray", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['length'],'O',['methods','java.lang.reflect.Method[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.methods=Clazz.array($I$(1), [20]);
this.length=0;
}, 1);

Clazz.newMeth(C$, 'add$reflect_Method', function (m) {
if (this.length == this.methods.length) {
this.methods=$I$(2).copyOf$TTA$I(this.methods, 2 * this.methods.length);
}this.methods[this.length++]=m;
});

Clazz.newMeth(C$, 'addAll$reflect_MethodA', function (ma) {
for (var i=0; i < ma.length; i++) {
this.add$reflect_Method(ma[i]);
}
});

Clazz.newMeth(C$, 'addAll$Class_MethodArray', function (ma) {
for (var i=0; i < ma.length$(); i++) {
this.add$reflect_Method(ma.get$I(i));
}
});

Clazz.newMeth(C$, 'addIfNotPresent$reflect_Method', function (newMethod) {
for (var i=0; i < this.length; i++) {
var m=this.methods[i];
if (m === newMethod  || (m != null  && m.equals$O(newMethod) ) ) {
return;
}}
this.add$reflect_Method(newMethod);
});

Clazz.newMeth(C$, 'addAllIfNotPresent$Class_MethodArray', function (newMethods) {
for (var i=0; i < newMethods.length$(); i++) {
var m=newMethods.get$I(i);
if (m != null ) {
this.addIfNotPresent$reflect_Method(m);
}}
});

Clazz.newMeth(C$, 'length$', function () {
return this.length;
});

Clazz.newMeth(C$, 'get$I', function (i) {
return this.methods[i];
});

Clazz.newMeth(C$, 'removeByNameAndSignature$reflect_Method', function (toRemove) {
for (var i=0; i < this.length; i++) {
var m=this.methods[i];
if (m != null  && m.getName$() == toRemove.getName$()  && Class.arrayContentsEq$OA$OA(m.getParameterTypes$(), toRemove.getParameterTypes$()) ) {
this.methods[i]=null;
}}
});

Clazz.newMeth(C$, 'compactAndTrim$', function () {
var newPos=0;
for (var pos=0; pos < this.length; pos++) {
var m=this.methods[pos];
if (m != null ) {
if (pos != newPos) {
this.methods[newPos]=m;
}newPos++;
}}
if (newPos != this.methods.length) {
this.methods=$I$(2).copyOf$TTA$I(this.methods, newPos);
}});

Clazz.newMeth(C$, 'getArray$', function () {
return this.methods;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Class, "AnnotationData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['annotations','java.util.Map','+declaredAnnotations']]]

Clazz.newMeth(C$, 'c$$java_util_Map$java_util_Map$I', function (annotations, declaredAnnotations, redefinedCount) {
;C$.$init$.apply(this);
this.annotations=annotations;
this.declaredAnnotations=declaredAnnotations;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
