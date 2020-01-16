(function(){var P$=Clazz.newPackage("org.rcsb.cif.api"),I$=[[0,'java.util.ArrayList','org.rcsb.cif.model.ModelFactory','org.rcsb.cif.model.generated.AtomSite','org.rcsb.cif.model.generated.AtomSiteAnisotrop','org.rcsb.cif.model.generated.AtomSites','org.rcsb.cif.model.generated.AtomSitesAlt','org.rcsb.cif.model.generated.AtomSitesAltEns','org.rcsb.cif.model.generated.AtomSitesAltGen','org.rcsb.cif.model.generated.AtomSitesFootnote','org.rcsb.cif.model.generated.AtomType','org.rcsb.cif.model.generated.Audit','org.rcsb.cif.model.generated.AuditAuthor','org.rcsb.cif.model.generated.AuditConform','org.rcsb.cif.model.generated.AuditContactAuthor','org.rcsb.cif.model.generated.Cell','org.rcsb.cif.model.generated.CellMeasurement','org.rcsb.cif.model.generated.CellMeasurementRefln','org.rcsb.cif.model.generated.ChemComp','org.rcsb.cif.model.generated.ChemCompAngle','org.rcsb.cif.model.generated.ChemCompAtom','org.rcsb.cif.model.generated.ChemCompBond','org.rcsb.cif.model.generated.ChemCompChir','org.rcsb.cif.model.generated.ChemCompChirAtom','org.rcsb.cif.model.generated.ChemCompLink','org.rcsb.cif.model.generated.ChemCompPlane','org.rcsb.cif.model.generated.ChemCompPlaneAtom','org.rcsb.cif.model.generated.ChemCompTor','org.rcsb.cif.model.generated.ChemCompTorValue','org.rcsb.cif.model.generated.ChemLink','org.rcsb.cif.model.generated.ChemLinkAngle','org.rcsb.cif.model.generated.ChemLinkBond','org.rcsb.cif.model.generated.ChemLinkChir','org.rcsb.cif.model.generated.ChemLinkChirAtom','org.rcsb.cif.model.generated.ChemLinkPlane','org.rcsb.cif.model.generated.ChemLinkPlaneAtom','org.rcsb.cif.model.generated.ChemLinkTor','org.rcsb.cif.model.generated.ChemLinkTorValue','org.rcsb.cif.model.generated.Chemical','org.rcsb.cif.model.generated.ChemicalConnAtom','org.rcsb.cif.model.generated.ChemicalConnBond','org.rcsb.cif.model.generated.ChemicalFormula','org.rcsb.cif.model.generated.Citation','org.rcsb.cif.model.generated.CitationAuthor','org.rcsb.cif.model.generated.CitationEditor','org.rcsb.cif.model.generated.Computing','org.rcsb.cif.model.generated.Database','org.rcsb.cif.model.generated.Database2','org.rcsb.cif.model.generated.DatabasePDBCaveat','org.rcsb.cif.model.generated.DatabasePDBMatrix','org.rcsb.cif.model.generated.DatabasePDBRemark','org.rcsb.cif.model.generated.DatabasePDBRev','org.rcsb.cif.model.generated.DatabasePDBRevRecord','org.rcsb.cif.model.generated.DatabasePDBTvect','org.rcsb.cif.model.generated.Diffrn','org.rcsb.cif.model.generated.DiffrnAttenuator','org.rcsb.cif.model.generated.DiffrnDetector','org.rcsb.cif.model.generated.DiffrnMeasurement','org.rcsb.cif.model.generated.DiffrnOrientMatrix','org.rcsb.cif.model.generated.DiffrnOrientRefln','org.rcsb.cif.model.generated.DiffrnRadiation','org.rcsb.cif.model.generated.DiffrnRadiationWavelength','org.rcsb.cif.model.generated.DiffrnRefln','org.rcsb.cif.model.generated.DiffrnReflns','org.rcsb.cif.model.generated.DiffrnScaleGroup','org.rcsb.cif.model.generated.DiffrnSource','org.rcsb.cif.model.generated.DiffrnStandardRefln','org.rcsb.cif.model.generated.DiffrnStandards','org.rcsb.cif.model.generated.Entity','org.rcsb.cif.model.generated.EntityKeywords','org.rcsb.cif.model.generated.EntityLink','org.rcsb.cif.model.generated.EntityNameCom','org.rcsb.cif.model.generated.EntityNameSys','org.rcsb.cif.model.generated.EntityPoly','org.rcsb.cif.model.generated.EntityPolySeq','org.rcsb.cif.model.generated.Entry','org.rcsb.cif.model.generated.EntryLink','org.rcsb.cif.model.generated.Exptl','org.rcsb.cif.model.generated.ExptlCrystal','org.rcsb.cif.model.generated.ExptlCrystalFace','org.rcsb.cif.model.generated.ExptlCrystalGrow','org.rcsb.cif.model.generated.ExptlCrystalGrowComp','org.rcsb.cif.model.generated.Geom','org.rcsb.cif.model.generated.GeomAngle','org.rcsb.cif.model.generated.GeomBond','org.rcsb.cif.model.generated.GeomContact','org.rcsb.cif.model.generated.GeomHbond','org.rcsb.cif.model.generated.GeomTorsion','org.rcsb.cif.model.generated.Journal','org.rcsb.cif.model.generated.JournalIndex','org.rcsb.cif.model.generated.Phasing','org.rcsb.cif.model.generated.PhasingAveraging','org.rcsb.cif.model.generated.PhasingIsomorphous','org.rcsb.cif.model.generated.PhasingMAD','org.rcsb.cif.model.generated.PhasingMADClust','org.rcsb.cif.model.generated.PhasingMADExpt','org.rcsb.cif.model.generated.PhasingMADRatio','org.rcsb.cif.model.generated.PhasingMADSet','org.rcsb.cif.model.generated.PhasingMIR','org.rcsb.cif.model.generated.PhasingMIRDer','org.rcsb.cif.model.generated.PhasingMIRDerRefln','org.rcsb.cif.model.generated.PhasingMIRDerShell','org.rcsb.cif.model.generated.PhasingMIRDerSite','org.rcsb.cif.model.generated.PhasingMIRShell','org.rcsb.cif.model.generated.PhasingSet','org.rcsb.cif.model.generated.PhasingSetRefln','org.rcsb.cif.model.generated.Publ','org.rcsb.cif.model.generated.PublAuthor','org.rcsb.cif.model.generated.PublBody','org.rcsb.cif.model.generated.PublManuscriptIncl','org.rcsb.cif.model.generated.Refine','org.rcsb.cif.model.generated.RefineAnalyze','org.rcsb.cif.model.generated.RefineBIso','org.rcsb.cif.model.generated.RefineFunctMinimized','org.rcsb.cif.model.generated.RefineHist','org.rcsb.cif.model.generated.RefineLsRestr','org.rcsb.cif.model.generated.RefineLsRestrNcs','org.rcsb.cif.model.generated.RefineLsRestrType','org.rcsb.cif.model.generated.RefineLsShell','org.rcsb.cif.model.generated.RefineOccupancy','org.rcsb.cif.model.generated.Refln','org.rcsb.cif.model.generated.ReflnSysAbs','org.rcsb.cif.model.generated.Reflns','org.rcsb.cif.model.generated.ReflnsScale','org.rcsb.cif.model.generated.ReflnsShell','org.rcsb.cif.model.generated.Software','org.rcsb.cif.model.generated.Struct','org.rcsb.cif.model.generated.StructAsym','org.rcsb.cif.model.generated.StructBiol','org.rcsb.cif.model.generated.StructBiolGen','org.rcsb.cif.model.generated.StructBiolKeywords','org.rcsb.cif.model.generated.StructBiolView','org.rcsb.cif.model.generated.StructConf','org.rcsb.cif.model.generated.StructConfType','org.rcsb.cif.model.generated.StructConn','org.rcsb.cif.model.generated.StructConnType','org.rcsb.cif.model.generated.StructKeywords','org.rcsb.cif.model.generated.StructMonDetails','org.rcsb.cif.model.generated.StructMonNucl','org.rcsb.cif.model.generated.StructMonProt','org.rcsb.cif.model.generated.StructMonProtCis','org.rcsb.cif.model.generated.StructNcsDom','org.rcsb.cif.model.generated.StructNcsDomLim','org.rcsb.cif.model.generated.StructNcsEns','org.rcsb.cif.model.generated.StructNcsEnsGen','org.rcsb.cif.model.generated.StructNcsOper','org.rcsb.cif.model.generated.StructRef','org.rcsb.cif.model.generated.StructRefSeq','org.rcsb.cif.model.generated.StructRefSeqDif','org.rcsb.cif.model.generated.StructSheet','org.rcsb.cif.model.generated.StructSheetHbond','org.rcsb.cif.model.generated.StructSheetOrder','org.rcsb.cif.model.generated.StructSheetRange','org.rcsb.cif.model.generated.StructSheetTopology','org.rcsb.cif.model.generated.StructSite','org.rcsb.cif.model.generated.StructSiteGen','org.rcsb.cif.model.generated.StructSiteKeywords','org.rcsb.cif.model.generated.StructSiteView','org.rcsb.cif.model.generated.Symmetry','org.rcsb.cif.model.generated.SymmetryEquiv','org.rcsb.cif.model.generated.AuditLink','org.rcsb.cif.model.generated.DiffrnReflnsClass','org.rcsb.cif.model.generated.RefineLsClass','org.rcsb.cif.model.generated.ReflnsClass','org.rcsb.cif.model.generated.SpaceGroup','org.rcsb.cif.model.generated.SpaceGroupSymop','org.rcsb.cif.model.generated.ValenceParam','org.rcsb.cif.model.generated.ValenceRef','org.rcsb.cif.model.generated.PdbxAudit','org.rcsb.cif.model.generated.PdbxVersion','org.rcsb.cif.model.generated.PdbxAuditAuthor','org.rcsb.cif.model.generated.PdbxDatabaseMessage','org.rcsb.cif.model.generated.PdbxDatabasePDBObsSpr','org.rcsb.cif.model.generated.PdbxDatabaseProc','org.rcsb.cif.model.generated.PdbxDatabaseRemark','org.rcsb.cif.model.generated.PdbxDatabaseStatus','org.rcsb.cif.model.generated.PdbxEntityName','org.rcsb.cif.model.generated.PdbxPrereleaseSeq','org.rcsb.cif.model.generated.PdbxPolySeqScheme','org.rcsb.cif.model.generated.PdbxNonpolyScheme','org.rcsb.cif.model.generated.PdbxRefine','org.rcsb.cif.model.generated.PdbxStructSheetHbond','org.rcsb.cif.model.generated.PdbxXplorFile','org.rcsb.cif.model.generated.PdbxRefineAuxFile','org.rcsb.cif.model.generated.PdbxDatabaseRelated','org.rcsb.cif.model.generated.PdbxEntityAssembly','org.rcsb.cif.model.generated.PdbxExptlCrystalGrowComp','org.rcsb.cif.model.generated.PdbxExptlCrystalGrowSol','org.rcsb.cif.model.generated.PdbxExptlCrystalCryoTreatment','org.rcsb.cif.model.generated.PdbxRefineTls','org.rcsb.cif.model.generated.PdbxRefineTlsGroup','org.rcsb.cif.model.generated.PdbxContactAuthor','org.rcsb.cif.model.generated.PdbxSGProject','org.rcsb.cif.model.generated.PdbxAtomSiteAnisoTls','org.rcsb.cif.model.generated.PdbxNmrDetails','org.rcsb.cif.model.generated.PdbxNmrSampleDetails','org.rcsb.cif.model.generated.PdbxNmrExptlSample','org.rcsb.cif.model.generated.PdbxNmrExptlSampleConditions','org.rcsb.cif.model.generated.PdbxNmrSpectrometer','org.rcsb.cif.model.generated.PdbxNmrExptl','org.rcsb.cif.model.generated.PdbxNmrSoftware','org.rcsb.cif.model.generated.PdbxNmrConstraints','org.rcsb.cif.model.generated.PdbxNmrEnsemble','org.rcsb.cif.model.generated.PdbxNmrEnsembleRms','org.rcsb.cif.model.generated.PdbxNmrRepresentative','org.rcsb.cif.model.generated.PdbxNmrRefine','org.rcsb.cif.model.generated.PdbxNmrForceConstants','org.rcsb.cif.model.generated.NdbStructConfNa','org.rcsb.cif.model.generated.NdbStructFeatureNa','org.rcsb.cif.model.generated.NdbStructNaBasePair','org.rcsb.cif.model.generated.NdbStructNaBasePairStep','org.rcsb.cif.model.generated.NdbOriginalNdbCoordinates','org.rcsb.cif.model.generated.PdbxEntityNonpoly','org.rcsb.cif.model.generated.PdbxPhasingDm','org.rcsb.cif.model.generated.PdbxPhasingDmShell','org.rcsb.cif.model.generated.PdbxPhasingMADShell','org.rcsb.cif.model.generated.PdbxPhasingMADSet','org.rcsb.cif.model.generated.PdbxPhasingMADSetShell','org.rcsb.cif.model.generated.PdbxPhasingMADSetSite','org.rcsb.cif.model.generated.PdbxPhasingMR','org.rcsb.cif.model.generated.PdbxRefineComponent','org.rcsb.cif.model.generated.PdbxEntityProdProtocol','org.rcsb.cif.model.generated.PdbxEntitySrcGenProdOther','org.rcsb.cif.model.generated.PdbxEntitySrcGenProdOtherParameter','org.rcsb.cif.model.generated.PdbxEntitySrcGenProdPcr','org.rcsb.cif.model.generated.PdbxEntitySrcGenProdDigest','org.rcsb.cif.model.generated.PdbxEntitySrcGenClone','org.rcsb.cif.model.generated.PdbxEntitySrcGenCloneLigation','org.rcsb.cif.model.generated.PdbxEntitySrcGenCloneRecombination','org.rcsb.cif.model.generated.PdbxEntitySrcGenExpress','org.rcsb.cif.model.generated.PdbxEntitySrcGenExpressTimepoint','org.rcsb.cif.model.generated.PdbxEntitySrcGenLysis','org.rcsb.cif.model.generated.PdbxEntitySrcGenRefold','org.rcsb.cif.model.generated.PdbxEntitySrcGenProteolysis','org.rcsb.cif.model.generated.PdbxEntitySrcGenChrom','org.rcsb.cif.model.generated.PdbxEntitySrcGenFract','org.rcsb.cif.model.generated.PdbxEntitySrcGenPure','org.rcsb.cif.model.generated.PdbxEntitySrcGenCharacter','org.rcsb.cif.model.generated.PdbxConstruct','org.rcsb.cif.model.generated.PdbxConstructFeature','org.rcsb.cif.model.generated.PdbxRobotSystem','org.rcsb.cif.model.generated.PdbxBuffer','org.rcsb.cif.model.generated.PdbxBufferComponents','org.rcsb.cif.model.generated.PdbxDomain','org.rcsb.cif.model.generated.PdbxDomainRange','org.rcsb.cif.model.generated.PdbxSequenceRange','org.rcsb.cif.model.generated.PdbxFeatureEntry','org.rcsb.cif.model.generated.PdbxFeatureDomain','org.rcsb.cif.model.generated.PdbxFeatureSequenceRange','org.rcsb.cif.model.generated.PdbxFeatureAssembly','org.rcsb.cif.model.generated.PdbxFeatureMonomer','org.rcsb.cif.model.generated.PdbxExptlPd','org.rcsb.cif.model.generated.PdbxReflnsTwin','org.rcsb.cif.model.generated.PdbxStructInfo','org.rcsb.cif.model.generated.PdbxReRefinement','org.rcsb.cif.model.generated.PdbxStructAssemblyProp','org.rcsb.cif.model.generated.PdbxStructRefSeqFeature','org.rcsb.cif.model.generated.PdbxStructRefSeqFeatureProp','org.rcsb.cif.model.generated.PdbxStructChemCompDiagnostics','org.rcsb.cif.model.generated.PdbxChemCompFeature','org.rcsb.cif.model.generated.PdbxCoordinateModel','org.rcsb.cif.model.generated.PdbxStructChemCompFeature','org.rcsb.cif.model.generated.PdbxDiffrnReflnsShell','org.rcsb.cif.model.generated.PdbxBondDistanceLimits','org.rcsb.cif.model.generated.PdbxSolnScatter','org.rcsb.cif.model.generated.PdbxSolnScatterModel','org.rcsb.cif.model.generated.PdbxChemCompDescriptor','org.rcsb.cif.model.generated.PdbxChemCompIdentifier','org.rcsb.cif.model.generated.PdbxChemCompImport','org.rcsb.cif.model.generated.PdbxChemCompAtomEdit','org.rcsb.cif.model.generated.PdbxChemCompBondEdit','org.rcsb.cif.model.generated.PdbxChemCompAudit','org.rcsb.cif.model.generated.PdbxValidateCloseContact','org.rcsb.cif.model.generated.PdbxValidateSymmContact','org.rcsb.cif.model.generated.PdbxValidateRmsdBond','org.rcsb.cif.model.generated.PdbxValidateRmsdAngle','org.rcsb.cif.model.generated.PdbxValidateTorsion','org.rcsb.cif.model.generated.PdbxValidatePeptideOmega','org.rcsb.cif.model.generated.PdbxValidateChiral','org.rcsb.cif.model.generated.PdbxValidatePlanes','org.rcsb.cif.model.generated.PdbxValidatePlanesAtom','org.rcsb.cif.model.generated.PdbxValidateMainChainPlane','org.rcsb.cif.model.generated.PdbxStructConnAngle','org.rcsb.cif.model.generated.PdbxUnobsOrZeroOccResidues','org.rcsb.cif.model.generated.PdbxUnobsOrZeroOccAtoms','org.rcsb.cif.model.generated.PdbxEntryDetails','org.rcsb.cif.model.generated.PdbxStructModResidue','org.rcsb.cif.model.generated.PdbxStructRefSeqInsertion','org.rcsb.cif.model.generated.PdbxStructRefSeqDeletion','org.rcsb.cif.model.generated.PdbxRemediationAtomSiteMapping','org.rcsb.cif.model.generated.PdbxValidatePolymerLinkage','org.rcsb.cif.model.generated.PdbxHelicalSymmetry','org.rcsb.cif.model.generated.PdbxPointSymmetry','org.rcsb.cif.model.generated.PdbxStructEntityInst','org.rcsb.cif.model.generated.PdbxStructOperList','org.rcsb.cif.model.generated.PdbxStructAssembly','org.rcsb.cif.model.generated.PdbxStructAssemblyGen','org.rcsb.cif.model.generated.PdbxStructAsymGen','org.rcsb.cif.model.generated.PdbxStructMsymGen','org.rcsb.cif.model.generated.PdbxStructLegacyOperList','org.rcsb.cif.model.generated.PdbxChemCompAtomFeature','org.rcsb.cif.model.generated.PdbxReferenceMoleculeFamily','org.rcsb.cif.model.generated.PdbxReferenceMoleculeList','org.rcsb.cif.model.generated.PdbxReferenceMolecule','org.rcsb.cif.model.generated.PdbxReferenceEntityList','org.rcsb.cif.model.generated.PdbxReferenceEntityNonpoly','org.rcsb.cif.model.generated.PdbxReferenceEntityLink','org.rcsb.cif.model.generated.PdbxReferenceEntityPolyLink','org.rcsb.cif.model.generated.PdbxReferenceEntityPoly','org.rcsb.cif.model.generated.PdbxReferenceEntityPolySeq','org.rcsb.cif.model.generated.PdbxReferenceEntitySequence','org.rcsb.cif.model.generated.PdbxReferenceEntitySrcNat','org.rcsb.cif.model.generated.PdbxReferenceMoleculeDetails','org.rcsb.cif.model.generated.PdbxReferenceMoleculeSynonyms','org.rcsb.cif.model.generated.PdbxReferenceEntitySubcomponents','org.rcsb.cif.model.generated.PdbxReferenceMoleculeAnnotation','org.rcsb.cif.model.generated.PdbxReferenceMoleculeFeatures','org.rcsb.cif.model.generated.PdbxReferenceMoleculeRelatedStructures','org.rcsb.cif.model.generated.PdbxStructGroupList','org.rcsb.cif.model.generated.PdbxStructGroupComponents','org.rcsb.cif.model.generated.PdbxStructGroupComponentRange','org.rcsb.cif.model.generated.PdbxPrdAudit','org.rcsb.cif.model.generated.PdbxFamilyPrdAudit','org.rcsb.cif.model.generated.PdbxMolecule','org.rcsb.cif.model.generated.PdbxMoleculeFeatures','org.rcsb.cif.model.generated.PdbxFamilyGroupIndex','org.rcsb.cif.model.generated.PdbxDistantSolventAtoms','org.rcsb.cif.model.generated.PdbxStructSpecialSymmetry','org.rcsb.cif.model.generated.PdbxReferencePublicationList','org.rcsb.cif.model.generated.PdbxNmrAssignedChemShiftList','org.rcsb.cif.model.generated.PdbxNmrChemShiftExperiment','org.rcsb.cif.model.generated.PdbxNmrChemShiftRef','org.rcsb.cif.model.generated.PdbxNmrChemShiftReference','org.rcsb.cif.model.generated.PdbxNmrChemShiftSoftware','org.rcsb.cif.model.generated.PdbxNmrConstraintFile','org.rcsb.cif.model.generated.PdbxNmrSoftwareTask','org.rcsb.cif.model.generated.PdbxNmrSpectralDim','org.rcsb.cif.model.generated.PdbxNmrSpectralPeakList','org.rcsb.cif.model.generated.PdbxNmrSpectralPeakSoftware','org.rcsb.cif.model.generated.PdbxNmrSystematicChemShiftOffset','org.rcsb.cif.model.generated.PdbxNmrUpload','org.rcsb.cif.model.generated.PdbxAuditSupport','org.rcsb.cif.model.generated.PdbxChemCompSubcomponentStructConn','org.rcsb.cif.model.generated.PdbxChemCompSubcomponentEntityList','org.rcsb.cif.model.generated.EntitySrcNat','org.rcsb.cif.model.generated.EntitySrcGen','org.rcsb.cif.model.generated.PdbxEntitySrcSyn','org.rcsb.cif.model.generated.PdbxEntityPolyCompLinkList','org.rcsb.cif.model.generated.PdbxLinkedEntity','org.rcsb.cif.model.generated.PdbxLinkedEntityInstanceList','org.rcsb.cif.model.generated.PdbxLinkedEntityList','org.rcsb.cif.model.generated.PdbxLinkedEntityLinkList','org.rcsb.cif.model.generated.PdbxEntityDescriptor','org.rcsb.cif.model.generated.PdbxReferenceLinkedEntity','org.rcsb.cif.model.generated.PdbxReferenceLinkedEntityCompList','org.rcsb.cif.model.generated.PdbxReferenceLinkedEntityCompLink','org.rcsb.cif.model.generated.PdbxReferenceLinkedEntityLink','org.rcsb.cif.model.generated.PdbxRelatedExpDataSet','org.rcsb.cif.model.generated.PdbxDatabaseStatusHistory','org.rcsb.cif.model.generated.EmAssembly','org.rcsb.cif.model.generated.EmEntityAssembly','org.rcsb.cif.model.generated.EmVirusEntity','org.rcsb.cif.model.generated.EmSamplePreparation','org.rcsb.cif.model.generated.EmSampleSupport','org.rcsb.cif.model.generated.EmBuffer','org.rcsb.cif.model.generated.EmVitrification','org.rcsb.cif.model.generated.EmImaging','org.rcsb.cif.model.generated.EmDetector','org.rcsb.cif.model.generated.EmImageScans','org.rcsb.cif.model.generated.Em2dProjectionSelection','org.rcsb.cif.model.generated.Em3dReconstruction','org.rcsb.cif.model.generated.Em3dFitting','org.rcsb.cif.model.generated.Em3dFittingList','org.rcsb.cif.model.generated.EmHelicalEntity','org.rcsb.cif.model.generated.EmExperiment','org.rcsb.cif.model.generated.EmSingleParticleEntity','org.rcsb.cif.model.generated.EmAdmin','org.rcsb.cif.model.generated.EmAuthorList','org.rcsb.cif.model.generated.EmDbReference','org.rcsb.cif.model.generated.EmDbReferenceAuxiliary','org.rcsb.cif.model.generated.EmDepui','org.rcsb.cif.model.generated.EmObsolete','org.rcsb.cif.model.generated.EmSupersede','org.rcsb.cif.model.generated.EmEntityAssemblyMolwt','org.rcsb.cif.model.generated.EmEntityAssemblyNaturalsource','org.rcsb.cif.model.generated.EmEntityAssemblyRecombinant','org.rcsb.cif.model.generated.EmVirusNaturalHost','org.rcsb.cif.model.generated.EmVirusShell','org.rcsb.cif.model.generated.EmSpecimen','org.rcsb.cif.model.generated.EmEmbedding','org.rcsb.cif.model.generated.EmFiducialMarkers','org.rcsb.cif.model.generated.EmFocusedIonBeam','org.rcsb.cif.model.generated.EmGridPretreatment','org.rcsb.cif.model.generated.EmUltramicrotomy','org.rcsb.cif.model.generated.EmHighPressureFreezing','org.rcsb.cif.model.generated.EmShadowing','org.rcsb.cif.model.generated.EmTomographySpecimen','org.rcsb.cif.model.generated.EmCrystalFormation','org.rcsb.cif.model.generated.EmStaining','org.rcsb.cif.model.generated.EmSupportFilm','org.rcsb.cif.model.generated.EmBufferComponent','org.rcsb.cif.model.generated.EmDiffraction','org.rcsb.cif.model.generated.EmDiffractionShell','org.rcsb.cif.model.generated.EmDiffractionStats','org.rcsb.cif.model.generated.EmTomography','org.rcsb.cif.model.generated.EmImageRecording','org.rcsb.cif.model.generated.EmImagingOptics','org.rcsb.cif.model.generated.EmFinalClassification','org.rcsb.cif.model.generated.EmStartModel','org.rcsb.cif.model.generated.EmSoftware','org.rcsb.cif.model.generated.EmEulerAngleAssignment','org.rcsb.cif.model.generated.EmCtfCorrection','org.rcsb.cif.model.generated.EmVolumeSelection','org.rcsb.cif.model.generated.Em3dCrystalEntity','org.rcsb.cif.model.generated.Em2dCrystalEntity','org.rcsb.cif.model.generated.EmImageProcessing','org.rcsb.cif.model.generated.EmParticleSelection','org.rcsb.cif.model.generated.EmMap','org.rcsb.cif.model.generated.EmFscCurve','org.rcsb.cif.model.generated.EmInterpretFigure','org.rcsb.cif.model.generated.EmLayerLines','org.rcsb.cif.model.generated.EmStructureFactors','org.rcsb.cif.model.generated.EmDepositorInfo','org.rcsb.cif.model.generated.EmMapDepositorInfo','org.rcsb.cif.model.generated.EmMaskDepositorInfo','org.rcsb.cif.model.generated.EmFigureDepositorInfo','org.rcsb.cif.model.generated.EmLayerLinesDepositorInfo','org.rcsb.cif.model.generated.EmStructureFactorsDepositorInfo','org.rcsb.cif.model.generated.PdbxSeqMapDepositorInfo','org.rcsb.cif.model.generated.PdbxChemCompDepositorInfo','org.rcsb.cif.model.generated.PdbxStructRefSeqDepositorInfo','org.rcsb.cif.model.generated.PdbxStructRefSeqDifDepositorInfo','org.rcsb.cif.model.generated.PdbxStructAssemblyPropDepositorInfo','org.rcsb.cif.model.generated.PdbxStructAssemblyDepositorInfo','org.rcsb.cif.model.generated.PdbxStructAssemblyGenDepositorInfo','org.rcsb.cif.model.generated.PdbxStructOperListDepositorInfo','org.rcsb.cif.model.generated.PdbxPointSymmetryDepositorInfo','org.rcsb.cif.model.generated.PdbxHelicalSymmetryDepositorInfo','org.rcsb.cif.model.generated.PdbxStructAssemblyAuthEvidenceDepositorInfo','org.rcsb.cif.model.generated.PdbxSolventAtomSiteMapping','org.rcsb.cif.model.generated.PdbxMoleculeFeaturesDepositorInfo','org.rcsb.cif.model.generated.PdbxChemCompInstanceDepositorInfo','org.rcsb.cif.model.generated.PdbxDepuiStatusFlags','org.rcsb.cif.model.generated.PdbxDepuiUpload','org.rcsb.cif.model.generated.PdbxDepuiValidationStatusFlags','org.rcsb.cif.model.generated.PdbxChemCompUploadDepositorInfo','org.rcsb.cif.model.generated.PdbxDepuiEntityStatusFlags','org.rcsb.cif.model.generated.PdbxDepuiEntityFeatures','org.rcsb.cif.model.generated.PdbxDepositionMessageInfo','org.rcsb.cif.model.generated.PdbxDepositionMessageFileReference','org.rcsb.cif.model.generated.PdbxDepuiEntryDetails','org.rcsb.cif.model.generated.PdbxDataProcessingStatus','org.rcsb.cif.model.generated.PdbxEntityInstanceFeature','org.rcsb.cif.model.generated.PdbxEntitySrcGenDepositorInfo','org.rcsb.cif.model.generated.PdbxChemCompModel','org.rcsb.cif.model.generated.PdbxChemCompModelAtom','org.rcsb.cif.model.generated.PdbxChemCompModelBond','org.rcsb.cif.model.generated.PdbxChemCompModelFeature','org.rcsb.cif.model.generated.PdbxChemCompModelDescriptor','org.rcsb.cif.model.generated.PdbxChemCompModelAudit','org.rcsb.cif.model.generated.PdbxChemCompModelReference','org.rcsb.cif.model.generated.PdbxViewCategoryGroup','org.rcsb.cif.model.generated.PdbxViewCategory','org.rcsb.cif.model.generated.PdbxViewItem','org.rcsb.cif.model.generated.PdbxCoord','org.rcsb.cif.model.generated.PdbxConnect','org.rcsb.cif.model.generated.PdbxConnectType','org.rcsb.cif.model.generated.PdbxConnectModification','org.rcsb.cif.model.generated.PdbxConnectAtom','org.rcsb.cif.model.generated.PdbxDatabasePDBMaster','org.rcsb.cif.model.generated.PdbxDatabasePdbOmit','org.rcsb.cif.model.generated.PdbxDbref','org.rcsb.cif.model.generated.PdbxDrugInfo','org.rcsb.cif.model.generated.PdbxInhibitorInfo','org.rcsb.cif.model.generated.PdbxIonInfo','org.rcsb.cif.model.generated.PdbxHybrid','org.rcsb.cif.model.generated.PdbxNaStrandInfo','org.rcsb.cif.model.generated.PdbxNonstandardList','org.rcsb.cif.model.generated.PdbxPdbCompnd','org.rcsb.cif.model.generated.PdbxPdbSource','org.rcsb.cif.model.generated.PdbxProteinInfo','org.rcsb.cif.model.generated.PdbxSolventInfo','org.rcsb.cif.model.generated.PdbxSource','org.rcsb.cif.model.generated.PdbxStructBiolFunc','org.rcsb.cif.model.generated.PdbxStructPackGen','org.rcsb.cif.model.generated.PdbxTrnaInfo','org.rcsb.cif.model.generated.PdbxUnpair','org.rcsb.cif.model.generated.PdbxRefineLsRestrNcs','org.rcsb.cif.model.generated.PdbxStructNcsVirusGen','org.rcsb.cif.model.generated.PdbxSequenceAnnotation','org.rcsb.cif.model.generated.PdbxPostProcessDetails','org.rcsb.cif.model.generated.PdbxPostProcessStatus','org.rcsb.cif.model.generated.PdbxStructLink','org.rcsb.cif.model.generated.PdbxMissingResidueList','org.rcsb.cif.model.generated.PdbxDataProcessingCell','org.rcsb.cif.model.generated.PdbxDataProcessingReflns','org.rcsb.cif.model.generated.PdbxDataProcessingDetector','org.rcsb.cif.model.generated.PdbxChemCompNonstandard','org.rcsb.cif.model.generated.PdbxEntityPolyProteinClass','org.rcsb.cif.model.generated.PdbxEntityNameTaxonomyTree','org.rcsb.cif.model.generated.PdbxEntityNameTaxonomy','org.rcsb.cif.model.generated.PdbxEntityNameInstance','org.rcsb.cif.model.generated.PdbxTableinfo','org.rcsb.cif.model.generated.PdbxColumninfo','org.rcsb.cif.model.generated.PdbxValAngle','org.rcsb.cif.model.generated.PdbxValBond','org.rcsb.cif.model.generated.PdbxValContact','org.rcsb.cif.model.generated.PdbxValSymContact','org.rcsb.cif.model.generated.PdbxRmchOutlier','org.rcsb.cif.model.generated.PdbxMissingAtomPoly','org.rcsb.cif.model.generated.PdbxMissingAtomNonpoly','org.rcsb.cif.model.generated.PdbxValChiral','org.rcsb.cif.model.generated.PdbxAtlas','org.rcsb.cif.model.generated.PdbxSummaryFlags','org.rcsb.cif.model.generated.PdbxEntityFuncBindMode','org.rcsb.cif.model.generated.PdbxEntityFuncEnzyme','org.rcsb.cif.model.generated.PdbxEntityFuncRegulatory','org.rcsb.cif.model.generated.PdbxEntityFuncStructural','org.rcsb.cif.model.generated.PdbxEntityFuncOther','org.rcsb.cif.model.generated.PdbxEntityPolyDomain','org.rcsb.cif.model.generated.PdbxNaStructKeywds','org.rcsb.cif.model.generated.PdbxEntityPolyNaType','org.rcsb.cif.model.generated.PdbxEntityPolyNaNonstandard','org.rcsb.cif.model.generated.PdbxVirtualAngle','org.rcsb.cif.model.generated.PdbxVirtualBond','org.rcsb.cif.model.generated.PdbxVirtualTorsion','org.rcsb.cif.model.generated.PdbxSequencePattern','org.rcsb.cif.model.generated.PdbxStereochemistry','org.rcsb.cif.model.generated.PdbxRmsDevsCovalent','org.rcsb.cif.model.generated.PdbxRmsDevsCovByMonomer','org.rcsb.cif.model.generated.PdbxSugarPhosphateGeometry','org.rcsb.cif.model.generated.PdbxNmrComputing','org.rcsb.cif.model.generated.PdbxAuditConformExtension','org.rcsb.cif.model.generated.PdbxDccMapman','org.rcsb.cif.model.generated.PdbxDccRsccMapman','org.rcsb.cif.model.generated.PdbxDccRsccMapmanOverall','org.rcsb.cif.model.generated.PdbxDccDensity','org.rcsb.cif.model.generated.PdbxDccGeometry','org.rcsb.cif.model.generated.PdbxDccDensityCorr','org.rcsb.cif.model.generated.PdbxDccMap','org.rcsb.cif.model.generated.PdbxDepositGroup','org.rcsb.cif.model.generated.PdbxDepositGroupIndex','org.rcsb.cif.model.generated.PdbxStructAssemblyAuthEvidence','org.rcsb.cif.model.generated.PdbxStructAssemblyAuthClassification','org.rcsb.cif.model.generated.PdbxCrystalAlignment','org.rcsb.cif.model.generated.PdbxAuditRevisionHistory','org.rcsb.cif.model.generated.PdbxAuditRevisionGroup','org.rcsb.cif.model.generated.PdbxAuditRevisionCategory','org.rcsb.cif.model.generated.PdbxAuditRevisionDetails','org.rcsb.cif.model.generated.PdbxAuditRevisionItem','org.rcsb.cif.model.generated.PdbxSupportingExpDataSet','org.rcsb.cif.model.generated.PdbxSerialCrystallographyMeasurement','org.rcsb.cif.model.generated.PdbxSerialCrystallographySampleDelivery','org.rcsb.cif.model.generated.PdbxSerialCrystallographySampleDeliveryInjection','org.rcsb.cif.model.generated.PdbxSerialCrystallographySampleDeliveryFixedTarget','org.rcsb.cif.model.generated.PdbxSerialCrystallographyDataReduction','org.rcsb.cif.model.generated.PdbxChemCompSynonyms','org.rcsb.cif.model.generated.PdbxChemCompRelated','org.rcsb.cif.model.generated.PdbxChemCompAtomRelated','org.rcsb.cif.model.generated.PdbxEntityBranchList','org.rcsb.cif.model.generated.PdbxEntityBranchLink','org.rcsb.cif.model.generated.PdbxEntityBranch','org.rcsb.cif.model.generated.PdbxBranchScheme','org.rcsb.cif.model.generated.IhmStartingModelDetails','org.rcsb.cif.model.generated.IhmStartingComparativeModels','org.rcsb.cif.model.generated.IhmStartingComputationalModels','org.rcsb.cif.model.generated.IhmStartingModelSeqDif','org.rcsb.cif.model.generated.IhmModelRepresentation','org.rcsb.cif.model.generated.IhmStructAssembly','org.rcsb.cif.model.generated.IhmStructAssemblyDetails','org.rcsb.cif.model.generated.IhmStructAssemblyClassList','org.rcsb.cif.model.generated.IhmStructAssemblyClass','org.rcsb.cif.model.generated.IhmModelingProtocol','org.rcsb.cif.model.generated.IhmMultiStateModeling','org.rcsb.cif.model.generated.IhmOrderedEnsemble','org.rcsb.cif.model.generated.IhmModelingPostProcess','org.rcsb.cif.model.generated.IhmEnsembleInfo','org.rcsb.cif.model.generated.IhmModelList','org.rcsb.cif.model.generated.IhmModelRepresentative','org.rcsb.cif.model.generated.IhmDatasetList','org.rcsb.cif.model.generated.IhmDatasetGroup','org.rcsb.cif.model.generated.IhmRelatedDatasets','org.rcsb.cif.model.generated.IhmDatasetRelatedDbReference','org.rcsb.cif.model.generated.IhmExternalReferenceInfo','org.rcsb.cif.model.generated.IhmExternalFiles','org.rcsb.cif.model.generated.IhmDatasetExternalReference','org.rcsb.cif.model.generated.IhmLocalizationDensityFiles','org.rcsb.cif.model.generated.IhmPredictedContactRestraint','org.rcsb.cif.model.generated.IhmHydroxylRadicalFpRestraint','org.rcsb.cif.model.generated.IhmCrossLinkList','org.rcsb.cif.model.generated.IhmCrossLinkRestraint','org.rcsb.cif.model.generated.IhmCrossLinkResult','org.rcsb.cif.model.generated.IhmCrossLinkResultParameters','org.rcsb.cif.model.generated.Ihm2demClassAverageRestraint','org.rcsb.cif.model.generated.Ihm2demClassAverageFitting','org.rcsb.cif.model.generated.Ihm3demRestraint','org.rcsb.cif.model.generated.IhmSasRestraint','org.rcsb.cif.model.generated.IhmStartingModelCoord','org.rcsb.cif.model.generated.IhmSphereObjSite','org.rcsb.cif.model.generated.IhmGaussianObjSite','org.rcsb.cif.model.generated.IhmGaussianObjEnsemble','org.rcsb.cif.model.generated.IhmResiduesNotModeled','org.rcsb.cif.model.generated.IhmFeatureList','org.rcsb.cif.model.generated.IhmPseudoSiteFeature','org.rcsb.cif.model.generated.IhmPolyAtomFeature','org.rcsb.cif.model.generated.IhmPolyResidueFeature','org.rcsb.cif.model.generated.IhmNonPolyFeature','org.rcsb.cif.model.generated.IhmInterfaceResidueFeature','org.rcsb.cif.model.generated.IhmDerivedDistanceRestraint','org.rcsb.cif.model.generated.IhmGeometricObjectList','org.rcsb.cif.model.generated.IhmGeometricObjectCenter','org.rcsb.cif.model.generated.IhmGeometricObjectTransformation','org.rcsb.cif.model.generated.IhmGeometricObjectSphere','org.rcsb.cif.model.generated.IhmGeometricObjectTorus','org.rcsb.cif.model.generated.IhmGeometricObjectHalfTorus','org.rcsb.cif.model.generated.IhmGeometricObjectAxis','org.rcsb.cif.model.generated.IhmGeometricObjectPlane','org.rcsb.cif.model.generated.IhmGeometricObjectDistanceRestraint']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseBlock", null, null, 'org.rcsb.cif.api.CifBlock');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.categories=null;
this.saveFrames=null;
this.header=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$S$java_util_List', function (categories, header, saveFrames) {
;C$.$init$.apply(this);
this.categories=categories;
this.saveFrames=saveFrames;
this.header=header;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$S', function (categories, header) {
C$.c$$java_util_Map$S$java_util_List.apply(this, [categories, header, Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'getBlockHeader$', function () {
return this.header;
});

Clazz.newMeth(C$, 'getCategory$S', function (name) {
return this.categories.computeIfAbsent$TK$java_util_function_Function(name, /*addLambdaReuse org.rcsb.cif.api.BaseBlock$lambda1*/(P$.BaseBlock$lambda1$||(P$.BaseBlock$lambda1$=((function($$){((P$.BaseBlock$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget true classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName org.rcsb.cif.model.ModelFactory*/$$.createEmptyCategory$S.apply(null,[t])});
})()
)); return Clazz.new_(P$.BaseBlock$lambda1.$init$, [this, null])})($I$(2))))));
});

