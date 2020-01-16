(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'javax.swing.filechooser.FileFilter','java.util.Vector','java.util.Arrays','java.util.Collections','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ComboFileFilter", null, 'javax.swing.filechooser.FileFilter', ['java.io.FileFilter', 'Comparable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['desc'],'O',['fileFilters','javax.swing.filechooser.FileFilter[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_filechooser_FileFilterA$S', function (filters, description) {
Clazz.super_(C$, this);
this.fileFilters=Clazz.array($I$(1), [filters.length]);
System.arraycopy$O$I$O$I$I(filters, 0, this.fileFilters, 0, filters.length);
this.desc=description;
}, 1);

Clazz.newMeth(C$, 'getFilters$', function () {
var ff=Clazz.array($I$(1), [this.fileFilters.length]);
System.arraycopy$O$I$O$I$I(this.fileFilters, 0, ff, 0, this.fileFilters.length);
return ff;
});

Clazz.newMeth(C$, 'sortFilters$javax_swing_filechooser_FileFilterA', function (filters) {
return C$.sortFilters$java_util_Vector(Clazz.new_($I$(2,1).c$$java_util_Collection,[$I$(3).asList$TTA(filters)]));
}, 1);

Clazz.newMeth(C$, 'sortFilters$java_util_Vector', function (filters) {
$I$(4).sort$java_util_List(filters);
var len=filters.size$();
var v=Clazz.new_($I$(2,1).c$$I,[len]);
for (var i=0; i < len; i++) {
var ffi=filters.elementAt$I(i);
var ndx=i + 1;
while (ndx < len){
var ff=filters.elementAt$I(ndx);
if (!ffi.getDescription$().equals$O(ff.getDescription$())) break;
ndx++;
}
if (ndx > i + 1) {
var temp=Clazz.array($I$(1), [ndx - i]);
for (var j=0; j < temp.length; j++) {
temp[j]=filters.elementAt$I(i + j);
}
v.add$TE(Clazz.new_(C$.c$$javax_swing_filechooser_FileFilterA$S,[temp, temp[0].getDescription$()]));
i+=temp.length - 1;
} else v.add$TE(ffi);
}
var result=Clazz.array($I$(1), [v.size$()]);
v.copyInto$OA(result);
return result;
}, 1);

Clazz.newMeth(C$, ['accept$java_io_File','accept$'], function (file) {
for (var filter, $filter = 0, $$filter = this.fileFilters; $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
if (filter.accept$java_io_File(file)) return true;
}
return false;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.desc;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(5,1).c$$S,["ComboFileFilter: "]);
sb.append$S(this.desc);
for (var fileFilter, $fileFilter = 0, $$fileFilter = this.fileFilters; $fileFilter<$$fileFilter.length&&((fileFilter=($$fileFilter[$fileFilter])),1);$fileFilter++) {
sb.append$S("\n\t");
sb.append$S(fileFilter.toString());
}
return sb.toString();
});

Clazz.newMeth(C$, ['compareTo$O','compareTo$','compareTo$TT'], function (o) {
return this.desc.compareToIgnoreCase$S((o).getDescription$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
