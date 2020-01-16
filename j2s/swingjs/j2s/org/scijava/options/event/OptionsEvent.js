(function(){var P$=Clazz.newPackage("org.scijava.options.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['options','org.scijava.options.OptionsPlugin']]]

Clazz.newMeth(C$, 'c$$org_scijava_options_OptionsPlugin', function (options) {
Clazz.super_(C$, this);
this.options=options;
}, 1);

Clazz.newMeth(C$, 'getOptions$', function () {
return this.options;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\toptions = " + this.options ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