Clazz.newMeth(C$, 'getCategoryNames$', function () {
return Clazz.new_($I$(1,1).c$$java_util_Collection,[this.categories.keySet$()]);
});

Clazz.newMeth(C$, 'getSaveFrames$', function () {
return this.saveFrames;
});

Clazz.newMeth(C$, 'getAtomSite$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("atom_site", ((P$.BaseBlock$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda2.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAtomSiteAnisotrop$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("atom_site_anisotrop", ((P$.BaseBlock$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(4,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda3.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAtomSites$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("atom_sites", ((P$.BaseBlock$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(5,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda4.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAtomSitesAlt$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("atom_sites_alt", ((P$.BaseBlock$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(6,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda5.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAtomSitesAltEns$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("atom_sites_alt_ens", ((P$.BaseBlock$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(7,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda6.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAtomSitesAltGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("atom_sites_alt_gen", ((P$.BaseBlock$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(8,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda7.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAtomSitesFootnote$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("atom_sites_footnote", ((P$.BaseBlock$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(9,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda8.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAtomType$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("atom_type", ((P$.BaseBlock$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(10,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda9.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAudit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("audit", ((P$.BaseBlock$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(11,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda10.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAuditAuthor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("audit_author", ((P$.BaseBlock$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(12,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda11.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAuditConform$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("audit_conform", ((P$.BaseBlock$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(13,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda12.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAuditContactAuthor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("audit_contact_author", ((P$.BaseBlock$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(14,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda13.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getCell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("cell", ((P$.BaseBlock$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(15,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda14.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getCellMeasurement$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("cell_measurement", ((P$.BaseBlock$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(16,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda15.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getCellMeasurementRefln$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("cell_measurement_refln", ((P$.BaseBlock$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(17,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda16.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemComp$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp", ((P$.BaseBlock$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(18,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda17.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompAngle$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_angle", ((P$.BaseBlock$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(19,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda18.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_atom", ((P$.BaseBlock$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(20,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda19.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompBond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_bond", ((P$.BaseBlock$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(21,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda20.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompChir$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_chir", ((P$.BaseBlock$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(22,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda21.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompChirAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_chir_atom", ((P$.BaseBlock$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(23,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda22.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_link", ((P$.BaseBlock$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(24,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda23.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompPlane$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_plane", ((P$.BaseBlock$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(25,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda24.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompPlaneAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_plane_atom", ((P$.BaseBlock$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(26,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda25.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompTor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_tor", ((P$.BaseBlock$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(27,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda26.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemCompTorValue$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_comp_tor_value", ((P$.BaseBlock$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(28,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda27.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link", ((P$.BaseBlock$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(29,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda28.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLinkAngle$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link_angle", ((P$.BaseBlock$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(30,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda29.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLinkBond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link_bond", ((P$.BaseBlock$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(31,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda30.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLinkChir$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link_chir", ((P$.BaseBlock$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(32,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda31.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLinkChirAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link_chir_atom", ((P$.BaseBlock$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(33,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda32.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLinkPlane$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link_plane", ((P$.BaseBlock$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(34,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda33.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLinkPlaneAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link_plane_atom", ((P$.BaseBlock$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(35,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda34.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLinkTor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link_tor", ((P$.BaseBlock$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(36,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda35.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemLinkTorValue$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chem_link_tor_value", ((P$.BaseBlock$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(37,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda36.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemical$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chemical", ((P$.BaseBlock$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(38,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda37.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemicalConnAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chemical_conn_atom", ((P$.BaseBlock$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(39,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda38.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemicalConnBond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chemical_conn_bond", ((P$.BaseBlock$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(40,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda39.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getChemicalFormula$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("chemical_formula", ((P$.BaseBlock$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(41,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda40.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getCitation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("citation", ((P$.BaseBlock$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(42,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda41.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getCitationAuthor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("citation_author", ((P$.BaseBlock$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(43,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda42.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getCitationEditor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("citation_editor", ((P$.BaseBlock$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(44,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda43.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getComputing$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("computing", ((P$.BaseBlock$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(45,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda44.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDatabase$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("database", ((P$.BaseBlock$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(46,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda45.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDatabase2$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("database_2", ((P$.BaseBlock$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(47,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda46.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDatabasePDBCaveat$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("database_PDB_caveat", ((P$.BaseBlock$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(48,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda47.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDatabasePDBMatrix$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("database_PDB_matrix", ((P$.BaseBlock$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(49,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda48.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDatabasePDBRemark$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("database_PDB_remark", ((P$.BaseBlock$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(50,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda49.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDatabasePDBRev$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("database_PDB_rev", ((P$.BaseBlock$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(51,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda50.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDatabasePDBRevRecord$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("database_PDB_rev_record", ((P$.BaseBlock$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(52,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda51.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDatabasePDBTvect$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("database_PDB_tvect", ((P$.BaseBlock$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(53,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda52.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrn$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn", ((P$.BaseBlock$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(54,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda53.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnAttenuator$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_attenuator", ((P$.BaseBlock$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(55,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda54.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnDetector$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_detector", ((P$.BaseBlock$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(56,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda55.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnMeasurement$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_measurement", ((P$.BaseBlock$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(57,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda56.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnOrientMatrix$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_orient_matrix", ((P$.BaseBlock$lambda57||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(58,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda57.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnOrientRefln$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_orient_refln", ((P$.BaseBlock$lambda58||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(59,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda58.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnRadiation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_radiation", ((P$.BaseBlock$lambda59||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(60,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda59.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnRadiationWavelength$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_radiation_wavelength", ((P$.BaseBlock$lambda60||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(61,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda60.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnRefln$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_refln", ((P$.BaseBlock$lambda61||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(62,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda61.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnReflns$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_reflns", ((P$.BaseBlock$lambda62||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(63,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda62.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnScaleGroup$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_scale_group", ((P$.BaseBlock$lambda63||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda63", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(64,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda63.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnSource$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_source", ((P$.BaseBlock$lambda64||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(65,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda64.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnStandardRefln$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_standard_refln", ((P$.BaseBlock$lambda65||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda65", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(66,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda65.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnStandards$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_standards", ((P$.BaseBlock$lambda66||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda66", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(67,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda66.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity", ((P$.BaseBlock$lambda67||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda67", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(68,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda67.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntityKeywords$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity_keywords", ((P$.BaseBlock$lambda68||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda68", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(69,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda68.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntityLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity_link", ((P$.BaseBlock$lambda69||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda69", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(70,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda69.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntityNameCom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity_name_com", ((P$.BaseBlock$lambda70||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda70", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(71,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda70.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntityNameSys$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity_name_sys", ((P$.BaseBlock$lambda71||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda71", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(72,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda71.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntityPoly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity_poly", ((P$.BaseBlock$lambda72||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda72", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(73,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda72.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntityPolySeq$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity_poly_seq", ((P$.BaseBlock$lambda73||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda73", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(74,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda73.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entry", ((P$.BaseBlock$lambda74||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda74", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(75,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda74.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntryLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entry_link", ((P$.BaseBlock$lambda75||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda75", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(76,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda75.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getExptl$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("exptl", ((P$.BaseBlock$lambda76||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda76", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(77,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda76.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getExptlCrystal$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("exptl_crystal", ((P$.BaseBlock$lambda77||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda77", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(78,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda77.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getExptlCrystalFace$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("exptl_crystal_face", ((P$.BaseBlock$lambda78||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda78", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(79,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda78.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getExptlCrystalGrow$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("exptl_crystal_grow", ((P$.BaseBlock$lambda79||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda79", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(80,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda79.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getExptlCrystalGrowComp$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("exptl_crystal_grow_comp", ((P$.BaseBlock$lambda80||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda80", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(81,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda80.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getGeom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("geom", ((P$.BaseBlock$lambda81||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda81", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(82,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda81.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getGeomAngle$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("geom_angle", ((P$.BaseBlock$lambda82||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda82", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(83,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda82.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getGeomBond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("geom_bond", ((P$.BaseBlock$lambda83||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda83", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(84,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda83.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getGeomContact$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("geom_contact", ((P$.BaseBlock$lambda84||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda84", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(85,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda84.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getGeomHbond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("geom_hbond", ((P$.BaseBlock$lambda85||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda85", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(86,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda85.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getGeomTorsion$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("geom_torsion", ((P$.BaseBlock$lambda86||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda86", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(87,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda86.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getJournal$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("journal", ((P$.BaseBlock$lambda87||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda87", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(88,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda87.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getJournalIndex$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("journal_index", ((P$.BaseBlock$lambda88||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda88", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(89,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda88.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasing$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing", ((P$.BaseBlock$lambda89||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda89", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(90,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda89.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingAveraging$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_averaging", ((P$.BaseBlock$lambda90||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda90", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(91,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda90.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingIsomorphous$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_isomorphous", ((P$.BaseBlock$lambda91||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda91", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(92,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda91.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMAD$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MAD", ((P$.BaseBlock$lambda92||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda92", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(93,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda92.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMADClust$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MAD_clust", ((P$.BaseBlock$lambda93||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda93", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(94,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda93.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMADExpt$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MAD_expt", ((P$.BaseBlock$lambda94||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda94", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(95,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda94.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMADRatio$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MAD_ratio", ((P$.BaseBlock$lambda95||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda95", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(96,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda95.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMADSet$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MAD_set", ((P$.BaseBlock$lambda96||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda96", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(97,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda96.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMIR$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MIR", ((P$.BaseBlock$lambda97||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda97", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(98,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda97.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMIRDer$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MIR_der", ((P$.BaseBlock$lambda98||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda98", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(99,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda98.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMIRDerRefln$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MIR_der_refln", ((P$.BaseBlock$lambda99||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda99", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(100,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda99.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMIRDerShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MIR_der_shell", ((P$.BaseBlock$lambda100||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda100", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(101,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda100.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMIRDerSite$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MIR_der_site", ((P$.BaseBlock$lambda101||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda101", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(102,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda101.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingMIRShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_MIR_shell", ((P$.BaseBlock$lambda102||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda102", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(103,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda102.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingSet$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_set", ((P$.BaseBlock$lambda103||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda103", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(104,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda103.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPhasingSetRefln$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("phasing_set_refln", ((P$.BaseBlock$lambda104||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda104", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(105,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda104.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPubl$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("publ", ((P$.BaseBlock$lambda105||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda105", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(106,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda105.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPublAuthor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("publ_author", ((P$.BaseBlock$lambda106||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda106", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(107,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda106.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPublBody$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("publ_body", ((P$.BaseBlock$lambda107||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda107", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(108,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda107.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPublManuscriptIncl$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("publ_manuscript_incl", ((P$.BaseBlock$lambda108||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda108", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(109,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda108.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefine$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine", ((P$.BaseBlock$lambda109||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda109", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(110,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda109.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineAnalyze$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_analyze", ((P$.BaseBlock$lambda110||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda110", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(111,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda110.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineBIso$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_B_iso", ((P$.BaseBlock$lambda111||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda111", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(112,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda111.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineFunctMinimized$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_funct_minimized", ((P$.BaseBlock$lambda112||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda112", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(113,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda112.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineHist$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_hist", ((P$.BaseBlock$lambda113||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda113", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(114,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda113.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineLsRestr$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_ls_restr", ((P$.BaseBlock$lambda114||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda114", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(115,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda114.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineLsRestrNcs$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_ls_restr_ncs", ((P$.BaseBlock$lambda115||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda115", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(116,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda115.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineLsRestrType$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_ls_restr_type", ((P$.BaseBlock$lambda116||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda116", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(117,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda116.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineLsShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_ls_shell", ((P$.BaseBlock$lambda117||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda117", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(118,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda117.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineOccupancy$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_occupancy", ((P$.BaseBlock$lambda118||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda118", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(119,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda118.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefln$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refln", ((P$.BaseBlock$lambda119||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda119", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(120,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda119.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getReflnSysAbs$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refln_sys_abs", ((P$.BaseBlock$lambda120||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda120", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(121,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda120.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getReflns$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("reflns", ((P$.BaseBlock$lambda121||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda121", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(122,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda121.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getReflnsScale$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("reflns_scale", ((P$.BaseBlock$lambda122||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda122", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(123,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda122.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getReflnsShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("reflns_shell", ((P$.BaseBlock$lambda123||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda123", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(124,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda123.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getSoftware$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("software", ((P$.BaseBlock$lambda124||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda124", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(125,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda124.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStruct$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct", ((P$.BaseBlock$lambda125||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda125", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(126,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda125.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructAsym$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_asym", ((P$.BaseBlock$lambda126||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda126", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(127,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda126.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructBiol$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_biol", ((P$.BaseBlock$lambda127||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda127", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(128,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda127.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructBiolGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_biol_gen", ((P$.BaseBlock$lambda128||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda128", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(129,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda128.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructBiolKeywords$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_biol_keywords", ((P$.BaseBlock$lambda129||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda129", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(130,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda129.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructBiolView$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_biol_view", ((P$.BaseBlock$lambda130||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda130", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(131,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda130.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructConf$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_conf", ((P$.BaseBlock$lambda131||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda131", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(132,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda131.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructConfType$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_conf_type", ((P$.BaseBlock$lambda132||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda132", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(133,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda132.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructConn$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_conn", ((P$.BaseBlock$lambda133||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda133", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(134,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda133.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructConnType$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_conn_type", ((P$.BaseBlock$lambda134||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda134", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(135,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda134.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructKeywords$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_keywords", ((P$.BaseBlock$lambda135||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda135", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(136,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda135.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructMonDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_mon_details", ((P$.BaseBlock$lambda136||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda136", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(137,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda136.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructMonNucl$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_mon_nucl", ((P$.BaseBlock$lambda137||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda137", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(138,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda137.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructMonProt$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_mon_prot", ((P$.BaseBlock$lambda138||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda138", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(139,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda138.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructMonProtCis$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_mon_prot_cis", ((P$.BaseBlock$lambda139||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda139", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(140,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda139.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructNcsDom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_ncs_dom", ((P$.BaseBlock$lambda140||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda140", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(141,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda140.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructNcsDomLim$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_ncs_dom_lim", ((P$.BaseBlock$lambda141||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda141", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(142,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda141.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructNcsEns$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_ncs_ens", ((P$.BaseBlock$lambda142||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda142", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(143,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda142.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructNcsEnsGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_ncs_ens_gen", ((P$.BaseBlock$lambda143||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda143", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(144,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda143.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructNcsOper$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_ncs_oper", ((P$.BaseBlock$lambda144||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda144", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(145,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda144.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructRef$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_ref", ((P$.BaseBlock$lambda145||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda145", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(146,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda145.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructRefSeq$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_ref_seq", ((P$.BaseBlock$lambda146||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda146", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(147,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda146.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructRefSeqDif$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_ref_seq_dif", ((P$.BaseBlock$lambda147||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda147", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(148,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda147.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSheet$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_sheet", ((P$.BaseBlock$lambda148||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda148", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(149,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda148.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSheetHbond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_sheet_hbond", ((P$.BaseBlock$lambda149||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda149", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(150,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda149.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSheetOrder$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_sheet_order", ((P$.BaseBlock$lambda150||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda150", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(151,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda150.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSheetRange$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_sheet_range", ((P$.BaseBlock$lambda151||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda151", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(152,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda151.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSheetTopology$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_sheet_topology", ((P$.BaseBlock$lambda152||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda152", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(153,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda152.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSite$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_site", ((P$.BaseBlock$lambda153||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda153", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(154,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda153.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSiteGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_site_gen", ((P$.BaseBlock$lambda154||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda154", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(155,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda154.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSiteKeywords$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_site_keywords", ((P$.BaseBlock$lambda155||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda155", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(156,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda155.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getStructSiteView$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("struct_site_view", ((P$.BaseBlock$lambda156||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda156", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(157,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda156.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getSymmetry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("symmetry", ((P$.BaseBlock$lambda157||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda157", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(158,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda157.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getSymmetryEquiv$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("symmetry_equiv", ((P$.BaseBlock$lambda158||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda158", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(159,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda158.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getAuditLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("audit_link", ((P$.BaseBlock$lambda159||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda159", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(160,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda159.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getDiffrnReflnsClass$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("diffrn_reflns_class", ((P$.BaseBlock$lambda160||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda160", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(161,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda160.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getRefineLsClass$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("refine_ls_class", ((P$.BaseBlock$lambda161||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda161", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(162,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda161.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getReflnsClass$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("reflns_class", ((P$.BaseBlock$lambda162||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda162", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(163,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda162.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getSpaceGroup$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("space_group", ((P$.BaseBlock$lambda163||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda163", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(164,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda163.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getSpaceGroupSymop$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("space_group_symop", ((P$.BaseBlock$lambda164||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda164", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(165,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda164.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getValenceParam$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("valence_param", ((P$.BaseBlock$lambda165||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda165", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(166,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda165.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getValenceRef$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("valence_ref", ((P$.BaseBlock$lambda166||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda166", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(167,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda166.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAudit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit", ((P$.BaseBlock$lambda167||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda167", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(168,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda167.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxVersion$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_version", ((P$.BaseBlock$lambda168||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda168", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(169,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda168.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAuditAuthor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit_author", ((P$.BaseBlock$lambda169||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda169", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(170,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda169.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabaseMessage$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_message", ((P$.BaseBlock$lambda170||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda170", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(171,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda170.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabasePDBObsSpr$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_PDB_obs_spr", ((P$.BaseBlock$lambda171||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda171", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(172,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda171.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabaseProc$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_proc", ((P$.BaseBlock$lambda172||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda172", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(173,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda172.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabaseRemark$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_remark", ((P$.BaseBlock$lambda173||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda173", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(174,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda173.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabaseStatus$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_status", ((P$.BaseBlock$lambda174||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda174", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(175,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda174.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityName$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_name", ((P$.BaseBlock$lambda175||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda175", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(176,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda175.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPrereleaseSeq$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_prerelease_seq", ((P$.BaseBlock$lambda176||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda176", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(177,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda176.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPolySeqScheme$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_poly_seq_scheme", ((P$.BaseBlock$lambda177||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda177", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(178,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda177.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNonpolyScheme$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nonpoly_scheme", ((P$.BaseBlock$lambda178||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda178", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(179,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda178.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRefine$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_refine", ((P$.BaseBlock$lambda179||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda179", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(180,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda179.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructSheetHbond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_sheet_hbond", ((P$.BaseBlock$lambda180||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda180", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(181,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda180.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxXplorFile$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_xplor_file", ((P$.BaseBlock$lambda181||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda181", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(182,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda181.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRefineAuxFile$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_aux_file", ((P$.BaseBlock$lambda182||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda182", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(183,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda182.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabaseRelated$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_related", ((P$.BaseBlock$lambda183||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda183", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(184,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda183.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityAssembly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_assembly", ((P$.BaseBlock$lambda184||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda184", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(185,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda184.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxExptlCrystalGrowComp$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_exptl_crystal_grow_comp", ((P$.BaseBlock$lambda185||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda185", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(186,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda185.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxExptlCrystalGrowSol$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_exptl_crystal_grow_sol", ((P$.BaseBlock$lambda186||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda186", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(187,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda186.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxExptlCrystalCryoTreatment$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_exptl_crystal_cryo_treatment", ((P$.BaseBlock$lambda187||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda187", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(188,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda187.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRefineTls$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_tls", ((P$.BaseBlock$lambda188||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda188", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(189,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda188.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRefineTlsGroup$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_tls_group", ((P$.BaseBlock$lambda189||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda189", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(190,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda189.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxContactAuthor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_contact_author", ((P$.BaseBlock$lambda190||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda190", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(191,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda190.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSGProject$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_SG_project", ((P$.BaseBlock$lambda191||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda191", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(192,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda191.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAtomSiteAnisoTls$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_atom_site_aniso_tls", ((P$.BaseBlock$lambda192||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda192", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(193,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda192.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_details", ((P$.BaseBlock$lambda193||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda193", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(194,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda193.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrSampleDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_sample_details", ((P$.BaseBlock$lambda194||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda194", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(195,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda194.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrExptlSample$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_exptl_sample", ((P$.BaseBlock$lambda195||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda195", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(196,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda195.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrExptlSampleConditions$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_exptl_sample_conditions", ((P$.BaseBlock$lambda196||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda196", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(197,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda196.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrSpectrometer$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_spectrometer", ((P$.BaseBlock$lambda197||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda197", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(198,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda197.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrExptl$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_exptl", ((P$.BaseBlock$lambda198||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda198", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(199,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda198.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrSoftware$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_software", ((P$.BaseBlock$lambda199||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda199", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(200,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda199.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrConstraints$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_constraints", ((P$.BaseBlock$lambda200||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda200", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(201,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda200.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrEnsemble$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_ensemble", ((P$.BaseBlock$lambda201||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda201", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(202,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda201.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrEnsembleRms$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_ensemble_rms", ((P$.BaseBlock$lambda202||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda202", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(203,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda202.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrRepresentative$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_representative", ((P$.BaseBlock$lambda203||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda203", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(204,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda203.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrRefine$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_refine", ((P$.BaseBlock$lambda204||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda204", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(205,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda204.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrForceConstants$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_force_constants", ((P$.BaseBlock$lambda205||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda205", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(206,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda205.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getNdbStructConfNa$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ndb_struct_conf_na", ((P$.BaseBlock$lambda206||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda206", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(207,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda206.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getNdbStructFeatureNa$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ndb_struct_feature_na", ((P$.BaseBlock$lambda207||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda207", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(208,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda207.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getNdbStructNaBasePair$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ndb_struct_na_base_pair", ((P$.BaseBlock$lambda208||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda208", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(209,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda208.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getNdbStructNaBasePairStep$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ndb_struct_na_base_pair_step", ((P$.BaseBlock$lambda209||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda209", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(210,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda209.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getNdbOriginalNdbCoordinates$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ndb_original_ndb_coordinates", ((P$.BaseBlock$lambda210||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda210", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(211,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda210.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityNonpoly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_nonpoly", ((P$.BaseBlock$lambda211||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda211", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(212,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda211.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPhasingDm$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_phasing_dm", ((P$.BaseBlock$lambda212||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda212", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(213,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda212.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPhasingDmShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_phasing_dm_shell", ((P$.BaseBlock$lambda213||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda213", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(214,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda213.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPhasingMADShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_phasing_MAD_shell", ((P$.BaseBlock$lambda214||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda214", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(215,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda214.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPhasingMADSet$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_phasing_MAD_set", ((P$.BaseBlock$lambda215||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda215", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(216,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda215.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPhasingMADSetShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_phasing_MAD_set_shell", ((P$.BaseBlock$lambda216||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda216", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(217,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda216.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPhasingMADSetSite$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_phasing_MAD_set_site", ((P$.BaseBlock$lambda217||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda217", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(218,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda217.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPhasingMR$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_phasing_MR", ((P$.BaseBlock$lambda218||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda218", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(219,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda218.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRefineComponent$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_component", ((P$.BaseBlock$lambda219||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda219", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(220,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda219.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityProdProtocol$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_prod_protocol", ((P$.BaseBlock$lambda220||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda220", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(221,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda220.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenProdOther$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_prod_other", ((P$.BaseBlock$lambda221||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda221", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(222,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda221.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenProdOtherParameter$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_prod_other_parameter", ((P$.BaseBlock$lambda222||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda222", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(223,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda222.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenProdPcr$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_prod_pcr", ((P$.BaseBlock$lambda223||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda223", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(224,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda223.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenProdDigest$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_prod_digest", ((P$.BaseBlock$lambda224||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda224", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(225,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda224.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenClone$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_clone", ((P$.BaseBlock$lambda225||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda225", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(226,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda225.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenCloneLigation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_clone_ligation", ((P$.BaseBlock$lambda226||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda226", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(227,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda226.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenCloneRecombination$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_clone_recombination", ((P$.BaseBlock$lambda227||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda227", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(228,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda227.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenExpress$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_express", ((P$.BaseBlock$lambda228||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda228", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(229,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda228.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenExpressTimepoint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_express_timepoint", ((P$.BaseBlock$lambda229||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda229", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(230,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda229.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenLysis$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_lysis", ((P$.BaseBlock$lambda230||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda230", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(231,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda230.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenRefold$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_refold", ((P$.BaseBlock$lambda231||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda231", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(232,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda231.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenProteolysis$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_proteolysis", ((P$.BaseBlock$lambda232||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda232", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(233,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda232.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenChrom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_chrom", ((P$.BaseBlock$lambda233||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda233", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(234,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda233.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenFract$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_fract", ((P$.BaseBlock$lambda234||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda234", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(235,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda234.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenPure$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_pure", ((P$.BaseBlock$lambda235||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda235", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(236,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda235.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenCharacter$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_character", ((P$.BaseBlock$lambda236||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda236", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(237,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda236.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxConstruct$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_construct", ((P$.BaseBlock$lambda237||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda237", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(238,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda237.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxConstructFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_construct_feature", ((P$.BaseBlock$lambda238||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda238", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(239,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda238.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRobotSystem$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_robot_system", ((P$.BaseBlock$lambda239||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda239", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(240,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda239.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxBuffer$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_buffer", ((P$.BaseBlock$lambda240||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda240", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(241,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda240.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxBufferComponents$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_buffer_components", ((P$.BaseBlock$lambda241||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda241", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(242,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda241.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDomain$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_domain", ((P$.BaseBlock$lambda242||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda242", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(243,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda242.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDomainRange$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_domain_range", ((P$.BaseBlock$lambda243||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda243", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(244,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda243.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSequenceRange$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_sequence_range", ((P$.BaseBlock$lambda244||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda244", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(245,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda244.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxFeatureEntry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_feature_entry", ((P$.BaseBlock$lambda245||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda245", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(246,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda245.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxFeatureDomain$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_feature_domain", ((P$.BaseBlock$lambda246||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda246", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(247,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda246.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxFeatureSequenceRange$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_feature_sequence_range", ((P$.BaseBlock$lambda247||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda247", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(248,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda247.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxFeatureAssembly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_feature_assembly", ((P$.BaseBlock$lambda248||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda248", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(249,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda248.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxFeatureMonomer$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_feature_monomer", ((P$.BaseBlock$lambda249||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda249", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(250,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda249.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxExptlPd$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_exptl_pd", ((P$.BaseBlock$lambda250||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda250", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(251,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda250.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReflnsTwin$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reflns_twin", ((P$.BaseBlock$lambda251||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda251", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(252,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda251.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_info", ((P$.BaseBlock$lambda252||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda252", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(253,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda252.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReRefinement$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_re_refinement", ((P$.BaseBlock$lambda253||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda253", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(254,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda253.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssemblyProp$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly_prop", ((P$.BaseBlock$lambda254||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda254", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(255,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda254.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructRefSeqFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_ref_seq_feature", ((P$.BaseBlock$lambda255||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda255", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(256,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda255.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructRefSeqFeatureProp$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_ref_seq_feature_prop", ((P$.BaseBlock$lambda256||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda256", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(257,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda256.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructChemCompDiagnostics$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_chem_comp_diagnostics", ((P$.BaseBlock$lambda257||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda257", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(258,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda257.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_feature", ((P$.BaseBlock$lambda258||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda258", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(259,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda258.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxCoordinateModel$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_coordinate_model", ((P$.BaseBlock$lambda259||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda259", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(260,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda259.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructChemCompFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_chem_comp_feature", ((P$.BaseBlock$lambda260||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda260", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(261,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda260.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDiffrnReflnsShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_diffrn_reflns_shell", ((P$.BaseBlock$lambda261||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda261", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(262,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda261.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxBondDistanceLimits$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_bond_distance_limits", ((P$.BaseBlock$lambda262||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda262", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(263,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda262.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSolnScatter$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_soln_scatter", ((P$.BaseBlock$lambda263||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda263", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(264,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda263.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSolnScatterModel$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_soln_scatter_model", ((P$.BaseBlock$lambda264||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda264", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(265,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda264.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompDescriptor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_descriptor", ((P$.BaseBlock$lambda265||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda265", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(266,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda265.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompIdentifier$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_identifier", ((P$.BaseBlock$lambda266||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda266", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(267,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda266.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompImport$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_import", ((P$.BaseBlock$lambda267||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda267", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(268,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda267.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompAtomEdit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_atom_edit", ((P$.BaseBlock$lambda268||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda268", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(269,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda268.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompBondEdit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_bond_edit", ((P$.BaseBlock$lambda269||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda269", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(270,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda269.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompAudit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_audit", ((P$.BaseBlock$lambda270||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda270", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(271,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda270.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidateCloseContact$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_close_contact", ((P$.BaseBlock$lambda271||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda271", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(272,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda271.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidateSymmContact$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_symm_contact", ((P$.BaseBlock$lambda272||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda272", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(273,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda272.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidateRmsdBond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_rmsd_bond", ((P$.BaseBlock$lambda273||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda273", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(274,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda273.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidateRmsdAngle$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_rmsd_angle", ((P$.BaseBlock$lambda274||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda274", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(275,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda274.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidateTorsion$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_torsion", ((P$.BaseBlock$lambda275||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda275", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(276,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda275.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidatePeptideOmega$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_peptide_omega", ((P$.BaseBlock$lambda276||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda276", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(277,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda276.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidateChiral$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_chiral", ((P$.BaseBlock$lambda277||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda277", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(278,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda277.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidatePlanes$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_planes", ((P$.BaseBlock$lambda278||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda278", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(279,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda278.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidatePlanesAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_planes_atom", ((P$.BaseBlock$lambda279||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda279", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(280,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda279.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidateMainChainPlane$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_main_chain_plane", ((P$.BaseBlock$lambda280||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda280", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(281,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda280.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructConnAngle$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_conn_angle", ((P$.BaseBlock$lambda281||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda281", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(282,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda281.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxUnobsOrZeroOccResidues$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_unobs_or_zero_occ_residues", ((P$.BaseBlock$lambda282||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda282", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(283,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda282.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxUnobsOrZeroOccAtoms$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_unobs_or_zero_occ_atoms", ((P$.BaseBlock$lambda283||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda283", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(284,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda283.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntryDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entry_details", ((P$.BaseBlock$lambda284||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda284", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(285,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda284.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructModResidue$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_mod_residue", ((P$.BaseBlock$lambda285||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda285", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(286,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda285.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructRefSeqInsertion$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_ref_seq_insertion", ((P$.BaseBlock$lambda286||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda286", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(287,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda286.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructRefSeqDeletion$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_ref_seq_deletion", ((P$.BaseBlock$lambda287||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda287", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(288,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda287.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRemediationAtomSiteMapping$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_remediation_atom_site_mapping", ((P$.BaseBlock$lambda288||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda288", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(289,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda288.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValidatePolymerLinkage$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_validate_polymer_linkage", ((P$.BaseBlock$lambda289||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda289", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(290,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda289.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxHelicalSymmetry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_helical_symmetry", ((P$.BaseBlock$lambda290||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda290", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(291,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda290.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPointSymmetry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_point_symmetry", ((P$.BaseBlock$lambda291||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda291", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(292,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda291.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructEntityInst$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_entity_inst", ((P$.BaseBlock$lambda292||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda292", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(293,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda292.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructOperList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_oper_list", ((P$.BaseBlock$lambda293||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda293", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(294,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda293.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssembly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly", ((P$.BaseBlock$lambda294||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda294", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(295,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda294.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssemblyGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly_gen", ((P$.BaseBlock$lambda295||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda295", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(296,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda295.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAsymGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_asym_gen", ((P$.BaseBlock$lambda296||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda296", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(297,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda296.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructMsymGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_msym_gen", ((P$.BaseBlock$lambda297||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda297", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(298,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda297.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructLegacyOperList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_legacy_oper_list", ((P$.BaseBlock$lambda298||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda298", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(299,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda298.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompAtomFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_atom_feature", ((P$.BaseBlock$lambda299||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda299", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(300,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda299.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceMoleculeFamily$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_molecule_family", ((P$.BaseBlock$lambda300||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda300", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(301,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda300.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceMoleculeList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_molecule_list", ((P$.BaseBlock$lambda301||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda301", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(302,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda301.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceMolecule$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_molecule", ((P$.BaseBlock$lambda302||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda302", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(303,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda302.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntityList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_list", ((P$.BaseBlock$lambda303||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda303", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(304,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda303.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntityNonpoly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_nonpoly", ((P$.BaseBlock$lambda304||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda304", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(305,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda304.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntityLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_link", ((P$.BaseBlock$lambda305||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda305", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(306,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda305.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntityPolyLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_poly_link", ((P$.BaseBlock$lambda306||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda306", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(307,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda306.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntityPoly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_poly", ((P$.BaseBlock$lambda307||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda307", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(308,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda307.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntityPolySeq$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_poly_seq", ((P$.BaseBlock$lambda308||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda308", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(309,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda308.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntitySequence$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_sequence", ((P$.BaseBlock$lambda309||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda309", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(310,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda309.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntitySrcNat$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_src_nat", ((P$.BaseBlock$lambda310||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda310", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(311,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda310.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceMoleculeDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_molecule_details", ((P$.BaseBlock$lambda311||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda311", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(312,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda311.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceMoleculeSynonyms$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_molecule_synonyms", ((P$.BaseBlock$lambda312||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda312", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(313,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda312.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceEntitySubcomponents$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_entity_subcomponents", ((P$.BaseBlock$lambda313||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda313", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(314,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda313.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceMoleculeAnnotation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_molecule_annotation", ((P$.BaseBlock$lambda314||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda314", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(315,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda314.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceMoleculeFeatures$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_molecule_features", ((P$.BaseBlock$lambda315||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda315", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(316,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda315.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceMoleculeRelatedStructures$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_molecule_related_structures", ((P$.BaseBlock$lambda316||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda316", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(317,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda316.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructGroupList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_group_list", ((P$.BaseBlock$lambda317||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda317", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(318,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda317.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructGroupComponents$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_group_components", ((P$.BaseBlock$lambda318||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda318", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(319,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda318.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructGroupComponentRange$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_group_component_range", ((P$.BaseBlock$lambda319||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda319", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(320,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda319.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPrdAudit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_prd_audit", ((P$.BaseBlock$lambda320||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda320", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(321,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda320.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxFamilyPrdAudit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_family_prd_audit", ((P$.BaseBlock$lambda321||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda321", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(322,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda321.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxMolecule$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_molecule", ((P$.BaseBlock$lambda322||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda322", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(323,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda322.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxMoleculeFeatures$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_molecule_features", ((P$.BaseBlock$lambda323||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda323", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(324,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda323.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxFamilyGroupIndex$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_family_group_index", ((P$.BaseBlock$lambda324||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda324", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(325,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda324.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDistantSolventAtoms$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_distant_solvent_atoms", ((P$.BaseBlock$lambda325||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda325", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(326,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda325.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructSpecialSymmetry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_special_symmetry", ((P$.BaseBlock$lambda326||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda326", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(327,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda326.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferencePublicationList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_publication_list", ((P$.BaseBlock$lambda327||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda327", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(328,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda327.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrAssignedChemShiftList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_assigned_chem_shift_list", ((P$.BaseBlock$lambda328||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda328", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(329,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda328.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrChemShiftExperiment$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_chem_shift_experiment", ((P$.BaseBlock$lambda329||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda329", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(330,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda329.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrChemShiftRef$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_chem_shift_ref", ((P$.BaseBlock$lambda330||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda330", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(331,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda330.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrChemShiftReference$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_chem_shift_reference", ((P$.BaseBlock$lambda331||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda331", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(332,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda331.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrChemShiftSoftware$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_chem_shift_software", ((P$.BaseBlock$lambda332||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda332", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(333,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda332.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrConstraintFile$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_constraint_file", ((P$.BaseBlock$lambda333||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda333", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(334,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda333.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrSoftwareTask$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_software_task", ((P$.BaseBlock$lambda334||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda334", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(335,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda334.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrSpectralDim$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_spectral_dim", ((P$.BaseBlock$lambda335||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda335", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(336,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda335.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrSpectralPeakList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_spectral_peak_list", ((P$.BaseBlock$lambda336||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda336", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(337,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda336.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrSpectralPeakSoftware$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_spectral_peak_software", ((P$.BaseBlock$lambda337||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda337", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(338,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda337.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrSystematicChemShiftOffset$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_systematic_chem_shift_offset", ((P$.BaseBlock$lambda338||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda338", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(339,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda338.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrUpload$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_upload", ((P$.BaseBlock$lambda339||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda339", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(340,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda339.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAuditSupport$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit_support", ((P$.BaseBlock$lambda340||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda340", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(341,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda340.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompSubcomponentStructConn$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_subcomponent_struct_conn", ((P$.BaseBlock$lambda341||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda341", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(342,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda341.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompSubcomponentEntityList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_subcomponent_entity_list", ((P$.BaseBlock$lambda342||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda342", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(343,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda342.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntitySrcNat$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity_src_nat", ((P$.BaseBlock$lambda343||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda343", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(344,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda343.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEntitySrcGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("entity_src_gen", ((P$.BaseBlock$lambda344||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda344", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(345,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda344.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcSyn$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_syn", ((P$.BaseBlock$lambda345||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda345", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(346,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda345.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityPolyCompLinkList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_poly_comp_link_list", ((P$.BaseBlock$lambda346||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda346", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(347,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda346.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxLinkedEntity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_linked_entity", ((P$.BaseBlock$lambda347||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda347", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(348,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda347.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxLinkedEntityInstanceList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_linked_entity_instance_list", ((P$.BaseBlock$lambda348||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda348", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(349,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda348.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxLinkedEntityList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_linked_entity_list", ((P$.BaseBlock$lambda349||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda349", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(350,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda349.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxLinkedEntityLinkList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_linked_entity_link_list", ((P$.BaseBlock$lambda350||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda350", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(351,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda350.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityDescriptor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_descriptor", ((P$.BaseBlock$lambda351||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda351", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(352,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda351.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceLinkedEntity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_linked_entity", ((P$.BaseBlock$lambda352||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda352", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(353,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda352.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceLinkedEntityCompList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_linked_entity_comp_list", ((P$.BaseBlock$lambda353||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda353", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(354,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda353.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceLinkedEntityCompLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_linked_entity_comp_link", ((P$.BaseBlock$lambda354||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda354", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(355,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda354.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxReferenceLinkedEntityLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_reference_linked_entity_link", ((P$.BaseBlock$lambda355||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda355", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(356,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda355.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRelatedExpDataSet$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_related_exp_data_set", ((P$.BaseBlock$lambda356||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda356", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(357,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda356.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabaseStatusHistory$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_status_history", ((P$.BaseBlock$lambda357||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda357", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(358,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda357.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmAssembly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_assembly", ((P$.BaseBlock$lambda358||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda358", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(359,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda358.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmEntityAssembly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_entity_assembly", ((P$.BaseBlock$lambda359||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda359", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(360,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda359.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmVirusEntity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_virus_entity", ((P$.BaseBlock$lambda360||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda360", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(361,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda360.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmSamplePreparation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_sample_preparation", ((P$.BaseBlock$lambda361||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda361", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(362,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda361.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmSampleSupport$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_sample_support", ((P$.BaseBlock$lambda362||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda362", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(363,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda362.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmBuffer$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_buffer", ((P$.BaseBlock$lambda363||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda363", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(364,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda363.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmVitrification$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_vitrification", ((P$.BaseBlock$lambda364||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda364", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(365,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda364.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmImaging$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_imaging", ((P$.BaseBlock$lambda365||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda365", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(366,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda365.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmDetector$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_detector", ((P$.BaseBlock$lambda366||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda366", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(367,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda366.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmImageScans$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_image_scans", ((P$.BaseBlock$lambda367||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda367", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(368,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda367.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEm2dProjectionSelection$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_2d_projection_selection", ((P$.BaseBlock$lambda368||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda368", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(369,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda368.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEm3dReconstruction$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_3d_reconstruction", ((P$.BaseBlock$lambda369||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda369", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(370,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda369.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEm3dFitting$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_3d_fitting", ((P$.BaseBlock$lambda370||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda370", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(371,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda370.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEm3dFittingList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_3d_fitting_list", ((P$.BaseBlock$lambda371||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda371", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(372,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda371.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmHelicalEntity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_helical_entity", ((P$.BaseBlock$lambda372||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda372", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(373,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda372.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmExperiment$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_experiment", ((P$.BaseBlock$lambda373||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda373", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(374,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda373.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmSingleParticleEntity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_single_particle_entity", ((P$.BaseBlock$lambda374||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda374", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(375,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda374.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmAdmin$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_admin", ((P$.BaseBlock$lambda375||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda375", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(376,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda375.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmAuthorList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_author_list", ((P$.BaseBlock$lambda376||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda376", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(377,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda376.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmDbReference$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_db_reference", ((P$.BaseBlock$lambda377||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda377", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(378,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda377.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmDbReferenceAuxiliary$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_db_reference_auxiliary", ((P$.BaseBlock$lambda378||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda378", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(379,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda378.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmDepui$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_depui", ((P$.BaseBlock$lambda379||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda379", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(380,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda379.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmObsolete$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_obsolete", ((P$.BaseBlock$lambda380||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda380", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(381,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda380.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmSupersede$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_supersede", ((P$.BaseBlock$lambda381||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda381", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(382,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda381.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmEntityAssemblyMolwt$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_entity_assembly_molwt", ((P$.BaseBlock$lambda382||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda382", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(383,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda382.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmEntityAssemblyNaturalsource$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_entity_assembly_naturalsource", ((P$.BaseBlock$lambda383||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda383", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(384,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda383.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmEntityAssemblyRecombinant$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_entity_assembly_recombinant", ((P$.BaseBlock$lambda384||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda384", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(385,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda384.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmVirusNaturalHost$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_virus_natural_host", ((P$.BaseBlock$lambda385||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda385", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(386,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda385.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmVirusShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_virus_shell", ((P$.BaseBlock$lambda386||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda386", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(387,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda386.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmSpecimen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_specimen", ((P$.BaseBlock$lambda387||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda387", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(388,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda387.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmEmbedding$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_embedding", ((P$.BaseBlock$lambda388||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda388", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(389,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda388.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmFiducialMarkers$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_fiducial_markers", ((P$.BaseBlock$lambda389||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda389", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(390,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda389.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmFocusedIonBeam$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_focused_ion_beam", ((P$.BaseBlock$lambda390||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda390", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(391,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda390.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmGridPretreatment$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_grid_pretreatment", ((P$.BaseBlock$lambda391||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda391", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(392,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda391.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmUltramicrotomy$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_ultramicrotomy", ((P$.BaseBlock$lambda392||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda392", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(393,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda392.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmHighPressureFreezing$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_high_pressure_freezing", ((P$.BaseBlock$lambda393||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda393", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(394,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda393.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmShadowing$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_shadowing", ((P$.BaseBlock$lambda394||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda394", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(395,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda394.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmTomographySpecimen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_tomography_specimen", ((P$.BaseBlock$lambda395||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda395", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(396,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda395.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmCrystalFormation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_crystal_formation", ((P$.BaseBlock$lambda396||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda396", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(397,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda396.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmStaining$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_staining", ((P$.BaseBlock$lambda397||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda397", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(398,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda397.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmSupportFilm$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_support_film", ((P$.BaseBlock$lambda398||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda398", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(399,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda398.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmBufferComponent$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_buffer_component", ((P$.BaseBlock$lambda399||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda399", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(400,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda399.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmDiffraction$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_diffraction", ((P$.BaseBlock$lambda400||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda400", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(401,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda400.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmDiffractionShell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_diffraction_shell", ((P$.BaseBlock$lambda401||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda401", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(402,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda401.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmDiffractionStats$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_diffraction_stats", ((P$.BaseBlock$lambda402||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda402", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(403,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda402.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmTomography$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_tomography", ((P$.BaseBlock$lambda403||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda403", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(404,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda403.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmImageRecording$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_image_recording", ((P$.BaseBlock$lambda404||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda404", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(405,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda404.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmImagingOptics$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_imaging_optics", ((P$.BaseBlock$lambda405||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda405", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(406,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda405.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmFinalClassification$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_final_classification", ((P$.BaseBlock$lambda406||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda406", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(407,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda406.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmStartModel$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_start_model", ((P$.BaseBlock$lambda407||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda407", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(408,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda407.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmSoftware$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_software", ((P$.BaseBlock$lambda408||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda408", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(409,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda408.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmEulerAngleAssignment$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_euler_angle_assignment", ((P$.BaseBlock$lambda409||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda409", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(410,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda409.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmCtfCorrection$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_ctf_correction", ((P$.BaseBlock$lambda410||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda410", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(411,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda410.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmVolumeSelection$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_volume_selection", ((P$.BaseBlock$lambda411||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda411", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(412,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda411.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEm3dCrystalEntity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_3d_crystal_entity", ((P$.BaseBlock$lambda412||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda412", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(413,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda412.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEm2dCrystalEntity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_2d_crystal_entity", ((P$.BaseBlock$lambda413||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda413", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(414,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda413.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmImageProcessing$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_image_processing", ((P$.BaseBlock$lambda414||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda414", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(415,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda414.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmParticleSelection$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_particle_selection", ((P$.BaseBlock$lambda415||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda415", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(416,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda415.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmMap$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_map", ((P$.BaseBlock$lambda416||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda416", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(417,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda416.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmFscCurve$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_fsc_curve", ((P$.BaseBlock$lambda417||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda417", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(418,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda417.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmInterpretFigure$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_interpret_figure", ((P$.BaseBlock$lambda418||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda418", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(419,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda418.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmLayerLines$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_layer_lines", ((P$.BaseBlock$lambda419||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda419", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(420,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda419.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmStructureFactors$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_structure_factors", ((P$.BaseBlock$lambda420||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda420", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(421,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda420.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_depositor_info", ((P$.BaseBlock$lambda421||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda421", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(422,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda421.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmMapDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_map_depositor_info", ((P$.BaseBlock$lambda422||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda422", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(423,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda422.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmMaskDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_mask_depositor_info", ((P$.BaseBlock$lambda423||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda423", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(424,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda423.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmFigureDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_figure_depositor_info", ((P$.BaseBlock$lambda424||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda424", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(425,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda424.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmLayerLinesDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_layer_lines_depositor_info", ((P$.BaseBlock$lambda425||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda425", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(426,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda425.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getEmStructureFactorsDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("em_structure_factors_depositor_info", ((P$.BaseBlock$lambda426||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda426", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(427,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda426.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSeqMapDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_map_depositor_info", ((P$.BaseBlock$lambda427||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda427", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(428,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda427.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_depositor_info", ((P$.BaseBlock$lambda428||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda428", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(429,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda428.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructRefSeqDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_ref_seq_depositor_info", ((P$.BaseBlock$lambda429||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda429", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(430,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda429.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructRefSeqDifDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_ref_seq_dif_depositor_info", ((P$.BaseBlock$lambda430||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda430", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(431,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda430.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssemblyPropDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly_prop_depositor_info", ((P$.BaseBlock$lambda431||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda431", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(432,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda431.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssemblyDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly_depositor_info", ((P$.BaseBlock$lambda432||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda432", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(433,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda432.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssemblyGenDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly_gen_depositor_info", ((P$.BaseBlock$lambda433||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda433", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(434,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda433.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructOperListDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_oper_list_depositor_info", ((P$.BaseBlock$lambda434||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda434", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(435,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda434.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPointSymmetryDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_point_symmetry_depositor_info", ((P$.BaseBlock$lambda435||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda435", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(436,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda435.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxHelicalSymmetryDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_helical_symmetry_depositor_info", ((P$.BaseBlock$lambda436||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda436", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(437,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda436.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssemblyAuthEvidenceDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly_auth_evidence_depositor_info", ((P$.BaseBlock$lambda437||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda437", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(438,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda437.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSolventAtomSiteMapping$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_solvent_atom_site_mapping", ((P$.BaseBlock$lambda438||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda438", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(439,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda438.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxMoleculeFeaturesDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_molecule_features_depositor_info", ((P$.BaseBlock$lambda439||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda439", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(440,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda439.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompInstanceDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_instance_depositor_info", ((P$.BaseBlock$lambda440||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda440", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(441,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda440.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepuiStatusFlags$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_depui_status_flags", ((P$.BaseBlock$lambda441||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda441", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(442,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda441.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepuiUpload$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_depui_upload", ((P$.BaseBlock$lambda442||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda442", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(443,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda442.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepuiValidationStatusFlags$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_depui_validation_status_flags", ((P$.BaseBlock$lambda443||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda443", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(444,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda443.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompUploadDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_upload_depositor_info", ((P$.BaseBlock$lambda444||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda444", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(445,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda444.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepuiEntityStatusFlags$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_depui_entity_status_flags", ((P$.BaseBlock$lambda445||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda445", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(446,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda445.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepuiEntityFeatures$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_depui_entity_features", ((P$.BaseBlock$lambda446||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda446", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(447,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda446.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepositionMessageInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_deposition_message_info", ((P$.BaseBlock$lambda447||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda447", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(448,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda447.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepositionMessageFileReference$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_deposition_message_file_reference", ((P$.BaseBlock$lambda448||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda448", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(449,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda448.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepuiEntryDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_depui_entry_details", ((P$.BaseBlock$lambda449||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda449", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(450,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda449.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDataProcessingStatus$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_data_processing_status", ((P$.BaseBlock$lambda450||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda450", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(451,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda450.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityInstanceFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_instance_feature", ((P$.BaseBlock$lambda451||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda451", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(452,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda451.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntitySrcGenDepositorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_src_gen_depositor_info", ((P$.BaseBlock$lambda452||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda452", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(453,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda452.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompModel$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_model", ((P$.BaseBlock$lambda453||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda453", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(454,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda453.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompModelAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_model_atom", ((P$.BaseBlock$lambda454||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda454", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(455,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda454.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompModelBond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_model_bond", ((P$.BaseBlock$lambda455||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda455", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(456,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda455.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompModelFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_model_feature", ((P$.BaseBlock$lambda456||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda456", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(457,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda456.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompModelDescriptor$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_model_descriptor", ((P$.BaseBlock$lambda457||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda457", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(458,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda457.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompModelAudit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_model_audit", ((P$.BaseBlock$lambda458||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda458", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(459,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda458.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompModelReference$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_model_reference", ((P$.BaseBlock$lambda459||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda459", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(460,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda459.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxViewCategoryGroup$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_view_category_group", ((P$.BaseBlock$lambda460||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda460", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(461,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda460.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxViewCategory$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_view_category", ((P$.BaseBlock$lambda461||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda461", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(462,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda461.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxViewItem$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_view_item", ((P$.BaseBlock$lambda462||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda462", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(463,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda462.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxCoord$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_coord", ((P$.BaseBlock$lambda463||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda463", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(464,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda463.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxConnect$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_connect", ((P$.BaseBlock$lambda464||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda464", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(465,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda464.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxConnectType$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_connect_type", ((P$.BaseBlock$lambda465||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda465", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(466,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda465.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxConnectModification$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_connect_modification", ((P$.BaseBlock$lambda466||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda466", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(467,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda466.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxConnectAtom$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_connect_atom", ((P$.BaseBlock$lambda467||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda467", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(468,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda467.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabasePDBMaster$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_PDB_master", ((P$.BaseBlock$lambda468||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda468", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(469,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda468.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDatabasePdbOmit$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_database_pdb_omit", ((P$.BaseBlock$lambda469||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda469", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(470,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda469.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDbref$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_dbref", ((P$.BaseBlock$lambda470||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda470", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(471,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda470.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDrugInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_drug_info", ((P$.BaseBlock$lambda471||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda471", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(472,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda471.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxInhibitorInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_inhibitor_info", ((P$.BaseBlock$lambda472||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda472", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(473,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda472.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxIonInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_ion_info", ((P$.BaseBlock$lambda473||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda473", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(474,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda473.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxHybrid$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_hybrid", ((P$.BaseBlock$lambda474||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda474", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(475,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda474.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNaStrandInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_na_strand_info", ((P$.BaseBlock$lambda475||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda475", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(476,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda475.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNonstandardList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nonstandard_list", ((P$.BaseBlock$lambda476||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda476", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(477,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda476.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPdbCompnd$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_pdb_compnd", ((P$.BaseBlock$lambda477||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda477", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(478,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda477.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPdbSource$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_pdb_source", ((P$.BaseBlock$lambda478||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda478", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(479,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda478.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxProteinInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_protein_info", ((P$.BaseBlock$lambda479||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda479", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(480,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda479.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSolventInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_solvent_info", ((P$.BaseBlock$lambda480||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda480", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(481,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda480.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSource$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_source", ((P$.BaseBlock$lambda481||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda481", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(482,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda481.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructBiolFunc$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_biol_func", ((P$.BaseBlock$lambda482||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda482", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(483,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda482.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructPackGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_pack_gen", ((P$.BaseBlock$lambda483||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda483", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(484,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda483.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxTrnaInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_trna_info", ((P$.BaseBlock$lambda484||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda484", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(485,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda484.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxUnpair$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_unpair", ((P$.BaseBlock$lambda485||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda485", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(486,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda485.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRefineLsRestrNcs$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_ls_restr_ncs", ((P$.BaseBlock$lambda486||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda486", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(487,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda486.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructNcsVirusGen$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_ncs_virus_gen", ((P$.BaseBlock$lambda487||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda487", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(488,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda487.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSequenceAnnotation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_sequence_annotation", ((P$.BaseBlock$lambda488||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda488", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(489,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda488.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPostProcessDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_post_process_details", ((P$.BaseBlock$lambda489||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda489", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(490,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda489.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxPostProcessStatus$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_post_process_status", ((P$.BaseBlock$lambda490||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda490", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(491,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda490.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_link", ((P$.BaseBlock$lambda491||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda491", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(492,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda491.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxMissingResidueList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_missing_residue_list", ((P$.BaseBlock$lambda492||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda492", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(493,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda492.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDataProcessingCell$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_data_processing_cell", ((P$.BaseBlock$lambda493||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda493", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(494,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda493.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDataProcessingReflns$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_data_processing_reflns", ((P$.BaseBlock$lambda494||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda494", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(495,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda494.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDataProcessingDetector$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_data_processing_detector", ((P$.BaseBlock$lambda495||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda495", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(496,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda495.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompNonstandard$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_nonstandard", ((P$.BaseBlock$lambda496||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda496", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(497,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda496.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityPolyProteinClass$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_poly_protein_class", ((P$.BaseBlock$lambda497||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda497", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(498,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda497.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityNameTaxonomyTree$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_name_taxonomy_tree", ((P$.BaseBlock$lambda498||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda498", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(499,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda498.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityNameTaxonomy$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_name_taxonomy", ((P$.BaseBlock$lambda499||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda499", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(500,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda499.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityNameInstance$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_name_instance", ((P$.BaseBlock$lambda500||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda500", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(501,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda500.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxTableinfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_tableinfo", ((P$.BaseBlock$lambda501||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda501", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(502,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda501.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxColumninfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_columninfo", ((P$.BaseBlock$lambda502||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda502", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(503,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda502.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValAngle$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_val_angle", ((P$.BaseBlock$lambda503||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda503", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(504,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda503.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValBond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_val_bond", ((P$.BaseBlock$lambda504||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda504", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(505,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda504.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValContact$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_val_contact", ((P$.BaseBlock$lambda505||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda505", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(506,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda505.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValSymContact$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_val_sym_contact", ((P$.BaseBlock$lambda506||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda506", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(507,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda506.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRmchOutlier$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_rmch_outlier", ((P$.BaseBlock$lambda507||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda507", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(508,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda507.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxMissingAtomPoly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_missing_atom_poly", ((P$.BaseBlock$lambda508||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda508", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(509,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda508.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxMissingAtomNonpoly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_missing_atom_nonpoly", ((P$.BaseBlock$lambda509||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda509", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(510,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda509.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxValChiral$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_val_chiral", ((P$.BaseBlock$lambda510||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda510", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(511,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda510.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAtlas$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_atlas", ((P$.BaseBlock$lambda511||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda511", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(512,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda511.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSummaryFlags$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_summary_flags", ((P$.BaseBlock$lambda512||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda512", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(513,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda512.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityFuncBindMode$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_func_bind_mode", ((P$.BaseBlock$lambda513||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda513", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(514,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda513.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityFuncEnzyme$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_func_enzyme", ((P$.BaseBlock$lambda514||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda514", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(515,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda514.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityFuncRegulatory$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_func_regulatory", ((P$.BaseBlock$lambda515||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda515", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(516,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda515.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityFuncStructural$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_func_structural", ((P$.BaseBlock$lambda516||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda516", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(517,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda516.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityFuncOther$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_func_other", ((P$.BaseBlock$lambda517||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda517", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(518,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda517.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityPolyDomain$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_poly_domain", ((P$.BaseBlock$lambda518||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda518", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(519,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda518.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNaStructKeywds$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_na_struct_keywds", ((P$.BaseBlock$lambda519||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda519", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(520,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda519.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityPolyNaType$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_poly_na_type", ((P$.BaseBlock$lambda520||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda520", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(521,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda520.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityPolyNaNonstandard$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_poly_na_nonstandard", ((P$.BaseBlock$lambda521||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda521", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(522,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda521.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxVirtualAngle$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_virtual_angle", ((P$.BaseBlock$lambda522||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda522", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(523,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda522.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxVirtualBond$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_virtual_bond", ((P$.BaseBlock$lambda523||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda523", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(524,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda523.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxVirtualTorsion$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_virtual_torsion", ((P$.BaseBlock$lambda524||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda524", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(525,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda524.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSequencePattern$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_sequence_pattern", ((P$.BaseBlock$lambda525||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda525", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(526,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda525.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStereochemistry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_stereochemistry", ((P$.BaseBlock$lambda526||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda526", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(527,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda526.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRmsDevsCovalent$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_rms_devs_covalent", ((P$.BaseBlock$lambda527||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda527", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(528,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda527.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxRmsDevsCovByMonomer$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_rms_devs_cov_by_monomer", ((P$.BaseBlock$lambda528||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda528", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(529,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda528.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSugarPhosphateGeometry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_sugar_phosphate_geometry", ((P$.BaseBlock$lambda529||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda529", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(530,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda529.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxNmrComputing$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_nmr_computing", ((P$.BaseBlock$lambda530||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda530", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(531,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda530.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAuditConformExtension$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit_conform_extension", ((P$.BaseBlock$lambda531||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda531", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(532,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda531.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDccMapman$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_dcc_mapman", ((P$.BaseBlock$lambda532||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda532", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(533,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda532.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDccRsccMapman$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_dcc_rscc_mapman", ((P$.BaseBlock$lambda533||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda533", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(534,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda533.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDccRsccMapmanOverall$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_dcc_rscc_mapman_overall", ((P$.BaseBlock$lambda534||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda534", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(535,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda534.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDccDensity$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_dcc_density", ((P$.BaseBlock$lambda535||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda535", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(536,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda535.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDccGeometry$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_dcc_geometry", ((P$.BaseBlock$lambda536||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda536", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(537,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda536.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDccDensityCorr$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_dcc_density_corr", ((P$.BaseBlock$lambda537||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda537", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(538,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda537.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDccMap$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_dcc_map", ((P$.BaseBlock$lambda538||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda538", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(539,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda538.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepositGroup$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_deposit_group", ((P$.BaseBlock$lambda539||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda539", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(540,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda539.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxDepositGroupIndex$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_deposit_group_index", ((P$.BaseBlock$lambda540||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda540", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(541,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda540.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssemblyAuthEvidence$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly_auth_evidence", ((P$.BaseBlock$lambda541||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda541", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(542,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda541.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxStructAssemblyAuthClassification$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_assembly_auth_classification", ((P$.BaseBlock$lambda542||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda542", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(543,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda542.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxCrystalAlignment$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_alignment", ((P$.BaseBlock$lambda543||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda543", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(544,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda543.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAuditRevisionHistory$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit_revision_history", ((P$.BaseBlock$lambda544||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda544", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(545,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda544.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAuditRevisionGroup$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit_revision_group", ((P$.BaseBlock$lambda545||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda545", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(546,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda545.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAuditRevisionCategory$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit_revision_category", ((P$.BaseBlock$lambda546||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda546", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(547,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda546.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAuditRevisionDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit_revision_details", ((P$.BaseBlock$lambda547||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda547", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(548,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda547.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxAuditRevisionItem$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_audit_revision_item", ((P$.BaseBlock$lambda548||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda548", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(549,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda548.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSupportingExpDataSet$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_supporting_exp_data_set", ((P$.BaseBlock$lambda549||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda549", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(550,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda549.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSerialCrystallographyMeasurement$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_serial_crystallography_measurement", ((P$.BaseBlock$lambda550||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda550", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(551,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda550.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSerialCrystallographySampleDelivery$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_serial_crystallography_sample_delivery", ((P$.BaseBlock$lambda551||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda551", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(552,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda551.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSerialCrystallographySampleDeliveryInjection$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_serial_crystallography_sample_delivery_injection", ((P$.BaseBlock$lambda552||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda552", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(553,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda552.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSerialCrystallographySampleDeliveryFixedTarget$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_serial_crystallography_sample_delivery_fixed_target", ((P$.BaseBlock$lambda553||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda553", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(554,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda553.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxSerialCrystallographyDataReduction$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_serial_crystallography_data_reduction", ((P$.BaseBlock$lambda554||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda554", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(555,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda554.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompSynonyms$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_synonyms", ((P$.BaseBlock$lambda555||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda555", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(556,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda555.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompRelated$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_related", ((P$.BaseBlock$lambda556||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda556", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(557,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda556.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxChemCompAtomRelated$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_chem_comp_atom_related", ((P$.BaseBlock$lambda557||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda557", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(558,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda557.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityBranchList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_branch_list", ((P$.BaseBlock$lambda558||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda558", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(559,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda558.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityBranchLink$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_branch_link", ((P$.BaseBlock$lambda559||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda559", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(560,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda559.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxEntityBranch$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_entity_branch", ((P$.BaseBlock$lambda560||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda560", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(561,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda560.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getPdbxBranchScheme$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("pdbx_branch_scheme", ((P$.BaseBlock$lambda561||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda561", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(562,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda561.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStartingModelDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_starting_model_details", ((P$.BaseBlock$lambda562||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda562", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(563,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda562.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStartingComparativeModels$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_starting_comparative_models", ((P$.BaseBlock$lambda563||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda563", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(564,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda563.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStartingComputationalModels$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_starting_computational_models", ((P$.BaseBlock$lambda564||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda564", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(565,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda564.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStartingModelSeqDif$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_starting_model_seq_dif", ((P$.BaseBlock$lambda565||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda565", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(566,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda565.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmModelRepresentation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_model_representation", ((P$.BaseBlock$lambda566||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda566", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(567,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda566.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStructAssembly$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_struct_assembly", ((P$.BaseBlock$lambda567||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda567", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(568,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda567.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStructAssemblyDetails$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_struct_assembly_details", ((P$.BaseBlock$lambda568||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda568", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(569,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda568.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStructAssemblyClassList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_struct_assembly_class_list", ((P$.BaseBlock$lambda569||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda569", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(570,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda569.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStructAssemblyClass$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_struct_assembly_class", ((P$.BaseBlock$lambda570||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda570", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(571,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda570.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmModelingProtocol$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_modeling_protocol", ((P$.BaseBlock$lambda571||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda571", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(572,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda571.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmMultiStateModeling$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_multi_state_modeling", ((P$.BaseBlock$lambda572||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda572", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(573,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda572.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmOrderedEnsemble$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_ordered_ensemble", ((P$.BaseBlock$lambda573||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda573", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(574,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda573.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmModelingPostProcess$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_modeling_post_process", ((P$.BaseBlock$lambda574||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda574", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(575,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda574.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmEnsembleInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_ensemble_info", ((P$.BaseBlock$lambda575||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda575", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(576,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda575.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmModelList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_model_list", ((P$.BaseBlock$lambda576||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda576", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(577,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda576.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmModelRepresentative$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_model_representative", ((P$.BaseBlock$lambda577||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda577", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(578,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda577.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmDatasetList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_dataset_list", ((P$.BaseBlock$lambda578||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda578", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(579,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda578.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmDatasetGroup$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_dataset_group", ((P$.BaseBlock$lambda579||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda579", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(580,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda579.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmRelatedDatasets$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_related_datasets", ((P$.BaseBlock$lambda580||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda580", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(581,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda580.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmDatasetRelatedDbReference$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_dataset_related_db_reference", ((P$.BaseBlock$lambda581||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda581", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(582,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda581.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmExternalReferenceInfo$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_external_reference_info", ((P$.BaseBlock$lambda582||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda582", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(583,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda582.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmExternalFiles$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_external_files", ((P$.BaseBlock$lambda583||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda583", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(584,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda583.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmDatasetExternalReference$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_dataset_external_reference", ((P$.BaseBlock$lambda584||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda584", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(585,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda584.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmLocalizationDensityFiles$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_localization_density_files", ((P$.BaseBlock$lambda585||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda585", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(586,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda585.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmPredictedContactRestraint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_predicted_contact_restraint", ((P$.BaseBlock$lambda586||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda586", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(587,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda586.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmHydroxylRadicalFpRestraint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_hydroxyl_radical_fp_restraint", ((P$.BaseBlock$lambda587||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda587", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(588,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda587.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmCrossLinkList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_cross_link_list", ((P$.BaseBlock$lambda588||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda588", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(589,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda588.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmCrossLinkRestraint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_cross_link_restraint", ((P$.BaseBlock$lambda589||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda589", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(590,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda589.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmCrossLinkResult$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_cross_link_result", ((P$.BaseBlock$lambda590||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda590", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(591,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda590.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmCrossLinkResultParameters$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_cross_link_result_parameters", ((P$.BaseBlock$lambda591||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda591", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(592,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda591.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhm2demClassAverageRestraint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_2dem_class_average_restraint", ((P$.BaseBlock$lambda592||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda592", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(593,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda592.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhm2demClassAverageFitting$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_2dem_class_average_fitting", ((P$.BaseBlock$lambda593||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda593", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(594,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda593.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhm3demRestraint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_3dem_restraint", ((P$.BaseBlock$lambda594||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda594", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(595,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda594.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmSasRestraint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_sas_restraint", ((P$.BaseBlock$lambda595||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda595", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(596,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda595.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmStartingModelCoord$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_starting_model_coord", ((P$.BaseBlock$lambda596||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda596", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(597,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda596.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmSphereObjSite$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_sphere_obj_site", ((P$.BaseBlock$lambda597||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda597", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(598,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda597.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGaussianObjSite$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_gaussian_obj_site", ((P$.BaseBlock$lambda598||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda598", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(599,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda598.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGaussianObjEnsemble$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_gaussian_obj_ensemble", ((P$.BaseBlock$lambda599||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda599", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(600,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda599.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmResiduesNotModeled$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_residues_not_modeled", ((P$.BaseBlock$lambda600||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda600", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(601,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda600.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmFeatureList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_feature_list", ((P$.BaseBlock$lambda601||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda601", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(602,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda601.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmPseudoSiteFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_pseudo_site_feature", ((P$.BaseBlock$lambda602||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda602", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(603,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda602.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmPolyAtomFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_poly_atom_feature", ((P$.BaseBlock$lambda603||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda603", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(604,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda603.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmPolyResidueFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_poly_residue_feature", ((P$.BaseBlock$lambda604||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda604", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(605,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda604.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmNonPolyFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_non_poly_feature", ((P$.BaseBlock$lambda605||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda605", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(606,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda605.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmInterfaceResidueFeature$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_interface_residue_feature", ((P$.BaseBlock$lambda606||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda606", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(607,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda606.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmDerivedDistanceRestraint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_derived_distance_restraint", ((P$.BaseBlock$lambda607||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda607", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(608,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda607.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectList$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_list", ((P$.BaseBlock$lambda608||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda608", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(609,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda608.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectCenter$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_center", ((P$.BaseBlock$lambda609||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda609", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(610,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda609.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectTransformation$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_transformation", ((P$.BaseBlock$lambda610||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda610", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(611,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda610.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectSphere$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_sphere", ((P$.BaseBlock$lambda611||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda611", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(612,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda611.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectTorus$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_torus", ((P$.BaseBlock$lambda612||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda612", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(613,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda612.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectHalfTorus$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_half_torus", ((P$.BaseBlock$lambda613||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda613", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(614,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda613.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectAxis$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_axis", ((P$.BaseBlock$lambda614||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda614", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(615,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda614.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectPlane$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_plane", ((P$.BaseBlock$lambda615||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda615", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(616,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda615.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$, 'getIhmGeometricObjectDistanceRestraint$', function () {
return this.categories.computeIfAbsent$TK$java_util_function_Function("ihm_geometric_object_distance_restraint", ((P$.BaseBlock$lambda616||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda616", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(617,1).c$$S,[t])});
})()
), Clazz.new_(P$.BaseBlock$lambda616.$init$, [this, null]))).get$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:25 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
