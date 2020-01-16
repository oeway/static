(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'java.util.TreeMap','java.util.TreeSet','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFTagSet");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allowedTagsByNumber=Clazz.new_($I$(1,1));
this.allowedTagsByName=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['allowedTagsByNumber','java.util.SortedMap','+allowedTagsByName']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (tags) {
;C$.$init$.apply(this);
if (tags == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tags == null!"]);
}var iter=tags.iterator$();
while (iter.hasNext$()){
var o=iter.next$();
if (!(Clazz.instanceOf(o, "io.scif.media.imageio.plugins.tiff.TIFFTag"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tags contains a non-TIFFTag!"]);
}var tag=o;
this.allowedTagsByNumber.put$TK$TV( new Integer(tag.getNumber$()), tag);
this.allowedTagsByName.put$TK$TV(tag.getName$(), tag);
}
}, 1);

Clazz.newMeth(C$, 'getTag$I', function (tagNumber) {
return this.allowedTagsByNumber.get$O( new Integer(tagNumber));
});

Clazz.newMeth(C$, 'getTag$S', function (tagName) {
if (tagName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tagName == null!"]);
}return this.allowedTagsByName.get$O(tagName);
});

Clazz.newMeth(C$, 'getTagNumbers$', function () {
var tagNumbers=this.allowedTagsByNumber.keySet$();
var sortedTagNumbers;
if (Clazz.instanceOf(tagNumbers, "java.util.SortedSet")) {
sortedTagNumbers=tagNumbers;
} else {
sortedTagNumbers=Clazz.new_($I$(2,1).c$$java_util_Collection,[tagNumbers]);
}return $I$(3).unmodifiableSortedSet$java_util_SortedSet(sortedTagNumbers);
});

Clazz.newMeth(C$, 'getTagNames$', function () {
var tagNames=this.allowedTagsByName.keySet$();
var sortedTagNames;
if (Clazz.instanceOf(tagNames, "java.util.SortedSet")) {
sortedTagNames=tagNames;
} else {
sortedTagNames=Clazz.new_($I$(2,1).c$$java_util_Collection,[tagNames]);
}return $I$(3).unmodifiableSortedSet$java_util_SortedSet(sortedTagNames);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
