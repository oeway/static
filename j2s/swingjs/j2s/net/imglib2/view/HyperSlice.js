(function(){var P$=Clazz.newPackage("net.imglib2.view"),p$1={},I$=[[0,'net.imglib2.FinalInterval','java.util.Arrays',['net.imglib2.view.HyperSlice','.HyperSliceRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HyperSlice", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.RandomAccessible');
C$.$classes$=[['HyperSliceRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numDimensions'],'O',['source','net.imglib2.RandomAccessible','axes','int[]','position','long[]']]]

Clazz.newMeth(C$, 'sourceInterval$net_imglib2_Interval', function (interval) {
Clazz.assert(C$, this, function(){return interval.numDimensions$() == this.axes.length}, function(){return "Interval dimensions do not match Hyperslice dimensions."});
var min=Clazz.array(Long.TYPE, [this.numDimensions]);
var max=Clazz.array(Long.TYPE, [this.numDimensions]);
for (var d=0; d < this.position.length; ++d) min[d]=max[d]=this.position[d];

for (var d=0; d < interval.numDimensions$(); ++d) {
min[this.axes[d]]=interval.min$I(d);
max[this.axes[d]]=interval.max$I(d);
}
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, p$1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$IA$JA', function (source, fixedAxes, position) {
;C$.$init$.apply(this);
this.source=source;
var sortedFixedAxes=fixedAxes.clone$();
$I$(2).sort$IA(sortedFixedAxes);
this.numDimensions=source.numDimensions$() - fixedAxes.length;
this.axes=Clazz.array(Integer.TYPE, [this.numDimensions]);
this.position=Clazz.array(Long.TYPE, [position.length]);
for (var d=0, da=0, db=0; d < source.numDimensions$(); ++d) {
if (da < sortedFixedAxes.length && sortedFixedAxes[da] == d ) {
++da;
this.position[d]=position[d];
} else this.axes[db++]=d;
}
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.axes.length;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return Clazz.new_($I$(3,1), [this, null]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.HyperSlice, "HyperSliceRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceAccess','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.sourceAccess=this.this$0.source.randomAccess$();
this.sourceAccess.setPosition$JA(this.this$0.position);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.$init$.apply(this);
this.sourceAccess=this.this$0.source.randomAccess$net_imglib2_Interval(p$1.sourceInterval$net_imglib2_Interval.apply(this.b$['net.imglib2.view.HyperSlice'], [interval]));
this.sourceAccess.setPosition$JA(this.this$0.position);
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
for (var d=0; d < this.this$0.numDimensions; ++d) position[d]=this.sourceAccess.getIntPosition$I(this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
for (var d=0; d < this.this$0.numDimensions; ++d) position[d]=this.sourceAccess.getLongPosition$I(this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.sourceAccess.getIntPosition$I(this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.sourceAccess.getLongPosition$I(this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
for (var d=0; d < this.this$0.numDimensions; ++d) position[d]=this.sourceAccess.getFloatPosition$I(this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'localize$DA', function (position) {
for (var d=0; d < this.this$0.numDimensions; ++d) position[d]=this.sourceAccess.getDoublePosition$I(this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.sourceAccess.getFloatPosition$I(this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.sourceAccess.getDoublePosition$I(this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.numDimensions;
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.sourceAccess.fwd$I(this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.sourceAccess.bck$I(this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.sourceAccess.move$I$I(distance, this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.sourceAccess.move$J$I(distance, this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.numDimensions; ++d) this.sourceAccess.move$J$I(localizable.getLongPosition$I(d), this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.this$0.numDimensions; ++d) this.sourceAccess.move$I$I(distance[d], this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.this$0.numDimensions; ++d) this.sourceAccess.move$J$I(distance[d], this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.numDimensions; ++d) this.sourceAccess.setPosition$J$I(localizable.getLongPosition$I(d), this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var d=0; d < this.this$0.numDimensions; ++d) this.sourceAccess.setPosition$I$I(position[d], this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
for (var d=0; d < this.this$0.numDimensions; ++d) this.sourceAccess.setPosition$J$I(position[d], this.this$0.axes[d]);

});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.sourceAccess.setPosition$I$I(position, this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.sourceAccess.setPosition$J$I(position, this.this$0.axes[d]);
});

Clazz.newMeth(C$, 'get$', function () {
return this.sourceAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$, [this, null]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
