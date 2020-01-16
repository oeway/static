(function(){var P$=Clazz.newPackage("net.imglib2.position.transform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FloorOffset", null, 'net.imglib2.position.transform.AbstractPositionableTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['offset','long[]']]]

Clazz.newMeth(C$, ['c$$TLocalizablePositionable$JA'], function (target, offset) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[target]);C$.$init$.apply(this);
this.offset=offset.clone$();
for (var d=0; d < this.n; ++d) {
this.discrete[d]=offset[d];
target.setPosition$J$I(offset[d], d);
}
}, 1);

Clazz.newMeth(C$, ['c$$TLocalizablePositionable$net_imglib2_Localizable'], function (target, offset) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[target]);C$.$init$.apply(this);
this.offset=Clazz.array(Long.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.offset[d]=this.discrete[d]=offset.getLongPosition$I(d);
target.setPosition$J$I(this.discrete[d], d);
}
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealLocalizable$TLocalizablePositionable$JA'], function (origin, target, offset) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[target]);C$.$init$.apply(this);
this.offset=offset.clone$();
for (var d=0; d < this.n; ++d) {
this.position[d]=origin.getDoublePosition$I(d);
this.discrete[d]=C$.f$D$J(this.position[d], offset[d]);
target.setPosition$J$I(this.discrete[d], d);
}
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealLocalizable$TLocalizablePositionable$net_imglib2_Localizable'], function (origin, target, offset) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[target]);C$.$init$.apply(this);
this.offset=Clazz.array(Long.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.position[d]=origin.getDoublePosition$I(d);
this.offset[d]=offset.getLongPosition$I(d);
this.discrete[d]=C$.f$D$J(this.position[d], this.offset[d]);
target.setPosition$J$I(this.discrete[d], d);
}
}, 1);

Clazz.newMeth(C$, 'f$D$J', function (r, off) {
return r < 0  ? (r|0) + off - 1 : (r|0) + off;
}, 1);

Clazz.newMeth(C$, 'f$F$J', function (r, off) {
return r < 0  ? (r|0) + off - 1 : (r|0) + off;
}, 1);

Clazz.newMeth(C$, 'f$DA$JA', function (r, f) {
for (var d=0; d < r.length; ++d) f[d]=C$.f$D$J(r[d], this.offset[d]);

});

Clazz.newMeth(C$, 'f$FA$JA', function (r, f) {
for (var d=0; d < r.length; ++d) f[d]=C$.f$F$J(r[d], this.offset[d]);

});

Clazz.newMeth(C$, 'f$net_imglib2_RealLocalizable$JA', function (r, f) {
for (var d=0; d < f.length; ++d) f[d]=C$.f$D$J(r.getDoublePosition$I(d), this.offset[d]);

});

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
var realPosition=this.position[d] + distance;
var floorPosition=C$.f$D$J(realPosition, this.offset[d]);
this.position[d]=realPosition;
var floorDistance=floorPosition - this.target.getLongPosition$I(d);
if (floorDistance == 0) return;
this.target.move$J$I(floorDistance, d);
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
var realPosition=this.position[d] + distance;
var floorPosition=C$.f$D$J(realPosition, this.offset[d]);
this.position[d]=realPosition;
var floorDistance=floorPosition - this.target.getLongPosition$I(d);
if (floorDistance == 0) return;
this.target.move$J$I(floorDistance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + localizable.getDoublePosition$I(d);
var floorPosition=C$.f$D$J(realPosition, this.offset[d]);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'move$FA', function (distance) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + distance[d];
var floorPosition=C$.f$D$J(realPosition, this.offset[d]);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'move$DA', function (distance) {
for (var d=0; d < this.n; ++d) {
var realPosition=this.position[d] + distance[d];
var floorPosition=C$.f$D$J(realPosition, this.offset[d]);
this.position[d]=realPosition;
this.discrete[d]=floorPosition - this.target.getLongPosition$I(d);
}
this.target.move$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
this.position[d]=localizable.getDoublePosition$I(d);
this.discrete[d]=C$.f$D$J(this.position[d], this.offset[d]);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$FA', function (pos) {
for (var d=0; d < this.n; ++d) {
var realPosition=pos[d];
this.position[d]=realPosition;
this.discrete[d]=C$.f$F$J(realPosition, this.offset[d]);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$DA', function (position) {
for (var d=0; d < this.n; ++d) {
this.position[d]=position[d];
this.discrete[d]=C$.f$D$J(position[d], this.offset[d]);
}
this.target.setPosition$JA(this.discrete);
});

Clazz.newMeth(C$, 'setPosition$F$I', function (position, d) {
this.position[d]=position;
this.target.setPosition$J$I(C$.f$F$J(position, this.offset[d]), d);
});

Clazz.newMeth(C$, 'setPosition$D$I', function (position, d) {
this.position[d]=position;
this.target.setPosition$J$I(C$.f$D$J(position, this.offset[d]), d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
