(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.convert.ConversionRequest','org.scijava.util.Types','org.scijava.convert.DefaultConverter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConversionUtils");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.servicePriority=0.0;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['D',['servicePriority'],'O',['convertService','org.scijava.convert.ConvertService','converterNoContext','org.scijava.convert.Converter']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setDelegateService$org_scijava_convert_ConvertService$D', function (convertService, priority) {
if (C$.convertService == null  || Double.compare$D$D(priority, C$.servicePriority) > 0 ) {
C$.convertService=convertService;
C$.servicePriority=priority;
}}, 1);

Clazz.newMeth(C$, 'convert$O$reflect_Type', function (src, dest) {
var handler=C$.handler$org_scijava_convert_ConversionRequest(Clazz.new_($I$(1,1).c$$O$reflect_Type,[src, dest]));
return (handler == null  ? null : handler.convert$O$reflect_Type(src, dest));
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var handler=C$.handler$org_scijava_convert_ConversionRequest(Clazz.new_($I$(1,1).c$$O$reflect_Type,[src, dest]));
return (handler == null  ? null : handler.convert$O$Class(src, dest));
}, 1);

Clazz.newMeth(C$, 'canConvert$Class$reflect_Type', function (src, dest) {
var handler=C$.handler$org_scijava_convert_ConversionRequest(Clazz.new_($I$(1,1).c$$reflect_Type$reflect_Type,[src, dest]));
return (handler == null  ? false : handler.canConvert$Class$reflect_Type(src, dest));
}, 1);

Clazz.newMeth(C$, 'canConvert$Class$Class', function (src, dest) {
var handler=C$.handler$org_scijava_convert_ConversionRequest(Clazz.new_($I$(1,1).c$$reflect_Type$reflect_Type,[src, dest]));
return (handler == null  ? false : handler.canConvert$Class$Class(src, dest));
}, 1);

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
var handler=C$.handler$org_scijava_convert_ConversionRequest(Clazz.new_($I$(1,1).c$$O$reflect_Type,[src, dest]));
return (handler == null  ? false : handler.canConvert$O$reflect_Type(src, dest));
}, 1);

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
var handler=C$.handler$org_scijava_convert_ConversionRequest(Clazz.new_($I$(1,1).c$$O$reflect_Type,[src, dest]));
return (handler == null  ? false : handler.canConvert$O$Class(src, dest));
}, 1);

Clazz.newMeth(C$, 'convertToEnum$S$Class', function (src, dest) {
try {
return $I$(2).enumValue$S$Class(src, dest);
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'getClass$reflect_Type', function (type) {
return $I$(2).raw$reflect_Type(type);
}, 1);

Clazz.newMeth(C$, 'cast$O$Class', function (src, dest) {
if (!C$.canCast$O$Class(src, dest)) return null;
var result=src;
return result;
}, 1);

Clazz.newMeth(C$, 'canAssign$Class$Class', function (src, dest) {
return C$.canCast$Class$Class(src, dest);
}, 1);

Clazz.newMeth(C$, 'canAssign$O$Class', function (src, dest) {
return C$.canCast$O$Class(src, dest);
}, 1);

Clazz.newMeth(C$, 'canCast$Class$Class', function (src, dest) {
if (dest == null ) return false;
if (src == null ) return true;
return $I$(2).isAssignable$reflect_Type$reflect_Type($I$(2).box$Class(src), $I$(2).box$Class(dest));
}, 1);

Clazz.newMeth(C$, 'canCast$O$Class', function (src, dest) {
if (dest == null ) return false;
return src == null  || C$.canCast$Class$Class(src.getClass$(), dest) ;
}, 1);

Clazz.newMeth(C$, 'getComponentClass$reflect_Type', function (type) {
return $I$(2).raw$reflect_Type($I$(2).component$reflect_Type(type));
}, 1);

Clazz.newMeth(C$, 'getPrimitiveType$Class', function (type) {
return $I$(2).unbox$Class(type);
}, 1);

Clazz.newMeth(C$, 'getNonprimitiveType$Class', function (type) {
return $I$(2).box$Class(type);
}, 1);

Clazz.newMeth(C$, 'getNullValue$Class', function (type) {
return $I$(2).nullValue$Class(type);
}, 1);

Clazz.newMeth(C$, 'handler$org_scijava_convert_ConversionRequest', function (data) {
if (C$.convertService != null ) return C$.convertService.getHandler$TDT(data);
if (C$.converterNoContext == null ) C$.converterNoContext=Clazz.new_($I$(3,1));
return C$.converterNoContext;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
