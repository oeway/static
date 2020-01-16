(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RectangleRegionOfInterest", null, 'net.imglib2.roi.AbstractIterableRegionOfInterest');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['origin','double[]','+extent']]]

Clazz.newMeth(C$, 'c$$DA$DA', function (origin, extent) {
;C$.superclazz.c$$I.apply(this,[origin.length]);C$.$init$.apply(this);
this.origin=origin;
this.extent=extent;
}, 1);

Clazz.newMeth(C$, 'getOrigin$net_imglib2_RealPositionable', function (ptOrigin) {
ptOrigin.setPosition$DA(this.origin);
});

Clazz.newMeth(C$, 'getOrigin$DA', function (org) {
System.arraycopy$O$I$O$I$I(this.origin, 0, org, 0, this.numDimensions$());
});

Clazz.newMeth(C$, 'getOrigin$I', function (d) {
return this.origin[d];
});

Clazz.newMeth(C$, 'setOrigin$net_imglib2_RealLocalizable', function (ptOrigin) {
ptOrigin.localize$DA(this.origin);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setOrigin$DA', function (origin) {
System.arraycopy$O$I$O$I$I(origin, 0, this.origin, 0, this.numDimensions$());
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setOrigin$D$I', function (origin, d) {
this.origin[d]=origin;
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setExtent$DA', function (extent) {
System.arraycopy$O$I$O$I$I(extent, 0, this.extent, 0, this.numDimensions$());
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setExtent$D$I', function (extent, d) {
this.extent[d]=extent;
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'getExtent$net_imglib2_RealPositionable', function (p) {
p.setPosition$DA(this.extent);
});

Clazz.newMeth(C$, 'getExtent$DA', function (ext) {
System.arraycopy$O$I$O$I$I(this.extent, 0, ext, 0, this.numDimensions$());
});

Clazz.newMeth(C$, 'getExtent$I', function (d) {
return this.extent[d];
});

Clazz.newMeth(C$, 'nextRaster$JA$JA', function (position, end) {
for (var i=this.numDimensions$() - 1; i >= 0; i--) {
if (position[i] < this.min$I(i)) {
for (; i >= 0; i--) {
position[i]=end[i]=this.min$I(i);
}
end[0]=this.max$I(0) + 1;
return true;
}}
position[0]=this.min$I(0);
end[0]=this.max$I(0) + 1;
for (var i=1; i < this.numDimensions$(); i++) {
position[i]=end[i]=position[i] + 1;
if (position[i] <= this.max$I(i)) return true;
position[i]=end[i]=this.min$I(i);
}
return false;
});

Clazz.newMeth(C$, 'contains$DA', function (position) {
for (var i=0; i < this.numDimensions$(); i++) {
if (position[i] < this.realMin$I(i) ) return false;
if (position[i] >= this.realMax$I(i) ) return false;
}
return true;
});

Clazz.newMeth(C$, 'size$', function () {
var product=1;
for (var i=0; i < this.numDimensions$(); i++) {
product*=this.max$I(i) - this.min$I(i) + 1;
}
return product;
});

Clazz.newMeth(C$, 'getExtrema$JA$JA', function (minima, maxima) {
for (var i=0; i < this.numDimensions$(); i++) {
minima[i]=(Math.ceil(this.origin[i])|0);
maxima[i]=(Math.ceil(this.origin[i] + this.extent[i])|0) - 1;
}
});

Clazz.newMeth(C$, 'getRealExtrema$DA$DA', function (minima, maxima) {
System.arraycopy$O$I$O$I$I(this.origin, 0, minima, 0, this.numDimensions$());
for (var i=0; i < this.numDimensions$(); i++) {
maxima[i]=this.origin[i] + this.extent[i];
}
});

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
var newVal=this.getOrigin$I(d) + displacement;
this.setOrigin$D$I(newVal, d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
