(function(){var P$=Clazz.newPackage("net.imglib2.img.planar"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PlanarRandomAccess1D", null, 'net.imglib2.img.planar.PlanarRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarImg', function (container) {
;C$.superclazz.c$$net_imglib2_img_planar_PlanarImg.apply(this,[container]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (dim) {
++this.position[0];
this.type.incIndex$();
});

Clazz.newMeth(C$, 'bck$I', function (dim) {
--this.position[0];
this.type.decIndex$();
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.position[0]+=distance;
this.type.incIndex$I(distance);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
var distance=localizable.getIntPosition$I(0);
this.position[0]+=distance;
this.type.incIndex$I(distance);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
this.position[0]+=distance[0];
this.type.incIndex$I(distance[0]);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
this.position[0]+=(distance[0]|0);
this.type.incIndex$I((distance[0]|0));
});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, dim) {
this.type.updateIndex$I(pos);
this.position[0]=pos;
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
var pos=localizable.getIntPosition$I(0);
this.type.updateIndex$I(pos);
this.position[0]=pos;
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
this.type.updateIndex$I(position[0]);
this.position[0]=position[0];
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
this.type.updateIndex$I((position[0]|0));
this.position[0]=(position[0]|0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
