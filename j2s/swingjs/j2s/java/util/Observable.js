(function(){var P$=java.util,I$=[[0,'java.util.Vector']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Observable");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changed=false;
}, 1);

C$.$fields$=[['Z',['changed'],'O',['obs','java.util.Vector']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.obs=Clazz.new_(1,{E:"java.util.Observer"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addObserver$java_util_Observer', function (o) {
if (o == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (!this.obs.contains$O(o)) {
this.obs.addElement$TE(o);
}});

Clazz.newMeth(C$, 'deleteObserver$java_util_Observer', function (o) {
this.obs.removeElement$O(o);
});

Clazz.newMeth(C$, 'notifyObservers$', function () {
this.notifyObservers$O(null);
});

Clazz.newMeth(C$, 'notifyObservers$O', function (arg) {
var arrLocal;
{
if (!this.changed) return;
arrLocal=this.obs.toArray$();
this.clearChanged$();
}for (var i=arrLocal.length - 1; i >= 0; i--) (arrLocal[i]).update$(this, arg);

});

Clazz.newMeth(C$, 'deleteObservers$', function () {
this.obs.removeAllElements$();
});

Clazz.newMeth(C$, 'setChanged$', function () {
this.changed=true;
});

Clazz.newMeth(C$, 'clearChanged$', function () {
this.changed=false;
});

Clazz.newMeth(C$, 'hasChanged$', function () {
return this.changed;
});

Clazz.newMeth(C$, 'countObservers$', function () {
return this.obs.size$();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
