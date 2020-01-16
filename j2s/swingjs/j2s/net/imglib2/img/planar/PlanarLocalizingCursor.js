(function(){var P$=Clazz.newPackage("net.imglib2.img.planar"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PlanarLocalizingCursor", null, 'net.imglib2.AbstractLocalizingCursorInt', [['net.imglib2.img.planar.PlanarImg','net.imglib2.img.planar.PlanarImg.PlanarContainerSampler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lastIndex','lastSliceIndex','sliceIndex','index'],'O',['type','<T extends NativeType<T>>','container','net.imglib2.img.planar.PlanarImg','max','int[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarLocalizingCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.container=cursor.container;
this.type=this.container.createLinkedType$();
this.lastIndex=cursor.lastIndex;
this.lastSliceIndex=cursor.lastSliceIndex;
this.max=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.max[d]=cursor.max[d];
this.position[d]=cursor.position[d];
}
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
this.max=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) this.max[d]=(container.max$I(d)|0);

this.reset$();
}, 1);

Clazz.newMeth(C$, 'getCurrentSliceIndex$', function () {
return this.sliceIndex;
});

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_planar_PlanarLocalizingCursor,[this]);
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
for (var d=0; d < this.n; ++d) {
if (++this.position[d] > this.max[d]) this.position[d]=0;
 else break;
}
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
this.container.indexToGlobalPosition$I$I$IA(this.sliceIndex, this.index, this.position);
});

Clazz.newMeth(C$, 'reset$', function () {
this.position[0]=-1;
for (var d=1; d < this.n; d++) this.position[d]=0;

this.sliceIndex=0;
this.index=-1;
this.type.updateIndex$I(-1);
this.type.updateContainer$O(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
