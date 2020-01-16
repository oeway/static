(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "VetoableChangeListenerProxy", null, 'java.util.EventListenerProxy', 'java.beans.VetoableChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['propertyName']]]

Clazz.newMeth(C$, 'c$$S$java_beans_VetoableChangeListener', function (propertyName, listener) {
;C$.superclazz.c$$TT.apply(this,[listener]);C$.$init$.apply(this);
this.propertyName=propertyName;
}, 1);

Clazz.newMeth(C$, ['vetoableChange$java_beans_PropertyChangeEvent','vetoableChange$'], function (evt) {
(this.getListener$()).vetoableChange$(evt);
});

Clazz.newMeth(C$, 'getPropertyName$', function () {
return this.propertyName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
