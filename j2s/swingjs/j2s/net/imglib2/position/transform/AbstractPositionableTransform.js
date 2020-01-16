(function(){var P$=Clazz.newPackage("net.imglib2.position.transform"),I$=[[0,'StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractPositionableTransform", null, 'net.imglib2.AbstractEuclideanSpace', ['net.imglib2.RealPositionable', 'net.imglib2.RealLocalizable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['target','<LocalizablePositionable extends net.imglib2.Localizable & net.imglib2.Positionable>','position','double[]','discrete','long[]']]]

Clazz.newMeth(C$, 'c$$TLocalizablePositionable', function (target) {
;C$.superclazz.c$$I.apply(this,[target.numDimensions$()]);C$.$init$.apply(this);
this.target=target;
this.position=Clazz.array(Double.TYPE, [this.n]);
this.discrete=Clazz.array(Long.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'getDoublePosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var d=0; d < pos.length; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var d=0; d < pos.length; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'bck$I', function (dim) {
this.position[dim] -= 1;
this.target.bck$I(dim);
});

Clazz.newMeth(C$, 'fwd$I', function (dim) {
this.position[dim] += 1;
this.target.fwd$I(dim);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, dim) {
this.position[dim] += distance;
this.target.move$I$I(distance, dim);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, dim) {
this.position[dim] += distance;
this.target.move$J$I(distance, dim);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) this.position[d] += localizable.getDoublePosition$I(d);

this.target.move$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; ++d) this.position[d] += distance[d];

this.target.move$IA(distance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; ++d) this.position[d] += distance[d];

this.target.move$JA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; d++) this.position[d]=localizable.getLongPosition$I(d);

this.target.setPosition$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var d=0; d < this.n; ++d) this.position[d]=position[d];

this.target.setPosition$IA(position);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
for (var d=0; d < this.n; ++d) this.position[d]=position[d];

this.target.setPosition$JA(position);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.position[d]=position;
this.target.setPosition$I$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.position[d]=position;
this.target.setPosition$J$I(position, d);
});

Clazz.newMeth(C$, 'toString', function () {
var pos=Clazz.new_($I$(1,1).c$$S,["("]);
pos.append$D(this.position[0]);
for (var d=1; d < this.n; d++) pos.append$S(", ").append$D(this.position[d]);

pos.append$S(")");
return pos.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
