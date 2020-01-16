(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'java.util.ArrayList','io.scif.FilePatternBlock','org.scijava.io.location.Location','java.io.File','java.util.regex.Pattern']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FilePattern");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isRegex=false;
}, 1);

C$.$fields$=[['Z',['valid','isRegex'],'S',['pattern','msg'],'O',['baseLoc','org.scijava.io.location.BrowsableLocation','startIndex','int[]','+endIndex','blocks','io.scif.FilePatternBlock[]','files','org.scijava.io.location.Location[]']]]

Clazz.newMeth(C$, 'c$$io_scif_services_FilePatternService$org_scijava_io_location_BrowsableLocation$org_scijava_io_handle_DataHandleService', function (filePatternService, file, dataHandleService) {
C$.c$$org_scijava_io_location_BrowsableLocation$S$org_scijava_io_handle_DataHandleService.apply(this, [file, filePatternService.findPattern$org_scijava_io_location_BrowsableLocation(file), dataHandleService]);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_services_FilePatternService$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$org_scijava_io_handle_DataHandleService', function (filePatternService, name, dir, dataHandleService) {
C$.c$$org_scijava_io_location_BrowsableLocation$S$org_scijava_io_handle_DataHandleService.apply(this, [name, filePatternService.findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation(name, dir), dataHandleService]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_io_location_BrowsableLocation$S$org_scijava_io_handle_DataHandleService', function (baseLoc, pattern, dataHandleService) {
;C$.$init$.apply(this);
this.baseLoc=baseLoc;
this.pattern=pattern;
this.valid=false;
if (pattern == null ) {
this.msg="Null pattern string.";
return;
}var len=pattern.length$();
var lt=Clazz.new_(1,{E:"Integer"},$I$(1,1).c$$I,[len]);
var gt=Clazz.new_(1,{E:"Integer"},$I$(1,1).c$$I,[len]);
var left=-1;
while (true){
left=pattern.indexOf$S$I("<", left + 1);
if (left < 0) break;
lt.add$TE(new Integer(left));
}
var right=-1;
while (true){
right=pattern.indexOf$S$I(">", right + 1);
if (right < 0) break;
gt.add$TE(new Integer(right));
}
var num=lt.size$();
if (num != gt.size$()) {
this.msg="Mismatched numerical block markers.";
return;
}this.startIndex=Clazz.array(Integer.TYPE, [num]);
this.endIndex=Clazz.array(Integer.TYPE, [num]);
for (var i=0; i < num; i++) {
var val=(lt.get$I(i)).valueOf();
if (i > 0 && val < this.endIndex[i - 1] ) {
this.msg="Bad numerical block marker order.";
return;
}this.startIndex[i]=val;
val=(gt.get$I(i)).valueOf();
if (val <= this.startIndex[i]) {
this.msg="Bad numerical block marker order.";
return;
}this.endIndex[i]=val + 1;
}
this.blocks=Clazz.array($I$(2), [num]);
for (var i=0; i < num; i++) {
var block=pattern.substring$I$I(this.startIndex[i], this.endIndex[i]);
this.blocks[i]=Clazz.new_($I$(2,1).c$$S,[block]);
}
var fileList=Clazz.new_(1,{E:"org.scijava.io.location.Location"},$I$(1,1));
p$1.buildFiles$S$I$java_util_List$org_scijava_io_handle_DataHandleService.apply(this, ["", num, fileList, dataHandleService]);
this.files=fileList.toArray$TTA(Clazz.array($I$(3), [fileList.size$()]));
if (this.files.length == 0) {
try {
var sibling=baseLoc.sibling$S(pattern);
if (dataHandleService.exists$org_scijava_io_location_Location(sibling)) {
this.files=Clazz.array($I$(3), -1, [sibling]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return;
} else {
throw e;
}
}
}this.valid=true;
}, 1);

Clazz.newMeth(C$, 'isRegex$', function () {
return this.isRegex;
});

Clazz.newMeth(C$, 'getPattern$', function () {
return this.pattern;
});

Clazz.newMeth(C$, 'isValid$', function () {
return this.valid;
});

Clazz.newMeth(C$, 'getErrorMessage$', function () {
return this.msg;
});

Clazz.newMeth(C$, 'getFiles$', function () {
return this.files;
});

Clazz.newMeth(C$, 'getElements$', function () {
var elements=Clazz.array(String, [this.blocks.length, null]);
for (var i=0; i < elements.length; i++) {
elements[i]=this.blocks[i].getElements$();
}
return elements;
});

Clazz.newMeth(C$, 'getCount$', function () {
var count=Clazz.array(Integer.TYPE, [this.blocks.length]);
for (var i=0; i < count.length; i++) {
count[i]=this.blocks[i].getElements$().length;
}
return count;
});

Clazz.newMeth(C$, 'getBlock$I', function (i) {
if (i < 0 || i >= this.startIndex.length ) return null;
return this.pattern.substring$I$I(this.startIndex[i], this.endIndex[i]);
});

Clazz.newMeth(C$, 'getBlocks$', function () {
var s=Clazz.array(String, [this.startIndex.length]);
for (var i=0; i < s.length; i++) s[i]=this.getBlock$I(i);

return s;
});

Clazz.newMeth(C$, 'getPrefix$', function () {
var s=this.pattern.lastIndexOf$S($I$(4).separator) + 1;
var e;
if (this.startIndex.length > 0) e=this.startIndex[0];
 else {
var dot=this.pattern.lastIndexOf$S(".");
e=dot < s ? this.pattern.length$() : dot;
}return s <= e ? this.pattern.substring$I$I(s, e) : "";
});

Clazz.newMeth(C$, 'getSuffix$', function () {
return this.endIndex.length > 0 ? this.pattern.substring$I(this.endIndex[this.endIndex.length - 1]) : this.pattern;
});

Clazz.newMeth(C$, 'getPrefix$I', function (i) {
if (i < 0 || i >= this.startIndex.length ) return null;
var s=i > 0 ? this.endIndex[i - 1] : (this.pattern.lastIndexOf$S($I$(4).separator) + 1);
var e=this.startIndex[i];
return s <= e ? this.pattern.substring$I$I(s, e) : null;
});

Clazz.newMeth(C$, 'getPrefixes$', function () {
var s=Clazz.array(String, [this.startIndex.length]);
for (var i=0; i < s.length; i++) s[i]=this.getPrefix$I(i);

return s;
});

Clazz.newMeth(C$, 'buildFiles$S$I$java_util_List$org_scijava_io_handle_DataHandleService', function (prefix, ndx, fileList, dataHandleService) {
if (this.blocks.length == 0) {
var patternLocation=this.baseLoc.sibling$S(this.pattern);
if (dataHandleService.exists$org_scijava_io_location_Location(patternLocation)) {
fileList.add$TE(patternLocation);
return;
}this.isRegex=true;
var localfiles=null;
var dir;
var endRegex=this.pattern.indexOf$S($I$(4).separator + "\\E") + 1;
var endNotRegex=this.pattern.lastIndexOf$S($I$(4).separator) + 1;
var end;
if (this.pattern.startsWith$S("\\Q") && endRegex > 0  && endRegex <= endNotRegex ) {
dir=this.pattern.substring$I$I(2, endRegex);
end=endRegex + 2;
} else {
dir=this.pattern.substring$I$I(0, endNotRegex);
end=endNotRegex;
}if ("".equals$O(dir) || !dataHandleService.exists$org_scijava_io_location_Location(this.baseLoc.sibling$S(dir)) ) {
localfiles=p$1.getAllFiles$org_scijava_io_location_BrowsableLocation.apply(this, [this.baseLoc.parent$()]);
} else {
localfiles=p$1.getAllFiles$org_scijava_io_location_BrowsableLocation.apply(this, [this.baseLoc.sibling$S(dir)]);
}var basePattern=this.pattern.substring$I(end);
var regex=null;
try {
regex=$I$(5).compile$S(basePattern);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.regex.PatternSyntaxException")){
regex=$I$(5).compile$S(this.pattern);
} else {
throw e;
}
}
for (var f, $f = localfiles.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (regex.matcher$CharSequence(f.getName$()).matches$()) {
fileList.add$TE(f);
}}
} else {
var num=this.startIndex.length;
var n1=ndx == 0 ? 0 : this.endIndex[ndx - 1];
var n2=ndx == num ? this.pattern.length$() : this.startIndex[ndx];
var pre=this.pattern.substring$I$I(n1, n2);
if (ndx == 0) fileList.add$TE(this.baseLoc.sibling$S(pre + prefix));
 else {
var block=this.blocks[--ndx];
var blockElements=block.getElements$();
for (var element, $element = 0, $$element = blockElements; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
p$1.buildFiles$S$I$java_util_List$org_scijava_io_handle_DataHandleService.apply(this, [element + pre + prefix , ndx, fileList, dataHandleService]);
}
}}}, p$1);

Clazz.newMeth(C$, 'getAllFiles$org_scijava_io_location_BrowsableLocation', function (dir) {
var subfiles=Clazz.new_(1,{E:"org.scijava.io.location.Location"},$I$(1,1));
var root=dir;
var children=root.children$();
for (var child, $child = children.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
var grandChildren=p$1.getAllFiles$org_scijava_io_location_BrowsableLocation.apply(this, [child]);
if (grandChildren.isEmpty$()) {
subfiles.add$TE(child);
} else {
subfiles.addAll$java_util_Collection(grandChildren);
}}
return subfiles;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
