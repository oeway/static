(function(){var P$=Clazz.newPackage("net.imglib2.roi.labeling"),p$1={},I$=[[0,'net.imglib2.RealPoint',['net.imglib2.roi.labeling.LabelRegion','.Origin'],'net.imglib2.roi.labeling.LabelRegionRandomAccess','net.imglib2.util.Intervals','net.imglib2.outofbounds.OutOfBoundsConstantValue','net.imglib2.type.logic.BoolType','net.imglib2.roi.labeling.LabelRegionCursor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelRegion", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractLocalizable', 'net.imglib2.roi.PositionableIterableRegion');
C$.$classes$=[['Origin',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['expectedGeneration'],'L',['size'],'O',['regions','net.imglib2.roi.labeling.LabelRegions','regionProperties','net.imglib2.roi.labeling.LabelRegions.LabelRegionProperties','label','<T>','itcodes','java.util.ArrayList','currentOffset','long[]','+currentMin','+currentMax','centerOfMass','net.imglib2.RealPoint','origin','net.imglib2.roi.labeling.LabelRegion.Origin']]]

Clazz.newMeth(C$, ['c$$net_imglib2_roi_labeling_LabelRegions$net_imglib2_roi_labeling_LabelRegions_LabelRegionProperties$TT'], function (regions, regionProperties, label) {
;C$.superclazz.c$$I.apply(this,[regions.numDimensions$()]);C$.$init$.apply(this);
this.regions=regions;
this.regionProperties=regionProperties;
this.label=label;
this.expectedGeneration=regionProperties.update$();
this.currentOffset=Clazz.array(Long.TYPE, [this.n]);
this.currentMin=Clazz.array(Long.TYPE, [this.n]);
this.currentMax=Clazz.array(Long.TYPE, [this.n]);
var bbmin=regionProperties.getBoundingBoxMin$();
var bbmax=regionProperties.getBoundingBoxMax$();
for (var d=0; d < this.n; ++d) {
this.currentMin[d]=this.currentOffset[d] + bbmin[d];
this.currentMax[d]=this.currentOffset[d] + bbmax[d];
}
this.size=regionProperties.getSize$();
this.itcodes=regionProperties.getItcodes$();
this.centerOfMass=$I$(1).wrap$DA(regionProperties.getCenterOfMass$());
this.origin=Clazz.new_($I$(2,1), [this, null]);
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
var r=Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_roi_labeling_LabelRegions$net_imglib2_roi_labeling_LabelRegions_LabelRegionProperties$TT,[this.regions, this.regionProperties, this.label]);
System.arraycopy$O$I$O$I$I(this.position, 0, r.position, 0, this.n);
System.arraycopy$O$I$O$I$I(this.currentOffset, 0, r.currentOffset, 0, this.n);
System.arraycopy$O$I$O$I$I(this.currentMin, 0, r.currentMin, 0, this.n);
System.arraycopy$O$I$O$I$I(this.currentMax, 0, r.currentMax, 0, this.n);
r.expectedGeneration=this.expectedGeneration;
return r;
});

Clazz.newMeth(C$, 'origin$', function () {
p$1.update.apply(this, []);
return this.origin;
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'update', function () {
var generation=this.regionProperties.update$();
if (generation != this.expectedGeneration) {
this.expectedGeneration=generation;
var bbmin=this.regionProperties.getBoundingBoxMin$();
var bbmax=this.regionProperties.getBoundingBoxMax$();
for (var d=0; d < this.n; ++d) {
this.currentMin[d]=this.currentOffset[d] + bbmin[d];
this.currentMax[d]=this.currentOffset[d] + bbmax[d];
}
this.size=this.regionProperties.getSize$();
}}, p$1);

Clazz.newMeth(C$, 'getCenterOfMass$', function () {
p$1.update.apply(this, []);
return this.centerOfMass;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
p$1.update.apply(this, []);
return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_roi_labeling_LabelRegion$JA,[this, this.currentOffset]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
p$1.update.apply(this, []);
if ($I$(4).contains$net_imglib2_Interval$net_imglib2_Interval(this, interval)) return this.randomAccess$();
 else return Clazz.new_(1,{T:"net.imglib2.type.logic.BoolType"},$I$(5,1).c$$TF$TT,[this, Clazz.new_($I$(6,1).c$$Z,[false])]);
});

Clazz.newMeth(C$, 'cursor$', function () {
p$1.update.apply(this, []);
return Clazz.new_($I$(7,1).c$$java_util_ArrayList$JA,[this.itcodes, this.currentOffset]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'size$', function () {
p$1.update.apply(this, []);
return this.size;
});

Clazz.newMeth(C$, 'firstElement$', function () {
return null;
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
++this.position[d];
++this.currentOffset[d];
++this.currentMin[d];
++this.currentMax[d];
});

Clazz.newMeth(C$, 'bck$I', function (d) {
--this.position[d];
--this.currentOffset[d];
--this.currentMin[d];
--this.currentMax[d];
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.position[d]+=distance;
this.currentOffset[d]+=distance;
this.currentMin[d]+=distance;
this.currentMax[d]+=distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.position[d]+=distance;
this.currentOffset[d]+=distance;
this.currentMin[d]+=distance;
this.currentMax[d]+=distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
var distance=localizable.getLongPosition$I(d);
this.position[d]+=distance;
this.currentOffset[d]+=distance;
this.currentMin[d]+=distance;
this.currentMax[d]+=distance;
}
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; ++d) {
this.position[d]+=distance[d];
this.currentOffset[d]+=distance[d];
this.currentMin[d]+=distance[d];
this.currentMax[d]+=distance[d];
}
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; ++d) {
this.position[d]+=distance[d];
this.currentOffset[d]+=distance[d];
this.currentMin[d]+=distance[d];
this.currentMax[d]+=distance[d];
}
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
var distance=localizable.getLongPosition$I(d) - this.position[d];
this.position[d]+=distance;
this.currentOffset[d]+=distance;
this.currentMin[d]+=distance;
this.currentMax[d]+=distance;
}
});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
for (var d=0; d < this.n; ++d) {
var distance=pos[d] - this.position[d];
this.position[d]+=distance;
this.currentOffset[d]+=distance;
this.currentMin[d]+=distance;
this.currentMax[d]+=distance;
}
});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
for (var d=0; d < this.n; ++d) {
var distance=pos[d] - this.position[d];
this.position[d]+=distance;
this.currentOffset[d]+=distance;
this.currentMin[d]+=distance;
this.currentMax[d]+=distance;
}
});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, d) {
var distance=pos - this.position[d];
this.position[d]+=distance;
this.currentOffset[d]+=distance;
this.currentMin[d]+=distance;
this.currentMax[d]+=distance;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
var distance=pos - this.position[d];
this.position[d]+=distance;
this.currentOffset[d]+=distance;
this.currentMin[d]+=distance;
this.currentMax[d]+=distance;
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
p$1.update.apply(this, []);
return this.currentMin[d];
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) min[d]=this.currentMin[d];

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) min.setPosition$J$I(this.currentMin[d], d);

});

