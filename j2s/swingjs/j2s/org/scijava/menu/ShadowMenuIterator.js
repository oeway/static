(function(){var P$=Clazz.newPackage("org.scijava.menu"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ShadowMenuIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index'],'O',['node','org.scijava.menu.ShadowMenu','childIterators','java.util.List']]]

Clazz.newMeth(C$, 'c$$org_scijava_menu_ShadowMenu', function (node) {
;C$.$init$.apply(this);
this.node=node;
var children=node.getChildren$();
this.childIterators=Clazz.new_(1,{E:"org.scijava.menu.ShadowMenuIterator"},$I$(1,1));
for (var child, $child = children.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
this.childIterators.add$TE(Clazz.new_(C$.c$$org_scijava_menu_ShadowMenu,[child]));
}
this.index=node.getModuleInfo$() == null  ? 0 : -1;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.index < this.childIterators.size$();
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.hasNext$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
if (this.index < 0) {
this.index++;
return this.node.getModuleInfo$();
}var iter=this.childIterators.get$I(this.index);
var next=iter.next$();
if (!iter.hasNext$()) this.index++;
return next;
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
