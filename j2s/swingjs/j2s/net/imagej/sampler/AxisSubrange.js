(function(){var P$=Clazz.newPackage("net.imagej.sampler"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Collections','java.util.regex.Pattern',['net.imagej.sampler.AxisSubrange','.Range']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AxisSubrange", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Range',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['err'],'O',['indices','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.err=null;
this.indices=Clazz.new_(1,{E:"Long"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getError$', function () {
return this.err;
});

Clazz.newMeth(C$, 'getIndices$', function () {
return $I$(2).unmodifiableList$java_util_List(this.indices);
});

Clazz.newMeth(C$, 'c$$J', function (pos) {
C$.c$.apply(this, []);
this.indices.add$TE(new Long(pos));
}, 1);

Clazz.newMeth(C$, 'c$$J$J', function (pos1, pos2) {
C$.c$.apply(this, []);
var numElements=Math.max(pos1, pos2) - Math.min(pos1, pos2) + 1;
if (numElements > 2147483647) {
this.err="AxisSubrange: the number of axis elements cannot exceed 2147483647";
return;
}var by;
if (pos1 <= pos2) by=1;
 else by=-1;
for (var l=pos1; (by > 0) ? l <= pos2 : l >= pos2; l+=by) {
this.indices.add$TE(new Long(l));
}
}, 1);

Clazz.newMeth(C$, 'c$$J$J$J', function (pos1, pos2, by) {
C$.c$.apply(this, []);
if (by == 0) {
this.err="AxisSubrange: increment by must not be 0";
return;
}var numElements=((Math.max(pos1, pos2) - Math.min(pos1, pos2) + 1)/Math.abs(by)|0);
if (numElements > 2147483647) {
this.err="AxisSubrange: the number of axis elements cannot exceed 2147483647";
return;
}for (var l=pos1; (by > 0) ? l <= pos2 : l >= pos2; l+=by) {
this.indices.add$TE(new Long(l));
}
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType$S$Z', function (display, axis, definition, originOne) {
C$.c$.apply(this, []);
var axisIndex=display.dimensionIndex$net_imagej_axis_AxisType(axis);
var min;
var max;
if (originOne) {
min=1;
max=display.dimension$I(axisIndex);
} else {
min=0;
max=display.dimension$I(axisIndex) - 1;
}p$1.parseAxisDefinition$J$J$S.apply(this, [min, max, definition]);
}, 1);

Clazz.newMeth(C$, 'parseAxisDefinition$J$J$S', function (min, max, description) {
var terms=description.split$S(",");
if (terms.length == 0) {
this.err="AxisSubrange: description string is empty";
return;
}for (var i=0; i < terms.length; i++) {
terms[i]=terms[i].trim$();
}
for (var term, $term = 0, $$term = terms; $term<$$term.length&&((term=($$term[$term])),1);$term++) {
var num=p$1.number$S.apply(this, [term]);
var numDashNum=p$1.numberDashNumber$S.apply(this, [term]);
var numDashNumDashNum=p$1.numberDashNumberDashNumber$S.apply(this, [term]);
var subrange=null;
if (num != null ) {
if (((num).valueOf() < min ) || ((num).valueOf() > max ) ) {
this.err="AxisSubrange: dimension out of bounds (" + min + "," + max + ") : " + num + " in " + description ;
} else {
subrange=Clazz.new_(C$.c$$J,[(num).valueOf() - min]);
}} else if (numDashNum != null ) {
var start=numDashNum.start;
var end=numDashNum.end;
if (end < start) {
var tmp=end;
end=start;
start=tmp;
}if ((start < min) || (start > max) ) {
this.err="AxisSubrange: dimension out of bounds (" + min + "," + max + ") : " + start + " in " + description ;
} else if ((end < min) || (end > max) ) {
this.err="AxisSubrange: dimension out of bounds (" + min + "," + max + ") : " + end + " in " + description ;
} else {
subrange=Clazz.new_(C$.c$$J$J,[start - min, end - min]);
}} else if (numDashNumDashNum != null ) {
var start=numDashNumDashNum.start;
var end=numDashNumDashNum.end;
var by=numDashNumDashNum.by;
if ((start < min) || (start > max) ) {
this.err="AxisSubrange: dimension out of bounds (" + min + "," + max + ") : " + start + " in " + description ;
} else if ((end < min) || (end > max) ) {
this.err="AxisSubrange: dimension out of bounds (" + min + "," + max + ") : " + end + " in " + description ;
} else if (by == 0) {
this.err="AxisSubrange: step by value cannot be 0 in " + description;
} else if ((by < 0 && start < end ) || (by > 0 && end < start ) ) {
this.err="AxisSubrange: empty interval specified in " + description;
} else {
subrange=Clazz.new_(C$.c$$J$J$J,[start - min, end - min, by]);
}} else {
this.err="AxisSubrange: could not parse definition: " + description;
}if (this.err != null ) return;
for (var l, $l = subrange.getIndices$().iterator$(); $l.hasNext$()&&((l=($l.next$()).objectValue$()),1);) {
if (this.indices.contains$O(new Long(l))) continue;
this.indices.add$TE(new Long(l));
}
}
$I$(2).sort$java_util_List(this.indices);
}, p$1);

Clazz.newMeth(C$, 'number$S', function (term) {
var matcher=$I$(3).compile$S("\\d+").matcher$CharSequence(term);
if (!matcher.matches$()) return null;
return new Long(Long.parseLong$S(term));
}, p$1);

Clazz.newMeth(C$, 'numberDashNumber$S', function (term) {
var matcher=$I$(3).compile$S("\\d+-\\d+").matcher$CharSequence(term);
if (!matcher.matches$()) return null;
var values=term.split$S("-");
var start=Long.parseLong$S(values[0]);
var end=Long.parseLong$S(values[1]);
return Clazz.new_($I$(4,1).c$$J$J$J, [this, null, start, end, 1]);
}, p$1);

Clazz.newMeth(C$, 'numberDashNumberDashNumber$S', function (term) {
var matcher=$I$(3).compile$S("\\d+-\\d+-\\d+").matcher$CharSequence(term);
if (!matcher.matches$()) return null;
var values=term.split$S("-");
var start=Long.parseLong$S(values[0]);
var end=Long.parseLong$S(values[1]);
var by=Long.parseLong$S(values[2]);
return Clazz.new_($I$(4,1).c$$J$J$J, [this, null, start, end, by]);
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AxisSubrange, "Range", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['start','end','by']]]

Clazz.newMeth(C$, 'c$$J$J$J', function (start, end, by) {
;C$.$init$.apply(this);
this.start=start;
this.end=end;
this.by=by;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
