(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'org.scijava.util.RealCoords']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealRect");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['x','y','width','height']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D', function (x, y, width, height) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
this.width=width;
this.height=height;
}, 1);

Clazz.newMeth(C$, 'intersects$org_scijava_util_RealRect', function (r) {
var tw=this.width;
var th=this.height;
var rw=r.width;
var rh=r.height;
if (rw <= 0  || rh <= 0   || tw <= 0   || th <= 0  ) {
return false;
}var tx=this.x;
var ty=this.y;
var rx=r.x;
var ry=r.y;
rw += rx;
rh += ry;
tw += tx;
th += ty;
var rtn=(rw < rx  || rw > tx  ) && (rh < ry  || rh > ty  ) && (tw < tx  || tw > rx  ) && (th < ty  || th > ry  )  ;
return rtn;
});

Clazz.newMeth(C$, 'intersection$org_scijava_util_RealRect', function (r) {
var newX=Math.max(this.x, r.x);
var newY=Math.max(this.y, r.y);
var newW=Math.min(this.x + this.width, r.x + r.width) - this.x;
var newH=Math.min(this.y + this.height, r.y + r.height) - this.y;
if (newW < 0 ) newW=0;
if (newH < 0 ) newH=0;
return Clazz.new_(C$.c$$D$D$D$D,[newX, newY, newW, newH]);
});

Clazz.newMeth(C$, 'contains$org_scijava_util_RealCoords', function (coords) {
return coords.x >= this.x  && coords.x < this.x + this.width   && coords.y >= this.y   && coords.y < this.y + this.height  ;
});

Clazz.newMeth(C$, 'getTopLeft$', function () {
return Clazz.new_($I$(1,1).c$$D$D,[this.x, this.y]);
});

Clazz.newMeth(C$, 'getBottomRight$', function () {
return Clazz.new_($I$(1,1).c$$D$D,[this.x + this.width, this.y + this.height]);
});

Clazz.newMeth(C$, 'toString', function () {
return "x=" + new Double(this.x).toString() + ", y=" + new Double(this.y).toString() + ", w=" + new Double(this.width).toString() + ", h=" + new Double(this.height).toString() ;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.util.RealRect"))) return false;
var rect=o;
return this.x == rect.x  && this.y == rect.y   && this.width == rect.width   && this.height == rect.height  ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var b1=p$1.lsb$D.apply(this, [this.x]);
var b2=p$1.lsb$D.apply(this, [this.y]);
var b3=p$1.lsb$D.apply(this, [this.width]);
var b4=p$1.lsb$D.apply(this, [this.height]);
return b1 | (b2 << 8) | (b3 << 16) | (b4 << 24) ;
});

Clazz.newMeth(C$, 'lsb$D', function (d) {
return (Double.doubleToLongBits$D(d)|0) & 255;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
