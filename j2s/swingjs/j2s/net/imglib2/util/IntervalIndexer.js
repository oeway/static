(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntervalIndexer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'positionToIndex$IA$IA', function (position, dimensions) {
var maxDim=dimensions.length - 1;
var i=position[maxDim];
for (var d=maxDim - 1; d >= 0; --d) i=i * dimensions[d] + position[d];

return i;
}, 1);

Clazz.newMeth(C$, 'positionToIndex$JA$IA', function (position, dimensions) {
var maxDim=dimensions.length - 1;
var i=(position[maxDim]|0);
for (var d=maxDim - 1; d >= 0; --d) i=i * dimensions[d] + (position[d]|0);

return i;
}, 1);

Clazz.newMeth(C$, 'positionToIndex$JA$JA', function (position, dimensions) {
var maxDim=dimensions.length - 1;
var i=position[maxDim];
for (var d=maxDim - 1; d >= 0; --d) i=i * dimensions[d] + position[d];

return i;
}, 1);

Clazz.newMeth(C$, 'positionToIndex$net_imglib2_Localizable$net_imglib2_Dimensions', function (position, dimensions) {
var maxDim=dimensions.numDimensions$() - 1;
var i=position.getLongPosition$I(maxDim);
for (var d=maxDim - 1; d >= 0; --d) i=i * dimensions.dimension$I(d) + position.getLongPosition$I(d);

return i;
}, 1);

Clazz.newMeth(C$, 'positionWithOffsetToIndex$JA$JA$JA', function (position, dimensions, offsets) {
var maxDim=dimensions.length - 1;
var i=position[maxDim] - offsets[maxDim];
for (var d=maxDim - 1; d >= 0; --d) i=i * dimensions[d] + position[d] - offsets[d];

return i;
}, 1);

Clazz.newMeth(C$, 'positionWithOffsetToIndex$JA$IA$JA', function (position, dimensions, offsets) {
var maxDim=dimensions.length - 1;
var i=((position[maxDim] - offsets[maxDim])|0);
for (var d=maxDim - 1; d >= 0; --d) i=i * dimensions[d] + ((position[d] - offsets[d])|0);

return i;
}, 1);

Clazz.newMeth(C$, 'positionWithOffsetToIndex$IA$IA$IA', function (position, dimensions, offsets) {
var maxDim=dimensions.length - 1;
var i=position[maxDim] - offsets[maxDim];
for (var d=maxDim - 1; d >= 0; --d) i=i * dimensions[d] + position[d] - offsets[d];

return i;
}, 1);

Clazz.newMeth(C$, 'indexToPosition$I$IA$IA', function (index, dimensions, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d];
index=j;
}
position[maxDim]=index;
}, 1);

Clazz.newMeth(C$, 'indexToPosition$J$JA$IA', function (index, dimensions, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=((index - j * dimensions[d])|0);
index=j;
}
position[maxDim]=(index|0);
}, 1);

Clazz.newMeth(C$, 'indexToPosition$I$IA$JA', function (index, dimensions, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d];
index=j;
}
position[maxDim]=index;
}, 1);

Clazz.newMeth(C$, 'indexToPosition$J$JA$JA', function (index, dimensions, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d];
index=j;
}
position[maxDim]=index;
}, 1);

Clazz.newMeth(C$, 'indexToPosition$J$net_imglib2_Dimensions$net_imglib2_Positionable', function (index, dimensions, position) {
var maxDim=dimensions.numDimensions$() - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions.dimension$I(d)|0);
position.setPosition$J$I(index - j * dimensions.dimension$I(d), d);
index=j;
}
position.setPosition$J$I(index, maxDim);
}, 1);

Clazz.newMeth(C$, 'indexToPosition$I$IA$FA', function (index, dimensions, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d];
index=j;
}
position[maxDim]=index;
}, 1);

Clazz.newMeth(C$, 'indexToPosition$J$JA$FA', function (index, dimensions, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d];
index=j;
}
position[maxDim]=index;
}, 1);

Clazz.newMeth(C$, 'indexToPosition$I$IA$DA', function (index, dimensions, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d];
index=j;
}
position[maxDim]=index;
}, 1);

