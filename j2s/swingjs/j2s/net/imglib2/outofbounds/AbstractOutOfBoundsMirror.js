(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractOutOfBoundsMirror", null, null, 'net.imglib2.outofbounds.OutOfBounds');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isOutOfBounds=false;
}, 1);

C$.$fields$=[['Z',['isOutOfBounds'],'I',['n'],'O',['outOfBoundsRandomAccess','net.imglib2.RandomAccess','dimension','long[]','+zeroMinPos','+min','+p','inc','boolean[]','+dimIsOutOfBounds']]]

Clazz.newMeth(C$, ['c$$net_imglib2_outofbounds_AbstractOutOfBoundsMirror'], function (outOfBounds) {
;C$.$init$.apply(this);
this.n=outOfBounds.numDimensions$();
this.dimension=Clazz.array(Long.TYPE, [this.n]);
this.min=Clazz.array(Long.TYPE, [this.n]);
this.zeroMinPos=Clazz.array(Long.TYPE, [this.n]);
this.p=Clazz.array(Long.TYPE, [this.n]);
this.dimIsOutOfBounds=Clazz.array(Boolean.TYPE, [this.n]);
this.inc=Clazz.array(Boolean.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.dimension[d]=outOfBounds.dimension[d];
this.min[d]=outOfBounds.min[d];
this.zeroMinPos[d]=outOfBounds.zeroMinPos[d];
this.p[d]=outOfBounds.p[d];
this.dimIsOutOfBounds[d]=outOfBounds.dimIsOutOfBounds[d];
this.inc[d]=outOfBounds.inc[d];
}
this.outOfBoundsRandomAccess=outOfBounds.outOfBoundsRandomAccess.copyRandomAccess$();
}, 1);

Clazz.newMeth(C$, ['c$$TF'], function (f) {
;C$.$init$.apply(this);
this.n=f.numDimensions$();
this.dimension=Clazz.array(Long.TYPE, [this.n]);
f.dimensions$JA(this.dimension);
this.min=Clazz.array(Long.TYPE, [this.n]);
f.min$JA(this.min);
this.zeroMinPos=Clazz.array(Long.TYPE, [this.n]);
this.p=Clazz.array(Long.TYPE, [this.n]);
this.dimIsOutOfBounds=Clazz.array(Boolean.TYPE, [this.n]);
this.inc=Clazz.array(Boolean.TYPE, [this.n]);
for (var i=0; i < this.dimension.length; ++i) this.inc[i]=true;

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

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'isOutOfBounds$', function () {
return this.isOutOfBounds;
});

Clazz.newMeth(C$, 'get$', function () {
return this.outOfBoundsRandomAccess.get$();
});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=this.zeroMinPos[d] + this.min[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=this.zeroMinPos[d] + this.min[d];

});

Clazz.newMeth(C$, 'localize$IA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=((this.zeroMinPos[d] + this.min[d])|0);

});

Clazz.newMeth(C$, 'localize$JA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=this.zeroMinPos[d] + this.min[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.zeroMinPos[d] + this.min[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.zeroMinPos[d] + this.min[d];
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return ((this.zeroMinPos[d] + this.min[d])|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.zeroMinPos[d] + this.min[d];
});

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
return $I$(1).printCoordinates$JA(this.zeroMinPos) + " = " + this.get$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
