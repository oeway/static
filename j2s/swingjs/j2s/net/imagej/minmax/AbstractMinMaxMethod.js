(function(){var P$=Clazz.newPackage("net.imagej.minmax"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractMinMaxMethod", null, 'org.scijava.plugin.AbstractRichPlugin', 'net.imagej.minmax.MinMaxMethod');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.initialized=false;
}, 1);

C$.$fields$=[['Z',['initialized']]]

Clazz.newMeth(C$, 'initializeCheck$', function () {
if (!this.initialized) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["MinMaxMethod not initialized. Call MinMaxMethod#initialize() before processing."]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
