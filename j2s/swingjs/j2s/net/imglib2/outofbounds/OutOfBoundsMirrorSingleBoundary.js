(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsMirrorSingleBoundary", null, 'net.imglib2.outofbounds.AbstractOutOfBoundsMirror');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_outofbounds_OutOfBoundsMirrorSingleBoundary'], function (outOfBounds) {
;C$.superclazz.c$$net_imglib2_outofbounds_AbstractOutOfBoundsMirror.apply(this,[outOfBounds]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['c$$TF'], function (f) {
;C$.superclazz.c$$TF.apply(this,[f]);C$.$init$.apply(this);
for (var i=0; i < this.dimension.length; ++i) this.p[i]=2 * this.dimension[i] - 2;

}, 1);

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_outofbounds_OutOfBoundsMirrorSingleBoundary,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
var x=++this.zeroMinPos[d];
if (x == 0) {
this.dimIsOutOfBounds[d]=false;
if (this.isOutOfBounds) this.checkOutOfBounds$();
} else if (x == this.dimension[d]) this.dimIsOutOfBounds[d]=this.isOutOfBounds=true;
var y=this.outOfBoundsRandomAccess.getLongPosition$I(d) - this.min[d];
if (this.inc[d]) {
if (y + 1 == this.dimension[d]) {
this.inc[d]=false;
this.outOfBoundsRandomAccess.bck$I(d);
} else this.outOfBoundsRandomAccess.fwd$I(d);
} else {
if (y == 0) {
this.inc[d]=true;
this.outOfBoundsRandomAccess.fwd$I(d);
} else this.outOfBoundsRandomAccess.bck$I(d);
}});

Clazz.newMeth(C$, 'bck$I', function (d) {
var x=this.zeroMinPos[d]--;
if (x == 0) this.dimIsOutOfBounds[d]=this.isOutOfBounds=true;
 else if (x == this.dimension[d]) {
this.dimIsOutOfBounds[d]=false;
if (this.isOutOfBounds) this.checkOutOfBounds$();
}var y=this.outOfBoundsRandomAccess.getLongPosition$I(d) - this.min[d];
if (this.inc[d]) {
if (y == 0) {
this.inc[d]=false;
this.outOfBoundsRandomAccess.fwd$I(d);
} else this.outOfBoundsRandomAccess.bck$I(d);
} else {
if (y + 1 == this.dimension[d]) {
this.inc[d]=true;
this.outOfBoundsRandomAccess.bck$I(d);
} else this.outOfBoundsRandomAccess.fwd$I(d);
}});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
position-=this.min[d];
this.zeroMinPos[d]=position;
var mod=this.dimension[d];
var pos;
if (position < 0) {
this.dimIsOutOfBounds[d]=this.isOutOfBounds=true;
position=-position;
pos=false;
} else pos=true;
if (position >= mod) {
this.dimIsOutOfBounds[d]=this.isOutOfBounds=true;
var x=this.p[d];
if (position <= x) {
position=x - position;
this.inc[d]=!pos;
} else {
try {
position%=x;
if (position >= mod) {
position=x - position;
this.inc[d]=!pos;
} else this.inc[d]=pos;
} catch (e) {
if (Clazz.exceptionOf(e,"ArithmeticException")){
position=0;
} else {
throw e;
}
}
}} else {
if (pos) {
this.dimIsOutOfBounds[d]=false;
if (this.isOutOfBounds) this.checkOutOfBounds$();
}this.inc[d]=pos;
}this.outOfBoundsRandomAccess.setPosition$J$I(position+=this.min[d], d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
