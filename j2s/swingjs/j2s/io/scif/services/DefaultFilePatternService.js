(function(){var P$=Clazz.newPackage("io.scif.services"),p$1={},I$=[[0,'org.scijava.io.location.FileLocation','StringBuilder','io.scif.AxisGuesser','org.scijava.util.ArrayUtils','io.scif.NumberFilter','java.util.Arrays','java.io.File','java.util.regex.Pattern','java.util.ArrayList','io.scif.FilePattern']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultFilePatternService", null, 'org.scijava.service.AbstractService', 'io.scif.services.FilePatternService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'findPattern$S', function (path) {
return this.findPattern$org_scijava_io_location_BrowsableLocation(Clazz.new_($I$(1,1).c$$S,[path]));
});

Clazz.newMeth(C$, 'findPattern$org_scijava_io_location_BrowsableLocation', function (file) {
return this.findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation(file, file.parent$());
});

Clazz.newMeth(C$, 'findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation', function (name, dir) {
var f=dir.children$();
if (f.isEmpty$()) return null;
return this.findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection(name, dir, f);
});

Clazz.newMeth(C$, 'findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection', function (name, dir, f) {
return this.findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection$IA(name, dir, f, null);
});

Clazz.newMeth(C$, 'findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection$IA', function (file, dir, nameList, excludeAxes) {
if (excludeAxes == null ) excludeAxes=Clazz.array(Integer.TYPE, [0]);
var name=file.getName$();
var len=name.length$();
var bound=((len + 1)/2|0);
var indexList=Clazz.array(Integer.TYPE, [bound]);
var endList=Clazz.array(Integer.TYPE, [bound]);
var q=0;
var num=false;
var ndx=-1;
var e=0;
for (var i=0; i < len; i++) {
var c=name.charAt$I(i);
if (c >= "0" && c <= "9" ) {
if (num) e++;
 else {
num=true;
ndx=i;
e=ndx + 1;
}} else if (num) {
num=false;
indexList[q]=ndx;
endList[q]=e;
q++;
}}
if (num) {
indexList[q]=ndx;
endList[q]=e;
q++;
}var sb=Clazz.new_($I$(2,1).c$$S,[""]);
for (var i=0; i < q; i++) {
var last=i > 0 ? endList[i - 1] : 0;
var prefix=name.substring$I$I(last, indexList[i]);
var axisType=$I$(3).getAxisType$S(prefix);
if ($I$(4).contains$IA$I(excludeAxes, axisType)) {
sb.append$S(name.substring$I$I(last, endList[i]));
continue;
}sb.append$S(prefix);
var pre=name.substring$I$I(0, indexList[i]);
var post=name.substring$I(endList[i]);
var filter=Clazz.new_($I$(5,1).c$$S$S,[pre, post]);
var list=p$1.matchFiles$java_util_Collection$io_scif_NumberFilter.apply(this, [nameList, filter]);
if (list == null  || list.isEmpty$() ) return null;
if (list.size$() == 1) {
sb.append$S(name.substring$I$I(indexList[i], endList[i]));
continue;
}var fix=true;
for (var s, $s = list.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
if (s.getName$().length$() != len) {
fix=false;
break;
}}
if (fix) {
var width=endList[i] - indexList[i];
var same=Clazz.array(Boolean.TYPE, [width]);
for (var j=0; j < width; j++) {
same[j]=true;
var jx=indexList[i] + j;
var c=name.charAt$I(jx);
for (var s, $s = list.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
if (s.getName$().charAt$I(jx) != c) {
same[j]=false;
break;
}}
}
var j=0;
while (j < width){
var jx=indexList[i] + j;
if (same[j]) {
sb.append$C(name.charAt$I(jx));
j++;
} else {
while (j < width && !same[j] )j++;

var p=p$1.findPattern$S$java_util_Collection$I$I$S.apply(this, [name, nameList, jx, indexList[i] + j, ""]);
var c=indexList[i] > 0 ? name.charAt$I(indexList[i] - 1) : ".";
if (p == null  && c != "S"  && c != "s"  && c != "E"  && c != "e" ) {
return null;
} else if (p == null ) {
sb.append$C(name.charAt$I(endList[i] - 1));
} else sb.append$S(p);
}}
} else {
var numbers=Clazz.array(Integer.TYPE, [list.size$()]);
for (var j=0; j < list.size$(); j++) {
numbers[j]=(filter.getNumber$S(list.get$I(j).getName$())).valueOf();
}
$I$(6).sort$IA(numbers);
var bounds=p$1.getBounds$IA$Z.apply(this, [numbers, false]);
if (bounds == null ) return null;
sb.append$S(bounds);
}}
sb.append$S(q > 0 ? name.substring$I(endList[q - 1]) : name);
for (var i=0; i < sb.length$(); i++) {
if (sb.charAt$I(i) == "\\") {
sb.insert$I$C(i, "\\");
i++;
}}
return sb.toString();
});

Clazz.newMeth(C$, 'findPattern$SA', function (names) {
var dir=names[0].substring$I$I(0, names[0].lastIndexOf$S($I$(7).separator) + 1);
var pattern=Clazz.new_($I$(2,1));
pattern.append$S($I$(8).quote$S(dir));
for (var i=0; i < names.length; i++) {
pattern.append$S("(?:");
var name=names[i].substring$I(names[i].lastIndexOf$S($I$(7).separator) + 1);
pattern.append$S($I$(8).quote$S(name));
pattern.append$S(")");
if (i < names.length - 1) {
pattern.append$S("|");
}}
return pattern.toString();
});

Clazz.newMeth(C$, 'findImagePatterns$org_scijava_io_location_BrowsableLocation', function (base) {
var file=base;
var parent=file.parent$();
var list=parent.children$();
return this.findImagePatterns$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection(base, parent, list);
});

Clazz.newMeth(C$, 'findImagePatterns$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection', function (base, dir, nameList) {
var name=base.getName$();
var dot=name.lastIndexOf$I(".");
var baseSuffix;
if (dot < 0) baseSuffix="";
 else baseSuffix=name.substring$I(dot + 1);
var patterns=Clazz.new_(1,{E:"String"},$I$(9,1));
var exclude=Clazz.array(Integer.TYPE, -1, [4]);
for (var loc, $loc = nameList.iterator$(); $loc.hasNext$()&&((loc=($loc.next$())),1);) {
var pattern=this.findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection$IA(loc, dir, nameList, exclude);
if (pattern == null ) continue;
var start=pattern.lastIndexOf$S($I$(7).separator) + 1;
if (start < 0) start=0;
var patternSuffix=pattern.substring$I(start);
dot=patternSuffix.indexOf$I(".");
if (dot < 0) patternSuffix="";
 else patternSuffix=patternSuffix.substring$I(dot + 1);
var checkPattern=this.findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection(loc, dir, nameList);
var checkFiles=Clazz.new_($I$(10,1).c$$org_scijava_io_location_BrowsableLocation$S$org_scijava_io_handle_DataHandleService,[base, checkPattern, this.dataHandleService]).getFiles$();
if (!patterns.contains$O(pattern) && (!this.dataHandleService.exists$org_scijava_io_location_Location(base.sibling$S(pattern))) && patternSuffix.equals$O(baseSuffix) && $I$(4).indexOf$OA$O(checkFiles, base) >= 0  ) {
patterns.add$TE(pattern);
}}
var s=patterns.toArray$TTA(Clazz.array(String, [patterns.size$()]));
$I$(6).sort$OA(s);
return s;
});

Clazz.newMeth(C$, 'findPattern$S$java_util_Collection$I$I$S', function (name, nameList, ndx, end, p) {
if (ndx == end) return p;
for (var i=end - ndx; i >= 1; i--) {
var filter=Clazz.new_($I$(5,1).c$$S$S,[name.substring$I$I(0, ndx), name.substring$I(ndx + i)]);
var list=p$1.matchFiles$java_util_Collection$io_scif_NumberFilter.apply(this, [nameList, filter]);
var numbers=Clazz.array(Integer.TYPE, [list.size$()]);
for (var j=0; j < list.size$(); j++) {
numbers[j]=Integer.parseInt$S(list.get$I(j).getName$().substring$I$I(ndx, ndx + i));
}
$I$(6).sort$IA(numbers);
var bounds=p$1.getBounds$IA$Z.apply(this, [numbers, true]);
if (bounds == null ) continue;
var pat=p$1.findPattern$S$java_util_Collection$I$I$S.apply(this, [name, nameList, ndx + i, end, p + bounds]);
if (pat != null ) return pat;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'getBounds$IA$Z', function (numbers, fixed) {
if (numbers.length < 2) return null;
var b=numbers[0];
var e=numbers[numbers.length - 1];
var s=numbers[1] - b;
if (s == 0) {
return null;
}for (var i=2; i < numbers.length; i++) {
if (numbers[i] - numbers[i - 1] != s) {
return null;
}}
var sb="" + b;
var se="" + e;
var bounds=Clazz.new_($I$(2,1).c$$S,["<"]);
if (fixed) {
var zeroes=se.length$() - sb.length$();
for (var i=0; i < zeroes; i++) bounds.append$S("0");

}bounds.append$S(sb);
bounds.append$S("-");
bounds.append$S(se);
if (s != 1) {
bounds.append$S(":");
bounds.append$I(s);
}bounds.append$S(">");
return bounds.toString();
}, p$1);

Clazz.newMeth(C$, 'matchFiles$java_util_Collection$io_scif_NumberFilter', function (nameList, filter) {
var list=Clazz.new_(1,{E:"org.scijava.io.location.BrowsableLocation"},$I$(9,1));
for (var inFile, $inFile = nameList.iterator$(); $inFile.hasNext$()&&((inFile=($inFile.next$())),1);) {
if (filter.accept$S(inFile.getName$())) list.add$TE(inFile);
}
return list;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.services.DefaultFilePatternService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
