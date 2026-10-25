export const problems = [
  {
    number: '01',
    title: '只有片段',
    text: '你的经历很多，能被看见的很少。对方只能用有限的信息，补全对你的认识。',
    type: 'fragment',
  },
  {
    number: '02',
    title: '重点错位',
    text: '同一份介绍面对所有人。与对方最相关的经历和能力，未必先被看到。',
    type: 'focus',
  },
  {
    number: '03',
    title: '依据分散',
    text: '作品、项目与经历散落在不同平台。陈述很多，支撑陈述的依据却不在眼前。',
    type: 'scatter',
  },
];

export const mechanisms = [
  {
    number: '01',
    title: '一个入口',
    text: '首页、关于、作品放在同一个网址，用统一导航浏览，不必在多个平台之间来回找。',
    proof: '统一导航 · 连续阅读',
    type: 'portal',
  },
  {
    number: '02',
    title: '多面呈现',
    text: '首页放当前身份与重点，关于页展开经历，作品页呈现项目。不同读者各看相关部分。',
    proof: '首页 · 关于 · 作品',
    type: 'facets',
  },
  {
    number: '03',
    title: '证据随行',
    text: '经历关联项目，项目附上记录、文章或资料来源，方便对方核验。',
    proof: '经历 · 项目 · 依据',
    type: 'evidence',
  },
];

export const assets = [
  {
    number: '01',
    title: '归属于你',
    text: '交付网站源码与部署教程。你的内容与网站资产，由你持续使用。',
  },
  {
    number: '02',
    title: '随你生长',
    text: '新项目、作品和经历持续补充到同一个网址，不必另做网站。',
  },
  {
    number: '03',
    title: '随时间沉淀',
    text: '原有内容保留，新内容持续加入。再次分享时，对方看到更新后的完整网站。',
  },
];

export const plans = [
  {
    code: 'V1',
    name: 'Lite',
    original: '¥980',
    beta: '¥470',
    booking: '¥423',
    description: '成熟模板，轻量、清楚地呈现经历与作品。',
    features: ['标准视觉与布局', '标准信息结构', '中文版', '不含免费微调'],
  },
  {
    code: 'V2',
    name: 'Standard',
    original: '¥1,896',
    beta: '¥910',
    booking: '¥819',
    description: '专门定制设计与信息结构，有氛围感背景，文案去 AI 味。',
    features: ['专属设计感与氛围背景', '信息结构专门组织', '中英文双版', '1 次整体微调'],
    featured: true,
  },
  {
    code: 'V3',
    name: 'Pro',
    original: '¥3,980',
    beta: '¥1,910',
    booking: '¥1,719',
    description: '更高级的设计叙事与视差滚动，把网站做成一件作品。',
    features: ['高级设计叙事与视差动效', '按整体作品组织', '中英文双版', '2 次整体微调'],
  },
];

export const comparisonRows = [
  { label: '信息结构', values: ['标准结构', '为你专门组织', '按整体作品组织'] },
  { label: '视觉设计', values: ['标准视觉与布局', '专属设计感与氛围背景', '高级设计叙事与视差动效'] },
  { label: '文案表达', values: ['标准文案', '去 AI 味文案', '去 AI 味文案'] },
  { label: '叙事梳理', values: ['内容放入成熟结构', '身份访谈与叙事梳理', '定制叙事统筹'] },
  { label: '语言版本', values: ['中文', '中英文双版', '中英文双版'] },
  { label: '免费微调', values: ['不含免费微调', '1 次整体微调', '2 次整体微调'] },
  { label: '交付方式', values: ['源码 + 部署教程', '源码 + 部署教程', '源码 + 部署教程'] },
];

export const processSteps = [
  {
    number: '01',
    title: '预约沟通',
    text: '选择方案并预约，确认排期；支付 30% 定金后启动。',
  },
  {
    number: '02',
    title: '需求访谈',
    text: '填写问卷或访谈，确认身份、读者与表达边界。',
  },
  {
    number: '03',
    title: '网站制作',
    text: '梳理经历、项目与依据，完成各页面与整体结构。',
  },
  {
    number: '04',
    title: '视频预览',
    text: '通过桌面与手机视频，查看实际呈现效果。',
  },
  {
    number: '05',
    title: '返修微调',
    text: '按方案完成微调：V1 0 次 / V2 1 次 / V3 2 次。',
  },
  {
    number: '06',
    title: '部署教程',
    text: '交付源码与部署教程，由你自行部署。',
  },
];

export const faqs = [
  {
    question: '我会拿到什么？',
    answer: '交付完整个人网站源码与 PDF 部署教程，由你自行部署。多面派不收平台年费，也不托管你的网站。',
  },
  {
    question: '如何确认最终效果？',
    answer: '制作完成后，通过桌面与手机视频预览验收。你可以集中反馈意见，免费微调次数以所选方案为准：V1 不含免费微调，V2 含 1 次，V3 含 2 次。',
  },
  {
    question: '三档方案如何选择？',
    answer: '标准结构与视觉选 Lite；需要专属设计感、氛围背景与去 AI 味文案选 Standard；需要高级设计叙事与视差动效选 Pro。比较表用于核对具体差异。',
  },
  {
    question: '部署和后续更新如何处理？',
    answer: '你使用交付的源码与教程自行部署，也可以持续更新内容。团队不托管；域名或云服务如产生费用，以对应服务商说明为准。',
  },
  {
    question: '我的素材会作为案例公开吗？',
    answer: '未经授权，不公开你的素材与网站案例。当前官网中的演示人物、经历与项目均为虚构，仅用于说明产品结构。',
  },
  {
    question: '如何预约与支付？',
    answer: '选择方案并发起预约，邮件会自动带入意向方案。确认需求与排期后，支付 30% 定金启动制作。',
  },
];

export const bookingEmail = '19858372936@163.com';

export const wechatId = 'Wenluo430';

export function getBookingHref(plan) {
  const subject = plan
    ? `预约定制个人网站｜${plan.code} ${plan.name}`
    : '预约定制个人网站';
  const body = plan
    ? `你好，我想预约定制个人网站。\n\n意向方案：${plan.code} ${plan.name}\n二测早鸟价：${plan.beta}\n预约折后价：${plan.booking}\n\n希望进一步确认需求与排期。`
    : '你好，我想预约定制个人网站。\n\n希望进一步确认需求与排期。';

  return `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const bookingHref = getBookingHref();
