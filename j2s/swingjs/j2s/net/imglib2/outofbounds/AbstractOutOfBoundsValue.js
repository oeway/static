(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "AbstractOutOfBoundsValue", null, 'net.imglib2.AbstractLocalizable', 'net.imglib2.outofbounds.OutOfBounds');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isOutOfBounds=false;
}, 1);

C$.$fields$=[['Z',['isOutOfBounds'],'O',['sampler','net.imglib2.RandomAccess','dimension','long[]','+min','+max','dimIsOutOfBounds','boolean[]']]]

Clazz.newMeth(C$, ['c$$net_imglib2_outofbounds_AbstractOutOfBoundsValue'], function (outOfBounds) {
;C$.superclazz.c$$I.apply(this,[outOfBounds.numDimensions$()]);C$.$init$.apply(this);
this.sampler=outOfBounds.sampler.copyRandomAccess$();
this.dimension=Clazz.array(Long.TYPE, [this.n]);
this.min=Clazz.array(Long.TYPE, [this.n]);
this.max=Clazz.array(Long.TYPE, [this.n]);
this.dimIsOutOfBounds=Clazz.array(Boolean.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.dimension[d]=outOfBounds.dimension[d];
this.min[d]=outOfBounds.min[d];
this.max[d]=outOfBounds.max[d];
this.position[d]=outOfBounds.position[d];
this.dimIsOutOfBounds[d]=outOfBounds.dimIsOutOfBounds[d];
}
}, 1);

Clazz.newMeth(C$, ['c$$TF'], function (f) {
;C$.superclazz.c$$I.apply(this,[f.numDimensions$()]);C$.$init$.apply(this);
this.sampler=f.randomAccess$();
this.dimension=Clazz.array(Long.TYPE, [this.n]);
f.dimensions$JA(this.dimension);
this.min=Clazz.array(Long.TYPE, [this.n]);
f.min$JA(this.min);
this.max=Clazz.array(Long.TYPE, [this.n]);
f.max$JA(this.max);
this.dimIsOutOfBounds=Clazz.array(Boolean.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'checkOutOfBounds', function () {
for (var d=0; d < this.n; ++d) {
if (this.dimIsOutOfBounds[d]) {
this.isOutOfBounds=true;
return;
}}
this.isOutOfBounds=false;
}, p$1);

Clazz.newMeth(C$, 'isOutOfBounds$', function () {
p$1.checkOutOfBounds.apply(this, []);
return this.isOutOfBounds;
});

Clazz.newMeth(C$, 'fwd$I', function (dim) {
var wasOutOfBounds=this.isOutOfBounds;
var p=++this.position[dim];
if (p == this.min[dim]) {
this.dimIsOutOfBounds[dim]=false;
p$1.checkOutOfBounds.apply(this, []);
} else if (p == this.max[dim] + 1) {
this.dimIsOutOfBounds[dim]=this.isOutOfBounds=true;
return;
}if (this.isOutOfBounds) return;
if (wasOutOfBounds) this.sampler.setPosition$JA(this.position);
 else this.sampler.fwd$I(dim);
});

Clazz.newMeth(C$, 'bck$I', function (dim) {
var wasOutOfBounds=this.isOutOfBounds;
var p=this.position[dim]--;
if (p == this.min[dim]) this.dimIsOutOfBounds[dim]=this.isOutOfBounds=true;
 else if (p == this.max[dim] + 1) {
this.dimIsOutOfBounds[dim]=false;
p$1.checkOutOfBounds.apply(this, []);
}if (this.isOutOfBounds) return;
if (wasOutOfBounds) this.sampler.setPosition$JA(this.position);
 else this.sampler.bck$I(dim);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, dim) {
this.setPosition$J$I(this.position[dim] + distance, dim);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, dim) {
this.move$J$I(distance, dim);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) this.move$J$I(localizable.getLongPosition$I(d), d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; ++d) this.move$I$I(distance[d], d);

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; ++d) this.move$J$I(distance[d], d);

});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, dim) {
this.position[dim]=position;
if (position < this.min[dim] || position > this.max[dim] ) this.dimIsOutOfBounds[dim]=this.isOutOfBounds=true;
 else if (this.isOutOfBounds) {
this.dimIsOutOfBounds[dim]=false;
p$1.checkOutOfBounds.apply(this, []);
if (!this.isOutOfBounds) this.sampler.setPosition$JA(this.position);
} else this.sampler.setPosition$J$I(position, dim);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, dim) {
this.setPosition$J$I(position, dim);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) this.setPosition$J$I(localizable.getLongPosition$I(d), d);

});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var d=0; d < position.length; ++d) this.setPosition$I$I(position[d], d);

});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
for (var d=0; d < position.length; ++d) this.setPosition$J$I(position[d], d);

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
