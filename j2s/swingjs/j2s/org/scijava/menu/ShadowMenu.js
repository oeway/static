(function(){var P$=Clazz.newPackage("org.scijava.menu"),p$1={},I$=[[0,'java.util.HashMap','org.scijava.MenuPath','java.util.ArrayList','java.util.Collections','org.scijava.util.Types','org.scijava.menu.event.MenusUpdatedEvent','java.util.HashSet','org.scijava.util.MiscUtils','StringBuilder','org.scijava.menu.event.MenusAddedEvent','org.scijava.menu.ShadowMenuIterator','org.scijava.menu.event.MenusRemovedEvent','org.scijava.module.ModuleInfo','java.lang.reflect.Array']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ShadowMenu", null, 'org.scijava.AbstractContextual', ['Comparable', 'java.util.Collection', 'Runnable', 'org.scijava.Named']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['menuDepth'],'O',['moduleInfo','org.scijava.module.ModuleInfo','menuEntry','org.scijava.MenuEntry','parent','org.scijava.menu.ShadowMenu','children','java.util.Map','es','org.scijava.event.EventService','moduleService','org.scijava.module.ModuleService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_util_Collection', function (context, modules) {
C$.c$$org_scijava_Context$org_scijava_module_ModuleInfo$I$org_scijava_menu_ShadowMenu.apply(this, [context, null, -1, null]);
this.addAll$java_util_Collection(modules);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_module_ModuleInfo$I$org_scijava_menu_ShadowMenu', function (context, moduleInfo, menuDepth, parent) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
if (moduleInfo == null ) {
this.moduleInfo=null;
this.menuEntry=null;
} else {
var menuPath=moduleInfo.getMenuPath$();
var leaf=menuDepth == menuPath.size$() - 1;
this.moduleInfo=leaf ? moduleInfo : null;
this.menuEntry=menuPath.get$I(menuDepth);
}this.menuDepth=menuDepth;
this.parent=parent;
this.children=Clazz.new_(1,{K:"String",V:"org.scijava.menu.ShadowMenu"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getModuleInfo$', function () {
return this.moduleInfo;
});

Clazz.newMeth(C$, 'getMenu$org_scijava_MenuPath', function (menuPath) {
return p$1.getMenu$org_scijava_MenuPath$I.apply(this, [menuPath, 0]);
});

Clazz.newMeth(C$, 'getMenu$S', function (path) {
return p$1.getMenu$org_scijava_MenuPath$I.apply(this, [Clazz.new_($I$(2,1).c$$S,[path]), 0]);
});

Clazz.newMeth(C$, 'getMenuEntry$', function () {
return this.menuEntry;
});

Clazz.newMeth(C$, 'getMenuDepth$', function () {
return this.menuDepth;
});

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'getChildren$', function () {
var childList=Clazz.new_(1,{E:"org.scijava.menu.ShadowMenu"},$I$(3,1).c$$java_util_Collection,[this.children.values$()]);
$I$(4).sort$java_util_List(childList);
return childList;
});

Clazz.newMeth(C$, 'isLeaf$', function () {
return this.children.isEmpty$();
});

Clazz.newMeth(C$, 'isToggle$', function () {
if (this.moduleInfo == null ) return false;
return this.moduleInfo.isSelectable$();
});

Clazz.newMeth(C$, 'isCheckBox$', function () {
if (!this.isToggle$()) return false;
var selectionGroup=this.moduleInfo.getSelectionGroup$();
return selectionGroup == null  || selectionGroup.isEmpty$() ;
});

Clazz.newMeth(C$, 'isRadioButton$', function () {
if (!this.isToggle$()) return false;
var selectionGroup=this.moduleInfo.getSelectionGroup$();
return selectionGroup != null  && !selectionGroup.isEmpty$() ;
});

Clazz.newMeth(C$, 'getIconURL$', function () {
if (this.menuEntry == null ) return null;
var iconPath=this.menuEntry.getIconPath$();
if (iconPath == null  || iconPath.isEmpty$() ) {
if (this.isLeaf$()) iconPath="/icons/plugin.png";
 else return null;
}var className=this.moduleInfo.getDelegateClassName$();
try {
var c=$I$(5).load$S$Z(className, false);
var iconURL=c.getResource$S(iconPath);
if (iconURL == null ) {
if (this.log != null ) this.log.error$O("Could not load icon: " + iconPath);
}return iconURL;
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
var message="Could not load icon for class: " + className;
if (this.log.isDebug$()) this.log.debug$O$Throwable(message, exc);
 else this.log.error$O(message);
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'update$org_scijava_module_ModuleInfo', function (module) {
var removed=p$1.removeInternal$org_scijava_module_ModuleInfo.apply(this, [module]);
if (removed == null ) return false;
var node=p$1.addInternal$org_scijava_module_ModuleInfo.apply(this, [module]);
if (node == null ) return false;
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(6,1).c$$org_scijava_menu_ShadowMenu,[node]));
return true;
});

Clazz.newMeth(C$, 'updateAll$java_util_Collection', function (c) {
var nodes=Clazz.new_(1,{E:"org.scijava.menu.ShadowMenu"},$I$(7,1));
for (var info, $info = c.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var removed=p$1.removeInternal$org_scijava_module_ModuleInfo.apply(this, [info]);
if (removed == null ) continue;
var node=p$1.addInternal$org_scijava_module_ModuleInfo.apply(this, [info]);
if (node != null ) nodes.add$TE(node);
}
if (nodes.isEmpty$()) return false;
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(6,1).c$$java_util_Collection,[nodes]));
return true;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.menuEntry == null  ? null : this.menuEntry.getName$();
});

