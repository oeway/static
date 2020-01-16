(function(){var P$=Clazz.newPackage("net.imglib2.position.transform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Floor", null, 'net.imglib2.position.transform.AbstractPositionableTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TLocalizablePositionable'], function (target) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[target]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealLocalizable$TLocalizablePositionable'], function (origin, target) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[target]);C$.$init$.apply(this);
origin.localize$DA(this.position);
for (var d=0; d < this.n; ++d) target.setPosition$J$I(C$.floor$D(this.position[d]), d);

}, 1);

Clazz.newMeth(C$, 'floor$D', function (r) {
return r < 0  ? (r|0) - 1 : (r|0);
}, 1);

Clazz.newMeth(C$, 'floor$F', function (r) {
return r < 0  ? (r|0) - 1 : (r|0);
}, 1);

Clazz.newMeth(C$, 'floor$DA$JA', function (r, f) {
for (var d=0; d < r.length; ++d) f[d]=C$.floor$D(r[d]);

}, 1);

Clazz.newMeth(C$, 'floor$FA$JA', function (r, f) {
for (var d=0; d < r.length; ++d) f[d]=C$.floor$F(r[d]);

}, 1);

Clazz.newMeth(C$, 'floor$net_imglib2_RealLocalizable$JA', function (r, f) {
for (var d=0; d < f.length; ++d) f[d]=C$.floor$D(r.getDoublePosition$I(d));

}, 1);

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
var realPosition=this.position[d] + distance;
var floorPosition=C$.floor$D(realPosition);
this.position[d]=realPosition;
var floorDistance=floorPosition - this.target.getLongPosition$I(d);
if (floorDistance == 0) return;
this.target.move$J$I(floorDistance, d);
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
var realPosition=this.position[d] + distance;
var floorPosition=C$.floor$D(realPosition);
this.position[d]=realPosition;
var floorDistance=floorPosition - this.target.getLongPosition$I(d);
if (floorDistance == 0) return;
this.target.move$J$I(floorDistance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + localizable.getDoublePosition$I(d);
var floorPosition=C$.floor$D(realPosition);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'move$FA', function (distance) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + distance[d];
var floorPosition=C$.floor$D(realPosition);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'move$DA', function (distance) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + distance[d];
var floorPosition=C$.floor$D(realPosition);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
this.position[d]=localizable.getDoublePosition$I(d);
this.discrete[d]=C$.floor$D(this.position[d]);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$FA', function (pos) {
for (var d=0; d < this.n; ++d) {
var realPosition=pos[d];
this.position[d]=realPosition;
this.discrete[d]=C$.floor$F(realPosition);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$DA', function (position) {
for (var d=0; d < this.n; ++d) {
this.position[d]=position[d];
this.discrete[d]=C$.floor$D(position[d]);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$F$I', function (position, dim) {
this.position[dim]=position;
this.target.setPosition$J$I(C$.floor$F(position), dim);
});

Clazz.newMeth(C$, 'setPosition$D$I', function (position, dim) {
this.position[dim]=position;
this.target.setPosition$J$I(C$.floor$D(position), dim);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
