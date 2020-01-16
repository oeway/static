(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.Factor','ucar.units.BaseQuantity']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QuantityDimension", null, 'ucar.units.Dimension');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_BaseQuantity', function (baseQuantity) {
;C$.superclazz.c$$ucar_units_Factor.apply(this,[Clazz.new_($I$(1,1).c$$ucar_units_Base,[baseQuantity])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_FactorA', function (factors) {
;C$.superclazz.c$$ucar_units_FactorA.apply(this,[factors]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'multiplyBy$ucar_units_QuantityDimension', function (that) {
return Clazz.new_(C$.c$$ucar_units_FactorA,[this.mult$ucar_units_Dimension(that)]);
});

Clazz.newMeth(C$, 'divideBy$ucar_units_QuantityDimension', function (that) {
return this.multiplyBy$ucar_units_QuantityDimension(that.raiseTo$I(-1));
});

Clazz.newMeth(C$, 'raiseTo$I', function (power) {
return Clazz.new_(C$.c$$ucar_units_FactorA,[this.pow$I(power)]);
});

Clazz.newMeth(C$, 'main$SA', function (args) {
System.out.println$S("new QuantityDimension() = \"" + Clazz.new_(C$) + '\"' );
var timeDimension=Clazz.new_(C$.c$$ucar_units_BaseQuantity,[$I$(2).TIME]);
System.out.println$S("timeDimension = \"" + timeDimension + '\"' );
var lengthDimension=Clazz.new_(C$.c$$ucar_units_BaseQuantity,[$I$(2).LENGTH]);
System.out.println$S("lengthDimension = \"" + lengthDimension + '\"' );
System.out.println$S("lengthDimension.isReciprocalOf(timeDimension) = \"" + lengthDimension.isReciprocalOf$ucar_units_Dimension(timeDimension) + '\"' );
var hertzDimension=timeDimension.raiseTo$I(-1);
System.out.println$S("hertzDimension = \"" + hertzDimension + '\"' );
System.out.println$S("hertzDimension.isReciprocalOf(timeDimension) = \"" + hertzDimension.isReciprocalOf$ucar_units_Dimension(timeDimension) + '\"' );
System.out.println$S("lengthDimension.divideBy(timeDimension) = \"" + lengthDimension.divideBy$ucar_units_QuantityDimension(timeDimension) + '\"' );
System.out.println$S("lengthDimension.divideBy(timeDimension).raiseTo(2) = \"" + lengthDimension.divideBy$ucar_units_QuantityDimension(timeDimension).raiseTo$I(2) + '\"' );
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
