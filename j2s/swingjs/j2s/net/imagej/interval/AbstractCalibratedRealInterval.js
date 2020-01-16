(function(){var P$=Clazz.newPackage("net.imagej.interval"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractCalibratedRealInterval", null, 'net.imagej.space.AbstractCalibratedSpace', 'net.imagej.interval.CalibratedRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['min','double[]','+max']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval', function (interval) {
;C$.superclazz.c$$I.apply(this,[interval.numDimensions$()]);C$.$init$.apply(this);
this.min=Clazz.array(Double.TYPE, [interval.numDimensions$()]);
this.max=this.min.clone$();
interval.realMin$DA(this.min);
interval.realMax$DA(this.max);
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealInterval$TAA'], function (interval, axes) {
;C$.superclazz.c$$TAA.apply(this,[axes]);C$.$init$.apply(this);
if (interval.numDimensions$() != axes.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of provided axes != number of dimensions"]);
}this.min=Clazz.array(Double.TYPE, [interval.numDimensions$()]);
this.max=this.min.clone$();
interval.realMin$DA(this.min);
interval.realMax$DA(this.max);
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealInterval$java_util_List'], function (interval, axes) {
;C$.superclazz.c$$java_util_List.apply(this,[axes]);C$.$init$.apply(this);
if (interval.numDimensions$() != axes.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of provided axes != number of dimensions"]);
}this.min=Clazz.array(Double.TYPE, [interval.numDimensions$()]);
this.max=this.min.clone$();
interval.realMin$DA(this.min);
interval.realMax$DA(this.max);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (extents) {
;C$.superclazz.c$$I.apply(this,[extents.length]);C$.$init$.apply(this);
this.min=Clazz.array(Double.TYPE, [extents.length]);
this.max=extents.clone$();
}, 1);

Clazz.newMeth(C$, ['c$$DA$TAA'], function (extents, axes) {
;C$.superclazz.c$$TAA.apply(this,[axes]);C$.$init$.apply(this);
if (extents.length != axes.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of provided axes != number of dimensions"]);
}this.min=Clazz.array(Double.TYPE, [extents.length]);
this.max=extents.clone$();
}, 1);

Clazz.newMeth(C$, ['c$$DA$java_util_List'], function (extents, axes) {
;C$.superclazz.c$$java_util_List.apply(this,[axes]);C$.$init$.apply(this);
if (extents.length != axes.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of provided axes != number of dimensions"]);
}this.min=Clazz.array(Double.TYPE, [extents.length]);
this.max=extents.clone$();
}, 1);

Clazz.newMeth(C$, ['c$$DA$DA'], function (min, max) {
;C$.superclazz.c$$I.apply(this,[min.length]);C$.$init$.apply(this);
if (min.length != max.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of provided axes != number of dimensions"]);
}this.min=min.clone$();
this.max=max.clone$();
}, 1);

Clazz.newMeth(C$, ['c$$DA$DA$TAA'], function (min, max, axes) {
;C$.superclazz.c$$TAA.apply(this,[axes]);C$.$init$.apply(this);
if ((min.length != max.length) || (min.length != axes.length) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of provided axes != number of dimensions"]);
}this.min=min.clone$();
this.max=max.clone$();
}, 1);

Clazz.newMeth(C$, ['c$$DA$DA$java_util_List'], function (min, max, axes) {
;C$.superclazz.c$$java_util_List.apply(this,[axes]);C$.$init$.apply(this);
if ((min.length != max.length) || (min.length != axes.size$()) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of provided axes != number of dimensions"]);
}this.min=min.clone$();
this.max=max.clone$();
}, 1);

Clazz.newMeth(C$, 'averageScale$I', function (d) {
return this.axis$I(d).averageScale$D$D(this.realMin$I(d), this.realMax$I(d));
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (dest) {
for (var i=0; i < dest.length; i++) {
dest[i]=this.realMax$I(i);
}
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (dest) {
for (var i=0; i < dest.numDimensions$(); i++) {
dest.setPosition$D$I(this.realMax$I(i), i);
}
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.min[d];
});

Clazz.newMeth(C$, 'realMin$DA', function (dest) {
for (var i=0; i < dest.length; i++) {
dest[i]=this.realMin$I(i);
}
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (dest) {
for (var i=0; i < dest.numDimensions$(); i++) {
dest.setPosition$D$I(this.realMin$I(i), i);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
