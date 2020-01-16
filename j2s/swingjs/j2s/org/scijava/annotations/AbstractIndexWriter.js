(function(){var P$=Clazz.newPackage("org.scijava.annotations"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentSkipListMap','java.util.LinkedHashMap','java.util.TreeMap','java.io.PrintStream','org.scijava.annotations.IndexReader','java.lang.reflect.Array']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractIndexWriter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StreamFactory',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_(1,{K:"String",V:"java.util.Map"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['map','java.util.Map']]]

Clazz.newMeth(C$, 'foundAnnotations$', function () {
return !this.map.isEmpty$();
});

Clazz.newMeth(C$, 'add$java_util_Map$S$S', function (annotationValues, annotationName, className) {
var list=this.map.get$O(annotationName);
if (list == null ) {
list=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1));
this.map.put$TK$TV(annotationName, list);
}var o=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(3,1));
o.put$TK$TV("class", className);
o.put$TK$TV("values", annotationValues);
list.put$TK$TV(className, o);
});

Clazz.newMeth(C$, 'write$org_scijava_annotations_AbstractIndexWriter_StreamFactory', function (factory) {
for (var entry, $entry = this.map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var annotationName=entry.getKey$();
this.merge$S$org_scijava_annotations_AbstractIndexWriter_StreamFactory(annotationName, factory);
var out=Clazz.new_($I$(4,1).c$$java_io_OutputStream,[factory.openOutput$S(annotationName)]);
for (var o, $o = entry.getValue$().values$().iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
p$1.writeObject$java_io_PrintStream$O.apply(this, [out, this.adapt$O(o)]);
}
out.close$();
}
this.map.clear$();
});

Clazz.newMeth(C$, 'merge$S$org_scijava_annotations_AbstractIndexWriter_StreamFactory', function (annotationName, factory) {
var $in=factory.openInput$S(annotationName);
if ($in == null ) {
return;
}var m=this.map.get$O(annotationName);
if (m == null ) {
m=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1));
this.map.put$TK$TV(annotationName, m);
}var changedCount=m.size$();
var hasObsoletes=false;
var reader=Clazz.new_($I$(5,1).c$$java_io_InputStream$S,[$in, annotationName + " from " + $in ]);
try {
for (; ; ) {
var entry=reader.next$();
if (entry == null ) {
break;
}var className=entry.get$O("class");
if (factory.isClassObsolete$S(className)) {
hasObsoletes=true;
} else if (m.containsKey$O(className)) {
if (!hasObsoletes && entry.equals$O(m.get$O(className)) ) {
changedCount--;
}} else {
m.put$TK$TV(className, entry);
}}
} finally {
reader.close$();
}
if (changedCount == 0 && !hasObsoletes ) {
this.map.remove$O(annotationName);
}});

Clazz.newMeth(C$, 'adapt$O', function (o) {
if (Clazz.instanceOf(o, "java.lang.annotation.Annotation")) {
return this.adapt$TA(o);
} else if (Clazz.instanceOf(o, "javax.lang.model.element.AnnotationValue")) {
return this.adapt$O((o).getValue$());
} else if (Clazz.instanceOf(o, "java.lang.Enum")) {
return C$.adapt$Enum(o);
}return o;
});

Clazz.newMeth(C$, 'adapt$TA', function (annotation) {
var result=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(3,1));
for (var method, $method = 0, $$method = annotation.annotationType$().getMethods$(); $method<$$method.length&&((method=($$method[$method])),1);$method++) try {
if (method.getDeclaringClass$() === annotation.annotationType$() ) {
result.put$TK$TV(method.getName$(), this.adapt$O(method.invoke$O$OA(annotation, [])));
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}

return result;
});

