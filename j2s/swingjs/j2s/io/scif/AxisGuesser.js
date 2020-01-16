(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'net.imagej.axis.Axes','net.imagej.axis.AxisType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AxisGuesser");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.Z=Clazz.array(String, -1, ["fp", "sec", "z", "zs", "focal", "focalplane"]);
C$.T=Clazz.array(String, -1, ["t", "tl", "tp", "time"]);
C$.C=Clazz.array(String, -1, ["c", "ch", "w", "wavelength"]);
C$.S=Clazz.array(String, -1, ["s", "series", "sp"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['certain'],'O',['fp','io.scif.FilePattern','dimOrder','net.imagej.axis.AxisType[]','+newOrder','axisTypes','int[]']]
,['O',['Z','String[]','+T','+C','+S']]]

Clazz.newMeth(C$, 'c$$io_scif_FilePattern$net_imagej_axis_AxisTypeA$J$J$J$Z', function (fp, dimOrder, sizeZ, sizeT, sizeC, isCertain) {
;C$.$init$.apply(this);
this.fp=fp;
this.dimOrder=dimOrder;
this.newOrder=dimOrder;
var prefixes=fp.getPrefixes$();
var suffix=fp.getSuffix$();
var elements=fp.getElements$();
this.axisTypes=Clazz.array(Integer.TYPE, [elements.length]);
var foundZ=false;
var foundT=false;
var foundC=false;
for (var i=0; i < this.axisTypes.length; i++) {
var p=prefixes[i].toLowerCase$();
var ch=p.toCharArray$();
var l=ch.length - 1;
while (l >= 0 && (ch[l] >= "0" && ch[l] <= "9"  || ch[l] == " "  || ch[l] == "-"  || ch[l] == "_"  || ch[l] == "." ) ){
l--;
}
var f=l;
while (f >= 0 && ch[f] >= "a"  && ch[f] <= "z" )f--;

p=p.substring$I$I(f + 1, l + 1);
for (var zPre, $zPre = 0, $$zPre = C$.Z; $zPre<$$zPre.length&&((zPre=($$zPre[$zPre])),1);$zPre++) {
if (p.equals$O(zPre)) {
this.axisTypes[i]=1;
foundZ=true;
break;
}}
if (this.axisTypes[i] != 0) continue;
for (var tPre, $tPre = 0, $$tPre = C$.T; $tPre<$$tPre.length&&((tPre=($$tPre[$tPre])),1);$tPre++) {
if (p.equals$O(tPre)) {
this.axisTypes[i]=2;
foundT=true;
break;
}}
if (this.axisTypes[i] != 0) continue;
for (var cPre, $cPre = 0, $$cPre = C$.C; $cPre<$$cPre.length&&((cPre=($$cPre[$cPre])),1);$cPre++) {
if (p.equals$O(cPre)) {
this.axisTypes[i]=3;
foundC=true;
break;
}}
if (this.axisTypes[i] != 0) continue;
for (var sPre, $sPre = 0, $$sPre = C$.S; $sPre<$$sPre.length&&((sPre=($$sPre[$sPre])),1);$sPre++) {
if (p.equals$O(sPre)) {
this.axisTypes[i]=4;
break;
}}
if (this.axisTypes[i] != 0) continue;
if (suffix.equalsIgnoreCase$S(".pic") && i == this.axisTypes.length - 1  && ((elements[i].length == 2 && (elements[i][0].equals$O("1") || elements[i][0].equals$O("2") )  && (elements[i][1].equals$O("2") || elements[i][1].equals$O("3") ) ) || (elements[i].length == 3 && elements[i][0].equals$O("1")  && elements[i][1].equals$O("2")  && elements[i][2].equals$O("3") ) ) ) {
this.axisTypes[i]=3;
continue;
} else if (elements[i].length == 2 || elements[i].length == 3 ) {
var first=elements[i][0].toLowerCase$().charAt$I(0);
var second=elements[i][1].toLowerCase$().charAt$I(0);
var third=elements[i].length == 2 ? "b" : elements[i][2].toLowerCase$().charAt$I(0);
if ((first == "r" || second == "r"  || third == "r" ) && (first == "g" || second == "g"  || third == "g" ) && (first == "b" || second == "b"  || third == "b" )  ) {
this.axisTypes[i]=3;
continue;
}}}
if (!isCertain) {
if (foundZ && !foundT && sizeZ > 1   && sizeT == 1  || foundT && !foundZ && sizeT > 1   && sizeZ == 1  ) {
var indexZ=p$1.indexOf$net_imagej_axis_AxisTypeA$net_imagej_axis_AxisType.apply(this, [this.newOrder, $I$(1).Z]);
var indexT=p$1.indexOf$net_imagej_axis_AxisTypeA$net_imagej_axis_AxisType.apply(this, [this.newOrder, $I$(1).TIME]);
var sz=sizeT;
this.newOrder[indexZ]=$I$(1).TIME;
this.newOrder[indexT]=$I$(1).Z;
sizeT=sizeZ;
sizeZ=sz;
}}var canBeZ=!foundZ && sizeZ == 1 ;
var canBeT=!foundT && sizeT == 1 ;
var canBeC=!foundC && sizeC == 1 ;
this.certain=isCertain;
for (var i=0; i < this.axisTypes.length; i++) {
if (this.axisTypes[i] != 0) continue;
this.certain=false;
if (canBeZ) {
this.axisTypes[i]=1;
canBeZ=false;
} else if (canBeT) {
this.axisTypes[i]=2;
canBeT=false;
} else if (canBeC) {
this.axisTypes[i]=3;
canBeC=false;
} else {
var lastAxis=this.newOrder[this.newOrder.length - 1];
if (lastAxis.equals$O($I$(1).CHANNEL)) {
this.axisTypes[i]=3;
} else if (lastAxis.equals$O($I$(1).Z)) {
this.axisTypes[i]=1;
} else this.axisTypes[i]=2;
}}
}, 1);

Clazz.newMeth(C$, 'getFilePattern$', function () {
return this.fp;
});

Clazz.newMeth(C$, 'getOriginalOrder$', function () {
return this.dimOrder;
});

Clazz.newMeth(C$, 'getAdjustedOrder$', function () {
return this.newOrder;
});

Clazz.newMeth(C$, 'isCertain$', function () {
return this.certain;
});

Clazz.newMeth(C$, 'getAxisTypes$', function () {
var out=Clazz.array($I$(2), [this.axisTypes.length]);
for (var i=0; i < out.length; i++) {
var t=this.axisTypes[i];
if (t == 3) {
out[i]=$I$(1).CHANNEL;
} else if (t == 2) {
out[i]=$I$(1).TIME;
} else if (t == 1) {
out[i]=$I$(1).Z;
} else if (t == 0) {
out[i]=$I$(1).unknown$();
} else if (t == 4) {
out[i]=$I$(1).get$S("Series");
}}
return out;
});

Clazz.newMeth(C$, 'setAxisTypes$IA', function (axes) {
this.axisTypes=axes;
});

Clazz.newMeth(C$, 'getAxisCountZ$', function () {
return this.getAxisCount$I(1);
});

Clazz.newMeth(C$, 'getAxisCountT$', function () {
return this.getAxisCount$I(2);
});

Clazz.newMeth(C$, 'getAxisCountC$', function () {
return this.getAxisCount$I(3);
});

Clazz.newMeth(C$, 'getAxisCountS$', function () {
return this.getAxisCount$I(4);
});

Clazz.newMeth(C$, 'getAxisCount$I', function (axisType) {
var num=0;
for (var type, $type = 0, $$type = this.axisTypes; $type<$$type.length&&((type=($$type[$type])),1);$type++) {
if (type == axisType) num++;
}
return num;
});

Clazz.newMeth(C$, 'getAxisType$S', function (label) {
var lowerLabel=label.toLowerCase$();
for (var p, $p = 0, $$p = C$.Z; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (p.equals$O(lowerLabel) || lowerLabel.endsWith$S(p) ) return 1;
}
for (var p, $p = 0, $$p = C$.C; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (p.equals$O(lowerLabel) || lowerLabel.endsWith$S(p) ) return 3;
}
for (var p, $p = 0, $$p = C$.T; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (p.equals$O(lowerLabel) || lowerLabel.endsWith$S(p) ) return 2;
}
for (var p, $p = 0, $$p = C$.S; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (p.equals$O(lowerLabel) || lowerLabel.endsWith$S(p) ) return 4;
}
return 0;
}, 1);

Clazz.newMeth(C$, 'indexOf$net_imagej_axis_AxisTypeA$net_imagej_axis_AxisType', function (axes, type) {
var index=-1;
for (var i=0; i < axes.length && index == -1 ; i++) {
if (axes[i].equals$O(type)) index=i;
}
return index;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
