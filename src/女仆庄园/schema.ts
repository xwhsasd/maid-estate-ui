export const Schema = z.object({
  系统: z.object({
    日期: z.string().prefault('星历1248年7月15日'),
    时段: z.enum(['清晨', '上午', '午后', '傍晚', '夜晚', '深夜']).prefault('清晨'),
    场景: z.enum(['庄园主楼', '迷雾森林', '镜面湖泊', '南山', '东滩', '晨风城', '自由港', '其他']).prefault('庄园主楼'),
    剧情阶段: z.enum(['开局探索', '经营起步', '扩张期', '鼎盛期']).prefault('开局探索'),
  }).prefault({}),
  庄园: z.object({
    现金: z.coerce.number().transform(value => _.clamp(value, 0, 999999)).prefault(5000),
    周收支: z.object({
      收入: z.coerce.number().prefault(0),
      支出: z.coerce.number().prefault(0),
    }).prefault({}),
    库存: z.record(z.string().describe('资源名'), z.coerce.number()).prefault({}),
    设施: z.record(z.string().describe('设施名'), z.string().describe('设施状态')).prefault({}),
    待办: z.record(z.string().describe('任务名'), z.string().describe('任务描述')).prefault({}),
    声望: z.coerce.number().transform(value => _.clamp(value, 0, 100)).prefault(0),
  }).prefault({}),
  女仆: z.record(z.string().describe('女仆名'), z.object({
    在场: z.boolean().prefault(true),
    职级: z.enum(['女仆学徒', '初级女仆', '中级女仆', '高级女仆', '特级女仆', '女仆长', '大女仆长', '大管家']).prefault('女仆学徒'),
    岗位: z.string().prefault('侍奉服务'),
    好感: z.coerce.number().transform(value => _.clamp(value, 0, 200)).prefault(0),
    魅力: z.coerce.number().transform(value => _.clamp(value, 0, 100)).prefault(50),
    实力: z.string().prefault('普通'),
    战斗属性: z.object({
      HP: z.coerce.number().prefault(100),
      ATK: z.coerce.number().prefault(10),
      DEF: z.coerce.number().prefault(10),
      技能: z.record(z.string().describe('技能名'), z.string().describe('技能描述')).prefault({}),
    }).prefault({}),
    状态: z.string().prefault('空闲'),
    近期事件: z.string().prefault(''),
  })).prefault({}),
  主角: z.object({
    状态: z.string().prefault('健康'),
    物品: z.record(z.string().describe('物品名'), z.string().describe('物品描述')).prefault({}),
    线索: z.record(z.string().describe('线索名'), z.string().describe('线索状态')).prefault({}),
  }).prefault({}),
  剧情: z.object({
    已登场角色: z.record(z.string().describe('角色名'), z.boolean()).prefault({}),
    当前任务: z.string().prefault(''),
    战斗回合: z.coerce.number().prefault(1),
    战斗状态: z.record(z.string().describe('参战者名'), z.object({
      当前HP: z.coerce.number().prefault(100),
      行动顺序: z.coerce.number().prefault(1),
    })).prefault({}),
  }).prefault({}),
});

export type Schema = z.output<typeof Schema>;
