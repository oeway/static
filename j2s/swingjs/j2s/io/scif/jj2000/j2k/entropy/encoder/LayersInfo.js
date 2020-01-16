(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LayersInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.totlyrs=1;
this.optbrate=Clazz.array(Float.TYPE, [10]);
this.extralyrs=Clazz.array(Integer.TYPE, [10]);
}, 1);

C$.$fields$=[['F',['totbrate'],'I',['totlyrs','nopt'],'O',['optbrate','float[]','extralyrs','int[]']]]

Clazz.newMeth(C$, 'c$$F', function (brate) {
;C$.$init$.apply(this);
if (brate <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Overall target bitrate must be a positive number"]);
}this.totbrate=brate;
}, 1);

Clazz.newMeth(C$, 'getTotBitrate$', function () {
return this.totbrate;
});

Clazz.newMeth(C$, 'getTotNumLayers$', function () {
return this.totlyrs;
});

Clazz.newMeth(C$, 'getNOptPoints$', function () {
return this.nopt + 1;
});

Clazz.newMeth(C$, 'getTargetBitrate$I', function (n) {
return (n < this.nopt) ? this.optbrate[n] : this.totbrate;
});

Clazz.newMeth(C$, 'getExtraLayers$I', function (n) {
return (n < this.nopt) ? this.extralyrs[n] : 0;
});

Clazz.newMeth(C$, 'addOptPoint$F$I', function (brate, elyrs) {
if (brate <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Target bitrate must be positive"]);
}if (elyrs < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The number of extra layers must be 0 or more"]);
}if (this.nopt > 0 && this.optbrate[this.nopt - 1] >= brate  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["New optimization point must have a target bitrate higher than the preceding one"]);
}if (this.optbrate.length == this.nopt) {
var tbr=this.optbrate;
var tel=this.extralyrs;
this.optbrate=Clazz.array(Float.TYPE, [this.optbrate.length + 5]);
this.extralyrs=Clazz.array(Integer.TYPE, [this.extralyrs.length + 5]);
System.arraycopy$O$I$O$I$I(tbr, 0, this.optbrate, 0, this.nopt);
System.arraycopy$O$I$O$I$I(tel, 0, this.extralyrs, 0, this.nopt);
}this.optbrate[this.nopt]=brate;
this.extralyrs[this.nopt]=elyrs;
this.nopt++;
this.totlyrs+=1 + elyrs;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