Clazz.newMeth(C$, 'setName$S', function (name) {
if (this.menuEntry == null ) return;
this.menuEntry.setName$S(name);
});

Clazz.newMeth(C$, ['compareTo$org_scijava_menu_ShadowMenu','compareTo$','compareTo$TT'], function (c) {
if (this.menuEntry == null  || c.menuEntry == null  ) return 0;
var w1=this.menuEntry.getWeight$();
var w2=c.menuEntry.getWeight$();
if (w1 < w2 ) return -1;
if (w1 > w2 ) return 1;
var n1=this.menuEntry.getName$();
var n2=c.menuEntry.getName$();
return $I$(8).compare$TT$TT(n1, n2);
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(9,1));
for (var i=0; i <= this.menuDepth; i++) sb.append$S("\t");

var name=this.getName$();
sb.append$S(name == null  ? "[-]" : name);
for (var child, $child = this.getChildren$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
sb.append$S("\n" + child.toString());
}
return sb.toString();
});

Clazz.newMeth(C$, 'run$', function () {
if (this.moduleInfo == null ) return;
if (this.moduleService != null ) this.moduleService.run$org_scijava_module_ModuleInfo$Z$OA(this.moduleInfo, true, []);
});

Clazz.newMeth(C$, ['add$org_scijava_module_ModuleInfo','add$TE'], function (o) {
if (!o.isVisible$()) return false;
var node=p$1.addInternal$org_scijava_module_ModuleInfo.apply(this, [o]);
if (node == null ) return false;
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(10,1).c$$org_scijava_menu_ShadowMenu,[node]));
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
var nodes=Clazz.new_(1,{E:"org.scijava.menu.ShadowMenu"},$I$(7,1));
for (var info, $info = c.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
if (!info.isVisible$()) continue;
var node=p$1.addInternal$org_scijava_module_ModuleInfo.apply(this, [info]);
if (node != null ) nodes.add$TE(node);
}
if (nodes.isEmpty$()) return false;
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(10,1).c$$java_util_Collection,[nodes]));
return true;
});

Clazz.newMeth(C$, 'clear$', function () {
this.children.clear$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (o === this.moduleInfo ) return true;
for (var node, $node = this.children.values$().iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
if (node.contains$O(o)) return true;
}
return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!this.contains$O(o)) return false;
}
return true;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.children.isEmpty$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(11,1).c$$org_scijava_menu_ShadowMenu,[this]);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.module.ModuleInfo"))) return false;
var info=o;
var node=p$1.removeInternal$org_scijava_module_ModuleInfo.apply(this, [info]);
if (node == null ) return false;
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(12,1).c$$org_scijava_menu_ShadowMenu,[node]));
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var nodes=Clazz.new_(1,{E:"org.scijava.menu.ShadowMenu"},$I$(7,1));
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "org.scijava.module.ModuleInfo"))) continue;
var info=o;
var node=p$1.removeInternal$org_scijava_module_ModuleInfo.apply(this, [info]);
if (node != null ) nodes.add$TE(node);
}
if (nodes.isEmpty$()) return false;
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(12,1).c$$java_util_Collection,[nodes]));
return true;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
var toRemove=Clazz.new_(1,{E:"java.lang.Object"},$I$(3,1));
for (var info, $info = this.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
if (!c.contains$O(info)) toRemove.add$TE(info);
}
return this.removeAll$java_util_Collection(toRemove);
});

Clazz.newMeth(C$, 'size$', function () {
var sum=this.moduleInfo == null  ? 0 : 1;
for (var child, $child = this.children.values$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
sum+=child.size$();
}
return sum;
});

Clazz.newMeth(C$, 'toArray$', function () {
var a=Clazz.array(java.lang.Object, [this.size$()]);
return this.toArray$TTA(a);
});

