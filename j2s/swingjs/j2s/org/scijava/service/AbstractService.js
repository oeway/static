(function(){var P$=Clazz.newPackage("org.scijava.service"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractService", null, 'org.scijava.plugin.AbstractRichPlugin', 'org.scijava.service.Service');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$context','org.scijava.Context']]]

Clazz.newMeth(C$, 'getContext$', function () {
return this.$context;
});

Clazz.newMeth(C$, 'setContext$org_scijava_Context', function (context) {
this.$context=context;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + " [priority = " + new Double(this.getPriority$()).toString() + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
