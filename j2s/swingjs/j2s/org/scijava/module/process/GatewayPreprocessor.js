(function(){var P$=Clazz.newPackage("org.scijava.module.process"),p$1={},I$=[[0,'org.scijava.Gateway','org.scijava.Context']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GatewayPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
for (var input, $input = module.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
if (!input.isAutoFill$()) continue;
var type=input.getType$();
if (Clazz.getClass($I$(1),['app$','appEvent$','command$','console$','display$','event$','eventHistory$','get$Class','get$S','getApp$','getInfo$Z','getShortName$','getTitle$','icon$','input$','io$','launch$SA','log$','main$','menu$','module$','object$','options$','platform$','plugin$','recentFile$','script$','startup$','status$','text$','thread$','tool$','ui$','widget$']).isAssignableFrom$Class(type)) {
var gatewayInput=input;
p$1.setGatewayValue$org_scijava_Context$org_scijava_module_Module$org_scijava_module_ModuleItem.apply(this, [this.getContext$(), module, gatewayInput]);
}}
});

Clazz.newMeth(C$, 'setGatewayValue$org_scijava_Context$org_scijava_module_Module$org_scijava_module_ModuleItem', function (context, module, input) {
var type=input.getType$();
var gateway=null;
var exception=null;
try {
gateway=type.getConstructor$ClassA([Clazz.getClass($I$(2))]).newInstance$OA([context]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var exc = e$$;
{
exception=exc;
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var exc = e$$;
{
exception=exc;
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var exc = e$$;
{
exception=exc;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var exc = e$$;
{
exception=exc;
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var exc = e$$;
{
exception=exc;
}
} else if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var exc = e$$;
{
exception=exc;
}
} else {
throw e$$;
}
}
if (exception != null ) {
this.log.warn$O$Throwable("Could not instantiate gateway of type: " + type, exception);
return;
}input.setValue$org_scijava_module_Module$TT(module, gateway);
module.resolveInput$S(input.getName$());
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.GatewayPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="20000.0" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
