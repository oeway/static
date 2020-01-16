(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ListUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'first$java_util_List', function (list) {
if (list == null  || list.size$() == 0 ) return null;
return list.get$I(0);
}, 1);

Clazz.newMeth(C$, 'string$java_util_List', function (list) {
return C$.string$java_util_List$Z(list, true);
}, 1);

Clazz.newMeth(C$, 'string$java_util_List$Z', function (list, encloseSingletons) {
return C$.string$java_util_List$S$S$S$Z(list, "[", "]", ", ", encloseSingletons);
}, 1);

Clazz.newMeth(C$, 'string$java_util_List$S$S$S$Z', function (list, lDelimiter, rDelimiter, separator, encloseSingletons) {
var delimit=encloseSingletons || list.size$() != 1 ;
var sb=Clazz.new_($I$(1,1));
if (delimit) sb.append$S(lDelimiter);
var first=true;
for (var e, $e = list.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (first) first=false;
 else sb.append$S(separator);
sb.append$O(e);
}
if (delimit) sb.append$S(rDelimiter);
return sb.toString();
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
