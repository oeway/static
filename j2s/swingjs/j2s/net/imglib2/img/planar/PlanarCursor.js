(function(){var P$=Clazz.newPackage("net.imglib2.img.planar"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PlanarCursor", null, 'net.imglib2.AbstractCursorInt', [['net.imglib2.img.planar.PlanarImg','net.imglib2.img.planar.PlanarImg.PlanarContainerSampler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lastIndex','lastSliceIndex','sliceIndex','index'],'O',['type','<T extends NativeType<T>>','container','net.imglib2.img.planar.PlanarImg']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.container=cursor.container;
this.type=this.container.createLinkedType$();
this.lastIndex=cursor.lastIndex;
this.lastSliceIndex=cursor.lastSliceIndex;
this.sliceIndex=cursor.sliceIndex;
this.index=cursor.index;
this.type.updateContainer$O(this);
this.type.updateIndex$I(this.index);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarImg', function (container) {
;C$.superclazz.c$$I.apply(this,[container.numDimensions$()]);C$.$init$.apply(this);
this.type=container.createLinkedType$();
this.container=container;
this.lastIndex=((this.n > 1) ? container.dimensions[1] : 1) * container.dimensions[0] - 1;
this.lastSliceIndex=container.numSlices$() - 1;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'getCurrentSliceIndex$', function () {
return this.sliceIndex;
});

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_planar_PlanarCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.sliceIndex < this.lastSliceIndex) || (this.index < this.lastIndex) ;
});

Clazz.newMeth(C$, 'fwd$', function () {
if (++this.index > this.lastIndex) {
this.index=0;
++this.sliceIndex;
this.type.updateContainer$O(this);
}this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
var newIndex=this.index + steps;
if (newIndex > this.lastIndex) {
var s=(newIndex/(this.lastIndex + 1)|0);
newIndex-=s * (this.lastIndex + 1);
this.sliceIndex+=s;
this.type.updateContainer$O(this);
}this.index=(newIndex|0);
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'reset$', function () {
this.sliceIndex=0;
this.index=-1;
this.type.updateIndex$I(-1);
this.type.updateContainer$O(this);
});

Clazz.newMeth(C$, 'toString', function () {
return this.type.toString();
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
this.container.indexToGlobalPosition$I$I$IA(this.sliceIndex, this.index, position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (dim) {
return this.container.indexToGlobalPosition$I$I$I(this.sliceIndex, this.index, dim);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
