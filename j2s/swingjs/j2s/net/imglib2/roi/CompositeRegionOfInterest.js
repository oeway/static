(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','ThreadLocal',['net.imglib2.roi.CompositeRegionOfInterest','.Operation'],'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CompositeRegionOfInterest", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.roi.AbstractRegionOfInterest');
C$.$classes$=[['Operation',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rois=Clazz.new_(1,{E:"net.imglib2.roi.RegionOfInterest"},$I$(1,1));
this.operations=Clazz.new_(1,{K:"net.imglib2.roi.RegionOfInterest",V:"net.imglib2.roi.CompositeRegionOfInterest.Operation"},$I$(2,1));
this.randomAccess=Clazz.new_(1,{T:"java.util.Map"},$I$(3,1));
}, 1);

C$.$fields$=[['O',['rois','java.util.ArrayList','operations','java.util.Map','randomAccess','ThreadLocal']]]

Clazz.newMeth(C$, 'c$$I', function (nDimensions) {
;C$.superclazz.c$$I.apply(this,[nDimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_RegionOfInterest', function (roi) {
;C$.superclazz.c$$I.apply(this,[roi.numDimensions$()]);C$.$init$.apply(this);
this.rois.add$TE(roi);
this.operations.put$TK$TV(roi, $I$(4).OR);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (rois) {
;C$.superclazz.c$$I.apply(this,[rois.size$() == 0 ? 0 : rois.iterator$().next$().numDimensions$()]);C$.$init$.apply(this);
for (var roi, $roi = rois.iterator$(); $roi.hasNext$()&&((roi=($roi.next$())),1);) {
this.rois.add$TE(roi);
this.operations.put$TK$TV(roi, $I$(4).OR);
}
}, 1);

Clazz.newMeth(C$, 'or$net_imglib2_roi_RegionOfInterest', function (roi) {
this.rois.add$TE(roi);
this.operations.put$TK$TV(roi, $I$(4).OR);
});

Clazz.newMeth(C$, 'remove$net_imglib2_roi_RegionOfInterest', function (roi) {
this.rois.remove$O(roi);
this.operations.remove$O(roi);
});

Clazz.newMeth(C$, 'and$net_imglib2_roi_RegionOfInterest', function (roi) {
this.rois.add$TE(roi);
this.operations.put$TK$TV(roi, $I$(4).AND);
});

Clazz.newMeth(C$, 'xor$net_imglib2_roi_RegionOfInterest', function (roi) {
this.rois.add$TE(roi);
this.operations.put$TK$TV(roi, $I$(4).XOR);
});

Clazz.newMeth(C$, 'not$net_imglib2_roi_RegionOfInterest', function (roi) {
this.rois.add$TE(roi);
this.operations.put$TK$TV(roi, $I$(4).NOT);
});

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
for (var roi, $roi = this.rois.iterator$(); $roi.hasNext$()&&((roi=($roi.next$())),1);) roi.move$D$I(displacement, d);

});

Clazz.newMeth(C$, 'contains$DA', function (position) {
var result=false;
for (var roi, $roi = this.rois.iterator$(); $roi.hasNext$()&&((roi=($roi.next$())),1);) {
var operation=this.operations.get$O(roi);
switch (operation) {
case $I$(4).AND:
if (result == true ) {
result=p$1.isMember$net_imglib2_roi_RegionOfInterest$DA.apply(this, [roi, position]);
}break;
case $I$(4).OR:
if (result == false ) {
result=p$1.isMember$net_imglib2_roi_RegionOfInterest$DA.apply(this, [roi, position]);
}break;
case $I$(4).NOT:
if (result == true ) {
result=!p$1.isMember$net_imglib2_roi_RegionOfInterest$DA.apply(this, [roi, position]);
}break;
case $I$(4).XOR:
result=(!!(result ^ p$1.isMember$net_imglib2_roi_RegionOfInterest$DA.apply(this, [roi, position])));
break;
}
}
return result;
});

Clazz.newMeth(C$, 'isMember$net_imglib2_roi_RegionOfInterest$DA', function (roi, position) {
if (this.randomAccess.get$() == null ) {
this.randomAccess.set$TT(Clazz.new_(1,{K:"net.imglib2.roi.RegionOfInterest",V:"net.imglib2.RealRandomAccess"},$I$(2,1)));
}if (!this.randomAccess.get$().containsKey$O(roi)) {
this.randomAccess.get$().put$TK$TV(roi, roi.realRandomAccess$());
}var ra=this.randomAccess.get$().get$O(roi);
ra.setPosition$DA(position);
return ra.get$().get$();
}, p$1);

Clazz.newMeth(C$, 'getRealExtrema$DA$DA', function (minima, maxima) {
$I$(5).fill$DA$D(minima, 1.7976931348623157E308);
$I$(5).fill$DA$D(maxima, -1.7976931348623157E308);
for (var roi, $roi = this.rois.iterator$(); $roi.hasNext$()&&((roi=($roi.next$())),1);) {
for (var i=0; i < this.numDimensions$(); i++) {
minima[i]=Math.min(minima[i], roi.realMin$I(i));
maxima[i]=Math.max(maxima[i], roi.realMax$I(i));
}
}
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.CompositeRegionOfInterest, "Operation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "OR", 0, []);
Clazz.newEnumConst($vals, C$.c$, "AND", 1, []);
Clazz.newEnumConst($vals, C$.c$, "XOR", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NOT", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