Clazz.newMeth(C$, 'realMax$I', function (d) {
p$1.update.apply(this, []);
return this.currentMax[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) max[d]=this.currentMax[d];

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) max.setPosition$J$I(this.currentMax[d], d);

});

Clazz.newMeth(C$, 'min$I', function (d) {
p$1.update.apply(this, []);
return this.currentMin[d];
});

Clazz.newMeth(C$, 'min$JA', function (min) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) min[d]=this.currentMin[d];

});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) min.setPosition$J$I(this.currentMin[d], d);

});

Clazz.newMeth(C$, 'max$I', function (d) {
p$1.update.apply(this, []);
return this.currentMax[d];
});

Clazz.newMeth(C$, 'max$JA', function (max) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) max[d]=this.currentMax[d];

});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) max.setPosition$J$I(this.currentMax[d], d);

});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
p$1.update.apply(this, []);
for (var d=0; d < this.n; ++d) dimensions[d]=this.currentMax[d] - this.currentMin[d] + 1;

});

Clazz.newMeth(C$, 'dimension$I', function (d) {
p$1.update.apply(this, []);
return this.currentMax[d] - this.currentMin[d] + 1;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LabelRegion, "Origin", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['net.imglib2.Localizable', 'net.imglib2.Positionable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.n;
});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var d=0; d < this.this$0.n; ++d) pos[d]=this.this$0.position[d] - this.this$0.currentOffset[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var d=0; d < this.this$0.n; ++d) pos[d]=this.this$0.position[d] - this.this$0.currentOffset[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.this$0.position[d] - this.this$0.currentOffset[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.this$0.position[d] - this.this$0.currentOffset[d];
});

Clazz.newMeth(C$, 'localize$IA', function (pos) {
for (var d=0; d < this.this$0.n; ++d) pos[d]=((this.this$0.position[d] - this.this$0.currentOffset[d])|0);

});

Clazz.newMeth(C$, 'localize$JA', function (pos) {
for (var d=0; d < this.this$0.n; ++d) pos[d]=this.this$0.position[d] - this.this$0.currentOffset[d];

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return ((this.this$0.position[d] - this.this$0.currentOffset[d])|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.this$0.position[d] - this.this$0.currentOffset[d];
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.this$0.currentOffset[d]++;
this.this$0.currentMin[d]++;
this.this$0.currentMax[d]++;
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.this$0.currentOffset[d]--;
this.this$0.currentMin[d]--;
this.this$0.currentMax[d]--;
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.this$0.currentOffset[d]+=distance;
this.this$0.currentMin[d]+=distance;
this.this$0.currentMax[d]+=distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.n; ++d) this.move$J$I(localizable.getLongPosition$I(d), d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.this$0.n; ++d) this.move$I$I(distance[d], d);

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.this$0.n; ++d) this.move$J$I(distance[d], d);

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.n; ++d) this.setPosition$J$I(localizable.getLongPosition$I(d), d);

});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
for (var d=0; d < this.this$0.n; ++d) this.setPosition$I$I(pos[d], d);

});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
for (var d=0; d < this.this$0.n; ++d) this.setPosition$J$I(pos[d], d);

});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, d) {
this.setPosition$J$I(pos, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
var distance=this.this$0.position[d] - this.this$0.currentOffset[d] - pos ;
this.move$J$I(distance, d);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
