(function(){var P$=Clazz.newPackage("net.imglib2.roi.labeling"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Arrays','net.imglib2.view.Views','java.util.HashMap','net.imglib2.roi.labeling.LabelRegion',['net.imglib2.roi.labeling.LabelRegions','.FragmentProperties'],['net.imglib2.roi.labeling.LabelRegions','.LabelRegionProperties']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelRegions", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractEuclideanSpace', 'Iterable');
C$.$classes$=[['FragmentProperties',24],['LabelRegionProperties',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['expectedGeneration'],'O',['labeling','net.imglib2.RandomAccessibleInterval','type','net.imglib2.roi.labeling.LabelingType','indexToFragmentProperties','java.util.ArrayList','labelToLabelRegionProperties','java.util.HashMap','+allLabelToLabelRegionProperties','+labelToLabelRegion']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (labeling) {
;C$.superclazz.c$$I.apply(this,[labeling.numDimensions$()]);C$.$init$.apply(this);
this.labeling=labeling;
this.type=$I$(3).iterable$net_imglib2_RandomAccessibleInterval(labeling).firstElement$();
this.indexToFragmentProperties=Clazz.new_(1,{E:"net.imglib2.roi.labeling.LabelRegions.FragmentProperties"},$I$(1,1));
this.labelToLabelRegionProperties=Clazz.new_(1,{K:"Object",V:"net.imglib2.roi.labeling.LabelRegions.LabelRegionProperties"},$I$(4,1));
this.allLabelToLabelRegionProperties=Clazz.new_(1,{K:"Object",V:"net.imglib2.roi.labeling.LabelRegions.LabelRegionProperties"},$I$(4,1));
this.labelToLabelRegion=Clazz.new_(1,{K:"Object",V:"net.imglib2.roi.labeling.LabelRegion"},$I$(4,1));
this.expectedGeneration=this.type.getGeneration$() - 1;
}, 1);

Clazz.newMeth(C$, ['getLabelRegion$TT'], function (label) {
p$1.update.apply(this, []);
var labelRegion=this.labelToLabelRegion.get$O(label);
if (labelRegion == null ) {
labelRegion=Clazz.new_(1,{T:"Object"},$I$(5,1).c$$net_imglib2_roi_labeling_LabelRegions$net_imglib2_roi_labeling_LabelRegions_LabelRegionProperties$TT,[this, this.labelToLabelRegionProperties.get$O(label), label]);
this.labelToLabelRegion.put$TK$TV(label, labelRegion);
}return labelRegion;
});

Clazz.newMeth(C$, 'getExistingLabels$', function () {
p$1.update.apply(this, []);
return this.labelToLabelRegionProperties.keySet$();
});

Clazz.newMeth(C$, 'iterator$', function () {
p$1.update.apply(this, []);
var labelIterator=this.labelToLabelRegionProperties.keySet$().iterator$();
return ((P$.LabelRegions$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LabelRegions$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.$finals$.labelIterator.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
var label=this.$finals$.labelIterator.next$();
var labelRegion=this.b$['net.imglib2.roi.labeling.LabelRegions'].labelToLabelRegion.get$O(label);
if (labelRegion == null ) {
labelRegion=Clazz.new_(1,{T:"Object"},$I$(5,1).c$$net_imglib2_roi_labeling_LabelRegions$net_imglib2_roi_labeling_LabelRegions_LabelRegionProperties$TT,[this.b$['net.imglib2.roi.labeling.LabelRegions'], this.b$['net.imglib2.roi.labeling.LabelRegions'].labelToLabelRegionProperties.get$O(label), label]);
this.b$['net.imglib2.roi.labeling.LabelRegions'].labelToLabelRegion.put$TK$TV(label, labelRegion);
}return labelRegion;
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.LabelRegions$1.$init$, [this, {labelIterator:labelIterator}]));
});

Clazz.newMeth(C$, 'update', function () {
if (this.type.getGeneration$() != this.expectedGeneration) {
{
var generation=this.type.getGeneration$();
if (generation != this.expectedGeneration) {
for (var props, $props = this.allLabelToLabelRegionProperties.values$().iterator$(); $props.hasNext$()&&((props=($props.next$())),1);) props.reset$();

var oldLabelToLabelRegion=Clazz.new_(1,{K:"Object",V:"net.imglib2.roi.labeling.LabelRegion"},$I$(4,1).c$$java_util_Map,[this.labelToLabelRegion]);
this.indexToFragmentProperties.clear$();
this.labelToLabelRegionProperties.clear$();
this.labelToLabelRegion.clear$();
var mapping=this.type.getMapping$();
var numFragments=mapping.numSets$();
for (var i=0; i < numFragments; ++i) this.indexToFragmentProperties.add$TE(Clazz.new_($I$(6,1).c$$I$net_imglib2_RandomAccessibleInterval,[i, this.labeling]));

var c=$I$(3).flatIterable$net_imglib2_RandomAccessibleInterval(this.labeling).localizingCursor$();
while (c.hasNext$()){
var index=c.next$().getIndex$().getInteger$();
if (index > 0) this.indexToFragmentProperties.get$I(index).add$net_imglib2_Localizable(c);
}
for (var frag, $frag = this.indexToFragmentProperties.iterator$(); $frag.hasNext$()&&((frag=($frag.next$())),1);) frag.finish$();

for (var frag, $frag = this.indexToFragmentProperties.iterator$(); $frag.hasNext$()&&((frag=($frag.next$())),1);) {
if (frag.getSize$() <= 0) continue;
var fragLabels=mapping.labelsAtIndex$I(frag.getIndex$());
for (var label, $label = fragLabels.iterator$(); $label.hasNext$()&&((label=($label.next$())),1);) {
var props=this.labelToLabelRegionProperties.get$O(label);
if (props == null ) {
props=this.allLabelToLabelRegionProperties.get$O(label);
if (props == null ) {
props=Clazz.new_($I$(7,1).c$$net_imglib2_roi_labeling_LabelRegions,[this]);
this.allLabelToLabelRegionProperties.put$TK$TV(label, props);
}this.labelToLabelRegionProperties.put$TK$TV(label, props);
}props.add$net_imglib2_roi_labeling_LabelRegions_FragmentProperties(frag);
}
}
for (var entry, $entry = this.labelToLabelRegionProperties.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var label=entry.getKey$();
var props=entry.getValue$();
props.finish$();
var labelRegion=oldLabelToLabelRegion.get$O(label);
if (labelRegion != null ) this.labelToLabelRegion.put$TK$TV(label, labelRegion);
}
oldLabelToLabelRegion.clear$();
this.expectedGeneration=generation;
p$1.update.apply(this, []);
}}}return this.expectedGeneration;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LabelRegions, "FragmentProperties", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.roi.util.iterationcode.IterationCodeBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index'],'O',['sumPositions','long[]']]]

Clazz.newMeth(C$, 'c$$I$net_imglib2_RandomAccessibleInterval', function (index, labeling) {
;C$.superclazz.c$$I$J.apply(this,[labeling.numDimensions$(), labeling.min$I(0)]);C$.$init$.apply(this);
this.index=index;
this.sumPositions=Clazz.array(Long.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$, 'getSumPositions$', function () {
return this.sumPositions;
});

Clazz.newMeth(C$, 'add$net_imglib2_Localizable', function (pos) {
C$.superclazz.prototype.add$net_imglib2_Localizable.apply(this, [pos]);
for (var d=0; d < this.n; ++d) this.sumPositions[d]+=pos.getLongPosition$I(d);

});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LabelRegions, "LabelRegionProperties", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.AbstractEuclideanSpace');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['size'],'O',['sumPositions','long[]','centerOfMass','double[]','bbmin','long[]','+bbmax','itcodes','java.util.ArrayList','labelRegions','net.imglib2.roi.labeling.LabelRegions']]]

Clazz.newMeth(C$, 'c$$net_imglib2_roi_labeling_LabelRegions', function (labelRegions) {
;C$.superclazz.c$$I.apply(this,[labelRegions.numDimensions$()]);C$.$init$.apply(this);
this.labelRegions=labelRegions;
this.sumPositions=Clazz.array(Long.TYPE, [this.n]);
this.centerOfMass=Clazz.array(Double.TYPE, [this.n]);
this.bbmin=Clazz.array(Long.TYPE, [this.n]);
this.bbmax=Clazz.array(Long.TYPE, [this.n]);
this.itcodes=Clazz.new_(1,{E:"gnu.trove.list.array.TIntArrayList"},$I$(1,1));
this.reset$();
}, 1);

Clazz.newMeth(C$, 'update$', function () {
return p$1.update.apply(this.labelRegions, []);
});

Clazz.newMeth(C$, 'reset$', function () {
this.size=0;
$I$(2).fill$JA$J(this.sumPositions, 0);
$I$(2).fill$DA$D(this.centerOfMass, 0);
$I$(2).fill$JA$J(this.bbmin, 9223372036854775807);
$I$(2).fill$JA$J(this.bbmax, -9223372036854775808);
this.itcodes.clear$();
});

Clazz.newMeth(C$, 'add$net_imglib2_roi_labeling_LabelRegions_FragmentProperties', function (frag) {
this.size+=frag.getSize$();
var fragSumPositions=frag.getSumPositions$();
for (var d=0; d < this.n; ++d) this.sumPositions[d]+=fragSumPositions[d];

var fragBBMin=frag.getBoundingBoxMin$();
var fragBBMax=frag.getBoundingBoxMax$();
for (var d=0; d < this.n; d++) {
if (fragBBMin[d] < this.bbmin[d]) this.bbmin[d]=fragBBMin[d];
if (fragBBMax[d] > this.bbmax[d]) this.bbmax[d]=fragBBMax[d];
}
this.itcodes.add$TE(frag.getItcode$());
});

Clazz.newMeth(C$, 'finish$', function () {
if (this.size != 0) for (var d=0; d < this.n; d++) this.centerOfMass[d]=this.sumPositions[d] / this.size;

});

Clazz.newMeth(C$, 'getSize$', function () {
return this.size;
});

Clazz.newMeth(C$, 'getSumPositions$', function () {
return this.sumPositions;
});

Clazz.newMeth(C$, 'getCenterOfMass$', function () {
return this.centerOfMass;
});

Clazz.newMeth(C$, 'getBoundingBoxMin$', function () {
return this.bbmin;
});

Clazz.newMeth(C$, 'getBoundingBoxMax$', function () {
return this.bbmax;
});

Clazz.newMeth(C$, 'getItcodes$', function () {
return this.itcodes;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