Clazz.newMeth(C$, ['toArray$TTA'], function (a) {
var componentType=a.getClass$().getComponentType$();
if (!Clazz.getClass($I$(13),['canCancel$','canPreview$','canRunHeadless$','createModule$','getDelegateClassName$','getIdentifier$','getInitializer$','getInput$S','getInput$S$Class','getLocation$','getOutput$S','getOutput$S$Class','getProblems$','getTitle$','getVersion$','inputs$','isInteractive$','isValid$','loadDelegateClass$','outputs$','update$org_scijava_event_EventService']).isAssignableFrom$Class(componentType)) {
throw Clazz.new_(Clazz.load('ArrayStoreException'));
}var size=this.size$();
var result;
if (a.length >= size) {
result=a;
} else {
var newArray=Clazz.array(componentType, size);
var typedArray=newArray;
result=typedArray;
}var index=0;
var iter=this.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
result[index++]=element;
}
return result;
});

Clazz.newMeth(C$, 'addInternal$org_scijava_module_ModuleInfo', function (o) {
if (o.getMenuPath$().isEmpty$()) return null;
return p$1.addChild$org_scijava_module_ModuleInfo$I.apply(this, [o, 0]);
}, p$1);

Clazz.newMeth(C$, 'removeInternal$org_scijava_module_ModuleInfo', function (o) {
for (var menuName, $menuName = this.children.keySet$().iterator$(); $menuName.hasNext$()&&((menuName=($menuName.next$())),1);) {
var child=this.children.get$O(menuName);
if (child.getModuleInfo$() === o ) {
this.children.remove$O(menuName);
return child;
}var removed=p$1.removeInternal$org_scijava_module_ModuleInfo.apply(child, [o]);
if (removed != null ) {
if (child.isLeaf$() && child.getModuleInfo$() == null  ) {
this.children.remove$O(menuName);
}return removed;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'addChild$org_scijava_module_ModuleInfo$I', function (info, depth) {
var menuPath=info.getMenuPath$();
var entry=menuPath.get$I(depth);
var leaf=p$1.isLeaf$I$org_scijava_MenuPath.apply(this, [depth, menuPath]);
var existingChild=this.children.get$O(entry.getName$());
var child;
if (existingChild == null ) {
var menuName=entry.getName$();
var newChild=Clazz.new_(C$.c$$org_scijava_Context$org_scijava_module_ModuleInfo$I$org_scijava_menu_ShadowMenu,[this.getContext$(), info, depth, this]);
this.children.put$TK$TV(menuName, newChild);
child=newChild;
} else {
var childMenuEntry=existingChild.getMenuEntry$();
childMenuEntry.assignProperties$org_scijava_MenuEntry(entry);
child=existingChild;
}if (!leaf) p$1.addChild$org_scijava_module_ModuleInfo$I.apply(child, [info, depth + 1]);
 else if (existingChild != null ) {
if (this.log != null ) {
var childInfo=existingChild.getModuleInfo$();
if (this.log.isDebug$()) {
this.log.debug$O("ShadowMenu: menu item already exists:\n\texisting: " + p$1.details$org_scijava_module_ModuleInfo.apply(this, [childInfo]) + "\n" + "\t ignored: " + p$1.details$org_scijava_module_ModuleInfo.apply(this, [info]) );
}}}return child;
}, p$1);

Clazz.newMeth(C$, 'isLeaf$I$org_scijava_MenuPath', function (depth, path) {
return depth == path.size$() - 1;
}, p$1);

Clazz.newMeth(C$, 'details$org_scijava_module_ModuleInfo', function (info) {
if (info == null ) return "<null>";
var className;
var classLocation;
try {
var c=info.loadDelegateClass$();
className=c.getName$();
classLocation=$I$(5).location$Class(c).toString();
} catch (exc) {
if (Clazz.exceptionOf(exc,"ClassNotFoundException")){
className=info.getDelegateClassName$();
classLocation="<invalid>";
} else {
throw exc;
}
}
return info.getMenuPath$() + " : " + className + " [" + classLocation + "]" ;
}, p$1);

Clazz.newMeth(C$, 'getMenu$org_scijava_MenuPath$I', function (menuPath, index) {
var entry=menuPath.get$I(index);
for (var child, $child = this.children.values$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
if (entry.getName$().equals$O(child.getMenuEntry$().getName$())) {
if (p$1.isLeaf$I$org_scijava_MenuPath.apply(this, [index, menuPath])) {
return child;
}return p$1.getMenu$org_scijava_MenuPath$I.apply(child, [menuPath, index + 1]);
}}
return null;
}, p$1);
C$.$getAnn$ = function(){ return [
[['es','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
