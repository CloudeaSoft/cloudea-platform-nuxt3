interface SkinIni {
  General: General
  Colours: Colours
  Fonts: Fonts
  CatchTheBeat: CatchTheBeat
  Mania: Mania
}
interface General {
  Name: UnitOption
  Author: UnitOption
  Version: UnitOption
  AnimationFramerate: UnitOption
  AllowSliderBallTint: UnitOption
  ComboBurstRandom: UnitOption
  CursorCentre: UnitOption
  CursorExpand: UnitOption
  CursorRotate: UnitOption
  CursorTrailRotate: UnitOption
  CustomComboBurstSounds: UnitOption
  HitCircleOverlayAboveNumber: UnitOption
  LayeredHitSounds: UnitOption
  SliderBallFlip: UnitOption
  SpinnerFadePlayfield: UnitOption
  SpinnerFrequencyModulate: UnitOption
  SpinnerNoBlink: UnitOption
}
interface Colours {
  Combo1: UnitOption
  Combo2: UnitOption
  Combo3: UnitOption
  Combo4: UnitOption
  Combo5: UnitOption
  Combo6: UnitOption
  Combo7: UnitOption
  Combo8: UnitOption
  InputOverlayText: UnitOption
  MenuGlow: UnitOption
  SliderBall: UnitOption
  SliderBorder: UnitOption
  SliderTrackOverride: UnitOption
  SongSelectActiveText: UnitOption
  SongSelectInactiveText: UnitOption
  SpinnerBackground: UnitOption
  StarBreakAdditive: UnitOption
}
interface Fonts {
  HitCirclePrefix: UnitOption
  HitCircleOverlap: UnitOption
  ScorePrefix: UnitOption
  ScoreOverlap: UnitOption
  ComboPrefix: UnitOption
  ComboOverlap: UnitOption
}
interface CatchTheBeat {
  HyperDash: UnitOption
  HyperDashFruit: UnitOption
  HyperDashAfterImage: UnitOption
}
interface Mania {
  Keys: UnitOption
  ColumnStart: UnitOption
  ColumnRight: UnitOption
  ColumnSpacing: UnitOption
  ColumnWidth: UnitOption
  ColumnLineWidth: UnitOption
  BarlineHeight: UnitOption
  LightingNWidth: UnitOption
  LightingLWidth: UnitOption
  WidthForNoteHeightScale: UnitOption
  HitPosition: UnitOption
  LightPosition: UnitOption
  ComboPosition: UnitOption
  ScorePosition: UnitOption
  JudgementLine: UnitOption
  LightFramePerSecond: UnitOption
  SpecialStyle: UnitOption
  ComboBurstStyle: UnitOption
  SplitStages: UnitOption
  StageSeparation: UnitOption
  SeparateScore: UnitOption
  KeysUnderNotes: UnitOption
  UpsideDown: UnitOption
  KeyFlipWhenUpsideDown: UnitOption
  // KeyFlipWhenUpsideDown0:UnitOption,
  NoteFlipWhenUpsideDown: UnitOption
  // NoteFlipWhenUpsideDown0:UnitOption,
  // NoteFlipWhenUpsideDown0H:UnitOption,
  // NoteFlipWhenUpsideDown0L:UnitOption,
  // NoteFlipWhenUpsideDown0T:UnitOption,
  NoteBodyStyle: UnitOption
  // NoteBodyStyle0:UnitOption,
  Colour: UnitOption
  ColourLight: UnitOption
  ColourColumnLine: UnitOption
  ColourBarline: UnitOption
  ColourJudgementLine: UnitOption
  ColourKeyWarning: UnitOption
  ColourHold: UnitOption
  ColourBreak: UnitOption
}

class UnitOption {
  defaultVal: string | boolean
  profile: string

  constructor(newDefault: string | boolean, newProfile: string) {
    this.defaultVal = newDefault
    this.profile = newProfile
  }
}

