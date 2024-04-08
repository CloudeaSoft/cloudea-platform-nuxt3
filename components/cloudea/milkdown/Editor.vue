<script setup lang="ts">
// Core
import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core'
import { Milkdown, useEditor } from '@milkdown/vue'
import { nord } from '@milkdown/theme-nord'

import '@milkdown/theme-nord/style.css'
import '@/assets/css/milkdown/classic.scss'
import 'prism-themes/themes/prism-nord.css'

// Preset
import { commonmark } from '@milkdown/preset-commonmark'
import { gfm } from '@milkdown/preset-gfm'

// Plugins
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { history } from '@milkdown/plugin-history'
import { math } from '@milkdown/plugin-math'
import { emoji } from '@milkdown/plugin-emoji'
import { prism, prismConfig } from '@milkdown/plugin-prism'
import { cursor } from '@milkdown/plugin-cursor'
import { tooltipFactory } from '@milkdown/plugin-tooltip'
import { upload, uploadConfig } from '@milkdown/plugin-upload'
import { clipboard } from '@milkdown/plugin-clipboard'


// refractor language support for plugin-prism
import c from 'refractor/lang/c'
import cpp from 'refractor/lang/cpp'
import csharp from 'refractor/lang/csharp'
import css from 'refractor/lang/css'
import go from 'refractor/lang/go'
import haskell from 'refractor/lang/haskell'
import python from 'refractor/lang/python'
import java from 'refractor/lang/java'
import javascript from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript'
import jsx from 'refractor/lang/jsx'
import kotlin from 'refractor/lang/kotlin'
import r from 'refractor/lang/r'
import rust from 'refractor/lang/rust'
import scala from 'refractor/lang/scala'
import sql from 'refractor/lang/sql'
import tsx from 'refractor/lang/tsx'
import markdown from 'refractor/lang/markdown'

interface MilkdownEditorProps {
  editorValue: string
  height?: string
}

const props = withDefaults(defineProps<MilkdownEditorProps>(), {
  height: '300'
})

const emits = defineEmits<{
  save: [editorValue: string]
}>()

const valueMarkdown = computed(() => props.editorValue)

const editorContent = ref('')

const tootip = tooltipFactory('Test Tooltip')

useEditor((root) =>
  Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, valueMarkdown.value)

      // Auto save
      ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
        if (markdown !== prevMarkdown) {
          editorContent.value = markdown
          emits('save', markdown)
        }
      })

      // upload images
      // ctx.update()

      // Set prism
      ctx.set(prismConfig.key, {
        configureRefractor: (refractor) => {
          refractor.register(c)
          refractor.register(cpp)
          refractor.register(csharp)
          refractor.register(css)
          refractor.register(go)
          refractor.register(haskell)
          refractor.register(python)
          refractor.register(markdown)
          refractor.register(java)
          refractor.register(javascript)
          refractor.register(typescript)
          refractor.register(jsx)
          refractor.register(kotlin)
          refractor.register(r)
          refractor.register(rust)
          refractor.register(scala)
          refractor.register(sql)
          refractor.register(tsx)
        }
      })
    })
    .config(nord)
    .use(commonmark)
    .use(gfm)
    .use(history)
    .use(listener)
    .use(clipboard)
    .use(math)
    .use(emoji)
    .use(upload)
    .use(cursor)
    .use(prism)
    .use(tootip)
)
</script>

<template><Milkdown class="milkdown-editor" /></template>

<style lang="scss" scoped>
.milkdown-editor {
  height: 100%;
  position: relative;
}
</style>
