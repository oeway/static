(function(){var P$=Clazz.newPackage("org.scijava.command"),p$1={},I$=[[0,'org.scijava.plugin.Parameter','org.scijava.util.Types','org.scijava.Optional','java.util.ArrayList','org.scijava.util.ConversionUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CommandModuleItem", null, 'org.scijava.module.AbstractModuleItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['field','java.lang.reflect.Field']]]

Clazz.newMeth(C$, 'c$$org_scijava_module_ModuleInfo$reflect_Field', function (info, field) {
;C$.superclazz.c$$org_scijava_module_ModuleInfo.apply(this,[info]);C$.$init$.apply(this);
this.field=field;
}, 1);

Clazz.newMeth(C$, 'getField$', function () {
return this.field;
});

Clazz.newMeth(C$, 'getParameter$', function () {
return this.field.getAnnotation$Class(Clazz.getClass($I$(1),['attrs','autoFill','callback','choices','columns','description','initializer','label','max','min','persist','persistKey','required','stepSize','style','type','validater','visibility']));
});

Clazz.newMeth(C$, 'getType$', function () {
var type=$I$(2).raw$reflect_Type($I$(2).fieldType$reflect_Field$Class(this.field, this.getDelegateClass$()));
var typedType=type;
return typedType;
});

Clazz.newMeth(C$, 'getGenericType$', function () {
return $I$(2).fieldType$reflect_Field$Class(this.field, this.getDelegateClass$());
});

Clazz.newMeth(C$, 'getIOType$', function () {
return this.getParameter$().type$();
});

Clazz.newMeth(C$, 'getVisibility$', function () {
return this.getParameter$().visibility$();
});

Clazz.newMeth(C$, 'isAutoFill$', function () {
return this.getParameter$().autoFill$();
});

Clazz.newMeth(C$, 'isRequired$', function () {
return this.getParameter$().required$() && !Clazz.getClass($I$(3),[]).isAssignableFrom$Class(this.getType$()) ;
});

Clazz.newMeth(C$, 'isPersisted$', function () {
return this.getParameter$().persist$();
});

Clazz.newMeth(C$, 'getPersistKey$', function () {
return this.getParameter$().persistKey$();
});

Clazz.newMeth(C$, 'getInitializer$', function () {
return this.getParameter$().initializer$();
});

Clazz.newMeth(C$, 'getValidater$', function () {
return this.getParameter$().validater$();
});

Clazz.newMeth(C$, 'getCallback$', function () {
return this.getParameter$().callback$();
});

Clazz.newMeth(C$, 'getWidgetStyle$', function () {
return this.getParameter$().style$();
});

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return p$1.tValue$S.apply(this, [this.getParameter$().min$()]);
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return p$1.tValue$S.apply(this, [this.getParameter$().max$()]);
});

Clazz.newMeth(C$, 'getDefaultValue$', function () {
try {
var dummy=this.getInfo$().loadDelegateClass$().newInstance$();
var value=this.getField$().get$O(dummy);
return value;
} catch (exc) {
if (Clazz.exceptionOf(exc,"InstantiationException") || Clazz.exceptionOf(exc,"IllegalAccessException") || Clazz.exceptionOf(exc,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getStepSize$', function () {
var value=this.getParameter$().stepSize$();
try {
var stepSize=Double.parseDouble$S(value);
return new Double(stepSize);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
return p$1.tValue$S$Class.apply(this, [value, Clazz.getClass(Number)]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.getParameter$().columns$();
});

Clazz.newMeth(C$, 'getChoices$', function () {
var choices=this.getParameter$().choices$();
if (choices.length == 0) return C$.superclazz.prototype.getChoices$.apply(this, []);
var choiceList=Clazz.new_(1,{E:"Object"},$I$(4,1));
for (var choice, $choice = 0, $$choice = choices; $choice<$$choice.length&&((choice=($$choice[$choice])),1);$choice++) {
choiceList.add$TE(p$1.tValue$S.apply(this, [choice]));
}
return choiceList;
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.getParameter$().label$();
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.getParameter$().description$();
});

Clazz.newMeth(C$, 'is$S', function (key) {
for (var attr, $attr = 0, $$attr = this.getParameter$().attrs$(); $attr<$$attr.length&&((attr=($$attr[$attr])),1);$attr++) {
if (attr.name$().equals$O(key)) return true;
}
return false;
});

Clazz.newMeth(C$, 'get$S', function (key) {
for (var attr, $attr = 0, $$attr = this.getParameter$().attrs$(); $attr<$$attr.length&&((attr=($$attr[$attr])),1);$attr++) {
if (attr.name$().equals$O(key)) return attr.value$();
}
return null;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.field.getName$();
});

Clazz.newMeth(C$, 'tValue$S', function (value) {
return p$1.tValue$S$Class.apply(this, [value, this.getType$()]);
}, p$1);

Clazz.newMeth(C$, 'tValue$S$Class', function (value, type) {
if (value == null  || value.isEmpty$() ) return null;
var saneType=$I$(2).box$Class(type);
return $I$(5).convert$O$Class(value, saneType);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