const skinIniTransText: SkinIni = {
  General: {
    Name: {
      defaultVal: '(空值)',
      profile: `已弃用. 皮肤名称，osu客户端的皮肤列表会显示对应文件夹的名称`
    },
    Author: {
      defaultVal: `(空值)`,
      profile: `已弃用. 作者名，优先使用用户名`
    },
    Version: {
      defaultVal: `(空值)`,
      profile: `皮肤系统的版本号，空值则使用最新版本`
    },
    AnimationFramerate: {
      defaultVal: `-1`,
      profile: `各种动画效果的帧数, 包括circleoverlays, sliderball, pippidon, osu!mania notes and lighting`
    },
    AllowSliderBallTint: {
      defaultVal: `0`,
      profile: `0/1`
    },
    ComboBurstRandom: {
      defaultVal: `0`,
      profile: `0/1. 随机的ComboBurst位置`
    },
    CursorCentre: {
      defaultVal: ``,
      profile: ``
    },
    CursorExpand: {
      defaultVal: ``,
      profile: ``
    },
    CursorRotate: {
      defaultVal: `1`,
      profile: `0/1. 鼠标光标是否持续旋转`
    },
    CursorTrailRotate: {
      defaultVal: `1`,
      profile: `0/1. 光标轨迹是否持续旋转`
    },
    CustomComboBurstSounds: {
      defaultVal: ``,
      profile: ``
    },
    HitCircleOverlayAboveNumber: {
      defaultVal: ``,
      profile: ``
    },
    LayeredHitSounds: {
      defaultVal: ``,
      profile: ``
    },
    SliderBallFlip: {
      defaultVal: ``,
      profile: ``
    },
    SpinnerFadePlayfield: {
      defaultVal: ``,
      profile: ``
    },
    SpinnerFrequencyModulate: {
      defaultVal: ``,
      profile: ``
    },
    SpinnerNoBlink: {
      defaultVal: ``,
      profile: ``
    }
  },
  Colours: {
    Combo1: {
      defaultVal: ``,
      profile: ``
    },
    Combo2: {
      defaultVal: ``,
      profile: ``
    },
    Combo3: {
      defaultVal: ``,
      profile: ``
    },
    Combo4: {
      defaultVal: ``,
      profile: ``
    },
    Combo5: {
      defaultVal: ``,
      profile: ``
    },
    Combo6: {
      defaultVal: ``,
      profile: ``
    },
    Combo7: {
      defaultVal: ``,
      profile: ``
    },
    Combo8: {
      defaultVal: ``,
      profile: ``
    },
    InputOverlayText: {
      defaultVal: ``,
      profile: ``
    },
    MenuGlow: {
      defaultVal: ``,
      profile: ``
    },
    SliderBall: {
      defaultVal: ``,
      profile: ``
    },
    SliderBorder: {
      defaultVal: ``,
      profile: ``
    },
    SliderTrackOverride: {
      defaultVal: ``,
      profile: ``
    },
    SongSelectActiveText: {
      defaultVal: ``,
      profile: ``
    },
    SongSelectInactiveText: {
      defaultVal: ``,
      profile: ``
    },
    SpinnerBackground: {
      defaultVal: ``,
      profile: ``
    },
    StarBreakAdditive: {
      defaultVal: ``,
      profile: ``
    }
  },
  Fonts: {
    HitCirclePrefix: {
      defaultVal: ``,
      profile: ``
    },
    HitCircleOverlap: {
      defaultVal: ``,
      profile: ``
    },
    ScorePrefix: {
      defaultVal: ``,
      profile: ``
    },
    ScoreOverlap: {
      defaultVal: ``,
      profile: ``
    },
    ComboPrefix: {
      defaultVal: ``,
      profile: ``
    },
    ComboOverlap: {
      defaultVal: ``,
      profile: ``
    }
  },
  CatchTheBeat: {
    HyperDash: {
      defaultVal: ``,
      profile: ``
    },
    HyperDashFruit: {
      defaultVal: ``,
      profile: ``
    },
    HyperDashAfterImage: {
      defaultVal: ``,
      profile: ``
    }
  },
  Mania: {
    Keys: {
      defaultVal: `1~18`,
      profile: `对应的key数`
    },
    ColumnStart: {
      defaultVal: `136`,
      profile: `轨道左侧距离显示器左边的距离，数值越大越靠右`
    },
    ColumnRight: {
      defaultVal: `19`,
      profile: `轨道右侧距离显示器左边的距离`
    },
    ColumnSpacing: {
      defaultVal: `0`,
      profile: `轨道之间的距离`
    },
    ColumnWidth: {
      defaultVal: `30`,
      profile: `轨道宽度`
    },
    ColumnLineWidth: {
      defaultVal: `2`,
      profile: `轨道分隔线宽度`
    },
    BarlineHeight: {
      defaultVal: `1.2`,
      profile: `小节线高度`
    },
    LightingNWidth: {
      defaultVal: `空`,
      profile: `LightingN图片的宽度`
    },
    LightingLWidth: {
      defaultVal: `空`,
      profile: `LightingW图片的宽度`
    },
    WidthForNoteHeightScale: {
      defaultVal: `整数`,
      profile: `轨道宽度不同时Note的恒定高度`
    },
    HitPosition: {
      defaultVal: `402`,
      profile: `0~480. 判定线高度，数值越大判定线越低`
    },
    LightPosition: {
      defaultVal: `413`,
      profile: `按键光位置，数值越大按键光位置越低，请保持该数值比判定线高度+1`
    },
    ComboPosition: {
      defaultVal: `整数`,
      profile: `连击计数的高度`
    },
    ScorePosition: {
      defaultVal: `整数`,
      profile: `Note得分的高度`
    },
    JudgementLine: {
      defaultVal: `1`,
      profile: `0/1. 判定线是否存在`
    },
    LightFramePerSecond: {
      defaultVal: `整数`,
      profile: `每秒钟播放光效图片（StageLight）的数量`
    },
    SpecialStyle: {
      defaultVal: `0`,
      profile: `0/1/2. 特殊键(皿)的位置，不用改，游戏内可以设置`
    },
    ComboBurstStyle: {
      defaultVal: `1`,
      profile: `0/1/2. 连击数每增加一定值就会触发的人物特效. 0:左, 1:右, 2:两边同时`
    },
    SplitStages: {
      defaultVal: `0`,
      profile: `0/1. 是否要将stage分成两个`
    },
    StageSeparation: {
      defaultVal: ``,
      profile: ``
    },
    SeparateScore: {
      defaultVal: ``,
      profile: ``
    },
    KeysUnderNotes: {
      defaultVal: ``,
      profile: ``
    },
    UpsideDown: {
      defaultVal: `0`,
      profile: `0/1。Note流向，0为下落式，1为上升式`
    },
    KeyFlipWhenUpsideDown: {
      defaultVal: ``,
      profile: ``
    },
    NoteFlipWhenUpsideDown: {
      defaultVal: ``,
      profile: `0/1. Should the column's hold note tail be flipped when the stage is flipped?`
    },
    NoteBodyStyle: {
      defaultVal: `1`,
      profile: `0/1/2. What style should be used for all hold note bodies?`
    },
    Colour: {
      defaultVal: `0,0,0,255`,
      profile: `RGB(a) / 轨道的颜色`
    },
    ColourLight: {
      defaultVal: `55,255,255`,
      profile: `RGB / 轨道按键光效的颜色`
    },
    ColourColumnLine: {
      defaultVal: `255,255,255,255`,
      profile: `RGB(a) / 轨道分隔线的颜色`
    },
    ColourBarline: {
      defaultVal: `255,255,255,255`,
      profile: `RGB(a) / 小节线的颜色`
    },
    ColourJudgementLine: {
      defaultVal: `255,255,255`,
      profile: `RGB / 判定线颜色`
    },
    ColourKeyWarning: {
      defaultVal: `0,0,0`,
      profile: `RGB / 游戏开始前的按键绑定检查`
    },
    ColourHold: {
      defaultVal: `255,191,51,255`,
      profile: `RGB(a) / 按住长条时连击计数的颜色`
    },
    ColourBreak: {
      defaultVal: `255,191,51,255`,
      profile: `RGB(a) / 断连时连击计数的颜色`
    }
  }
}

