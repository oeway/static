(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[[0,'java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DragSourceEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['locationSpecified'],'I',['x','y']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext', function (dsc) {
;C$.superclazz.c$$O.apply(this,[dsc]);C$.$init$.apply(this);
this.locationSpecified=false;
this.x=0;
this.y=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext$I$I', function (dsc, x, y) {
;C$.superclazz.c$$O.apply(this,[dsc]);C$.$init$.apply(this);
this.locationSpecified=true;
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getDragSourceContext$', function () {
return this.getSource$();
});

Clazz.newMeth(C$, 'getLocation$', function () {
if (this.locationSpecified) {
return Clazz.new_($I$(1,1).c$$I$I,[this.x, this.y]);
} else {
return null;
}});

Clazz.newMeth(C$, 'getX$', function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1