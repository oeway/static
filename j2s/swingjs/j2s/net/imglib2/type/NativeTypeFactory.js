(function(){var P$=Clazz.newPackage("net.imglib2.type"),I$=[[0,'net.imglib2.type.PrimitiveType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NativeTypeFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['primitiveType','net.imglib2.type.PrimitiveType','createLinkedType','java.util.function.Function']]]

Clazz.newMeth(C$, 'c$$net_imglib2_type_PrimitiveType$java_util_function_Function', function (primitiveType, createLinkedType) {
;C$.$init$.apply(this);
this.primitiveType=primitiveType;
this.createLinkedType=createLinkedType;
}, 1);

Clazz.newMeth(C$, 'getPrimitiveType$', function () {
return this.primitiveType;
});

Clazz.newMeth(C$, 'createLinkedType$net_imglib2_img_NativeImg', function (img) {
return this.createLinkedType.apply$(img);
});

Clazz.newMeth(C$, 'BOOLEAN$java_util_function_Function', function (createLinkedType) {
return Clazz.new_(1,{T:"Object",A:"Object"},C$.c$$net_imglib2_type_PrimitiveType$java_util_function_Function,[$I$(1).BOOLEAN, createLinkedType]);
}, 1);

Clazz.newMeth(C$, 'BYTE$java_util_function_Function', function (createLinkedType) {
return Clazz.new_(1,{T:"Object",A:"Object"},C$.c$$net_imglib2_type_PrimitiveType$java_util_function_Function,[$I$(1).BYTE, createLinkedType]);
}, 1);

Clazz.newMeth(C$, 'CHAR$java_util_function_Function', function (createLinkedType) {
return Clazz.new_(1,{T:"Object",A:"Object"},C$.c$$net_imglib2_type_PrimitiveType$java_util_function_Function,[$I$(1).CHAR, createLinkedType]);
}, 1);

Clazz.newMeth(C$, 'SHORT$java_util_function_Function', function (createLinkedType) {
return Clazz.new_(1,{T:"Object",A:"Object"},C$.c$$net_imglib2_type_PrimitiveType$java_util_function_Function,[$I$(1).SHORT, createLinkedType]);
}, 1);

Clazz.newMeth(C$, 'INT$java_util_function_Function', function (createLinkedType) {
return Clazz.new_(1,{T:"Object",A:"Object"},C$.c$$net_imglib2_type_PrimitiveType$java_util_function_Function,[$I$(1).INT, createLinkedType]);
}, 1);

Clazz.newMeth(C$, 'LONG$java_util_function_Function', function (createLinkedType) {
return Clazz.new_(1,{T:"Object",A:"Object"},C$.c$$net_imglib2_type_PrimitiveType$java_util_function_Function,[$I$(1).LONG, createLinkedType]);
}, 1);

Clazz.newMeth(C$, 'FLOAT$java_util_function_Function', function (createLinkedType) {
return Clazz.new_(1,{T:"Object",A:"Object"},C$.c$$net_imglib2_type_PrimitiveType$java_util_function_Function,[$I$(1).FLOAT, createLinkedType]);
}, 1);

Clazz.newMeth(C$, 'DOUBLE$java_util_function_Function', function (createLinkedType) {
return Clazz.new_(1,{T:"Object",A:"Object"},C$.c$$net_imglib2_type_PrimitiveType$java_util_function_Function,[$I$(1).DOUBLE, createLinkedType]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
