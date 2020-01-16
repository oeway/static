(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.type.logic.BitType',['net.imglib2.roi.AbstractRegionOfInterest','.AROIRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractRegionOfInterest", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.roi.RegionOfInterest');
C$.$classes$=[['AROIRandomAccess',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['nDimensions'],'O',['cached_real_min','double[]','+cached_real_max']]]

Clazz.newMeth(C$, 'c$$I', function (nDimensions) {
;C$.$init$.apply(this);
this.nDimensions=nDimensions;
}, 1);

Clazz.newMeth(C$, 'validateRealExtremaCache$', function () {
if (this.cached_real_min == null ) {
var cachedRealMin=Clazz.array(Double.TYPE, [this.nDimensions]);
var cachedRealMax=Clazz.array(Double.TYPE, [this.nDimensions]);
this.getRealExtrema$DA$DA(cachedRealMin, cachedRealMax);
this.cached_real_min=cachedRealMin;
this.cached_real_max=cachedRealMax;
}});

Clazz.newMeth(C$, 'invalidateCachedState$', function () {
this.cached_real_min=null;
this.cached_real_max=null;
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
this.validateRealExtremaCache$();
return this.cached_real_min[d];
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.validateRealExtremaCache$();
for (var i=0; i < min.length; i++) {
min[i]=this.cached_real_min[i];
}
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.validateRealExtremaCache$();
min.setPosition$DA(this.cached_real_min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
this.validateRealExtremaCache$();
return this.cached_real_max[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.validateRealExtremaCache$();
for (var i=0; i < max.length; i++) {
max[i]=this.cached_real_max[i];
}
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.validateRealExtremaCache$();
max.setPosition$DA(this.cached_real_max);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.nDimensions;
});

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return Clazz.new_($I$(2,1), [this, null]);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return this.realRandomAccess$();
});

Clazz.newMeth(C$, 'move$DA', function (displacement) {
for (var i=0; i < displacement.length; i++) this.move$D$I(displacement[i], i);

});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractRegionOfInterest, "AROIRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bit_type=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['bit_type','net.imglib2.type.logic.BitType','position','double[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_roi_AbstractRegionOfInterest_AROIRandomAccess', function (randomAccess) {
;C$.$init$.apply(this);
this.position=randomAccess.position.clone$();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.position=Clazz.array(Double.TYPE, [this.this$0.nDimensions]);
}, 1);

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var i=0; i < pos.length; i++) {
pos[i]=this.position[i];
}
});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var i=0; i < pos.length; i++) {
pos[i]=this.position[i];
}
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.nDimensions;
});

Clazz.newMeth(C$, 'move$F$I', function (distance, dim) {
this.position[dim] += distance;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$D$I', function (distance, dim) {
this.position[dim] += distance;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$I$I', function (distance, dim) {
this.position[dim] += distance;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$J$I', function (distance, dim) {
this.position[dim] += distance;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (localizable) {
for (var i=0; i < this.position.length; i++) {
this.position[i] += localizable.getDoublePosition$I(i);
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var i=0; i < this.position.length; i++) {
this.position[i] += localizable.getDoublePosition$I(i);
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$FA', function (pos) {
for (var i=0; i < pos.length; i++) {
this.position[i] += pos[i];
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$DA', function (pos) {
for (var i=0; i < pos.length; i++) {
this.position[i] += pos[i];
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$IA', function (pos) {
for (var i=0; i < pos.length; i++) {
this.position[i] += pos[i];
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'move$JA', function (pos) {
for (var i=0; i < pos.length; i++) {
this.position[i] += pos[i];
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (localizable) {
localizable.localize$DA(this.position);
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var i=0; i < this.position.length; i++) {
this.position[i]=localizable.getDoublePosition$I(i);
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$FA', function (position) {
for (var i=0; i < position.length; i++) {
this.position[i]=position[i];
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$DA', function (position) {
for (var i=0; i < position.length; i++) {
this.position[i]=position[i];
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var i=0; i < position.length; i++) {
this.position[i]=position[i];
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
for (var i=0; i < position.length; i++) {
this.position[i]=position[i];
}
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$F$I', function (position, dim) {
this.position[dim]=position;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$D$I', function (position, dim) {
this.position[dim]=position;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, dim) {
this.position[dim]=position;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, dim) {
this.position[dim]=position;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'updateCachedMembershipStatus$', function () {
this.bit_type.set$Z(this.b$['net.imglib2.roi.RegionOfInterest'].contains$DA.apply(this.b$['net.imglib2.roi.RegionOfInterest'], [this.position]));
});

Clazz.newMeth(C$, 'fwd$I', function (dim) {
this.position[dim] += 1;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'bck$I', function (dim) {
this.position[dim] -= 1;
this.updateCachedMembershipStatus$();
});

Clazz.newMeth(C$, 'get$', function () {
return this.bit_type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_roi_AbstractRegionOfInterest_AROIRandomAccess, [this, null, this]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
