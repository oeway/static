(function(){var P$=Clazz.newPackage("org.scijava.plugin"),p$1={},I$=[[0,'org.scijava.plugin.Plugin','org.scijava.util.StringMaker','org.scijava.util.Types','org.scijava.Priority','org.scijava.util.VersionUtils','org.scijava.MenuPath','org.scijava.input.Accelerator','org.scijava.MenuEntry']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PluginInfo", null, 'org.scijava.AbstractUIDetails', ['org.scijava.Instantiable', 'org.scijava.Identifiable', 'org.scijava.Locatable', 'org.scijava.Versioned']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['className'],'O',['pluginClass','Class','+pluginType','annotation','org.scijava.plugin.Plugin','classLoader','ClassLoader']]]

Clazz.newMeth(C$, 'c$$S$Class', function (className, pluginType) {
C$.c$$S$Class$Class$org_scijava_plugin_Plugin$ClassLoader.apply(this, [className, null, pluginType, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Class$org_scijava_plugin_Plugin', function (className, pluginType, annotation) {
C$.c$$S$Class$Class$org_scijava_plugin_Plugin$ClassLoader.apply(this, [className, null, pluginType, annotation, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Class$org_scijava_plugin_Plugin$ClassLoader', function (className, pluginType, annotation, classLoader) {
C$.c$$S$Class$Class$org_scijava_plugin_Plugin$ClassLoader.apply(this, [className, null, pluginType, annotation, classLoader]);
}, 1);

Clazz.newMeth(C$, 'c$$Class$Class', function (pluginClass, pluginType) {
C$.c$$S$Class$Class$org_scijava_plugin_Plugin$ClassLoader.apply(this, [null, pluginClass, pluginType, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Class$Class$org_scijava_plugin_Plugin', function (pluginClass, pluginType, annotation) {
C$.c$$S$Class$Class$org_scijava_plugin_Plugin$ClassLoader.apply(this, [null, pluginClass, pluginType, annotation, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Class$Class$org_scijava_plugin_Plugin$ClassLoader', function (className, pluginClass, pluginType, annotation, classLoader) {
Clazz.super_(C$, this);
if (pluginClass != null ) {
if (className != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["className and pluginClass are mutually exclusive"]);
}this.setPluginClass$Class(pluginClass);
} else {
this.className=C$.fixClassName$S(className);
}this.setPluginType$Class(pluginType);
this.setMenuPath$org_scijava_MenuPath(null);
this.setMenuRoot$S("app");
if (annotation == null ) {
if (pluginClass != null ) {
this.annotation=pluginClass.getAnnotation$Class(Clazz.getClass($I$(1),['attrs','description','enabled','headless','iconPath','initializer','label','menu','menuPath','menuRoot','name','priority','selectable','selectionGroup','type','visible']));
}} else this.annotation=annotation;
p$1.populateValues.apply(this, []);
this.classLoader=classLoader;
}, 1);

Clazz.newMeth(C$, 'fixClassName$S', function (className) {
return (className != null  && className.startsWith$S("classes.")  ? className.substring$I(8) : className);
}, 1);

Clazz.newMeth(C$, 'setPluginClass$Class', function (pluginClass) {
this.pluginClass=pluginClass;
});

Clazz.newMeth(C$, 'getPluginClass$', function () {
return this.pluginClass;
});

Clazz.newMeth(C$, 'setPluginType$Class', function (pluginType) {
this.pluginType=pluginType;
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return this.pluginType;
});

Clazz.newMeth(C$, 'getAnnotation$', function () {
return this.annotation;
});

Clazz.newMeth(C$, 'getIconURL$', function () {
var iconPath=this.getIconPath$();
if (iconPath == null  || iconPath.isEmpty$() ) return null;
return this.loadClass$().getResource$S(iconPath);
});

Clazz.newMeth(C$, 'inject$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.plugin.HasPluginInfo"))) return false;
var hi=o;
hi.setInfo$org_scijava_plugin_PluginInfo(this);
return true;
});

Clazz.newMeth(C$, 'toString', function () {
var sm=Clazz.new_($I$(2,1));
sm.append$S$O("class", this.className);
sm.append$S(C$.superclazz.prototype.toString.apply(this, []));
sm.append$S$O("pluginType", this.pluginType);
return sm.toString();
});

Clazz.newMeth(C$, 'getClassName$', function () {
if (this.pluginClass != null ) return this.pluginClass.getName$();
return this.className;
});

Clazz.newMeth(C$, 'loadClass$', function () {
if (this.pluginClass == null  && this.className != null  ) {
try {
System.out.println$S("PluginInfo.loadClass " + this.className);
var c=$I$(3).load$S$ClassLoader$Z(this.className, this.classLoader, false);
var typedClass=c;
this.pluginClass=typedClass;
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('org.scijava.InstantiableException').c$$S$Throwable,["Class not found: " + this.className, exc]);
} else {
throw exc;
}
}
}return this.pluginClass;
});

Clazz.newMeth(C$, 'createInstance$', function () {
var c=this.loadClass$();
var instance;
try {
instance=c.newInstance$();
this.inject$O(instance);
$I$(4).inject$O$D(instance, this.getPriority$());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.scijava.InstantiableException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.scijava.InstantiableException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
return instance;
});

Clazz.newMeth(C$, 'getIdentifier$', function () {
return "plugin:" + this.className;
});

Clazz.newMeth(C$, 'getLocation$', function () {
try {
return $I$(3).location$Class(this.loadClass$()).toExternalForm$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.InstantiableException")){
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getVersion$', function () {
try {
return $I$(5).getVersion$Class(this.loadClass$());
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.InstantiableException")){
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'populateValues', function () {
var ann=this.getAnnotation$();
if (ann == null ) return;
this.setName$S(ann.name$());
this.setLabel$S(ann.label$());
this.setDescription$S(ann.description$());
var menuPath;
var menu=ann.menu$();
if (menu.length > 0) {
menuPath=p$1.parseMenuPath$org_scijava_plugin_MenuA.apply(this, [menu]);
} else {
menuPath=Clazz.new_($I$(6,1).c$$S,[ann.menuPath$()]);
}this.setMenuPath$org_scijava_MenuPath(menuPath);
this.setMenuRoot$S(ann.menuRoot$());
var iconPath=ann.iconPath$();
this.setIconPath$S(iconPath);
this.setPriority$D(ann.priority$());
this.setEnabled$Z(ann.enabled$());
this.setVisible$Z(ann.visible$());
this.setSelectable$Z(ann.selectable$());
this.setSelectionGroup$S(ann.selectionGroup$());
var menuLeaf=menuPath.getLeaf$();
if (menuLeaf != null  && !iconPath.isEmpty$() ) {
var menuIconPath=menuLeaf.getIconPath$();
if (menuIconPath == null  || menuIconPath.isEmpty$() ) {
menuLeaf.setIconPath$S(iconPath);
}}for (var attr, $attr = 0, $$attr = ann.attrs$(); $attr<$$attr.length&&((attr=($$attr[$attr])),1);$attr++) {
var name=attr.name$();
var value=attr.value$();
this.set$S$S(name, value);
}
}, p$1);

Clazz.newMeth(C$, 'parseMenuPath$org_scijava_plugin_MenuA', function (menu) {
var menuPath=Clazz.new_($I$(6,1));
for (var i=0; i < menu.length; i++) {
var name=menu[i].label$();
var weight=menu[i].weight$();
var mnemonic=menu[i].mnemonic$();
var acc=$I$(7).create$S(menu[i].accelerator$());
var iconPath=menu[i].iconPath$();
menuPath.add$TE(Clazz.new_($I$(8,1).c$$S$D$C$org_scijava_input_Accelerator$S,[name, weight, mnemonic, acc, iconPath]));
}
return menuPath;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
