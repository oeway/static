(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={},I$=[[0,'net.imglib2.RealPoint','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EllipseRegionOfInterest", null, 'net.imglib2.roi.AbstractIterableRegionOfInterest');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['origin','net.imglib2.RealPoint','radii','double[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [2]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (nDim) {
;C$.superclazz.c$$I.apply(this,[nDim]);C$.$init$.apply(this);
this.origin=Clazz.new_($I$(1,1).c$$I,[nDim]);
this.radii=Clazz.array(Double.TYPE, [nDim]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealLocalizable$DA', function (origin, radii) {
;C$.superclazz.c$$I.apply(this,[origin.numDimensions$()]);C$.$init$.apply(this);
this.origin=Clazz.new_($I$(1,1).c$$net_imglib2_RealLocalizable,[origin]);
this.radii=Clazz.array(Double.TYPE, [origin.numDimensions$()]);
System.arraycopy$O$I$O$I$I(radii, 0, this.radii, 0, origin.numDimensions$());
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealLocalizable', function (origin) {
C$.c$$net_imglib2_RealLocalizable$DA.apply(this, [origin, Clazz.array(Double.TYPE, [origin.numDimensions$()])]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealLocalizable$D', function (origin, radius) {
C$.c$$net_imglib2_RealLocalizable.apply(this, [origin]);
$I$(2).fill$DA$D(this.radii, radius);
}, 1);

Clazz.newMeth(C$, 'setOrigin$net_imglib2_RealLocalizable', function (origin) {
this.origin.setPosition$net_imglib2_RealLocalizable(origin);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setOrigin$DA', function (origin) {
this.origin.setPosition$DA(origin);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setOrigin$D$I', function (origin, d) {
this.origin.setPosition$D$I(origin, d);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (displacement) {
this.origin.move$net_imglib2_RealLocalizable(displacement);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'move$DA', function (displacement) {
this.origin.move$DA(displacement);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
this.origin.move$D$I(displacement, d);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'getOrigin$I', function (d) {
return this.origin.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'getOrigin$net_imglib2_RealPositionable', function (orig) {
orig.setPosition$net_imglib2_RealLocalizable(this.origin);
});

Clazz.newMeth(C$, 'getOrigin$DA', function (orig) {
this.origin.localize$DA(orig);
});

Clazz.newMeth(C$, 'getRadius$I', function (d) {
return this.radii[d];
});

Clazz.newMeth(C$, 'getRadii$DA', function (r) {
System.arraycopy$O$I$O$I$I(this.radii, 0, r, 0, this.numDimensions$());
});

Clazz.newMeth(C$, 'setRadius$D', function (radius) {
$I$(2).fill$DA$D(this.radii, radius);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setRadius$D$I', function (radius, d) {
this.radii[d]=radius;
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setRadii$DA', function (radii) {
System.arraycopy$O$I$O$I$I(radii, 0, this.radii, 0, this.numDimensions$());
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'getExtrema$JA$JA', function (minima, maxima) {
var dMinima=Clazz.array(Double.TYPE, [this.numDimensions$()]);
var dMaxima=Clazz.array(Double.TYPE, [this.numDimensions$()]);
this.getRealExtrema$DA$DA(dMinima, dMaxima);
for (var i=0; i < this.numDimensions$(); i++) {
minima[i]=(Math.ceil(dMinima[i])|0);
maxima[i]=(Math.floor(dMaxima[i])|0);
}
});

Clazz.newMeth(C$, 'getRealExtrema$DA$DA', function (minima, maxima) {
for (var i=0; i < this.numDimensions$(); i++) {
minima[i]=this.origin.getDoublePosition$I(i) - this.radii[i];
maxima[i]=this.origin.getDoublePosition$I(i) + this.radii[i];
}
});

Clazz.newMeth(C$, 'nextRaster$JA$JA', function (position, end) {
if (position[this.numDimensions$() - 1] < this.min$I(this.numDimensions$() - 1)) {
this.min$JA(position);
var d0=0;
for (var i=this.numDimensions$() - 2; i >= 0; i--) {
d0=p$1.getRasterDisplacement$JA$I.apply(this, [position, i]);
position[i]=(Math.ceil(this.origin.getDoublePosition$I(i) - d0)|0);
}
if (this.isMember$JA(position)) {
System.arraycopy$O$I$O$I$I(position, 1, end, 1, this.numDimensions$() - 1);
end[0]=(Math.floor(this.origin.getDoublePosition$I(0) + d0)|0) + 1;
return true;
}}for (var i=1; i < this.numDimensions$(); i++) {
position[i]++;
var partialDisplacement=p$1.getPartialDisplacement$JA$I.apply(this, [position, i]);
if (partialDisplacement <= 1 ) {
var d=0;
for (var j=i; j < this.numDimensions$(); j++) {
var diff=(position[j] - this.origin.getDoublePosition$I(j)) / this.radii[j];
d += diff * diff;
}
for (var j=0; j < i; j++) {
var diff=(this.origin.getDoublePosition$I(j) - Math.round(this.origin.getDoublePosition$I(j))) / this.radii[j];
d += diff * diff;
}
if (d > 1 ) continue;
for (var j=i - 1; j >= 0; j--) {
var displacement=p$1.getRasterDisplacement$JA$I.apply(this, [position, j]);
position[j]=(Math.ceil(this.origin.getDoublePosition$I(j) - displacement)|0);
if (j == 0) {
end[0]=(Math.floor(this.origin.getDoublePosition$I(0) + displacement)|0) + 1;
} else {
end[j]=position[j];
}}
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getRasterDisplacement$JA$I', function (position, dim) {
return Math.sqrt(1 - p$1.getPartialDisplacement$JA$I.apply(this, [position, dim + 1])) * this.radii[dim];
}, p$1);

Clazz.newMeth(C$, 'getPartialDisplacement$JA$I', function (position, dim) {
var accumulator=0;
for (var i=dim; i < this.numDimensions$(); i++) {
var diff=(position[i] - this.origin.getDoublePosition$I(i)) / this.radii[i];
accumulator += diff * diff;
}
return accumulator;
}, p$1);

Clazz.newMeth(C$, 'contains$DA', function (position) {
var accumulator=0;
for (var i=0; i < this.numDimensions$(); i++) {
var diff=((position[i] - this.origin.getDoublePosition$I(i)) / this.radii[i]);
accumulator += diff * diff;
}
return accumulator <= 1 ;
});

Clazz.newMeth(C$, 'isMember$JA', function (position) {
var accumulator=0;
for (var i=0; i < this.numDimensions$(); i++) {
var diff=((position[i] - this.origin.getDoublePosition$I(i)) / this.radii[i]);
accumulator += diff * diff;
}
return accumulator <= 1 ;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
