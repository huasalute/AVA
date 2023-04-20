/* advisor */
export { Advisor } from './advisor';
export type {
  Advice,
  Lint,
  AdviseParams,
  ChartAdviseParams,
  AdvisorOptions,
  Theme,
  SmartColorOptions,
  AdviseResult,
  LintResult,
  ScoringResultForRule,
  ScoringResultForChartType,
  Preferences,
  LinterOptions,
  LintParams,
  RuleModule,
  AdvisorConfig,
} from './advisor';

/* CKB */
export {
  ckb,
  ckbDict,
  CHANNELS,
  CHART_IDS,
  COORDINATE_SYSTEMS,
  FAMILIES,
  GRAPHIC_CATEGORIES,
  LEVEL_OF_MEASUREMENTS,
  PURPOSES,
  RECOMMEND_RATINGS,
  SHAPES,
} from './ckb';
export type {
  ChartId,
  Family,
  Purpose,
  CoordinateSystem,
  GraphicCategory,
  Shape,
  LevelOfMeasurement,
  DataPrerequisite,
  Channel,
  RecommendRating,
  PureChartKnowledge,
  ChartKnowledgeBase,
  CkbConfig,
} from './ckb';

/* data */
export {
  analyzeField,
  Series,
  DataFrame,
  min,
  max,
  sum,
  mean,
  normalDistributionQuantile,
  tDistributionQuantile,
  distinct,
  valueMap,
  missing,
  valid,
  pearson,
  covariance,
  coefficientOfVariance,
  standardDeviation,
  variance,
  quantile,
  quartile,
  median,
  harmonicMean,
  geometricMean,
  pcorrtest,
  cdf,
  maxabs,
} from './data';
export type {
  FieldType,
  FieldInfo,
  StringFieldInfo,
  NumberFieldInfo,
  DateFieldInfo,
  NDArray,
  SeriesData,
  FrameData,
  Axis,
  Extra,
  FieldsInfo,
} from './data';

/* insight */
export { getInsights, generateInsightVisualizationSpec } from './insight';
export type {
  Datum,
  DomainType,
  MeasureMethod,
  ImpactMeasureMethod,
  Aggregator,
  DataProperty,
  Measure,
  Dimension,
  Subspace,
  ImpactMeasure,
  SubjectInfo,
  InsightType,
  HomogeneousInsightType,
  PatternInfo,
  InsightVisualizationSpec,
  InsightInfo,
  InsightVisualizationOptions,
  InsightOptions,
  BasePatternInfo,
  HomogeneousPatternInfo,
  PointPatternInfo,
  CategoryOutlierInfo,
  TimeSeriesOutlierInfo,
  ChangePointInfo,
  MajorityInfo,
  LinearRegressionResult,
  LowVarianceInfo,
  CorrelationInfo,
  InsightsResult,
} from './insight';

/* NTV (Narrative Text Vis) */
export {
  generateTextSpec,
  isCustomSection,
  isStandardSection,
  isCustomParagraph,
  isTextParagraph,
  isBulletParagraph,
  getHeadingWeight,
  isHeadingParagraph,
  isEntityPhrase,
  isCustomPhrase,
  isTextPhrase,
  isEntityType,
  isEscapePhrase,
  ENTITY_TYPES,
} from './ntv';
export type {
  NarrativeTextSpec,
  HeadlineSpec,
  SectionSpec,
  StandardSectionSpec,
  ParagraphSpec,
  HeadingParagraphSpec,
  TextParagraphSpec,
  BulletsParagraphSpec,
  BulletItemSpec,
  CustomBlockElement,
  PhraseSpec,
  TextPhraseSpec,
  EntityPhraseSpec,
  EscapePhraseSpec,
  CustomPhraseSpec,
  ValueAssessment,
  EntityType,
  EntityMetaData,
  CustomMetaData,
  Structure,
  StructureTemp,
  Variable,
} from './ntv/types';
