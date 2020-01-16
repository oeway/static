(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractRichPlugin", null, 'org.scijava.AbstractContextual', 'org.scijava.plugin.RichPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.priority=0.0;
}, 1);

C$.$fields$=[['D',['priority'],'O',['info','org.scijava.plugin.PluginInfo']]]

Clazz.newMeth(C$, 'toString', function () {
var pi=this.getInfo$();
return pi == null  ? C$.superclazz.prototype.toString.apply(this, []) : pi.getTitle$();
});

Clazz.newMeth(C$, 'getPriority$', function () {
return this.priority;
});

Clazz.newMeth(C$, 'setPriority$D', function (priority) {
this.priority=priority;
});

Clazz.newMeth(C$, 'getInfo$', function () {
return this.info;
});

Clazz.newMeth(C$, 'setInfo$org_scijava_plugin_PluginInfo', function (info) {
this.info=info;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
