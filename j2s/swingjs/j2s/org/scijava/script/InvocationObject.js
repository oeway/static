(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[[0,'java.util.ArrayList','org.scijava.script.ParameterObject']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InvocationObject");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parameterObjects=Clazz.new_(1,{E:"org.scijava.script.ParameterObject"},$I$(1,1));
}, 1);

C$.$fields$=[['S',['moduleCalled'],'O',['parameterObjects','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$S', function (moduleCalled) {
;C$.$init$.apply(this);
this.moduleCalled=moduleCalled;
}, 1);

Clazz.newMeth(C$, 'addParameter$S$Class$O', function (param, type, value) {
this.parameterObjects.add$TE(Clazz.new_($I$(2,1).c$$S$Class$O,[param, type, value]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
