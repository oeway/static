(function(){var P$=Clazz.newPackage("org.scijava.module.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ModuleEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['module','org.scijava.module.Module']]]

Clazz.newMeth(C$, 'c$$org_scijava_module_Module', function (module) {
Clazz.super_(C$, this);
this.module=module;
}, 1);

Clazz.newMeth(C$, 'getModule$', function () {
return this.module;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tmodule = " + this.module ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
