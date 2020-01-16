(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GenericUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getClass$reflect_Type', function (type) {
var bounds=$I$(1).raws$reflect_Type(type);
return bounds != null  && bounds.size$() == 1  ? bounds.get$I(0) : null;
}, 1);

Clazz.newMeth(C$, 'getClasses$reflect_Type', function (type) {
return $I$(1).raws$reflect_Type(type);
}, 1);

Clazz.newMeth(C$, 'getComponentType$reflect_Type', function (type) {
return $I$(1).component$reflect_Type(type);
}, 1);

Clazz.newMeth(C$, 'getComponentClass$reflect_Type', function (type) {
return $I$(1).raw$reflect_Type($I$(1).component$reflect_Type(type));
}, 1);

Clazz.newMeth(C$, 'getFieldType$reflect_Field$Class', function (field, type) {
return $I$(1).fieldType$reflect_Field$Class(field, type);
}, 1);

Clazz.newMeth(C$, 'getFieldClasses$reflect_Field$Class', function (field, type) {
return $I$(1).raws$reflect_Type($I$(1).fieldType$reflect_Field$Class(field, type));
}, 1);

Clazz.newMeth(C$, 'getMethodReturnType$reflect_Method$Class', function (method, type) {
return $I$(1).methodReturnType$reflect_Method$Class(method, type);
}, 1);

Clazz.newMeth(C$, 'getMethodReturnClasses$reflect_Method$Class', function (method, type) {
return $I$(1).raws$reflect_Type($I$(1).methodReturnType$reflect_Method$Class(method, type));
}, 1);

Clazz.newMeth(C$, 'getTypeParameter$reflect_Type$Class$I', function (type, c, paramNo) {
return $I$(1).param$reflect_Type$Class$I(type, c, paramNo);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
