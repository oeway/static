(function(){var P$=Clazz.newPackage("net.imglib2.img"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractImg", null, null, 'net.imglib2.img.Img');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'L',['numPixels'],'O',['dimension','long[]','+max']]]

Clazz.newMeth(C$, 'c$$JA', function (size) {
;C$.$init$.apply(this);
this.n=size.length;
this.numPixels=C$.numElements$JA(size);
this.dimension=size.clone$();
this.max=Clazz.array(Long.TYPE, [size.length]);
for (var i=0; i < size.length; ++i) this.max[i]=size[i] - 1;

}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'numElements$JA', function (dim) {
var numPixels=1;
for (var i=0; i < dim.length; ++i) numPixels*=dim[i];

return numPixels;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'dimensions$JA', function (s) {
for (var i=0; i < this.n; ++i) s[i]=this.dimension[i];

});

Clazz.newMeth(C$, 'dimension$I', function (d) {
try {
return this.dimension[d];
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return 1;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'size$', function () {
return this.numPixels;
});

Clazz.newMeth(C$, 'toString', function () {
var className=this.getClass$().getCanonicalName$();
className=className.substring$I$I(className.lastIndexOf$S(".") + 1, className.length$());
var description=className + " [" + this.dimension[0] ;
for (var i=1; i < this.n; ++i) description += "x" + this.dimension[i];

description += "]";
return description;
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (m) {
for (var d=0; d < this.n; ++d) m[d]=this.max[d];

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (m) {
m.setPosition$JA(this.max);
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return 0;
});

Clazz.newMeth(C$, 'realMin$DA', function (m) {
for (var d=0; d < this.n; ++d) m[d]=0;

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (m) {
for (var d=0; d < this.n; ++d) m.setPosition$I$I(0, d);

});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.max[d];
});

Clazz.newMeth(C$, 'max$JA', function (m) {
for (var d=0; d < this.n; ++d) m[d]=this.max[d];

});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (m) {
m.setPosition$JA(this.max);
});

Clazz.newMeth(C$, 'min$JA', function (m) {
for (var d=0; d < this.n; ++d) m[d]=0;

});

Clazz.newMeth(C$, 'min$I', function (d) {
return 0;
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (m) {
for (var d=0; d < this.n; ++d) m.setPosition$I$I(0, d);

});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
