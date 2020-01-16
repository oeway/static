(function(){var P$=Clazz.newPackage("net.imglib2.img.list"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ListRandomAccess", null, 'net.imglib2.AbstractLocalizableInt', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['i'],'O',['img','net.imglib2.img.list.AbstractListImg']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_ListRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
this.img=randomAccess.img;
for (var d=0; d < this.n; ++d) this.position[d]=randomAccess.position[d];

this.i=randomAccess.i;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_AbstractListImg', function (img) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.img=img;
this.i=0;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.img.get$I(this.i);
});

Clazz.newMeth(C$, ['set$TT'], function (t) {
this.img.set$I$TT(this.i, t);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.i+=this.img.step[d];
++this.position[d];
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.i-=this.img.step[d];
--this.position[d];
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.i+=this.img.step[d] * distance;
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.move$I$I((distance|0), d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) this.move$I$I(localizable.getIntPosition$I(d), d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; ++d) this.move$I$I(distance[d], d);

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; ++d) this.move$I$I((distance[d]|0), d);

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
this.position[0]=this.i=localizable.getIntPosition$I(0);
for (var d=1; d < this.n; ++d) {
this.position[d]=localizable.getIntPosition$I(d);
this.i+=this.position[d] * this.img.step[d];
}
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
this.i=position[0];
this.position[0]=this.i;
for (var d=1; d < this.n; ++d) {
var p=position[d];
this.i+=p * this.img.step[d];
this.position[d]=p;
}
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
this.i=(position[0]|0);
this.position[0]=this.i;
for (var d=1; d < this.n; ++d) {
var p=(position[d]|0);
this.i+=p * this.img.step[d];
this.position[d]=p;
}
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.i+=this.img.step[d] * (position - this.position[d]);
this.position[d]=position;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.i+=this.img.step[d] * (position - this.position[d]);
this.position[d]=(position|0);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_list_ListRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
