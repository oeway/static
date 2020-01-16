(function(){var P$=Clazz.newPackage("org.apache.logging.log4j"),I$=[[0,'org.apache.logging.log4j.Marker','java.util.Arrays','org.apache.logging.log4j.MarkerManager','StringBuilder','java.util.concurrent.ConcurrentHashMap',['org.apache.logging.log4j.MarkerManager','.Log4jMarker']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MarkerManager", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MARKERS=Clazz.new_(1,{V:"String",K:"org.apache.logging.log4j.Marker"},$I$(5,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['MARKERS','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
C$.MARKERS.clear$();
}, 1);

Clazz.newMeth(C$, 'exists$S', function (key) {
return C$.MARKERS.containsKey$O(key);
}, 1);

Clazz.newMeth(C$, 'getMarker$S', function (name) {
var result=C$.MARKERS.get$O(name);
if (result == null ) {
C$.MARKERS.putIfAbsent$TK$TV(name, Clazz.new_($I$(6,1).c$$S,[name]));
result=C$.MARKERS.get$O(name);
}return result;
}, 1);

Clazz.newMeth(C$, 'getMarker$S$S', function (name, parent) {
var parentMarker=C$.MARKERS.get$O(parent);
if (parentMarker == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Parent Marker " + parent + " has not been defined" ]);
}return C$.getMarker$S$org_apache_logging_log4j_Marker(name, parentMarker);
}, 1);

Clazz.newMeth(C$, 'getMarker$S$org_apache_logging_log4j_Marker', function (name, parent) {
return C$.getMarker$S(name).addParents$org_apache_logging_log4j_MarkerA([parent]);
}, 1);

Clazz.newMeth(C$, 'requireNonNull$O$S', function (obj, message) {
if (obj == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[message]);
}}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.MarkerManager, "Log4jMarker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['org.apache.logging.log4j.Marker', 'org.apache.logging.log4j.util.StringBuilderFormattable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['name'],'O',['parents','org.apache.logging.log4j.Marker[]']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.name=null;
this.parents=null;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
P$.MarkerManager.requireNonNull$O$S(name, "Marker name cannot be null.");
this.name=name;
this.parents=null;
}, 1);

Clazz.newMeth(C$, 'addParents$org_apache_logging_log4j_MarkerA', function (parentMarkers) {
P$.MarkerManager.requireNonNull$O$S(parentMarkers, "A parent marker must be specified");
var localParents=this.parents;
var count=0;
var size=parentMarkers.length;
if (localParents != null ) {
for (var parent, $parent = 0, $$parent = parentMarkers; $parent<$$parent.length&&((parent=($$parent[$parent])),1);$parent++) {
if (!(C$.contains$org_apache_logging_log4j_Marker$org_apache_logging_log4j_MarkerA(parent, localParents) || parent.isInstanceOf$org_apache_logging_log4j_Marker(this) )) {
++count;
}}
if (count == 0) {
return this;
}size=localParents.length + count;
}var markers=Clazz.array($I$(1), [size]);
if (localParents != null ) {
System.arraycopy$O$I$O$I$I(localParents, 0, markers, 0, localParents.length);
}var index=localParents == null  ? 0 : localParents.length;
for (var parent, $parent = 0, $$parent = parentMarkers; $parent<$$parent.length&&((parent=($$parent[$parent])),1);$parent++) {
if (localParents == null  || !(C$.contains$org_apache_logging_log4j_Marker$org_apache_logging_log4j_MarkerA(parent, localParents) || parent.isInstanceOf$org_apache_logging_log4j_Marker(this) ) ) {
markers[index++]=parent;
}}
this.parents=markers;
return this;
});

Clazz.newMeth(C$, 'remove$org_apache_logging_log4j_Marker', function (parent) {
P$.MarkerManager.requireNonNull$O$S(parent, "A parent marker must be specified");
var localParents=this.parents;
if (localParents == null ) {
return false;
}var localParentsLength=localParents.length;
if (localParentsLength == 1) {
if (localParents[0].equals$O(parent)) {
this.parents=null;
return true;
}return false;
}var index=0;
var markers=Clazz.array($I$(1), [localParentsLength - 1]);
for (var i=0; i < localParentsLength; i++) {
var marker=localParents[i];
if (!marker.equals$O(parent)) {
if (index == localParentsLength - 1) {
return false;
}markers[index++]=marker;
}}
this.parents=markers;
return true;
});

Clazz.newMeth(C$, 'setParents$org_apache_logging_log4j_MarkerA', function (markers) {
if (markers == null  || markers.length == 0 ) {
this.parents=null;
} else {
var array=Clazz.array($I$(1), [markers.length]);
System.arraycopy$O$I$O$I$I(markers, 0, array, 0, markers.length);
this.parents=array;
}return this;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getParents$', function () {
if (this.parents == null ) {
return null;
}return $I$(2).copyOf$__TA$I(this.parents, this.parents.length);
});

