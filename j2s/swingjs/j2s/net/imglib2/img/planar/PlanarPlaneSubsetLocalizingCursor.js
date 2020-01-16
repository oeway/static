(function(){var P$=Clazz.newPackage("net.imglib2.img.planar"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "PlanarPlaneSubsetLocalizingCursor", null, 'net.imglib2.AbstractLocalizingCursorInt', [['net.imglib2.img.planar.PlanarImg','net.imglib2.img.planar.PlanarImg.PlanarContainerSampler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['sliceIndex','lastIndexPlane','maxX','dimX'],'O',['type','<T extends NativeType<T>>','container','net.imglib2.img.planar.PlanarImg']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarPlaneSubsetLocalizingCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.container=cursor.container;
this.type=this.container.createLinkedType$();
this.sliceIndex=cursor.sliceIndex;
this.lastIndexPlane=cursor.lastIndexPlane;
this.maxX=cursor.maxX;
this.dimX=cursor.dimX;
for (var d=0; d < this.n; ++d) this.position[d]=cursor.position[d];

this.type.updateContainer$O(this);
this.type.updateIndex$I(cursor.type.getIndex$());
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarImg$net_imglib2_Interval', function (container, interval) {
;C$.superclazz.c$$I.apply(this,[container.numDimensions$()]);C$.$init$.apply(this);
this.type=container.createLinkedType$();
this.container=container;
var planeSize=((this.n > 1) ? (interval.dimension$I(1)|0) : 1) * (interval.dimension$I(0)|0);
this.lastIndexPlane=planeSize - 1;
this.sliceIndex=(((p$1.offset$net_imglib2_Interval.apply(this, [interval])/planeSize|0))|0);
this.maxX=(interval.max$I(0)|0);
this.dimX=(container.dimension$I(0)|0);
this.type.updateContainer$O(this);
for (var d=2; d < this.n; ++d) this.position[d]=(interval.min$I(d)|0);

this.reset$();
}, 1);

Clazz.newMeth(C$, 'getCurrentSliceIndex$', function () {
return this.sliceIndex;
});

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_planar_PlanarPlaneSubsetLocalizingCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.type.getIndex$() < this.lastIndexPlane;
});

Clazz.newMeth(C$, 'fwd$', function () {
this.type.incIndex$();
if (++this.position[0] > this.maxX && this.n > 1 ) {
this.position[0]=0;
++this.position[1];
}});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.type.incIndex$I((steps|0));
p$1.updatePositionFromIndex$I.apply(this, [this.type.getIndex$()]);
});

Clazz.newMeth(C$, 'updatePositionFromIndex$I', function (index) {
if (this.n == 1) this.position[0]=index;
 else {
var j=(index/this.dimX|0);
this.position[0]=index - j * this.dimX;
this.position[1]=j;
}}, p$1);

Clazz.newMeth(C$, 'reset$', function () {
this.type.updateIndex$I(-1);
p$1.updatePositionFromIndex$I.apply(this, [this.type.getIndex$()]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.type.toString();
});

Clazz.newMeth(C$, 'offset$net_imglib2_Interval', function (interval) {
var maxDim=this.numDimensions$() - 1;
var i=interval.min$I(maxDim);
for (var d=maxDim - 1; d >= 0; --d) i=i * this.container.dimension$I(d) + interval.min$I(d);

return i;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
