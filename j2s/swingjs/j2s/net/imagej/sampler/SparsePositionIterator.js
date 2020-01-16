(function(){var P$=Clazz.newPackage("net.imagej.sampler"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SparsePositionIterator", null, null, 'net.imagej.sampler.PositionIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['maxIndexes','int[]','+indexes','actualValues','java.util.List','currPos','long[]']]]

Clazz.newMeth(C$, 'c$$net_imagej_sampler_SamplingDefinition', function (def) {
;C$.$init$.apply(this);
this.actualValues=def.getInputRanges$();
this.maxIndexes=p$1.calcMaxes$net_imagej_sampler_SamplingDefinition.apply(this, [def]);
this.currPos=Clazz.array(Long.TYPE, [this.maxIndexes.length]);
for (var i=0; i < this.currPos.length; i++) this.currPos[i]=(this.actualValues.get$I(i).get$I(0)).valueOf();

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
this.currPos[i]=(this.actualValues.get$I(i).get$I(nextPos)).valueOf();
return this.currPos;
}this.indexes[i]=0;
this.currPos[i]=(this.actualValues.get$I(i).get$I(0)).valueOf();
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t position iterator beyond end"]);
});

Clazz.newMeth(C$, 'calcMaxes$net_imagej_sampler_SamplingDefinition', function (def) {
var mx=Clazz.array(Integer.TYPE, [this.actualValues.size$()]);
for (var i=0; i < mx.length; i++) {
mx[i]=this.actualValues.get$I(i).size$() - 1;
}
return mx;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
