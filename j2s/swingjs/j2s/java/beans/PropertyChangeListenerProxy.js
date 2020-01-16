(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PropertyChangeListenerProxy", null, 'java.util.EventListenerProxy', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['propertyName']]]

Clazz.newMeth(C$, 'c$$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
;C$.superclazz.c$$TT.apply(this,[listener]);C$.$init$.apply(this);
this.propertyName=propertyName;
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
(this.getListener$()).propertyChange$(evt);
});

Clazz.newMeth(C$, 'getPropertyName$', function () {
return this.propertyName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