Clazz.newMeth(C$, 'indexToPosition$J$JA$DA', function (index, dimensions, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d];
index=j;
}
position[maxDim]=index;
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$I$IA$IA$IA', function (index, dimensions, offsets, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d] + offsets[d];
index=j;
}
position[maxDim]=index + offsets[maxDim];
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$I$IA$JA$JA', function (index, dimensions, offsets, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d] + offsets[d];
index=j;
}
position[maxDim]=index + offsets[maxDim];
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$J$JA$JA$JA', function (index, dimensions, offsets, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d] + offsets[d];
index=j;
}
position[maxDim]=index + offsets[maxDim];
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$J$JA$JA$IA', function (index, dimensions, offsets, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=((index - j * dimensions[d] + offsets[d])|0);
index=j;
}
position[maxDim]=((index + offsets[maxDim])|0);
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$J$JA$JA$FA', function (index, dimensions, offsets, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d] + offsets[d];
index=j;
}
position[maxDim]=index + offsets[maxDim];
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$J$JA$JA$DA', function (index, dimensions, offsets, position) {
var maxDim=dimensions.length - 1;
for (var d=0; d < maxDim; ++d) {
var j=(index/dimensions[d]|0);
position[d]=index - j * dimensions[d] + offsets[d];
index=j;
}
position[maxDim]=index + offsets[maxDim];
}, 1);

Clazz.newMeth(C$, 'indexToPosition$I$IA$I', function (index, dimensions, dimension) {
var step=1;
for (var d=0; d < dimension; ++d) step*=dimensions[d];

return ((index/step|0)) % dimensions[dimension];
}, 1);

Clazz.newMeth(C$, 'indexToPosition$J$JA$I', function (index, dimensions, dimension) {
var step=1;
for (var d=0; d < dimension; ++d) step*=dimensions[d];

return ((index/step|0)) % dimensions[dimension];
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$I$IA$IA$I', function (index, dimensions, offsets, dimension) {
return C$.indexToPosition$I$IA$I(index, dimensions, dimension) + offsets[dimension];
}, 1);

Clazz.newMeth(C$, 'indexToPosition$I$IA$IA$I', function (index, dimensions, steps, dimension) {
return ((index/steps[dimension]|0)) % dimensions[dimension];
}, 1);

Clazz.newMeth(C$, 'indexToPosition$J$JA$JA$I', function (index, dimensions, steps, dimension) {
return ((index/steps[dimension]|0)) % dimensions[dimension];
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$I$IA$IA$IA$I', function (index, dimensions, steps, offset, dimension) {
return C$.indexToPosition$I$IA$IA$I(index, dimensions, steps, dimension) + offset[dimension];
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$I$IA$IA$JA$I', function (index, dimensions, steps, offset, dimension) {
return C$.indexToPosition$I$IA$IA$I(index, dimensions, steps, dimension) + offset[dimension];
}, 1);

Clazz.newMeth(C$, 'indexToPositionWithOffset$J$JA$JA$JA$I', function (index, dimensions, steps, offsets, dimension) {
return C$.indexToPosition$J$JA$JA$I(index, dimensions, steps, dimension) + offsets[dimension];
}, 1);

Clazz.newMeth(C$, 'positionToIndexForInterval$net_imglib2_Localizable$net_imglib2_Interval', function (position, interval) {
var maxDim=interval.numDimensions$() - 1;
var i=position.getLongPosition$I(maxDim) - interval.min$I(maxDim);
for (var d=maxDim - 1; d >= 0; --d) i=i * interval.dimension$I(d) + position.getLongPosition$I(d) - interval.min$I(d);

return i;
}, 1);

Clazz.newMeth(C$, 'indexToPositionForInterval$J$net_imglib2_Interval$net_imglib2_Positionable', function (index, interval, position) {
var maxDim=interval.numDimensions$() - 1;
for (var d=0; d < maxDim; ++d) {
var dim=interval.dimension$I(d);
var j=(index/dim|0);
position.setPosition$J$I(index - j * dim + interval.min$I(d), d);
index=j;
}
position.setPosition$J$I(index + interval.min$I(maxDim), maxDim);
}, 1);

Clazz.newMeth(C$, 'createAllocationSteps$JA$JA', function (dimensions, steps) {
steps[0]=1;
for (var d=1; d < dimensions.length; ++d) steps[d]=steps[d - 1] * dimensions[d - 1];

}, 1);

Clazz.newMeth(C$, 'createAllocationSteps$IA$IA', function (dimensions, steps) {
steps[0]=1;
for (var d=1; d < dimensions.length; ++d) steps[d]=steps[d - 1] * dimensions[d - 1];

}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
