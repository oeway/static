(function(){var P$=Clazz.newPackage("net.imglib2.img.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ArrayRandomAccess", null, 'net.imglib2.AbstractLocalizableInt', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['type','<T extends NativeType<T>>','img','net.imglib2.img.array.ArrayImg']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_ArrayRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
this.img=randomAccess.img;
this.type=this.img.createLinkedType$();
var index=0;
for (var d=0; d < this.n; d++) {
this.position[d]=randomAccess.position[d];
index+=this.position[d] * this.img.steps[d];
}
this.type.updateContainer$O(this);
this.type.updateIndex$I(index);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_ArrayImg', function (container) {
;C$.superclazz.c$$I.apply(this,[container.numDimensions$()]);C$.$init$.apply(this);
this.img=container;
this.type=container.createLinkedType$();
for (var d=0; d < this.n; d++) this.position[d]=0;

this.type.updateContainer$O(this);
this.type.updateIndex$I(0);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.type.incIndex$I(this.img.steps[d]);
++this.position[d];
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.type.decIndex$I(this.img.steps[d]);
--this.position[d];
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.type.incIndex$I(this.img.steps[d] * distance);
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.type.incIndex$I(this.img.steps[d] * (distance|0));
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
var index=0;
for (var d=0; d < this.n; ++d) {
var distance=localizable.getIntPosition$I(d);
this.position[d]+=distance;
index+=distance * this.img.steps[d];
}
this.type.incIndex$I(index);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
var index=0;
for (var d=0; d < this.n; ++d) {
this.position[d]+=distance[d];
index+=distance[d] * this.img.steps[d];
}
this.type.incIndex$I(index);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
var index=0;
for (var d=0; d < this.n; ++d) {
this.position[d]+=distance[d];
index+=distance[d] * this.img.steps[d];
}
this.type.incIndex$I(index);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
var index=0;
for (var d=0; d < this.n; ++d) {
this.position[d]=localizable.getIntPosition$I(d);
index+=this.position[d] * this.img.steps[d];
}
this.type.updateIndex$I(index);
});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
var index=0;
for (var d=0; d < this.n; ++d) {
this.position[d]=pos[d];
index+=pos[d] * this.img.steps[d];
}
this.type.updateIndex$I(index);
});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
var index=0;
for (var d=0; d < this.n; ++d) {
var p=(pos[d]|0);
this.position[d]=p;
index+=p * this.img.steps[d];
}
this.type.updateIndex$I(index);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, d) {
this.type.incIndex$I((pos - this.position[d]) * this.img.steps[d]);
this.position[d]=pos;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
this.type.incIndex$I(((pos|0) - this.position[d]) * this.img.steps[d]);
this.position[d]=(pos|0);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_array_ArrayRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'fwdDim0$', function () {
this.type.incIndex$();
++this.position[0];
});

Clazz.newMeth(C$, 'bckDim0$', function () {
this.type.decIndex$();
--this.position[0];
});

Clazz.newMeth(C$, 'moveDim0$I', function (distance) {
this.type.incIndex$I(distance);
this.position[0]+=distance;
});

Clazz.newMeth(C$, 'move$J', function (distance) {
this.type.incIndex$I((distance|0));
this.position[0]+=distance;
});

Clazz.newMeth(C$, 'setPositionDim0$I', function (pos) {
this.type.updateIndex$I(pos);
this.position[0]=pos;
});

Clazz.newMeth(C$, 'setPositionDim0$J', function (pos) {
this.type.updateIndex$I((pos|0));
this.position[0]=(pos|0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
