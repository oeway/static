(function(){var P$=Clazz.newPackage("org.scijava"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractContextual", null, null, 'org.scijava.Contextual');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['context','org.scijava.Context']]]

Clazz.newMeth(C$, 'context$', function () {
if (this.context == null ) throw Clazz.new_(Clazz.load('org.scijava.NullContextException'));
return this.context;
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.context;
});
C$.$getAnn$ = function(){ return [
[['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