Clazz.newMeth(C$, 'adapt$Enum', function (e) {
var result=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(3,1));
result.put$TK$TV("enum", e.getClass$().getName$());
result.put$TK$TV("value", e.name$());
return result;
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_PrintStream$O', function (out, o) {
if (o == null ) {
out.print$S("null");
} else if (Clazz.instanceOf(o, "java.lang.Boolean")) {
out.print$S(o ? "true" : "false");
} else if (Clazz.instanceOf(o, "java.lang.Byte")) {
out.print$I(($b$[0] = (o).valueOf(), $b$[0]));
} else if (Clazz.instanceOf(o, "java.lang.Short")) {
out.print$I(($s$[0] = (o).valueOf(), $s$[0]));
} else if (Clazz.instanceOf(o, "java.lang.Integer")) {
out.print$I(((o).valueOf()|0));
} else if (Clazz.instanceOf(o, "java.lang.Long")) {
out.print$J(((o).valueOf()|0));
} else if (Clazz.instanceOf(o, "java.lang.Float")) {
out.print$F((o).valueOf());
} else if (Clazz.instanceOf(o, "java.lang.Double")) {
out.print$D((o).valueOf());
} else if (Clazz.instanceOf(o, "java.lang.Character")) {
p$1.writeString$java_io_PrintStream$S.apply(this, [out, "" + o]);
} else if (Clazz.instanceOf(o, "java.lang.String")) {
p$1.writeString$java_io_PrintStream$S.apply(this, [out, o]);
} else if (Clazz.instanceOf(o, "java.lang.Class")) {
p$1.writeString$java_io_PrintStream$S.apply(this, [out, (o).getName$()]);
} else if (Clazz.instanceOf(o, "java.util.List")) {
p$1.writeArray$java_io_PrintStream$java_util_List.apply(this, [out, o]);
} else if (o.getClass$().isArray$()) {
p$1.writeArray$java_io_PrintStream$O.apply(this, [out, o]);
} else if (Clazz.instanceOf(o, "java.util.Map")) {
p$1.writeMap$java_io_PrintStream$java_util_Map.apply(this, [out, o]);
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Cannot handle object of type " + o.getClass$()]);
}}, p$1);

Clazz.newMeth(C$, 'writeMap$java_io_PrintStream$OA', function (out, pairs) {
if ((pairs.length % 2) != 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Key without value!"]);
}out.write$I("{".$c());
for (var i=0; i < pairs.length; i+=2) {
if (i > 0) {
out.write$I(",".$c());
}p$1.writeString$java_io_PrintStream$S.apply(this, [out, pairs[i]]);
out.write$I(":".$c());
p$1.writeObject$java_io_PrintStream$O.apply(this, [out, pairs[i + 1]]);
}
out.write$I("}".$c());
});

Clazz.newMeth(C$, 'writeMap$java_io_PrintStream$java_util_Map', function (out, m) {
out.write$I("{".$c());
var first=true;
for (var entry, $entry = m.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (first) {
first=false;
} else {
out.write$I(",".$c());
}p$1.writeString$java_io_PrintStream$S.apply(this, [out, entry.getKey$().toString()]);
out.write$I(":".$c());
p$1.writeObject$java_io_PrintStream$O.apply(this, [out, entry.getValue$()]);
}
out.write$I("}".$c());
}, p$1);

Clazz.newMeth(C$, 'writeArray$java_io_PrintStream$java_util_List', function (out, list) {
out.write$I("[".$c());
var first=true;
for (var o, $o = list.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (first) {
first=false;
} else {
out.write$I(",".$c());
}o=this.adapt$O(o);
p$1.writeObject$java_io_PrintStream$O.apply(this, [out, o]);
}
out.write$I("]".$c());
}, p$1);

Clazz.newMeth(C$, 'writeArray$java_io_PrintStream$O', function (out, o) {
out.write$I("[".$c());
var length=$I$(6).getLength$O(o);
for (var i=0; i < length; i++) {
if (i > 0) {
out.write$I(",".$c());
}p$1.writeObject$java_io_PrintStream$O.apply(this, [out, this.adapt$O($I$(6).get$O$I(o, i))]);
}
out.write$I("]".$c());
}, p$1);

Clazz.newMeth(C$, 'writeString$java_io_PrintStream$S', function (out, string) {
out.write$I("\"".$c());
for (var c, $c = 0, $$c = string.toCharArray$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c == "\"" || c == "\\" ) {
out.write$I("\\".$c());
out.write$I(c.$c());
} else if (c >= " " && c.$c() <= 127  ) {
out.write$I(c.$c());
} else {
var hex=Integer.toHexString$I(c.$c());
out.print$S("\\u");
if (hex.length$() < 4) {
out.print$S("0000".substring$I(hex.length$()));
}out.print$S(hex);
}}
out.write$I("\"".$c());
}, p$1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.AbstractIndexWriter, "StreamFactory", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
