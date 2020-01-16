(function(){var P$=Clazz.newPackage("org.scijava"),I$=[[0,'org.scijava.MenuEntry','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MenuPath", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (menuEntries) {
Clazz.super_(C$, this);
if (menuEntries != null ) this.addAll$java_util_Collection(menuEntries);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (path) {
C$.c$$S$S.apply(this, [path, ">"]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (path, separator) {
C$.c$$S$S$Z.apply(this, [path, separator, true]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z', function (path, separator, trim) {
Clazz.super_(C$, this);
if (path != null  && !path.isEmpty$() ) {
var tokens=path.split$S(separator);
for (var token, $token = 0, $$token = tokens; $token<$$token.length&&((token=($$token[$token])),1);$token++) {
this.add$TE(Clazz.new_($I$(1,1).c$$S,[trim ? token.trim$() : token]));
}
}}, 1);

Clazz.newMeth(C$, 'getLeaf$', function () {
if (this.size$() == 0) return null;
return this.get$I(this.size$() - 1);
});

Clazz.newMeth(C$, 'getMenuString$', function () {
return this.getMenuString$Z(true);
});

Clazz.newMeth(C$, 'getMenuString$Z', function (includeLeaf) {
var sb=Clazz.new_($I$(2,1));
var size=this.size$();
var last=includeLeaf ? size : size - 1;
for (var i=0; i < last; i++) {
var menu=this.get$I(i);
if (i > 0) sb.append$S(" > ");
sb.append$O(menu);
}
return sb.toString();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
