(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "KDTreeNode", null, null, ['net.imglib2.RealLocalizable', 'net.imglib2.Sampler']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','splitDimension'],'O',['pos','double[]','left','net.imglib2.KDTreeNode','+right']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealLocalizable$I$net_imglib2_KDTreeNode$net_imglib2_KDTreeNode', function (position, dimension, left, right) {
;C$.$init$.apply(this);
this.n=position.numDimensions$();
this.pos=Clazz.array(Double.TYPE, [this.n]);
position.localize$DA(this.pos);
this.splitDimension=dimension;
this.left=left;
this.right=right;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_KDTreeNode', function (node) {
;C$.$init$.apply(this);
this.n=node.n;
this.pos=node.pos.clone$();
this.splitDimension=node.splitDimension;
this.left=node.left;
this.right=node.right;
}, 1);

Clazz.newMeth(C$, 'getSplitDimension$', function () {
return this.splitDimension;
});

Clazz.newMeth(C$, 'getSplitCoordinate$', function () {
return this.pos[this.splitDimension];
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
for (var d=0; d < this.n; ++d) position[d]=this.pos[d];

});

Clazz.newMeth(C$, 'localize$DA', function (position) {
for (var d=0; d < this.n; ++d) position[d]=this.pos[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.pos[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.pos[d];
});

Clazz.newMeth(C$, 'squDistanceTo$FA', function (p) {
var sum=0;
for (var d=0; d < this.n; ++d) {
sum += (this.pos[d] - p[d]) * (this.pos[d] - p[d]);
}
return sum;
});

Clazz.newMeth(C$, 'squDistanceTo$DA', function (p) {
var sum=0;
for (var d=0; d < this.n; ++d) {
sum += (this.pos[d] - p[d]) * (this.pos[d] - p[d]);
}
return sum;
});

Clazz.newMeth(C$, 'squDistanceTo$net_imglib2_RealLocalizable', function (p) {
var sum=0;
for (var d=0; d < this.n; ++d) {
sum += (this.pos[d] - p.getDoublePosition$I(d)) * (this.pos[d] - p.getDoublePosition$I(d));
}
return sum;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
