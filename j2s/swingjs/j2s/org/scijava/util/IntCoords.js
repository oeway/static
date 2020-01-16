(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntCoords");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['x','y']]]

Clazz.newMeth(C$, 'c$$I$I', function (x, y) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "[Coords: x=" + this.x + ", y=" + this.y + "]" ;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.util.IntCoords"))) return false;
var that=o;
return this.x == that.x && this.y == that.y ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var b1=this.x & 65535;
var b2=this.y & 65535;
return b1 | (b2 << 16);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
