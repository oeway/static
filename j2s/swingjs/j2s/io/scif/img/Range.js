(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Range", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['setIndex','java.util.Set']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.setIndex=Clazz.new_(1,{E:"Long"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (range) {
C$.c$.apply(this, []);
if (!range.matches$S("\\d*(-\\d*(:\\d*)?)?(,\\d*(-\\d*(:\\d)?)?)*")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid range pattern. Must match: \\d*(-\\d*(:\\d*)?)?(,\\d*(-\\d*(:\\d)?)?)*"]);
}var intervals=range.split$S(",");
for (var interval, $interval = 0, $$interval = intervals; $interval<$$interval.length&&((interval=($$interval[$interval])),1);$interval++) {
var rangeTokens=interval.split$S("-");
var start=Long.parseLong$S(rangeTokens[0]);
var end=start;
var step=1;
if (rangeTokens.length == 2) {
var rangeTail=rangeTokens[1].split$S(":");
end=Long.parseLong$S(rangeTail[0]);
if (rangeTail.length == 2) step=Long.parseLong$S(rangeTail[1]);
}for (var j=start; j <= end; j+=step) {
this.setIndex.add$TE(new Long(j));
this.add$TE(new Long(j));
}
}
}, 1);

Clazz.newMeth(C$, 'c$$Long', function (index) {
C$.c$.apply(this, []);
this.setIndex.add$TE(index);
this.add$TE(index);
}, 1);

Clazz.newMeth(C$, 'c$$Long$Long', function (start, end) {
C$.c$.apply(this, []);
for (var l=(start).valueOf(); l <= (end).valueOf() ; l++) {
this.setIndex.add$TE(new Long(l));
this.add$TE(new Long(l));
}
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (values) {
C$.c$.apply(this, []);
for (var l, $l = 0, $$l = values; $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.setIndex.add$TE(new Long(l));
this.add$TE(new Long(l));
}
}, 1);

Clazz.newMeth(C$, 'contains$O', function (l) {
return this.setIndex.contains$O(l);
});

Clazz.newMeth(C$, 'head$', function () {
return this.get$I(0);
});

Clazz.newMeth(C$, 'tail$', function () {
return this.get$I(this.size$() - 1);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
