<script setup lang="ts">
const model = defineModel<string | undefined>({ required: true })

const isFocused = ref<boolean>(false)

const handleInputFocus = () => {
  isFocused.value = true
}

const handleInputBlur = () => {
  if (model.value == undefined) {
    isFocused.value = false
    return
  }
  if (model.value!.trim()) {
    isFocused.value = true
    return
  }
  isFocused.value = false
}

const clear = () => {
  model.value = ''
}

const showClear = () => {
  return props.clearable && !props.disabled && !props.readonly && !model.value
}

interface Props {
  /**
   * @description The ID of the input element.
   */
  id?: string

  /**
   * @description Whether the input should be disabled.
   */
  disabled?: boolean

  /**
   * @description The maximum number of characters a user can enter.
   */
  maxlength?: number

  /**
   * @description The minimum number of characters a user must enter.
   */
  minlength?: number

  /**
   * @description The type of the input element.
   * @default 'text'
   */
  type?: string

  /**
   * @description Whether the textarea can be resized.
   */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'

  /**
   * @description Controls the autocomplete behavior of an input element.
   * @default 'off'
   */
  autocomplete?: string

  /**
   * @description Placeholder text for the input.
   */
  placeholder?: string

  /**
   * @description The form the input element belongs to.
   */
  form?: string

  /**
   * @description Whether the input field is read-only.
   * @default false
   */
  readonly?: boolean

  /**
   * @description Whether the input can be cleared.
   * @default false
   */
  clearable?: boolean

  /**
   * @description Specifies the tabbing order of an element.
   * @default 0
   */
  tabindex?: number

  /**
   * @description Whether the input should automatically receive focus when the page loads.
   * @default false
   */
  autofocus?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div class="cloudea-input">
    <input
      :id="props.id"
      v-model="model"
      :maxlength="props.maxlength"
      :minlength="props.minlength"
      :resize="props.resize"
      :type="props.type"
      :disabled="props.disabled"
      :autocomplete="props.autocomplete"
      :form="props.form"
      :readonly="props.readonly"
      :tabindex="props.tabindex"
      :autofocus="props.autofocus"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
    />
    <label :class="['input-placeholder', isFocused ? 'active' : null]">
      {{ props.placeholder }}
    </label>
    <span
      class="input-clear"
      v-if="showClear"
      @mousedown.prevent=""
      @click="clear"
    >
      <Icon name="lucide:circle-x" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.cloudea-input {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 5px;

  input {
    border: none;
    background-color: var(--cloudea-white);
    border-bottom: 2px solid var(--cloudea-trans-blue-2);
    color: var(--cloudea-font-color-3);
    margin: 7px 0;
    outline: none;
    padding: 10px;
    width: 100%;
    transition: border-bottom 0.6s;

    &:focus {
      border-bottom: 2px solid var(--cloudea-blue-5);
    }

    &:focus ~ .input-placeholder {
      color: var(--cloudea-blue-5);
    }

    &:focus ~ .input-clear {
      display: block;
    }
  }

  .input-placeholder {
    position: absolute;
    left: 10px;
    color: var(--cloudea-font-color-0);
    pointer-events: none;
    transition: all 0.3s ease;

    &.active {
      font-size: 10px;
      transform: translate(-10px, -25px);
    }
  }

  .input-clear {
    position: absolute;
    right: 10px;
    color: var(--cloudea-font-color-0);
    cursor: pointer;
    display: none;
  }
}
</style>
