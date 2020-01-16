(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[[0,'org.scijava.util.IntArray','org.scijava.util.ByteArray','org.scijava.util.BoolArray','org.scijava.util.CharArray','org.scijava.util.ShortArray','org.scijava.util.FloatArray','org.scijava.util.DoubleArray','org.scijava.util.LongArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayConverters", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['IntArrayWrapper',9],['IntArrayUnwrapper',9],['ByteArrayWrapper',9],['ByteArrayUnwrapper',9],['BoolArrayWrapper',9],['BoolArrayUnwrapper',9],['CharArrayWrapper',9],['CharArrayUnwrapper',9],['ShortArrayWrapper',9],['ShortArrayUnwrapper',9],['FloatArrayWrapper',9],['FloatArrayUnwrapper',9],['DoubleArrayWrapper',9],['DoubleArrayUnwrapper',9],['LongArrayWrapper',9],['LongArrayUnwrapper',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "IntArrayWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Integer.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.IntArrayWrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "IntArrayUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayUnwrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array(Integer.TYPE, -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(1));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.IntArrayUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "ByteArrayWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(2));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Byte.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.ByteArrayWrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "ByteArrayUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayUnwrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array(Byte.TYPE, -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(2));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.ByteArrayUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "BoolArrayWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(3));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Boolean.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.BoolArrayWrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "BoolArrayUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayUnwrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array(Boolean.TYPE, -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(3));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.BoolArrayUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "CharArrayWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(4));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Character.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.CharArrayWrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "CharArrayUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayUnwrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array(Character.TYPE, -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(4));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.CharArrayUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "ShortArrayWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(5));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Short.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.ShortArrayWrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "ShortArrayUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayUnwrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array(Short.TYPE, -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(5));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.ShortArrayUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "FloatArrayWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(6));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Float.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.FloatArrayWrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "FloatArrayUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayUnwrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array(Float.TYPE, -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(6));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.FloatArrayUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "DoubleArrayWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(7));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Double.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.DoubleArrayWrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "DoubleArrayUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayUnwrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array(Double.TYPE, -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(7));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.DoubleArrayUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "LongArrayWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(8));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.array(Long.TYPE, -1);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.LongArrayWrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayConverters, "LongArrayUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.convert.PrimitiveArrayUnwrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.array(Long.TYPE, -1);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(8));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.convert.ArrayConverters.LongArrayUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
