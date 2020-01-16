(function(){var P$=Clazz.newPackage("org.scijava.plugin"),p$1={},I$=[[0,'java.util.ArrayList','java.util.regex.Pattern',['org.scijava.plugin.DefaultPluginFinder','.SysPropBlacklist'],'java.util.HashMap','org.scijava.annotations.Index','org.scijava.plugin.Plugin','org.scijava.plugin.PluginInfo','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultPluginFinder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.scijava.plugin.PluginFinder');
C$.$classes$=[['PluginBlacklist',10],['SysPropBlacklist',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['customClassLoader','ClassLoader','blacklist','org.scijava.plugin.DefaultPluginFinder.PluginBlacklist']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$ClassLoader.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$ClassLoader', function (classLoader) {
;C$.$init$.apply(this);
this.customClassLoader=classLoader;
this.blacklist=Clazz.new_($I$(3,1), [this, null]);
}, 1);

Clazz.newMeth(C$, ['findPlugins$java_util_List','findPlugins$'], function (plugins) {
var exceptions=Clazz.new_(1,{K:"String",V:"Throwable"},$I$(4,1));
var classLoader=p$1.getClassLoader.apply(this, []);
var annotationIndex=$I$(5).load$Class$ClassLoader(Clazz.getClass($I$(6),['attrs','description','enabled','headless','iconPath','initializer','label','menu','menuPath','menuRoot','name','priority','selectable','selectionGroup','type','visible']), classLoader);
for (var item, $item = annotationIndex.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (this.blacklist.contains$(item.className$())) continue;
try {
var info=p$1.createInfo$org_scijava_annotations_IndexItem$ClassLoader.apply(this, [item, classLoader]);
plugins.add$TE(info);
} catch (t) {
exceptions.put$TK$TV(item.className$(), t);
}
}
return exceptions;
});

Clazz.newMeth(C$, 'createInfo$org_scijava_annotations_IndexItem$ClassLoader', function (item, classLoader) {
var className=item.className$();
var plugin=item.annotation$();
var pluginType=plugin.type$();
return Clazz.new_(1,{PT:"org.scijava.plugin.SciJavaPlugin"},$I$(7,1).c$$S$Class$org_scijava_plugin_Plugin$ClassLoader,[className, pluginType, plugin, classLoader]);
}, p$1);

Clazz.newMeth(C$, 'getClassLoader', function () {
if (this.customClassLoader != null ) return this.customClassLoader;
return $I$(8).currentThread$().getContextClassLoader$();
}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DefaultPluginFinder, "PluginBlacklist", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultPluginFinder, "SysPropBlacklist", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['org.scijava.plugin.DefaultPluginFinder','org.scijava.plugin.DefaultPluginFinder.PluginBlacklist']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['patterns','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
var sysProp=System.getProperty$S("scijava.plugin.blacklist");
var regexes=sysProp == null  ? Clazz.array(String, [0]) : sysProp.split$S(":");
this.patterns=Clazz.new_(1,{E:"java.util.regex.Pattern"},$I$(1,1).c$$I,[regexes.length]);
for (var regex, $regex = 0, $$regex = regexes; $regex<$$regex.length&&((regex=($$regex[$regex])),1);$regex++) {
try {
this.patterns.add$TE($I$(2).compile$S(regex));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.util.regex.PatternSyntaxException")){
} else {
throw exc;
}
}
}
}, 1);

Clazz.newMeth(C$, ['contains$S','contains$'], function (className) {
for (var pattern, $pattern = this.patterns.iterator$(); $pattern.hasNext$()&&((pattern=($pattern.next$())),1);) {
if (pattern.matcher$CharSequence(className).matches$()) return true;
}
return false;
});
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
