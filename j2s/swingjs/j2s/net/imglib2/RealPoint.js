(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealPoint", null, 'net.imglib2.AbstractRealLocalizable', 'net.imglib2.RealPositionable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA$Z', function (position, copy) {
;C$.superclazz.c$$DA.apply(this,[copy ? position.clone$() : position]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (position) {
C$.c$$DA$Z.apply(this, [position, true]);
}, 1);

Clazz.newMeth(C$, 'c$$FA', function (position) {
;C$.superclazz.c$$I.apply(this,[position.length]);C$.$init$.apply(this);
this.setPosition$FA(position);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealLocalizable', function (localizable) {
;C$.superclazz.c$$I.apply(this,[localizable.numDimensions$()]);C$.$init$.apply(this);
localizable.localize$DA(this.position);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
++this.position[d];
});

Clazz.newMeth(C$, 'bck$I', function (d) {
--this.position[d];
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.position[d] += distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.position[d] += distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; d++) this.position[d] += localizable.getDoublePosition$I(d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; d++) this.position[d] += distance[d];

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; d++) this.position[d] += distance[d];

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; d++) this.position[d]=localizable.getDoublePosition$I(d);

});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var d=0; d < this.n; d++) this.position[d]=position[d];

});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
for (var d=0; d < this.n; d++) this.position[d]=position[d];

});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.position[d]=position;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.position[d]=position;
});

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
this.position[d] += distance;
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
this.position[d] += distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.n; ++d) this.position[d] += localizable.getDoublePosition$I(d);

});

Clazz.newMeth(C$, 'move$FA', function (distance) {
for (var d=0; d < this.n; ++d) this.position[d] += distance[d];

});

Clazz.newMeth(C$, 'move$DA', function (distance) {
for (var d=0; d < this.n; ++d) this.position[d] += distance[d];

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.n; d++) this.position[d]=localizable.getDoublePosition$I(d);

});

Clazz.newMeth(C$, 'setPosition$FA', function (position) {
for (var d=0; d < this.n; ++d) this.position[d]=position[d];

});

Clazz.newMeth(C$, 'setPosition$DA', function (position) {
for (var d=0; d < this.n; ++d) this.position[d]=position[d];

});

Clazz.newMeth(C$, 'setPosition$F$I', function (position, d) {
this.position[d]=position;
});

Clazz.newMeth(C$, 'setPosition$D$I', function (position, d) {
this.position[d]=position;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
var c="(";
for (var i=0; i < this.numDimensions$(); i++) {
sb.append$C(c);
sb.append$D(this.position[i]);
c=",";
}
sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$, 'wrap$DA', function (position) {
return Clazz.new_(C$.c$$DA$Z,[position, false]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
