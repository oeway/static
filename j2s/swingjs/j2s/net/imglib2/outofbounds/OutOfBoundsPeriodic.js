(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsPeriodic", null, 'net.imglib2.AbstractLocalizable', 'net.imglib2.outofbounds.OutOfBounds');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isOutOfBounds=false;
}, 1);

C$.$fields$=[['Z',['isOutOfBounds'],'O',['outOfBoundsRandomAccess','net.imglib2.RandomAccess','dimension','long[]','+min','+beforeMin','+max','+pastMax','dimIsOutOfBounds','boolean[]']]]

Clazz.newMeth(C$, ['c$$net_imglib2_outofbounds_OutOfBoundsPeriodic'], function (outOfBounds) {
;C$.superclazz.c$$I.apply(this,[outOfBounds.numDimensions$()]);C$.$init$.apply(this);
this.dimension=Clazz.array(Long.TYPE, [this.n]);
this.min=Clazz.array(Long.TYPE, [this.n]);
this.beforeMin=Clazz.array(Long.TYPE, [this.n]);
this.max=Clazz.array(Long.TYPE, [this.n]);
this.pastMax=Clazz.array(Long.TYPE, [this.n]);
this.dimIsOutOfBounds=Clazz.array(Boolean.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.dimension[d]=outOfBounds.dimension[d];
this.min[d]=outOfBounds.min[d];
this.beforeMin[d]=outOfBounds.beforeMin[d];
this.max[d]=outOfBounds.max[d];
this.pastMax[d]=outOfBounds.pastMax[d];
this.position[d]=outOfBounds.position[d];
this.dimIsOutOfBounds[d]=outOfBounds.dimIsOutOfBounds[d];
}
this.outOfBoundsRandomAccess=outOfBounds.outOfBoundsRandomAccess.copyRandomAccess$();
}, 1);

Clazz.newMeth(C$, ['c$$TF'], function (f) {
;C$.superclazz.c$$I.apply(this,[f.numDimensions$()]);C$.$init$.apply(this);
this.dimension=Clazz.array(Long.TYPE, [this.n]);
f.dimensions$JA(this.dimension);
this.min=Clazz.array(Long.TYPE, [this.n]);
f.min$JA(this.min);
this.max=Clazz.array(Long.TYPE, [this.n]);
f.max$JA(this.max);
this.beforeMin=Clazz.array(Long.TYPE, [this.n]);
this.pastMax=Clazz.array(Long.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.beforeMin[d]=this.min[d] - 1;
this.pastMax[d]=this.max[d] + 1;
}
this.dimIsOutOfBounds=Clazz.array(Boolean.TYPE, [this.n]);
this.outOfBoundsRandomAccess=f.randomAccess$();
}, 1);

Clazz.newMeth(C$, 'checkOutOfBounds$', function () {
for (var d=0; d < this.n; ++d) {
if (this.dimIsOutOfBounds[d]) {
this.isOutOfBounds=true;
return;
}}
this.isOutOfBounds=false;
});

Clazz.newMeth(C$, 'isOutOfBounds$', function () {
return this.isOutOfBounds;
});

Clazz.newMeth(C$, 'get$', function () {
return this.outOfBoundsRandomAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_outofbounds_OutOfBoundsPeriodic,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
var p=++this.position[d];
if (p == this.min[d]) {
this.dimIsOutOfBounds[d]=false;
this.checkOutOfBounds$();
} else if (p == this.pastMax[d]) this.dimIsOutOfBounds[d]=this.isOutOfBounds=true;
var q=this.outOfBoundsRandomAccess.getLongPosition$I(d);
if (q == this.max[d]) this.outOfBoundsRandomAccess.setPosition$J$I(this.min[d], d);
 else this.outOfBoundsRandomAccess.fwd$I(d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
var p=--this.position[d];
if (p == this.beforeMin[d]) this.dimIsOutOfBounds[d]=this.isOutOfBounds=true;
 else if (p == this.max[d]) {
this.dimIsOutOfBounds[d]=false;
this.checkOutOfBounds$();
}var q=this.outOfBoundsRandomAccess.getLongPosition$I(d);
if (q == this.min[d]) this.outOfBoundsRandomAccess.setPosition$J$I(this.max[d], d);
 else this.outOfBoundsRandomAccess.bck$I(d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.position[d]=position;
var minD=this.min[d];
var maxD=this.max[d];
if (position < minD) {
this.outOfBoundsRandomAccess.setPosition$J$I(maxD - (maxD - position) % this.dimension[d], d);
this.dimIsOutOfBounds[d]=this.isOutOfBounds=true;
} else if (position > maxD) {
this.outOfBoundsRandomAccess.setPosition$J$I(minD + (position - minD) % this.dimension[d], d);
this.dimIsOutOfBounds[d]=this.isOutOfBounds=true;
} else {
this.outOfBoundsRandomAccess.setPosition$J$I(position, d);
if (this.isOutOfBounds) {
this.dimIsOutOfBounds[d]=false;
this.checkOutOfBounds$();
}}});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.setPosition$J$I(this.getLongPosition$I(d) + distance, d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.move$J$I(distance, d);
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

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.setPosition$J$I(position, d);
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

Clazz.newMeth(C$, 'toString', function () {
return $I$(1).printCoordinates$JA(this.position) + " = " + this.get$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
