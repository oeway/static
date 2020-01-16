(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),I$=[[0,'java.util.Hashtable','org.rcsb.cif.model.BaseCategory','java.util.Objects','java.io.BufferedReader','java.io.InputStreamReader','java.util.stream.Collectors','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','java.util.Map','org.rcsb.cif.binary.codec.Codec','java.lang.reflect.Array']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ModelFactory");
C$.CATEGORY_MAP=null;
C$.COLUMN_MAP=null;
C$.CATEGORY_NAME_MAP=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.CATEGORY_MAP=Clazz.new_($I$(1,1));
C$.COLUMN_MAP=Clazz.new_($I$(1,1));
C$.CATEGORY_NAME_MAP=Clazz.new_($I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCategory$S', function (categoryName) {
var c=C$.CATEGORY_MAP.get$O(categoryName);
if (c == null ) {
try {
var className=C$.ensureModelPropertiesLoaded$S(categoryName);
if (className != null  && className.length$() > 0 ) {
c=Clazz.forName(className);
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
System.err.println$S("ModelFactory could not add category " + categoryName + " " + e );
} else {
throw e;
}
}
C$.CATEGORY_MAP.put$TK$TV(categoryName, c == null  ? Clazz.getClass($I$(2)) : c);
} else if (c === Clazz.getClass($I$(2)) ) {
return null;
}return c;
}, 1);

Clazz.newMeth(C$, 'loadCategoryProperties$S', function (catName) {
var pt=catName.indexOf$S("_");
var primary=(pt < 0 ? catName : catName.substring$I$I(0, pt)).toLowerCase$();
var fname="properties/" + primary + ".properties" ;
var inputStream=Clazz.getClass(C$).getResourceAsStream$S(fname);
$I$(3).requireNonNull$TT$S(inputStream, "could not load " + fname);
var lookupReader=Clazz.new_($I$(4,1).c$$java_io_Reader,[Clazz.new_($I$(5,1).c$$java_io_InputStream,[inputStream])]);
var lines=lookupReader.lines$().map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.model.ModelFactory$lambda1*/(P$.ModelFactory$lambda1$||(P$.ModelFactory$lambda1$=(((P$.ModelFactory$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ModelFactory$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (line) { return (line.split$S("="));});
})()
), Clazz.new_(P$.ModelFactory$lambda1.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(6).toList$());
lookupReader.close$();
for (var i=0; i < lines.size$(); i++) {
var prop=lines.get$I(i);
var name=prop[0];
var line=prop[1];
catName=primary + (name.equals$O("_") ? "" : "_" + name);
var info=line.split$S(",");
var className=(info[0].length$() == 0 ? "" : "org.rcsb.cif.model.generated" + info[0]);
C$.CATEGORY_NAME_MAP.put$TK$TV(catName, className);
if (!catName.toLowerCase$().equals$O(catName)) C$.CATEGORY_NAME_MAP.put$TK$TV(catName.toLowerCase$(), className);
for (var c=info.length; --c >= 1; ) {
var type=info[c].substring$I$I(0, 1);
var colClass=C$.forColumnName$S(type);
var col=catName + "." + info[c].substring$I(1) ;
C$.COLUMN_MAP.put$TK$TV(col, colClass);
if (!col.equals$O(col.toLowerCase$())) C$.COLUMN_MAP.put$TK$TV(col.toLowerCase$(), colClass);
}
}
}, 1);

Clazz.newMeth(C$, 'forColumnName$S', function (columnName) {
switch (columnName) {
case "FloatColumn":
case "F":
return Clazz.getClass($I$(7));
case "IntColumn":
case "I":
return Clazz.getClass($I$(8));
case "StrColumn":
case "S":
return Clazz.getClass($I$(9));
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[columnName + " is not known - cannot acquire prototype"]);
}
}, 1);

Clazz.newMeth(C$, 'createCategoryText$S$java_util_Map', function (categoryName, textColumns) {
var categoryClass=C$.getCategory$S(categoryName);
if (categoryClass != null ) {
try {
return categoryClass.getConstructor$ClassA([Clazz.getClass(String), Clazz.getClass($I$(10),['clear$','compute$TK$java_util_function_BiFunction','computeIfAbsent$TK$java_util_function_Function','computeIfPresent$TK$java_util_function_BiFunction','containsKey$O','containsValue$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$TV','hashCode$','isEmpty$','keySet$','merge$TK$TV$java_util_function_BiFunction','put$TK$TV','putAll$java_util_Map','putIfAbsent$TK$TV','remove$O','remove$O$O','replace$TK$TV','replace$TK$TV$TV','replaceAll$java_util_function_BiFunction','size$','values$'])]).newInstance$OA([categoryName, textColumns]);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["could not instantiate category class", e]);
} else {
throw e;
}
}
} else {
return Clazz.new_($I$(2,1).c$$S$java_util_Map,[categoryName, textColumns]);
}}, 1);

