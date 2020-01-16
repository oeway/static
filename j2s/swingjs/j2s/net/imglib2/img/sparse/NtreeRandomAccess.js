(function(){var P$=Clazz.newPackage("net.imglib2.img.sparse"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NtreeRandomAccess", null, null, [['net.imglib2.img.sparse.NtreeImg','net.imglib2.img.sparse.NtreeImg.PositionProvider'], 'net.imglib2.RandomAccess']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['img','net.imglib2.img.sparse.NtreeImg','type','<T extends NativeType<T>>','position','long[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_sparse_NtreeImg', function (img) {
;C$.$init$.apply(this);
this.n=img.numDimensions$();
this.position=Clazz.array(Long.TYPE, [img.numDimensions$()]);
this.img=img;
this.type=img.createLinkedType$();
for (var d=0; d < this.n; d++) this.position[d]=0;

this.type.updateContainer$O(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_sparse_NtreeRandomAccess', function (randomAccess) {
;C$.$init$.apply(this);
this.n=randomAccess.numDimensions$();
this.position=Clazz.array(Long.TYPE, [randomAccess.numDimensions$()]);
this.img=randomAccess.img;
this.type=this.img.createLinkedType$();
for (var d=0; d < this.n; d++) this.position[d]=randomAccess.position[d];

this.type.updateContainer$O(this);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
++this.position[d];
});

Clazz.newMeth(C$, 'bck$I', function (d) {
--this.position[d];
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
for (var d=0; d < this.n; ++d) this.position[d]=pos[d];

});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
for (var d=0; d < this.n; ++d) this.position[d]=pos[d];

});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
this.position[d]=pos;
});

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_sparse_NtreeRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.position;
});

Clazz.newMeth(C$, 'move$I$I', function (distance, dim) {
this.move$J$I(distance, dim);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, dim) {
this.setPosition$J$I(position, dim);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; ++d) {
var dist=distance[d];
if (dist != 0) this.move$J$I(dist, d);
}
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; ++d) {
var dist=distance[d];
if (dist != 0) this.move$J$I(dist, d);
}
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
var dist=localizable.getLongPosition$I(d);
if (dist != 0) this.move$J$I(dist, d);
}
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
this.setPosition$J$I(localizable.getLongPosition$I(d), d);
}
});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var d=0; d < this.n; d++) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var d=0; d < this.n; d++) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$IA', function (pos) {
for (var d=0; d < this.n; d++) pos[d]=(this.position[d]|0);

});

Clazz.newMeth(C$, 'localize$JA', function (pos) {
for (var d=0; d < this.n; d++) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'getIntPosition$I', function (dim) {
return (this.position[dim]|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'toString', function () {
return $I$(1).printCoordinates$JA(this.position) + " = " + this.get$() ;
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
