(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractWrapperPlugin", null, 'org.scijava.plugin.AbstractTypedPlugin', 'org.scijava.plugin.WrapperPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','<D>']]]

Clazz.newMeth(C$, ['set$TD'], function (data) {
if (!this.supports$TD(data)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible data object: " + data]);
}this.data=data;
});

Clazz.newMeth(C$, 'get$', function () {
return this.data;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
