(function(){var P$=Clazz.newPackage("org.scijava.module.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ModuleCanceledEvent", null, 'org.scijava.module.event.ModuleExecutionEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['reason']]]

Clazz.newMeth(C$, 'c$$org_scijava_module_Module', function (module) {
C$.c$$org_scijava_module_Module$S.apply(this, [module, null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_module_Module$S', function (module, reason) {
;C$.superclazz.c$$org_scijava_module_Module.apply(this,[module]);C$.$init$.apply(this);
this.reason=reason;
}, 1);

Clazz.newMeth(C$, 'getReason$', function () {
return this.reason;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
