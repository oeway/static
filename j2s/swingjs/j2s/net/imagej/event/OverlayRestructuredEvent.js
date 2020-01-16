(function(){var P$=Clazz.newPackage("net.imagej.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OverlayRestructuredEvent", null, 'net.imagej.event.DataRestructuredEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['overlay','net.imagej.overlay.Overlay']]]

Clazz.newMeth(C$, 'c$$net_imagej_overlay_Overlay', function (overlay) {
;C$.superclazz.c$$net_imagej_Data.apply(this,[overlay]);C$.$init$.apply(this);
this.overlay=overlay;
}, 1);

Clazz.newMeth(C$, 'getObject$', function () {
return this.overlay;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
