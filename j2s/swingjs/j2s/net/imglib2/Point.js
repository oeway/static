(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Point", null, 'net.imglib2.AbstractLocalizable', 'net.imglib2.Positionable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$JA$Z', function (position, copy) {
;C$.superclazz.c$$JA.apply(this,[copy ? position.clone$() : position]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (position) {
C$.c$$JA$Z.apply(this, [position, true]);
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (position) {
;C$.superclazz.c$$I.apply(this,[position.length]);C$.$init$.apply(this);
this.setPosition$IA(position);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Localizable', function (localizable) {
;C$.superclazz.c$$I.apply(this,[localizable.numDimensions$()]);C$.$init$.apply(this);
localizable.localize$JA(this.position);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
++this.position[d];
});

Clazz.newMeth(C$, 'bck$I', function (d) {
--this.position[d];
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; d++) this.position[d]+=localizable.getLongPosition$I(d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; d++) this.position[d]+=distance[d];

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; d++) this.position[d]+=distance[d];

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; d++) this.position[d]=localizable.getLongPosition$I(d);

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

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
var c="(";
for (var i=0; i < this.numDimensions$(); i++) {
sb.append$C(c);
sb.append$J(this.position[i]);
c=",";
}
sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "net.imglib2.RealLocalizable") && (obj).numDimensions$() == this.numDimensions$() ) {
var asLocalizable=(obj);
for (var d=0; d < this.numDimensions$(); d++) {
if (asLocalizable.getDoublePosition$I(d) != this.getDoublePosition$I(d) ) return false;
}
return true;
}return false;
});

Clazz.newMeth(C$, 'wrap$JA', function (position) {
return Clazz.new_(C$.c$$JA$Z,[position, false]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
