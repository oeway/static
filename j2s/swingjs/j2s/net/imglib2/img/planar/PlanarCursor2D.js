(function(){var P$=Clazz.newPackage("net.imglib2.img.planar"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PlanarCursor2D", null, 'net.imglib2.img.planar.PlanarCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarImg', function (container) {
;C$.superclazz.c$$net_imglib2_img_planar_PlanarImg.apply(this,[container]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.type.getIndex$() < this.lastIndex;
});

Clazz.newMeth(C$, 'fwd$', function () {
this.type.incIndex$();
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
var indexInSlice=this.type.getIndex$();
var dim0=this.container.dimensions[0];
position[1]=(indexInSlice/dim0|0);
position[0]=indexInSlice - position[1] * dim0;
});

Clazz.newMeth(C$, 'getIntPosition$I', function (dim) {
var indexInSlice=this.type.getIndex$();
var dim0=this.container.dimensions[0];
var pos1=(indexInSlice/dim0|0);
if (dim == 0) return indexInSlice - pos1 * dim0;
 else if (dim == 1) return pos1;
 else return 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
