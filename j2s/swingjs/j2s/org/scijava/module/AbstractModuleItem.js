(function(){var P$=Clazz.newPackage("org.scijava.module"),I$=[[0,'org.scijava.util.StringMaker','org.scijava.ItemVisibility','org.scijava.util.NumberUtils','org.scijava.ItemIO','org.scijava.util.Prefs','org.scijava.util.ConversionUtils','org.scijava.module.MethodRef','org.scijava.util.Types','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractModuleItem", null, 'org.scijava.AbstractBasicDetails', 'org.scijava.module.ModuleItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['info','org.scijava.module.ModuleInfo','initializerRef','org.scijava.module.MethodRef','+validaterRef','+callbackRef']]]

Clazz.newMeth(C$, 'c$$org_scijava_module_ModuleInfo', function (info) {
Clazz.super_(C$, this);
this.info=info;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var sm=Clazz.new_($I$(1,1));
sm.append$S$O("label", this.getLabel$());
sm.append$S$O("description", this.getDescription$());
sm.append$S$O$O("visibility", this.getVisibility$(), $I$(2).NORMAL);
sm.append$S$O("required", new Boolean(this.isRequired$()));
sm.append$S$O("persisted", new Boolean(this.isPersisted$()));
sm.append$S$O("persistKey", this.getPersistKey$());
sm.append$S$O("callback", this.getCallback$());
sm.append$S$O("widgetStyle", this.getWidgetStyle$());
sm.append$S$O("default", this.getDefaultValue$());
sm.append$S$O("min", this.getMinimumValue$());
sm.append$S$O("max", this.getMaximumValue$());
sm.append$S$O("softMin", this.getSoftMinimum$());
sm.append$S$O("softMax", this.getSoftMaximum$());
sm.append$S$O$O("stepSize", this.getStepSize$(), $I$(3).toNumber$O$Class("1", this.getType$()));
sm.append$S$O$O("columnCount", new Integer(this.getColumnCount$()), new Integer(6));
sm.append$S$O("choices", this.getChoices$());
return this.getName$() + ": " + sm.toString() ;
});

Clazz.newMeth(C$, 'getInfo$', function () {
return this.info;
});

Clazz.newMeth(C$, 'getGenericType$', function () {
return this.getType$();
});

Clazz.newMeth(C$, 'getIOType$', function () {
return $I$(4).INPUT;
});

Clazz.newMeth(C$, 'isInput$', function () {
var ioType=this.getIOType$();
return ioType === $I$(4).INPUT  || ioType === $I$(4).BOTH  ;
});

Clazz.newMeth(C$, 'isOutput$', function () {
var ioType=this.getIOType$();
return ioType === $I$(4).OUTPUT  || ioType === $I$(4).BOTH  ;
});

Clazz.newMeth(C$, 'getVisibility$', function () {
return $I$(2).NORMAL;
});

Clazz.newMeth(C$, 'isAutoFill$', function () {
return true;
});

Clazz.newMeth(C$, 'isRequired$', function () {
return true;
});

Clazz.newMeth(C$, 'isPersisted$', function () {
return true;
});

Clazz.newMeth(C$, 'getPersistKey$', function () {
return null;
});

Clazz.newMeth(C$, 'loadValue$', function () {
if (!this.isPersisted$()) return null;
var sValue;
var persistKey=this.getPersistKey$();
if (persistKey == null  || persistKey.isEmpty$() ) {
var prefClass=this.getDelegateClass$();
var prefKey=this.getName$();
sValue=$I$(5).get$Class$S(prefClass, prefKey);
} else sValue=$I$(5).get$S(persistKey);
if (sValue == null ) return null;
return $I$(6).convert$O$Class(sValue, this.getType$());
});

Clazz.newMeth(C$, ['saveValue$TT'], function (value) {
if (!this.isPersisted$()) return;
var sValue=value == null  ? "" : value.toString();
if (!$I$(6).canConvert$O$Class(sValue, this.getType$())) return;
var persistKey=this.getPersistKey$();
if (persistKey == null  || persistKey.isEmpty$() ) {
var prefClass=this.getDelegateClass$();
var prefKey=this.getName$();
$I$(5).put$Class$S$S(prefClass, prefKey, sValue);
} else $I$(5).put$S$S(persistKey, sValue);
});

Clazz.newMeth(C$, 'getInitializer$', function () {
return null;
});

Clazz.newMeth(C$, 'initialize$org_scijava_module_Module', function (module) {
var delegateObject=module.getDelegateObject$();
if (this.initializerRef == null ) {
this.initializerRef=Clazz.new_($I$(7,1).c$$Class$S$ClassA,[delegateObject.getClass$(), this.getInitializer$(), []]);
}this.initializerRef.execute$O$OA(module.getDelegateObject$(), []);
});

Clazz.newMeth(C$, 'getValidater$', function () {
return null;
});

Clazz.newMeth(C$, 'validate$org_scijava_module_Module', function (module) {
var delegateObject=module.getDelegateObject$();
if (this.validaterRef == null ) {
this.validaterRef=Clazz.new_($I$(7,1).c$$Class$S$ClassA,[delegateObject.getClass$(), this.getValidater$(), []]);
}this.validaterRef.execute$O$OA(module.getDelegateObject$(), []);
});

Clazz.newMeth(C$, 'getCallback$', function () {
return null;
});

Clazz.newMeth(C$, 'callback$org_scijava_module_Module', function (module) {
var delegateObject=module.getDelegateObject$();
if (this.callbackRef == null ) {
this.callbackRef=Clazz.new_($I$(7,1).c$$Class$S$ClassA,[delegateObject.getClass$(), this.getCallback$(), []]);
}this.callbackRef.execute$O$OA(delegateObject, []);
});

Clazz.newMeth(C$, 'getWidgetStyle$', function () {
return null;
});

Clazz.newMeth(C$, 'getDefaultValue$', function () {
return null;
});

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return null;
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return null;
});

Clazz.newMeth(C$, 'getSoftMinimum$', function () {
return this.getMinimumValue$();
});

Clazz.newMeth(C$, 'getSoftMaximum$', function () {
return this.getMaximumValue$();
});

Clazz.newMeth(C$, 'getStepSize$', function () {
if (!$I$(8).isNumber$Class(this.getType$())) return null;
return $I$(3).toNumber$O$Class("1", this.getType$());
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return 6;
});

Clazz.newMeth(C$, 'getChoices$', function () {
var choices=this.getType$().getEnumConstants$();
return choices == null  ? null : $I$(9).asList$TTA(choices);
});

Clazz.newMeth(C$, 'getValue$org_scijava_module_Module', function (module) {
var result;
if (this.isInput$()) result=module.getInput$S(this.getName$());
 else if (this.isOutput$()) result=module.getOutput$S(this.getName$());
 else result=null;
var value=result;
return value;
});

Clazz.newMeth(C$, ['setValue$org_scijava_module_Module$TT'], function (module, value) {
if (this.isInput$()) module.setInput$S$O(this.getName$(), value);
if (this.isOutput$()) module.setOutput$S$O(this.getName$(), value);
});

Clazz.newMeth(C$, 'getDelegateClass$', function () {
try {
return this.info.loadDelegateClass$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