const getTrans = (Section: string, item: string) => {
  // Mania修正
  if (Section.match(/^Mania/)) {
    Section = 'Mania'
  }
  // 数字修正
  if (item.match(/[0-9]/g)) {
    item = item.replace(/[0-9]/g, '')
  }
  for (const keya in skinIniTransText) {
    if (keya == Section) {
      for (const keyb in skinIniTransText[keya]) {
        if (keyb == item) {
          const result = skinIniTransText[keya][keyb]
          return new UnitOption(
            result.defaultVal == '' ? '无' : result.defaultVal,
            result.profile == '' ? '无' : result.profile
          )
        }
      }
    }
  }
  return new UnitOption('无', '无')
}

// json to skin.ini
const encode = (obj: object, opt: {} = {}) => {
  if (typeof opt === 'string') {
    opt = { section: opt }
  }
  opt.align = opt.align === true
  opt.newline = opt.newline === true
  opt.sort = opt.sort === true
  opt.whitespace = opt.whitespace === true || opt.align === true
  // The `typeof` check is required because accessing the `process` directly fails on browsers.
  /* istanbul ignore next */
  opt.platform = opt.platform || (typeof process !== 'undefined' && process.platform)
  opt.bracketedArray = opt.bracketedArray !== false

  /* istanbul ignore next */
  // 换行符
  const eol = opt.platform === 'win32' ? '\r\n' : '\n'
  // 键值对分隔符
  const separator = opt.whitespace ? ' : ' : ': '
  // 子元素
  const children = []

  // 获取子元素的键
  const keys = opt.sort ? Object.keys(obj).sort() : Object.keys(obj)

  let padToChars = 0
  // If aligning on the separator, then padToChars is determined as follows:
  // 1. Get the keys
  // 2. Exclude keys pointing to objects unless the value is null or an array
  // 3. Add `[]` to array keys
  // 4. Ensure non empty set of keys
  // 5. Reduce the set to the longest `safe` key
  // 6. Get the `safe` length
  if (opt.align) {
    padToChars = safe(
      keys
        .filter((k) => obj[k] === null || Array.isArray(obj[k]) || typeof obj[k] !== 'object')
        .map((k) => (Array.isArray(obj[k]) ? `${k}[]` : k))
        .concat([''])
        .reduce((a, b) => (safe(a).length >= safe(b).length ? a : b))
    ).length
  }

  let out = ''

  // 遍历子元素的键
  for (const k of keys) {
    const val = obj[k]
    // Array
    if (val && Array.isArray(val)) {
      for (const item of val) {
        children.push(k)
      }
    }
    // Obj
    else if (val && typeof val === 'object') {
      children.push(k)
    }
    // 其他
    else {
      out += safe(k).padEnd(padToChars, ' ') + separator + safe(val) + eol
    }
  }

  // 写入Section
  if (opt.section && out.length) {
    //如果是Mania则去除数字
    const safeSection = safe(opt.section)
    const nativeSection = safeSection.match(/^Mania/)
      ? safeSection.replace(/[0-9]/g, '')
      : safeSection
    out = '[' + nativeSection + ']' + (opt.newline ? eol + eol : eol) + out
  }

  // 遍历Section
  for (const k of children) {
    const nk = splitSections(k, '.').join('\\.')
    const section = (opt.section ? opt.section : '') + nk

    //递归调用，分析child的内容
    const child = encode(obj[k], {
      ...opt,
      section
    })

    if (out.length && child.length) {
      out += eol
    }

    out += child
  }

  return out
}

