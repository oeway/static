(function(){var P$=Clazz.newPackage("net.imglib2.position.transform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Round", null, 'net.imglib2.position.transform.AbstractPositionableTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TLocalizablePositionable'], function (target) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[target]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealLocalizable$TLocalizablePositionable'], function (origin, target) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[target]);C$.$init$.apply(this);
origin.localize$DA(this.position);
for (var d=0; d < this.n; ++d) this.discrete[d]=C$.round$D(this.position[d]);

target.setPosition$JA(this.discrete);
}, 1);

Clazz.newMeth(C$, 'round$D', function (r) {
return r < 0  ? ((r - 0.5)|0) : ((r + 0.5)|0);
}, 1);

Clazz.newMeth(C$, 'round$F', function (r) {
return r < 0  ? ((r - 0.5)|0) : ((r + 0.5)|0);
}, 1);

Clazz.newMeth(C$, 'round$DA$JA', function (r, f) {
for (var d=0; d < r.length; ++d) f[d]=C$.round$D(r[d]);

}, 1);

Clazz.newMeth(C$, 'round$FA$JA', function (r, f) {
for (var d=0; d < r.length; ++d) f[d]=C$.round$F(r[d]);

}, 1);

Clazz.newMeth(C$, 'round$net_imglib2_RealLocalizable$JA', function (r, f) {
for (var d=0; d < f.length; ++d) f[d]=C$.round$D(r.getDoublePosition$I(d));

}, 1);

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
var realPosition=this.position[d] + distance;
var roundPosition=C$.round$D(realPosition);
this.position[d]=realPosition;
var roundDistance=roundPosition - this.target.getIntPosition$I(d);
if (roundDistance == 0) return;
this.target.move$J$I(roundDistance, d);
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
var realPosition=this.position[d] + distance;
var roundPosition=C$.round$D(realPosition);
this.position[d]=realPosition;
var roundDistance=roundPosition - this.target.getIntPosition$I(d);
if (roundDistance == 0) return;
this.target.move$J$I(roundDistance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + localizable.getDoublePosition$I(d);
var floorPosition=C$.round$D(realPosition);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'move$FA', function (distance) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + distance[d];
var floorPosition=C$.round$D(realPosition);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'move$DA', function (distance) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + distance[d];
var floorPosition=C$.round$D(realPosition);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
this.position[d]=localizable.getDoublePosition$I(d);
this.discrete[d]=C$.round$D(this.position[d]);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$FA', function (pos) {
for (var d=0; d < this.n; ++d) {
var realPosition=pos[d];
this.position[d]=realPosition;
this.discrete[d]=C$.round$F(realPosition);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$DA', function (pos) {
for (var d=0; d < this.n; ++d) {
var realPosition=pos[d];
this.position[d]=realPosition;
this.discrete[d]=C$.round$D(realPosition);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$F$I', function (position, d) {
this.position[d]=position;
this.target.setPosition$J$I(C$.round$F(position), d);
});

Clazz.newMeth(C$, 'setPosition$D$I', function (position, d) {
this.position[d]=position;
this.target.setPosition$J$I(C$.round$D(position), d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
