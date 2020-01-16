(function(){var P$=Clazz.newPackage("org.scijava.service"),p$1={},I$=[[0,'org.scijava.service.Service']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ServiceIndex", null, 'org.scijava.object.SortedObjectIndex');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1),['initialize$','registerEventHandlers$'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getService$Class', function (c) {
return p$1.getService$Class$Class$I.apply(this, [c, null, 0]);
});

Clazz.newMeth(C$, 'getNextService$Class$Class', function (c, ref) {
return p$1.getService$Class$Class$I.apply(this, [c, ref, 1]);
});

Clazz.newMeth(C$, 'getPrevService$Class$Class', function (c, ref) {
return p$1.getService$Class$Class$I.apply(this, [c, ref, -1]);
});

Clazz.newMeth(C$, 'getService$Class$Class$I', function (c, ref, priorityMod) {
var list=this.get$Class(c);
if (list.isEmpty$()) return null;
var index=0;
if (ref != null ) {
for (; index < list.size$() && !list.get$I(index).getClass$().equals$O(ref) ; index++) {
}
if (index == list.size$()) return null;
index+=priorityMod;
}if (index < 0 || index >= list.size$() ) return null;
var service=list.get$I(index);
return service;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