function splitSections(str: string, separator: string) {
  let lastMatchIndex = 0
  let lastSeparatorIndex = 0
  let nextIndex = 0
  let sections = []

  do {
    nextIndex = str.indexOf(separator, lastMatchIndex)

    if (nextIndex !== -1) {
      lastMatchIndex = nextIndex + separator.length

      if (nextIndex > 0 && str[nextIndex - 1] === '\\') {
        continue
      }

      sections.push(str.slice(lastSeparatorIndex, nextIndex))
      lastSeparatorIndex = nextIndex + separator.length
    }
  } while (nextIndex !== -1)

  sections.push(str.slice(lastSeparatorIndex))

  return sections
}

// skin.ini to json
const decode = (str: String) => {
  // 1. 初始化容器
  const out = Object.create(null)
  // [section]指针
  let p = out
  // Section
  let section = null

  // 2. 分割ini文件字符串
  const lines = str.split(/[\r\n]+/g) // 分割后的字符串数组
  //          section          |key      : value
  const re = /^\[([^\]]*)\]\s*$|^([^:]+)(:(.*))?$/i // 判断用的正则表达式

  // 区分各个Mania集的后缀
  let maniaIndex: number = 0

  // 3. 遍历字符串数组的行
  for (const line of lines) {
    // 检查：line为空  /  若干个空白字符开头并包含;和#  / 全部是空白字符 / 注释
    if (!line || line.match(/^\s*[;#]/) || line.match(/^\s*$/) || line.match(/^\/\//)) {
      continue
    }

    // 检查：是否为[section]或是key:value的格式
    const match = line.match(re)
    if (!match) {
      continue
    }
    // console.log(match)

    // 解析：[Section]
    if (match[1] !== undefined) {
      section = unsafe(match[1])
      // 如果是Mania，则在Mania后加个数字以区别
      if (section === 'Mania') {
        p = out['Mania' + maniaIndex] = out['Mania' + maniaIndex] || Object.create(null)
        maniaIndex++
        continue
      }
      p = out[section] = out[section] || Object.create(null)
      continue
    }

    // 解析：键:值
    const key = unsafe(match[2])
    const nativeValue = match[4].split('//')[0] // 分割注释
    const value = unsafe(nativeValue) // 格式化值
    // 赋值
    p[key] = value

    // 控制台输出
    // console.log(section, key, value)
  }

  return out
}

// 检查引号
const isQuoted = (val: string) => {
  return (val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))
}