Clazz.newMeth(C$, 'hasParents$', function () {
return this.parents != null ;
});

Clazz.newMeth(C$, 'isInstanceOf$org_apache_logging_log4j_Marker', function (marker) {
P$.MarkerManager.requireNonNull$O$S(marker, "A marker parameter is required");
if (this === marker ) {
return true;
}var localParents=this.parents;
if (localParents != null ) {
var localParentsLength=localParents.length;
if (localParentsLength == 1) {
return C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[0], marker);
}if (localParentsLength == 2) {
return C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[0], marker) || C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[1], marker) ;
}for (var i=0; i < localParentsLength; i++) {
var localParent=localParents[i];
if (C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParent, marker)) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'isInstanceOf$S', function (markerName) {
P$.MarkerManager.requireNonNull$O$S(markerName, "A marker name is required");
if (markerName.equals$O(this.getName$())) {
return true;
}var marker=$I$(3).MARKERS.get$O(markerName);
if (marker == null ) {
return false;
}var localParents=this.parents;
if (localParents != null ) {
var localParentsLength=localParents.length;
if (localParentsLength == 1) {
return C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[0], marker);
}if (localParentsLength == 2) {
return C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[0], marker) || C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[1], marker) ;
}for (var i=0; i < localParentsLength; i++) {
var localParent=localParents[i];
if (C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParent, marker)) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker', function (parent, marker) {
if (parent === marker ) {
return true;
}var localParents=Clazz.instanceOf(parent, "org.apache.logging.log4j.MarkerManager.Log4jMarker") ? (parent).parents : parent.getParents$();
if (localParents != null ) {
var localParentsLength=localParents.length;
if (localParentsLength == 1) {
return C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[0], marker);
}if (localParentsLength == 2) {
return C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[0], marker) || C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParents[1], marker) ;
}for (var i=0; i < localParentsLength; i++) {
var localParent=localParents[i];
if (C$.checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker(localParent, marker)) {
return true;
}}
}return false;
}, 1);

Clazz.newMeth(C$, 'contains$org_apache_logging_log4j_Marker$org_apache_logging_log4j_MarkerA', function (parent, localParents) {
for (var i=0, localParentsLength=localParents.length; i < localParentsLength; i++) {
var marker=localParents[i];
if (marker === parent ) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || !(Clazz.instanceOf(o, "org.apache.logging.log4j.Marker")) ) {
return false;
}var marker=o;
return this.name.equals$O(marker.getName$());
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.name.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(4,1));
this.formatTo$StringBuilder(sb);
return sb.toString();
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (sb) {
sb.append$S(this.name);
var localParents=this.parents;
if (localParents != null ) {
C$.addParentInfo$StringBuilder$org_apache_logging_log4j_MarkerA(sb, localParents);
}});

Clazz.newMeth(C$, 'addParentInfo$StringBuilder$org_apache_logging_log4j_MarkerA', function (sb, parents) {
sb.append$S("[ ");
var first=true;
for (var i=0, parentsLength=parents.length; i < parentsLength; i++) {
var marker=parents[i];
if (!first) {
sb.append$S(", ");
}first=false;
sb.append$S(marker.getName$());
var p=Clazz.instanceOf(marker, "org.apache.logging.log4j.MarkerManager.Log4jMarker") ? (marker).parents : marker.getParents$();
if (p != null ) {
C$.addParentInfo$StringBuilder$org_apache_logging_log4j_MarkerA(sb, p);
}}
sb.append$S(" ]");
}, 1);
C$.$getAnn$ = function(){ return [
[['M:isInstanceOf','boolean','isInstanceOf$org_apache_logging_log4j_Marker',['org.apache.logging.log4j.util.PerformanceSensitive']],['{""allocation"" ,""unrolled"" }']],
  [['M:isInstanceOf','.','isInstanceOf$S',['org.apache.logging.log4j.util.PerformanceSensitive']],['{""allocation"" ,""unrolled"" }']],
  [['M:checkParent','.','checkParent$org_apache_logging_log4j_Marker$org_apache_logging_log4j_Marker',['org.apache.logging.log4j.util.PerformanceSensitive']],['{""allocation"" ,""unrolled"" }']],
  [['M:contains','.','contains$org_apache_logging_log4j_Marker$org_apache_logging_log4j_MarkerA',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']],
  [['M:addParentInfo','void','addParentInfo$StringBuilder$org_apache_logging_log4j_MarkerA',['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']]]}
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
