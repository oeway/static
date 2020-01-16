(function(){var P$=Clazz.newPackage("net.imglib2.img.sparse"),p$1={},I$=[[0,['net.imglib2.img.sparse.Ntree','.NtreeNode']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Ntree", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['NtreeNode',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','numTreeLevels','numChildren'],'O',['root','net.imglib2.img.sparse.Ntree.NtreeNode','dimensions','long[]']]]

Clazz.newMeth(C$, 'c$$JA$TT', function (dimensions, value) {
;C$.$init$.apply(this);
this.n=dimensions.length;
this.dimensions=dimensions.clone$();
var maxdim=0;
for (var d=0; d < this.n; ++d) maxdim=Math.max(maxdim, dimensions[d]);

this.numTreeLevels=(Math.ceil(Math.log(maxdim) / Math.log(2))|0) + 1;
this.numChildren=1 << this.n;
this.root=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_img_sparse_Ntree_NtreeNode$TT,[null, value]);
}, 1);

Clazz.newMeth(C$, 'copyRecursively$net_imglib2_img_sparse_Ntree_NtreeNode$net_imglib2_img_sparse_Ntree_NtreeNode', function (node, newParent) {
var copy=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_img_sparse_Ntree_NtreeNode$TT,[newParent, node.getValue$()]);
if (node.hasChildren$()) {
copy.children=Clazz.array($I$(1), [this.numChildren]);
for (var i=0; i < this.numChildren; ++i) {
copy.children[i]=p$1.copyRecursively$net_imglib2_img_sparse_Ntree_NtreeNode$net_imglib2_img_sparse_Ntree_NtreeNode.apply(this, [node.children[i], copy]);
}
}return copy;
}, p$1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_sparse_Ntree', function (ntree) {
;C$.$init$.apply(this);
this.dimensions=ntree.dimensions;
this.n=ntree.n;
this.numTreeLevels=ntree.numTreeLevels;
this.numChildren=ntree.numChildren;
this.root=p$1.copyRecursively$net_imglib2_img_sparse_Ntree_NtreeNode$net_imglib2_img_sparse_Ntree_NtreeNode.apply(this, [ntree.root, null]);
}, 1);

Clazz.newMeth(C$, 'getNode$JA', function (position) {
var current=this.root;
for (var l=this.numTreeLevels - 2; l >= 0; --l) {
if (!current.hasChildren$()) break;
var bitmask=1 << l;
var childindex=0;
for (var d=0; d < this.n; ++d) if ((position[d] & bitmask) != 0) childindex|=1 << d;

current=current.children[childindex];
}
return current;
});

Clazz.newMeth(C$, 'createNode$JA', function (position) {
var current=this.root;
for (var l=this.numTreeLevels - 2; l >= 0; --l) {
if (!current.hasChildren$()) {
current.children=Clazz.array($I$(1), [this.numChildren]);
for (var i=0; i < this.numChildren; ++i) current.children[i]=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_img_sparse_Ntree_NtreeNode$TT,[current, current.getValue$()]);

}var bitmask=1 << l;
var childindex=0;
for (var d=0; d < this.n; ++d) if ((position[d] & bitmask) != 0) childindex|=1 << d;

current=current.children[childindex];
}
return current;
});

Clazz.newMeth(C$, 'createNodeWithValue$JA$TT', function (position, value) {
var current=this.root;
for (var l=this.numTreeLevels - 2; l >= 0; --l) {
if (!current.hasChildren$()) {
if (current.getValue$().compareTo$(value) == 0) return current;
current.children=Clazz.array($I$(1), [this.numChildren]);
for (var i=0; i < this.numChildren; ++i) current.children[i]=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_img_sparse_Ntree_NtreeNode$TT,[current, current.getValue$()]);

}var bitmask=1 << l;
var childindex=0;
for (var d=0; d < this.n; ++d) if ((position[d] & bitmask) != 0) childindex|=1 << d;

current=current.children[childindex];
}
if (current.getValue$().compareTo$(value) == 0) return current;
current.setValue$TT(value);
return this.mergeUpwards$net_imglib2_img_sparse_Ntree_NtreeNode(current);
});

Clazz.newMeth(C$, 'mergeUpwards$net_imglib2_img_sparse_Ntree_NtreeNode', function (node) {
var parent=node.parent;
if (parent == null ) return node;
var child0=parent.children[0];
if (child0.hasChildren$()) return node;
for (var i=1; i < this.numChildren; ++i) {
var child=parent.children[i];
if (child.hasChildren$() || child0.getValue$().compareTo$(child.getValue$()) != 0 ) return node;
}
parent.setValue$TT(child0.getValue$());
parent.children=null;
return this.mergeUpwards$net_imglib2_img_sparse_Ntree_NtreeNode(parent);
});

Clazz.newMeth(C$, 'getRootNode$', function () {
return this.root;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Ntree, "NtreeNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['value','<T>','parent','net.imglib2.img.sparse.Ntree.NtreeNode','children','net.imglib2.img.sparse.Ntree.NtreeNode[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_sparse_Ntree_NtreeNode$TT', function (parent, value) {
;C$.$init$.apply(this);
this.parent=parent;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'hasChildren$', function () {
return this.children != null ;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$TT', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getChildren$', function () {
return this.children;
});

Clazz.newMeth(C$, 'setChildren$net_imglib2_img_sparse_Ntree_NtreeNodeA', function (children) {
this.children=children;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