// 编码时修正字符串
const safe = (val: string) => {
  if (
    typeof val !== 'string' ||
    val.match(/[=\r\n]/) ||
    val.match(/^\[/) ||
    (val.length > 1 && isQuoted(val)) ||
    val !== val.trim()
  ) {
    return JSON.stringify(val)
  }
  return val.split(';').join('\\;').split('#').join('\\#')
}

// 解码时修正字符串
const unsafe = (val: string) => {
  val = (val || '').trim()
  if (isQuoted(val)) {
    // 在调用 JSON.parse 之前删除 单引号 '
    if (val.charAt(0) === "'") {
      val = val.slice(1, -1)
    }
    try {
      val = JSON.parse(val)
    } catch {
      // 忽略错误
    }
  } else {
    // 遍历val找到第一个未转义的 分号 ;
    // walk the val to find the first not-escaped ; character
    let esc = false
    let unesc = ''
    for (let i = 0, l = val.length; i < l; i++) {
      const c = val.charAt(i)
      if (esc) {
        if ('\\;#'.indexOf(c) !== -1) {
          unesc += c
        } else {
          unesc += '\\' + c
        }

        esc = false
      } else if (';#'.indexOf(c) !== -1) {
        break
      } else if (c === '\\') {
        esc = true
      } else {
        unesc += c
      }
    }
    if (esc) {
      unesc += '\\'
    }

    return unesc.trim()
  }
  return val
}

export default {
  parse: decode,
  stringify: encode,
  getTrans
}
