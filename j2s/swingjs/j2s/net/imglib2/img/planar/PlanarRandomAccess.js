(function(){var P$=Clazz.newPackage("net.imglib2.img.planar"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PlanarRandomAccess", null, 'net.imglib2.AbstractLocalizableInt', ['net.imglib2.RandomAccess', ['net.imglib2.img.planar.PlanarImg','net.imglib2.img.planar.PlanarImg.PlanarContainerSampler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['width','sliceIndex'],'O',['sliceSteps','int[]','type','<T extends NativeType<T>>']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
this.sliceSteps=randomAccess.sliceSteps;
this.width=randomAccess.width;
this.sliceIndex=randomAccess.sliceIndex;
for (var d=0; d < this.n; ++d) this.position[d]=randomAccess.position[d];

this.type=randomAccess.type.duplicateTypeOnSameNativeImg$();
this.type.updateContainer$O(this);
this.type.updateIndex$I(randomAccess.type.getIndex$());
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarImg', function (container) {
;C$.superclazz.c$$I.apply(this,[container.numDimensions$()]);C$.$init$.apply(this);
this.sliceSteps=container.sliceSteps;
this.width=(container.dimension$I(0)|0);
this.type=container.createLinkedType$();
this.type.updateIndex$I(0);
this.type.updateContainer$O(this);
}, 1);

Clazz.newMeth(C$, 'getCurrentSliceIndex$', function () {
return this.sliceIndex;
});

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_planar_PlanarRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
++this.position[d];
if (d == 0) this.type.incIndex$();
 else if (d == 1) this.type.incIndex$I(this.width);
 else {
this.sliceIndex+=this.sliceSteps[d];
this.type.updateContainer$O(this);
}});

Clazz.newMeth(C$, 'bck$I', function (d) {
--this.position[d];
if (d == 0) this.type.decIndex$();
 else if (d == 1) this.type.decIndex$I(this.width);
 else {
this.sliceIndex-=this.sliceSteps[d];
this.type.updateContainer$O(this);
}});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.position[d]+=distance;
if (d == 0) {
this.type.incIndex$I(distance);
} else if (d == 1) {
this.type.incIndex$I(distance * this.width);
} else {
this.sliceIndex+=this.sliceSteps[d] * distance;
this.type.updateContainer$O(this);
}});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.move$I$I((distance|0), d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
var d0=localizable.getIntPosition$I(0);
var d1=localizable.getIntPosition$I(1);
this.type.incIndex$I(d0 + d1 * this.width);
this.position[0]+=d0;
this.position[1]+=d1;
for (var d=2; d < this.n; ++d) {
var dist=localizable.getIntPosition$I(d);
if (dist != 0) {
this.sliceIndex+=dist * this.sliceSteps[d];
this.position[d]+=dist;
for (++d; d < this.n; ++d) {
if (dist != 0) {
this.sliceIndex+=dist * this.sliceSteps[d];
this.position[d]+=dist;
}}
this.type.updateContainer$O(this);
}}
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
this.type.incIndex$I(distance[0] + distance[1] * this.width);
this.position[0]+=distance[0];
this.position[1]+=distance[1];
for (var d=2; d < this.n; ++d) {
var dist=distance[d];
if (dist != 0) {
this.sliceIndex+=dist * this.sliceSteps[d];
this.position[d]+=dist;
for (++d; d < this.n; ++d) {
if (dist != 0) {
this.sliceIndex+=dist * this.sliceSteps[d];
this.position[d]+=dist;
}}
this.type.updateContainer$O(this);
}}
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
this.type.incIndex$I((distance[0]|0) + (distance[1]|0) * this.width);
this.position[0]+=(distance[0]|0);
this.position[1]+=(distance[1]|0);
for (var d=2; d < this.n; ++d) {
var dist=(distance[d]|0);
if (dist != 0) {
this.sliceIndex+=dist * this.sliceSteps[d];
this.position[d]+=dist;
for (++d; d < this.n; ++d) {
if (dist != 0) {
this.sliceIndex+=dist * this.sliceSteps[d];
this.position[d]+=dist;
}}
this.type.updateContainer$O(this);
}}
});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, d) {
if (d == 0) {
this.type.incIndex$I(pos - this.position[0]);
} else if (d == 1) {
this.type.incIndex$I((pos - this.position[1]) * this.width);
} else {
this.sliceIndex+=(pos - this.position[d]) * this.sliceSteps[d];
this.type.updateContainer$O(this);
}this.position[d]=pos;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
this.setPosition$I$I((pos|0), d);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
var p0=localizable.getIntPosition$I(0);
var p1=localizable.getIntPosition$I(1);
this.type.updateIndex$I(p0 + p1 * this.width);
this.position[0]=p0;
this.position[1]=p1;
for (var d=2; d < this.n; ++d) {
var pos=localizable.getIntPosition$I(d);
if (pos != this.position[d]) {
this.sliceIndex+=(pos - this.position[d]) * this.sliceSteps[d];
this.position[d]=pos;
for (++d; d < this.n; ++d) {
var pos2=localizable.getIntPosition$I(d);
if (pos2 != this.position[d]) {
this.sliceIndex+=(pos2 - this.position[d]) * this.sliceSteps[d];
this.position[d]=pos2;
}}
this.type.updateContainer$O(this);
}}
});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
this.type.updateIndex$I(pos[0] + pos[1] * this.width);
this.position[0]=pos[0];
this.position[1]=pos[1];
for (var d=2; d < this.n; ++d) {
if (pos[d] != this.position[d]) {
this.sliceIndex+=(pos[d] - this.position[d]) * this.sliceSteps[d];
this.position[d]=pos[d];
for (++d; d < this.n; ++d) {
if (pos[d] != this.position[d]) {
this.sliceIndex+=(pos[d] - this.position[d]) * this.sliceSteps[d];
this.position[d]=pos[d];
}}
this.type.updateContainer$O(this);
}}
});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
this.type.updateIndex$I((pos[0]|0) + (pos[1]|0) * this.width);
this.position[0]=(pos[0]|0);
this.position[1]=(pos[1]|0);
for (var d=2; d < this.n; ++d) {
if (pos[d] != this.position[d]) {
this.sliceIndex+=(pos[d] - this.position[d]) * this.sliceSteps[d];
this.position[d]=(pos[d]|0);
for (++d; d < this.n; ++d) {
if (pos[d] != this.position[d]) {
this.sliceIndex+=(pos[d] - this.position[d]) * this.sliceSteps[d];
this.position[d]=(pos[d]|0);
}}
this.type.updateContainer$O(this);
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
