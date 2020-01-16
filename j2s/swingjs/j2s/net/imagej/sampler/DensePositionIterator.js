(function(){var P$=Clazz.newPackage("net.imagej.sampler"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "DensePositionIterator", null, null, 'net.imagej.sampler.PositionIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['maxIndexes','int[]','+indexes','currPos','long[]']]]

Clazz.newMeth(C$, 'c$$net_imagej_sampler_SamplingDefinition', function (def) {
;C$.$init$.apply(this);
this.maxIndexes=p$1.calcMaxes$net_imagej_sampler_SamplingDefinition.apply(this, [def]);
this.currPos=Clazz.array(Long.TYPE, [this.maxIndexes.length]);
for (var i=0; i < this.currPos.length; i++) this.currPos[i]=0;

this.indexes=Clazz.array(Integer.TYPE, [this.maxIndexes.length]);
this.indexes[0]=-1;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
for (var i=0; i < this.currPos.length; i++) {
if (this.indexes[i] < this.maxIndexes[i]) return true;
}
return false;
});

Clazz.newMeth(C$, 'next$', function () {
for (var i=0; i < this.indexes.length; i++) {
var nextPos=this.indexes[i] + 1;
if (nextPos <= this.maxIndexes[i]) {
this.indexes[i]=nextPos;
this.currPos[i]=nextPos;
return this.currPos;
}this.indexes[i]=0;
this.currPos[i]=0;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t position iterator beyond end"]);
});

Clazz.newMeth(C$, 'calcMaxes$net_imagej_sampler_SamplingDefinition', function (def) {
var dims=def.getOutputDims$();
var mx=Clazz.array(Integer.TYPE, [dims.length]);
for (var i=0; i < dims.length; i++) {
if (dims[i] > 2147483647) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can only iterate <= 2 gig per dimension"]);
mx[i]=((dims[i] - 1)|0);
}
return mx;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
