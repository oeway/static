(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),I$=[[0,'net.imglib2.util.IntervalIndexer','net.imglib2.util.Intervals']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Cell", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','numPixels'],'O',['dimensions','int[]','+steps','min','long[]','+max','data','<A>']]]

Clazz.newMeth(C$, 'c$$IA$JA$TA', function (dimensions, min, data) {
;C$.$init$.apply(this);
this.n=dimensions.length;
this.dimensions=dimensions.clone$();
this.steps=Clazz.array(Integer.TYPE, [this.n]);
$I$(1).createAllocationSteps$IA$IA(dimensions, this.steps);
this.min=min.clone$();
this.max=Clazz.array(Long.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) this.max[d]=min[d] + dimensions[d] - 1;

this.numPixels=($I$(2).numElements$IA(dimensions)|0);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'size$', function () {
return this.numPixels;
});

Clazz.newMeth(C$, 'indexToGlobalPosition$I$I', function (index, d) {
return $I$(1).indexToPosition$I$IA$IA$I(index, this.dimensions, this.steps, d) + this.min[d];
});

Clazz.newMeth(C$, 'indexToGlobalPosition$I$JA', function (index, position) {
$I$(1).indexToPosition$I$IA$JA(index, this.dimensions, position);
for (var d=0; d < position.length; ++d) position[d]+=this.min[d];

});

Clazz.newMeth(C$, 'globalPositionToIndex$JA', function (position) {
return $I$(1).positionWithOffsetToIndex$JA$IA$JA(position, this.dimensions, this.min);
});

Clazz.newMeth(C$, 'min$I', function (d) {
return this.min[d];
});

Clazz.newMeth(C$, 'min$JA', function (minimum) {
for (var d=0; d < this.n; ++d) minimum[d]=this.min[d];

});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.dimensions[d];
});

Clazz.newMeth(C$, 'dimensions$IA', function (dim) {
for (var d=0; d < this.n; ++d) dim[d]=this.dimensions[d];

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
