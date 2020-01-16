(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "RealCoords");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['x','y']]]

Clazz.newMeth(C$, 'c$$D$D', function (x, y) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getIntX$', function () {
return ((this.x + 0.5)|0);
});

Clazz.newMeth(C$, 'getIntY$', function () {
return ((this.y + 0.5)|0);
});

Clazz.newMeth(C$, 'getLongX$', function () {
return ((this.x + 0.5)|0);
});

Clazz.newMeth(C$, 'getLongY$', function () {
return ((this.y + 0.5)|0);
});

Clazz.newMeth(C$, 'toString', function () {
return "[Coords: x=" + new Double(this.x).toString() + ",y=" + new Double(this.y).toString() + "]" ;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.util.RealCoords"))) return false;
var that=o;
return this.x == that.x  && this.y == that.y  ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var b1=p$1.lsb16$D.apply(this, [this.x]);
var b2=p$1.lsb16$D.apply(this, [this.y]);
return b1 | (b2 << 16);
});

Clazz.newMeth(C$, 'lsb16$D', function (d) {
return (Double.doubleToLongBits$D(d)|0) & 65535;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
