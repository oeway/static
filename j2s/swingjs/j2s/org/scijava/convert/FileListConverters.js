(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[[0,'java.io.File','org.scijava.util.StringUtils','java.util.ArrayList','java.util.Arrays','java.util.stream.Collectors']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileListConverters", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StringToFileConverter',9],['StringToFileArrayConverter',9],['FileToStringConverter',9],['FileArrayToStringConverter',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileListConverters, "StringToFileConverter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
return Clazz.new_($I$(1,1).c$$S,[src]);
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass(String);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.FileListConverters.StringToFileConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="0.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileListConverters, "StringToFileArrayConverter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var tokens=$I$(2).splitUnquoted$S$S(src, ",");
var fileList=Clazz.new_(1,{E:"java.io.File"},$I$(3,1));
for (var filePath, $filePath = 0, $$filePath = tokens; $filePath<$$filePath.length&&((filePath=($$filePath[$filePath])),1);$filePath++) {
fileList.add$TE(Clazz.new_($I$(1,1).c$$S,[filePath.replaceAll$S$S("^\"|\"$", "")]));
}
return fileList.toArray$TTA(Clazz.array($I$(1), [fileList.size$()]));
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array($I$(1), -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass(String);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.FileListConverters.StringToFileArrayConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="0.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileListConverters, "FileToStringConverter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
return (src).getAbsolutePath$();
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass(String);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(1));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.FileListConverters.FileToStringConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="0.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileListConverters, "FileArrayToStringConverter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var result=$I$(4).asList$TTA(src).stream$().map$java_util_function_Function((P$.FileListConverters$FileArrayToStringConverter$lambda1$||(P$.FileListConverters$FileArrayToStringConverter$lambda1$=(((P$.FileListConverters$FileArrayToStringConverter$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FileListConverters$FileArrayToStringConverter$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (f) {
var path=f.getAbsolutePath$();
return path.contains$CharSequence(",") ? "\"" + path + "\""  : path;
});
})()
), Clazz.new_(1,{T:"? super java.io.File",R:"? extends java.lang.String"},P$.FileListConverters$FileArrayToStringConverter$lambda1.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(5).toList$());
return String.join$CharSequence$Iterable(",", result);
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass(String);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array($I$(1), -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.FileListConverters.FileArrayToStringConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="0.0" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