Clazz.newMeth(C$, 'createCategoryBinary$S$I$OA', function (categoryName, rowCount, encodedColumns) {
try {
var categoryClass=C$.getCategory$S(categoryName);
if (categoryClass != null ) {
return categoryClass.getConstructor$ClassA([Clazz.getClass(String), Integer.TYPE, Clazz.array(java.lang.Object, -1)]).newInstance$OA([categoryName, new Integer(rowCount), encodedColumns]);
} else {
return Clazz.new_($I$(2,1).c$$S$I$OA,[categoryName, rowCount, encodedColumns]);
}} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["could not instantiate category class for " + categoryName, e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createEmptyCategory$S', function (name) {
return Clazz.new_($I$(2,1).c$$S,[name]);
}, 1);

Clazz.newMeth(C$, 'createColumnText$S$S$S$I$I', function (categoryName, columnName, data, startToken, endToken) {
return C$.createColumnText$S$S$S$IA$IA(categoryName, columnName, data, Clazz.array(Integer.TYPE, -1, [startToken]), Clazz.array(Integer.TYPE, -1, [endToken]));
}, 1);

Clazz.newMeth(C$, 'createColumnText$S$S$S$IA$IA', function (categoryName, columnName, data, startToken, endToken) {
var columnClass=C$.COLUMN_MAP.get$O(categoryName + "." + columnName );
return C$.createColumnText$S$S$S$IA$IA$Class(categoryName, columnName, data, startToken, endToken, columnClass == null  ? Clazz.getClass($I$(9)) : columnClass);
}, 1);

Clazz.newMeth(C$, 'createColumnText$S$S$S$IA$IA$Class', function (categoryName, columnName, data, startToken, endToken, columnType) {
var rowCount=startToken.length;
var columnClass=C$.COLUMN_MAP.get$O((categoryName + "." + columnName ).toLowerCase$());
if (columnClass == null ) {
if (columnType === Clazz.getClass($I$(8)) ) {
return Clazz.new_($I$(8,1).c$$S$I$S$IA$IA,[columnName, rowCount, data, startToken, endToken]);
} else if (columnType === Clazz.getClass($I$(7)) ) {
return Clazz.new_($I$(7,1).c$$S$I$S$IA$IA,[columnName, rowCount, data, startToken, endToken]);
} else {
return Clazz.new_($I$(9,1).c$$S$I$S$IA$IA,[columnName, rowCount, data, startToken, endToken]);
}} else {
try {
return columnClass.getConstructor$ClassA([Clazz.getClass(String), Integer.TYPE, Clazz.getClass(String), Clazz.array(Integer.TYPE, -1), Clazz.array(Integer.TYPE, -1)]).newInstance$OA([columnName, new Integer(rowCount), data, startToken, endToken]);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'createColumnBinary$S$S$java_util_Map', function (categoryName, columnName, encodedColumn) {
var binaryData=$I$(11).decode$java_util_Map(encodedColumn.get$O("data"));
var rowCount=$I$(12).getLength$O(binaryData);
var m=encodedColumn.get$O("mask");
var mask=(m == null  || m.isEmpty$()  ? null : $I$(11).decode$java_util_Map(m));
var columnClass=C$.COLUMN_MAP.get$O(categoryName + "." + columnName );
if (columnClass != null ) {
try {
return columnClass.getConstructor$ClassA([Clazz.getClass(String), Integer.TYPE, Clazz.getClass(java.lang.Object), Clazz.array(Integer.TYPE, -1)]).newInstance$OA([columnName, new Integer(rowCount), binaryData, mask]);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["could not instantiate column class", e]);
} else {
throw e;
}
}
} else {
if (Clazz.instanceOf(binaryData, Clazz.array(Integer.TYPE, -1))) {
return Clazz.new_($I$(8,1).c$$S$I$O$IA,[columnName, rowCount, binaryData, mask]);
} else if (Clazz.instanceOf(binaryData, Clazz.array(Double.TYPE, -1))) {
return Clazz.new_($I$(7,1).c$$S$I$O$IA,[columnName, rowCount, binaryData, mask]);
} else {
return Clazz.new_($I$(9,1).c$$S$I$O$IA,[columnName, rowCount, binaryData, mask]);
}}}, 1);

Clazz.newMeth(C$, 'createEmptyColumn$S$S', function (categoryName, columnName) {
var columnClass=C$.COLUMN_MAP.get$O(categoryName + "." + columnName );
if (columnClass != null ) {
try {
return columnClass.getConstructor$ClassA([Clazz.getClass(String)]).newInstance$OA([columnName]);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
} else {
return Clazz.new_($I$(9,1).c$$S,[columnName]);
}}, 1);

Clazz.newMeth(C$, 'ensureModelPropertiesLoaded$S', function (categoryName) {
categoryName=categoryName.toLowerCase$();
var className=C$.CATEGORY_NAME_MAP.get$O(categoryName);
if (className == null ) {
try {
C$.loadCategoryProperties$S(categoryName);
className=C$.CATEGORY_NAME_MAP.get$O(categoryName);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"NullPointerException")){
System.err.println$S("ModelFactory could not add category " + categoryName + " " + e );
} else {
throw e;
}
}
}return className;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
