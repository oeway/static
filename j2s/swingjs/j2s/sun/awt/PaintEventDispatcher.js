(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'java.awt.event.PaintEvent','java.awt.Rectangle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PaintEventDispatcher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['dispatcher','sun.awt.PaintEventDispatcher']]]

Clazz.newMeth(C$, 'setPaintEventDispatcher$sun_awt_PaintEventDispatcher', function (dispatcher) {
{
C$.dispatcher=dispatcher;
}}, 1);

Clazz.newMeth(C$, 'getPaintEventDispatcher$', function () {
{
if (C$.dispatcher == null ) {
C$.dispatcher=Clazz.new_(C$);
}return C$.dispatcher;
}}, 1);

Clazz.newMeth(C$, 'createPaintEvent$java_awt_Component$I$I$I$I', function (target, x, y, w, h) {
return Clazz.new_($I$(1,1).c$$java_awt_Component$I$java_awt_Rectangle,[target, 800, Clazz.new_($I$(2,1).c$$I$I$I$I,[x, y, w, h])]);
});

Clazz.newMeth(C$, 'shouldDoNativeBackgroundErase$java_awt_Component', function (c) {
return true;
});

Clazz.newMeth(C$, 'queueSurfaceDataReplacing$java_awt_Component$Runnable', function (c, r) {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
