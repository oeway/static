(function(){var P$=Clazz.newPackage("org.scijava.menu"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "AbstractMenuCreator", null, null, 'org.scijava.menu.MenuCreator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['createMenus$org_scijava_menu_ShadowMenu$TT','createMenus$'], function (root, target) {
var lastWeight=NaN;
for (var child, $child = root.getChildren$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
var weight=child.getMenuEntry$().getWeight$();
var difference=Math.abs(weight - lastWeight);
if (difference > 1 ) this.addSeparatorToTop$TT(target);
lastWeight=weight;
if (child.isLeaf$()) {
this.addLeafToTop$org_scijava_menu_ShadowMenu$TT(child, target);
} else {
var nonLeaf=this.addNonLeafToTop$org_scijava_menu_ShadowMenu$TT(child, target);
p$1.populateMenu$org_scijava_menu_ShadowMenu$TM.apply(this, [child, nonLeaf]);
}}
});

Clazz.newMeth(C$, ['populateMenu$org_scijava_menu_ShadowMenu$TM'], function (shadow, target) {
var lastWeight=NaN;
for (var child, $child = shadow.getChildren$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
var weight=child.getMenuEntry$().getWeight$();
var difference=Math.abs(weight - lastWeight);
if (difference > 1 ) this.addSeparatorToMenu$TM(target);
lastWeight=weight;
if (child.isLeaf$()) {
this.addLeafToMenu$org_scijava_menu_ShadowMenu$TM(child, target);
} else {
var nonLeaf=this.addNonLeafToMenu$org_scijava_menu_ShadowMenu$TM(child, target);
p$1.populateMenu$org_scijava_menu_ShadowMenu$TM.apply(this, [child, nonLeaf]);
}}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
